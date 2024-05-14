---
slug: java-zip-wr
title: java读写zip压缩包
date: 2023-06-01
authors: yuchengee
tags: [java,io,zip]
---
zip压缩是一种常用的文件压缩方式，经常需要使用这种文件来传输和存储信息。

本文记录java中读写zip压缩包的方式。
<!--truncate-->
### 读压缩包
读取文本
```java
public static List<String> readDataFromZip(File zipFile, String entryKey) {
        List<String> lines = new ArrayList<>();
        if (!zipFile.exists()) return lines;
        try (ZipFile zf = new ZipFile(zipFile);
             BufferedReader br = new BufferedReader(new InputStreamReader(zf.getInputStream(new ZipEntry(entryKey)), StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) {
                lines.add(line);
            }
            return lines;
        } catch (ZipException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
}

List<String> data = readDataFromZip(new File("/data/data.zip"), "1/2.txt");
```

读取图片
```java
public static BufferedImage readImageFromZip(File zipFile, String tileKey) {
        if (!zipFile.exists()) return null;
        try (ZipFile zf = new ZipFile(zipFile)) {
            ZipEntry entry = zf.getEntry(tileKey);
            return ImageIO.read(zf.getInputStream(entry));
        } catch (ZipException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
}

BufferedImage bufferedImage = readImageFromZip(new File("/data/img.zip"), "16/51701-26893.png");
```

### 写压缩包
写文本
```java
public static void writeDataToZip(List<String> datas, String zipPath) {
        try (ZipOutputStream out = new ZipOutputStream(new FileOutputStream(CfgManager.checkUpPathStr(zipPath)), StandardCharsets.UTF_8);
             BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(out, StandardCharsets.UTF_8))) {
            out.putNextEntry(new ZipEntry("data" + File.separator + "1"));
            for (String data : datas) {
                bw.write(data);
                bw.newLine();
            }
            bw.flush();
            out.flush();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

}

	writeDataToZip(Lists.newArrayList("aaaa", "bbb"), "/data/a.zip");
```
写图片
```java
 public static void writeImgToZip(BufferedImage image, String zipPath) {
        try (ZipOutputStream out = new ZipOutputStream(new FileOutputStream(CfgManager.checkUpPathStr(zipPath)), StandardCharsets.UTF_8)) {
            out.putNextEntry(new ZipEntry("data" + File.separator + "aa.png"));
            ImageIO.write(image, "png", out);
            out.flush();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

 }

	BufferedImage imgage = ImageIO.read(new File("/data/aa.png"));
	writeImgToZip(imgage, "/data/img.zip");
```
