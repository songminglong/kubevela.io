(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3204],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31612:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s},default:function(){return c}});var r=t(22122),o=t(19756),p=(t(67294),t(3905)),i={title:"Apply Remaining"},a={unversionedId:"end-user/workflow/apply-remaining",id:"end-user/workflow/apply-remaining",isDocsHomePage:!1,title:"Apply Remaining",description:"If we have applied some resources and do not want to specify the rest one by one, KubeVela provides the apply-remaining workflow step to filter out selected resources and apply remaining.",source:"@site/docs/end-user/workflow/apply-remaining.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/apply-remaining",permalink:"/docs/next/end-user/workflow/apply-remaining",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/workflow/apply-remaining.md",version:"current",lastUpdatedBy:"Hongchao Deng",lastUpdatedAt:1629285729,formattedLastUpdatedAt:"8/18/2021",frontMatter:{title:"Apply Remaining"},sidebar:"docs",previous:{title:"Apply Components and Traits",permalink:"/docs/next/end-user/workflow/apply-component"},next:{title:"Multi Environments",permalink:"/docs/next/end-user/workflow/multi-env"}},s=[{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]}],l={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"If we have applied some resources and do not want to specify the rest one by one, KubeVela provides the ",(0,p.kt)("inlineCode",{parentName:"p"},"apply-remaining")," workflow step to filter out selected resources and apply remaining."),(0,p.kt)("p",null,"In this guide, you will learn how to apply remaining resources via ",(0,p.kt)("inlineCode",{parentName:"p"},"apply-remaining")," in ",(0,p.kt)("inlineCode",{parentName:"p"},"Workflow"),"."),(0,p.kt)("h2",{id:"how-to-use"},"How to use"),(0,p.kt)("p",null,"Apply the following ",(0,p.kt)("inlineCode",{parentName:"p"},"Application")," with workflow step type of ",(0,p.kt)("inlineCode",{parentName:"p"},"apply-remaining"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  - name: express-server2\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n  workflow:\n    steps:\n      - name: express-server\n        # specify the workflow step type\n        type: apply-remaining\n        properties:\n          exceptions:\n            # specify the configuration of the component\n            express-server:\n              # skipApplyWorkload indicates whether to skip apply the workload resource\n              skipApplyWorkload: false\n              # skipAllTraits indicates to skip apply all resources of the traits\n              # if this is true, skipApplyTraits will be ignored\n              skipAllTraits: false\n              # skipApplyTraits specifies the names of the traits to skip apply\n              skipApplyTraits:\n                - ingress\n      - name: express-server2\n        type: apply-remaining\n        properties:\n          exceptions:\n            express-server:\n              skipApplyWorkload: true\n")),(0,p.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,p.kt)("p",null,"Check the component status in cluster:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server   1/1     1            1           3m28s\n\n$ kubectl get ingress\n\nNo resources found in default namespace.\n")),(0,p.kt)("p",null,"We can see that the first component ",(0,p.kt)("inlineCode",{parentName:"p"},"express-server")," has been applied to the cluster, but the trait named ingress has been skipped."),(0,p.kt)("p",null,"But the second component ",(0,p.kt)("inlineCode",{parentName:"p"},"express-server2")," hasn't been applied to cluster since it has been skipped. "),(0,p.kt)("p",null,"With ",(0,p.kt)("inlineCode",{parentName:"p"},"apply-remaining"),", we can easily filter and apply resources by filling in the built-in parameters."))}c.isMDXComponent=!0}}]);