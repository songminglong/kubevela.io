(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5019],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),u=o,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||i;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24477:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=t(22122),o=t(19756),i=(t(67294),t(3905)),r={title:"\u7ba1\u7406 X-Definition"},l={unversionedId:"platform-engineers/cue/definition-edit",id:"platform-engineers/cue/definition-edit",isDocsHomePage:!1,title:"\u7ba1\u7406 X-Definition",description:"\u5728 KubeVela CLI (>= v1.1.0) \u5de5\u5177\u4e2d\uff0cvela def \u547d\u4ee4\u7ec4\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4fbf\u6377\u7684 X-Definition \u7f16\u5199\u5de5\u5177\uff0c\u4f7f\u5f97 Definition \u7684\u7f16\u5199\u5c06\u5168\u90e8\u5728 CUE \u6587\u4ef6\u4e2d\u8fdb\u884c\uff0c\u907f\u514d\u5c06 Template CUE \u4e0e Kubernetes \u7684 YAML \u683c\u5f0f\u8fdb\u884c\u6df7\u5408\uff0c\u65b9\u4fbf\u8fdb\u884c\u683c\u5f0f\u5316\u4e0e\u6821\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/cue/definition-edit.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/definition-edit",permalink:"/zh/docs/next/platform-engineers/cue/definition-edit",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cue/definition-edit.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1629518797,formattedLastUpdatedAt:"2021/8/21",frontMatter:{title:"\u7ba1\u7406 X-Definition"},sidebar:"docs",previous:{title:"\u57fa\u7840\u5165\u95e8",permalink:"/zh/docs/next/platform-engineers/cue/basic"},next:{title:"\u81ea\u5b9a\u4e49\u73af\u5883\u521d\u59cb\u5316",permalink:"/zh/docs/next/platform-engineers/initializer/basic-initializer"}},p=[{value:"init",id:"init",children:[]},{value:"vet",id:"vet",children:[]},{value:"render / apply",id:"render--apply",children:[]},{value:"get / list / edit / del",id:"get--list--edit--del",children:[]}],m={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 KubeVela CLI (>= v1.1.0) \u5de5\u5177\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"vela def")," \u547d\u4ee4\u7ec4\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4fbf\u6377\u7684 X-Definition \u7f16\u5199\u5de5\u5177\uff0c\u4f7f\u5f97 Definition \u7684\u7f16\u5199\u5c06\u5168\u90e8\u5728 CUE \u6587\u4ef6\u4e2d\u8fdb\u884c\uff0c\u907f\u514d\u5c06 Template CUE \u4e0e Kubernetes \u7684 YAML \u683c\u5f0f\u8fdb\u884c\u6df7\u5408\uff0c\u65b9\u4fbf\u8fdb\u884c\u683c\u5f0f\u5316\u4e0e\u6821\u9a8c\u3002"),(0,i.kt)("h2",{id:"init"},"init"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"vela def init")," \u662f\u4e00\u4e2a\u7528\u6765\u5e2e\u52a9\u7528\u6237\u521d\u59cb\u5316\u65b0\u7684 Definition \u7684\u811a\u624b\u67b6\u547d\u4ee4\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},'vela def init my-trait -t trait --desc "My trait description."')," \u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u767d TraitDefinition \uff0c\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"my-trait": {\n        annotations: {}\n        attributes: {\n                appliesToWorkloads: []\n                conflictsWith: []\n                definitionRef:   ""\n                podDisruptive:   false\n                workloadRefPath: ""\n        }\n        description: "My trait description."\n        labels: {}\n        type: "trait"\n}\ntemplate: patch: {}\n')),(0,i.kt)("p",null,"\u6216\u8005\u662f\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def init my-comp --interactive")," \u6765\u4ea4\u4e92\u5f0f\u5730\u521b\u5efa\u65b0\u7684 Definition \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def init my-comp --interactive\nPlease choose one definition type from the following values: component, trait, policy, workload, scope, workflow-step\n> Definition type: component\n> Definition description: My component definition.\nPlease enter the location the template YAML file to build definition. Leave it empty to generate default template.\n> Definition template filename: \nPlease enter the output location of the generated definition. Leave it empty to print definition to stdout.\n> Definition output filename: my-component.cue\nDefinition written to my-component.cue\n")),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5982\u679c\u7528\u6237\u521b\u5efa ComponentDefinition \u7684\u76ee\u7684\u662f\u4e00\u4e2a Deployment\uff08\u6216\u8005\u662f\u5176\u4ed6\u7684 Kubernetes Object \uff09\uff0c\u800c\u8fd9\u4e2a Deployment \u5df2\u7ecf\u6709\u4e86 YAML \u683c\u5f0f\u7684\u6a21\u7248\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"--template-yaml")," \u53c2\u6570\u6765\u5b8c\u6210\u4ece YAML \u5230 CUE \u7684\u81ea\u52a8\u8f6c\u6362\u3002\u4f8b\u5982\u5982\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"my-deployment.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: hello-world\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: somefive/hello-world\n        ports: \n        - name: http\n          containerPort: 80\n          protocol: TCP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world-service\nspec:\n  selector:\n    app: hello-world\n  ports:\n  - name: http\n    protocol: TCP\n    port: 80\n    targetPort: 8080\n  type: LoadBalancer\n")),(0,i.kt)("p",null,"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},'vela def init my-comp -t component --desc "My component." --template-yaml ./my-deployment.yaml')," \u53ef\u4ee5\u5f97\u5230 CUE \u683c\u5f0f\u7684 ComponentDefinition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"my-comp": {\n        annotations: {}\n        attributes: workload: definition: {\n                apiVersion: "<change me> apps/v1"\n                kind:       "<change me> Deployment"\n        }\n        description: "My component."\n        labels: {}\n        type: "component"\n}\ntemplate: {\n        output: {\n                metadata: name: "hello-world"\n                spec: {\n                        replicas: 1\n                        selector: matchLabels: "app.kubernetes.io/name": "hello-world"\n                        template: {\n                                metadata: labels: "app.kubernetes.io/name": "hello-world"\n                                spec: containers: [{\n                                        name:  "hello-world"\n                                        image: "somefive/hello-world"\n                                        ports: [{\n                                                name:          "http"\n                                                containerPort: 80\n                                                protocol:      "TCP"\n                                        }]\n                                }]\n                        }\n                }\n                apiVersion: "apps/v1"\n                kind:       "Deployment"\n        }\n        outputs: "hello-world-service": {\n                metadata: name: "hello-world-service"\n                spec: {\n                        ports: [{\n                                name:       "http"\n                                protocol:   "TCP"\n                                port:       80\n                                targetPort: 8080\n                        }]\n                        selector: app: "hello-world"\n                        type: "LoadBalancer"\n                }\n                apiVersion: "v1"\n                kind:       "Service"\n        }\n        parameter: {}\n}\n')),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u7528\u6237\u5c31\u53ef\u4ee5\u5728\u8be5\u6587\u4ef6\u7684\u57fa\u7840\u4e0a\u8fdb\u4e00\u6b65\u505a\u8fdb\u4e00\u6b65\u7684\u4fee\u6539\u4e86\u3002\u6bd4\u5982\u5c06\u5c5e\u6027\u4e2d\u5bf9\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"workload.definition")," \u4e2d\u7684 ",(0,i.kt)("em",{parentName:"p"},"\\<change me",">")," \u53bb\u6389\u3002"),(0,i.kt)("h2",{id:"vet"},"vet"),(0,i.kt)("p",null,"\u5728\u521d\u59cb\u5316 Definition \u6587\u4ef6\u4e4b\u540e\uff0c\u53ef\u4ee5\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def vet my-comp.cue")," \u6765\u6821\u9a8c Definition \u662f\u5426\u5728\u8bed\u6cd5\u4e0a\u6709\u9519\u8bef\u3002\u6bd4\u5982\u5982\u679c\u5c11\u5199\u4e86\u4e00\u4e2a\u62ec\u53f7\uff0c\u8be5\u547d\u4ee4\u80fd\u591f\u5e2e\u52a9\u7528\u6237\u8bc6\u522b\u51fa\u6765\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def vet my-comp.cue\nValidation succeed.\n")),(0,i.kt)("h2",{id:"render--apply"},"render / apply"),(0,i.kt)("p",null,"\u786e\u8ba4 Definition \u64b0\u5199\u65e0\u8bef\u540e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def apply my-comp.cue --namespace my-namespace")," \u6765\u5c06\u8be5 Definition \u5e94\u7528\u5728 Kubernetes \u7684 my-namespace \u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u5982\u679c\u60f3\u4e86\u89e3\u4e00\u4e0b CUE \u683c\u5f0f\u7684 Definition \u6587\u4ef6\u4f1a\u88ab\u6e32\u67d3\u6210\u4ec0\u4e48\u6837\u7684 Kubernetes YAML \u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def apply my-comp.cue --dry-run")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def render my-comp.cue -o my-comp.yaml")," \u6765\u9884\u5148\u6e32\u67d3\u4e00\u4e0b YAML \u6587\u4ef6\u8fdb\u884c\u786e\u8ba4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: My component.\n  labels: {}\n  name: my-comp\n  namespace: vela-system\nspec:\n  schematic:\n    cue:\n      template: |\n        output: {\n                metadata: name: "hello-world"\n                spec: {\n                        replicas: 1\n                        selector: matchLabels: "app.kubernetes.io/name": "hello-world"\n                        template: {\n                                metadata: labels: "app.kubernetes.io/name": "hello-world"\n                                spec: containers: [{\n                                        name:  "hello-world"\n                                        image: "somefive/hello-world"\n                                        ports: [{\n                                                name:          "http"\n                                                containerPort: 80\n                                                protocol:      "TCP"\n                                        }]\n                                }]\n                        }\n                }\n                apiVersion: "apps/v11"\n                kind:       "Deployment"\n        }\n        outputs: "hello-world-service": {\n                metadata: name: "hello-world-service"\n                spec: {\n                        ports: [{\n                                name:       "http"\n                                protocol:   "TCP"\n                                port:       80\n                                targetPort: 8080\n                        }]\n                        selector: app: "hello-world"\n                        type: "LoadBalancer"\n                }\n                apiVersion: "v1"\n                kind:       "Service"\n        }\n        parameter: {}\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def apply my-comp.cue -n my-namespace\nComponentDefinition my-comp created in namespace my-namespace.\n")),(0,i.kt)("h2",{id:"get--list--edit--del"},"get / list / edit / del"),(0,i.kt)("p",null,"\u5728 apply \u547d\u4ee4\u540e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u91c7\u7528\u539f\u751f\u7684 kubectl \u6765\u5bf9\u7ed3\u679c\u8fdb\u884c\u786e\u8ba4\uff0c\u4f46\u662f\u6b63\u5982\u6211\u4eec\u4e0a\u6587\u63d0\u5230\u7684\uff0cYAML \u683c\u5f0f\u7684\u7ed3\u679c\u4f1a\u76f8\u5bf9\u590d\u6742\u3002\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def get")," \u547d\u4ee4\u53ef\u4ee5\u81ea\u52a8\u5c06\u5176\u8f6c\u6362\u6210 CUE \u683c\u5f0f\uff0c\u65b9\u4fbf\u7528\u6237\u67e5\u770b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def get my-comp -t component\n")),(0,i.kt)("p",null,"\u6216\u8005\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def list")," \u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u4e2d\u5b89\u88c5\u7684\u6240\u6709 Definition\uff08\u53ef\u4ee5\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u53ca\u7c7b\u578b\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def list -n my-namespace -t component\nNAME                    TYPE                    NAMESPACE       DESCRIPTION  \nmy-comp                 ComponentDefinition     my-namespace    My component.\n")),(0,i.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5728\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def edit")," \u547d\u4ee4\u6765\u7f16\u8f91 Definition \u65f6\uff0c\u7528\u6237\u4e5f\u53ea\u9700\u8981\u5bf9\u8f6c\u6362\u8fc7\u7684 CUE \u683c\u5f0f Definition \u8fdb\u884c\u4fee\u6539\uff0c\u8be5\u547d\u4ee4\u4f1a\u81ea\u52a8\u5b8c\u6210\u683c\u5f0f\u8f6c\u6362\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u5b9a\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"EDITOR")," \u6765\u4f7f\u7528\u81ea\u5df1\u60f3\u8981\u4f7f\u7528\u7684\u7f16\u8f91\u5668\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ EDITOR=vim vela def edit my-comp\n")),(0,i.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def del")," \u6765\u5220\u9664\u76f8\u5e94\u7684 Definition\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def del my-comp -n my-namespace  \nAre you sure to delete the following definition in namespace my-namespace?\nComponentDefinition my-comp: My component.\n[yes|no] > yes\nComponentDefinition my-comp in namespace my-namespace deleted.\n")))}c.isMDXComponent=!0}}]);