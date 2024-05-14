"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7643],{40128:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(79474),o=n(28923),i=n(58902),s=n(4004),r=n(97107),l=n(653);const c={backToTopButton:"backToTopButton_bAnE",backToTopButtonShow:"backToTopButtonShow_xmj8"};var d=n(13274);function u(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),o=n[0],i=n[1],s=(0,a.useRef)(!1),c=(0,r.gk)(),d=c.startScroll,u=c.cancelScroll;return(0,r.Mq)((function(e,n){var a=e.scrollY,o=null==n?void 0:n.scrollY;o&&(s.current?s.current=!1:a>=o?(u(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,l.$)((function(e){e.location.hash&&(s.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,d.jsx)("button",{"aria-label":(0,i.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,c.backToTopButton,t&&c.backToTopButtonShow),type:"button",onClick:n})}},87666:(e,t,n)=>{n.d(t,{A:()=>s});n(79474);var a=n(58902),o=n(35232),i=n(13274);function s(e){var t=e.metadata,n=t.previousPage,s=t.nextPage;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(o.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,i.jsx)(o.A,{permalink:s,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},23908:(e,t,n)=>{n.d(t,{e:()=>l,i:()=>r});var a=n(79474),o=n(63483),i=n(13274),s=a.createContext(null);function r(e){var t=e.children,n=e.content,o=e.isBlogPostPage,r=function(e){var t=e.content,n=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n}}),[t,n])}({content:n,isBlogPostPage:void 0!==o&&o});return(0,i.jsx)(s.Provider,{value:r,children:t})}function l(){var e=(0,a.useContext)(s);if(null===e)throw new o.dV("BlogPostProvider");return e}},14014:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(79474),o=n(22159),i=["zero","one","two","few","many","other"];function s(e){return i.filter((function(t){return e.includes(t)}))}var r={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,o.A)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:s(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),r}var t,n}),[e])}function c(){var e=l();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var o=n.select(t),i=n.pluralForms.indexOf(o);return a[Math.min(i,a.length-1)]}(n,t,e)}}}},88714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(28923),o=n(79474),i=n(58783),s=n(4004),r=n(40128),l=n(87666),c=n(68174),d=n(44374);var u=n(58902),m=n(71590),g=n(32399),h=n(25031),p=n(35851);const b={blogGrid:"blogGrid_xwTo",postGridItem:"postGridItem_fn9U",itemTitle:"itemTitle_KROK",itemStick:"itemStick_CWiM",itemTags:"itemTags_jaPw",itemDate:"itemDate_sfdN",spotlight:"spotlight_Jc3d"};var v=n(13274),x={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},j={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};function f(e){var t=e.items;return(0,v.jsx)(g.P.div,{className:b.blogGrid,variants:x,initial:"hidden",animate:"visible",children:t.map((function(e,t){var n=e.content,a=n.metadata,o=n.frontMatter.title,i=a.permalink,s=a.date,r=a.tags,l=new Date(s),c=l.getFullYear()+"-"+("0"+(l.getMonth()+1)).slice(-2)+"-"+("0"+l.getDate()).slice(-2);return(0,v.jsxs)(g.P.div,{className:b.postGridItem,variants:j,onMouseMove:function(e){e.currentTarget.style.setProperty("--mouse-x",e.clientX+"px"),e.currentTarget.style.setProperty("--mouse-y",e.clientY+"px")},children:[(0,v.jsx)(h.A,{to:i,className:b.itemTitle,children:o}),(0,v.jsx)("div",{className:b.itemTags,children:r.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:(0,v.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10 15h4V9h-4v6Zm0 2v3a1 1 0 0 1-2 0v-3H5a1 1 0 0 1 0-2h3V9H5a1 1 0 1 1 0-2h3V4a1 1 0 1 1 2 0v3h4V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-4Z"})}),r.slice(0,2).map((function(e,t){var n=e.label,a=e.permalink;return(0,v.jsxs)(v.Fragment,{children:[0!==t&&"/",(0,v.jsx)(p.A,{label:n,permalink:a,className:"tag"},a)]})}))]})}),(0,v.jsx)("div",{className:b.itemDate,children:c})]},a.permalink)}))})}const k={blogTitle:"blogTitle_hAYS",blogDescription:"blogDescription_t6S0",blogList:"blogList_IsD8",blogSwithView:"blogSwithView_QpV9"};var T=n(62611);function N(e){var t=e.metadata.blogDescription;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.be,{title:"Blog",description:t}),(0,v.jsx)(d.A,{tag:"blog_posts_list"})]})}function A(e){var t=e.viewType,n=e.toggleViewType;return(0,v.jsxs)("div",{className:k.blogSwithView,children:[(0,v.jsx)(m.In,{icon:"ph:list",width:"24",height:"24",onClick:function(){return n("list")},color:"list"===t?"var(--ifm-color-primary)":"#ccc"}),(0,v.jsx)(m.In,{icon:"ph:grid-four",width:"24",height:"24",onClick:function(){return n("grid")},color:"grid"===t?"var(--ifm-color-primary)":"#ccc"})]})}function y(e){var t=e.metadata,n=e.items,a=function(){var e=(0,o.useState)("list"),t=e[0],n=e[1];return(0,o.useEffect)((function(){n(localStorage.getItem("viewType")||"list")}),[]),{viewType:t,toggleViewType:(0,o.useCallback)((function(e){n(e),localStorage.setItem("viewType",e)}),[])}}(),i=a.viewType,s=a.toggleViewType,d="list"===i,m="grid"===i;return(0,v.jsxs)(T.A,{children:[(0,v.jsx)("h2",{className:k.blogTitle,children:(0,v.jsx)(u.A,{id:"theme.blog.title.new",children:"\u535a\u5ba2"})}),(0,v.jsx)("p",{className:k.blogDescription,children:"\u4ee3\u7801\u4eba\u751f\uff1a\u7f16\u7ec7\u6280\u672f\u4e0e\u751f\u6d3b\u7684\u535a\u5ba2\u4e4b\u65c5"}),(0,v.jsx)(A,{viewType:i,toggleViewType:s}),(0,v.jsx)("div",{className:"row",children:(0,v.jsxs)("div",{className:"col col--12",children:[(0,v.jsxs)(v.Fragment,{children:[d&&(0,v.jsx)("div",{className:k.blogList,children:(0,v.jsx)(c.A,{items:n})}),m&&(0,v.jsx)(f,{items:n})]}),(0,v.jsx)(l.A,{metadata:t})]})}),(0,v.jsx)(r.A,{})]})}function w(e){return(0,v.jsxs)(i.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,v.jsx)(N,Object.assign({},e)),(0,v.jsx)(y,Object.assign({},e))]})}},52129:(e,t,n)=>{n.d(t,{A:()=>I});n(79474);var a=n(28923),o=n(23908),i=n(40316);const s={article:"article_y69D",cover:"cover_ksob",coverMask:"coverMask_km0g"};var r=n(13274);function l(e){var t,n=e.children,l=e.className,c=(0,o.e)(),d=c.frontMatter,u=c.assets,m=(0,i.h)().withBaseUrl,g=null!=(t=u.image)?t:d.image;return(0,r.jsxs)("article",{className:(0,a.A)(l,s.article),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[g&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{itemProp:"image",content:m(g,{absolute:!0})}),(0,r.jsx)("div",{className:s.cover,children:(0,r.jsx)("div",{className:s.coverMask,style:{backgroundImage:'url("'+g+'")'}})}),(0,r.jsx)("div",{style:{height:"120px"}})]}),n]})}var c=n(25031);const d={titleLink:"titleLink_BX2g"};function u(e){var t=e.className,n=(0,o.e)(),i=n.metadata,s=n.isBlogPostPage,l=i.permalink,u=i.title,m=s?"h1":"h2";return(0,r.jsx)(m,{className:(0,a.A)(d.title,t),itemProp:"headline",children:s?u:(0,r.jsx)(c.A,{itemProp:"url",to:l,className:d.titleLink,children:u})})}var m=n(58902),g=n(14014);const h={container:"container_iJTo",date:"date_ZxYJ",read:"read_TwWb",tagInfo:"tagInfo_Ym7h",tagList:"tagList_aAIV"};var p=n(35851),b=n(71590);function v(e){var t,n=e.readingTime,a=(t=(0,g.W)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))});return(0,r.jsx)("span",{className:"truncate",children:a(n)})}function x(e){var t=e.date,n=e.formattedDate;return(0,r.jsx)("time",{dateTime:t,itemProp:"datePublished",className:"truncate",children:n})}function j(e){var t=e.className,n=(0,o.e)().metadata,i=n.date,s=n.tags,l=n.formattedDate,c=n.readingTime,d=s.length>0;return(0,r.jsxs)("div",{className:(0,a.A)(h.container,"margin-bottom--md",t),children:[(0,r.jsxs)("div",{className:h.date,children:[(0,r.jsx)(b.In,{icon:"ri:calendar-line"}),(0,r.jsx)(x,{date:i,formattedDate:l})]}),d&&(0,r.jsxs)("div",{className:h.tagInfo,children:[(0,r.jsx)(b.In,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("div",{className:(0,a.A)("truncate",h.tagList),children:s.slice(0,3).map((function(e,t){var n=e.label,a=e.permalink;return(0,r.jsxs)("div",{children:[0!==t&&"/",(0,r.jsx)(p.A,{label:n,permalink:a,className:"tag"})]},a)}))})]}),void 0!==c&&(0,r.jsxs)("div",{className:h.date,children:[(0,r.jsx)(b.In,{icon:"ri:time-line"}),(0,r.jsx)(v,{readingTime:c})]})]})}function f(){var e=(0,o.e)().isBlogPostPage;return(0,r.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,r.jsx)(u,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(j,{})})]})}var k=n(44893),T=n(75821);function N(e){var t=e.children,n=e.className,i=(0,o.e)().isBlogPostPage;return(0,r.jsx)("div",{id:i?k.blogPostContainerID:void 0,className:(0,a.A)("markdown",n),itemProp:"articleBody",style:{position:"relative"},children:(0,r.jsx)(T.A,{children:t})})}var A=n(54858),y=["blogPostTitle"];function w(){return(0,r.jsx)("b",{children:(0,r.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function B(e){var t=e.blogPostTitle,n=(0,A.A)(e,y);return(0,r.jsxs)(c.A,Object.assign({"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),style:{display:"flex",alignItems:"center",gap:"0.25rem"}},n,{children:[(0,r.jsx)(w,{}),(0,r.jsx)(b.In,{icon:"ri:arrow-right-line"})]}))}const P={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_CYj5",blogPostInfo:"blogPostInfo_HuGF",blogPostInfoTags:"blogPostInfoTags_rGHT",blogPostAuthor:"blogPostAuthor_vaiQ",blogPostDetailsFull:"blogPostDetailsFull_DS_f",divider:"divider_DMLD"};function _(){var e=(0,o.e)(),t=e.metadata,n=e.isBlogPostPage,i=t.tags,s=t.title,l=(t.editUrl,t.hasTruncateMarker),c=t.date,d=t.formattedDate,u=t.readingTime,m=t.authors,g=!n&&l,h=i.length>0;m.length;return n?(0,r.jsx)("footer",{className:(0,a.A)("row docusaurus-mt-lg",n&&P.blogPostFooterDetailsFull),children:g&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":h}),children:(0,r.jsx)(B,{blogPostTitle:s,to:t.permalink})})}):(0,r.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,r.jsxs)("div",{className:P.blogPostInfo,children:[c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.In,{icon:"ri:calendar-line"}),(0,r.jsx)("time",{dateTime:c,className:P.blogPostDate,itemProp:"datePublished",children:d})]}),h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.In,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("span",{className:P.blogPostInfoTags,children:i.map((function(e){var t=e.label,n=e.permalink;return(0,r.jsx)(p.A,{label:t,permalink:n},n)}))})]}),u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.In,{icon:"ri:time-line"}),(0,r.jsx)("span",{className:(0,a.A)(P.blogPostReadTime,"blog__readingTime"),children:(0,r.jsx)(v,{readingTime:u})})]}),g&&(0,r.jsx)("div",{className:(0,a.A)("readMore",{"col--3":h}),children:(0,r.jsx)(B,{blogPostTitle:s,to:t.permalink})})]})})}function I(e){var t=e.children,n=e.className,i=(0,o.e)().isBlogPostPage?"":"blog-card margin-bottom--lg";return(0,r.jsxs)(l,{className:(0,a.A)(i,n),children:[(0,r.jsx)(f,{}),(0,r.jsx)(N,{children:t}),(0,r.jsx)(_,{})]})}},68174:(e,t,n)=>{n.d(t,{A:()=>l});n(79474);var a=n(32399),o=n(23908),i=n(52129),s=n(13274),r={from:{opacity:.01,y:100},to:function(e){return{opacity:1,y:0,transition:{type:"spring",damping:25,stiffness:100,bounce:.2,duration:.3,delay:.2*e}}}};function l(e){var t=e.items,n=e.component,l=void 0===n?i.A:n;return(0,s.jsx)(s.Fragment,{children:t.map((function(e,t){var n=e.content;return(0,s.jsx)(o.i,{content:n,children:(0,s.jsx)(a.P.div,{initial:"from",animate:"to",custom:t,viewport:{once:!0,amount:.8},variants:r,children:(0,s.jsx)(l,{children:(0,s.jsx)(n,{})})})},n.metadata.permalink)}))})}},11937:(e,t,n)=>{n.d(t,{A:()=>S});var a=n(54858),o=n(79474),i=n(37918),s=n(28923),r=n(48785),l=n(4004),c=n(45806);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=n(13274),m=["as"];function g(e){var t=e.as,n=(0,a.A)(e,m),o=(0,r.A)(),i=(0,c.M$)(o);return(0,u.jsx)(t,Object.assign({},n,{style:i,className:(0,s.A)(n.className,d.codeBlockContainer,l.G.common.codeBlock)}))}const h={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){var t=e.children,n=e.className;return(0,u.jsx)(g,{as:"pre",tabIndex:0,className:(0,s.A)(h.codeBlockStandalone,"thin-scrollbar",n),children:(0,u.jsx)("code",{className:h.codeBlockLines,children:t})})}var b=n(39625),v=n(98435),x=n(58262),j=n(90369);const f={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function k(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,o=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var r=o({line:t,className:(0,s.A)(n,a&&f.codeLine)}),l=t.map((function(e,t){return(0,u.jsx)("span",Object.assign({},i({token:e,key:t})),t)}));return(0,u.jsxs)("span",Object.assign({},r,{children:[a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:f.codeLineNumber}),(0,u.jsx)("span",{className:f.codeLineContent,children:l})]}):l,(0,u.jsx)("br",{})]}))}var T=n(56462),N=n(58902),A=n(790),y=n(84546);const w={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function B(e){var t=e.code,n=e.className,a=(0,o.useState)(!1),i=a[0],r=a[1],l=(0,o.useRef)(void 0),c=(0,o.useCallback)((function(){(0,T.A)(t),r(!0),l.current=window.setTimeout((function(){r(!1)}),1e3)}),[t]);return(0,o.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":i?(0,N.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,N.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,N.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,w.copyButton,i&&w.copyButtonCopied),onClick:c,children:(0,u.jsxs)("span",{className:w.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(A.A,{className:w.copyButtonIcon}),(0,u.jsx)(y.A,{className:w.copyButtonSuccessIcon})]})})}var P=n(28051);const _={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function I(e){var t=e.className,n=e.onClick,a=e.isEnabled,o=(0,N.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,a&&_.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,u.jsx)(P.A,{className:_.wordWrapButtonIcon,"aria-hidden":"true"})})}var C=n(71590);function L(e){var t,n=e.children,a=e.className,o=void 0===a?"":a,i=e.metastring,l=e.title,d=e.showLineNumbers,m=e.language,p=(0,v.p)().prism,f=p.defaultLanguage,T=p.magicComments,N=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=m?m:(0,c.Op)(o))?t:f),A=(0,r.A)(),y=(0,x.f)(),w=(0,c.wt)(i)||l,P=function(e){var t,n,a=(0,b.A)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),o=null!=(t=null==e||null==(n=e.match(a))?void 0:n.groups.icon)?t:"";return o?(0,u.jsx)(C.In,{icon:o,width:"16"}):null}(i),_=(0,c.Li)(n,{metastring:i,language:N,magicComments:T}),L=_.lineClassNames,F=_.code,S=null!=d?d:(0,c._u)(i);return(0,u.jsxs)(g,{as:"div",className:(0,s.A)(o,N&&!o.includes("language-"+N)&&"language-"+N),children:[w&&(0,u.jsxs)("div",{className:h.codeBlockTitle,children:[P,w,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:N})]}),(0,u.jsxs)("div",{className:h.codeBlockContent,children:[(0,u.jsx)(j.f4,{theme:A,code:F,language:null!=N?N:"text",children:function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,i=e.getTokenProps;return(0,u.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,s.A)(t,h.codeBlock,"thin-scrollbar"),style:n,children:(0,u.jsx)("code",{className:(0,s.A)(h.codeBlockLines,S&&h.codeBlockLinesWithNumbering),children:a.map((function(e,t){return(0,u.jsx)(k,{line:e,getLineProps:o,getTokenProps:i,classNames:L[t],showLineNumbers:S},t)}))})})}}),(0,u.jsxs)("div",{className:h.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,u.jsx)(I,{className:h.codeButton,onClick:function(){return y.toggle()},isEnabled:y.isEnabled}),(0,u.jsx)(B,{className:h.codeButton,code:F})]})]})]})}var F=["children"];function S(e){var t=e.children,n=(0,a.A)(e,F),s=(0,i.A)(),r=function(e){return o.Children.toArray(e).some((function(e){return(0,o.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof r?L:p;return(0,u.jsx)(l,Object.assign({},n,{children:r}),String(s))}},79364:(e,t,n)=>{n.d(t,{A:()=>s});n(79474);var a=n(25031),o=n(71590),i=n(13274);function s(e){var t=e.href;if(!t)return(0,i.jsx)(a.A,Object.assign({},e));var n={"github.com":"simple-icons:github","twitter.com":"logos:twitter"},s=Object.keys(n).find((function(e){return new RegExp("^https?://"+e).test(t)})),r=s?n[s]:null;return r?(0,i.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[r&&(0,i.jsx)(o.In,{className:"a-icon",style:{alignSelf:"center"},icon:r,width:16,height:16}),(0,i.jsx)(a.A,Object.assign({},e))]}):(0,i.jsx)(a.A,Object.assign({},e))}},62611:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(54858),o=(n(79474),n(28923)),i=n(61732);const s={containerWrapper:"containerWrapper_I0cV",myContainer:"myContainer_pGZb"};var r=n(13274),l=["children","maxWidth"];function c(e){var t=e.children,n=e.maxWidth,c=(0,a.A)(e,l);return(0,r.jsx)(i.A,Object.assign({},c,{children:(0,r.jsx)("div",{className:s.containerWrapper,children:(0,r.jsx)("div",{className:(0,o.A)(s.myContainer,"margin-vert--lg"),style:n?{maxWidth:n+"px"}:{},children:(0,r.jsx)("main",{children:t})})})}))}},35232:(e,t,n)=>{n.d(t,{A:()=>s});n(79474);var a=n(28923),o=n(25031),i=n(13274);function s(e){var t=e.permalink,n=e.title,s=e.subLabel,r=e.isNext;return(0,i.jsxs)(o.A,{className:(0,a.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},35851:(e,t,n)=>{n.d(t,{A:()=>r});n(79474);var a=n(28923),o=n(25031);const i={tag:"tag_b1dr",tagRegular:"tagRegular_t85v",tagWithCount:"tagWithCount_ZJSN"};var s=n(13274);function r(e){var t=e.permalink,n=e.label,r=e.count,l=e.className;return(0,s.jsxs)(o.A,{href:t,className:(0,a.A)(i.tag,r?i.tagWithCount:i.tagRegular,l),children:[n,r&&(0,s.jsx)("span",{children:r})]})}}}]);