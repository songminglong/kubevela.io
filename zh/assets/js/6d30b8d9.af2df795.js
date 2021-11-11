(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3543],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,u=d["".concat(l,".").concat(k)]||d[k]||c[k]||p;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51663:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),o={title:"Built-in Steps"},i={unversionedId:"platform-engineers/workflow/built-in-workflow-defs",id:"version-v1.1/platform-engineers/workflow/built-in-workflow-defs",isDocsHomePage:!1,title:"Built-in Steps",description:"KubeVela provides some built-in workflow step definitions for better experience.",source:"@site/versioned_docs/version-v1.1/platform-engineers/workflow/built-in-workflow-defs.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/built-in-workflow-defs",permalink:"/zh/docs/platform-engineers/workflow/built-in-workflow-defs",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/workflow/built-in-workflow-defs.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1633759950,formattedLastUpdatedAt:"2021/10/9",frontMatter:{title:"Built-in Steps"}},l=[{value:"apply-application",id:"apply-application",children:[{value:"Overview",id:"overview",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Example",id:"example",children:[]}]},{value:"depends-on-app",id:"depends-on-app",children:[{value:"Overview",id:"overview-1",children:[]},{value:"Parameter",id:"parameter-1",children:[]},{value:"Example",id:"example-1",children:[]}]},{value:"deploy2env",id:"deploy2env",children:[{value:"Overview",id:"overview-2",children:[]},{value:"Parameter",id:"parameter-2",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"webhook-notification",id:"webhook-notification",children:[{value:"Overview",id:"overview-3",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example-3",children:[]}]},{value:"suspend",id:"suspend",children:[{value:"Overview",id:"overview-4",children:[]},{value:"Parameter",id:"parameter-3",children:[]},{value:"Example",id:"example-4",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"KubeVela provides some built-in workflow step definitions for better experience."),(0,p.kt)("h2",{id:"apply-application"},"apply-application"),(0,p.kt)("h3",{id:"overview"},"Overview"),(0,p.kt)("p",null,"Apply all components and traits in Application."),(0,p.kt)("h3",{id:"parameter"},"Parameter"),(0,p.kt)("p",null,"No arguments, used for custom steps before or after application applied."),(0,p.kt)("h3",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: express-server\n        type: apply-application\n")),(0,p.kt)("h2",{id:"depends-on-app"},"depends-on-app"),(0,p.kt)("h3",{id:"overview-1"},"Overview"),(0,p.kt)("p",null,"Wait for the specified Application to complete."),(0,p.kt)("h3",{id:"parameter-1"},"Parameter"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"name"),(0,p.kt)("td",{parentName:"tr",align:"center"},"string"),(0,p.kt)("td",{parentName:"tr",align:"center"},"The name of the Application")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"namespace"),(0,p.kt)("td",{parentName:"tr",align:"center"},"string"),(0,p.kt)("td",{parentName:"tr",align:"center"},"The namespace of the Application")))),(0,p.kt)("h3",{id:"example-1"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: express-server\n        type: depends-on-app\n        properties:\n          name: another-app\n          namespace: default\n")),(0,p.kt)("h2",{id:"deploy2env"},"deploy2env"),(0,p.kt)("h3",{id:"overview-2"},"Overview"),(0,p.kt)("p",null,"Apply Application in different policies and envs."),(0,p.kt)("h3",{id:"parameter-2"},"Parameter"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"policy"),(0,p.kt)("td",{parentName:"tr",align:"center"},"string"),(0,p.kt)("td",{parentName:"tr",align:"center"},"The name of the policy")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"env"),(0,p.kt)("td",{parentName:"tr",align:"center"},"string"),(0,p.kt)("td",{parentName:"tr",align:"center"},"The name of the env")))),(0,p.kt)("h3",{id:"example-2"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: multi-env-demo\n  namespace: default\nspec:\n  components:\n    - name: nginx-server\n      type: webservice\n      properties:\n        image: nginx:1.21\n        port: 80\n\n  policies:\n    - name: env\n      type: env-binding\n      properties:\n        created: false\n        envs:\n          - name: test\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              namespaceSelector:\n                name: test\n          - name: prod\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              namespaceSelector:\n                name: prod\n\n  workflow:\n    steps:\n      - name: deploy-test-server\n        type: deploy2env\n        properties:\n          policy: env\n          env: test\n      - name: deploy-prod-server\n        type: deploy2env\n        properties:\n          policy: env\n          env: prod\n")),(0,p.kt)("h2",{id:"webhook-notification"},"webhook-notification"),(0,p.kt)("h3",{id:"overview-3"},"Overview"),(0,p.kt)("p",null,"Send messages to the webhook address."),(0,p.kt)("h3",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"slack"),(0,p.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Optional, please fulfill its url and message if you want to send Slack messages")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"slack.url"),(0,p.kt)("td",{parentName:"tr",align:"center"},"String"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Required, the webhook address of Slack")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"slack.message"),(0,p.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Required, the Slack messages you want to send, please follow ",(0,p.kt)("a",{parentName:"td",href:"https://api.slack.com/reference/messaging/payload"},"Slack messaging"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"dingding"),(0,p.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Optional, please fulfill its url and message if you want to send DingTalk messages")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"dingding.url"),(0,p.kt)("td",{parentName:"tr",align:"center"},"String"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Required, the webhook address of DingTalk")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"dingding.message"),(0,p.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Required, the DingTalk messages you want to send, please follow ",(0,p.kt)("a",{parentName:"td",href:"https://developers.dingtalk.com/document/robots/custom-robot-access/title-72m-8ag-pqw"},"DingTalk messaging"))))),(0,p.kt)("h3",{id:"example-3"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: dingtalk-message\n        type: webhook-notification\n        properties:\n          dingding:\n            # the DingTalk webhook address, please refer to: https://developers.dingtalk.com/document/robots/custom-robot-access\n            url: xxx\n            message:\n              msgtype: text\n              text:\n                context: Workflow starting...\n      - name: application\n        type: apply-application\n      - name: slack-message\n        type: webhook-notification\n        properties:\n          slack:\n            # the Slack webhook address, please refer to: https://api.slack.com/messaging/webhooks\n            url: xxx\n            message:\n              text: Workflow ended.\n")),(0,p.kt)("h2",{id:"suspend"},"suspend"),(0,p.kt)("h3",{id:"overview-4"},"Overview"),(0,p.kt)("p",null,"Suspend the current workflow, we can use ",(0,p.kt)("inlineCode",{parentName:"p"},"vela workflow resume appname")," to resume the suspended workflow."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"For more information of ",(0,p.kt)("inlineCode",{parentName:"p"},"vela workflow"),", please refer to ",(0,p.kt)("a",{parentName:"p",href:"../../cli/vela_workflow"},"vela cli"),"\u3002")),(0,p.kt)("h3",{id:"parameter-3"},"Parameter"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"-"),(0,p.kt)("td",{parentName:"tr",align:"center"},"-"),(0,p.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,p.kt)("h3",{id:"example-4"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: slack-message\n        type: webhook-notification\n        properties:\n          slack:\n            # the Slack webhook address, please refer to: https://api.slack.com/messaging/webhooks\n            message:\n              text: Ready to apply the application, ask the administrator to approve and resume the workflow.\n      - name: manual-approval\n        type: suspend\n      - name: express-server\n        type: apply-application\n")),(0,p.kt)("p",null,"No newline at end of file"))}m.isMDXComponent=!0}}]);