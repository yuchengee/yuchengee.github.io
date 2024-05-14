---
slug: nginx-sample
title: nginx简单使用
date: 2022-01-16
authors: kuizuo
tags: [nginx]
keywords: [nginx]
---

最简单的方式是使用docker，这样就不要下载哪些依赖了
### 1. 下载
    docker pull nginx:1.17.5
### 2. 配置
创建conf目录，然后写入nginx.conf
```php
server {
	listen       80;
	server_name  www.xxx.com;
	
	// 访问 www.xxx.com 时,nginx自动将请求转发到 localhost:8181/xxx/
	location / {
	  proxy_pass http://localhost:8181/xxx/;
	}

	error_page   500 502 503 504  /50x.html;
	location = /50x.html {
	  root   html;
	}
}
```
### 3. 启动
    docker run -d --name nging --network host -v /wrw/conf:/etc/nginx/conf.d nginx:1.17.5
