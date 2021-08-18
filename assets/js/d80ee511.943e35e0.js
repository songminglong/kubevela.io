(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7745],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12808:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),o={title:"Ingress"},i={unversionedId:"end-user/traits/ingress",id:"end-user/traits/ingress",isDocsHomePage:!1,title:"Ingress",description:"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.",source:"@site/docs/end-user/traits/ingress.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/ingress",permalink:"/docs/next/end-user/traits/ingress",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/ingress.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625206152,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Ingress"},sidebar:"docs",previous:{title:"Alibaba ROS",permalink:"/docs/next/end-user/components/cloud-services/alibaba-ros"},next:{title:"Manual Scaler",permalink:"/docs/next/end-user/traits/manual-scaler"}},l=[],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ingress")," trait exposes a component to public Internet via a valid domain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela show ingress\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n|  NAME  |                                 DESCRIPTION                                  |      TYPE      | REQUIRED | DEFAULT |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n| http   | Specify the mapping relationship between the http path and the workload port | map[string]int | true     |         |\n| domain | Specify the domain you want to expose                                        | string         | true     |         |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n")),(0,s.kt)("p",null,"Attach a ",(0,s.kt)("inlineCode",{parentName:"p"},"ingress")," trait to the component you want to expose and deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"application.core.oam.dev/first-vela-app created\n")),(0,s.kt)("p",null,"Check the status until we see ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"running")," and services are ",(0,s.kt)("inlineCode",{parentName:"p"},"healthy"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get application first-vela-app -w\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"NAME             COMPONENT        TYPE         PHASE            HEALTHY   STATUS   AGE\nfirst-vela-app   express-server   webservice   healthChecking                      14s\nfirst-vela-app   express-server   webservice   running          true               42s\n")),(0,s.kt)("p",null,"Check the trait detail for the its visiting url:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application first-vela-app -o yaml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\n  namespace: default\nspec:\n...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: 47.111.233.220'\n      type: ingress\n  status: running\n...\n")),(0,s.kt)("p",null,"Then you will be able to visit this application via its domain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl -H "Host:testsvc.example.com" http://<your ip address>/\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')))}c.isMDXComponent=!0}}]);