(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2728],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88849:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"DingTalk"},l={unversionedId:"end-user/workflow/ding-talk",id:"end-user/workflow/ding-talk",isDocsHomePage:!1,title:"DingTalk",description:"If we want to be notified before and after we deploy a component, KubeVela provides the ability to integrate with DingTalk Robot notifications, allowing users to send notifications to DingTalk in their workflow.",source:"@site/docs/end-user/workflow/ding-talk.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/ding-talk",permalink:"/docs/next/end-user/workflow/ding-talk",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/workflow/ding-talk.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629716909,formattedLastUpdatedAt:"8/23/2021",frontMatter:{title:"DingTalk"}},s=[{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If we want to be notified before and after we deploy a component, KubeVela provides the ability to integrate with DingTalk Robot notifications, allowing users to send notifications to DingTalk in their workflow."),(0,a.kt)("p",null,"In this guide, you will learn how to send notifications via 'dingTalk' in workflow."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before reading this section, please make sure you have learned about ",(0,a.kt)("a",{parentName:"p",href:"https://developers.dingtalk.com/document/robots/custom-robot-access/"},"How to integrate with DingTalk robot"))),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Apply the following ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," with workflow step type of ",(0,a.kt)("inlineCode",{parentName:"p"},"dingtalk"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: dingtalk-message\n        # specify the workflow step type\n        type: dingtalk\n        properties:\n          # copy the token in webhook url of your DingTalk robot\n          token: xxx\n          # specify the message detail, for more information, please refer: https://developers.dingtalk.com/document/robots/custom-robot-access/title-72m-8ag-pqw\n          message:\n            msgtype: text\n            text:\n              context: Workflow starting...\n      - name: first-server\n        type: apply-component\n        properties:\n          component: express-server\n      - name: dingtalk-message\n        type: dingtalk\n        properties:\n          token: xxx\n          message:\n            msgtype: text\n            text:\n              context: Workflow ended.\n")),(0,a.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,a.kt)("p",null,"we can see that before and after the deployment of the component, the messages can be seen in the corresponding group chat."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"dingtalk"),", we can integrate with DingTalk notifier easily."))}c.isMDXComponent=!0}}]);