(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1653],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,d=k["".concat(u,".").concat(s)]||k[s]||c[s]||l;return n?a.createElement(d,i(i({ref:e},m),{},{components:n})):a.createElement(d,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},42320:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"Kustomize \u7ec4\u4ef6"},p={unversionedId:"end-user/components/kustomize",id:"end-user/components/kustomize",isDocsHomePage:!1,title:"Kustomize \u7ec4\u4ef6",description:"KubeVela \u7684 kustomize \u7ec4\u4ef6\u6ee1\u8db3\u4e86\u7528\u6237\u76f4\u63a5\u5bf9\u63a5 Yaml \u6587\u4ef6\u3001\u6587\u4ef6\u5939\u4f5c\u4e3a\u7ec4\u4ef6\u5236\u54c1\u7684\u9700\u6c42\u3002\u65e0\u8bba\u4f60\u7684 Yaml \u6587\u4ef6/\u6587\u4ef6\u5939\u662f\u5b58\u653e\u5728 Git \u4ed3\u5e93\u8fd8\u662f\u5bf9\u8c61\u5b58\u50a8\u5e93\uff08\u5982 OSS bucket\uff09\uff0cKubeVela \u5747\u80fd\u8bfb\u53d6\u5e76\u4ea4\u4ed8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/components/kustomize.md",sourceDirName:"end-user/components",slug:"/end-user/components/kustomize",permalink:"/zh/docs/next/end-user/components/kustomize",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/kustomize.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1630935267,formattedLastUpdatedAt:"2021/9/6",frontMatter:{title:"Kustomize \u7ec4\u4ef6"},sidebar:"docs",previous:{title:"Helm \u7ec4\u4ef6",permalink:"/zh/docs/next/end-user/components/helm"},next:{title:"\u963f\u91cc\u4e91 ACK",permalink:"/zh/docs/next/end-user/components/cloud-services/terraform/alibaba-ack"}},u=[{value:"\u6765\u81ea OSS bucket",id:"\u6765\u81ea-oss-bucket",children:[{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[]}]},{value:"\u6765\u81ea Git \u4ed3\u5e93",id:"\u6765\u81ea-git-\u4ed3\u5e93",children:[]}],o={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"KubeVela \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},(0,l.kt)("inlineCode",{parentName:"a"},"kustomize")," \u7ec4\u4ef6"),"\u6ee1\u8db3\u4e86\u7528\u6237\u76f4\u63a5\u5bf9\u63a5 Yaml \u6587\u4ef6\u3001\u6587\u4ef6\u5939\u4f5c\u4e3a\u7ec4\u4ef6\u5236\u54c1\u7684\u9700\u6c42\u3002\u65e0\u8bba\u4f60\u7684 Yaml \u6587\u4ef6/\u6587\u4ef6\u5939\u662f\u5b58\u653e\u5728 Git \u4ed3\u5e93\u8fd8\u662f\u5bf9\u8c61\u5b58\u50a8\u5e93\uff08\u5982 OSS bucket\uff09\uff0cKubeVela \u5747\u80fd\u8bfb\u53d6\u5e76\u4ea4\u4ed8\u3002"),(0,l.kt)("h2",{id:"\u6765\u81ea-oss-bucket"},"\u6765\u81ea OSS bucket"),(0,l.kt)("p",null,"\u6765\u81ea OSS bucket \u4ed3\u5e93\u7684 YAML \u6587\u4ef6\u5939\u90e8\u7f72\uff0c\u6211\u4eec\u4ee5\u4e00\u4e2a\u540d\u4e3a bucket-comp \u7684\u7ec4\u4ef6\u4e3a\u4f8b\u3002\u7ec4\u4ef6\u5bf9\u5e94\u7684\u90e8\u7f72\u6587\u4ef6\u5b58\u653e\u5728\u4e91\u5b58\u50a8 OSS bucket\uff0c\u4f7f\u7528\u5bf9\u5e94 bucket \u540d\u79f0\u662f definition-registry\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"kustomize.yaml")," \u6765\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"oss-cn-beijing.aliyuncs.com")," \u7684\u8fd9\u4e2a\u5730\u5740\uff0c\u6240\u5728\u8def\u5f84\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"./app/prod/"),"\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u7684 OSS bucket \u9700\u8981\u8eab\u4efd\u9a8c\u8bc1, \u521b\u5efa Secret \u5bf9\u8c61:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create secret generic bucket-secret --from-literal=accesskey=<your-ak> --from-literal=secretkey=<your-sk>\nsecret/bucket-secret created\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u8be5\u7ec4\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: kustomize\n      properties:\n        repoType: oss\n        # \u5982\u679c bucket \u662f\u79c1\u7528\u6743\u9650\uff0c\u4f1a\u9700\u8981\u4f60\u63d0\u4f9b\n        secretRef: bucket-secret\n        url: oss-cn-beijing.aliyuncs.com\n        oss:\n          bucketName: definition-registry\n        path: ./app/prod/\nEOF\n")),(0,l.kt)("p",null,"\u8bf7\u590d\u5236\u4e0a\u9762\u7684\u4ee3\u7801\u5757\uff0c\u76f4\u63a5\u90e8\u7f72\u5230\u8fd0\u884c\u65f6\u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"application.core.oam.dev/bucket-app created\n")),(0,l.kt)("p",null,"\u6700\u540e\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela ls")," \u6765\u67e5\u770b\u4ea4\u4ed8\u6210\u529f\u540e\u7684\u5e94\u7528\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela ls\nAPP                     COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \nbucket-app              bucket-comp kustomize           running healthy         2021-08-28 18:53:14 +0800 CST\n")),(0,l.kt)("p",null,"bucket-app APP \u7684 PHASE \u4e3a running\uff0c\u540c\u65f6 STATUS \u4e3a healthy\u3002\u5e94\u7528\u90e8\u7f72\u6210\u529f\uff01"),(0,l.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u9009"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b\u5b50"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repoType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a oss \u6807\u5fd7 kustomize \u914d\u7f6e\u6765\u81ea OSS bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"oss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e bucket \u8fdb\u884c\u540c\u6b65\uff0c\u4e0e\u8c03\u8c10 kustomize \u7684\u65f6\u95f4\u95f4\u9694 \u9ed8\u8ba4\u503c5m\uff085\u5206\u949f\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"10m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"bucket \u7684 endpoint\uff0c\u65e0\u9700\u586b\u5199 scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"oss-cn-beijing.aliyuncs.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u4e00\u4e2a Secret \u7684\u540d\u5b57\uff0c\u8be5Secret\u662f\u8bfb\u53d6 bucket \u7684\u51ed\u8bc1\u3002Secret \u5305\u542b accesskey \u548c secretkey \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"sec-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u64cd\u4f5c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4 20s"),(0,l.kt)("td",{parentName:"tr",align:null},"60s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b kustomization.yaml \u6587\u4ef6\u7684\u76ee\u5f55, \u6216\u8005\u5305\u542b\u4e00\u7ec4 YAML \u6587\u4ef6\uff08\u7528\u4ee5\u751f\u6210 kustomization.yaml )\u7684\u76ee\u5f55\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"./prod")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.bucketName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"bucket \u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"your-bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.provider"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009 generic \u6216 aws\uff0c\u82e5\u4ece aws EC2 \u83b7\u53d6\u51ed\u8bc1\u5219\u586b aws\u3002\u9ed8\u8ba4 generic\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"generic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.region"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"bucket \u5730\u533a"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u6765\u81ea-git-\u4ed3\u5e93"},"\u6765\u81ea Git \u4ed3\u5e93"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u9009"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b\u5b50"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repoType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u503c\u4e3a git \u6807\u5fd7 kustomize \u914d\u7f6e\u6765\u81ea Git \u4ed3\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"git")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e Git \u4ed3\u5e93\u8fdb\u884c\u540c\u6b65\uff0c\u4e0e\u8c03\u8c10 helm release \u7684\u65f6\u95f4\u95f4\u9694 \u9ed8\u8ba4\u503c5m\uff085\u5206\u949f\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"10m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null},"Git \u4ed3\u5e93\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/oam-dev/terraform-controller"},"https://github.com/oam-dev/terraform-controller"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u6709\u62c9\u53d6 Git \u4ed3\u5e93\u6240\u9700\u51ed\u8bc1\u7684 Secret \u5bf9\u8c61\u540d\uff0c\u5bf9 HTTP/S \u57fa\u672c\u9274\u6743 Secret \u4e2d\u5fc5\u987b\u5305\u542b  username \u548c password \u5b57\u6bb5\u3002\u5bf9 SSH \u5f62\u5f0f\u9274\u6743\u5fc5\u987b\u5305\u542b identity, identity.pub \u548c known_hosts \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"sec-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u64cd\u4f5c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4 20s"),(0,l.kt)("td",{parentName:"tr",align:null},"60s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"git.branch"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"Git \u5206\u652f\uff0c\u9ed8\u8ba4\u4e3a master"),(0,l.kt)("td",{parentName:"tr",align:null},"dev")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: git-app\nspec:\n  components:\n    - name: git-comp\n      type: kustomize\n      properties:\n        repoType: git\n        url: https://github.com/<path>/<to>/<repo>\n        git:\n          branch: master\n        path: ./app/dev/\n")))}m.isMDXComponent=!0}}]);