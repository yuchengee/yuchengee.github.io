"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2647],{56176:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>t});var c=r(13274),d=r(79779);const s={slug:"docker-useage",title:"docker\u4f7f\u7528\u6307\u5357",date:new Date("2023-01-10T00:00:00.000Z"),authors:"yuchengee",tags:["docker","linux"]},l=void 0,i={permalink:"/blog/docker-useage",editUrl:"https://github.com/yuchengee/blog/edit/master/blog/2023/01-10-docker\u4f7f\u7528\u6307\u5357.md",source:"@site/blog/2023/01-10-docker\u4f7f\u7528\u6307\u5357.md",title:"docker\u4f7f\u7528\u6307\u5357",description:"docker\u4f7f\u7528\u6307\u5357",date:"2023-01-10T00:00:00.000Z",formattedDate:"2023\u5e741\u670810\u65e5",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:2.953333333333333,hasTruncateMarker:!0,authors:[{name:"yuchengee",title:"\u5e9f\u54c1\u5de5\u7a0b\u5e08",url:"https://github.com/yuchengee",imageURL:"/img/logo.png",key:"yuchengee"}],frontMatter:{slug:"docker-useage",title:"docker\u4f7f\u7528\u6307\u5357",date:"2023-01-10T00:00:00.000Z",authors:"yuchengee",tags:["docker","linux"]},unlisted:!1,prevItem:{title:"linux\u5e38\u7528\u547d\u4ee4",permalink:"/blog/linux-cmd-useage"},nextItem:{title:"docker\u8bbe\u7f6e\u5bb9\u5668\u65f6\u95f4",permalink:"/blog/docker-time-set"}},o={authorsImageUrls:[void 0]},t=[{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",level:3},{value:"2. \u955c\u50cf\u4e0e\u5bb9\u5668\u64cd\u4f5c",id:"2-\u955c\u50cf\u4e0e\u5bb9\u5668\u64cd\u4f5c",level:3},{value:"3. \u7f51\u7edc\u76f8\u5173",id:"3-\u7f51\u7edc\u76f8\u5173",level:3},{value:"4. \u5bb9\u5668\u5185\u7f3a\u5931\u4e00\u4e9b\u547d\u4ee4",id:"4-\u5bb9\u5668\u5185\u7f3a\u5931\u4e00\u4e9b\u547d\u4ee4",level:3},{value:"5. \u5e38\u7528\u955c\u50cf\u5bb9\u5668\u542f\u52a8\u547d\u4ee4",id:"5-\u5e38\u7528\u955c\u50cf\u5bb9\u5668\u542f\u52a8\u547d\u4ee4",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"docker\u4f7f\u7528\u6307\u5357"}),"\n",(0,c.jsx)(n.h3,{id:"1-\u5b89\u88c5",children:"1. \u5b89\u88c5"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0b\u8f7d\u79bb\u7ebf\u5b89\u88c5\u5305\n",(0,c.jsx)(n.a,{href:"https://download.docker.com/linux/static/stable/x86_64/docker-20.10.7.tgz",children:"https://download.docker.com/linux/static/stable/x86_64/docker-20.10.7.tgz"})]}),"\n",(0,c.jsxs)(n.p,{children:["1.\u89e3\u538b\n",(0,c.jsx)(n.code,{children:"tar xvf docker-18.06.1-ce.tgz"})]}),"\n",(0,c.jsxs)(n.p,{children:["2.\u590d\u5236\u4e8c\u8fdb\u5236\u6587\u4ef6\u5230bin\u76ee\u5f55\u4e0b\n",(0,c.jsx)(n.code,{children:"cp docker/* /usr/bin/"})]}),"\n",(0,c.jsxs)(n.p,{children:["3.\u542f\u52a8docker\u8fdb\u7a0b\n",(0,c.jsx)(n.code,{children:"dockerd &"})]}),"\n",(0,c.jsxs)(n.p,{children:["4.\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8(\u53ef\u9009)\n",(0,c.jsx)(n.code,{children:"systemctl enable docker"})]}),"\n",(0,c.jsxs)(n.p,{children:["5.\u9a8c\u8bc1docker\u662f\u5426\u6b63\u5e38\n",(0,c.jsx)(n.code,{children:"Docker version \u6216\u8005 systemctl status docker"})]}),"\n",(0,c.jsx)(n.h3,{id:"2-\u955c\u50cf\u4e0e\u5bb9\u5668\u64cd\u4f5c",children:"2. \u955c\u50cf\u4e0e\u5bb9\u5668\u64cd\u4f5c"}),"\n",(0,c.jsx)(n.p,{children:"1.\u955c\u50cf\u76f8\u5173\u64cd\u4f5c"}),"\n",(0,c.jsxs)(n.p,{children:["\u62c9\u53d6\u955c\u50cf\uff1a",(0,c.jsx)(n.code,{children:"docker pull \u955c\u50cf\u540d\u79f0:\u7248\u672c\u53f7"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5220\u9664\u955c\u50cf\uff1a",(0,c.jsx)(n.code,{children:"docker rmi \u955c\u50cf\u540d\u79f0:\u7248\u672c\u53f7"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5236\u4f5c\u955c\u50cf: ",(0,c.jsx)(n.code,{children:"docker build -t \u955c\u50cf\u540d:\u7248\u672c\u53f7 ."})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bb9\u5668\u4fdd\u5b58\u4e3a\u955c\u50cf\uff1a",(0,c.jsx)(n.code,{children:"docker commit \u5bb9\u5668id \u955c\u50cf\u540d:\u7248\u672c\u53f7"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bfc\u51fa\u955c\u50cf\u4e3a\u6587\u4ef6\uff1a",(0,c.jsx)(n.code,{children:"docker save -o \u955c\u50cf\u540d.tar \u539f\u59cb\u955c\u50cf\u540d"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u52a0\u8f7d\u955c\u50cf\u6587\u4ef6\uff1a",(0,c.jsx)(n.code,{children:"docker load -i \u955c\u50cf\u540d.tar"})]}),"\n",(0,c.jsx)(n.p,{children:"2.\u5bb9\u5668\u76f8\u5173\u64cd\u4f5c"}),"\n",(0,c.jsxs)(n.p,{children:["\u542f\u52a8\u5bb9\u5668:",(0,c.jsx)(n.code,{children:"docker run -p 5438:5432 -p 8878:8080 -v /data1/temp:/geo/src --name \u5bb9\u5668\u540d -i -t \u955c\u50cf\u540d:\u7248\u672c\u53f7 /bin/bash"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"-p 5438:5432\uff1a \u7aef\u53e3\u6620\u5c04\uff0c\u672c\u5730\u7aef\u53e3\u4e0e\u5bb9\u5668\u5185\u7aef\u53e3\u5bf9\u5e94"}),"\n",(0,c.jsx)(n.li,{children:"-v\uff1a \u6302\u8f7d\u76ee\u5f55\uff0c\u672c\u5730\u76ee\u5f55\u4e0e\u5bb9\u5668\u5185\u76ee\u5f55\u5bf9\u5e94"}),"\n",(0,c.jsx)(n.li,{children:"\u2013-name\uff1a\u4e3a\u5bb9\u5668\u8bbe\u7f6e\u4e00\u4e2a\u540d\u5b57"}),"\n",(0,c.jsx)(n.li,{children:"-i -t\uff1a\u4f7f\u5f97\u5bb9\u5668\u542f\u52a8\u540e\u80fd\u83b7\u53d6\u8be5\u5bb9\u5668\u7684shell"}),"\n",(0,c.jsx)(n.li,{children:"-d\uff1a\u4f7f\u5bb9\u5668\u4ee5\u540e\u53f0\u7684\u5f62\u5f0f\u8fd0\u884c\uff0c\u4e0d\u4f1a\u5173\u95ed"}),"\n",(0,c.jsx)(n.li,{children:"-m 3g\uff1a\u5bb9\u5668\u5185\u5b58\u9650\u52363G"}),"\n",(0,c.jsx)(n.li,{children:"--cpus 3\uff1a\u5bb9\u5668cpu\u9650\u52363\u4e2acpu"}),"\n",(0,c.jsx)(n.li,{children:"--network testnet\uff1a\u6307\u5b9a\u5bb9\u5668\u4f7f\u7528\u7684\u7f51\u7edc\uff0c\u4e00\u822c\u4e0d\u7528\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3ahost\u4f7f\u7528\u672c\u5730\u7684\u7f51\u7edc\u3002"}),"\n",(0,c.jsx)(n.li,{children:"/bin/bash\uff1a\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f\u8fd0\u884c\u65f6\u9700\u8981\u9700\u8981\u6267\u884c\u7684\u547d\u4ee4\uff0c\u8fd9\u91cc\u6267\u884c/bin/bash\u4f7f\u5f97\u5bb9\u5668\u8fd0\u884c\u540e\u542f\u52a8\u4e00\u4e2abash\u4f9b\u6211\u4eec\u548c\u5bb9\u5668\u4ea4\u4e92\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fdb\u5165\u5bb9\u5668\uff1a",(0,c.jsx)(n.code,{children:"docker exec -it 1b92115d37b8 /bin/sh"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u9000\u51fa\u5bb9\u5668\uff1a",(0,c.jsx)(n.code,{children:"exit\u6216ctrl+p+q"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u505c\u6b62\u5bb9\u5668\uff1a",(0,c.jsx)(n.code,{children:"docker stop 1b92115d37b8"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u505c\u6b62\u540e\u542f\u52a8\u5bb9\u5668\uff1a",(0,c.jsx)(n.code,{children:"docker start 1b92115d37b8"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5220\u9664\u5bb9\u5668\uff1a",(0,c.jsx)(n.code,{children:"docker rm 1b92115d37b8"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u540e\u53f0\u8fd0\u884c\u5bb9\u5668\uff1a",(0,c.jsx)(n.code,{children:"-d -it"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6709\u7684\u955c\u50cf\u6ca1\u6709\u524d\u53f0\u8fdb\u7a0b\uff0c\u8d77\u5bb9\u5668\u65f6\uff0c\u4e00\u8fd0\u884c\u5c31\u81ea\u52a8\u7ed3\u675f\u4e86\u3002\u52a0\u4e0a\u8fd9\u4e2a\u5c31\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u5bb9\u5668\u4e86\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u67e5\u770b\u5bb9\u5668\u5177\u4f53\u4fe1\u606f\uff1a",(0,c.jsx)(n.code,{children:"docker inspect 1b92115d37b8"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u67e5\u770b\u5bb9\u5668\u5185\u5b58cpu\uff1a",(0,c.jsx)(n.code,{children:"docker stats 1b92115d37b8"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bb9\u5668\u66f4\u65b0\n",(0,c.jsx)(n.code,{children:"docker container update [OPTIONS] CONTAINER [CONTAINER...]"}),"\n\u7528\u4e8e\u66f4\u65b0\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u7684\u914d\u7f6e\u3002\u8fd9\u4e2a\u547d\u4ee4\u5141\u8bb8\u4f60\u4fee\u6539\u5bb9\u5668\u7684\u5404\u79cd\u5c5e\u6027\uff0c\u4f8b\u5982\u8d44\u6e90\u9650\u5236\u3001\u73af\u5883\u53d8\u91cf\u3001\u91cd\u542f\u7b56\u7565\u7b49\uff0c\u800c\u65e0\u9700\u505c\u6b62\u548c\u91cd\u65b0\u542f\u52a8\u5bb9\u5668\u3002",(0,c.jsx)(n.br,{}),"\n","\u5e38\u7528\u9009\u9879\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["--memory \u6216 -m\uff1a\u8bbe\u7f6e\u5bb9\u5668\u53ef\u4ee5\u4f7f\u7528\u7684\u6700\u5927\u5185\u5b58\u91cf\u3002\n",(0,c.jsx)(n.code,{children:'docker container update --memory="256m" <container_id_or_name>'})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["--cpus\uff1aCPU\u6570\u91cf\n",(0,c.jsx)(n.code,{children:"docker container update --cpus 1 <container_id_or_name>"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["--memory-swap\uff1a\u8bbe\u7f6e\u5bb9\u5668\u53ef\u4ee5\u4f7f\u7528\u7684\u6700\u5927\u5185\u5b58\u52a0\u4ea4\u6362\u7a7a\u95f4\u7684\u603b\u91cf\u3002\n",(0,c.jsx)(n.code,{children:'docker container update --memory-swap="512m" <container_id_or_name>'})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["--restart\uff1a\u66f4\u65b0\u5bb9\u5668\u7684\u91cd\u542f\u7b56\u7565\u3002\n",(0,c.jsx)(n.code,{children:"docker container update --restart unless-stopped <container_id_or_name>"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"docker container update --help"})}),"\n",(0,c.jsx)(n.h3,{id:"3-\u7f51\u7edc\u76f8\u5173",children:"3. \u7f51\u7edc\u76f8\u5173"}),"\n",(0,c.jsxs)(n.p,{children:["\u67e5\u770b\u7f51\u7edc\uff1a",(0,c.jsx)(n.code,{children:"docker network ls"}),"\n\u521b\u5efabridge\u7f51\u7edc\uff1a",(0,c.jsx)(n.code,{children:"docker network create testnet"})]}),"\n",(0,c.jsx)(n.p,{children:"\u7f51\u7edc\u6545\u969c\uff0c\u5982\u679c\u5bb9\u5668\u4e4b\u95f4\u65e0\u6cd5\u76f8\u4e92\u8bbf\u95ee\uff0cping,\u6267\u884c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"firewall-cmd --permanent --zone=trusted --change-interface=docker0\nfirewall-cmd --reload\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4e0a\u9762\u4e0d\u8d77\u6548\uff0c\u6267\u884c\u4e0b\u9762\u547d\u4ee4,\u89e3\u51b3\u5404\u5bb9\u5668\u4e4b\u95f4\u65e0\u6cd5\u76f8\u4e92\u8bbf\u95ee\u95ee\u9898"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"firewall-cmd --zone=public --add-masquerade --permanent\nfirewall-cmd --reload\nsystemctl restart docker\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u7f51\u7edc\u4e0d\u901a\uff0c\u5bb9\u5668\u542f\u52a8\u65f6\u62a5\u4e0b\u9762\u7684\u8b66\u544a\uff0c\u5bfc\u81f4\u670d\u52a1\u5668\u4e0d\u80fd\u8bbf\u95ee\uff0c\u89e3\u51b3\u65b9\u6848\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"https://www.cnblogs.com/python-wen/p/11224828.html",children:"https://www.cnblogs.com/python-wen/p/11224828.html"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"WARNING: IPv4 forwarding is disabled. Networking will not work."})}),"\n",(0,c.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b65\uff1a\u5728\u5bbf\u4e3b\u673a\u4e0a\u6267\u884c",(0,c.jsx)(n.code,{children:'echo "net.ipv4.ip_forward=1" >>/usr/lib/sysctl.d/00-system.conf'})]}),"\n",(0,c.jsxs)(n.p,{children:["\u7b2c\u4e8c\u6b65\uff1a\u91cd\u542fnetwork\u548cdocker(\u53ef\u4ee5\u4e0d\u91cd\u542f)\u670d\u52a1\uff1a",(0,c.jsx)(n.code,{children:"systemctl restart network && systemctl restart docker"})]}),"\n",(0,c.jsx)(n.h3,{id:"4-\u5bb9\u5668\u5185\u7f3a\u5931\u4e00\u4e9b\u547d\u4ee4",children:"4. \u5bb9\u5668\u5185\u7f3a\u5931\u4e00\u4e9b\u547d\u4ee4"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5bb9\u5668\u91cc\u9762\u6ca1\u6709vi\u7684\u89e3\u51b3\u65b9\u6cd5"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"apt-get update\napt-get install vim\n"})}),"\n",(0,c.jsx)(n.h3,{id:"5-\u5e38\u7528\u955c\u50cf\u5bb9\u5668\u542f\u52a8\u547d\u4ee4",children:"5. \u5e38\u7528\u955c\u50cf\u5bb9\u5668\u542f\u52a8\u547d\u4ee4"}),"\n",(0,c.jsx)(n.p,{children:"nginx"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"docker run -d --name nging --network host -v /wrw/conf:/etc/nginx/conf.d nginx:1.17.5\n"})}),"\n",(0,c.jsx)(n.p,{children:"mysql"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"docker run -d -p 3308:3306 --name mysql0310 -v /mysqldata/conf/:/etc/mysql/conf.d  \\\n-v /mysqldata/logs:/var/log -v /mysqldata/data:/var/lib/mysql --restart=always \\\n-e MYSQL_ROOT_PASSWORD=root mysql:5.7\n"})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},79779:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var c=r(79474);const d={},s=c.createContext(d);function l(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);