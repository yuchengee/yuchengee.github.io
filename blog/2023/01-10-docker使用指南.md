---
slug: docker-useage
title: docker使用指南
date: 2023-01-10
authors: yuchengee
tags: [docker,linux]
---
docker使用指南

### 1. 安装
下载离线安装包
	https://download.docker.com/linux/static/stable/x86_64/docker-20.10.7.tgz

1.解压
`tar xvf docker-18.06.1-ce.tgz`

2.复制二进制文件到bin目录下
`cp docker/* /usr/bin/`

3.启动docker进程
`dockerd &`

4.设置开机启动(可选)
`systemctl enable docker`

5.验证docker是否正常
`Docker version 或者 systemctl status docker`
<!--truncate-->
### 2. 镜像与容器操作
1.镜像相关操作

拉取镜像：`docker pull 镜像名称:版本号`

删除镜像：`docker rmi 镜像名称:版本号`

制作镜像: `docker build -t 镜像名:版本号 .`

容器保存为镜像：`docker commit 容器id 镜像名:版本号`

导出镜像为文件：`docker save -o 镜像名.tar 原始镜像名`

加载镜像文件：`docker load -i 镜像名.tar`


2.容器相关操作

启动容器:`docker run -p 5438:5432 -p 8878:8080 -v /data1/temp:/geo/src --name 容器名 -i -t 镜像名:版本号 /bin/bash`
- -p 5438:5432： 端口映射，本地端口与容器内端口对应
- -v： 挂载目录，本地目录与容器内目录对应
- –-name：为容器设置一个名字
- -i -t：使得容器启动后能获取该容器的shell
- -d：使容器以后台的形式运行，不会关闭
- -m 3g：容器内存限制3G
- --cpus 3：容器cpu限制3个cpu
- --network testnet：指定容器使用的网络，一般不用设置，可以设置为host使用本地的网络。
- /bin/bash：最后一个参数是运行时需要需要执行的命令，这里执行/bin/bash使得容器运行后启动一个bash供我们和容器交互。

进入容器：`docker exec -it 1b92115d37b8 /bin/sh`

退出容器：`exit或ctrl+p+q`

停止容器：`docker stop 1b92115d37b8`

停止后启动容器：`docker start 1b92115d37b8`

删除容器：`docker rm 1b92115d37b8`

后台运行容器：`-d -it`
> 有的镜像没有前台进程，起容器时，一运行就自动结束了。加上这个就不会自动关闭容器了。

查看容器具体信息：`docker inspect 1b92115d37b8`

查看容器内存cpu：`docker stats 1b92115d37b8`


容器更新
`docker container update [OPTIONS] CONTAINER [CONTAINER...]`
用于更新正在运行的容器的配置。这个命令允许你修改容器的各种属性，例如资源限制、环境变量、重启策略等，而无需停止和重新启动容器。  
常用选项：
- --memory 或 -m：设置容器可以使用的最大内存量。
`docker container update --memory="256m" <container_id_or_name>`

- --cpus：CPU数量
`docker container update --cpus 1 <container_id_or_name>`

- --memory-swap：设置容器可以使用的最大内存加交换空间的总量。
`docker container update --memory-swap="512m" <container_id_or_name>`

- --restart：更新容器的重启策略。
`docker container update --restart unless-stopped <container_id_or_name>`

`docker container update --help`


### 3. 网络相关
查看网络：`docker network ls`
创建bridge网络：`docker network create testnet`

网络故障，如果容器之间无法相互访问，ping,执行
```
firewall-cmd --permanent --zone=trusted --change-interface=docker0
firewall-cmd --reload
```
如果上面不起效，执行下面命令,解决各容器之间无法相互访问问题
```
firewall-cmd --zone=public --add-masquerade --permanent
firewall-cmd --reload
systemctl restart docker
```


有时候网络不通，容器启动时报下面的警告，导致服务器不能访问，解决方案参考 https://www.cnblogs.com/python-wen/p/11224828.html

`WARNING: IPv4 forwarding is disabled. Networking will not work.`

第一步：在宿主机上执行`echo "net.ipv4.ip_forward=1" >>/usr/lib/sysctl.d/00-system.conf`

第二步：重启network和docker(可以不重启)服务：`systemctl restart network && systemctl restart docker`


### 4. 容器内缺失一些命令
1. 容器里面没有vi的解决方法
```
apt-get update
apt-get install vim
```

### 5. 常用镜像容器启动命令
nginx
```
docker run -d --name nging --network host -v /wrw/conf:/etc/nginx/conf.d nginx:1.17.5
```

mysql
```
docker run -d -p 3308:3306 --name mysql0310 -v /mysqldata/conf/:/etc/mysql/conf.d  \
-v /mysqldata/logs:/var/log -v /mysqldata/data:/var/lib/mysql --restart=always \
-e MYSQL_ROOT_PASSWORD=root mysql:5.7
```