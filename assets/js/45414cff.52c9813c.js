(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6248],{38872:(e,n,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/logo.44f2cc6.180.png 180w",images:[{path:r.p+"assets/ideal-img/logo.44f2cc6.180.png",width:180,height:180}],src:r.p+"assets/ideal-img/logo.44f2cc6.180.png",toString:function(){return r.p+"assets/ideal-img/logo.44f2cc6.180.png"},placeholder:void 0,width:180,height:180},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nDWQTyjDYRzG34W1oVZOIgdKaGiEtKXNkixizDJOhIM/bSdRXNlKMTlLihK5MA5bsWIJF0Qa86+wCTn8lp/Z++7R+5Pj0/fT8/T9EAAyQgjRlqotJXn5gaHOFnGws120mZoCphqDhd/+GaIpKHL1mQ0wG7WJjsZ67KzOotlYm3B023B84HNK0MjwgFWTX4D+tjrq33BSe5cJm4tT8CxP00X3BAWAWIxaSSQc9g/39sBYXszWF+YgPO/hJehD5PEIXs8a42A8Hvfz/ejdzRXmJ8dxcbgB0BDY5xluz70IXQc5x8EooZRGeWCUgv58IXx/gtfTFXw+7HNAAhljUcJreRBFkQUvzyDc7UIIbQEQEH66Yd7tbby9vUvT1ljsG61mM81SpdEl9yjiwi0+Itd0zGGnpblqNOobrNLn7pkZl1Kh4LISimQ56nQ66CurE0U5hahWV/3p+ZepTJJbUpPkAZUyXUxLSRWzMzIDFeoySTghRPYLUf7zuB9otC0AAAAASUVORK5CYII="}},9999:(e,n,r)=>{"use strict";r.r(n),r.d(n,{assets:()=>S,contentTitle:()=>D,default:()=>V,frontMatter:()=>T,metadata:()=>E,toc:()=>C});var t=r(13274),a=r(79779),l=r(79474),i=r(28923),s=r(97107),o=r(20241),c=r(51766),u=r(21604),d=r(41165),h=r(98439);function p(e){var n,r;return null!=(n=null==(r=l.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,l.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function m(e){var n=e.values,r=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:function(e){return p(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,d.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,a=(0,o.W6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:t});return[(0,u.aZ)(i),(0,l.useCallback)((function(e){if(i){var n=new URLSearchParams(a.location.search);n.set(i,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[i,a])]}function b(e){var n,r,t,a,i=e.defaultValue,s=e.queryString,o=void 0!==s&&s,u=e.groupId,d=m(e),p=(0,l.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!g({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),b=p[0],j=p[1],f=x({queryString:o,groupId:u}),v=f[0],w=f[1],A=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,h.Dv)(n),t=r[0],a=r[1],[t,(0,l.useCallback)((function(e){n&&a.set(e)}),[n,a])]),y=A[0],k=A[1],I=function(){var e=null!=v?v:y;return g({value:e,tabValues:d})?e:null}();return(0,c.A)((function(){I&&j(I)}),[I]),{selectedValue:b,selectValue:(0,l.useCallback)((function(e){if(!g({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);j(e),w(e),k(e)}),[w,k,d]),tabValues:d}}var j=r(37918);const f={tabList:"tabList_DxMt",tabItem:"tabItem_weTe"};function v(e){var n=e.className,r=e.block,a=e.selectedValue,l=e.selectValue,o=e.tabValues,c=[],u=(0,s.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=c.indexOf(n),t=o[r].value;t!==a&&(u(n),l(t))},h=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,a=c.indexOf(e.currentTarget)+1;r=null!=(t=c[a])?t:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;r=null!=(l=c[i])?l:c[c.length-1]}null==(n=r)||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,l=e.attributes;return(0,t.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},l,{className:(0,i.A)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)}))})}function w(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,l.cloneElement)(s,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function A(e){var n=b(e);return(0,t.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,t.jsx)(v,Object.assign({},e,n)),(0,t.jsx)(w,Object.assign({},e,n))]})}function y(e){var n=(0,j.A)();return(0,t.jsx)(A,Object.assign({},e,{children:p(e.children)}),String(n))}const k={tabItem:"tabItem_1jB_"};function I(e){var n=e.children,r=e.hidden,a=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(k.tabItem,a),hidden:r,children:n})}const T={slug:"markdown-features",title:"markdown\u8bed\u6cd5\u7279\u6027",date:"2022-12-11T15:00",authors:"yuchengee",tags:["\u7f51\u7ad9\u5efa\u8bbe"]},D=void 0,E={permalink:"/blog/markdown-features",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2022/12-11-markdown\u8bed\u6cd5.mdx",source:"@site/blog/2022/12-11-markdown\u8bed\u6cd5.mdx",title:"markdown\u8bed\u6cd5\u7279\u6027",description:"markdown\u975e\u5e38\u597d\u7528\uff0c\u53ef\u4ee5\u5199\u51fa\u6f02\u4eae\u7684\u6587\u6863\uff0c\u5982\u679c\u4e0d\u4f1a\u4f7f\u7528\uff0c\u53c2\u8003markdown\u8bed\u6cd5\u5b66\u4e60\u3002",date:"2022-12-11T15:00:00.000Z",formattedDate:"2022\u5e7412\u670811\u65e5",tags:[{label:"\u7f51\u7ad9\u5efa\u8bbe",permalink:"/blog/tags/\u7f51\u7ad9\u5efa\u8bbe"}],readingTime:1.91,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"markdown-features",title:"markdown\u8bed\u6cd5\u7279\u6027",date:"2022-12-11T15:00",authors:"yuchengee",tags:["\u7f51\u7ad9\u5efa\u8bbe"]},unlisted:!1,prevItem:{title:"\u8bfb\u5199txt\u6587\u6863\u7c7b\u6587\u4ef6",permalink:"/blog/java-read-write-txt"},nextItem:{title:"\u535a\u5ba2\u4f18\u5316\u8bb0\u5f55",permalink:"/blog/build-web-1"}},S={authorsImageUrls:[void 0]},C=[{value:"1. MDX",id:"1-mdx",level:3},{value:"2. Details \u5143\u7d20\u793a\u4f8b",id:"2-details-\u5143\u7d20\u793a\u4f8b",level:3},{value:"3. \u9009\u9879\u5361",id:"3-\u9009\u9879\u5361",level:3},{value:"4. \u56fe\u7247",id:"4-\u56fe\u7247",level:3},{value:"5. \u6587\u4ef6\u4e0b\u8f7d",id:"5-\u6587\u4ef6\u4e0b\u8f7d",level:3},{value:"6.\u8df3\u8f6c",id:"6\u8df3\u8f6c",level:3},{value:"7.\u6362\u884c",id:"7\u6362\u884c",level:3},{value:"8. \u63d0\u793a-\u8b66\u544a\u7b49",id:"8-\u63d0\u793a-\u8b66\u544a\u7b49",level:3},{value:"9. \u4ee3\u7801\u5757",id:"9-\u4ee3\u7801\u5757",level:3},{value:"10. \u94fe\u63a5",id:"10-\u94fe\u63a5",level:3}];function M(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["markdown\u975e\u5e38\u597d\u7528\uff0c\u53ef\u4ee5\u5199\u51fa\u6f02\u4eae\u7684\u6587\u6863\uff0c\u5982\u679c\u4e0d\u4f1a\u4f7f\u7528\uff0c\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:"markdown\u8bed\u6cd5\u5b66\u4e60"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"1-mdx",children:"1. MDX"}),"\n",(0,t.jsx)(n.p,{children:"\u535a\u5ba2\u6587\u7ae0\u652f\u6301 Docusaurus Markdown features \u529f\u80fd\uff0c\u4f8b\u5982 MDX\uff0c\u53ef\u4ee5\u5728\u535a\u5ba2\u4e2d\u8c03\u7528js\u3002"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"\u4f7f\u7528 React \u7684\u5f3a\u5927\u529f\u80fd\u521b\u5efa\u4ea4\u4e92\u5f0f\u535a\u5ba2\u6587\u7ae0\u3002"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<button onClick={() => alert('button clicked!')}>Click me!</button>\n"})}),(0,t.jsx)("button",{onClick:()=>alert("button clicked!"),children:"Click me!"})]}),"\n",(0,t.jsx)(n.h3,{id:"2-details-\u5143\u7d20\u793a\u4f8b",children:"2. Details \u5143\u7d20\u793a\u4f8b"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"\u70b9\u6211\uff01"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:"\u8fd9\u662f\u8be6\u60c5\u5185\u5bb9"}),(0,t.jsx)("br",{}),(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.p,{children:"\u5d4c\u5957\u7684\u4e0b\u62c9\u680f\uff01 \u5185\u542b\u60ca\u559c\u2026\u2026"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"3-\u9009\u9879\u5361",children:"3. \u9009\u9879\u5361"}),"\n",(0,t.jsxs)(n.p,{children:["Docusaurus\u63d0\u4f9b\u4e86 ",(0,t.jsx)(n.code,{children:"Tabs"})," \u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 MDX \u5728 Markdown \u4e2d\u4f7f\u7528"]}),"\n","\n","\n",(0,t.jsxs)(y,{children:[(0,t.jsx)(I,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function helloWorld() {\n  console.log('Hello, world!');\n}\n"})})}),(0,t.jsx)(I,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'def hello_world():\n  print("Hello, world!")\n'})})}),(0,t.jsx)(I,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"4-\u56fe\u7247",children:"4. \u56fe\u7247"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u7f51\u7ad9logo",src:r(37884).A+"",width:"180",height:"180"})}),"\n",(0,t.jsx)(n.h3,{id:"5-\u6587\u4ef6\u4e0b\u8f7d",children:"5. \u6587\u4ef6\u4e0b\u8f7d"}),"\n",(0,t.jsx)("a",{target:"\\_blank",href:r(38872).default,children:" \u4e0b\u8f7d\u8fd9\u4e2a\u56fe\u7247 "}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(55156).A+"",children:"\u4f7f\u7528markdown\u4e0b\u8f7d\u8fd9\u4e2a\u6587\u4ef6"})}),"\n",(0,t.jsx)(n.h3,{id:"6\u8df3\u8f6c",children:"6.\u8df3\u8f6c"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/blog/build-web-1",children:"\u535a\u5ba2\u4f18\u5316-\u540c\u8def\u5f84"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/blog/java-xml-wr",children:"XML\u8bfb\u5199\u76f8\u5173-\u76f8\u5bf9\u8def\u5f84"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/blog/java-xml-wr",children:"XML\u8bfb\u5199\u76f8\u5173-\u7edd\u5bf9\u8def\u5f84"})]}),"\n",(0,t.jsx)(n.h3,{id:"7\u6362\u884c",children:"7.\u6362\u884c"}),"\n",(0,t.jsx)(n.p,{children:"\u5728Markdown\u4e2d\uff0c\u8981\u5b9e\u73b0\u6362\u884c\uff0c\u53ef\u4ee5\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u53cc\u7a7a\u683c\u52a0\u56de\u8f66\uff08",(0,t.jsx)(n.code,{children:"  "})," + \u56de\u8f66\uff09\uff1a\u5728\u4e00\u884c\u7684\u672b\u5c3e\u52a0\u4e0a\u4e24\u4e2a\u7a7a\u683c\uff0c\u7136\u540e\u56de\u8f66\uff0c\u5373\u53ef\u8fdb\u884c\u6362\u884c\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u76f4\u63a5\u63d2\u5165\u4e00\u4e2a\u7a7a\u884c\uff1a\u5728\u4e24\u884c\u6587\u672c\u4e4b\u95f4\u63d2\u5165\u4e00\u4e2a\u7a7a\u884c\uff0c\u5373\u53ef\u5b9e\u73b0\u6362\u884c\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528HTML\u7684 ",(0,t.jsx)(n.code,{children:"<br>"})," \u6807\u7b7e\uff1a\u5728\u9700\u8981\u6362\u884c\u7684\u5730\u65b9\u63d2\u5165 ",(0,t.jsx)(n.code,{children:"<br>"})," \u6807\u7b7e\uff0c\u5373\u53ef\u5b9e\u73b0\u6362\u884c\u6548\u679c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u8fd9\u662f\u7b2c\u4e00\u884c  \n\u8fd9\u662f\u7b2c\u4e8c\u884c\n\n\u8fd9\u662f\u7b2c\u4e09\u884c<br>\u8fd9\u662f\u7b2c\u56db\u884c\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u4e09\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u5b9e\u73b0\u5728Markdown\u4e2d\u6362\u884c\u7684\u6548\u679c\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"8-\u63d0\u793a-\u8b66\u544a\u7b49",children:"8. \u63d0\u793a-\u8b66\u544a\u7b49"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:":::note\n\u8fd9\u662f\u5907\u6ce8\u7684\u6587\u672c\u3002\n:::\n\n:::tip\n\u8fd9\u662f\u63d0\u793a\u6587\u672c\u3002\n:::\n\n:::info\n\u8fd9\u662f\u4fe1\u606f\u6587\u672c\u3002\n:::\n\n:::caution\n\u8fd9\u662f\u8b66\u544a\u6587\u672c\u3002\n:::\n\n\n:::danger\n\u8fd9\u662f\u5371\u9669\u6587\u672c\u3002\n:::\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u5907\u6ce8\u7684\u6587\u672c\u3002"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u63d0\u793a\u6587\u672c\u3002"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u4fe1\u606f\u6587\u672c\u3002"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u8b66\u544a\u6587\u672c\u3002"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u5371\u9669\u6587\u672c\u3002"})}),"\n",(0,t.jsx)(n.h3,{id:"9-\u4ee3\u7801\u5757",children:"9. \u4ee3\u7801\u5757"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title='user.entity.ts' icon='logos:nestjs'",children:"@Entity()\nexport class User {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  @Column()\n  name: string\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"title='user.entity.ts' icon='logos:java'",children:"public class User {\n  private String name;\n\n  // highlight-start\n  private int age;\n  // highlight-end\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"10-\u94fe\u63a5",children:"10. \u94fe\u63a5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740](https://xxx "\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740")\n'})})]})}function V(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(M,{...e})}):M(e)}},55156:(e,n,r)=>{"use strict";r.d(n,{A:()=>t});const t=r.p+"assets/files/test-2b8c42c7354c1440f19b8e7fb66d26d1.zip"},37884:(e,n,r)=>{"use strict";r.d(n,{A:()=>t});const t=r.p+"assets/images/logo-91532b7e84c3d584fbdfa05eec614b08.png"},79779:(e,n,r)=>{"use strict";r.d(n,{R:()=>i,x:()=>s});var t=r(79474);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);