(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1609],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25412:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),o={title:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81"},i={unversionedId:"end-user/binding-traits",id:"end-user/binding-traits",isDocsHomePage:!1,title:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81",description:"\u8fd0\u7ef4\u7279\u5f81\uff08Traits\uff09\u4e5f\u662f\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u6838\u5fc3\u7ec4\u6210\u4e4b\u4e00\uff0c\u5b83\u4f5c\u7528\u4e8e\u7ec4\u4ef6\u5c42\u9762\uff0c\u53ef\u4ee5\u8ba9\u4f60\u81ea\u7531\u5730\u7ed9\u7ec4\u4ef6\u7ed1\u5b9a\u5404\u5f0f\u5404\u6837\u7684\u8fd0\u7ef4\u52a8\u4f5c\u548c\u7b56\u7565\u3002\u6bd4\u5982\u4e1a\u52a1\u5c42\u9762\u7684\u914d\u7f6e\u7f51\u5173\u3001\u6807\u7b7e\u7ba1\u7406\u548c\u5bb9\u5668\u6ce8\u5165\uff08Sidecar\uff09\uff0c\u53c8\u6216\u8005\u662f\u7ba1\u7406\u5458\u5c42\u9762\u7684\u5f39\u6027\u6269\u7f29\u5bb9\u3001\u7070\u5ea6\u53d1\u5e03\u7b49\u7b49\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/binding-traits.md",sourceDirName:"end-user",slug:"/end-user/binding-traits",permalink:"/zh/docs/next/end-user/binding-traits",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/binding-traits.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1630496336,formattedLastUpdatedAt:"2021/9/1",frontMatter:{title:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81"},sidebar:"docs",previous:{title:"\u7ec4\u4ef6\u4ea4\u4ed8",permalink:"/zh/docs/next/end-user/component-delivery"},next:{title:"\u96c6\u6210\u4e91\u8d44\u6e90",permalink:"/zh/docs/next/end-user/cloud-services"}},s=[{value:"\u67e5\u770b KubeVela \u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b",id:"\u67e5\u770b-kubevela-\u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b",children:[]},{value:"\u4f7f\u7528 Ingress \u7ed9\u7ec4\u4ef6\u914d\u7f6e\u7f51\u5173",id:"\u4f7f\u7528-ingress-\u7ed9\u7ec4\u4ef6\u914d\u7f6e\u7f51\u5173",children:[]},{value:"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u6807\u7b7e\u548c\u6ce8\u91ca",id:"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u6807\u7b7e\u548c\u6ce8\u91ca",children:[]},{value:"\u7ed9\u7ec4\u4ef6\u6ce8\u5165\u5bb9\u5668\uff08Sidecar\uff09",id:"\u7ed9\u7ec4\u4ef6\u6ce8\u5165\u5bb9\u5668\uff08sidecar\uff09",children:[]},{value:"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81",id:"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],p={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fd0\u7ef4\u7279\u5f81\uff08Traits\uff09\u4e5f\u662f\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u6838\u5fc3\u7ec4\u6210\u4e4b\u4e00\uff0c\u5b83\u4f5c\u7528\u4e8e\u7ec4\u4ef6\u5c42\u9762\uff0c\u53ef\u4ee5\u8ba9\u4f60\u81ea\u7531\u5730\u7ed9\u7ec4\u4ef6\u7ed1\u5b9a\u5404\u5f0f\u5404\u6837\u7684\u8fd0\u7ef4\u52a8\u4f5c\u548c\u7b56\u7565\u3002\u6bd4\u5982\u4e1a\u52a1\u5c42\u9762\u7684\u914d\u7f6e\u7f51\u5173\u3001\u6807\u7b7e\u7ba1\u7406\u548c\u5bb9\u5668\u6ce8\u5165\uff08Sidecar\uff09\uff0c\u53c8\u6216\u8005\u662f\u7ba1\u7406\u5458\u5c42\u9762\u7684\u5f39\u6027\u6269\u7f29\u5bb9\u3001\u7070\u5ea6\u53d1\u5e03\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u4e0e\u7ec4\u4ef6\u5b9a\u4e49\u7c7b\u4f3c\uff0cKubeVela \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684\u8fd0\u7ef4\u7279\u5f81\u80fd\u529b\uff0c\u540c\u65f6\u4e5f\u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49\u6269\u5c55\u5176\u5b83\u7684\u8fd0\u7ef4\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"\u67e5\u770b-kubevela-\u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b"},"\u67e5\u770b KubeVela \u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ vela traits\nNAME                        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION\nannotations                 vela-system *                                   true            Add annotations on K8s pod for your workload which follows\n                                                                                            the pod spec in path 'spec.template'.\nconfigmap                   vela-system *                                   true            Create/Attach configmaps on K8s pod for your workload which\n                                                                                            follows the pod spec in path 'spec.template'.\nenv                         vela-system *                                   false           add env on K8s pod for your workload which follows the pod\n                                                                                            spec in path 'spec.template.'\ningress                     vela-system                                     false           Enable public web traffic for the component.\ningress-1-20                vela-system                                     false           Enable public web traffic for the component, the ingress API\n                                                                                            matches K8s v1.20+.\nlabels                      vela-system *                                   true            Add labels on K8s pod for your workload which follows the\n                                                                                            pod spec in path 'spec.template'.\nlifecycle                   vela-system *                                   true            Add lifecycle hooks for the first container of K8s pod for\n                                                                                            your workload which follows the pod spec in path\n                                                                                            'spec.template'.\nrollout                     vela-system                                     false           rollout the component\nsidecar                     vela-system *                                   true            Inject a sidecar container to K8s pod for your workload\n                                                                                            which follows the pod spec in path 'spec.template'.\n...\n")),(0,l.kt)("p",null,"\u4ee5\u5176\u4e2d\u6bd4\u8f83\u5e38\u7528\u7684\u8fd0\u7ef4\u80fd\u529b\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"annotations")," \uff1a\u7ed9\u5de5\u4f5c\u8d1f\u8f7d\u6dfb\u52a0\u6ce8\u91ca\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"labels"),"\uff1a\u7ed9\u5de5\u4f5c\u8d1f\u8f7d\u6dfb\u52a0\u6807\u7b7e\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"env"),": \u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"configmap")," \uff1a\u6dfb\u52a0\u952e\u503c\u5bf9\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingress")," \uff1a\u914d\u7f6e\u4e00\u4e2a\u516c\u5171\u7f51\u5173\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingress-1-20")," \uff1a\u914d\u7f6e\u4e00\u4e2a\u57fa\u4e8e Kubernetes v1.20+ \u7248\u672c\u7684\u516c\u5171\u7f51\u5173\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lifecycle")," \uff1a\u7ed9\u5de5\u4f5c\u8d1f\u8f7d\u589e\u52a0\u751f\u547d\u5468\u671f\u201c\u94a9\u5b50\u201d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rollout")," \uff1a\u7ec4\u4ef6\u7684\u7070\u5ea6\u53d1\u5e03\u7b56\u7565\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sidecar"),"\uff1a\u7ed9\u7ec4\u4ef6\u6ce8\u5165\u4e00\u4e2a\u5bb9\u5668\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u5c06\u4ee5\u51e0\u4e2a\u5178\u578b\u7684\u8fd0\u7ef4\u7279\u5f81\u4e3a\u4f8b\uff0c\u4ecb\u7ecd KubeVela \u8fd0\u7ef4\u7279\u5f81\u7684\u7528\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-ingress-\u7ed9\u7ec4\u4ef6\u914d\u7f6e\u7f51\u5173"},"\u4f7f\u7528 Ingress \u7ed9\u7ec4\u4ef6\u914d\u7f6e\u7f51\u5173"),(0,l.kt)("p",null,"\u6211\u4eec\u4ee5\u7ed9\u4e00\u4e2a Web Service \u7ec4\u4ef6\u914d\u7f6e\u7f51\u5173\uff0c\u6765\u8fdb\u884c\u793a\u4f8b\u8bb2\u89e3\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"crccheck/hello-world")," \u955c\u50cf\u4e2d\u62c9\u53d6\u8fc7\u6765\uff0c\u8bbe\u7f6e\u7f51\u5173\u540e\uff0c\u5bf9\u5916\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"testsvc.example.com")," \u52a0\u4e0a\u7aef\u53e3 8000 \u63d0\u4f9b\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u4f60\u5feb\u901f\u5b66\u4e60\uff0c\u8bf7\u76f4\u63a5\u590d\u5236\u4e0b\u9762\u7684 Shell \u6267\u884c\uff0c\u4f1a\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n# YAML \u6587\u4ef6\u5f00\u59cb\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: ingress-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n# YAML \u6587\u4ef6\u7ed3\u675f\nEOF\n')),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u81ea\u884c\u5c06 YAML \u6587\u4ef6\u4fdd\u5b58\u4e3a ingerss-app.yaml\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply -f ingerss-app.yaml")," \u547d\u4ee4\u8fdb\u884c\u90e8\u7f72\u3002"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela ls")," \u770b\u5230\u5e94\u7528\u7684 status \u4e3a running \u5e76\u4e14\u670d\u52a1\u4e3a healthy\uff0c\u8868\u793a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u5b8c\u5168\u751f\u6548\u3002\u540c\u65f6\u5b83\u7684 TRAITS \u7c7b\u578b\u4e5f\u6b63\u786e\u663e\u793a\u4e3a ingress\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                     COMPONENT       TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \ningerss-app             express-server  webservice  ingress running healthy         2021-08-28 21:49:44 +0800 CST\n")),(0,l.kt)("p",null,"\u5982\u679c status \u663e\u793a\u4e3a rendering\uff0c\u5219\u8868\u793a\u4ecd\u5728\u6e32\u67d3\u4e2d\uff0c\u6216\u8005 HEALTHY \u4e00\u76f4 false\uff0c\u5219\u4f60\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get application ingress-app -o yaml")," \u67e5\u770b\u62a5\u9519\u4fe1\u606f\u8fdb\u884c\u5bf9\u5e94\u7684\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u67e5\u770b\u8fd4\u56de\u7684\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application ingress-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  ... # \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\nspec:\n  ... # \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\nstatus:\n  ... # \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: |\n        No loadBalancer found, visiting by using 'vela port-forward ingress-app'\n      type: ingress\n    workloadDefinition:\n      apiVersion: apps/v1\n      kind: Deployment\n  status: running\n")),(0,l.kt)("p",null,"\u6700\u540e\u901a\u8fc7 vela port-forward ingress-app \u8f6c\u53d1\u5230\u672c\u5730\u5904\u7406\u8bf7\u6c42\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela port-forward ingress-app\nForwarding from 127.0.0.1:8000 -> 8000\nForwarding from [::1]:8000 -> 8000\n\nForward successfully! Opening browser ...\nHandling connection for 8000\n")),(0,l.kt)("p",null,"\u8bbf\u95ee\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Host:testsvc.example.com" http://127.0.0.1:8000/\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n')),(0,l.kt)("h2",{id:"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u6807\u7b7e\u548c\u6ce8\u91ca"},"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u6807\u7b7e\u548c\u6ce8\u91ca"),(0,l.kt)("p",null,"labels \u548c annotations \u8fd0\u7ef4\u7279\u5f81\uff0c\u5141\u8bb8\u4f60\u5c06\u6807\u7b7e\u548c\u6ce8\u91ca\u9644\u52a0\u5230\u7ec4\u4ef6\u4e0a\uff0c\u8ba9\u6211\u4eec\u5728\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\u65f6\uff0c\u6309\u9700\u89e6\u53d1\u88ab\u6807\u8bb0\u7684\u7ec4\u4ef6\u548c\u83b7\u53d6\u6ce8\u91ca\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u51c6\u5907\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u793a\u4f8b\uff0c\u8bf7\u76f4\u63a5\u590d\u5236\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n# YAML \u6587\u4ef6\u5f00\u59cb\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: labels-annotations\nspec:\n  components:\n    - name: server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: labels\n          properties:\n            "release": "stable"\n        - type: annotations\n          properties:\n            "description": "web application"\n# YAML \u6587\u4ef6\u7ed3\u675f\nEOF\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u7684\u4e1a\u52a1\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u540d\u79f0\u662f server \u7684\u8fd9\u4e2a\u7ec4\u4ef6\uff0c\u901a\u8fc7 labels \u6307\u5b9a\u5b83\u4f9b stable \u53d1\u5e03\u4f7f\u7528\uff0c\u5e76\u901a\u8fc7 annotations \u6ce8\u91ca\u5b83\u662f\u4e00\u4e2a\u9488\u5bf9\u7f51\u9875\u5e94\u7528\u7a0b\u5e8f\u7684\u4e1a\u52a1\u3002"),(0,l.kt)("p",null,"\u5728\u8fd0\u884c\u65f6\u96c6\u7fa4\u4e0a\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela ls")," \u547d\u4ee4\u68c0\u67e5\u5e94\u7528\u662f\u5426\u5df2\u6210\u529f\u521b\u5efa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                     COMPONENT       TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \nlabels-annotations      server          webservice  labels,annotations  running healthy         2021-08-29 20:55:28 +0800 CST\n")),(0,l.kt)("p",null,"\u901a\u8fc7 Kubernetes \u7684\u547d\u4ee4\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5e95\u5c42\u7684\u8d44\u6e90\u5df2\u7ecf\u6253\u4e0a\u7684\u76f8\u5e94\u7684\u6807\u7b7e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ kubectl get deployments server -o jsonpath=\'{.spec.template.metadata.labels}\'\n{"app.oam.dev/component":"server","release":"stable"}\n\n$ kubectl get deployments server -o jsonpath=\'{.spec.template.metadata.annotations}\'\n{"app.oam.dev/component":"server","release":"stable"}\n')),(0,l.kt)("h2",{id:"\u7ed9\u7ec4\u4ef6\u6ce8\u5165\u5bb9\u5668\uff08sidecar\uff09"},"\u7ed9\u7ec4\u4ef6\u6ce8\u5165\u5bb9\u5668\uff08Sidecar\uff09"),(0,l.kt)("p",null,"Sidecar \u5bb9\u5668\u4f5c\u4e3a\u4e0e\u4e1a\u52a1\u5bb9\u5668\u89e3\u8026\u7684\u5b58\u5728\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5f88\u591a\u8f85\u52a9\u6027\u7684\u91cd\u8981\u5de5\u4f5c\uff0c\u6bd4\u5982\u5e38\u89c1\u7684\u65e5\u5fd7\u4ee3\u7406\u3001\u7528\u6765\u5b9e\u73b0 Service Mesh \u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e00\u6b21\uff0c\u8ba9\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u91cc\u7684\u7ec4\u4ef6 log-gen-worker\u3002 \u540c\u65f6\u6211\u4eec\u5c06 sidecar \u6240\u8bb0\u5f55\u7684\u65e5\u5fd7\u6570\u636e\u76ee\u5f55\uff0c\u548c\u7ec4\u4ef6\u6307\u5411\u540c\u4e00\u4e2a\u6570\u636e\u5b58\u50a8\u5377 varlog\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\n# YAML \u6587\u4ef6\u5f00\u59cb\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app-with-sidecar\nspec:\n  components:\n    - name: log-gen-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - /bin/sh\n          - -c\n          - >\n            i=0;\n            while true;\n            do\n              echo \"$i: $(date)\" >> /var/log/date.log;\n              i=$((i+1));\n              sleep 1;\n            done\n        volumes:\n          - name: varlog\n            mountPath: /var/log\n            type: emptyDir\n      traits:\n        - type: sidecar\n          properties:\n            name: count-log\n            image: busybox\n            cmd: [ /bin/sh, -c, 'tail -n+1 -f /var/log/date.log']\n            volumes:\n              - name: varlog\n                path: /var/log\n# YAML \u6587\u4ef6\u7ed3\u675f\nEOF\n")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela ls")," \u67e5\u770b\u5e94\u7528\u662f\u5426\u90e8\u7f72\u6210\u529f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                     COMPONENT       TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \nvela-app-with-sidecar   log-gen-worker  worker      sidecar             running healthy         2021-08-29 22:07:07 +0800 CST\n")),(0,l.kt)("p",null,"\u6210\u529f\u540e\uff0c\u5148\u68c0\u67e5\u5e94\u7528\u751f\u6210\u7684\u5de5\u4f5c\u8d1f\u8f7d\u60c5\u51b5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl get pods -l app.oam.dev/component=log-gen-worker\nNAME                              READY   STATUS    RESTARTS   AGE\nlog-gen-worker-7bb65dcdd6-tpbdh   2/2     Running   0          45s\n")),(0,l.kt)("p",null,"\u6700\u540e\u67e5\u770b Sidecar \u6240\u8f93\u51fa\u7684\u65e5\u5fd7\uff0c\u53ef\u4ee5\u770b\u5230\u8bfb\u53d6\u65e5\u5fd7\u7684 sidecar \u5df2\u7ecf\u751f\u6548\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl logs -f log-gen-worker-7bb65dcdd6-tpbdh count-log\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\uff0c\u6211\u4eec\u4ee5\u51e0\u4e2a\u5e38\u89c1\u7684\u8fd0\u7ef4\u7279\u5f81\u4e3a\u4f8b\u4ecb\u7ecd\u4e86\u5982\u4f55\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81\uff0c\u66f4\u591a\u7684\u8fd0\u7ef4\u7279\u5f81\u529f\u80fd\u548c\u53c2\u6570\uff0c\u8bf7\u524d\u5f80\u8fd0\u7ef4\u7279\u5f81\u7cfb\u7edf\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"../platform-engineers/traits/built-in/overview"},"\u5185\u7f6e\u8fd0\u7ef4\u7279\u5f81"),"\u67e5\u770b\u3002"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81"},"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81"),(0,l.kt)("p",null,"\u5f53\u5df2\u7ecf\u5185\u7f6e\u7684\u8fd0\u7ef4\u7279\u5f81\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u7684\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u80fd\u529b\uff0c\u8bf7\u67e5\u770b\u7ba1\u7406\u5458\u624b\u518c\u91cc\u7684",(0,l.kt)("a",{parentName:"p",href:"../platform-engineers/traits/customize-trait"},"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81"),"\u8fdb\u884c\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./cloud-services"},"\u96c6\u6210\u4e91\u8d44\u6e90"),"\uff0c\u4e86\u89e3\u5982\u4f55\u96c6\u6210\u5404\u7c7b\u4e91\u5382\u5546\u7684\u4e91\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./rollout-scaler"},"\u7070\u5ea6\u53d1\u5e03\u548c\u6269\u7f29\u5bb9"))))}c.isMDXComponent=!0}}]);