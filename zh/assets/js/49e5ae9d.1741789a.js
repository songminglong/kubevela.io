(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[88512],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20503:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return i},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),p={title:"\u8bbf\u95ee\u90e8\u7f72\u7684\u5e94\u7528",description:"\u672c\u9875\u9762\u4ecb\u7ecd\u901a\u8fc7\u4e3a\u5e94\u7528\u5206\u914d\u7f51\u5173\u7b56\u7565\uff0c\u6216\u8bbe\u7f6e\u5e94\u7528\u7684 Service \u7c7b\u578b\u4e3a Loadbalancer \u6216 NodePort \u5b9e\u73b0\u5e94\u7528\u7684\u96c6\u7fa4\u5916\u8bbf\u95ee\u3002"},l={unversionedId:"deliver-app/gateway",id:"deliver-app/gateway",isDocsHomePage:!1,title:"\u8bbf\u95ee\u90e8\u7f72\u7684\u5e94\u7528",description:"\u672c\u9875\u9762\u4ecb\u7ecd\u901a\u8fc7\u4e3a\u5e94\u7528\u5206\u914d\u7f51\u5173\u7b56\u7565\uff0c\u6216\u8bbe\u7f6e\u5e94\u7528\u7684 Service \u7c7b\u578b\u4e3a Loadbalancer \u6216 NodePort \u5b9e\u73b0\u5e94\u7528\u7684\u96c6\u7fa4\u5916\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deliver-app/gateway.md",sourceDirName:"deliver-app",slug:"/deliver-app/gateway",permalink:"/zh/docs/next/deliver-app/gateway",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/deliver-app/gateway.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1640087002,formattedLastUpdatedAt:"2021/12/21",frontMatter:{title:"\u8bbf\u95ee\u90e8\u7f72\u7684\u5e94\u7528",description:"\u672c\u9875\u9762\u4ecb\u7ecd\u901a\u8fc7\u4e3a\u5e94\u7528\u5206\u914d\u7f51\u5173\u7b56\u7565\uff0c\u6216\u8bbe\u7f6e\u5e94\u7528\u7684 Service \u7c7b\u578b\u4e3a Loadbalancer \u6216 NodePort \u5b9e\u73b0\u5e94\u7528\u7684\u96c6\u7fa4\u5916\u8bbf\u95ee\u3002"}},i=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]}],c={toc:i};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u9700\u8981\u4f60\u7684\u96c6\u7fa4\u5df2\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"Ingress \u63a7\u5236\u5668"),"\u3002")),(0,o.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela show ingress\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n|  NAME  |                                 DESCRIPTION                                  |      TYPE      | REQUIRED | DEFAULT |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n| http   | Specify the mapping relationship between the http path and the workload port | map[string]int | true     |         |\n| domain | Specify the domain you want to expose                                        | string         | true     |         |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n")),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,o.kt)("p",null,"\u90e8\u7f72\u5230\u96c6\u7fa4\u540e\uff0c\u68c0\u67e5\u5e94\u7528\u72b6\u6001\u4e3a running\uff0c\u5e76\u4e14\u72b6\u6001\u662f healthy\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get application first-vela-app -w\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME             COMPONENT        TYPE         PHASE            HEALTHY   STATUS   AGE\nfirst-vela-app   express-server   webservice   healthChecking                      14s\nfirst-vela-app   express-server   webservice   running          true               42s\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u5e26\u6709\u4e91\u5382\u5546\u7684\u8d1f\u8f7d\u5747\u8861\u673a\u5236\u53ef\u4ee5\u901a\u8fc7 Application \u67e5\u770b\u5230\u8bbf\u95ee\u7684 IP\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application first-vela-app -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\n  namespace: default\nspec:\n...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: 47.111.233.220'\n      type: ingress\n  status: running\n...\n")),(0,o.kt)("p",null,"\u7136\u540e\u5c31\u80fd\u591f\u901a\u8fc7\u8fd9\u4e2a IP\uff0c\u6765\u8bbf\u95ee\u8be5\u5e94\u7528\u7a0b\u5e8f\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H "Host:testsvc.example.com" http://<your ip address>/\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')))}s.isMDXComponent=!0}}]);