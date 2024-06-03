"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8702],{61879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(13274),s=t(79779);const r={slug:"java-jts-datatype",title:"JTS\u4e2d\u7684\u51e0\u79cd\u6570\u636e\u683c\u5f0f",date:new Date("2024-05-17T00:00:00.000Z"),authors:"yuchengee",tags:["java","geotools","jts","\u5730\u7406"],keywords:["java","geotools","jts","\u5730\u7406"]},l=void 0,i={permalink:"/blog/java-jts-datatype",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2024/05-17-JTS\u4e2d\u7684\u51e0\u79cd\u6570\u636e\u683c\u5f0f.md",source:"@site/blog/2024/05-17-JTS\u4e2d\u7684\u51e0\u79cd\u6570\u636e\u683c\u5f0f.md",title:"JTS\u4e2d\u7684\u51e0\u79cd\u6570\u636e\u683c\u5f0f",description:"JTS\uff08Java Topology Suite\uff09\u662f\u4e00\u4e2a\u7528\u4e8e\u5904\u7406\u7a7a\u95f4\u6570\u636e\u7684Java\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u5404\u79cd\u51e0\u4f55\u5bf9\u8c61\u548c\u7a7a\u95f4\u5206\u6790\u529f\u80fd\u3002",date:"2024-05-17T00:00:00.000Z",formattedDate:"2024\u5e745\u670817\u65e5",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"geotools",permalink:"/blog/tags/geotools"},{label:"jts",permalink:"/blog/tags/jts"},{label:"\u5730\u7406",permalink:"/blog/tags/\u5730\u7406"}],readingTime:1.5,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"java-jts-datatype",title:"JTS\u4e2d\u7684\u51e0\u79cd\u6570\u636e\u683c\u5f0f",date:"2024-05-17T00:00:00.000Z",authors:"yuchengee",tags:["java","geotools","jts","\u5730\u7406"],keywords:["java","geotools","jts","\u5730\u7406"]},unlisted:!1,nextItem:{title:"git\u7684\u57fa\u672c\u64cd\u4f5c",permalink:"/blog/git-base-code"}},a={authorsImageUrls:[void 0]},c=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:3},{value:"\u6570\u636e\u6837\u4f8b",id:"\u6570\u636e\u6837\u4f8b",level:3},{value:"Wkt\u4e0eGeojson\u7684\u76f8\u4e92\u8f6c\u6362",id:"wkt\u4e0egeojson\u7684\u76f8\u4e92\u8f6c\u6362",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"JTS\uff08Java Topology Suite\uff09\u662f\u4e00\u4e2a\u7528\u4e8e\u5904\u7406\u7a7a\u95f4\u6570\u636e\u7684Java\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u5404\u79cd\u51e0\u4f55\u5bf9\u8c61\u548c\u7a7a\u95f4\u5206\u6790\u529f\u80fd\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u672c\u6587\u8bb0\u5f55\u5e38\u89c1\u7684\u51e0\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u4fdd\u62a4wkt\u548cgeojson\u4e24\u79cd\u7c7b\u578b\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,o.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u51e0\u79cd\u6570\u636e\u683c\u5f0f\u5305\u62ec"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u70b9\uff08Point\uff09\uff1a\u8868\u793a\u4e8c\u7ef4\u7a7a\u95f4\u4e2d\u7684\u5355\u4e2a\u70b9\uff0c\u7531X\u548cY\u5750\u6807\u503c\u7ec4\u6210\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u7ebf\u6bb5\uff08LineString\uff09\uff1a\u7531\u591a\u4e2a\u8fde\u63a5\u7684\u70b9\u7ec4\u6210\u7684\u7ebf\u6bb5\uff0c\u53ef\u4ee5\u662f\u76f4\u7ebf\u4e5f\u53ef\u4ee5\u662f\u66f2\u7ebf\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u591a\u8fb9\u5f62\uff08Polygon\uff09\uff1a\u7531\u95ed\u5408\u7684\u7ebf\u6bb5\u7ec4\u6210\u7684\u533a\u57df\uff0c\u53ef\u4ee5\u8868\u793a\u7b80\u5355\u7684\u51e0\u4f55\u5f62\u72b6\uff0c\u5982\u77e9\u5f62\u3001\u4e09\u89d2\u5f62\u7b49\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u591a\u70b9\uff08MultiPoint\uff09\uff1a\u5305\u542b\u591a\u4e2a\u70b9\u7684\u96c6\u5408\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u591a\u7ebf\u6bb5\uff08MultiLineString\uff09\uff1a\u5305\u542b\u591a\u6761\u7ebf\u6bb5\u7684\u96c6\u5408\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u591a\u591a\u8fb9\u5f62\uff08MultiPolygon\uff09\uff1a\u5305\u542b\u591a\u4e2a\u591a\u8fb9\u5f62\u7684\u96c6\u5408"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4ee5\u4e0a\u662f\u51e0\u79cd\u5e38\u89c1\u7684\u6570\u636e\u683c\u5f0f\u3002\u4e0b\u9762\u4f1a\u7ed9\u51fa\u8fd9\u51e0\u79cd\u6570\u636e\u683c\u5f0f\u7684\u6837\u4f8b\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u6570\u636e\u6837\u4f8b",children:"\u6570\u636e\u6837\u4f8b"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u70b9"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'# wkt\nPOINT (121.33 29.36)\n\n# geojson\n{"type":"Point","coordinates":[121.33,29.36]}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u7ebf\u6bb5"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'# wkt\nLINESTRING (120.58 28.71, 122.85 30.14)\n\n# geojson\n{"type":"LineString","coordinates":[[120.58,28.71],[122.85,30.14]]}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u591a\u8fb9\u5f62"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'# wkt\nPOLYGON ((120.66 28.88, 122.56 28.88, 122.56 29.89, 120.66 29.89, 120.66 28.88))\n\n# geojson\n{"type":"Polygon","coordinates":[[[120.66,28.88],[122.56,28.88],[122.56,29.89],[120.66,29.89],[120.66,28.88]]]}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"\u591a\u7ebf\u6bb5"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'# wkt\nMULTILINESTRING((120.58 28.71, 122.85 30.14), (120.59 29.8, 121.66 29.32, 122.86 28.72))\n\n# geojson\n{"type":"MultiLineString","coordinates":[[[120.58,28.71],[122.85,30.14]],[[120.59,29.8],[121.66,29.32],[122.86,28.72]]]}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"\u591a\u591a\u8fb9\u5f62\uff0c\u8fd9\u79cd\u6bd4\u8f83\u590d\u6742\uff0c\u53ef\u80fd\u662f\u591a\u8fb9\u5f62\u5185\u90e8\u6709\u4e2a\u7a7a\u6d1e\u3001\u51e0\u4e2a\u65e0\u5173\u7684\u591a\u8fb9\u5f62\u3001\u76f8\u4ea4\u7684\u591a\u8fb9\u5f62\u7b49\u7b49\u6bd4\u8f83\u590d\u6742\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'# wkt\nMULTIPOLYGON(((0 0, 0 10, 10 10, 10 0, 0 0), (1 1, 1 2, 2 2, 2 1, 1 1)), ((-1 -1, -1 -2, -2 -2, -2 -1, -1 -1)))\n\n# geojson\n{"type":"MultiLineString","coordinates":[[[120.58,28.71],[122.85,30.14]],[[120.59,29.8],[121.66,29.32],[122.86,28.72]]]}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"wkt\u4e0egeojson\u7684\u76f8\u4e92\u8f6c\u6362",children:"Wkt\u4e0eGeojson\u7684\u76f8\u4e92\u8f6c\u6362"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:"title='User.java' icon='logos:java'",children:'// geojson\u683c\u5f0f\u5b57\u7b26\u4e32\nString geojsonStr = "{\\"type\\":\\"Point\\",\\"coordinates\\":[121.331234567,29.368754622]}";\n// geojson\u683c\u5f0f\u8f6c\u6362\u5668\nGeometryJSON json = new GeometryJSON(6);\nGeometry geometry = json.read(geojsonStr);\n// \u8f6c\u6210wkt\u683c\u5f0f\u5b57\u7b26\u4e32\nString wktText = geometry.toText();\n\n// wkt\u683c\u5f0f\u8bfb\u53d6\u5668\nWKTReader reader = new WKTReader();\nGeometry geometry1 = reader.read(wktText);\n// \u8f6c\u6210geojson\u683c\u5f0f\u5b57\u7b26\u4e32\nString geojsonText = json.toString(geometry1);\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},79779:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var o=t(79474);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);