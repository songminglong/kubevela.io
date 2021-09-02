(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2044],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31486:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Want More\uff1f"},l={unversionedId:"end-user/components/more",id:"end-user/components/more",isDocsHomePage:!1,title:"Want More\uff1f",description:"1. Get from capability registry",source:"@site/docs/end-user/components/more.md",sourceDirName:"end-user/components",slug:"/end-user/components/more",permalink:"/docs/next/end-user/components/more",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/components/more.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1630575521,formattedLastUpdatedAt:"9/2/2021",frontMatter:{title:"Want More\uff1f"},sidebar:"docs",previous:{title:"Worker",permalink:"/docs/next/end-user/components/cue/worker"},next:{title:"AutoScaler",permalink:"/docs/next/end-user/traits/autoscaler"}},c=[{value:"1. Get from capability registry",id:"1-get-from-capability-registry",children:[{value:"List",id:"list",children:[]},{value:"Install",id:"install",children:[]}]},{value:"2. Designed by yourself",id:"2-designed-by-yourself",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-get-from-capability-registry"},"1. Get from capability registry"),(0,a.kt)("p",null,"You can get more from official capability registry by using KubeVela ",(0,a.kt)("a",{parentName:"p",href:"../../developers/references/kubectl-plugin#install-kubectl-vela-plugin"},"plugin"),"\u3002"),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)("p",null,"By default, the commands will list capabilities from ",(0,a.kt)("a",{parentName:"p",href:"https://registry.kubevela.net"},"repo")," maintained by KubeVela."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela comp --discover\nShowing components from registry: oss://registry.kubevela.net\nNAME        REGISTRY    DEFINITION      \nwebserver   default     deployments.apps\n")),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("p",null,"Then you can install a component like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela comp get webserver\nInstalling component capability webserver\nSuccessfully install component: webserver                                                                                             \n")),(0,a.kt)("h2",{id:"2-designed-by-yourself"},"2. Designed by yourself"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read ",(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/definition-edit"},"how to edit definitions")," to build your own capability from existing ones."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/advanced"},"Build your own capability from scratch"),"\nand learn more features about how to ",(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/components/custom-component"},"define custom components"),".")))}u.isMDXComponent=!0}}]);