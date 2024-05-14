"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[412],{13610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var l=t(13274),a=t(79779);const o={slug:"gis-lonlat-transform",title:"Gis\u5f00\u53d1\u4e2d\u7ecf\u7eac\u5ea6\u8f6c\u6362",date:new Date("2023-09-13T00:00:00.000Z"),authors:"yuchengee",tags:["java","geotools","\u5730\u7406","\u5730\u56fe\u76f8\u5173"]},i=void 0,r={permalink:"/blog/gis-lonlat-transform",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2023/09-13-Gis\u5f00\u53d1\u4e2d\u7ecf\u7eac\u5ea6\u8f6c\u6362.md",source:"@site/blog/2023/09-13-Gis\u5f00\u53d1\u4e2d\u7ecf\u7eac\u5ea6\u8f6c\u6362.md",title:"Gis\u5f00\u53d1\u4e2d\u7ecf\u7eac\u5ea6\u8f6c\u6362",description:"\u5728gis\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u5750\u6807\u7cfb\u662f4326\u5750\u6807\u7cfb\u548c\u8499\u5361\u6258\u5750\u6807\u7cfb(3857)\u3002",date:"2023-09-13T00:00:00.000Z",formattedDate:"2023\u5e749\u670813\u65e5",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"geotools",permalink:"/blog/tags/geotools"},{label:"\u5730\u7406",permalink:"/blog/tags/\u5730\u7406"},{label:"\u5730\u56fe\u76f8\u5173",permalink:"/blog/tags/\u5730\u56fe\u76f8\u5173"}],readingTime:1.8066666666666666,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"gis-lonlat-transform",title:"Gis\u5f00\u53d1\u4e2d\u7ecf\u7eac\u5ea6\u8f6c\u6362",date:"2023-09-13T00:00:00.000Z",authors:"yuchengee",tags:["java","geotools","\u5730\u7406","\u5730\u56fe\u76f8\u5173"]},unlisted:!1,prevItem:{title:"\u771f\u5f3a!ChatGPT\u514d\u8d39\u4f7f\u7528",permalink:"/blog/gpt-ai-free"},nextItem:{title:"\u514d\u8d39\u8d44\u6e90",permalink:"/blog/weixin-source-free"}},s={authorsImageUrls:[void 0]},c=[{value:"4326\u5750\u6807\u8f6c\u8499\u5361\u6258\u5750\u6807(3857)",id:"4326\u5750\u6807\u8f6c\u8499\u5361\u6258\u5750\u68073857",level:3},{value:"\u8ba1\u7b974326\u5750\u6807\u7684\u74e6\u7247\u5750\u6807\u548c\u74e6\u7247\u5185\u50cf\u7d20\u5750\u6807",id:"\u8ba1\u7b974326\u5750\u6807\u7684\u74e6\u7247\u5750\u6807\u548c\u74e6\u7247\u5185\u50cf\u7d20\u5750\u6807",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5728gis\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u5750\u6807\u7cfb\u662f4326\u5750\u6807\u7cfb\u548c\u8499\u5361\u6258\u5750\u6807\u7cfb(3857)\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u8bb0\u5f55\u5e38\u7528\u5750\u6807\u7684\u8f6c\u6362\u65b9\u6cd5\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"4326\u5750\u6807\u8f6c\u8499\u5361\u6258\u5750\u68073857",children:"4326\u5750\u6807\u8f6c\u8499\u5361\u6258\u5750\u6807(3857)"}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u4e9b\u5e38\u91cf"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"    private static final int TILE_WIDTH = 256;\n    private static final double OFFSET = 20037508.3427892;\n    private static final double[] resolutions = new double[18];\n    static {\n        resolutions[0] = 78271.516953125;// \u9ad8\u5fb7\u8c37\u6b4c\u7b2c1\u7ea7\n        for (int i = 1; i < 18; i++) {\n            resolutions[i] = resolutions[i - 1] / 2;\n        }\n    }\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7b2c\u4e00\u79cd\u8f6c\u6362\u65b9\u6cd5\uff0cjava\u76f4\u63a5\u8ba1\u7b97"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public static double[] lonlat2Mercator(double lon, double lat) {\n    double x = lon * OFFSET / 180;\n    double y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);\n    y = y * OFFSET / 180;\n    return new double[] {x, y};\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7b2c\u4e8c\u79cd\uff0c\u501f\u52a9geotools\uff0c\u53ef\u4ee5\u4efb\u610f\u8f6c\u6362\u30024326->3857\u4e5f\u53ef\u4ee53857->4326"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'public static Coordinate lonlat2Mercator1(double lon, double lat) throws FactoryException, TransformException {\n    MathTransform TRANS_4326_TO_3857 = CRS.findMathTransform(CRS.decode("EPSG:4326", true), CRS.decode("EPSG:3857", true));\n    Coordinate coordinate = new Coordinate(lon, lat);\n    return JTS.transform(coordinate, coordinate, TRANS_4326_TO_3857);\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u8ba1\u7b974326\u5750\u6807\u7684\u74e6\u7247\u5750\u6807\u548c\u74e6\u7247\u5185\u50cf\u7d20\u5750\u6807",children:"\u8ba1\u7b974326\u5750\u6807\u7684\u74e6\u7247\u5750\u6807\u548c\u74e6\u7247\u5185\u50cf\u7d20\u5750\u6807"}),"\n",(0,l.jsx)(n.p,{children:"\u8ba1\u7b97\u74e6\u7247\u5750\u6807"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public static int[] getTile(double lon, double lat, int level) {\n    double mercaX = lon * OFFSET / 180;\n    double mercaY = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);\n    mercaY = mercaY * OFFSET / 180;\n    int x = (int) ((mercaX + OFFSET) / (resolutions[level] * TILE_WIDTH));\n    int y = (int) ((OFFSET - mercaY) / (resolutions[level] * TILE_WIDTH));\n    return new int[]{x, y, level};\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8ba1\u7b97\u74e6\u7247\u8303\u56f4(\u8499\u5361\u6258\u5750\u6807)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public static double[] getTileBound(int x, int y, int level) {\n    double minMercaX = x * resolutions[level] * TILE_WIDTH - OFFSET;\n    double maxMercaY = OFFSET - y * resolutions[level] * TILE_WIDTH;\n    double minMercaY = maxMercaY - TILE_WIDTH * resolutions[level];\n    double maxMercaX = minMercaX + TILE_WIDTH * resolutions[level];\n    return new double[]{minMercaX, minMercaY, maxMercaX, maxMercaY};\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8ba1\u7b97\u5750\u6807\u5728\u74e6\u7247\u5185\u7684\u50cf\u7d20\u5750\u6807"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public static int[] lonlat2Pixel(double lon, double lat, double[] bound){\n    double minX = bound[0];\n    double maxX = bound[2];\n    double minY = bound[1];\n    double maxY = bound[3];\n    double pixW = ((maxX - minX) * 3600) / TILE_WIDTH;\n    double pixH = ((maxY - minY) * 3600) / TILE_WIDTH;\n\n    double merLon = lon * OFFSET / 180;\n    double merLat = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);\n    merLat = merLat * OFFSET / 180;\n    return new int[]{(int) (((merLon - minX) * 3600) / pixW), (int) (((maxY - merLat) * 3600) / pixH)};\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public static void main(String[] args) {\n    double lon = 112.33;\n    double lat = 29.56;\n    // \u8ba1\u7b97\u74e6\u7247\u5750\u6807\n    int[] tile = getTile(lon, lat, 8);\n    // \u8ba1\u7b97\u74e6\u7247\u8303\u56f4\n    double[] bound = getTileBound(tile[0], tile[1], tile[2]);\n    // \u8ba1\u7b97\u50cf\u7d20\u5750\u6807\n    int[] point = lonlat2Pixel(lon, lat, bound);\n    System.out.println();\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},79779:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var l=t(79474);const a={},o=l.createContext(a);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);