---
slug: java-semaphore-thead
title: Semaphore信号量类
date: 2023-10-23
authors: yuchengee
tags: [java,semaphore,高并发]
---
`synchronized` 和 `ReentrantLock` 都是一次只允许一个线程访问某个资源，而`Semaphore`(信号量)可以用来控制同时访问特定资源的线程数量。  
原理是AQS
<!--truncate-->
### 场景
1. 限流，限制对某一资源的并发访问量，如数据库，线程池等。
2. 多线程协调，如在生产者-消费者模型中，控制缓冲区的访问，确保生产者和消费者之间的同步。
3. 任务协调， 例如限制同时执行任务数量，或者在特定条件下暂停任务的执行。
4. 信号通知机制，用来通知等待某种条件的线程可以继续执行。

### 模式
- **公平模式：** 调用 `acquire()` 方法的顺序就是获取许可证的顺序，遵循 FIFO；
- **非公平模式：** 抢占式的。

### 用法  
`Semaphore` 通常用于那些资源有明确访问数量限制的场景比如限流（仅限于单机模式，实际项目中推荐使用 Redis +Lua 来做限流）
```java
public class SemaphoreTest {
    public static void main(String[] args) {
        /*
        // 初始共享资源数量，同一时刻 N 个线程中只有 5 个线程能获取到共享资源，其他线程都会阻塞
        final Semaphore semaphore = new Semaphore(5);
        // 获取1个许可
        semaphore.acquire();
        // 释放1个许可
        semaphore.release();
         */
        long l = System.currentTimeMillis();
        final Semaphore semaphore = new Semaphore(5);
        for (int i = 0; i < 10; i++) {
            String no = String.valueOf(i);
            new Thread(() -> {
                try {
                    semaphore.acquire();
                    Thread.sleep(1000);
                    System.out.println(no + ":" + (System.currentTimeMillis() - l));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    semaphore.release();
                }
            }).start();
        }


    }
}

6:1039
4:1039
0:1039
3:1039
1:1039
9:2039
7:2039
2:2039
8:2039
5:2039

结果说明，每次最多5个线程一起执行
```