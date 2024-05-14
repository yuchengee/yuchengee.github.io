---
slug: zookeeper-java-use
title: zookeeper的Java客户端基本使用
date: 2024-04-02
authors: yuchengee
tags: [java,zookeeper,中间件,分布式]
keywords: [java,zookeeper,中间件,分布式]
---
Java中如何使用zookeeper。
<!--truncate-->
Java可以使用apache的zk客户端包来使用zookeeper，使用apache curator的zk客户端包来使用zookeeper分布式锁。

### 基本操作
apache.zookeeper 简单使用，包含查询、创建、修改、删除、监听等基本操作的代码。
```java  title='MyWatcher' icon='logos:java'
import org.apache.zookeeper.*;
import org.apache.zookeeper.data.Stat;

import java.nio.charset.StandardCharsets;
import java.util.List;

public class MyWatcher implements Watcher {
    private ZooKeeper zooKeeper;
    private final String path;
    private volatile boolean keep;

    public MyWatcher(String path, boolean keep) {
        this.path = path;
        this.keep = keep;
    }

    public void setZooKeeper(ZooKeeper zooKeeper) {
        this.zooKeeper = zooKeeper;
    }

    public void stopKeep() {
        this.keep = false;
    }

    @Override
    public void process(WatchedEvent event) {
        System.out.println("event:" + event);
        if (keep) {
            try {
                zooKeeper.exists(path, this);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    }

    public static void main(String[] args) throws Exception {
        String path = "/testwatch";
        MyWatcher myWatcher = new MyWatcher(path, true);
        ZooKeeper zooKeeper = new ZooKeeper("10.10.10.108:2181", 4000, myWatcher);
        myWatcher.setZooKeeper(zooKeeper);

        new Thread(() -> {
            try {
                Thread.sleep(3000);
                // 创建
                if (zooKeeper.exists(path, false) == null) {
                    zooKeeper.create(path, "0".getBytes(StandardCharsets.UTF_8), ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
                }

                // 查询
                byte[] data = zooKeeper.getData(path, false, new Stat());
                System.out.println(path + "当前value:" + new String(data));

                Thread.sleep(5000);
                // 修改,version表示当前的dataVersion,-1表示不检查版本，必须与zk中的版本一致才能修改成功。
                zooKeeper.setData(path, "1".getBytes(StandardCharsets.UTF_8), -1);

                Thread.sleep(5000);
                // 创建字节点
                String childPath = path + "/test";
                zooKeeper.create(childPath, "10".getBytes(StandardCharsets.UTF_8), ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
                byte[] cdata = zooKeeper.getData(childPath, false, new Stat());
                System.out.println(childPath + "当前value:" + new String(cdata));
                // 查询子节点
                List<String> children = zooKeeper.getChildren(path, false);
                System.out.println(children);

                Thread.sleep(5000);
                // 删除
                for (String child : children) {
                    zooKeeper.delete(path + "/" + child, -1);
                }
                // 没有deleteAll，只能先删除所有的子节点，然后在删除当前节点。
                zooKeeper.delete(path, -1);
                myWatcher.stopKeep();// 停止监听
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }).start();
        System.in.read();
    }
}

```


### 分布式锁
核心思想：当客户端要获取锁，则创建节点，使用完锁，则删除该节点。
1. 客户端获取锁时，在lock节点下创建临时顺序节点。

2. 然后获取lock下面的所有子节点，客户端获取到所有的子节点之后，如果发现自己创建的子节点序号最小，那么就认为该客户端获取到了锁。使用完锁后，将该节点删除。

3. 如果发现自己创建的节点并非lock所有子节点中最小的，说明自己还没有获取到锁，此时客户端需要找到比自己小的那个节点，同时对其注册事件监听器，监听删除事件。

4. 如果发现比自己小的那个节点被删除，则客户端的 Watcher会收到相应通知，此时再次判断自己创建的节点 是否是lock子节点中序号最小的，如果是则获取到了锁，如果不是则重复以上步骤继续获取到比自己小的一个节点并注册监听。

**可重入锁**
1. 首先根据当前线程去查看是否存在锁数据，且如果此时这个线程正在使用这个锁，则改变锁的状态次数+1，并直接返回true。
2. 没有获取到锁数据则进入else  
 先去创建锁数据，然后排队等待获取锁
3. 获取到返回true，否则false

InterProcessMutex实现的锁机制是 **公平且互斥** 的，公平的方式是按照每个请求的顺序进行排队的。

