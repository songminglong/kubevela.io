(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8047],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78388:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return s}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212"},p={unversionedId:"core-concepts/application",id:"core-concepts/application",isDocsHomePage:!1,title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212",description:"KubeVela \u80cc\u540e\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\u662f OAM\uff08Open Application Model\uff09\uff0c\u5176\u6838\u5fc3\u662f\u5c06\u5e94\u7528\u90e8\u7f72\u6240\u9700\u7684\u6240\u6709\u7ec4\u4ef6\u548c\u5404\u9879\u8fd0\u7ef4\u52a8\u4f5c\uff0c\u63cf\u8ff0\u4e3a\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u4e0e\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u201c\u90e8\u7f72\u8ba1\u5212\u201d\uff0c\u8fdb\u800c\u5b9e\u73b0\u5728\u6df7\u5408\u73af\u5883\u4e2d\u8fdb\u884c\u6807\u51c6\u5316\u548c\u9ad8\u6548\u7387\u7684\u5e94\u7528\u4ea4\u4ed8\u3002\u8fd9\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u5c31\u662f\u8fd9\u4e00\u8282\u6240\u8981\u4ecb\u7ecd\u7684 Application \u5bf9\u8c61\uff0c\u4e5f\u662f OAM \u6a21\u578b\u7684\u4f7f\u7528\u8005\u552f\u4e00\u9700\u8981\u4e86\u89e3\u7684 API\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/application.md",sourceDirName:"core-concepts",slug:"/core-concepts/application",permalink:"/zh/docs/next/core-concepts/application",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/core-concepts/application.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1629518797,formattedLastUpdatedAt:"2021/8/21",frontMatter:{title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/next/core-concepts/architecture"},next:{title:"Helm \u7ec4\u4ef6",permalink:"/zh/docs/next/end-user/components/helm"}},i=[{value:"\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u8ba1\u5212\uff08Application\uff09",id:"\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u8ba1\u5212\uff08application\uff09",children:[]},{value:"\u7ec4\u4ef6\uff08Components\uff09",id:"\u7ec4\u4ef6\uff08components\uff09",children:[]},{value:"\u8fd0\u7ef4\u7279\u5f81\uff08Traits\uff09",id:"\u8fd0\u7ef4\u7279\u5f81\uff08traits\uff09",children:[]},{value:"\u5de5\u4f5c\u6d41\uff08Workflow\uff09",id:"\u5de5\u4f5c\u6d41\uff08workflow\uff09",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:i};function s(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeVela \u80cc\u540e\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\u662f ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/platform-engineers/oam/oam-model"},"OAM\uff08Open Application Model\uff09"),"\uff0c\u5176\u6838\u5fc3\u662f\u5c06\u5e94\u7528\u90e8\u7f72\u6240\u9700\u7684\u6240\u6709\u7ec4\u4ef6\u548c\u5404\u9879\u8fd0\u7ef4\u52a8\u4f5c\uff0c\u63cf\u8ff0\u4e3a\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u4e0e\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u201c\u90e8\u7f72\u8ba1\u5212\u201d\uff0c\u8fdb\u800c\u5b9e\u73b0\u5728\u6df7\u5408\u73af\u5883\u4e2d\u8fdb\u884c\u6807\u51c6\u5316\u548c\u9ad8\u6548\u7387\u7684\u5e94\u7528\u4ea4\u4ed8\u3002\u8fd9\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u5c31\u662f\u8fd9\u4e00\u8282\u6240\u8981\u4ecb\u7ecd\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Application")," \u5bf9\u8c61\uff0c\u4e5f\u662f OAM \u6a21\u578b\u7684\u4f7f\u7528\u8005\u552f\u4e00\u9700\u8981\u4e86\u89e3\u7684 API\u3002"),(0,o.kt)("h2",{id:"\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u8ba1\u5212\uff08application\uff09"},"\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u8ba1\u5212\uff08Application\uff09"),(0,o.kt)("p",null,"KubeVela \u901a\u8fc7 YAML \u6587\u4ef6\u7684\u65b9\u5f0f\u63cf\u8ff0\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002\u4e00\u4e2a\u5178\u578b\u7684 YAML \u6837\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # This is the component I want to deploy\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # Automatically scale the component by CPU usage after deployed\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar           # Inject a fluentd sidecar before applying the component to runtime cluster\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n  workflow:\n    steps:\n        # \u6b65\u9aa4\u540d\u79f0\n      - name: deploy-frontend\n        # \u6307\u5b9a\u6b65\u9aa4\u7c7b\u578b\n        type: apply-component\n        properties:\n          # \u6307\u5b9a\u7ec4\u4ef6\u540d\u79f0\n          component: frontend\n      - name: manual-approval\n        # \u5de5\u4f5c\u6d41\u5185\u7f6e suspend \u7c7b\u578b\u7684\u4efb\u52a1\uff0c\u7528\u4e8e\u6682\u505c\u5de5\u4f5c\u6d41\n        type: suspend\n      - name: deploy-backend\n        type: apply-component\n        properties:\n          component: backend          \n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684\u5b57\u6bb5\u5bf9\u5e94\u7740\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apiVersion"),"\uff1a\u6240\u4f7f\u7528\u7684 OAM API \u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kind"),"\uff1a\u79cd\u7c7b\u3002\u6211\u4eec\u6700\u7ecf\u5e38\u7528\u5230\u7684\u5c31\u662f Pod \u4e86\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metadata"),"\uff1a\u4e1a\u52a1\u76f8\u5173\u4fe1\u606f\u3002\u6bd4\u5982\u8fd9\u6b21\u8981\u521b\u5efa\u7684\u662f\u4e00\u4e2a\u7f51\u7ad9\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Spec"),"\uff1a\u63cf\u8ff0\u6211\u4eec\u9700\u8981\u5e94\u7528\u53bb\u4ea4\u4ed8\u4ec0\u4e48\uff0c\u544a\u8bc9 Kubernetes \u505a\u6210\u4ec0\u4e48\u6837\u3002\u8fd9\u91cc\u6211\u4eec\u653e\u5165 KubeVela \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"components"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components"),"\uff1a\u4e00\u6b21\u5e94\u7528\u4ea4\u4ed8\u90e8\u7f72\u8ba1\u5212\u6240\u6db5\u76d6\u7684\u5168\u90e8\u7ec4\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"traits"),"\uff1a\u5e94\u7528\u4ea4\u4ed8\u90e8\u7f72\u8ba1\u5212\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u72ec\u7acb\u7684\u8fd0\u7ef4\u7b56\u7565\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workflow"),": \u81ea\u5b9a\u4e49\u5e94\u7528\u4ea4\u4ed8\u7684\u6267\u884c\u6d41\u7a0b\uff0c\u53ef\u4ee5\u4e0d\u586b\uff0c\u5219\u9ed8\u8ba4\u4f9d\u6b21\u5168\u90e8\u521b\u5efa\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u8fd9\u5f20\u793a\u610f\u56fe\u8be0\u91ca\u4e86\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\uff1a\n",(0,o.kt)("img",{alt:"image.png",src:n(1594).Z})),(0,o.kt)("p",null,"\u5148\u6709\u4e00\u4e2a\u603b\u4f53\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212 Application\u3002\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\u6211\u4eec\u7533\u660e\u5e94\u7528\u4e3b\u4f53\u4e3a\u53ef\u914d\u7f6e\u3001\u53ef\u90e8\u7f72\u7684\u7ec4\u4ef6\uff08Components\uff09\uff0c\u5e76\u540c\u65f6\u5bf9\u5e94\u5730\u53bb\u7533\u660e\uff0c\u671f\u671b\u6bcf\u4e2a\u7ec4\u4ef6\u8981\u62e5\u6709\u7684\u76f8\u5173\u8fd0\u7ef4\u7279\u5f81 \uff08Traits\uff09\uff0c\u5982\u679c\u6709\u9700\u8981\uff0c\u8fd8\u53ef\u4ee5\u7533\u660e\u81ea\u5b9a\u4e49\u7684\u6267\u884c\u6d41\u7a0b \uff08Workflow\uff09\u3002"),(0,o.kt)("p",null,"\u4f60\u4f7f\u7528 KubeVela \u7684\u65f6\u5019\uff0c\u5c31\u50cf\u5728\u73a9\u201c\u4e50\u9ad8\u201c\u79ef\u6728\uff1a\u5148\u62ff\u8d77\u4e00\u5757\u5927\u7684\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\uff0c\u7136\u540e\u5f80\u4e0a\u56fa\u5b9a\u4e00\u5757\u6216\u51e0\u5757\u201c\u7ec4\u4ef6\u201d\uff0c\u7ec4\u4ef6\u4e0a\u53c8\u53ef\u4ee5\u8d34\u4e0a\u4efb\u4f55\u989c\u8272\u5927\u5c0f\u7684\u201c\u8fd0\u7ef4\u7279\u5f81\u201d\u3002\u540c\u65f6\u6839\u636e\u9700\u6c42\u7684\u53d8\u5316\uff0c\u4f60\u968f\u65f6\u53ef\u4ee5\u91cd\u65b0\u7ec4\u88c5\uff0c\u5f62\u6210\u65b0\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\uff08components\uff09"},"\u7ec4\u4ef6\uff08Components\uff09"),(0,o.kt)("p",null,"KubeVela \u5185\u7f6e\u4e86\u5e38\u7528\u7684\u7ec4\u4ef6\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/getting-started/quick-install##3"},"KubeVela CLI")," \u547d\u4ee4\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela components \n")),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME        NAMESPACE   WORKLOAD                                DESCRIPTION                                                 \nalibaba-rds default     configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object        \ntask        vela-system jobs.batch                              Describes jobs that run code or a script to completion.     \nwebservice  vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that have a stable network endpoint to receive external     \n                                                                network traffic from customers.                             \nworker      vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that running at backend. They do NOT have network endpoint  \n                                                                to receive external network traffic.                        \n\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../end-user/components/helm"},"Helm \u7ec4\u4ef6"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"../end-user/components/kustomize"},"Kustomize \u7ec4\u4ef6"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"../end-user/components/cue"},"CUE \u7ec4\u4ef6")," \u7b49\u5f00\u7bb1\u5373\u7528\u7684 KubeVela \u5185\u7f6e\u7ec4\u4ef6\u6765\u6784\u5efa\u4f60\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662f\u719f\u6089 Kubernetes \u7684\u5e73\u53f0\u7ba1\u7406\u5458\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/components/custom-component"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8"),"\u6587\u6863\u4e86\u89e3 KubeVela \u662f\u5982\u4f55\u6269\u5c55\u4efb\u610f\u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u3002\u7279\u522b\u7684\uff0c",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/components/component-terraform"},"Terraform \u7ec4\u4ef6")," \u5c31\u662f KubeVela \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u80fd\u529b\u7684\u4e00\u4e2a\u6700\u4f73\u5b9e\u8df5\uff0c\u53ef\u4ee5\u6ee1\u8db3\u4efb\u610f\u4e91\u8d44\u6e90\u7684\u4f9b\u5e94\uff0c\u53ea\u9700\u5c11\u91cf\u4e91\u5382\u5546\u7279\u5b9a\u914d\u7f6e\uff08\u5982\u9274\u6743\u3001\u4e91\u8d44\u6e90\u6a21\u5757\u7b49\uff09\uff0c\u5373\u53ef\u6210\u4e3a\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u4e91\u8d44\u6e90\u7ec4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u8fd0\u7ef4\u7279\u5f81\uff08traits\uff09"},"\u8fd0\u7ef4\u7279\u5f81\uff08Traits\uff09"),(0,o.kt)("p",null,"KubeVela \u4e5f\u5185\u7f6e\u4e86\u5e38\u7528\u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/getting-started/quick-install##3"},"KubeVela CLI")," \u547d\u4ee4\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela traits \n")),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION                                          \nannotations vela-system deployments.apps                    true            Add annotations for your Workload.                   \ncpuscaler   vela-system webservice,worker                   false           Automatically scale the component based on CPU usage.\ningress     vela-system webservice,worker                   false           Enable public web traffic for the component.         \nlabels      vela-system deployments.apps                    true            Add labels for your Workload.                        \nscaler      vela-system webservice,worker                   false           Manually scale the component.                        \nsidecar     vela-system deployments.apps                    true            Inject a sidecar container to the component.   \n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7ee7\u7eed\u9605\u8bfb\u7528\u6237\u624b\u518c\u91cc\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../end-user/traits/ingress"},"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81")," \uff0c\u5177\u4f53\u67e5\u770b\u5982\u4f55\u5b8c\u6210\u5404\u79cd\u8fd0\u7ef4\u7279\u5f81\u7684\u5f00\u53d1\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662f\u719f\u6089 Kubernetes \u7684\u5e73\u53f0\u7ba1\u7406\u5458\uff0c\u4e5f\u53ef\u4ee5\u4e86\u89e3 KubeVela \u4e2d",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/traits/customize-trait"},"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81")," \u7684\u80fd\u529b\uff0c\u4e3a\u4f60\u7684\u7528\u6237\u6269\u5c55\u4efb\u610f\u8fd0\u7ef4\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u5de5\u4f5c\u6d41\uff08workflow\uff09"},"\u5de5\u4f5c\u6d41\uff08Workflow\uff09"),(0,o.kt)("p",null,"KubeVela \u7684\u5de5\u4f5c\u6d41\u673a\u5236\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u5e94\u7528\u4ea4\u4ed8\u8ba1\u5212\u4e2d\u7684\u6b65\u9aa4\uff0c\u7c98\u5408\u989d\u5916\u7684\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u6307\u5b9a\u4efb\u610f\u7684\u4ea4\u4ed8\u73af\u5883\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86\u5b9a\u5236\u5316\u7684\u63a7\u5236\u903b\u8f91\uff0c\u5728\u539f\u6709 Kubernetes \u6a21\u5f0f\u4ea4\u4ed8\u8d44\u6e90\uff08Apply\uff09\u7684\u57fa\u7840\u4e0a\uff0c\u63d0\u4f9b\u4e86\u9762\u5411\u8fc7\u7a0b\u7684\u7075\u6d3b\u6027\u3002\u6bd4\u5982\u8bf4\uff0c\u4f7f\u7528\u5de5\u4f5c\u6d41\u5b9e\u73b0\u6682\u505c\u3001\u4eba\u5de5\u9a8c\u8bc1\u3001\u72b6\u6001\u7b49\u5f85\u3001\u6570\u636e\u6d41\u4f20\u9012\u3001\u591a\u73af\u5883\u7070\u5ea6\u3001A/B \u6d4b\u8bd5\u7b49\u590d\u6742\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5de5\u4f5c\u6d41\u662f KubeVela \u5b9e\u8df5\u8fc7\u7a0b\u4e2d\u57fa\u4e8e OAM \u6a21\u578b\u7684\u8fdb\u4e00\u6b65\u63a2\u7d22\u548c\u6700\u4f73\u5b9e\u8df5\uff0c\u5145\u5206\u9075\u5b88 OAM \u7684\u6a21\u5757\u5316\u7406\u5ff5\u548c\u53ef\u590d\u7528\u7279\u6027\u3002\u6bcf\u4e00\u4e2a\u5de5\u4f5c\u6d41\u6a21\u5757\u90fd\u662f\u4e00\u4e2a\u201c\u8d85\u7ea7\u7c98\u5408\u5242\u201d\uff0c\u53ef\u4ee5\u5c06\u4f60\u4efb\u610f\u7684\u5de5\u5177\u548c\u6d41\u7a0b\u90fd\u7ec4\u5408\u8d77\u6765\u3002\u4f7f\u5f97\u4f60\u5728\u73b0\u4ee3\u590d\u6742\u4e91\u539f\u751f\u5e94\u7528\u4ea4\u4ed8\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u4efd\u7533\u660e\u5f0f\u7684\u914d\u7f6e\uff0c\u5b8c\u6574\u7684\u63cf\u8ff0\u6240\u6709\u7684\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u4fdd\u8bc1\u4ea4\u4ed8\u8fc7\u7a0b\u7684\u7a33\u5b9a\u6027\u548c\u4fbf\u5229\u6027\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c\u5de5\u4f5c\u6d41\u673a\u5236\u662f\u5e94\u7528\u4ea4\u4ed8\u8fc7\u7a0b\u4e2d\u7684\u5f3a\u5927\u8865\u5145\u80fd\u529b\uff0c\u4f46\u5e76\u975e\u5fc5\u586b\u80fd\u529b\uff0c\u7528\u6237\u5728\u4e0d\u7f16\u5199 Workflow \u8fc7\u7a0b\u7684\u60c5\u51b5\u4e0b\uff0c\u4f9d\u65e7\u53ef\u4ee5\u5b8c\u6210\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7b56\u7565\u7684\u81ea\u52a8\u5316\u90e8\u7f72\u3002")),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u53ef\u4ee5\u770b\u5230\u4e00\u4e9b\u5de5\u4f5c\u6d41\u7684\u6b65\u9aa4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"apply-component")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"suspend")," \u7c7b\u578b\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apply-component")," \u7c7b\u578b\u53ef\u4ee5\u4f7f\u7528\u6237\u90e8\u7f72\u6307\u5b9a\u7684\u7ec4\u4ef6\u53ca\u5176\u8fd0\u7ef4\u7279\u5f81\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u6b65\u5b8c\u6210\u540e\uff0c\u5f00\u59cb\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"suspend")," \u7c7b\u578b\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\u3002\u8be5\u6b65\u9aa4\u4f1a\u6682\u505c\u5de5\u4f5c\u6d41\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u96c6\u7fa4\u4e2d\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u5f53\u5176\u6210\u529f\u8fd0\u884c\u540e\uff0c\u518d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"vela workflow resume website")," \u547d\u4ee4\u6765\u7ee7\u7eed\u8be5\u5de5\u4f5c\u6d41\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5f53\u5de5\u4f5c\u6d41\u7ee7\u7eed\u8fd0\u884c\u540e\uff0c\u7b2c\u4e09\u4e2a\u6b65\u9aa4\u5f00\u59cb\u90e8\u7f72\u7ec4\u4ef6\u53ca\u8fd0\u7ef4\u7279\u5f81\u3002\u6b64\u65f6\u6211\u4eec\u67e5\u770b\u96c6\u7fa4\uff0c\u53ef\u4ee5\u770b\u5230\u6240\u4ee5\u8d44\u6e90\u90fd\u5df2\u7ecf\u88ab\u6210\u529f\u90e8\u7f72\u3002")))),(0,o.kt)("p",null,"\u5173\u4e8e\u5de5\u4f5c\u6d41\uff0c\u4f60\u53ef\u4ee5\u4ece",(0,o.kt)("a",{parentName:"p",href:"../end-user/workflow/apply-component"},"\u6307\u5b9a\u7ec4\u4ef6\u90e8\u7f72"),"\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u8282\u70b9\u7c7b\u578b\u5f00\u59cb\u9010\u6b21\u4e86\u89e3\u66f4\u591a KubeVela \u5f53\u524d\u7684\u5185\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662f\u719f\u6089 Kubernetes \u7684\u5e73\u53f0\u7ba1\u7406\u5458\uff0c\u4f60\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/workflow/steps"},"\u5b66\u4e60\u521b\u5efa\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41\u8282\u70b9\u7c7b\u578b"),"\uff0c\u6216\u8005\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/workflow_policy.md"},"\u8bbe\u8ba1\u6587\u6863"),"\u4e86\u89e3\u5de5\u4f5c\u6d41\u7cfb\u7edf\u80cc\u540e\u7684\u8bbe\u8ba1\u548c\u67b6\u6784."),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"\u540e\u7eed\u6b65\u9aa4:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u52a0\u5165 KubeVela \u4e2d\u6587\u793e\u533a\u9489\u9489\u7fa4\uff0c\u7fa4\u53f7\uff1a23310022\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9605\u8bfb",(0,o.kt)("strong",{parentName:"li"},"\u7528\u6237\u624b\u518c"),"\u57fa\u4e8e\u5f00\u7bb1\u5373\u7528\u529f\u80fd\u6784\u5efa\u4f60\u7684\u5e94\u7528\u4ea4\u4ed8\u8ba1\u5212\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9605\u8bfb",(0,o.kt)("strong",{parentName:"li"},"\u7ba1\u7406\u5458\u624b\u518c"),"\u4e86\u89e3 KubeVela \u7684\u6269\u5c55\u65b9\u5f0f\u548c\u80cc\u540e\u7684\u539f\u7406\u3002")))}s.isMDXComponent=!0},1594:function(e,t,n){"use strict";t.Z=n.p+"assets/images/concepts-383eaac2518353371ca0716f0c7327a8.png"}}]);