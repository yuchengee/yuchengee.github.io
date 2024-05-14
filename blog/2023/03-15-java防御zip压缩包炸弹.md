---
slug: java-upload-zip
title: java防御zip压缩包炸弹
date: 2023-03-15
authors: yuchengee
tags: [java,安全,上传,文件,zip]
---
java防御zip压缩包炸弹
<!--truncate-->

​	参考 https://www.cnblogs.com/lnlvinso/p/11838904.html

​			https://blog.csdn.net/j2IaYU7Y/article/details/82321082

​	压缩包炸弹英文为Arc.Bomb，是一款压缩包病毒。它通常只有几百KB，但是解压后会变成上百MB的庞然大物。它能劫持网银支付链接，把网购交易资金劫持到黑客账户。它能够利用特殊的技术逃过杀毒软件的云查杀系统。

​	一般来说，压缩文件的压缩比，就是压缩文件大小和解压缩之后文件大小的比例，超过20倍，一些杀毒即报告为压缩包炸弹，或者叫解压缩炸弹。



​	Java开发中经常遇到上传文件的场景，有时候需要上传压缩包文件，就有可能出现压缩包炸弹攻击的安全问题，需要做一些防御措施。

​	在实际开发中，需要结合自己的业务进行判定是否在zip炸弹。下面给出一个示例：

- 单个Entry超过2G
- 单个Entry压缩率超过200
- 总Entry超过1000个 (这个需要结合业务，一般每个压缩包最大不超过多少。如果是地图这种，entry总数很多的话，程序需要花很长时间)

```java
private static final long MAX_ENTRY_SIZE = 2 * 1024 * 1024 * 1024L;

public static boolean isZipBomb(MultipartFile file) {
        byte[] buffer = new byte[8 * 1024 * 1024];
        int numOfEntry = 0;
        try (ZipInputStream zipInputStream = new ZipInputStream(file.getInputStream(), Charset.forName("gbk"))) {
            ZipEntry zipEntry;
            while ((zipEntry = zipInputStream.getNextEntry()) != null) {
                long size = zipEntry.getSize();
                if (size > MAX_ENTRY_SIZE) return true;
                long compressedSize = zipEntry.getCompressedSize();
                // ZipEntry的size可能为-1，表示未知
                if (size == -1) {
                    int len;
                    while ((len = zipInputStream.read(buffer, 0, buffer.length)) != -1) {
                        size += len;
                    }
                }
                if (compressedSize != 0 && size / compressedSize > 200) return true;
                numOfEntry++;
                if (numOfEntry > 1000) return true;
                zipInputStream.closeEntry();
            }
        } catch (IOException e) { log.error(e.getMessage(), e); }
        return false;
}

```

​	

​	也可以计算总的entry size，也就是解压后的大小，和压缩包的大小的比率。这样有一个问题，如果在一堆正常的文件中夹杂一些有问题的entry，可能就识别不出来。

​	`Sum(entry.size) / zipFile.size > MAX`



​	各种文件的文件头标志：https://blog.csdn.net/rrrfff/article/details/7484109