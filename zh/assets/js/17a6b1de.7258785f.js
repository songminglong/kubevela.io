(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5455],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21844:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"\u83b7\u53d6\u66f4\u591a"},o={unversionedId:"end-user/traits/more",id:"end-user/traits/more",isDocsHomePage:!1,title:"\u83b7\u53d6\u66f4\u591a",description:"KubeVela \u4e2d\u7684\u6a21\u5757\u5b8c\u5168\u90fd\u662f\u53ef\u5b9a\u5236\u548c\u53ef\u63d2\u62d4\u7684\uff0c\u6240\u4ee5\u9664\u4e86\u5185\u7f6e\u7684\u8fd0\u7ef4\u80fd\u529b\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u65b9\u5f0f\u6dfb\u52a0\u66f4\u591a\u60a8\u81ea\u5df1\u7684\u8fd0\u7ef4\u80fd\u529b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/traits/more.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/more",permalink:"/zh/docs/next/end-user/traits/more",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/more.md",version:"current",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1630629589,formattedLastUpdatedAt:"2021/9/3",frontMatter:{title:"\u83b7\u53d6\u66f4\u591a"},sidebar:"docs",previous:{title:"\u5bb9\u5668\u6ce8\u5165",permalink:"/zh/docs/next/end-user/traits/sidecar"},next:{title:"\u73af\u5883\u5dee\u5f02\u5316\u914d\u7f6e",permalink:"/zh/docs/next/end-user/policies/envbinding"}},u=[{value:"1. \u4ece\u5b98\u65b9\u6216\u7b2c\u4e09\u65b9\u80fd\u529b\u4e2d\u5fc3\u83b7\u53d6\u6a21\u5757\u5316\u80fd\u529b",id:"1-\u4ece\u5b98\u65b9\u6216\u7b2c\u4e09\u65b9\u80fd\u529b\u4e2d\u5fc3\u83b7\u53d6\u6a21\u5757\u5316\u80fd\u529b",children:[{value:"\u67e5\u770b\u80fd\u529b\u4e2d\u5fc3\u7684\u6a21\u5757\u5217\u8868",id:"\u67e5\u770b\u80fd\u529b\u4e2d\u5fc3\u7684\u6a21\u5757\u5217\u8868",children:[]},{value:"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u6a21\u5757",id:"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u6a21\u5757",children:[]}]},{value:"2. \u81ea\u5b9a\u4e49\u6a21\u5757\u5316\u80fd\u529b",id:"2-\u81ea\u5b9a\u4e49\u6a21\u5757\u5316\u80fd\u529b",children:[]}],c={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KubeVela \u4e2d\u7684\u6a21\u5757\u5b8c\u5168\u90fd\u662f\u53ef\u5b9a\u5236\u548c\u53ef\u63d2\u62d4\u7684\uff0c\u6240\u4ee5\u9664\u4e86\u5185\u7f6e\u7684\u8fd0\u7ef4\u80fd\u529b\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u65b9\u5f0f\u6dfb\u52a0\u66f4\u591a\u60a8\u81ea\u5df1\u7684\u8fd0\u7ef4\u80fd\u529b\u3002"),(0,i.kt)("h2",{id:"1-\u4ece\u5b98\u65b9\u6216\u7b2c\u4e09\u65b9\u80fd\u529b\u4e2d\u5fc3\u83b7\u53d6\u6a21\u5757\u5316\u80fd\u529b"},"1. \u4ece\u5b98\u65b9\u6216\u7b2c\u4e09\u65b9\u80fd\u529b\u4e2d\u5fc3\u83b7\u53d6\u6a21\u5757\u5316\u80fd\u529b"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 KubeVela \u7684 ",(0,i.kt)("a",{parentName:"p",href:"../../developers/references/kubectl-plugin#install-kubectl-vela-plugin"},"Kubectl \u63d2\u4ef6"),"\u83b7\u53d6\u5b98\u65b9\u80fd\u529b\u4e2d\u5fc3\u4e2d\u53d1\u5e03\u7684\u80fd\u529b\u3002"),(0,i.kt)("h3",{id:"\u67e5\u770b\u80fd\u529b\u4e2d\u5fc3\u7684\u6a21\u5757\u5217\u8868"},"\u67e5\u770b\u80fd\u529b\u4e2d\u5fc3\u7684\u6a21\u5757\u5217\u8868"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u547d\u4ee4\u4f1a\u4ece KubeVela \u5b98\u65b9\u7ef4\u62a4\u7684",(0,i.kt)("a",{parentName:"p",href:"https://registry.kubevela.net"},"\u80fd\u529b\u4e2d\u5fc3"),"\u4e2d\u83b7\u53d6\u6a21\u5757\u5316\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u8ba9\u6211\u4eec\u5c1d\u8bd5\u5217\u51fa\u6ce8\u518c\u8868\u4e2d\u6240\u6709\u53ef\u7528\u7684 trait\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela trait --discover\nShowing traits from registry: https://registry.kubevela.net\nNAME            REGISTRY      DEFINITION                            APPLIES-TO               \nservice-account default                                             [webservice worker]      \nenv             default                                             [webservice worker]      \nflagger-rollout default       canaries.flagger.app                  [webservice]             \ninit-container  default                                             [webservice worker]      \nkeda-scaler     default       scaledobjects.keda.sh                 [deployments.apps]       \nmetrics         default       metricstraits.standard.oam.dev        [webservice backend task]\nnode-affinity   default                                             [webservice worker]      \nroute           default       routes.standard.oam.dev               [webservice]             \nvirtualgroup    default                                             [webservice worker] \n")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"--discover")," \u6807\u5fd7\u8868\u793a\u663e\u793a\u4e0d\u5728\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u7279\u5f81\u3002"),(0,i.kt)("h3",{id:"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u6a21\u5757"},"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u6a21\u5757"),(0,i.kt)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u5b89\u88c5\u4e00\u4e2a trait\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela trait get init-container\nInstalling component capability init-container\nSuccessfully install trait: init-container                                                                                                 \n")),(0,i.kt)("h2",{id:"2-\u81ea\u5b9a\u4e49\u6a21\u5757\u5316\u80fd\u529b"},"2. \u81ea\u5b9a\u4e49\u6a21\u5757\u5316\u80fd\u529b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9605\u8bfb",(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/definition-edit"},"\u7ba1\u7406\u6a21\u5757\u5316\u529f\u80fd"),"\uff0c\u5b66\u4e60\u5bf9\u5df2\u6709\u7684\u6a21\u5757\u5316\u80fd\u529b\u8fdb\u884c\u4fee\u6539\u548c\u7f16\u8f91\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ece\u5934\u5f00\u59cb",(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/advanced"},"\u81ea\u5b9a\u4e49\u6a21\u5757\u5316\u80fd\u529b"),"\uff0c\u5e76\u4e86\u89e3\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u80fd\u529b\u7684",(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/traits/customize-trait"},"\u66f4\u591a\u7528\u6cd5\u548c\u529f\u80fd"),"\u3002")))}s.isMDXComponent=!0}}]);