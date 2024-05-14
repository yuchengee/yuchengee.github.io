---
slug: java-future-thread
title: java中Future用法
date: 2023-05-23
authors: yuchengee
tags: [java,多线程,高并发,future]
---
java中future用法
在Java编程中，Future是一个接口，用于表示一个异步计算的结果。它提供了一种获取异步操作结果的方式，并且可以在未来的某个时间点检查任务是否已经完成。
  
本文介绍Future的用法。
<!--truncate-->
```java
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class FutureTest {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        // 异步向电商S1询价
        Future<Integer> f1 = executor.submit(() -> {
            Thread.sleep(2000);
            return 1000;
        });
        // 异步向电商S2询价
        Future<Integer> f2 = executor.submit(() -> {
            return 999;
        });
        // 获取电商S1报价并异步输出
        executor.execute(() -> print(f1));
        // 获取电商S2报价并异步输出
        executor.execute(() -> print(f2));

        executor.shutdown();
    }

    public static void print(Future<Integer> f) {
        try {
            System.out.println(f.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```