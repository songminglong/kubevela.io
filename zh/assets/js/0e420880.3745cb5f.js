(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[11851],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90147:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),l={title:"\u5df2\u77e5\u9650\u5236"},i={unversionedId:"platform-engineers/helm/known-issues",id:"version-v1.1/platform-engineers/helm/known-issues",isDocsHomePage:!1,title:"\u5df2\u77e5\u9650\u5236",description:"\u9650\u5236",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/helm/known-issues.md",sourceDirName:"platform-engineers/helm",slug:"/platform-engineers/helm/known-issues",permalink:"/zh/docs/platform-engineers/helm/known-issues",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/helm/known-issues.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"\u5df2\u77e5\u9650\u5236"}},p=[{value:"\u9650\u5236",id:"\u9650\u5236",children:[{value:"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u6307\u793a\u5668",id:"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u6307\u793a\u5668",children:[]},{value:"\u59cb\u7ec8\u4f7f\u7528\u5b8c\u6574\u7684\u9650\u5b9a\u540d\u79f0",id:"\u59cb\u7ec8\u4f7f\u7528\u5b8c\u6574\u7684\u9650\u5b9a\u540d\u79f0",children:[]},{value:"\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u5347\u7ea7",id:"\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u5347\u7ea7",children:[]}]},{value:"\u95ee\u9898",id:"\u95ee\u9898",children:[{value:"\u63a8\u51fa\u7b56\u7565",id:"\u63a8\u51fa\u7b56\u7565",children:[]},{value:"\u66f4\u65b0\u7279\u5f81\u5c5e\u6027\u4e5f\u53ef\u80fd\u5bfc\u81f4 Pod \u91cd\u542f",id:"\u66f4\u65b0\u7279\u5f81\u5c5e\u6027\u4e5f\u53ef\u80fd\u5bfc\u81f4-pod-\u91cd\u542f",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 Helm \u56fe\u8868\u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5df2\u77e5\u9650\u5236\u3002"),(0,o.kt)("h3",{id:"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u6307\u793a\u5668"},"\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u6307\u793a\u5668"),(0,o.kt)("p",null,"\u9075\u5faa\u5fae\u670d\u52a1\u7684\u6700\u4f73\u5b9e\u8df5\uff0cKubeVela \u5efa\u8bae\u5728\u4e00\u4e2a Helm \u56fe\u8868\u4e2d\u53ea\u5b58\u5728\u4e00\u79cd\u5de5\u4f5c\u8d1f\u8f7d\u8d44\u6e90\u3002 \u8bf7\u5c06\u4f60\u7684\u201c\u8d85\u7ea7\u201dHelm \u56fe\u8868\u62c6\u5206\u4e3a\u591a\u4e2a\u56fe\u8868\uff08\u5373\u7ec4\u4ef6\uff09\u3002 \u672c\u8d28\u4e0a\uff0cKubeVela \u4f9d\u8d56\u4e8e\u7ec4\u4ef6\u5b9a\u4e49\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"workload"),"\u6765\u6307\u793a\u5b83\u9700\u8981\u6ce8\u610f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\n...\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  workload:\n    definition:\n      apiVersion: apps.kruise.io/v1alpha1\n      kind: Cloneset\n")),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u591a\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u6253\u5305\u5728\u4e00\u4e2a\u56fe\u8868\u4e2d\uff0cKubeVela \u4e0d\u4f1a\u5931\u8d25\uff0c\u95ee\u9898\u5728\u4e8e\u8fdb\u4e00\u6b65\u7684\u64cd\u4f5c\u884c\u4e3a\uff0c\u4f8b\u5982\u63a8\u51fa\u3001\u4fee\u8ba2\u548c\u6d41\u91cf\u7ba1\u7406\uff0c\u5b83\u4eec\u53ea\u80fd\u5bf9\u6307\u5b9a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u751f\u6548\u3002"),(0,o.kt)("h3",{id:"\u59cb\u7ec8\u4f7f\u7528\u5b8c\u6574\u7684\u9650\u5b9a\u540d\u79f0"},"\u59cb\u7ec8\u4f7f\u7528\u5b8c\u6574\u7684\u9650\u5b9a\u540d\u79f0"),(0,o.kt)("p",null,"\u5de5\u4f5c\u8d1f\u8f7d\u7684\u540d\u79f0\u5e94\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/blob/543364fba59b0c7c30e38ebe0f73680db895abb6/pkg/chartutil/create.go#L415"},"\u5b8c\u5168\u9650\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u540d\u79f0")," \u8fdb\u884c\u6a21\u677f\u5316\uff0c\u5e76\u4e14\u8bf7\u4e0d\u8981\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},".Values.fullnameOverride"),"\u3002\u4f5c\u4e3a\u6700\u4f73\u5b9e\u8df5\uff0cHelm \u8fd8\u5f3a\u70c8\u5efa\u8bae\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"$ helm create")," \u547d\u4ee4\u521b\u5efa\u65b0\u56fe\u8868\uff0c\u4ee5\u4fbf\u6839\u636e\u6b64\u6700\u4f73\u5b9e\u8df5\u81ea\u52a8\u5b9a\u4e49\u6a21\u677f\u540d\u79f0\u3002"),(0,o.kt)("h3",{id:"\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u5347\u7ea7"},"\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u5347\u7ea7"),(0,o.kt)("p",null,"\u5bf9\u7ec4\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," \u6240\u505a\u7684\u66f4\u6539\u5c06\u89e6\u53d1 Helm \u7248\u672c\u5347\u7ea7\u3002\u6b64\u8fc7\u7a0b\u7531 Flux v2 Helm \u63a7\u5236\u5668\u5904\u7406\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5b9a\u4e49\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/helm-controller/blob/main/docs/api/helmrelease.md#upgraderemediation"},"Helm Release \u6587\u6863")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://toolkit.fluxcd.io/components/helm/helmreleases/#configuring-failure-remediation"},"\u89c4\u8303"),"\u7684\u4fee\u590d\uff0c\u4ee5\u9632\u5728\u6b64\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u53d1\u751f\u6545\u969c\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webapp-chart\nspec:\n...\n  schematic:\n    helm:\n      release:\n        chart:\n          spec:\n            chart: "podinfo"\n            version: "5.1.4"\n        upgrade:\n          remediation:\n            retries: 3 \n            remediationStrategy: rollback\n      repository:\n        url: "http://oam.dev/catalog/"\n\n')),(0,o.kt)("p",null,"\u5c3d\u7ba1\u76ee\u524d\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u4f46\u5f88\u96be\u83b7\u5f97\u6709\u5173 Helm \u5b9e\u65f6\u53d1\u5e03\u7684\u6709\u7528\u4fe1\u606f\uff0c\u4ee5\u4e86\u89e3\u5347\u7ea7\u5931\u8d25\u65f6\u53d1\u751f\u7684\u60c5\u51b5\u3002\u6211\u4eec\u5c06\u589e\u5f3a\u53ef\u89c2\u5bdf\u6027\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u5e94\u7528\u5c42\u9762\u8ddf\u8e2a Helm \u53d1\u5e03\u7684\u60c5\u51b5\u3002"),(0,o.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,o.kt)("p",null,"\u5df2\u77e5\u95ee\u9898\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u4fee\u590d\u3002"),(0,o.kt)("h3",{id:"\u63a8\u51fa\u7b56\u7565"},"\u63a8\u51fa\u7b56\u7565"),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u57fa\u4e8e Helm \u7684\u7ec4\u4ef6\u65e0\u6cd5\u53d7\u76ca\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/rollout-design.md#applicationdeployment-workflow"},"\u5e94\u7528\u7a0b\u5e8f\u7ea7\u90e8\u7f72\u7b56\u7565"),"\u3002\u5982",(0,o.kt)("a",{parentName:"p",href:"./trait#update-an-applicatiion"},"\u672c\u793a\u4f8b"),"\u6240\u793a\uff0c\u5982\u679c\u5e94\u7528\u66f4\u65b0\u4e86\uff0c\u53ea\u80fd\u76f4\u63a5 rollout\uff0c\u6ca1\u6709 canary \u6216\u8005 blue-green \u65b9\u5f0f\u3002"),(0,o.kt)("h3",{id:"\u66f4\u65b0\u7279\u5f81\u5c5e\u6027\u4e5f\u53ef\u80fd\u5bfc\u81f4-pod-\u91cd\u542f"},"\u66f4\u65b0\u7279\u5f81\u5c5e\u6027\u4e5f\u53ef\u80fd\u5bfc\u81f4 Pod \u91cd\u542f"),(0,o.kt)("p",null,"\u7279\u6027\u5c5e\u6027\u7684\u66f4\u6539\u53ef\u80fd\u4f1a\u5f71\u54cd\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u5c5e\u4e8e\u6b64\u5de5\u4f5c\u8d1f\u8f7d\u5b9e\u4f8b\u7684 Pod \u5c06\u91cd\u65b0\u542f\u52a8\u3002\u5728\u57fa\u4e8e CUE \u7684\u7ec4\u4ef6\u4e2d\uff0c\u8fd9\u662f\u53ef\u4ee5\u907f\u514d\u7684\uff0c\u56e0\u4e3a KubeVela \u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u8d44\u6e90\u7684\u6e32\u67d3\u8fc7\u7a0b\uff0c\u5c3d\u7ba1\u5728\u57fa\u4e8e Helm \u7684\u7ec4\u4ef6\u4e2d\uff0c\u5b83\u76ee\u524d\u88ab\u63a8\u8fdf\u5230 Flux v2 \u63a7\u5236\u5668\u3002"))}c.isMDXComponent=!0}}]);