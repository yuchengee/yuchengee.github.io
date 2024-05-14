"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4087],{62144:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var o=r(13274),s=r(79779);const l={slug:"zookeeper-basic-use",title:"zookeeper\u7684\u57fa\u672c\u4f7f\u7528",date:new Date("2024-04-01T00:00:00.000Z"),authors:"yuchengee",tags:["zookeeper","\u4e2d\u95f4\u4ef6","\u5206\u5e03\u5f0f"],keywords:["zookeeper","\u4e2d\u95f4\u4ef6","\u5206\u5e03\u5f0f"]},i=void 0,d={permalink:"/blog/zookeeper-basic-use",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2024/04-01-zookeeper\u7684\u57fa\u672c\u4f7f\u7528.md",source:"@site/blog/2024/04-01-zookeeper\u7684\u57fa\u672c\u4f7f\u7528.md",title:"zookeeper\u7684\u57fa\u672c\u4f7f\u7528",description:"zookeeper\u7684\u5b89\u88c5\u4e0e\u57fa\u672c\u547d\u4ee4",date:"2024-04-01T00:00:00.000Z",formattedDate:"2024\u5e744\u67081\u65e5",tags:[{label:"zookeeper",permalink:"/blog/tags/zookeeper"},{label:"\u4e2d\u95f4\u4ef6",permalink:"/blog/tags/\u4e2d\u95f4\u4ef6"},{label:"\u5206\u5e03\u5f0f",permalink:"/blog/tags/\u5206\u5e03\u5f0f"}],readingTime:4.423333333333333,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"zookeeper-basic-use",title:"zookeeper\u7684\u57fa\u672c\u4f7f\u7528",date:"2024-04-01T00:00:00.000Z",authors:"yuchengee",tags:["zookeeper","\u4e2d\u95f4\u4ef6","\u5206\u5e03\u5f0f"],keywords:["zookeeper","\u4e2d\u95f4\u4ef6","\u5206\u5e03\u5f0f"]},unlisted:!1,prevItem:{title:"zookeeper\u7684Java\u5ba2\u6237\u7aef\u57fa\u672c\u4f7f\u7528",permalink:"/blog/zookeeper-java-use"},nextItem:{title:"\u76f8\u540c\u4ee3\u7801\u5728\u4e0d\u540c\u5e73\u53f0\u4ea7\u751f\u4e0d\u4e00\u6837\u7684\u7ed3\u679c!",permalink:"/blog/java-image-diffres"}},c={authorsImageUrls:[void 0]},t=[{value:"\u4ec0\u4e48\u662fZookeeper",id:"\u4ec0\u4e48\u662fzookeeper",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:3},{value:"\u96c6\u7fa4\u90e8\u7f72",id:"\u96c6\u7fa4\u90e8\u7f72",level:3},{value:"\u5728\u5404\u4e2a\u8282\u70b9\u4e2d\u914d\u7f6ezoo.cfg",id:"\u5728\u5404\u4e2a\u8282\u70b9\u4e2d\u914d\u7f6ezoocfg",level:4},{value:"\u6bcf\u4e2a\u8282\u70b9\u5206\u522b\u521b\u5efa\u5982\u4e0b\u6587\u4ef6",id:"\u6bcf\u4e2a\u8282\u70b9\u5206\u522b\u521b\u5efa\u5982\u4e0b\u6587\u4ef6",level:4},{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"zookeeper\u7684\u5b89\u88c5\u4e0e\u57fa\u672c\u547d\u4ee4"}),"\n",(0,o.jsx)(n.p,{children:"\u4e4b\u524d\u8bb0\u5f55\u8fc7 kafka\u5b89\u88c5\u4e0e\u7b80\u5355\u4f7f\u7528\uff0c\u672c\u6587\u8bb0\u5f55 Zookeeper \u5b89\u88c5\u4e0e\u7b80\u5355\u4f7f\u7528\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/blog/kafka-useage",children:"kafka\u5b89\u88c5\u4e0e\u7b80\u5355\u4f7f\u7528"})}),"\n",(0,o.jsx)(n.h3,{id:"\u4ec0\u4e48\u662fzookeeper",children:"\u4ec0\u4e48\u662fZookeeper"}),"\n",(0,o.jsx)(n.p,{children:"ZooKeeper\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\uff0c\u5f00\u653e\u6e90\u7801\u7684\u5206\u5e03\u5f0f\u5e94\u7528\u7a0b\u5e8f\u534f\u8c03\u670d\u52a1\uff0c\u662fGoogle\u7684Chubby\u4e00\u4e2a\u5f00\u6e90\u7684\u5b9e\u73b0\uff0c\u662fHadoop\u548cHbase\u7684\u91cd\u8981\u7ec4\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a\u4e3a\u5206\u5e03\u5f0f\u5e94\u7528\u63d0\u4f9b\u4e00\u81f4\u6027\u670d\u52a1\u7684\u8f6f\u4ef6\uff0c\u63d0\u4f9b\u7684\u529f\u80fd\u5305\u62ec\uff1a\u914d\u7f6e\u7ef4\u62a4\u3001\u57df\u540d\u670d\u52a1\u3001\u5206\u5e03\u5f0f\u540c\u6b65\u3001\u7ec4\u670d\u52a1\u7b49\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"java\u73af\u5883"}),"\n",(0,o.jsxs)(n.li,{children:["\u4e0b\u8f7dzk\u5b89\u88c5\u5305",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"https://zookeeper.apache.org/releases.html#download",children:"https://zookeeper.apache.org/releases.html#download"})]}),"\n",(0,o.jsx)(n.li,{children:"\u4fee\u6539\u914d\u7f6e"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u521b\u5efadata\u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u6570\u636e\uff0clog\u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u65e5\u5fd7"}),"\n",(0,o.jsx)(n.li,{children:"\u5728conf\u6587\u4ef6\u5939\u4e2d\u627e\u5230zoo_sample.cfg\u6587\u4ef6\u590d\u5236\u4e00\u4efd\u5e76\u6539\u540d\u4e3azoo.cfg"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"dataDir=../data\ndataLogDir=../log\n... \u5176\u4ed6\u914d\u7f6e\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u542f\u52a8\u670d\u52a1",children:"\u542f\u52a8\u670d\u52a1"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u542f\u52a8/\u5173\u95ed\u670d\u52a1",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"bin/zkServer.sh start/stop"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u67e5\u770b\u72b6\u6001\uff08leader/follower\uff09",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"bin/zkServer.sh status"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u8fdb\u5165\u5ba2\u6237\u7aef\u547d\u4ee4\u884c\uff0c\u5982\u679c\u4e0d\u52a0\u53c2\u6570\uff0c\u9ed8\u8ba4\u5f53\u524d\u73af\u5883\u76842181\u7aef\u53e3zk",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"bin/zkCli.sh -server 127.0.0.1:2181"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5728conf/zoo.cfg \u4e2d\u53ef\u4ee5\u4fee\u6539\u7aef\u53e3\u53f7\u548c\u5176\u4ed6\u5404\u79cd\u914d\u7f6e\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u96c6\u7fa4\u90e8\u7f72",children:"\u96c6\u7fa4\u90e8\u7f72"}),"\n",(0,o.jsx)(n.h4,{id:"\u5728\u5404\u4e2a\u8282\u70b9\u4e2d\u914d\u7f6ezoocfg",children:"\u5728\u5404\u4e2a\u8282\u70b9\u4e2d\u914d\u7f6ezoo.cfg"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:"title='zoo.cfg' icon='logos:txt'",children:"server.1=x.x.x.x:2888:3888\nserver.2=x.x.x.x:2888:3888\nserver.3=x.x.x.x:2888:3888\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u7aef\u53e32181\u7531zookeeper\u5ba2\u6237\u7aef\u4f7f\u7528\uff0c\u7528\u4e8e\u8fde\u63a5\u5230zookeeper\u670d\u52a1\u5668\uff1b",(0,o.jsx)(n.br,{}),"\n","\u7aef\u53e32888\u7531\u5bf9\u7b49zookeeper\u670d\u52a1\u5668\u4f7f\u7528\uff0c\u7528\u4e8e\u4e92\u76f8\u901a\u4fe1\uff1b",(0,o.jsx)(n.br,{}),"\n","\u7aef\u53e33888\u7528\u4e8e\u9886\u5bfc\u9009\u4e3e\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u4efb\u4f55\u7aef\u53e3\u3002\u901a\u5e38\u4f7f\u7528\u76f8\u540c\u7684\u7aef\u53e3\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"\u6bcf\u4e2a\u8282\u70b9\u5206\u522b\u521b\u5efa\u5982\u4e0b\u6587\u4ef6",children:"\u6bcf\u4e2a\u8282\u70b9\u5206\u522b\u521b\u5efa\u5982\u4e0b\u6587\u4ef6"}),"\n",(0,o.jsx)(n.p,{children:"echo 1 > /tmp/zookeeper/myid\necho 2 > /tmp/zookeeper/myid\necho 3 > /tmp/zookeeper/myid"}),"\n",(0,o.jsx)(n.p,{children:"\u7136\u540e\u5c31\u53ef\u4ee5\u542f\u52a8\u96c6\u7fa4\u4e86\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u57fa\u672c\u547d\u4ee4",children:"\u57fa\u672c\u547d\u4ee4"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u65b0\u589e\u8282\u70b9 \uff08\u4e34\u65f6 -e ,\u5e26\u5e8f\u53f7 -s\uff0c\u9ed8\u8ba4\u521b\u5efa\u7684\u8282\u70b9\u662f: \u6c38\u4e45+\u4e0d\u5e26\u5e8f\u53f7\uff09"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'create -e -s /person/zs "\u5f20\u4e09"\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u4fee\u6539\u8282\u70b9\u7684\u503c"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'set /person/zs  "\u674e\u56db"\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u5220\u9664\u8282\u70b9"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# \u666e\u901a\u5220\u9664\n delete /person/zs   \n# \u9012\u5f52\u5220\u9664 \n deleteall /person/zs  \n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"\u67e5\u8be2\u8282\u70b9\u7ed3\u6784+\u503c+\u72b6\u6001"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"#\u67e5\u8be2\u5b50\u8282\u70b9[\u8be6\u7ec6]\u7ed3\u6784 \n ls  [-s] /person   \n\n# \u76d1\u542c\u8282\u70b9\u7ed3\u6784\u7684\u53d8\u5316 \uff08\u6bd4\u5982\u96c6\u7fa4\u4e2d\uff0c\u5728node1\u8f93\u5165\u547d\u4ee4\uff0c\u5728node2\u4fee\u6539\u8282\u70b9\uff0c\u53ea\u80fd\u76d1\u542c\u4e00\u6b21\uff0c\u7b2c\u4e8c\u6b21node2\u4fee\u6539,node1\u4e0d\u4f1a\u76d1\u542c\uff09   \n ls  [-w] /person     \n \n# \u67e5\u8be2\u8282\u70b9[\u8be6\u7ec6]\u503c\n get [-s] /person/zs  \n\n# \u76d1\u542c\u8282\u70b9\u503c\u7684\u53d8\u5316   \uff08\u6bd4\u5982\u96c6\u7fa4\u4e2d\uff0c\u5728node1\u8f93\u5165\u547d\u4ee4\uff0c\u5728node2\u4fee\u6539\u8282\u70b9\uff0c\u53ea\u80fd\u76d1\u542c\u4e00\u6b21\uff0c\u7b2c\u4e8c\u6b21node2\u4fee\u6539,node1\u4e0d\u4f1a\u76d1\u542c\uff09  \n get [-w] /person/zs  \n\n# \u67e5\u770b\u8282\u70b9\u72b6\u6001 \n stat /person        \n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"ls -s \u67e5\u8be2\u8282\u70b9\u8be6\u7ec6\u4fe1\u606f\uff0c\u5185\u5bb9\u8bf4\u660e"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["czxid\uff1a\u521b\u5efa\u8282\u70b9\u7684\u4e8b\u52a1 zxid\uff0c\u6bcf\u6b21\u4fee\u6539 ZooKeeper \u72b6\u6001\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a ZooKeeper \u4e8b\u52a1 ID\u3002",(0,o.jsx)(n.br,{}),"\n","\u4e8b\u52a1ID \u662f ZooKeeper \u4e2d\u6240 \u6709\u4fee\u6539\u603b\u7684\u6b21\u5e8f\u3002\u6bcf\u6b21\u4fee\u6539\u90fd\u6709\u552f\u4e00\u7684 zxid\uff0c\u5982\u679c zxid1 \u5c0f\u4e8ezxid2\uff0c\u90a3\u4e48\nzxid1 \u5728 zxid2 \u4e4b\u524d\u53d1\u751f\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"ctime\uff1aznode \u88ab\u521b\u5efa\u7684\u6beb\u79d2\u6570\uff08\u4ece 1970 \u5e74\u5f00\u59cb\uff09"}),"\n",(0,o.jsx)(n.li,{children:"mzxid\uff1aznode \u6700\u540e\u66f4\u65b0\u7684\u4e8b\u52a1 zxid"}),"\n",(0,o.jsx)(n.li,{children:"mtime\uff1aznode \u6700\u540e\u4fee\u6539\u7684\u6beb\u79d2\u6570\uff08\u4ece 1970 \u5e74\u5f00\u59cb\uff09"}),"\n",(0,o.jsx)(n.li,{children:"pZxid\uff1aznode \u6700\u540e\u66f4\u65b0\u7684\u5b50\u8282\u70b9 zxid"}),"\n",(0,o.jsx)(n.li,{children:"cversion\uff1aznode \u5b50\u8282\u70b9\u53d8\u5316\u53f7\uff0cznode \u5b50\u8282\u70b9\u4fee\u6539\u6b21\u6570"}),"\n",(0,o.jsx)(n.li,{children:"dataversion\uff1aznode \u6570\u636e\u53d8\u5316\u53f7\uff0c\u6bcf\u6b21\u4fee\u6539\u90fd\u4f1a\u52a01"}),"\n",(0,o.jsx)(n.li,{children:"aclVersion\uff1aznode \u8bbf\u95ee\u63a7\u5236\u5217\u8868\u7684\u53d8\u5316\u53f7"}),"\n",(0,o.jsx)(n.li,{children:"ephemeralOwner\uff1a\u5982\u679c\u662f\u4e34\u65f6\u8282\u70b9\uff0c\u8fd9\u4e2a\u662f znode \u62e5\u6709\u8005\u7684 session id\u3002\u5982\u679c\u4e0d\u662f\u4e34\u65f6\u8282\u70b9\u5219\u662f0\u3002"}),"\n",(0,o.jsx)(n.li,{children:"dataLength\uff1aznode \u7684\u6570\u636e\u957f\u5ea6"}),"\n",(0,o.jsx)(n.li,{children:"numChildren\uff1aznode \u5b50\u8282\u70b9\u6570\u91cf"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,o.jsx)(n.p,{children:"\u5728 Zookeeper \u4e2d\uff0c\u5b58\u5728\u4e00\u4e9b\u9ed8\u8ba4\u8282\u70b9\uff0c\u5b83\u4eec\u662f\u5728 Zookeeper \u670d\u52a1\u542f\u52a8\u65f6\u81ea\u52a8\u521b\u5efa\u7684\u3002\u8fd9\u4e9b\u9ed8\u8ba4\u8282\u70b9\u5bf9\u4e8e Zookeeper \u7684\u6b63\u5e38\u8fd0\u884c\u548c\u57fa\u672c\u529f\u80fd\u81f3\u5173\u91cd\u8981\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u9ed8\u8ba4\u8282\u70b9\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/zookeeper"}),": \u8fd9\u662f Zookeeper \u4e2d\u7684\u4e00\u4e2a\u7279\u6b8a\u8282\u70b9\uff0c\u5b83\u5305\u542b\u4e86\u5173\u4e8e Zookeeper \u670d\u52a1\u672c\u8eab\u7684\u72b6\u6001\u4fe1\u606f\u3002\u901a\u5e38\uff0c\u8fd9\u4e2a\u8282\u70b9\u4e0d\u4f1a\u88ab\u5ba2\u6237\u7aef\u76f4\u63a5\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/brokers"}),": \u5728\u4f7f\u7528 Zookeeper \u4f5c\u4e3a Kafka \u7684\u5143\u6570\u636e\u5b58\u50a8\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u7528\u4e8e\u5b58\u50a8\u6709\u5173 Kafka \u96c6\u7fa4\u4e2d\u6240\u6709 broker \u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/config"}),": \u8fd9\u4e2a\u8282\u70b9\u7528\u4e8e\u5b58\u50a8\u96c6\u7fa4\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f8b\u5982\u96c6\u7fa4\u7684 ID \u548c\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/consumers"}),": \u5728 Kafka \u4e2d\uff0c\u8fd9\u4e2a\u8282\u70b9\u7528\u4e8e\u5b58\u50a8\u6d88\u8d39\u8005\u7ec4\u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/locks"}),": \u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u7528\u4e8e\u5b58\u50a8\u5206\u5e03\u5f0f\u9501\u7684\u76f8\u5173\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/ephemerals"}),": \u8fd9\u4e2a\u8282\u70b9\u4e0b\u5305\u542b\u4e86\u6240\u6709\u4e34\u65f6\u8282\u70b9\uff08ephemeral nodes\uff09\u3002\u4e34\u65f6\u8282\u70b9\u662f\u4e0e\u5ba2\u6237\u7aef\u4f1a\u8bdd\u7ed1\u5b9a\u7684\u8282\u70b9\uff0c\u5f53\u4f1a\u8bdd\u7ed3\u675f\u65f6\uff0c\u8fd9\u4e9b\u8282\u70b9\u4e5f\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/ids"}),": \u8fd9\u4e2a\u8282\u70b9\u7528\u4e8e\u5b58\u50a8\u5ba2\u6237\u7aef\u4f1a\u8bdd ID \u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/quota"}),": \u8fd9\u4e2a\u8282\u70b9\u7528\u4e8e\u5b58\u50a8\u5173\u4e8e Zookeeper \u914d\u989d\u7ba1\u7406\u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"/system"}),": \u8fd9\u4e2a\u8282\u70b9\u5305\u542b\u4e86\u7cfb\u7edf\u7ea7\u522b\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u96c6\u7fa4\u7684\u7edf\u8ba1\u6570\u636e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u4e9b\u9ed8\u8ba4\u8282\u70b9\u901a\u5e38\u4e0d\u9700\u8981\u5ba2\u6237\u7aef\u76f4\u63a5\u64cd\u4f5c\uff0c\u5b83\u4eec\u662f Zookeeper \u5185\u90e8\u7ba1\u7406\u548c\u7ef4\u62a4\u7684\u4e00\u90e8\u5206\u3002\u7136\u800c\uff0c\u4e86\u89e3\u8fd9\u4e9b\u8282\u70b9\u7684\u5b58\u5728\u5bf9\u4e8e\u7406\u89e3 Zookeeper \u7684\u5de5\u4f5c\u539f\u7406\u548c\u8c03\u8bd5\u95ee\u9898\u662f\u5f88\u6709\u5e2e\u52a9\u7684\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u4e0a\u8ff0\u8282\u70b9\u53ef\u80fd\u4f1a\u6839\u636e Zookeeper \u7684\u7248\u672c\u548c\u914d\u7f6e\u6709\u6240\u4e0d\u540c\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u4f60\u5e94\u8be5\u53c2\u8003 Zookeeper \u7684\u5b98\u65b9\u6587\u6863\u548c\u4f60\u7684\u96c6\u7fa4\u914d\u7f6e\u6765\u4e86\u89e3\u5177\u4f53\u7684\u9ed8\u8ba4\u8282\u70b9\u4fe1\u606f\u3002\u6b64\u5916\uff0c\u4e00\u4e9b\u5e94\u7528\u7a0b\u5e8f\uff08\u5982 Kafka\uff09\u53ef\u80fd\u4f1a\u5728 Zookeeper \u4e2d\u521b\u5efa\u81ea\u5df1\u7684\u9ed8\u8ba4\u8282\u70b9\u6765\u5b58\u50a8\u5143\u6570\u636e\u548c\u914d\u7f6e\u4fe1\u606f\u3002\u5728\u4f7f\u7528\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u4f60\u5e94\u8be5\u9075\u5faa\u5b83\u4eec\u7684\u6587\u6863\u6765\u4e86\u89e3\u548c\u7ba1\u7406\u8fd9\u4e9b\u8282\u70b9\u3002"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},79779:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var o=r(79474);const s={},l=o.createContext(s);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);