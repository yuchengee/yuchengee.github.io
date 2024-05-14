"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6347],{67164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(13274),a=n(79779);const i={slug:"java-read-write-txt",title:"\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6",date:"2022-12-12T08:00",authors:"yuchengee",tags:["java","txt","io"]},l=void 0,o={permalink:"/blog/java-read-write-txt",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2022/12-12-\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6.md",source:"@site/blog/2022/12-12-\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6.md",title:"\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6",description:"\u5728java\u4e2d\u5982\u4f55\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6",date:"2022-12-12T08:00:00.000Z",formattedDate:"2022\u5e7412\u670812\u65e5",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"txt",permalink:"/blog/tags/txt"},{label:"io",permalink:"/blog/tags/io"}],readingTime:.3433333333333333,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"java-read-write-txt",title:"\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6",date:"2022-12-12T08:00",authors:"yuchengee",tags:["java","txt","io"]},unlisted:!1,prevItem:{title:"java\u8bfb\u5199xml\u76f8\u5173",permalink:"/blog/java-xml-wr"},nextItem:{title:"markdown\u8bed\u6cd5\u7279\u6027",permalink:"/blog/markdown-features"}},s={authorsImageUrls:[void 0]},c=[];function u(e){const t={code:"code",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u5728java\u4e2d\u5982\u4f55\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6"}),"\n",(0,r.jsx)(t.p,{children:"\u8bfb\u6587\u4ef6"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:"title='readTxt' icon='logos:java'",children:'try (BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(dataFile),"UTF-8"))) {\n    String line = br.readLine();\n    while ((line = br.readLine()) != null) {\n\n    }\n} catch (IOException e) {\n    log.error(e.getMessage(), e);\n}\n\n// \u6216\u8005\u662fcommons-io\nList<String> lines = FileUtils.readLines(new File("src"), "utf-8");\nString content = FileUtils.readFileToString(new File("src"), "utf-8");\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"\u5199\u6587\u4ef6"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",metastring:"title='writeTxt' icon='logos:java'",children:'try(BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file),"UTF-8"))) {\n   writer.write("");\n   writer.flush();\n} catch (IOException e) {\n   log.error(e.getMessage(), e);\n}\n\n// \u6216\u8005\u662fcommons-io\nFileUtils.writeLines(new File("tar"), "utf-8", lines, false);\n'})})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79779:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(79474);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);