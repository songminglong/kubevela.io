(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[52786],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88554:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c={title:"Architecture"},i={unversionedId:"core-concepts/architecture",id:"core-concepts/architecture",isDocsHomePage:!1,title:"Architecture",description:"The overall architecture of KubeVela is shown as below:",source:"@site/docs/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/next/core-concepts/architecture",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/core-concepts/architecture.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1629470948,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Deploy First Application",permalink:"/docs/next/getting-started/first-application"},next:{title:"Application",permalink:"/docs/next/core-concepts/application"}},l=[{value:"Control Plane",id:"control-plane",children:[]},{value:"Runtime Infrastructures",id:"runtime-infrastructures",children:[]}],u={toc:l};function s(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The overall architecture of KubeVela is shown as below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:r(16436).Z})),(0,a.kt)("h3",{id:"control-plane"},"Control Plane"),(0,a.kt)("p",null,"Control plane is where KubeVela itself lives in. As the project's name implies, KubeVela by design leverages Kubernetes as control plane. This is the key of how KubeVela guarantees full ",(0,a.kt)("em",{parentName:"p"},"automation")," and strong ",(0,a.kt)("em",{parentName:"p"},"determinism")," to application delivery at scale. Users will interact with KubeVela via the  application centric API to model the application deployment, and KubeVela will deliver the application to target ",(0,a.kt)("em",{parentName:"p"},"runtime infrastructure")," per policies and workflow declared by users and ensure the success."),(0,a.kt)("h3",{id:"runtime-infrastructures"},"Runtime Infrastructures"),(0,a.kt)("p",null,"Runtime infrastructures are where the applications are actually running on. KubeVela allows you to deploy and manage applications on both Kubernetes based infrastructures (local, managed offerings, or IoT/Edge/On-Premise ones) and non-Kubernetes environments such as public/private clouds in a consistent workflow. KubeVela itself does not run on the runtime infrastructures, they two are fully decoupled."))}s.isMDXComponent=!0},16436:function(e,t,r){"use strict";t.Z=r.p+"assets/images/arch-4eb82664ef3aa6ee78c8c9d4a4b18a8a.png"}}]);