---
slug: commons-io-filenameutils
title: commons-io中Filenameutils关于文件名的方法
date: 2023-12-11
authors: yuchengee
tags: [java,io,文件]
keywords: [java,io,文件]
---
commons-io中 Filenameutils 类提供了很多关于文件名的方法，使用这个类可以减少代码量，提高工作效率。
<!--truncate-->

`String filePath = "/home/wd/tempData/aaa.txt";`

|方法   |作用   |结果   |
| ------------ | ------------ | ------------ |
|FilenameUtils.getFullPath(filePath)   |获取父目录，看最后一个是否是 /   |/home/wd/tempData/   |
|FilenameUtils.getBaseName(filePath)   |获取不带后缀的文件名  |aaa   |
|FilenameUtils.getExtension(filePath)   |获取文件后缀，没有则为空  |txt   |
|FilenameUtils.getName(filePath)   |获取文件名  |aaa.txt   |

灵活运用这个类，可以少写很多代码。