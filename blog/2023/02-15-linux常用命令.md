---
slug: linux-cmd-useage
title: linux常用命令
date: 2023-02-15
authors: yuchengee
tags: [linux]
---
linux常用命令
<!--truncate-->
### 1. 解压打包
```
解压：tar xvf aaa.tar
压缩：tar zcvf /data/soft/shp.tar.gz /data/soft/dxf/ --exclude=*.zip		# 过滤zip文件
```

### 2. 查看日志
```
tail -f log.log 动态查看日志 
tail -f log.log | grep 'Bi\|error line\|error'  # 只查看指定内容 日志
tail -f log.log | grep -Ev '(DownloadTask|DownloadExec|wms)' # 不看指定内容的日志 
```

### 3. 查看系统信息
```
cat /proc/version //或者
cat /etc/redhat-release

查看系统支持的编码:iconv -l
```

### 4. 修改时间
```
date -s "4/30/2018 10:00"
```

### 5. 用户
```
创建：adduser es
设置密码：passwd es
目录权限：chown -R es:es /data
```

### 6. 端口
```
查看进程端口：netstat -nap|grep 13000
查看端口占用：lsof -i:5432
```

### 7. 文件
```
统计文件个数：
	ls -l|grep "^-"|wc -l
查询某文件行数：
	wc -l 文件名
查找文件/目录：
	find . –type d –name zxwinmo-b-support-zgis-web
找出大于 3000k的文件并删除：
	find . -type f -size +1000k|xargs rm -rf
统计文件中某个字符出现的次数：
	grep -o "字符" 文件名 | wc -l
文件太多删除不了时（/bin/rm: argument list too long）：
	ls | xargs -n 9 rm -rf
查看目录总大小:
	du -sh /data6/

软连接:
	ln -s 源目标文件  软链文件

全局替换：
	sed -i "s/str1/str2/g" test.txt	# 将str1替换成str2。-i表示修改文件；s表示替换；g表示全局

从远程下载文件：
	scp xx.xx.xx.xx:/data6/xxx.tar.gz  .
上传文件到远程：
	scp 本地文件 10.9.224.116:/data6/
```

### 8. 防火墙
```
查询默认区域：
	firewall-cmd --get-default-zone
哪个区域处于激活状态：
	firewall-cmd --get-active-zones
配置 IP 白名单：
	firewall-cmd --permanent --zone=trusted --add-source=x.x.x.0/24
	firewall-cmd --reload
确认 trusted 区域是否设置正确：
	firewall-cmd --zone=trusted --list-all
切换默认区域从 public 到 drop：
	firewall-cmd --set-default-zone=drop
将默认网卡 eth0 分配给 drop 区域：
	firewall-cmd --permanent --zone=drop --change-interface=eth0

使白名单最终生效：
	firewall-cmd --reload

添加开放端口，不用reload
		firewall-cmd --add-port=8080/tcp
查看开放端口
		 firewall-cmd --list-ports
```

### 9. curl
```
curl -X POST "127.0.0.1:8081/aaa/uploadFile" \
-F "appName=ngi-support-init" \
-F "appVersionNo=01.01.02.00.n01" \ 
-F "filename=@/data/tempData/data.zip" \
-H "Cookie:CODE-8081=822211804_0b8d139a97894defaed57a0c09e530a5;sessionid=822211804_0b8d139a97894defaed57ac09e530a5"  
--referer https://10.231.43.190:14290/webgis/map.htm
```

### 10. 服务器字体
```
第一步：在/usr/share/fonts目录下建立一个子目录，例如chinese，命令如下：
# mkdir /usr/share/fonts/chinese

第二步：将字体文件复制到该目录下，例如这两个文件放在/root/desktop下，命令如下：
# cd /root/desktop
# cp font.ttf /usr/share/fonts/chinese/

第三步：建立字体索引信息，更新字体缓存，命令如下：
# cd /usr/share/fonts/chinese
# mkfontscale
# mkfontdir
# fc-cache
```

### 11. 简单排查java程序
```
top -c  							查看CPU使用最高的进程pid
top -H -p pid						查询上述进程的 使用cpu最高线程 pid,把该pid转成16进制
printf "%x\n" pid 					转16进制
jstack 20835|grep 5163 -A 30		找到该线程正在做什么，可以找出该线程对应的java 方法

找到java的pid后 查看线程相关的
jstack -l 63|grep gis

查看系统内存使用
free -g

jps	查看所有java进程，输出JVM中运行的进程状态信息
-m	输出传入main方法的参数
-l	输出main类或Jar的全限名
=============================================================================================
查看gc
监控jvm，每5秒打印一次，循环100次
gcutil/gc
jstat -gcutil 33 1000 100
S0C：第一个幸存区的大小
S1C：第二个幸存区的大小
S0U：第一个幸存区的使用大小
S1U：第二个幸存区的使用大小
EC：伊甸园区的大小
EU：伊甸园区的使用大小
OC：老年代大小
OU：老年代使用大小
MC：方法区大小
MU：方法区使用大小
CCSC:压缩类空间大小
CCSU:压缩类空间使用大小
YGC：年轻代垃圾回收次数
YGCT：年轻代垃圾回收消耗时间
FGC：老年代垃圾回收次数
FGCT：老年代垃圾回收消耗时间
GCT：垃圾回收消耗总时间
=============================================================================================
查看堆
jmap -histo 21 | head -n 20 // pid是进程号，20表示排名前二十，instances表示实例数量，bytes表示占用内存大小
 num     #instances         #bytes  class name
----------------------------------------------
   1:     156859803     7603445776  [C
   2:     150807729     3619385496  java.lang.String
   3:        260011     1602048120  [I
   ...
=============================================================================================
jmat导出内存对象 把java的堆以hprof 二进制格式输出到一个文件中，然后通过jhat或其他工具来查看
jmap -dump:format=b,file=dump.hprof pid

jhat dump.hprof

查询java应用内存使用
	jmap -heap 44
```
