---
slug: docker-time-set
title: docker设置容器时间
date: 2022-12-27
authors: yuchengee
tags: [docker,linux]
---

有时候docker起了一个容器，发现容器里面的时间和外面不一样，相差很大，想要修改时间，却发现没有权限
```
date -s "2022-12-27 12:00:00"
```
date: can't set date: Operation not permitted

这时可以用下面的方法修改。

1. 把宿主机的时间文件拷贝进容器，没有目录时，需创建
```
docker cp /usr/share/zoneinfo/Asia/Shanghai 容器id:/usr/share/zoneinfo/Asia
```
2. 进入容器，设置时间
```
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
3. 查看时间
```
/ # date
Tue Dec 27 12:00:11 CST 2022
```