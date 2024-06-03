"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2035],{96949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(13274),a=n(79779);const s={slug:"commons-io-filenameutils",title:"commons-io\u4e2dFilenameutils\u5173\u4e8e\u6587\u4ef6\u540d\u7684\u65b9\u6cd5",date:new Date("2023-12-11T00:00:00.000Z"),authors:"yuchengee",tags:["java","io","\u6587\u4ef6"],keywords:["java","io","\u6587\u4ef6"]},l=void 0,o={permalink:"/blog/commons-io-filenameutils",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2023/12-11-commons-io\u4e2d\u5173\u4e8e\u6587\u4ef6\u540d\u7684\u65b9\u6cd5.md",source:"@site/blog/2023/12-11-commons-io\u4e2d\u5173\u4e8e\u6587\u4ef6\u540d\u7684\u65b9\u6cd5.md",title:"commons-io\u4e2dFilenameutils\u5173\u4e8e\u6587\u4ef6\u540d\u7684\u65b9\u6cd5",description:"commons-io\u4e2d Filenameutils \u7c7b\u63d0\u4f9b\u4e86\u5f88\u591a\u5173\u4e8e\u6587\u4ef6\u540d\u7684\u65b9\u6cd5\uff0c\u4f7f\u7528\u8fd9\u4e2a\u7c7b\u53ef\u4ee5\u51cf\u5c11\u4ee3\u7801\u91cf\uff0c\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002",date:"2023-12-11T00:00:00.000Z",formattedDate:"2023\u5e7412\u670811\u65e5",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"io",permalink:"/blog/tags/io"},{label:"\u6587\u4ef6",permalink:"/blog/tags/\u6587\u4ef6"}],readingTime:.39,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"commons-io-filenameutils",title:"commons-io\u4e2dFilenameutils\u5173\u4e8e\u6587\u4ef6\u540d\u7684\u65b9\u6cd5",date:"2023-12-11T00:00:00.000Z",authors:"yuchengee",tags:["java","io","\u6587\u4ef6"],keywords:["java","io","\u6587\u4ef6"]},unlisted:!1,prevItem:{title:"\u666e\u901ajava\u9879\u76ee\u6253jar\u5305\u8fd0\u884c\u65b9\u5f0f",permalink:"/blog/java-build-run"},nextItem:{title:"BufferImage\u7ed8\u56fe\u65f6createGraphics\u548cgetGraphics\u7684\u533a\u522b",permalink:"/blog/java-graphics2d-get-create"}},r={authorsImageUrls:[void 0]},c=[];function d(e){const t={code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"commons-io\u4e2d Filenameutils \u7c7b\u63d0\u4f9b\u4e86\u5f88\u591a\u5173\u4e8e\u6587\u4ef6\u540d\u7684\u65b9\u6cd5\uff0c\u4f7f\u7528\u8fd9\u4e2a\u7c7b\u53ef\u4ee5\u51cf\u5c11\u4ee3\u7801\u91cf\uff0c\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'String filePath = "/home/wd/tempData/aaa.txt";'})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,i.jsx)(t.th,{children:"\u4f5c\u7528"}),(0,i.jsx)(t.th,{children:"\u7ed3\u679c"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FilenameUtils.getFullPath(filePath)"}),(0,i.jsx)(t.td,{children:"\u83b7\u53d6\u7236\u76ee\u5f55\uff0c\u770b\u6700\u540e\u4e00\u4e2a\u662f\u5426\u662f /"}),(0,i.jsx)(t.td,{children:"/home/wd/tempData/"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FilenameUtils.getBaseName(filePath)"}),(0,i.jsx)(t.td,{children:"\u83b7\u53d6\u4e0d\u5e26\u540e\u7f00\u7684\u6587\u4ef6\u540d"}),(0,i.jsx)(t.td,{children:"aaa"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FilenameUtils.getExtension(filePath)"}),(0,i.jsx)(t.td,{children:"\u83b7\u53d6\u6587\u4ef6\u540e\u7f00\uff0c\u6ca1\u6709\u5219\u4e3a\u7a7a"}),(0,i.jsx)(t.td,{children:"txt"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FilenameUtils.getName(filePath)"}),(0,i.jsx)(t.td,{children:"\u83b7\u53d6\u6587\u4ef6\u540d"}),(0,i.jsx)(t.td,{children:"aaa.txt"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"\u7075\u6d3b\u8fd0\u7528\u8fd9\u4e2a\u7c7b\uff0c\u53ef\u4ee5\u5c11\u5199\u5f88\u591a\u4ee3\u7801\u3002"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79779:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(79474);const a={},s=i.createContext(a);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);