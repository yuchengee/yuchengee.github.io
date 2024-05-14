---
slug: kafka-useage
title: kafka安装与简单使用
date: 2023-02-27
authors: yuchengee
tags: [kafka,中间件,分布式]
keywords: [kafka,中间件,分布式]
---
kafka安装与简单使用
<!--truncate-->

参考 https://blog.csdn.net/u010889616/article/details/80641922

### 1. 单机
安装包：https://kafka.apache.org/downloads

解压：tar xvf kafka_2.12-3.3.1.tgz

创建数据目录：/usr/local/kafka/logs

修改配置: vim config/server.properties
```
broker.id=1
listeners=PLAINTEXT://:9092
# 对外目录
advertised.listeners=PLAINTEXT://xx.xx.xx.xx:9092
log.dirs=/usr/local/kafka/logs
```

启动zk:
bin/zookeeper-server-start.sh -daemon config/zookeeper.properties

启动kafka
```
# 前端启动
bin/kafka-server-start.sh config/server.properties
# 后端启动
bin/kafka-server-start.sh -daemon config/server.properties
# 停止
bin/kafka-server-stop.sh
```

使用：
```
# 查看 topic 列表
bin/kafka-topics.sh --list --bootstrap-server localhost:9092

# 创建topic
bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test1
# partitions:kafka分区数量，默认1
# replication-factor：分区的复制因子数量，默认1

# 删除主题
bin/kafka-topics.sh --delete --bootstrap-server localhost:9092 --topic test1

# 查看topic描述情况
bin/kafka-topics.sh --describe --topic test1 --bootstrap-server localhost:9092

# 创建生产者
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test1

# 创建消费者
bin/kafka-console-consumer.sh --topic test1 --from-beginning --bootstrap-server localhost:9092

```

### 2. 集群
使用docker进行搭建kafka集群。

docker依赖zk，所以需要先搭建zk集群。

zk集群
```
#下载zk安装包，分别在3个机器上安装zk，形成zk集群

# 解压后，分别修改配置文件 zoo.cfg
server.1=x.x.x.x:2888:3888
server.2=x.x.x.x:2888:3888
server.3=x.x.x.x:2888:3888

# 分别创建如下文件
echo 1 > /tmp/zookeeper/myid
echo 2 > /tmp/zookeeper/myid
echo 3 > /tmp/zookeeper/myid

# 分别启动后形成集群
bin/zkServer.sh start

# 查看节点状态（leader/follower）
bin/zkServer.sh status
```

kafka集群
```
# 启动3个容器作为kafka节点，其中 openjdk18是含有jdk8的镜像
docker run -it --name kafka1 -v /data6/cyu/testdata/:/data/ -p 9093:9093 openjdk18:v1.0
docker run -it --name kafka2 -v /data6/cyu/testdata/:/data/ -p 9094:9094 openjdk18:v1.0
docker run -it --name kafka3 -v /data6/cyu/testdata/:/data/ -p 9095:9095 openjdk18:v1.0

# 分别修改配置 config/server.properties
broker.id=1
broker.id=2
broker.id=3

listeners=PLAINTEXT://:9093
listeners=PLAINTEXT://:9094
listeners=PLAINTEXT://:9095

advertised.listeners=PLAINTEXT://x.x.x.x:9093   # 这里需要改为 外部可以访问到的 ip地址
advertised.listeners=PLAINTEXT://x.x.x.x:9094
advertised.listeners=PLAINTEXT://x.x.x.x:9095

zookeeper.connect=x.x.x.x:2181,x.x.x.x:2181,x.x.x.x:2181

# 分别启动
bin/kafka-server-start.sh -daemon config/server.properties

# topic主题
bin/kafka-topics.sh --create --bootstrap-server x.x.x.x:9093 --replication-factor 1 --partitions 1 --topic test1
bin/kafka-topics.sh --list --bootstrap-server x.x.x.x:9093

# 生产者
bin/kafka-console-producer.sh --broker-list x.x.x.x:9093 --topic test1

# 消费者
bin/kafka-console-consumer.sh --topic test1 --from-beginning --bootstrap-server x.x.x.x:9093
```