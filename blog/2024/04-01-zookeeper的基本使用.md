---
slug: zookeeper-basic-use
title: zookeeper的基本使用
date: 2024-04-01
authors: yuchengee
tags: [zookeeper,中间件,分布式]
keywords: [zookeeper,中间件,分布式]
---
zookeeper的安装与基本命令
<!--truncate-->
之前记录过 kafka安装与简单使用，本文记录 Zookeeper 安装与简单使用。

[kafka安装与简单使用](/2023/02-27-kafka.md)

### 什么是Zookeeper
ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，是Hadoop和Hbase的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。

### 安装
  1. java环境
  2. 下载zk安装包  
    https://zookeeper.apache.org/releases.html#download
  3. 修改配置   
-  创建data目录用于存放数据，log目录用于存放日志  
-  在conf文件夹中找到zoo_sample.cfg文件复制一份并改名为zoo.cfg
```
dataDir=../data
dataLogDir=../log
... 其他配置
```


### 启动服务
  
  1. 启动/关闭服务  
    `bin/zkServer.sh start/stop`
  2. 查看状态（leader/follower）  
    `bin/zkServer.sh status`
  3. 进入客户端命令行，如果不加参数，默认当前环境的2181端口zk  
    `bin/zkCli.sh -server 127.0.0.1:2181`
 
在conf/zoo.cfg 中可以修改端口号和其他各种配置。

### 集群部署
#### 在各个节点中配置zoo.cfg
```txt  title='zoo.cfg' icon='logos:txt'
server.1=x.x.x.x:2888:3888
server.2=x.x.x.x:2888:3888
server.3=x.x.x.x:2888:3888
```

端口2181由zookeeper客户端使用，用于连接到zookeeper服务器；  
端口2888由对等zookeeper服务器使用，用于互相通信；  
端口3888用于领导选举。您可以选择自己喜欢的任何端口。通常使用相同的端口。
	
#### 每个节点分别创建如下文件
echo 1 > /tmp/zookeeper/myid
echo 2 > /tmp/zookeeper/myid
echo 3 > /tmp/zookeeper/myid  

然后就可以启动集群了。


### 基本命令
 
1. 新增节点 （临时 -e ,带序号 -s，默认创建的节点是: 永久+不带序号）  
 ```
create -e -s /person/zs "张三"
 ```

2. 修改节点的值  
 ```
 set /person/zs  "李四"
 ```
 
3. 删除节点  
 ```
 # 普通删除
  delete /person/zs   
 # 递归删除 
  deleteall /person/zs  
 ```
 
4. 查询节点结构+值+状态
 ```
#查询子节点[详细]结构 
  ls  [-s] /person   

# 监听节点结构的变化 （比如集群中，在node1输入命令，在node2修改节点，只能监听一次，第二次node2修改,node1不会监听）   
  ls  [-w] /person     
  
# 查询节点[详细]值
  get [-s] /person/zs  

# 监听节点值的变化   （比如集群中，在node1输入命令，在node2修改节点，只能监听一次，第二次node2修改,node1不会监听）  
  get [-w] /person/zs  
 
# 查看节点状态 
  stat /person        
 ```
 
5. ls -s 查询节点详细信息，内容说明
- czxid：创建节点的事务 zxid，每次修改 ZooKeeper 状态都会产生一个 ZooKeeper 事务 ID。  
事务ID 是 ZooKeeper 中所 有修改总的次序。每次修改都有唯一的 zxid，如果 zxid1 小于zxid2，那么 
     zxid1 在 zxid2 之前发生。
- ctime：znode 被创建的毫秒数（从 1970 年开始）
- mzxid：znode 最后更新的事务 zxid
- mtime：znode 最后修改的毫秒数（从 1970 年开始）
- pZxid：znode 最后更新的子节点 zxid
- cversion：znode 子节点变化号，znode 子节点修改次数
- dataversion：znode 数据变化号，每次修改都会加1
- aclVersion：znode 访问控制列表的变化号
- ephemeralOwner：如果是临时节点，这个是 znode 拥有者的 session id。如果不是临时节点则是0。 
- dataLength：znode 的数据长度
- numChildren：znode 子节点数量


### 其他
在 Zookeeper 中，存在一些默认节点，它们是在 Zookeeper 服务启动时自动创建的。这些默认节点对于 Zookeeper 的正常运行和基本功能至关重要。以下是一些常见的默认节点：

1. **/zookeeper**: 这是 Zookeeper 中的一个特殊节点，它包含了关于 Zookeeper 服务本身的状态信息。通常，这个节点不会被客户端直接使用。

2. **/brokers**: 在使用 Zookeeper 作为 Kafka 的元数据存储时，这个节点用于存储有关 Kafka 集群中所有 broker 的信息。

3. **/config**: 这个节点用于存储集群的配置信息，例如集群的 ID 和版本。

4. **/consumers**: 在 Kafka 中，这个节点用于存储消费者组的信息。

5. **/locks**: 这个节点可以用于存储分布式锁的相关信息。

6. **/ephemerals**: 这个节点下包含了所有临时节点（ephemeral nodes）。临时节点是与客户端会话绑定的节点，当会话结束时，这些节点也会被自动删除。

7. **/ids**: 这个节点用于存储客户端会话 ID 的信息。

8. **/quota**: 这个节点用于存储关于 Zookeeper 配额管理的信息。

9. **/system**: 这个节点包含了系统级别的信息，例如集群的统计数据。

这些默认节点通常不需要客户端直接操作，它们是 Zookeeper 内部管理和维护的一部分。然而，了解这些节点的存在对于理解 Zookeeper 的工作原理和调试问题是很有帮助的。

:::tip
请注意，上述节点可能会根据 Zookeeper 的版本和配置有所不同。在实际使用中，你应该参考 Zookeeper 的官方文档和你的集群配置来了解具体的默认节点信息。此外，一些应用程序（如 Kafka）可能会在 Zookeeper 中创建自己的默认节点来存储元数据和配置信息。在使用这些应用程序时，你应该遵循它们的文档来了解和管理这些节点。
:::