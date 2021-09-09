(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6603],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,g=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98390:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"Bootstrap Parameters"},l={unversionedId:"platform-engineers/system-operation/bootstrap-parameters",id:"platform-engineers/system-operation/bootstrap-parameters",isDocsHomePage:!1,title:"Bootstrap Parameters",description:"The introduction of bootstrap parameters in KubeVela controller are listed as below",source:"@site/docs/platform-engineers/system-operation/bootstrap-parameters.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/bootstrap-parameters",permalink:"/docs/next/platform-engineers/system-operation/bootstrap-parameters",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/system-operation/bootstrap-parameters.md",version:"current",lastUpdatedBy:"Somefive",lastUpdatedAt:1630390078,formattedLastUpdatedAt:"8/31/2021",frontMatter:{title:"Bootstrap Parameters"},sidebar:"docs",previous:{title:"Appendix - CUE Actions",permalink:"/docs/next/platform-engineers/workflow/cue-actions"},next:{title:"Observability",permalink:"/docs/next/platform-engineers/system-operation/observability"}},p=[{value:"Key Parameters",id:"key-parameters",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The introduction of bootstrap parameters in KubeVela controller are listed as below"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"use-webhook"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Use Admission Webhook")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"webhook-cert-dir"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/k8s-webhook-server/serving-certs"),(0,i.kt)("td",{parentName:"tr",align:null},"The directory of Admission Webhook cert/secret")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"webhook-port"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9443"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of Admission Webhook")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metrics-addr"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},":8080"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of Prometheus metrics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"enable-leader-election"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable Leader Election for Controller Manager and ensure that only one replica is active")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"leader-election-namespace"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace of Leader Election ConfigMap")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"log-file-path"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"The log file path")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"log-file-max-size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1024"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum size (MBi) of log files")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"log-debug"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the logging level to DEBUG, used in develop environment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"application-revision-limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of application revisions to keep. When the number of revisions exceeeds this number, older version will be discarded")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"definition-revision-limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"20"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of definition revisions to keep")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"autogen-workload-definition"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Generate WorkloadDefinition for ComponentDefinition automatically")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"health-addr"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},":9440"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of health check")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"apply-once-only"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The Workload and Trait will not change after being applied. Used in specific scenario")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"disable-caps"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"Disable internal capabilities")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"storage-driver"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Local"),(0,i.kt)("td",{parentName:"tr",align:null},"The storage driver for applications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"informer-re-sync-interval"),(0,i.kt)("td",{parentName:"tr",align:"center"},"time"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1h"),(0,i.kt)("td",{parentName:"tr",align:null},"The resync period for for controller informer, also the time for application to be reconciled when no spec changes were made")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"system-definition-namespace"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"vela-system"),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace for storing system definitions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"concurrent-reconciles"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of threads that controller uses to process requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"kube-api-qps"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"50"),(0,i.kt)("td",{parentName:"tr",align:null},"The QPS for controller to access apiserver")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"kube-api-burst"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"The burst for controller to access apiserver")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"oam-spec-var"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"v0.3"),(0,i.kt)("td",{parentName:"tr",align:null},"The version of OAM spec to use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"pprof-addr"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'""'),(0,i.kt)("td",{parentName:"tr",align:null},"The address of pprof, default to be emtpy to disable pprof")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"perf-enabled"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable performance logging, working with monitoring tools like Loki and Grafana to discover performance bottleneck")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Other parameters not listed in the table are old parameters used in previous versions, the latest version ( v1.1 ) does not use them.")),(0,i.kt)("h3",{id:"key-parameters"},"Key Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"informer-resync-interval"),": The resync time of applications when no changes were made. A short time may cause controller to reconcile frequently but uselessly. The regular reconciles of applications can help ensure that application and its components keep up-to-date in case some unexpected differences."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"concurrent-reconciles"),": The number of threads to use for controller to handle requests. When rich CPU resources are available, a small number of working threads may lead to insufficient usage of CPU resources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"kube-api-qps / kube-api-burst"),": The rate limit for KubeVela controller to access apiserver. When managed applications are complex (containing multiple components and resources), if the access rate of apiserver is limited, it will be hard to increase the concurrency of KubeVela controller. However, high access rate may cause huge burden to apiserver. It is critical to keep a balance when handling massive applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pprof-addr"),": The pprof address to enable controller performance debugging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"perf-enabled"),": Use this flag if you would like to check time costs for different stages when reconciling applications. Switch it off to simplify loggings.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Several sets of recommended parameter configurations are enclosed in section ",(0,i.kt)("a",{parentName:"p",href:"./performance-finetuning"},"Performance Fine-tuning"),".")))}c.isMDXComponent=!0}}]);