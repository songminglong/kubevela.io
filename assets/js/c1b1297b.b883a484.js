(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9372],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52019:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Patch for Kustomize Component"},s={unversionedId:"end-user/traits/kustomize-patch",id:"end-user/traits/kustomize-patch",isDocsHomePage:!1,title:"Patch for Kustomize Component",description:"kustomize-patch Specification",source:"@site/docs/end-user/traits/kustomize-patch.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/kustomize-patch",permalink:"/docs/next/end-user/traits/kustomize-patch",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/kustomize-patch.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1631512219,formattedLastUpdatedAt:"9/13/2021",frontMatter:{title:"Patch for Kustomize Component"},sidebar:"docs",previous:{title:"AutoScaler",permalink:"/docs/next/end-user/traits/autoscaler"},next:{title:"Labels and Annotations",permalink:"/docs/next/end-user/traits/annotations-and-labels"}},c=[{value:"kustomize-patch Specification",id:"kustomize-patch-specification",children:[{value:"How to use",id:"how-to-use",children:[]}]},{value:"kustomize-json-patch Specification",id:"kustomize-json-patch-specification",children:[{value:"How to use",id:"how-to-use-1",children:[]},{value:"kustomize-strategy-merge Specification",id:"kustomize-strategy-merge-specification",children:[]},{value:"How to use",id:"how-to-use-2",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kustomize-patch-specification"},"kustomize-patch Specification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela show kustomize-patch\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Properties\n+---------+---------------------------------------------------------------+-----------------------+----------+---------+\n|  NAME   |                          DESCRIPTION                          |         TYPE          | REQUIRED | DEFAULT |\n+---------+---------------------------------------------------------------+-----------------------+----------+---------+\n| patches | a list of StrategicMerge or JSON6902 patch to selected target | [[]patches](#patches) | true     |         |\n+---------+---------------------------------------------------------------+-----------------------+----------+---------+\n\n\n## patches\n+--------+---------------------------------------------------+-------------------+----------+---------+\n|  NAME  |                    DESCRIPTION                    |       TYPE        | REQUIRED | DEFAULT |\n+--------+---------------------------------------------------+-------------------+----------+---------+\n| patch  | Inline patch string, in yaml style                | string            | true     |         |\n| target | Specify the target the patch should be applied to | [target](#target) | true     |         |\n+--------+---------------------------------------------------+-------------------+----------+---------+\n\n\n### target\n+--------------------+-------------+--------+----------+---------+\n|        NAME        | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+--------------------+-------------+--------+----------+---------+\n| name               |             | string | false    |         |\n| group              |             | string | false    |         |\n| version            |             | string | false    |         |\n| kind               |             | string | false    |         |\n| namespace          |             | string | false    |         |\n| annotationSelector |             | string | false    |         |\n| labelSelector      |             | string | false    |         |\n+--------------------+-------------+--------+----------+---------+\n")),(0,o.kt)("h3",{id:"how-to-use"},"How to use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: kustomize\n      # ... omitted for brevity\n      traits:\n        - type: kustomize-patch\n          properties:\n            patches:\n              - patch: |-\n                  apiVersion: v1\n                  kind: Pod\n                  metadata:\n                    name: not-used\n                    labels:\n                      app.kubernetes.io/part-of: test-app\n                target:\n                  labelSelector: "app=podinfo"\n')),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize-patch")," will patch the content for all Pods with label ",(0,o.kt)("inlineCode",{parentName:"p"},"app=podinfo"),"."),(0,o.kt)("h2",{id:"kustomize-json-patch-specification"},"kustomize-json-patch Specification"),(0,o.kt)("p",null,"You could use ",(0,o.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patchesjson6902/"},"JSON6902 format")," to patch the component. Get to know it first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela show kustomize-json-patch\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Properties\n+-------------+---------------------------+-------------------------------+----------+---------+\n|    NAME     |        DESCRIPTION        |             TYPE              | REQUIRED | DEFAULT |\n+-------------+---------------------------+-------------------------------+----------+---------+\n| patchesJson | A list of JSON6902 patch. | [[]patchesJson](#patchesJson) | true     |         |\n+-------------+---------------------------+-------------------------------+----------+---------+\n\n\n## patchesJson\n+--------+-------------+-------------------+----------+---------+\n|  NAME  | DESCRIPTION |       TYPE        | REQUIRED | DEFAULT |\n+--------+-------------+-------------------+----------+---------+\n| patch  |             | [patch](#patch)   | true     |         |\n| target |             | [target](#target) | true     |         |\n+--------+-------------+-------------------+----------+---------+\n\n\n#### target\n+--------------------+-------------+--------+----------+---------+\n|        NAME        | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+--------------------+-------------+--------+----------+---------+\n| name               |             | string | false    |         |\n| group              |             | string | false    |         |\n| version            |             | string | false    |         |\n| kind               |             | string | false    |         |\n| namespace          |             | string | false    |         |\n| annotationSelector |             | string | false    |         |\n| labelSelector      |             | string | false    |         |\n+--------------------+-------------+--------+----------+---------+\n\n\n### patch\n+-------+-------------+--------+----------+---------+\n| NAME  | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-------+-------------+--------+----------+---------+\n| path  |             | string | true     |         |\n| op    |             | string | true     |         |\n| value |             | string | false    |         |\n+-------+-------------+--------+----------+---------+\n")),(0,o.kt)("h3",{id:"how-to-use-1"},"How to use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: kustomize\n      # ... omitted for brevity\n      traits:\n        - type: kustomize-json-patch\n          properties:\n            patchesJson:\n              - target:\n                  version: v1\n                  kind: Deployment\n                  name: podinfo\n                patch:\n                - op: add\n                  path: /metadata/annotations/key\n                  value: value\n")),(0,o.kt)("h3",{id:"kustomize-strategy-merge-specification"},"kustomize-strategy-merge Specification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela show kustomize-json-patch\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Properties\n+-----------------------+-----------------------------------------------------------+---------------------------------------------------+----------+---------+\n|         NAME          |                        DESCRIPTION                        |                       TYPE                        | REQUIRED | DEFAULT |\n+-----------------------+-----------------------------------------------------------+---------------------------------------------------+----------+---------+\n| patchesStrategicMerge | a list of strategicmerge, defined as inline yaml objects. | [[]patchesStrategicMerge](#patchesStrategicMerge) | true     |         |\n+-----------------------+-----------------------------------------------------------+---------------------------------------------------+----------+---------+\n\n\n## patchesStrategicMerge\n+-----------+-------------+--------------------------------------------------------+----------+---------+\n|   NAME    | DESCRIPTION |                          TYPE                          | REQUIRED | DEFAULT |\n+-----------+-------------+--------------------------------------------------------+----------+---------+\n| undefined |             | map[string](null|bool|string|bytes|{...}|[...]|number) | true     |         |\n")),(0,o.kt)("h3",{id:"how-to-use-2"},"How to use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: kustomize\n      # ... omitted for brevity\n      traits:\n        - type: kustomize-strategy-merge\n          properties:\n            patchesStrategicMerge:\n              - apiVersion: apps/v1\n                kind: Deployment\n                metadata:\n                  name: podinfo\n                spec:\n                  template:\n                    spec:\n                      serviceAccount: custom-service-account\n")))}l.isMDXComponent=!0}}]);