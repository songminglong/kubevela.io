(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[26384],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29979:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",description:"\u672c\u6587\u4ecb\u7ecdKubernetes\u7684\u5de5\u4f5c\u6d41\u5de5\u7a0b\u6a21\u5f0f\uff0c\u5e38\u7528\u64cd\u4f5c\u548c\u9002\u7528\u7684\u573a\u666f\u3002"},l={unversionedId:"deliver-app/workflows",id:"deliver-app/workflows",isDocsHomePage:!1,title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",description:"\u672c\u6587\u4ecb\u7ecdKubernetes\u7684\u5de5\u4f5c\u6d41\u5de5\u7a0b\u6a21\u5f0f\uff0c\u5e38\u7528\u64cd\u4f5c\u548c\u9002\u7528\u7684\u573a\u666f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deliver-app/workflows.md",sourceDirName:"deliver-app",slug:"/deliver-app/workflows",permalink:"/zh/docs/next/deliver-app/workflows",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/deliver-app/workflows.md",version:"current",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1640425173,formattedLastUpdatedAt:"2021/12/25",frontMatter:{title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",description:"\u672c\u6587\u4ecb\u7ecdKubernetes\u7684\u5de5\u4f5c\u6d41\u5de5\u7a0b\u6a21\u5f0f\uff0c\u5e38\u7528\u64cd\u4f5c\u548c\u9002\u7528\u7684\u573a\u666f\u3002"}},p=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb",id:"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb",children:[]},{value:"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4",id:"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4",children:[]},{value:"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5",id:"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5",children:[]},{value:"\u6269\u5c55\u5de5\u4f5c\u6d41\u5b9e\u73b0\u6570\u636e\u521d\u59cb\u5316",id:"\u6269\u5c55\u5de5\u4f5c\u6d41\u5b9e\u73b0\u6570\u636e\u521d\u59cb\u5316",children:[]}],c={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u8be6\u7ec6\u4ecb\u7ecd\u5e94\u7528\u5de5\u4f5c\u6d41\u7684\u529f\u80fd\u548c\u4f7f\u7528\u573a\u666f\uff0c\u5e26\u4f60\u66f4\u5168\u9762\u7684\u4e86\u89e3\u5de5\u4f5c\u6d41\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"./k8s-object"},"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90")," \u4e00\u6587\u4e2d\uff0c\u6211\u4eec\u521d\u8bc6\u4e86\u5de5\u4f5c\u6d41\u7684\u4e00\u4e2a\u91cd\u8981\u4f7f\u7528\u573a\u666f\uff0c\u5373\u4eba\u5de5\u4ecb\u5165\u591a\u96c6\u7fa4\u53d1\u5e03\u7684\u8fc7\u7a0b\uff0c\u5b9e\u73b0\u53ef\u63a7\u591a\u96c6\u7fa4\u53d1\u5e03\u3002\u5728\u672c\u6587\u4e2d\u6211\u4eec\u7ee7\u7eed\u4ecb\u7ecd\u4ee5\u4e0b\u8bdd\u9898\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fdb\u4e00\u6b65\u4e86\u89e3 Workflow \u3001Revision \u548c Env \u7684\u5173\u7cfb\uff0c\u4ee5\u53ca\u76ee\u524d\u5185\u7f6e\u7684 Workflow \u6b65\u9aa4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de5\u4f5c\u6d41\u4e2d\u5b9e\u73b0\u901a\u77e5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u6570\u636e\u521d\u59cb\u5316\u3002")),(0,o.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5185\u5bb9\u76f8\u5bf9\u6df1\u5165\uff0c\u5728\u6b64\u4e4b\u524d\uff0c\u5efa\u8bae\u5148\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"../quick-start"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"),", ",(0,o.kt)("a",{parentName:"p",href:"./k8s-object"},"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90")," \u7b49\u6587\u7ae0\u4e86\u89e3\u5176\u4ed6\u57fa\u7840\u77e5\u8bc6\u548c\u6d41\u7a0b\u3002"),(0,o.kt)("h2",{id:"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb"},"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb"),(0,o.kt)("p",null,"\u5e94\u7528\u8fdb\u884c\u90e8\u7f72\u7684\u52a8\u4f5c\u5219\u4e3a\u6267\u884c\u67d0\u4e00\u4e2a\u5de5\u4f5c\u6d41\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\uff0c\u7248\u672c\u72b6\u6001\u8ddf\u968f\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u8bf4\u5de5\u4f5c\u6d41\u6267\u884c\u5b8c\u6210\uff0c\u5219\u4ee3\u8868\u8be5\u7248\u672c\u5904\u4e8e\u5b8c\u6210\u53d1\u5e03\u7684\u72b6\u6001\u3002\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u53d1\u5e03\u7684\u73af\u5883\u7ed1\u5b9a\uff0c\u5373\u5e94\u7528\u7684\u6bcf\u4e00\u4e2a\u73af\u5883\u90fd\u6709\u72ec\u7acb\u7684\u5de5\u4f5c\u6d41\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Application Revision List",src:r(92201).Z})),(0,o.kt)("p",null,"\u6211\u4eec\u4f1a\u652f\u6301\u4f01\u4e1a\u7528\u6237\u81ea\u5b9a\u4e49\u53d1\u5e03\u7684\u7248\u672c\u53f7\uff0c\u5bf9\u63a5 CI \u7cfb\u7edf\u540e\uff0c\u7248\u672c\u76f4\u63a5\u4e0e Code Commit \u5173\u8054\uff0c\u5b9e\u73b0\u7248\u672c\u53ef\u8ffd\u6eaf\u3002\u5728\u7248\u672c\u64cd\u4f5c\u4e2d\u540e\u7eed\u4f1a\u5b9e\u73b0\u7248\u672c\u56de\u9000\u529f\u80fd\uff0c\u7528\u6237\u53ef\u5728\u4efb\u4f55\u65f6\u5019\u9009\u62e9\u5c06\u67d0\u4e2a\u73af\u5883\u56de\u9000\u5230\u6307\u5b9a\u7248\u672c\u3002"),(0,o.kt)("h2",{id:"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4"},"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"./k8s-object"},"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90")," \u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4eba\u5de5\u5ba1\u6838\u6b65\u9aa4",(0,o.kt)("inlineCode",{parentName:"p"},"suspend"),"\u3002\u6211\u4eec\u518d\u6765\u4e86\u89e3\u4e00\u4e0b\u5176\u4ed6\u5185\u7f6e\u7684\u6b65\u9aa4\u5206\u522b\u662f\u4ec0\u4e48\u4f5c\u7528\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deploy2env"),": \u5e94\u7528\u4ea4\u4ed8\u5230\u6307\u5b9a Target\u3002\u8be5\u6b65\u9aa4 Vela \u4f1a\u6839\u636e\u73af\u5883\u4e2d\u914d\u7f6e\u7684 Target \u81ea\u52a8\u751f\u6210\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deploy-cloud-resource"),": \u4e91\u8d44\u6e90\u5e94\u7528\u4ea4\u4ed8\u5230\u6307\u5b9a Target\u3002\u8be5\u6b65\u9aa4 Vela \u4f1a\u4e3a\u4e91\u8d44\u6e90\u5e94\u7528\uff0c\u6839\u636e\u73af\u5883\u4e2d\u914d\u7f6e\u7684 Target \u81ea\u52a8\u751f\u6210\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u7c7b\u578b\u6b65\u9aa4\u4e0e deploy2env \u7684\u533a\u522b\u5728\u4e8e\u63a7\u5236\u4e91\u8d44\u6e90\u521b\u5efa\u7684 CR \u8d44\u6e90\u662f\u90e8\u7f72\u5230\u7ba1\u63a7\u96c6\u7fa4\u7684\uff0c\u670d\u52a1\u521b\u5efa\u5b8c\u6210\u751f\u6210\u8bbf\u95ee\u5bc6\u94a5(Secret)\u540e\uff0c\u5c06 Secret \u5206\u53d1\u5230 Target \u6307\u5b9a\u96c6\u7fa4\u548c Namespace\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"share-cloud-resource"),": \u5206\u53d1\u4e91\u670d\u52a1\u751f\u6210\u7684 Secret \u5230\u6307\u5b9a Target\uff0c\u4f7f\u7528\u8be5\u6b65\u9aa4\u5b9e\u73b0\u4e91\u670d\u52a1\u591a\u96c6\u7fa4\u5171\u4eab\uff0c\u5373\u5728\u591a\u96c6\u7fa4\u5e94\u7528\u4e2d\u53ea\u521b\u5efa\u4e00\u4e2a\u4e91\u670d\u52a1\uff0c\u5c06\u5176\u8bbf\u95ee\u5bc6\u94a5\u5206\u53d1\u5230\u591a\u4e2a\u96c6\u7fa4\uff0c\u5b9e\u73b0\u670d\u52a1\u5171\u4eab\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notification"),": \u901a\u77e5\uff0c\u652f\u6301\u9489\u9489\u3001\u90ae\u4ef6\u3001Slack \u4e09\u79cd\u901a\u77e5\u6a21\u5f0f\uff0c\u7528\u6237\u53ef\u5c06\u5176\u7f6e\u4e8e\u5de5\u4f5c\u6d41\u7684\u4efb\u4f55\u9636\u6bb5\u5b9e\u73b0\u6d88\u606f\u901a\u77e5\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webhook"),": Web \u94a9\u5b50\uff0c\u7528\u6237\u53ef\u5c06\u5176\u7f6e\u4e8e\u5de5\u4f5c\u6d41\u4efb\u4f55\u9636\u6bb5\uff0c\u5b9e\u73b0\u5bf9\u5916\u90e8\u7cfb\u7edf\u7684\u8c03\u7528\u3002")),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5"},"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5"),(0,o.kt)("h2",{id:"\u6269\u5c55\u5de5\u4f5c\u6d41\u5b9e\u73b0\u6570\u636e\u521d\u59cb\u5316"},"\u6269\u5c55\u5de5\u4f5c\u6d41\u5b9e\u73b0\u6570\u636e\u521d\u59cb\u5316"))}u.isMDXComponent=!0},92201:function(e,t,r){"use strict";t.Z=r.p+"assets/images/app-revision-ab2c61f58ebfdf0b6bd32c29b3fa2dfb.jpg"}}]);