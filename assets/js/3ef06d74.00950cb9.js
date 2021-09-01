(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4104],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41487:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"Raw"},c={unversionedId:"platform-engineers/components/built-in/raw",id:"platform-engineers/components/built-in/raw",isDocsHomePage:!1,title:"Raw",description:"Use raw Kubernetes resources directly. For example, a Job.",source:"@site/docs/platform-engineers/components/built-in/raw.md",sourceDirName:"platform-engineers/components/built-in",slug:"/platform-engineers/components/built-in/raw",permalink:"/docs/next/platform-engineers/components/built-in/raw",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/components/built-in/raw.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1630496336,formattedLastUpdatedAt:"9/1/2021",frontMatter:{title:"Raw"},sidebar:"docs",previous:{title:"Kustomize",permalink:"/docs/next/platform-engineers/components/built-in/kustomize"},next:{title:"Task",permalink:"/docs/next/platform-engineers/components/built-in/task"}},p=[{value:"How to use",id:"how-to-use",children:[]}],l={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use raw Kubernetes resources directly. For example, a Job."),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-raw\nspec:\n  components:\n    - name: myjob\n      type: raw\n      properties:\n        apiVersion: batch/v1\n        kind: Job\n        metadata:\n          name: pi\n        spec:\n          template:\n            spec:\n              containers:\n              - name: pi\n                image: perl\n                command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n              restartPolicy: Never\n          backoffLimit: 4\n')))}s.isMDXComponent=!0}}]);