zk分布式锁，代码中模拟50个线程去执行锁的抢占，抢到了就对模拟资源进行操作。
```java  title='ZKLock' icon='logos:java'
// 
import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.CuratorFrameworkFactory;
import org.apache.curator.framework.recipes.locks.InterProcessMutex;
import org.apache.curator.retry.ExponentialBackoffRetry;

import java.nio.charset.StandardCharsets;

/**
 * 1、InterProcessMutex：分布式可重入排它锁
 * 2、InterProcessSemaphoreMutex：分布式排它锁
 * 3、InterProcessReadWriteLock：分布式读写锁
 */
public class ZKLock {
    private static volatile int soe = 0;

    private static CuratorFramework getZkClient() {
        String zkServerAddress = "10.10.10.108:2181";
        ExponentialBackoffRetry retryPolicy = new ExponentialBackoffRetry(1000, 3, 5000);
        CuratorFramework zkClient = CuratorFrameworkFactory.builder()
                .connectString(zkServerAddress)
                .sessionTimeoutMs(5000)
                .connectionTimeoutMs(5000)
                .retryPolicy(retryPolicy)
                .build();
        zkClient.start();
        return zkClient;
    }

    public static void testLock() throws InterruptedException {
        CuratorFramework zkClient = getZkClient();
        String lockPath = "/lock";
        String dataPath = "/data1";
        InterProcessMutex lock = new InterProcessMutex(zkClient, lockPath);
        //模拟50个线程抢锁
        for (int i = 0; i < 50; i++) {
            final int threadNo = i;
            new Thread(() -> {
                try {
                    lock.acquire();
                    soe++;
                    System.out.println("第" + threadNo + "线程获取到了锁,当前资源:" + soe);
                    byte[] data1s = zkClient.getData().forPath(dataPath);
                    int i1 = Integer.parseInt(new String(data1s)) + 1;
                    zkClient.setData().forPath(dataPath, String.valueOf(i1).getBytes(StandardCharsets.UTF_8));
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    try {
                        lock.release();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }).start();
        }
    }
}

```

执行时，可以查看zk的节点，发现lock节点下有很多子结点，结尾是数字。  
`ls /lock`
```
[_c_0bd7db98-7293-4ebf-868c-644ed8a9d2cc-lock-0000000025, _c_0df4e4df-fb23-4a13-8e81-09bbc7a49810-lock-0000000029, _c_0ee81dd1-990d-4f0e-b447-bd2fd231180e-lock-0000000045, _c_0f98f7a3-5ba4-411a-a2fb-6f6b85dc7c42-lock-0000000034, _c_1419f252-9e91-453e-b1f4-185b839e17e4-lock-0000000039, _c_298da81b-938e-482d-a8a8-6be2baad23a1-lock-0000000026, _c_2db5d9ab-f80f-4906-98fb-da76832892e2-lock-0000000023, _c_400d0e0e-830f-4aa7-b977-cf7d206c9a0c-lock-0000000013, _c_4212d798-7447-4722-b7a1-2c8729b5a935-lock-0000000021, _c_44f6844a-8392-4958-b384-c03c14e73fc2-lock-0000000018, _c_4c20e129-d7e7-4717-98f2-8def8f4f81c0-lock-0000000032, _c_52196fa9-84ab-4058-9791-584b48c1766a-lock-0000000036, _c_557ab098-bc8e-452b-9f08-aaaab742bcbb-lock-0000000015, _c_686501a2-2119-46ae-b37d-64149ef9d328-lock-0000000033, _c_6e0656c2-7a18-4eb7-b978-b4bc9c5e5e9a-lock-0000000035, _c_72051f59-30b0-47fa-bea4-93d50e255b6a-lock-0000000042, _c_7463ce8e-ddc8-4634-81ea-1edd9c67d09a-lock-0000000048, _c_74828e3e-a403-49a9-979e-68cfca13b483-lock-0000000030, _c_76431b09-07ab-4fbf-891a-0ffeb1e3c620-lock-0000000007, _c_79733a94-c30f-43c0-88d2-25ce3da355d2-lock-0000000017, _c_7a5b19b7-3c2c-46d2-bfe9-e248076674e5-lock-0000000005, _c_7b5ebf62-ef21-4bd8-a39c-2fa7e60794c9-lock-0000000040, _c_7ed3e24e-33f7-4630-a6e8-5485c1a16c0f-lock-0000000031, _c_7fac0a53-7f68-4436-bfb3-b7a2e5116099-lock-0000000020, _c_901dd924-dbee-45f8-b482-2c73d6151dc1-lock-0000000014, _c_9e523745-1390-4028-a076-08ae9d7f830b-lock-0000000038, _c_a0e810bd-f5b4-49d9-a8b5-b82e47fde533-lock-0000000016, _c_a5cc6d4f-c74e-4bfc-b869-5be69dce2f4d-lock-0000000027, _c_a62bbac3-1d5c-4c72-b795-a1afe983a3ab-lock-0000000028, _c_a70a249f-c59c-4af0-b997-58240eb615da-lock-0000000010, _c_a93c7c02-1547-4556-a823-cff62dc1440f-lock-0000000041, _c_ad948f19-a549-40e3-b830-f054371b344f-lock-0000000047, _c_cce3c1fa-9d28-49e3-a783-0b072aac3c44-lock-0000000019, _c_cd4e129f-d45c-429d-8727-1fd8b94fac23-lock-0000000037, _c_cfdb66b3-0b40-4a04-8a42-79960f1ef398-lock-0000000012, _c_d121b78f-812c-49d9-8035-a856aaa4d933-lock-0000000006, _c_d2aac738-edfe-4ab9-8e5a-252e113b20a1-lock-0000000043, _c_d593721a-bfc3-4ef6-86a2-84d4c4484ba2-lock-0000000008, _c_da9dfacc-2ad0-40bd-b61a-a10ecf62e715-lock-0000000049, _c_dbfd9a99-d2e9-471f-b167-dd3067d7a1cc-lock-0000000046, _c_df7e74d7-2b7a-4bf7-a386-b48fd472a02f-lock-0000000044, _c_e3f65e06-70df-41a2-9a05-4cb60a5e7412-lock-0000000022, _c_e7d02737-2fd8-46e0-84ad-5ec41689cca1-lock-0000000024, _c_e9338bae-dacf-4570-aa7b-824cfec4b004-lock-0000000011, _c_f9f36d97-35d9-476c-8daf-46986790e431-lock-0000000009]
```