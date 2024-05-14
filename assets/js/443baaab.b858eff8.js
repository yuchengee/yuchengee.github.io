"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8015],{48952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(13274),l=n(79779);const r={slug:"java-safe-SimpleDateFormat",title:"SimpleDateFormat\u662f\u5426\u7ebf\u7a0b\u5b89\u5168",date:new Date("2023-10-29T00:00:00.000Z"),authors:"yuchengee",tags:["java","\u65f6\u95f4\u7c7b","\u7ebf\u7a0b\u5b89\u5168"]},s=void 0,i={permalink:"/blog/java-safe-SimpleDateFormat",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2023/10-29-SimpleDateFormat\u662f\u5426\u7ebf\u7a0b\u5b89\u5168.md",source:"@site/blog/2023/10-29-SimpleDateFormat\u662f\u5426\u7ebf\u7a0b\u5b89\u5168.md",title:"SimpleDateFormat\u662f\u5426\u7ebf\u7a0b\u5b89\u5168",description:"SimpleDateFormat\u662f\u5426\u7ebf\u7a0b\u5b89\u5168\uff0c\u5de5\u5177\u7c7b\u4e2d\u63d0\u4f9b\u7684\u65f6\u95f4\u683c\u5f0f\u5316\u5de5\u5177\u7ecf\u5e38\u7528\u5230SimpleDateFormat\u6765\u683c\u5f0f\u5316Date\uff0c\u90a3\u4e48\u662f\u5426\u7ebf\u7a0b\u5b89\u5168\u3002",date:"2023-10-29T00:00:00.000Z",formattedDate:"2023\u5e7410\u670829\u65e5",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"\u65f6\u95f4\u7c7b",permalink:"/blog/tags/\u65f6\u95f4\u7c7b"},{label:"\u7ebf\u7a0b\u5b89\u5168",permalink:"/blog/tags/\u7ebf\u7a0b\u5b89\u5168"}],readingTime:2.7866666666666666,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"java-safe-SimpleDateFormat",title:"SimpleDateFormat\u662f\u5426\u7ebf\u7a0b\u5b89\u5168",date:"2023-10-29T00:00:00.000Z",authors:"yuchengee",tags:["java","\u65f6\u95f4\u7c7b","\u7ebf\u7a0b\u5b89\u5168"]},unlisted:!1,prevItem:{title:"git\u62c9\u53d6\u4ee3\u7801\u5931\u8d25:Filename-too-long",permalink:"/blog/git-pull-fail"},nextItem:{title:"Semaphore\u4fe1\u53f7\u91cf\u7c7b",permalink:"/blog/java-semaphore-thead"}},A={authorsImageUrls:[void 0]},o=[{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801\u9a8c\u8bc1",id:"\u4ee3\u7801\u9a8c\u8bc1",level:3},{value:"\u5982\u4f55\u5b89\u5168\u4f7f\u7528",id:"\u5982\u4f55\u5b89\u5168\u4f7f\u7528",level:3},{value:"ThreadLocal \u5185\u5b58\u6cc4\u9732\u95ee\u9898\u662f\u600e\u4e48\u5bfc\u81f4\u7684\uff1f",id:"threadlocal-\u5185\u5b58\u6cc4\u9732\u95ee\u9898\u662f\u600e\u4e48\u5bfc\u81f4\u7684",level:3}];function d(e){const t={br:"br",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"SimpleDateFormat\u662f\u5426\u7ebf\u7a0b\u5b89\u5168\uff0c\u5de5\u5177\u7c7b\u4e2d\u63d0\u4f9b\u7684\u65f6\u95f4\u683c\u5f0f\u5316\u5de5\u5177\u7ecf\u5e38\u7528\u5230SimpleDateFormat\u6765\u683c\u5f0f\u5316Date\uff0c\u90a3\u4e48\u662f\u5426\u7ebf\u7a0b\u5b89\u5168\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(t.p,{children:"SimpleDateFormat\u662f\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\uff0c\u5982\u679c\u591a\u4e2a\u7ebf\u7a0b\u4f7f\u7528\u540c\u610f\u7ed9SimpleDateFormat\u5bf9\u8c61\u53bb\u683c\u5f0f\u5316Date\uff0c\u683c\u5f0f\u5316\u65f6calendar\u8bbe\u7f6e\u65f6\u95f4\uff0c\u53ef\u80fd\u4f1a\u4e92\u76f8\u5e72\u6270\u4ece\u800c\u5f97\u5230\u4e0d\u6b63\u786e\u7684\u7ed3\u679c\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u67e5\u770b\u6e90\u7801\uff0c\u53d1\u73b0\u683c\u5f0f\u5316Date\u8fc7\u7a0b\u5982\u4e0b"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Called from Format after creating a FieldDelegate\nprivate StringBuffer format(Date date, StringBuffer toAppendTo,\n                            FieldDelegate delegate) {\n    // Convert input date to time field list\n    calendar.setTime(date);\n    ...\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u4f7f\u7528\u4e86 Calendar \u7c7b\u53d8\u91cf\u53bb\u8bbe\u7f6edate\uff0c\u518d\u53bb\u683c\u5f0f\u5316\u3002\u6240\u4ee5\u591a\u7ebf\u7a0b\u4f7f\u7528\u540c\u4e00\u4e2a\u5bf9\u8c61\u53bb\u683c\u5f0f\u5316\u80af\u5b9a\u4f1a\u51fa\u73b0\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"\u4ee3\u7801\u9a8c\u8bc1",children:"\u4ee3\u7801\u9a8c\u8bc1"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'private final SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd HHmm");\n@Test\npublic void testDateFormat() {\n    for (int i = 0; i < 11; i++) {\n        String no = i + "";\n        long time = System.currentTimeMillis() - i * 1000 * 60;\n        new Thread(() -> {\n            String format = simpleDateFormat.format(new Date(time));\n            System.out.println(no + ":" + format);\n        }).start();\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["\u4f7f\u752811\u4e2a\u7ebf\u7a0b \u53bb\u6253\u5370\u8fc7\u53bb11\u5206\u949f\u7684\u65f6\u95f4\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u7ebf\u7a0b\u5b89\u5168\uff0c\u5e94\u8be5\u6b63\u5e38\u6253\u5370\u6ca1\u6709\u91cd\u590d\u65f6\u95f4\u5b57\u7b26\u4e32\u3002",(0,a.jsx)(t.br,{}),"\n","\u771f\u5b9e\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"10:20231029 1943\n3:20231029 1944\n6:20231029 1944\n1:20231029 1944\n5:20231029 1943\n0:20231029 1943\n2:20231029 1944\n9:20231029 1943\n8:20231029 1944\n4:20231029 1944\n7:20231029 1943\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u8bf4\u660e\u662f\u4e0d\u5b89\u5168\u7684\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"\u5982\u4f55\u5b89\u5168\u4f7f\u7528",children:"\u5982\u4f55\u5b89\u5168\u4f7f\u7528"}),"\n",(0,a.jsxs)(t.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ThreadLocal\u3002",(0,a.jsx)(t.br,{}),"\n","\u5bf9\u4e8e\u67d0\u4e9b\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u7c7b\u3001\u6216\u8005\u8d44\u6e90\uff0c\u53ef\u4ee5\u7528ThreadLocal\uff0c\u7136\u540e\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u4f7f\u7528\u81ea\u5df1\u7ebf\u7a0b\u526f\u672c\u4e2d\u5b58\u50a8\u7684\u5bf9\u8c61\uff0c\u4ece\u800c\u4fdd\u8bc1\u5b89\u5168\u6027\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'private static final ThreadLocal<SimpleDateFormat> dateFormat = ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyyMMdd HHmm"));\n@Test\npublic void testExecutor() throws InterruptedException {\n    for (int i = 0; i < 11; i++) {\n        String no = i + "";\n        long time = System.currentTimeMillis() - i * 1000 * 60;\n        new Thread(() -> {\n            SimpleDateFormat simpleDateFormat = dateFormat.get();\n            String format = simpleDateFormat.format(new Date(time));\n            System.out.println(no + ":" + format);\n            dd.add(simpleDateFormat);\n            // dateFormat.remove();\n        }).start();\n    }\n    Thread.sleep(3000);\n    System.out.println();\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["\u6bcf\u4e2a\u7ebf\u7a0b\u683c\u5f0f\u5316\u65f6\uff0c\u5148\u4ece ThreadLocal \u4e2d\u83b7\u53d6\u81ea\u5df1\u7ebf\u7a0b\u7684\u683c\u5f0f\u5316\u5668\u3002\u4ece\u800c\u4f7f\u7528\u5404\u81ea\u7684\u683c\u5f0f\u5316\u5668\u53bb\u683c\u5f0f\u5316\u65f6\u95f4\u3002",(0,a.jsx)(t.br,{}),"\n","\u7ed3\u679c\u5982\u4e0b\uff0c\u6ca1\u6709\u91cd\u590d\uff0c\u5982\u679c\u662f\u5b89\u5168\u7684\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"1:20231029 2009\n2:20231029 2008\n4:20231029 2006\n0:20231029 2010\n5:20231029 2005\n3:20231029 2007\n7:20231029 2003\n10:20231029 2000\n6:20231029 2004\n8:20231029 2002\n9:20231029 2001\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u6bcf\u4e2a\u7ebf\u7a0b\u5bf9\u5e94\u7684SimpleDateFormat\uff0c\u53ef\u4ee5\u770b\u5230\u90fd\u662f\u4e0d\u4e00\u6837\u7684\u3002\n",(0,a.jsx)(t.img,{alt:"\u683c\u5f0f\u5316\u5668",src:n(9007).A+"",width:"278",height:"253"})]}),"\n",(0,a.jsx)(t.h3,{id:"threadlocal-\u5185\u5b58\u6cc4\u9732\u95ee\u9898\u662f\u600e\u4e48\u5bfc\u81f4\u7684",children:"ThreadLocal \u5185\u5b58\u6cc4\u9732\u95ee\u9898\u662f\u600e\u4e48\u5bfc\u81f4\u7684\uff1f"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"ThreadLocalMap"})," \u4e2d\u4f7f\u7528\u7684 key \u4e3a ",(0,a.jsx)(t.code,{children:"ThreadLocal"})," \u7684\u5f31\u5f15\u7528\uff0c\u800c value \u662f\u5f3a\u5f15\u7528\u3002",(0,a.jsx)(t.br,{}),"\n","\u6240\u4ee5\uff0c\u5982\u679c ",(0,a.jsx)(t.code,{children:"ThreadLocal"})," \u6ca1\u6709\u88ab\u5916\u90e8\u5f3a\u5f15\u7528\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u5783\u573e\u56de\u6536\u7684\u65f6\u5019\uff0ckey \u4f1a\u88ab\u6e05\u7406\u6389\uff0c\u800c value \u4e0d\u4f1a\u88ab\u6e05\u7406\u6389\u3002\n\u8fd9\u6837\u4e00\u6765\uff0c",(0,a.jsx)(t.code,{children:"ThreadLocalMap"})," \u4e2d\u5c31\u4f1a\u51fa\u73b0 key \u4e3a null \u7684 Entry\u3002",(0,a.jsx)(t.br,{}),"\n","\u5047\u5982\u6211\u4eec\u4e0d\u505a\u4efb\u4f55\u63aa\u65bd\u7684\u8bdd\uff0cvalue \u6c38\u8fdc\u65e0\u6cd5\u88ab GC \u56de\u6536\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u80fd\u4f1a\u4ea7\u751f\u5185\u5b58\u6cc4\u9732\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:["\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u7ed3\u675f\u540e\uff0c\u5982\u679c\u6ca1\u6709\u624b\u52a8\u6e05\u7406 ThreadLocal \u5bf9\u8c61\u4e2d\u7684\u503c\uff0c\u90a3\u4e48\u8fd9\u4e9b\u503c\u5c31\u4f1a\u53d8\u6210\u5783\u573e\u6570\u636e\u3002\u7136\u800c\uff0c\u7531\u4e8e ThreadLocal \u5bf9\u8c61\u662f\u88ab\u7ebf\u7a0b\u6301\u6709\u7684\uff0c\u800c\u7ebf\u7a0b\u4e00\u822c\u662f\u7531\u7ebf\u7a0b\u6c60\u6216\u8005\u5176\u4ed6\u957f\u751f\u547d\u5468\u671f\u7684\u5bf9\u8c61\u7ba1\u7406\u7684\uff0c\u56e0\u6b64 ThreadLocal \u5bf9\u8c61\u4e5f\u4f1a\u88ab\u4e00\u76f4\u6301\u6709\uff0c\u4ece\u800c\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u3002",(0,a.jsx)(t.br,{}),"\n","\u4e3a\u4e86\u89e3\u51b3 ThreadLocal \u5185\u5b58\u6cc4\u9732\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u4f7f\u7528\u5b8c ThreadLocal \u540e ",(0,a.jsx)(t.strong,{children:"\u624b\u52a8\u8c03\u7528 remove() \u65b9\u6cd5"})," \u6765\u6e05\u7406\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u5728\u7ebf\u7a0b\u7ed3\u675f\u540e\u53ca\u65f6\u6e05\u7406\u6389 ThreadLocal \u5bf9\u8c61\u4e2d\u7684\u503c\uff0c\u907f\u514d\u5185\u5b58\u6cc4\u9732\u7684\u53d1\u751f\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9007:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"},79779:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(79474);const l={},r=a.createContext(l);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);