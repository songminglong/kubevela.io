(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2741],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||i[f]||a;return r?t.createElement(d,l(l({ref:n},u),{},{components:r})):t.createElement(d,l({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59186:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var t=r(22122),o=r(19756),a=(r(67294),r(3905)),l={title:"\u90e8\u7f72\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7279\u5f81"},p={unversionedId:"end-user/workflow/apply-component",id:"end-user/workflow/apply-component",isDocsHomePage:!1,title:"\u90e8\u7f72\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7279\u5f81",description:"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u5de5\u4f5c\u6d41\u4e2d\u90e8\u7f72\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7279\u5f81\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/workflow/apply-component.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/apply-component",permalink:"/zh/docs/next/end-user/workflow/apply-component",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/workflow/apply-component.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629459659,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"\u90e8\u7f72\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7279\u5f81"}},s=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u671f\u671b\u7ed3\u679c",id:"\u671f\u671b\u7ed3\u679c",children:[]}],c={toc:s};function u(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u5de5\u4f5c\u6d41\u4e2d\u90e8\u7f72\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7279\u5f81\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("p",null,"\u90e8\u7f72\u5982\u4e0b\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  - name: nginx-server\n    type: webservice\n    properties:\n      image: nginx:1.21\n      port: 80\n  workflow:\n    steps:\n      - name: express-server\n        # \u6307\u5b9a\u6b65\u9aa4\u7c7b\u578b\n        type: apply-component\n        properties:\n          # \u6307\u5b9a\u7ec4\u4ef6\u540d\u79f0\n          component: express-server\n      - name: manual-approval\n        # \u5de5\u4f5c\u6d41\u5185\u7f6e suspend \u7c7b\u578b\u7684\u4efb\u52a1\uff0c\u7528\u4e8e\u6682\u505c\u5de5\u4f5c\u6d41\n        type: suspend\n      - name: nginx-server\n        type: apply-component\n        properties:\n          component: nginx-server\n")),(0,a.kt)("p",null,"\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5728\u90e8\u7f72\u67d0\u4e9b\u7ec4\u4ef6\u524d\uff0c\u9700\u8981\u6682\u505c\u6574\u4e2a\u5de5\u4f5c\u6d41\uff0c\u4ee5\u7b49\u5f85\u4eba\u5de5\u5ba1\u6279\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u90e8\u7f72\u5b8c\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u540e\uff0c\u5de5\u4f5c\u6d41\u4f1a\u6682\u505c\u3002\u76f4\u5230\u7ee7\u7eed\u7684\u547d\u4ee4\u88ab\u53d1\u8d77\u540e\uff0c\u624d\u5f00\u59cb\u90e8\u7f72\u7b2c\u4e8c\u4e2a\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u90e8\u7f72\u5e94\u7528\u7279\u5f81\u8ba1\u5212\u540e\uff0c\u67e5\u770b\u5de5\u4f5c\u6d41\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app first-vela-workflow\n\nNAME                  COMPONENT        TYPE         PHASE                HEALTHY   STATUS   AGE\nfirst-vela-workflow   express-server   webservice   workflowSuspending                      2s\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"vela workflow resume")," \u547d\u4ee4\u6765\u4f7f\u5de5\u4f5c\u6d41\u7ee7\u7eed\u6267\u884c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"vela workflow")," \u547d\u4ee4\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"../../cli/vela_workflow"},"vela cli"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela workflow resume first-vela-workflow\n\nSuccessfully resume workflow: first-vela-workflow\n")),(0,a.kt)("p",null,"\u67e5\u770b\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff0c\u53ef\u4ee5\u770b\u5230\u72b6\u6001\u5df2\u7ecf\u53d8\u4e3a\u6267\u884c\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app first-vela-workflow\n\nNAME                  COMPONENT        TYPE         PHASE     HEALTHY   STATUS   AGE\nfirst-vela-workflow   express-server   webservice   running   true               10s\n")),(0,a.kt)("h2",{id:"\u671f\u671b\u7ed3\u679c"},"\u671f\u671b\u7ed3\u679c"),(0,a.kt)("p",null,"\u67e5\u770b\u5e94\u7528\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application first-vela-workflow -o yaml\n")),(0,a.kt)("p",null,"\u6240\u6709\u6b65\u9aa4\u7684\u72b6\u6001\u5747\u5df2\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 3\n      steps:\n      - name: express-server\n        phase: succeeded\n        resourceRef: {}\n        type: apply-component\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      - name: nginx-server\n        phase: succeeded\n        resourceRef: {}\n        type: apply-component\n      suspend: false\n      terminated: true\n")),(0,a.kt)("p",null,"\u786e\u8ba4\u96c6\u7fa4\u4e2d\u7ec4\u4ef6\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server   1/1     1            1           3m28s\nnginx-server     1/1     1            1           3s\n\n$ kubectl get ingress\n\nNAME             CLASS    HOSTS                 ADDRESS   PORTS   AGE\nexpress-server   <none>   testsvc.example.com             80      4m7s\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6240\u6709\u7684\u7ec4\u4ef6\u53ca\u8fd0\u7ef4\u7279\u5f81\u90fd\u88ab\u6210\u529f\u5730\u90e8\u7f72\u5230\u4e86\u96c6\u7fa4\u4e2d\u3002"))}u.isMDXComponent=!0}}]);