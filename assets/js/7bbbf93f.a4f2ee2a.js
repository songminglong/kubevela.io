(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7311],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46548:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"Multi Environments"},l={unversionedId:"end-user/workflow/multi-env",id:"end-user/workflow/multi-env",isDocsHomePage:!1,title:"Multi Environments",description:"If we have multiple clusters, we want to apply our application in the test cluster first, and then apply it to the production cluster after the application in test cluster is running. KubeVela provides the multi-env workflow step to manage multi environments.",source:"@site/docs/end-user/workflow/multi-env.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/multi-env",permalink:"/docs/next/end-user/workflow/multi-env",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/workflow/multi-env.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629427642,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Multi Environments"},sidebar:"docs",previous:{title:"Apply Remaining",permalink:"/docs/next/end-user/workflow/apply-remaining"},next:{title:"System Addon",permalink:"/docs/next/end-user/addons/introduction"}},p=[{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If we have multiple clusters, we want to apply our application in the test cluster first, and then apply it to the production cluster after the application in test cluster is running. KubeVela provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-env")," workflow step to manage multi environments."),(0,i.kt)("p",null,"In this guide, you will learn how to manage multi environments via ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-env")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Workflow"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before reading this section, please make sure you have learned about the ",(0,i.kt)("a",{parentName:"p",href:"../policies/envbinding"},"Env Binding")," in KubeVela.")),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"Apply the following ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," with workflow step type of ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-env"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: multi-env-demo\n  namespace: default\nspec:\n  components:\n    - name: nginx-server\n      type: webservice\n      properties:\n        image: nginx:1.21\n        port: 80\n\n  policies:\n    - name: test-env\n      type: env-binding\n      properties:\n        created: false\n        envs:\n          - name: test\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              clusterSelector:\n                labels:\n                  purpose: test\n    - name: prod-env\n      type: env-binding\n      properties:\n        created: false\n        envs:\n          - name: prod\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              clusterSelector:\n                labels:\n                  purpose: prod\n\n  workflow:\n    steps:\n      - name: deploy-server\n        # specify the workflow step type\n        type: multi-env\n        properties:\n          # specify the component name\n          component: nginx-server\n          # specify the policy name\n          policy: patch\n          # specify the env name in policy\n          env: prod\n      - name: manual-approval\n        # suspend is a built-in task of workflow used to suspend the workflow\n        type: suspend\n      - name: deploy-prod-server\n        type: multi-env\n        properties:\n          component: nginx-server\n          policy: prod-env\n          env: prod\n")),(0,i.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,i.kt)("p",null,"First, check the component status in ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-server     1/1     1            1           1m10s\n")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," command after everything is ok in test cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-server     1/1     1            1           1m10s\n")),(0,i.kt)("p",null,"Then, check the component status in ",(0,i.kt)("inlineCode",{parentName:"p"},"prod")," cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-server     1/1     1            1           1m10s\n")),(0,i.kt)("p",null,"We can see that the component have been applied to both clusters."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"multi-env"),", we can easily manage applications in multiple environments."))}u.isMDXComponent=!0}}]);