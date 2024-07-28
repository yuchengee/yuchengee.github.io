"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5322],{60751:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=e(13274),l=e(79779);const r={id:"mysql-sql-optimize",slug:"/mysql-sql-optimize",title:"5.SQL\u4f18\u5316",authors:"yuchengee",keywords:["mysql","sql"]},t=void 0,c={id:"interview/database/mysql-sql-optimize",title:"5.SQL\u4f18\u5316",description:"Mysql\u9ad8\u6027\u80fd\u4f18\u5316\u89c4\u8303\u5efa\u8bae",source:"@site/docs/interview/database/5.SQL\u4f18\u5316.md",sourceDirName:"interview/database",slug:"/mysql-sql-optimize",permalink:"/docs/mysql-sql-optimize",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"mysql-sql-optimize",slug:"/mysql-sql-optimize",title:"5.SQL\u4f18\u5316",authors:"yuchengee",keywords:["mysql","sql"]},sidebar:"interview",previous:{title:"4.\u884c\u9501",permalink:"/docs/mysql-line-lock"},next:{title:"6.MySQL\u6267\u884c\u8ba1\u5212\u5206\u6790",permalink:"/docs/mysql-query-execution-plan"}},d={},o=[{value:"SQL\u65b9\u9762",id:"sql\u65b9\u9762",level:3},{value:"\u6570\u636e\u5e93\u64cd\u4f5c\u884c\u4e3a\u89c4\u8303",id:"\u6570\u636e\u5e93\u64cd\u4f5c\u884c\u4e3a\u89c4\u8303",level:3}];function x(n){const s={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://www.cnblogs.com/huchong/p/10219318.html",title:"Mysql\u9ad8\u6027\u80fd\u4f18\u5316\u89c4\u8303\u5efa\u8bae",children:"Mysql\u9ad8\u6027\u80fd\u4f18\u5316\u89c4\u8303\u5efa\u8bae"})}),"\n",(0,i.jsx)(s.h3,{id:"sql\u65b9\u9762",children:"SQL\u65b9\u9762"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5c3d\u91cf\u63a7\u5236\u5355\u8868\u6570\u636e\u91cf\u7684\u5927\u5c0f\uff0c\u5efa\u8bae\u63a7\u5236\u5728500\u4e07\u4ee5\u5185",(0,i.jsx)(s.br,{}),"\n","500\u4e07\u5e76\u4e0d\u662fMysql\u6570\u636e\u5e93\u7684\u9650\u5236\uff0c\u8fc7\u5927\u4f1a\u9020\u6210\u4fee\u6539\u8868\u7ed3\u6784\uff0c\u5907\u4efd\uff0c\u6062\u590d\u90fd\u4f1a\u6709\u5f88\u5927\u7684\u95ee\u9898",(0,i.jsx)(s.br,{}),"\n","\u53ef\u4ee5\u7528\u5386\u53f2\u6570\u636e\u5f52\u6863\uff08\u5e94\u7528\u4e8e\u65e5\u5fd7\u6570\u636e\uff09\uff0c\u5206\u5e93\u5206\u8868\uff08\u5e94\u7528\u4e8e\u4e1a\u52a1\u6570\u636e\uff09\u7b49\u624b\u6bb5\u6765\u63a7\u5236\u6570\u636e\u91cf\u5927\u5c0f"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u9650\u5236\u6bcf\u5f20\u8868\u4e0a\u7684\u7d22\u5f15\u6570\u91cf\uff0c\u5efa\u8bae\u5355\u5f20\u8868\u7d22\u5f15\u4e0d\u8d85\u8fc75\u4e2a",(0,i.jsx)(s.br,{}),"\n","\u7d22\u5f15\u5e76\u4e0d\u662f\u8d8a\u591a\u8d8a\u597d\uff01\u7d22\u5f15\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387\u540c\u6837\u53ef\u4ee5\u964d\u4f4e\u6548\u7387",(0,i.jsx)(s.br,{}),"\n","\u7d22\u5f15\u53ef\u4ee5\u589e\u52a0\u67e5\u8be2\u6548\u7387\uff0c\u4f46\u540c\u6837\u4e5f\u4f1a\u964d\u4f4e\u63d2\u5165\u548c\u66f4\u65b0\u7684\u6548\u7387\uff0c\u751a\u81f3\u6709\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u964d\u4f4e\u67e5\u8be2\u6548\u7387",(0,i.jsx)(s.br,{}),"\n","\u56e0\u4e3amysql\u4f18\u5316\u5668\u5728\u9009\u62e9\u5982\u4f55\u4f18\u5316\u67e5\u8be2\u65f6\uff0c\u4f1a\u6839\u636e\u7edf\u4e00\u4fe1\u606f\uff0c\u5bf9\u6bcf\u4e00\u4e2a\u53ef\u4ee5\u7528\u5230\u7684\u7d22\u5f15\u6765\u8fdb\u884c\u8bc4\u4f30\uff0c\u4ee5\u751f\u6210\u51fa\u4e00\u4e2a\u6700\u597d\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5982\u679c\u540c\u65f6\u6709\u5f88\u591a\u4e2a\n\u7d22\u5f15\u90fd\u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\uff0c\u5c31\u4f1a\u589e\u52a0mysql\u4f18\u5316\u5668\u751f\u6210\u6267\u884c\u8ba1\u5212\u7684\u65f6\u95f4\uff0c\u540c\u6837\u4f1a\u964d\u4f4e\u67e5\u8be2\u6027\u80fd"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5e38\u89c1\u7d22\u5f15\u5217\u5efa\u8bae"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u51fa\u73b0\u5728SELECT\u3001UPDATE\u3001DELETE\u8bed\u53e5\u7684WHERE\u4ece\u53e5\u4e2d\u7684\u5217"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5305\u542b\u5728ORDER BY\u3001GROUP BY\u3001DISTINCT\u4e2d\u7684\u5b57\u6bb5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5e76\u4e0d\u8981\u5c06\u7b26\u54081\u548c2\u4e2d\u7684\u5b57\u6bb5\u7684\u5217\u90fd\u5efa\u7acb\u4e00\u4e2a\u7d22\u5f15\uff0c \u901a\u5e38\u5c061\u30012\u4e2d\u7684\u5b57\u6bb5\u5efa\u7acb\u8054\u5408\u7d22\u5f15\u6548\u679c\u66f4\u597d"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u591a\u8868join\u7684\u5173\u8054\u5217"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsx)(s.li,{children:"\u5bf9\u4e8e\u9891\u7e41\u7684\u67e5\u8be2\u4f18\u5148\u8003\u8651\u4f7f\u7528\u8986\u76d6\u7d22\u5f15"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u8986\u76d6\u7d22\u5f15\uff1a\u5c31\u662f\u5305\u542b\u4e86\u6240\u6709\u67e5\u8be2\u5b57\u6bb5(where,select,ordery by,group by\u5305\u542b\u7684\u5b57\u6bb5)\u7684\u7d22\u5f15"}),"\n",(0,i.jsx)(s.p,{children:"\u8986\u76d6\u7d22\u5f15\u7684\u597d\u5904:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u907f\u514dInnodb\u8868\u8fdb\u884c\u7d22\u5f15\u7684\u4e8c\u6b21\u67e5\u8be2",(0,i.jsx)(s.br,{}),"\n","Innodb\u662f\u4ee5\u805a\u96c6\u7d22\u5f15\u7684\u987a\u5e8f\u6765\u5b58\u50a8\u7684\uff0c\u5bf9\u4e8eInnodb\u6765\u8bf4\uff0c\u4e8c\u7ea7\u7d22\u5f15\u5728\u53f6\u5b50\u8282\u70b9\u4e2d\u6240\u4fdd\u5b58\u7684\u662f\u884c\u7684\u4e3b\u952e\u4fe1\u606f\uff0c\n\u5982\u679c\u662f\u7528\u4e8c\u7ea7\u7d22\u5f15\u67e5\u8be2\u6570\u636e\u7684\u8bdd\uff0c\u5728\u67e5\u627e\u5230\u76f8\u5e94\u7684\u952e\u503c\u540e\uff0c\u8fd8\u8981\u901a\u8fc7\u4e3b\u952e\u8fdb\u884c\u4e8c\u6b21\u67e5\u8be2\u624d\u80fd\u83b7\u53d6\u6211\u4eec\u771f\u5b9e\u6240\u9700\u8981\u7684\u6570\u636e\n\u800c\u5728\u8986\u76d6\u7d22\u5f15\u4e2d\uff0c\u4e8c\u7ea7\u7d22\u5f15\u7684\u952e\u503c\u4e2d\u53ef\u4ee5\u83b7\u53d6\u6240\u6709\u7684\u6570\u636e\uff0c\u907f\u514d\u4e86\u5bf9\u4e3b\u952e\u7684\u4e8c\u6b21\u67e5\u8be2 \uff0c\u51cf\u5c11\u4e86IO\u64cd\u4f5c\uff0c\u63d0\u5347\u4e86\u67e5\u8be2\u6548\u7387"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u53ef\u4ee5\u628a\u968f\u673aIO\u53d8\u6210\u987a\u5e8fIO\u52a0\u5feb\u67e5\u8be2\u6548\u7387",(0,i.jsx)(s.br,{}),"\n","\u7531\u4e8e\u8986\u76d6\u7d22\u5f15\u662f\u6309\u952e\u503c\u7684\u987a\u5e8f\u5b58\u50a8\u7684\uff0c\u5bf9\u4e8eIO\u5bc6\u96c6\u578b\u7684\u8303\u56f4\u67e5\u627e\u6765\u8bf4\uff0c\u5bf9\u6bd4\u968f\u673a\u4ece\u78c1\u76d8\u8bfb\u53d6\u6bcf\u4e00\u884c\u7684\u6570\u636eIO\u8981\u5c11\u7684\u591a\uff0c\n\u56e0\u6b64\u5229\u7528\u8986\u76d6\u7d22\u5f15\u5728\u8bbf\u95ee\u65f6\u4e5f\u53ef\u4ee5\u628a\u78c1\u76d8\u7684\u968f\u673a\u8bfb\u53d6\u7684IO\u8f6c\u53d8\u6210\u7d22\u5f15\u67e5\u627e\u7684\u987a\u5e8fIO"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsxs)(s.li,{children:["\u7981\u6b62\u4f7f\u7528",(0,i.jsx)(s.code,{children:"SELECT *"})," \u5fc5\u987b\u4f7f\u7528",(0,i.jsx)(s.code,{children:"SELECT <\u5b57\u6bb5\u5217\u8868>"})," \u67e5\u8be2"]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["\u6d88\u8017\u66f4\u591a\u7684CPU\u548cIO\u4ee5\u7f51\u7edc\u5e26\u5bbd\u8d44\u6e90",(0,i.jsx)(s.br,{}),"\n","\u65e0\u6cd5\u4f7f\u7528\u8986\u76d6\u7d22\u5f15",(0,i.jsx)(s.br,{}),"\n","\u53ef\u51cf\u5c11\u8868\u7ed3\u6784\u53d8\u66f4\u5e26\u6765\u7684\u5f71\u54cd"]})}),"\n",(0,i.jsxs)(s.ol,{start:"6",children:["\n",(0,i.jsx)(s.li,{children:"\u7981\u6b62\u4f7f\u7528\u4e0d\u542b\u5b57\u6bb5\u5217\u8868\u7684INSERT\u8bed\u53e5"}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["\u5982\uff1a insert into values ('a','b','c');",(0,i.jsx)(s.br,{}),"\n","\u5e94\u4f7f\u7528 insert into t(c1,c2,c3) values ('a','b','c');"]})}),"\n",(0,i.jsxs)(s.ol,{start:"7",children:["\n",(0,i.jsx)(s.li,{children:"\u907f\u514d\u4f7f\u7528\u5b50\u67e5\u8be2\uff0c\u53ef\u4ee5\u628a\u5b50\u67e5\u8be2\u4f18\u5316\u4e3ajoin\u64cd\u4f5c"}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"\u901a\u5e38\u5b50\u67e5\u8be2\u5728in\u5b50\u53e5\u4e2d\uff0c\u4e14\u5b50\u67e5\u8be2\u4e2d\u4e3a\u7b80\u5355SQL(\u4e0d\u5305\u542bunion\u3001group by\u3001order by\u3001limit\u4ece\u53e5)\u65f6, \u624d\u53ef\u4ee5\u628a\u5b50\u67e5\u8be2\u8f6c\u5316\u4e3a\u5173\u8054\u67e5\u8be2\u8fdb\u884c\u4f18\u5316\u3002"}),(0,i.jsxs)(s.p,{children:["\u5b50\u67e5\u8be2\u6027\u80fd\u5dee\u7684\u539f\u56e0\uff1a",(0,i.jsx)(s.br,{}),"\n","\u5b50\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u65e0\u6cd5\u4f7f\u7528\u7d22\u5f15\uff0c\u901a\u5e38\u5b50\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u4f1a\u88ab\u5b58\u50a8\u5230\u4e34\u65f6\u8868\u4e2d\uff0c\u4e0d\u8bba\u662f\u5185\u5b58\u4e34\u65f6\u8868\u8fd8\u662f\u78c1\u76d8\u4e34\u65f6\u8868\u90fd\u4e0d\u4f1a\u5b58\u5728\u7d22\u5f15\uff0c\u6240\u4ee5\u67e5\u8be2\u6027\u80fd\u4f1a\u53d7\u5230\u4e00\u5b9a\u7684\u5f71\u54cd"]}),(0,i.jsx)(s.p,{children:"\u7279\u522b\u662f\u5bf9\u4e8e\u8fd4\u56de\u7ed3\u679c\u96c6\u6bd4\u8f83\u5927\u7684\u5b50\u67e5\u8be2\uff0c\u5176\u5bf9\u67e5\u8be2\u6027\u80fd\u7684\u5f71\u54cd\u4e5f\u5c31\u8d8a\u5927"}),(0,i.jsx)(s.p,{children:"\u7531\u4e8e\u5b50\u67e5\u8be2\u4f1a\u4ea7\u751f\u5927\u91cf\u7684\u4e34\u65f6\u8868\u4e5f\u6ca1\u6709\u7d22\u5f15\uff0c\u6240\u4ee5\u4f1a\u6d88\u8017\u8fc7\u591a\u7684CPU\u548cIO\u8d44\u6e90\uff0c\u4ea7\u751f\u5927\u91cf\u7684\u6162\u67e5\u8be2"})]}),"\n",(0,i.jsxs)(s.ol,{start:"8",children:["\n",(0,i.jsx)(s.li,{children:"\u907f\u514d\u4f7f\u7528JOIN\u5173\u8054\u592a\u591a\u7684\u8868"}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["\u5bf9\u4e8eMysql\u6765\u8bf4\uff0c\u662f\u5b58\u5728\u5173\u8054\u7f13\u5b58\u7684\uff0c\u7f13\u5b58\u7684\u5927\u5c0f\u53ef\u4ee5\u7531join_buffer_size\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e",(0,i.jsx)(s.br,{}),"\n","\u5728Mysql\u4e2d\uff0c\u5bf9\u4e8e\u540c\u4e00\u4e2aSQL\u591a\u5173\u8054\uff08join\uff09\u4e00\u4e2a\u8868\uff0c\u5c31\u4f1a\u591a\u5206\u914d\u4e00\u4e2a\u5173\u8054\u7f13\u5b58\uff0c\u5982\u679c\u5728\u4e00\u4e2aSQL\u4e2d\u5173\u8054\u7684\u8868\u8d8a\u591a\uff0c\n\u6240\u5360\u7528\u7684\u5185\u5b58\u4e5f\u5c31\u8d8a\u5927"]}),(0,i.jsx)(s.p,{children:"\u5982\u679c\u7a0b\u5e8f\u4e2d\u5927\u91cf\u7684\u4f7f\u7528\u4e86\u591a\u8868\u5173\u8054\u7684\u64cd\u4f5c\uff0c\u540c\u65f6 join_buffer_size \u8bbe\u7f6e\u7684\u4e5f\u4e0d\u5408\u7406\u7684\u60c5\u51b5\u4e0b\uff0c\u5c31\u5bb9\u6613\u9020\u6210\u670d\u52a1\u5668\u5185\u5b58\u6ea2\u51fa\u7684\u60c5\u51b5\uff0c\n\u5c31\u4f1a\u5f71\u54cd\u5230\u670d\u52a1\u5668\u6570\u636e\u5e93\u6027\u80fd\u7684\u7a33\u5b9a\u6027"}),(0,i.jsxs)(s.p,{children:["\u540c\u65f6\u5bf9\u4e8e\u5173\u8054\u64cd\u4f5c\u6765\u8bf4\uff0c\u4f1a\u4ea7\u751f\u4e34\u65f6\u8868\u64cd\u4f5c\uff0c\u5f71\u54cd\u67e5\u8be2\u6548\u7387\nMysql\u6700\u591a\u5141\u8bb8\u5173\u805461\u4e2a\u8868\uff0c",(0,i.jsx)(s.strong,{children:"\u5efa\u8bae\u4e0d\u8d85\u8fc75\u4e2a"})]})]}),"\n",(0,i.jsxs)(s.ol,{start:"9",children:["\n",(0,i.jsx)(s.li,{children:"\u5bf9\u5e94\u540c\u4e00\u5217\u8fdb\u884cor\u5224\u65ad\u65f6\uff0c\u4f7f\u7528in\u4ee3\u66ffor"}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"in \u7684\u503c\u4e0d\u8981\u8d85\u8fc7500\u4e2a"}),(0,i.jsx)(s.p,{children:"in \u64cd\u4f5c\u53ef\u4ee5\u66f4\u6709\u6548\u7684\u5229\u7528\u7d22\u5f15\uff0cor\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5f88\u5c11\u80fd\u5229\u7528\u5230\u7d22\u5f15"})]}),"\n",(0,i.jsxs)(s.ol,{start:"10",children:["\n",(0,i.jsx)(s.li,{children:"WHERE\u4ece\u53e5\u4e2d\u7981\u6b62\u5bf9\u5217\u8fdb\u884c\u51fd\u6570\u8f6c\u6362\u548c\u8ba1\u7b97"}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"\u5bf9\u5217\u8fdb\u884c\u51fd\u6570\u8f6c\u6362\u6216\u8ba1\u7b97\u65f6\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528\u7d22\u5f15"}),(0,i.jsxs)(s.p,{children:["\u4e0d\u63a8\u8350\uff1a",(0,i.jsx)(s.br,{}),"\n","where date(create_time)='20190101'",(0,i.jsx)(s.br,{}),"\n","\u63a8\u8350\uff1a",(0,i.jsx)(s.br,{}),"\n","where create_time >= '20190101' and create_time < '20190102'"]})]}),"\n",(0,i.jsxs)(s.ol,{start:"11",children:["\n",(0,i.jsx)(s.li,{children:"\u5728\u660e\u663e\u4e0d\u4f1a\u6709\u91cd\u590d\u503c\u65f6\u4f7f\u7528UNION ALL \u800c\u4e0d\u662fUNION"}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["UNION \u4f1a\u628a\u4e24\u4e2a\u7ed3\u679c\u96c6\u7684\u6240\u6709\u6570\u636e\u653e\u5230\u4e34\u65f6\u8868\u4e2d\u540e\u518d\u8fdb\u884c\u53bb\u91cd\u64cd\u4f5c",(0,i.jsx)(s.br,{}),"\n","UNION ALL \u4e0d\u4f1a\u518d\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u53bb\u91cd\u64cd\u4f5c"]})}),"\n",(0,i.jsxs)(s.ol,{start:"12",children:["\n",(0,i.jsx)(s.li,{children:"\u62c6\u5206\u590d\u6742\u7684\u5927 SQL \u4e3a\u591a\u4e2a\u5c0f SQL"}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5927 SQL \u903b\u8f91\u4e0a\u6bd4\u8f83\u590d\u6742\uff0c\u9700\u8981\u5360\u7528\u5927\u91cf CPU \u8fdb\u884c\u8ba1\u7b97\u7684 SQL"}),"\n",(0,i.jsx)(s.li,{children:"MySQL \u4e2d\uff0c\u4e00\u4e2a SQL \u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a CPU \u8fdb\u884c\u8ba1\u7b97"}),"\n",(0,i.jsx)(s.li,{children:"SQL \u62c6\u5206\u540e\u53ef\u4ee5\u901a\u8fc7\u5e76\u884c\u6267\u884c\u6765\u63d0\u9ad8\u5904\u7406\u6548\u7387"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u6570\u636e\u5e93\u64cd\u4f5c\u884c\u4e3a\u89c4\u8303",children:"\u6570\u636e\u5e93\u64cd\u4f5c\u884c\u4e3a\u89c4\u8303"}),"\n",(0,i.jsx)(s.p,{children:"\u8d85100\u4e07\u884c\u7684\u6279\u91cf\u5199\uff08UPDATE\u3001DELETE\u3001INSERT\uff09\u64cd\u4f5c\uff0c\u8981\u5206\u6279\u591a\u6b21\u8fdb\u884c\u64cd\u4f5c"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5927\u6279\u91cf\u64cd\u4f5c\u53ef\u80fd\u4f1a\u9020\u6210\u4e25\u91cd\u7684\u4e3b\u4ece\u5ef6\u8fdf",(0,i.jsx)(s.br,{}),"\n","\u4e3b\u4ece\u73af\u5883\u4e2d,\u5927\u6279\u91cf\u64cd\u4f5c\u53ef\u80fd\u4f1a\u9020\u6210\u4e25\u91cd\u7684\u4e3b\u4ece\u5ef6\u8fdf\uff0c\u5927\u6279\u91cf\u7684\u5199\u64cd\u4f5c\u4e00\u822c\u90fd\u9700\u8981\u6267\u884c\u4e00\u5b9a\u957f\u7684\u65f6\u95f4\uff0c\n\u800c\u53ea\u6709\u5f53\u4e3b\u5e93\u4e0a\u6267\u884c\u5b8c\u6210\u540e\uff0c\u624d\u4f1a\u5728\u5176\u4ed6\u4ece\u5e93\u4e0a\u6267\u884c\uff0c\u6240\u4ee5\u4f1a\u9020\u6210\u4e3b\u5e93\u4e0e\u4ece\u5e93\u957f\u65f6\u95f4\u7684\u5ef6\u8fdf\u60c5\u51b5"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["binlog\u65e5\u5fd7\u4e3arow\u683c\u5f0f\u65f6\u4f1a\u4ea7\u751f\u5927\u91cf\u7684\u65e5\u5fd7",(0,i.jsx)(s.br,{}),"\n","\u5927\u6279\u91cf\u5199\u64cd\u4f5c\u4f1a\u4ea7\u751f\u5927\u91cf\u65e5\u5fd7\uff0c\u7279\u522b\u662f\u5bf9\u4e8erow\u683c\u5f0f\u4e8c\u8fdb\u5236\u6570\u636e\u800c\u8a00\uff0c\u7531\u4e8e\u5728row\u683c\u5f0f\u4e2d\u4f1a\u8bb0\u5f55\u6bcf\u4e00\u884c\u6570\u636e\u7684\u4fee\u6539\uff0c\u6211\u4eec\u4e00\u6b21\u4fee\u6539\u7684\u6570\u636e\u8d8a\u591a\uff0c\n\u4ea7\u751f\u7684\u65e5\u5fd7\u91cf\u4e5f\u5c31\u4f1a\u8d8a\u591a\uff0c\u65e5\u5fd7\u7684\u4f20\u8f93\u548c\u6062\u590d\u6240\u9700\u8981\u7684\u65f6\u95f4\u4e5f\u5c31\u8d8a\u957f\uff0c\u8fd9\u4e5f\u662f\u9020\u6210\u4e3b\u4ece\u5ef6\u8fdf\u7684\u4e00\u4e2a\u539f\u56e0"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u907f\u514d\u4ea7\u751f\u5927\u4e8b\u52a1\u64cd\u4f5c",(0,i.jsx)(s.br,{}),"\n","\u5927\u6279\u91cf\u4fee\u6539\u6570\u636e\uff0c\u4e00\u5b9a\u662f\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u8fdb\u884c\u7684\uff0c\u8fd9\u5c31\u4f1a\u9020\u6210\u8868\u4e2d\u5927\u6279\u91cf\u6570\u636e\u8fdb\u884c\u9501\u5b9a\uff0c\u4ece\u800c\u5bfc\u81f4\u5927\u91cf\u7684\u963b\u585e\uff0c\u963b\u585e\u4f1a\u5bf9MySQL\u7684\u6027\u80fd\u4ea7\u751f\u975e\u5e38\u5927\u7684\u5f71\u54cd\n\u7279\u522b\u662f\u957f\u65f6\u95f4\u7684\u963b\u585e\u4f1a\u5360\u6ee1\u6240\u6709\u6570\u636e\u5e93\u7684\u53ef\u7528\u8fde\u63a5\uff0c\u8fd9\u4f1a\u4f7f\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u5176\u4ed6\u5e94\u7528\u65e0\u6cd5\u8fde\u63a5\u5230\u6570\u636e\u5e93\uff0c\u56e0\u6b64\u4e00\u5b9a\u8981\u6ce8\u610f\u5927\u6279\u91cf\u5199\u64cd\u4f5c\u8981\u8fdb\u884c\u5206\u6279"]}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:s}={...(0,l.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},79779:(n,s,e)=>{e.d(s,{R:()=>t,x:()=>c});var i=e(79474);const l={},r=i.createContext(l);function t(n){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(r.Provider,{value:s},n.children)}}}]);