"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5467],{87912:(e,t,n)=>{n.d(t,{A:()=>L});var r=n(54858),o=n(79474),i=n(98435),s=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var o=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,r.A)(e,s);n>=0?t[n].children.push(i):o.push(i)})),o}function c(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}function a(e){var t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function f(e,t){var n,r,o=t.anchorTopOffset,i=e.find((function(e){return a(e).top>=o}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,o.useRef)(0),t=(0,i.p)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){var t=(0,o.useRef)(void 0),n=u();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,i=e.minHeadingLevel,s=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],o=t;o<=n;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),c=f(l,{anchorTopOffset:n.current}),a=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===a)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var g=n(25031),v=n(13274);function h(e){var t=e.toc,n=e.className,r=e.linkClassName,o=e.isChild;return t.length?(0,v.jsx)("ul",{className:o?void 0:n,children:t.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(g.A,{to:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:r})]},e.id)}))}):null}const m=o.memo(h);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function L(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,a=e.linkClassName,f=void 0===a?"table-of-contents__link":a,u=e.linkActiveClassName,g=void 0===u?void 0:u,h=e.minHeadingLevel,L=e.maxHeadingLevel,y=(0,r.A)(e,p),x=(0,i.p)(),H=null!=h?h:x.tableOfContents.minHeadingLevel,E=null!=L?L:x.tableOfContents.maxHeadingLevel,w=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:H,maxHeadingLevel:E});return d((0,o.useMemo)((function(){if(f&&g)return{linkClassName:f,linkActiveClassName:g,minHeadingLevel:H,maxHeadingLevel:E}}),[f,g,H,E])),(0,v.jsx)(m,Object.assign({toc:w,className:s,linkClassName:f},y))}},43325:(e,t,n)=>{n.d(t,{L:()=>o});var r=n(79474);function o(e,t,n){(0,r.useInsertionEffect)((()=>e.on(t,n)),[e,t,n])}},5624:(e,t,n)=>{n.d(t,{L:()=>P});var r=n(22350),o=n(56304),i=n(79474),s=n(76067);const l=new WeakMap;let c;function a({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=l.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function f(e){e.forEach(a)}function u(e,t){c||"undefined"!=typeof ResizeObserver&&(c=new ResizeObserver(f));const n=function(e,t,n){var r;if("string"==typeof e){let o=document;t&&((0,s.V)(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach((e=>{let n=l.get(e);n||(n=new Set,l.set(e,n)),n.add(t),null==c||c.observe(e)})),()=>{n.forEach((e=>{const n=l.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==c||c.unobserve(e)}))}}const d=new Set;let g;function v(e){return d.add(e),g||(g=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach((e=>e(t)))},window.addEventListener("resize",g)),()=>{d.delete(e),!d.size&&g&&(g=void 0)}}var h=n(45855),m=n(28286);const p=50,L=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function x(e,t,n,r){const o=n[t],{length:i,position:s}=y[t],l=o.current,c=n.time;o.current=e["scroll"+s],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,h.q)(0,o.scrollLength,o.current);const a=r-c;o.velocity=a>p?0:(0,m.f)(o.current-l,a)}const H={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},E={start:0,center:.5,end:1};function w(e,t,n=0){let r=0;if(void 0!==E[e]&&(e=E[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}const b=[0,0];function N(e,t,n,r){let o=Array.isArray(e)?e:b,i=0,s=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,E[e]?e:"0"]),i=w(o[0],n,r),s=w(o[1],t),i-s}var O=n(53651),k=n(53312);const C={x:0,y:0};function A(e,t,n){let{offset:r=H.All}=n;const{target:o=e,axis:i="y"}=n,s="y"===i?"height":"width",l=o!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}}return n}(o,e):C,c=o===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(o),a={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let f=!t[i].interpolate;const u=r.length;for(let d=0;d<u;d++){const e=N(r[d],a[s],c[s],l[i]);f||e===t[i].interpolatorOffsets[d]||(f=!0),t[i].offset[d]=e}f&&(t[i].interpolate=(0,O.G)(t[i].offset,(0,k.Z)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function S(e,t,n,r={}){return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){x(e,"x",t,n),x(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&A(e,n,r)},notify:()=>t(n)}}var W=n(40671);const z=new WeakMap,B=new WeakMap,M=new WeakMap,j=e=>e===document.documentElement?window:e;function G(e,{container:t=document.documentElement,...n}={}){let r=M.get(t);r||(r=new Set,M.set(t,r));const o=L(),i=S(t,e,o,n);if(r.add(i),!z.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(W.uv.timestamp)},o=()=>{for(const e of r)e.notify()},i=()=>{W.Gt.read(e,!1,!0),W.Gt.read(n,!1,!0),W.Gt.update(o,!1,!0)};z.set(t,i);const c=j(t);window.addEventListener("resize",i,{passive:!0}),t!==document.documentElement&&B.set(t,(l=i,"function"==typeof(s=t)?v(s):u(s,l))),c.addEventListener("scroll",i,{passive:!0})}var s,l;const c=z.get(t);return W.Gt.read(c,!1,!0),()=>{var e;(0,W.WG)(c);const n=M.get(t);if(!n)return;if(n.delete(i),n.size)return;const r=z.get(t);z.delete(t),r&&(j(t).removeEventListener("scroll",r),null===(e=B.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}var R=n(76771);function T(e,t){(0,s.$)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const I=()=>({scrollX:(0,r.OQ)(0),scrollY:(0,r.OQ)(0),scrollXProgress:(0,r.OQ)(0),scrollYProgress:(0,r.OQ)(0)});function P({container:e,target:t,layoutEffect:n=!0,...r}={}){const s=(0,o.M)(I);return(n?R.E:i.useEffect)((()=>(T("target",t),T("container",e),G((({x:e,y:t})=>{s.scrollX.set(e.current),s.scrollXProgress.set(e.progress),s.scrollY.set(t.current),s.scrollYProgress.set(t.progress)}),{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(r.offset)]),s}}}]);