(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9227],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43442:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"Want More?"},l={unversionedId:"end-user/traits/more",id:"version-v1.1/end-user/traits/more",isDocsHomePage:!1,title:"Want More?",description:"1. Get from capability registry",source:"@site/versioned_docs/version-v1.1/end-user/traits/more.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/more",permalink:"/docs/end-user/traits/more",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/more.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Want More?"},sidebar:"version-v1.1/docs",previous:{title:"Attaching Sidecar",permalink:"/docs/end-user/traits/sidecar"},next:{title:"Multi-Environment Deployment",permalink:"/docs/end-user/policies/envbinding"}},s=[{value:"1. Get from capability registry",id:"1-get-from-capability-registry",children:[{value:"List",id:"list",children:[]},{value:"Install",id:"install",children:[]}]},{value:"2. Designed by yourself",id:"2-designed-by-yourself",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-get-from-capability-registry"},"1. Get from capability registry"),(0,i.kt)("p",null,"You can get more from official capability registry by using KubeVela ",(0,i.kt)("a",{parentName:"p",href:"../../developers/references/kubectl-plugin#install-kubectl-vela-plugin"},"plugin"),"\u3002"),(0,i.kt)("h3",{id:"list"},"List"),(0,i.kt)("p",null,"By default, the commands will list capabilities from ",(0,i.kt)("a",{parentName:"p",href:"https://registry.kubevela.net"},"repo")," maintained by KubeVela."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela trait --discover\nShowing traits from registry: https://registry.kubevela.net\nNAME            REGISTRY      DEFINITION                            APPLIES-TO               \nservice-account default                                             [webservice worker]      \nenv             default                                             [webservice worker]      \nflagger-rollout default       canaries.flagger.app                  [webservice]             \ninit-container  default                                             [webservice worker]      \nkeda-scaler     default       scaledobjects.keda.sh                 [deployments.apps]       \nmetrics         default       metricstraits.standard.oam.dev        [webservice backend task]\nnode-affinity   default                                             [webservice worker]      \nroute           default       routes.standard.oam.dev               [webservice]             \nvirtualgroup    default                                             [webservice worker] \n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"--discover")," flag means show all traits not in your cluster."),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,"Then you can install a trait like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela trait get init-container\nInstalling component capability init-container\nSuccessfully install trait: init-container                                                                                                 \n")),(0,i.kt)("h2",{id:"2-designed-by-yourself"},"2. Designed by yourself"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/definition-edit"},"how to edit definitions")," to build your own capability from existing ones."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/advanced"},"Build your own capability from scratch"),"\nand learn more features about how to ",(0,i.kt)("a",{parentName:"li",href:"../../platform-engineers/traits/customize-trait"},"define custom traits"),".")))}u.isMDXComponent=!0}}]);