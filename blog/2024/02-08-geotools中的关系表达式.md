---
slug: java-geotools-relep
title: geotools中的关系表达式
date: 2024-02-08
authors: yuchengee
tags: [java,geotools,sld,ecql]
keywords: [java,geotools,sld,ecql]
---
geotools中地理空间数据feature，如何根据条件进行查询、过滤、设置样式，这就需要一种查询语言。
<!--truncate-->
CQL（Common Query Language，通用查询语言）是一种用于构建空间数据查询的语言。它类似于 SQL（Structured Query Language），但专门用于地理空间数据的查询。

CQL 允许你在空间数据集合（如地图、矢量数据等）中执行各种查询操作，包括空间关系、属性过滤和复杂的逻辑操作。通过使用 CQL，你可以根据空间数据的特征和属性来筛选出满足特定条件的要素或对象。

然而，CQL有一些局限性。例如，它不能对ID过滤器进行编码，并且它要求属性位于任何比较运算符的左侧。因此，诞生了一个名为ECQL的CQL扩展版本。ECQL消除了CQL的局限性，提供了一种更灵活的语言，与SQL有更强的相似性。
 
### geotools中ECQL代码示例
```java title='encode' icon='logos:java'
// filter转换成xml格式
FilterTransformer filterTransformer = new FilterTransformer();
// 设置缩进
filterTransformer.setIndentation(4);

// 表达式转换成filter
Filter filter = ECQL.toFilter("kpi<0 or kpi>3");
// filter转成xml
String transform = filterTransformer.transform(filter);
System.out.println(transform);
// 使用 FilterFactory 创建 filter
FilterFactory filterFactory = CommonFactoryFinder.getFilterFactory();
PropertyIsNotEqualTo propertyIsNotEqualTo = filterFactory.notEqual(filterFactory.property("name"), filterFactory.property("null"));
String transform1 = filterTransformer.transform(propertyIsNotEqualTo);
System.out.println(transform1);
// filter转换成CQL
System.out.println(ECQL.toCQL(propertyIsNotEqualTo));
```

输出结果
```xml title='结果' icon='logos:xml'
<?xml version="1.0" encoding="UTF-8"?><ogc:Or xmlns="http://www.opengis.net/ogc" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
    <ogc:PropertyIsLessThan>
        <ogc:PropertyName>kpi</ogc:PropertyName>
        <ogc:Literal>0</ogc:Literal>
    </ogc:PropertyIsLessThan>
    <ogc:PropertyIsGreaterThan>
        <ogc:PropertyName>kpi</ogc:PropertyName>
        <ogc:Literal>3</ogc:Literal>
    </ogc:PropertyIsGreaterThan>
</ogc:Or>

<?xml version="1.0" encoding="UTF-8"?><ogc:PropertyIsNotEqualTo xmlns="http://www.opengis.net/ogc" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
    <ogc:PropertyName>name</ogc:PropertyName>
    <ogc:PropertyName>null</ogc:PropertyName>
</ogc:PropertyIsNotEqualTo>

name <> "null"
```

使用上面代码可以将表达式转成 filter和xml字符串。当不知道怎样写sld条件时，只需要写出表达式，就可以很方便的转出结果。