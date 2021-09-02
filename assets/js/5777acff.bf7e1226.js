(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6602],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7474:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={title:"Webhook Notification"},l={unversionedId:"end-user/workflow/webhook-notification",id:"end-user/workflow/webhook-notification",isDocsHomePage:!1,title:"Webhook Notification",description:"If we want to be notified before or after deploying an application, KubeVela provides integration with notification webhooks, allowing users to send notifications to DingTalk or Slack.",source:"@site/docs/end-user/workflow/webhook-notification.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/webhook-notification",permalink:"/docs/next/end-user/workflow/webhook-notification",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/workflow/webhook-notification.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1630465037,formattedLastUpdatedAt:"9/1/2021",frontMatter:{title:"Webhook Notification"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If we want to be notified before or after deploying an application, KubeVela provides integration with notification webhooks, allowing users to send notifications to DingTalk or Slack."),(0,o.kt)("p",null,"In this guide, you will learn how to send notifications via ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-notification")," in workflow."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"slack"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optional, please fulfill its url and message if you want to send Slack messages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"slack.url"),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Required, the webhook address of Slack")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"slack.message"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Required, the Slack messages you want to send, please follow ",(0,o.kt)("a",{parentName:"td",href:"https://api.slack.com/reference/messaging/payload"},"Slack messaging"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"dingding"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optional, please fulfill its url and message if you want to send DingTalk messages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"dingding.url"),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Required, the webhook address of DingTalk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"dingding.message"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Required, the DingTalk messages you want to send, please follow ",(0,o.kt)("a",{parentName:"td",href:"https://developers.dingtalk.com/document/robots/custom-robot-access/title-72m-8ag-pqw"},"DingTalk messaging"))))),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Apply the following ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," with workflow step type of ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-notification"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: dingtalk-message\n        # specify the workflow step type\n        type: webhook-notification\n        properties:\n          dingding:\n            # the DingTalk webhook address, please refer to: https://developers.dingtalk.com/document/robots/custom-robot-access\n            url: xxx\n            # specify the message details\n            message:\n              msgtype: text\n              text:\n                context: Workflow starting...\n      - name: application\n        type: apply-application\n      - name: slack-message\n        type: webhook-notification\n        properties:\n          slack:\n            # the Slack webhook address, please refer to: https://api.slack.com/messaging/webhooks\n            url: xxx\n            # specify the message details\n            message:\n              text: Workflow ended.\n")),(0,o.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,o.kt)("p",null,"we can see that before and after the deployment of the application, the messages can be seen in the corresponding group chat."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-notification"),", we can integrate with webhook notifier easily."))}c.isMDXComponent=!0}}]);