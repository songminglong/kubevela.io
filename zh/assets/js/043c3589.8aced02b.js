(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1255],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4946:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={title:"\u4f7f\u7528 Webhook \u53d1\u9001\u901a\u77e5"},l={unversionedId:"end-user/workflow/webhook-notification",id:"end-user/workflow/webhook-notification",isDocsHomePage:!1,title:"\u4f7f\u7528 Webhook \u53d1\u9001\u901a\u77e5",description:"\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5f53\u6211\u4eec\u4f7f\u7528\u5de5\u4f5c\u6d41\u90e8\u7f72\u5e94\u7528\u524d\u540e\uff0c\u5e0c\u671b\u80fd\u591f\u5f97\u5230\u90e8\u7f72\u7684\u901a\u77e5\u3002KubeVela \u63d0\u4f9b\u4e86\u4e0e Webhook \u96c6\u6210\u7684\u80fd\u529b\uff0c\u652f\u6301\u7528\u6237\u5728\u5de5\u4f5c\u6d41\u4e2d\u5411\u9489\u9489\u6216\u8005 Slack \u53d1\u9001\u901a\u77e5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/workflow/webhook-notification.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/webhook-notification",permalink:"/zh/docs/next/end-user/workflow/webhook-notification",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/workflow/webhook-notification.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1630465037,formattedLastUpdatedAt:"2021/9/1",frontMatter:{title:"\u4f7f\u7528 Webhook \u53d1\u9001\u901a\u77e5"}},c=[{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u671f\u671b\u7ed3\u679c",id:"\u671f\u671b\u7ed3\u679c",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5f53\u6211\u4eec\u4f7f\u7528\u5de5\u4f5c\u6d41\u90e8\u7f72\u5e94\u7528\u524d\u540e\uff0c\u5e0c\u671b\u80fd\u591f\u5f97\u5230\u90e8\u7f72\u7684\u901a\u77e5\u3002KubeVela \u63d0\u4f9b\u4e86\u4e0e Webhook \u96c6\u6210\u7684\u80fd\u529b\uff0c\u652f\u6301\u7528\u6237\u5728\u5de5\u4f5c\u6d41\u4e2d\u5411\u9489\u9489\u6216\u8005 Slack \u53d1\u9001\u901a\u77e5\u3002"),(0,o.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u5de5\u4f5c\u6d41\u4e2d\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-notification")," \u53d1\u9001 Webhook \u901a\u77e5\u3002"),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"slack"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\u503c\uff0c\u5982\u679c\u9700\u8981\u53d1\u9001 Slack \u4fe1\u606f\uff0c\u5219\u9700\u586b\u5199\u5176 url \u53ca message")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"slack.url"),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b\u503c\uff0cSlack \u7684 Webhook \u5730\u5740")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"slack.message"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b\u503c\uff0c\u9700\u8981\u53d1\u9001\u7684 Slack \u4fe1\u606f\uff0c\u8bf7\u7b26\u5408 ",(0,o.kt)("a",{parentName:"td",href:"https://api.slack.com/reference/messaging/payload"},"Slack \u4fe1\u606f\u89c4\u8303"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"dingding"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\u503c\uff0c\u5982\u679c\u9700\u8981\u53d1\u9001\u9489\u9489\u4fe1\u606f\uff0c\u5219\u9700\u586b\u5199\u5176 url \u53ca message")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"dingding.url"),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b\u503c\uff0c\u9489\u9489\u7684 Webhook \u5730\u5740")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"dingding.message"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b\u503c\uff0c\u9700\u8981\u53d1\u9001\u7684\u9489\u9489\u4fe1\u606f\uff0c\u8bf7\u7b26\u5408 ",(0,o.kt)("a",{parentName:"td",href:"https://developers.dingtalk.com/document/robots/custom-robot-access/title-72m-8ag-pqw"},"\u9489\u9489\u4fe1\u606f\u89c4\u8303"))))),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("p",null,"\u90e8\u7f72\u5982\u4e0b\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff0c\u5728\u90e8\u7f72\u7ec4\u4ef6\u524d\u540e\uff0c\u90fd\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-notification")," \u6b65\u9aa4\u53d1\u9001\u901a\u77e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: dingtalk-message\n        # \u6307\u5b9a\u6b65\u9aa4\u7c7b\u578b\n        type: webhook-notification\n        properties:\n          dingding:\n            # \u9489\u9489 Webhook \u5730\u5740\uff0c\u8bf7\u67e5\u770b\uff1ahttps://developers.dingtalk.com/document/robots/custom-robot-access\n            url: xxx\n            # \u5177\u4f53\u8981\u53d1\u9001\u7684\u4fe1\u606f\u8be6\u60c5\n            message:\n              msgtype: text\n              text:\n                context: \u5f00\u59cb\u8fd0\u884c\u5de5\u4f5c\u6d41\n      - name: application\n        type: apply-application\n      - name: slack-message\n        type: webhook-notification\n        properties:\n          slack:\n            # Slack Webhook \u5730\u5740\uff0c\u8bf7\u67e5\u770b\uff1ahttps://api.slack.com/messaging/webhooks\n            url: xxx\n            # \u5177\u4f53\u8981\u53d1\u9001\u7684\u4fe1\u606f\u8be6\u60c5\n            message:\n              text: \u5de5\u4f5c\u6d41\u8fd0\u884c\u5b8c\u6210\n")),(0,o.kt)("h2",{id:"\u671f\u671b\u7ed3\u679c"},"\u671f\u671b\u7ed3\u679c"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0e Webhook \u7684\u5bf9\u63a5\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5de5\u4f5c\u6d41\u4e2d\u7684\u7ec4\u4ef6\u90e8\u7f72\u524d\u540e\uff0c\u90fd\u80fd\u5728\u5bf9\u5e94\u7684\u7fa4\u804a\u4e2d\u770b\u5230\u76f8\u5e94\u7684\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook-notification")," \uff0c\u53ef\u4ee5\u4f7f\u7528\u6237\u65b9\u4fbf\u7684\u4e0e Webhook \u5bf9\u63a5\u6d88\u606f\u901a\u77e5\u3002"))}s.isMDXComponent=!0}}]);