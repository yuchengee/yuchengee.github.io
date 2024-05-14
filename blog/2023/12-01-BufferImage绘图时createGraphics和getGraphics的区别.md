---
slug: java-graphics2d-get-create
title: BufferImage绘图时createGraphics和getGraphics的区别
date: 2023-12-01
authors: yuchengee
tags: [java,image]
keywords: [java,image]
---
在 BufferImage 中有两个方法，createGraphics 和 getGraphics，一直不明白这两个有什么区别。
<!--truncate-->

翻看源码，发现 getGraphics 方法里面调用了 createGraphics 方法
```java  title='getGraphics' icon='logos:java'
/**
    * This method returns a {@link Graphics2D}, but is here
    * for backwards compatibility.  {@link #createGraphics() createGraphics} is more
    * convenient, since it is declared to return a
    * <code>Graphics2D</code>.
    * @return a <code>Graphics2D</code>, which can be used to draw into
    *          this image.
    */
public java.awt.Graphics getGraphics() {
    return createGraphics();
}
```

这个意思就是，getGraphics返回的是 Graphics2D 对象，但是方法返回类型是 Graphics，是为了向后兼容。

createGraphics 方法更方便，返回的就是 Graphics2D对象。

Graphics2D类继承了Graphics，扩展了很多方法，提供对几何图形、坐标转换、颜色管理以及文本布局和更复杂的控制。Graphics2D可以更好地画出想要的效果。

所以直接用 createGraphics 方法。