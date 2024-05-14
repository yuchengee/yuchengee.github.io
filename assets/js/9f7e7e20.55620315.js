"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3396],{83863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=t(13274),o=t(79779);const c={slug:"docker-time-set",title:"docker\u8bbe\u7f6e\u5bb9\u5668\u65f6\u95f4",date:new Date("2022-12-27T00:00:00.000Z"),authors:"yuchengee",tags:["docker","linux"]},s=void 0,i={permalink:"/blog/docker-time-set",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2022/12-27-docker\u5bb9\u5668\u8bbe\u7f6e\u65f6\u95f4.md",source:"@site/blog/2022/12-27-docker\u5bb9\u5668\u8bbe\u7f6e\u65f6\u95f4.md",title:"docker\u8bbe\u7f6e\u5bb9\u5668\u65f6\u95f4",description:"\u6709\u65f6\u5019docker\u8d77\u4e86\u4e00\u4e2a\u5bb9\u5668\uff0c\u53d1\u73b0\u5bb9\u5668\u91cc\u9762\u7684\u65f6\u95f4\u548c\u5916\u9762\u4e0d\u4e00\u6837\uff0c\u76f8\u5dee\u5f88\u5927\uff0c\u60f3\u8981\u4fee\u6539\u65f6\u95f4\uff0c\u5374\u53d1\u73b0\u6ca1\u6709\u6743\u9650",date:"2022-12-27T00:00:00.000Z",formattedDate:"2022\u5e7412\u670827\u65e5",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:.4066666666666667,hasTruncateMarker:!1,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"docker-time-set",title:"docker\u8bbe\u7f6e\u5bb9\u5668\u65f6\u95f4",date:"2022-12-27T00:00:00.000Z",authors:"yuchengee",tags:["docker","linux"]},unlisted:!1,prevItem:{title:"docker\u4f7f\u7528\u6307\u5357",permalink:"/blog/docker-useage"},nextItem:{title:"\u624b\u673aQQ\u4e0b\u8f7d\u6587\u4ef6\u4f4d\u7f6e",permalink:"/blog/other-whereqqreceivefile"}},l={authorsImageUrls:[void 0]},a=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u6709\u65f6\u5019docker\u8d77\u4e86\u4e00\u4e2a\u5bb9\u5668\uff0c\u53d1\u73b0\u5bb9\u5668\u91cc\u9762\u7684\u65f6\u95f4\u548c\u5916\u9762\u4e0d\u4e00\u6837\uff0c\u76f8\u5dee\u5f88\u5927\uff0c\u60f3\u8981\u4fee\u6539\u65f6\u95f4\uff0c\u5374\u53d1\u73b0\u6ca1\u6709\u6743\u9650"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'date -s "2022-12-27 12:00:00"\n'})}),"\n",(0,r.jsx)(n.p,{children:"date: can't set date: Operation not permitted"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u65f6\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\u4fee\u6539\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u628a\u5bbf\u4e3b\u673a\u7684\u65f6\u95f4\u6587\u4ef6\u62f7\u8d1d\u8fdb\u5bb9\u5668\uff0c\u6ca1\u6709\u76ee\u5f55\u65f6\uff0c\u9700\u521b\u5efa"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker cp /usr/share/zoneinfo/Asia/Shanghai \u5bb9\u5668id:/usr/share/zoneinfo/Asia\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u8fdb\u5165\u5bb9\u5668\uff0c\u8bbe\u7f6e\u65f6\u95f4"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u770b\u65f6\u95f4"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/ # date\nTue Dec 27 12:00:11 CST 2022\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79779:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(79474);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);