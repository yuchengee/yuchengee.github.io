"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5025],{38010:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>x,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var i=s(13274),l=s(79779);const r={id:"mysql-index",slug:"/mysql-index",title:"2.MySq\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b\u53ca\u8bed\u6cd5",authors:"yuchengee",keywords:["mysql","index","sql"]},d=void 0,c={id:"interview/database/mysql-index",title:"2.MySq\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b\u53ca\u8bed\u6cd5",description:"\u4ec0\u4e48\u662f\u7d22\u5f15",source:"@site/docs/interview/database/2.MySq\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b\u53ca\u8bed\u6cd5.md",sourceDirName:"interview/database",slug:"/mysql-index",permalink:"/docs/mysql-index",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"mysql-index",slug:"/mysql-index",title:"2.MySq\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b\u53ca\u8bed\u6cd5",authors:"yuchengee",keywords:["mysql","index","sql"]},sidebar:"interview",previous:{title:"1.B\u6811\u548cB+\u6811\u7684\u533a\u522b\uff0c\u4e3a\u4ec0\u4e48Mysql\u4f7f\u7528B+\u6811\u5b58\u50a8\u7d22\u5f15",permalink:"/docs/bree-diff-b+tree"},next:{title:"3.ALTER\u8bed\u53e5\u7684\u57fa\u672c\u7528\u6cd5",permalink:"/docs/mysql-alter-usage"}},x={},t=[{value:"\u4ec0\u4e48\u662f\u7d22\u5f15",id:"\u4ec0\u4e48\u662f\u7d22\u5f15",level:3},{value:"\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b",id:"\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b",level:3},{value:"\u6b63\u786e\u4f7f\u7528\u7d22\u5f15",id:"\u6b63\u786e\u4f7f\u7528\u7d22\u5f15",level:3},{value:"\u5982\u4f55\u521b\u5efa\u7d22\u5f15",id:"\u5982\u4f55\u521b\u5efa\u7d22\u5f15",level:3}];function h(n){const e={br:"br",code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u4ec0\u4e48\u662f\u7d22\u5f15",children:"\u4ec0\u4e48\u662f\u7d22\u5f15"}),"\n",(0,i.jsx)(e.p,{children:"\u7d22\u5f15\u662f\u4e00\u79cd\u7528\u4e8e\u5feb\u901f\u67e5\u8be2\u548c\u68c0\u7d22\u6570\u636e\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5176\u672c\u8d28\u53ef\u4ee5\u770b\u6210\u662f\u4e00\u79cd\u6392\u5e8f\u597d\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7d22\u5f15\u5c31\u50cf\u5b57\u5178\u91cc\u9762\u7684a-z\u76ee\u5f55\uff0c\u901a\u8fc7\u8fd9\u4e2a\u76ee\u5f55\u53ef\u4ee5\u5f88\u5feb\u627e\u5230\u81ea\u5df1\u60f3\u8981\u67e5\u627e\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7d22\u5f15\u7684\u4f18\u70b9\u662f \u52a0\u5feb\u6570\u636e\u67e5\u8be2\u901f\u5ea6\uff1b\u7f3a\u70b9\u662f \u589e\u52a0\u4e86\u5b58\u50a8\u7a7a\u95f4\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539\u4e5f\u8981\u4fee\u6539\u7d22\u5f15\uff0c\u964d\u4f4e\u4e86sql\u6548\u7387\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7d22\u5f15\u5e95\u5c42\u6570\u636e\u7ed3\u6784\u5b58\u5728\u5f88\u591a\u79cd\u7c7b\u578b\uff0c\u5e38\u89c1\u7684\u7d22\u5f15\u7ed3\u6784\u6709: B \u6811\uff0c B+\u6811 \u548c Hash\u3001\u7ea2\u9ed1\u6811\u3002\u5728 MySQL \u4e2d\uff0c\u65e0\u8bba\u662f Innodb \u8fd8\u662f MyIsam\uff0c\u90fd\u4f7f\u7528\u4e86 B+\u6811\u4f5c\u4e3a\u7d22\u5f15\u7ed3\u6784\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b",children:"\u5e38\u89c1\u7684\u7d22\u5f15\u7c7b\u578b"}),"\n",(0,i.jsx)(e.p,{children:"\u7d22\u5f15\u5206\u7c7b\u6709\u4e0d\u540c\u7684\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6309\u7167\u6570\u636e\u7ed3\u6784\u5206\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"BTree \u7d22\u5f15\uff1aMySQL \u91cc\u9ed8\u8ba4\u548c\u6700\u5e38\u7528\u7684\u7d22\u5f15\u7c7b\u578b\u3002\u53ea\u6709\u53f6\u5b50\u8282\u70b9\u5b58\u50a8 value\uff0c\u975e\u53f6\u5b50\u8282\u70b9\u53ea\u6709\u6307\u9488\u548c key\u3002\u5b58\u50a8\u5f15\u64ce MyISAM \u548c InnoDB \u5b9e\u73b0 BTree \u7d22\u5f15\u90fd\u662f\u4f7f\u7528 B+Tree\uff0c\u4f46\u4e8c\u8005\u5b9e\u73b0\u65b9\u5f0f\u4e0d\u4e00\u6837\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u54c8\u5e0c\u7d22\u5f15\uff1a\u7c7b\u4f3c\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\uff0c\u4e00\u6b21\u5373\u53ef\u5b9a\u4f4d\u3002"}),"\n",(0,i.jsx)(e.li,{children:"RTree \u7d22\u5f15\uff1a\u4e00\u822c\u4e0d\u4f1a\u4f7f\u7528\uff0c\u4ec5\u652f\u6301 geometry \u6570\u636e\u7c7b\u578b\uff0c\u4f18\u52bf\u5728\u4e8e\u8303\u56f4\u67e5\u627e\uff0c\u6548\u7387\u8f83\u4f4e\uff0c\u901a\u5e38\u4f7f\u7528\u641c\u7d22\u5f15\u64ce\u5982 ElasticSearch \u4ee3\u66ff\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5168\u6587\u7d22\u5f15\uff1a\u5bf9\u6587\u672c\u7684\u5185\u5bb9\u8fdb\u884c\u5206\u8bcd\uff0c\u8fdb\u884c\u641c\u7d22\u3002\u76ee\u524d\u53ea\u6709 CHAR\u3001VARCHAR \uff0cTEXT \u5217\u4e0a\u53ef\u4ee5\u521b\u5efa\u5168\u6587\u7d22\u5f15\u3002\u4e00\u822c\u4e0d\u4f1a\u4f7f\u7528\uff0c\u6548\u7387\u8f83\u4f4e\uff0c\u901a\u5e38\u4f7f\u7528\u641c\u7d22\u5f15\u64ce\u5982 ElasticSearch \u4ee3\u66ff\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6309\u7167\u5e95\u5c42\u5b58\u50a8\u65b9\u5f0f\u5206\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u805a\u7c07\u7d22\u5f15\uff08\u805a\u96c6\u7d22\u5f15\uff09\uff1a\u7d22\u5f15\u7ed3\u6784\u548c\u6570\u636e\u4e00\u8d77\u5b58\u653e\u7684\u7d22\u5f15\uff0cInnoDB \u4e2d\u7684\u4e3b\u952e\u7d22\u5f15\u5c31\u5c5e\u4e8e\u805a\u7c07\u7d22\u5f15\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u975e\u805a\u7c07\u7d22\u5f15\uff08\u975e\u805a\u96c6\u7d22\u5f15\uff09\uff1a\u7d22\u5f15\u7ed3\u6784\u548c\u6570\u636e\u5206\u5f00\u5b58\u653e\u7684\u7d22\u5f15\uff0c\u4e8c\u7ea7\u7d22\u5f15(\u8f85\u52a9\u7d22\u5f15)\u5c31\u5c5e\u4e8e\u975e\u805a\u7c07\u7d22\u5f15\u3002MySQL \u7684 MyISAM \u5f15\u64ce\uff0c\u4e0d\u7ba1\u4e3b\u952e\u8fd8\u662f\u975e\u4e3b\u952e\uff0c\u4f7f\u7528\u7684\u90fd\u662f\u975e\u805a\u7c07\u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6309\u7167\u5e94\u7528\u7ef4\u5ea6\u5212\u5206\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4e3b\u952e\u7d22\u5f15\uff1a\u52a0\u901f\u67e5\u8be2 + \u5217\u503c\u552f\u4e00\uff08\u4e0d\u53ef\u4ee5\u6709 NULL\uff09+ \u8868\u4e2d\u53ea\u6709\u4e00\u4e2a\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u666e\u901a\u7d22\u5f15\uff1a\u4ec5\u52a0\u901f\u67e5\u8be2\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u552f\u4e00\u7d22\u5f15\uff1a\u52a0\u901f\u67e5\u8be2 + \u5217\u503c\u552f\u4e00\uff08\u53ef\u4ee5\u6709 NULL\uff09\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u8986\u76d6\u7d22\u5f15\uff1a\u4e00\u4e2a\u7d22\u5f15\u5305\u542b\uff08\u6216\u8005\u8bf4\u8986\u76d6\uff09\u6240\u6709\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5\u7684\u503c\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u8054\u5408\u7d22\u5f15\uff1a\u591a\u5217\u503c\u7ec4\u6210\u4e00\u4e2a\u7d22\u5f15\uff0c\u4e13\u95e8\u7528\u4e8e\u7ec4\u5408\u641c\u7d22\uff0c\u5176\u6548\u7387\u5927\u4e8e\u7d22\u5f15\u5408\u5e76\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5168\u6587\u7d22\u5f15\uff1a\u540c\u4e0a\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"mysql 8.x\u7248\u672c\u4e2d\u65b0\u52a0\u7684\u7d22\u5f15\u7279\u6027\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9690\u85cf\u7d22\u5f15\uff1a\u4e5f\u79f0\u4e3a\u4e0d\u53ef\u89c1\u7d22\u5f15\uff0c\u4e0d\u4f1a\u88ab\u4f18\u5316\u5668\u4f7f\u7528\uff0c\u4f46\u662f\u4ecd\u7136\u9700\u8981\u7ef4\u62a4\uff0c\u901a\u5e38\u4f1a\u8f6f\u5220\u9664\u548c\u7070\u5ea6\u53d1\u5e03\u7684\u573a\u666f\u4e2d\u4f7f\u7528\u3002\u4e3b\u952e\u4e0d\u80fd\u8bbe\u7f6e\u4e3a\u9690\u85cf\uff08\u5305\u62ec\u663e\u5f0f\u8bbe\u7f6e\u6216\u9690\u5f0f\u8bbe\u7f6e\uff09\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u964d\u5e8f\u7d22\u5f15\uff1a\u4e4b\u524d\u7684\u7248\u672c\u5c31\u652f\u6301\u901a\u8fc7 desc \u6765\u6307\u5b9a\u7d22\u5f15\u4e3a\u964d\u5e8f\uff0c\u4f46\u5b9e\u9645\u4e0a\u521b\u5efa\u7684\u4ecd\u7136\u662f\u5e38\u89c4\u7684\u5347\u5e8f\u7d22\u5f15\u3002\u76f4\u5230 MySQL 8.x \u7248\u672c\u624d\u5f00\u59cb\u771f\u6b63\u652f\u6301\u964d\u5e8f\u7d22\u5f15\u3002\u53e6\u5916\uff0c\u5728 MySQL 8.x \u7248\u672c\u4e2d\uff0c\u4e0d\u518d\u5bf9 GROUP BY \u8bed\u53e5\u8fdb\u884c\u9690\u5f0f\u6392\u5e8f\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u51fd\u6570\u7d22\u5f15\uff1a\u4ece MySQL 8.0.13 \u7248\u672c\u5f00\u59cb\u652f\u6301\u5728\u7d22\u5f15\u4e2d\u4f7f\u7528\u51fd\u6570\u6216\u8005\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u4e5f\u5c31\u662f\u5728\u7d22\u5f15\u4e2d\u53ef\u4ee5\u5305\u542b\u51fd\u6570\u6216\u8005\u8868\u8fbe\u5f0f\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6b63\u786e\u4f7f\u7528\u7d22\u5f15",children:"\u6b63\u786e\u4f7f\u7528\u7d22\u5f15"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4e0d\u4e3a NULL \u7684\u5b57\u6bb5"}),"\uff1a\u7d22\u5f15\u5b57\u6bb5\u7684\u6570\u636e\u5e94\u8be5\u5c3d\u91cf\u4e0d\u4e3a NULL\uff0c\u56e0\u4e3a\u5bf9\u4e8e\u6570\u636e\u4e3a NULL \u7684\u5b57\u6bb5\uff0c\u6570\u636e\u5e93\u8f83\u96be\u4f18\u5316\u3002\u5982\u679c\u5b57\u6bb5\u9891\u7e41\u88ab\u67e5\u8be2\uff0c\u4f46\u53c8\u907f\u514d\u4e0d\u4e86\u4e3a NULL\uff0c\u5efa\u8bae\u4f7f\u7528 0,1,true,false \u8fd9\u6837\u8bed\u4e49\u8f83\u4e3a\u6e05\u6670\u7684\u77ed\u503c\u6216\u77ed\u5b57\u7b26\u4f5c\u4e3a\u66ff\u4ee3\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u88ab\u9891\u7e41\u67e5\u8be2\u7684\u5b57\u6bb5"}),"\uff1a\u6211\u4eec\u521b\u5efa\u7d22\u5f15\u7684\u5b57\u6bb5\u5e94\u8be5\u662f\u67e5\u8be2\u64cd\u4f5c\u975e\u5e38\u9891\u7e41\u7684\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u88ab\u4f5c\u4e3a\u6761\u4ef6\u67e5\u8be2\u7684\u5b57\u6bb5"}),"\uff1a\u88ab\u4f5c\u4e3a WHERE \u6761\u4ef6\u67e5\u8be2\u7684\u5b57\u6bb5\uff0c\u5e94\u8be5\u88ab\u8003\u8651\u5efa\u7acb\u7d22\u5f15\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u9891\u7e41\u9700\u8981\u6392\u5e8f\u7684\u5b57\u6bb5"}),"\uff1a\u7d22\u5f15\u5df2\u7ecf\u6392\u5e8f\uff0c\u8fd9\u6837\u67e5\u8be2\u53ef\u4ee5\u5229\u7528\u7d22\u5f15\u7684\u6392\u5e8f\uff0c\u52a0\u5feb\u6392\u5e8f\u67e5\u8be2\u65f6\u95f4\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u88ab\u7ecf\u5e38\u9891\u7e41\u7528\u4e8e\u8fde\u63a5\u7684\u5b57\u6bb5"}),"\uff1a\u7ecf\u5e38\u7528\u4e8e\u8fde\u63a5\u7684\u5b57\u6bb5\u53ef\u80fd\u662f\u4e00\u4e9b\u5916\u952e\u5217\uff0c\u5bf9\u4e8e\u5916\u952e\u5217\u5e76\u4e0d\u4e00\u5b9a\u8981\u5efa\u7acb\u5916\u952e\uff0c\u53ea\u662f\u8bf4\u8be5\u5217\u6d89\u53ca\u5230\u8868\u4e0e\u8868\u7684\u5173\u7cfb\u3002\u5bf9\u4e8e\u9891\u7e41\u88ab\u8fde\u63a5\u67e5\u8be2\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u8003\u8651\u5efa\u7acb\u7d22\u5f15\uff0c\u63d0\u9ad8\u591a\u8868\u8fde\u63a5\u67e5\u8be2\u7684\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u88ab\u7ecf\u5e38\u9891\u7e41\u7528\u4e8e\u8fde\u63a5\u7684\u5b57\u6bb5"}),"\uff1a\u7ecf\u5e38\u7528\u4e8e\u8fde\u63a5\u7684\u5b57\u6bb5\u53ef\u80fd\u662f\u4e00\u4e9b\u5916\u952e\u5217\uff0c\u5bf9\u4e8e\u5916\u952e\u5217\u5e76\u4e0d\u4e00\u5b9a\u8981\u5efa\u7acb\u5916\u952e\uff0c\u53ea\u662f\u8bf4\u8be5\u5217\u6d89\u53ca\u5230\u8868\u4e0e\u8868\u7684\u5173\u7cfb\u3002\u5bf9\u4e8e\u9891\u7e41\u88ab\u8fde\u63a5\u67e5\u8be2\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u8003\u8651\u5efa\u7acb\u7d22\u5f15\uff0c\u63d0\u9ad8\u591a\u8868\u8fde\u63a5\u67e5\u8be2\u7684\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u9650\u5236\u6bcf\u5f20\u8868\u4e0a\u7684\u7d22\u5f15\u6570\u91cf"}),"\uff1a\u7d22\u5f15\u5e76\u4e0d\u662f\u8d8a\u591a\u8d8a\u597d\uff0c\u5efa\u8bae\u5355\u5f20\u8868\u7d22\u5f15\u4e0d\u8d85\u8fc7 5 \u4e2a\uff01\u7d22\u5f15\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387\u540c\u6837\u53ef\u4ee5\u964d\u4f4e\u6548\u7387\u3002\u7d22\u5f15\u53ef\u4ee5\u589e\u52a0\u67e5\u8be2\u6548\u7387\uff0c\u4f46\u540c\u6837\u4e5f\u4f1a\u964d\u4f4e\u63d2\u5165\u548c\u66f4\u65b0\u7684\u6548\u7387\uff0c\u751a\u81f3\u6709\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u964d\u4f4e\u67e5\u8be2\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5b57\u6bb5\u4f7f\u7528\u524d\u7f00\u7d22\u5f15\u4ee3\u66ff\u666e\u901a\u7d22\u5f15"}),"\uff1a\u524d\u7f00\u7d22\u5f15\u4ec5\u9650\u4e8e\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u8f83\u666e\u901a\u7d22\u5f15\u4f1a\u5360\u7528\u66f4\u5c0f\u7684\u7a7a\u95f4\uff0c\u6240\u4ee5\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u524d\u7f00\u7d22\u5f15\u5e26\u66ff\u666e\u901a\u7d22\u5f15\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5982\u4f55\u521b\u5efa\u7d22\u5f15",children:"\u5982\u4f55\u521b\u5efa\u7d22\u5f15"}),"\n",(0,i.jsxs)(e.p,{children:["\u6dfb\u52a0B-Tree\u7d22\u5f15\uff1a",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.code,{children:"CREATE INDEX idx_name(\u7d22\u5f15\u540d) ON \u8868\u540d (\u5b57\u6bb5\u540d);   -- idx_name\u4e3a\u7d22\u5f15\u540d\uff0c\u4ee5\u4e0b\u90fd\u662f"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa\u552f\u4e00\u7d22\u5f15\uff1a",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.code,{children:"CREATE UNIQUE INDEX idx_name ON \u8868\u540d (\u5b57\u6bb5\u540d);"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa\u4e00\u4e2a\u4e3b\u952e\u7d22\u5f15\uff1a",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.code,{children:"ALTER TABLE \u8868\u540d ADD PRIMARY KEY (\u5b57\u6bb5\u540d);"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa\u4e00\u4e2a\u5168\u6587\u7d22\u5f15",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.code,{children:"ALTER TABLE \u8868\u540d ADD FULLTEXT INDEX idx_name (\u5b57\u6bb5\u540d);"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 DROP INDEX \u5220\u9664\u7d22\u5f15",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.code,{children:"DROP INDEX idx_name ON \u8868\u540d;"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ALTER TABLE \u5220\u9664\u7d22\u5f15",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.code,{children:"ALTER TABLE employees DROP INDEX idx_email;"})]}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u793a\u4f8b\uff0c\u53ef\u4ee5\u770b\u51facreate \u548c alter \u90fd\u53ef\u4ee5\u6dfb\u52a0\u7d22\u5f15"})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},79779:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var i=s(79474);const l={},r=i.createContext(l);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);