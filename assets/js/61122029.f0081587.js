(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1613],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56770:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r={title:"X-Definition"},p={unversionedId:"platform-engineers/oam/x-definition",id:"version-v1.1/platform-engineers/oam/x-definition",isDocsHomePage:!1,title:"X-Definition",description:"In OAM model, Application used by end user consists many declarative moduels such as Component, Trait, Policy and Workflow etc. These types are actually shaped by many definitions behind them. The module definition (X-Definition) supported by the current OAM model includes ComponentDefinition, TraitDefinition, PolicyDefinition and WorkflowStepDefinition etc.",source:"@site/versioned_docs/version-v1.1/platform-engineers/oam/x-definition.md",sourceDirName:"platform-engineers/oam",slug:"/platform-engineers/oam/x-definition",permalink:"/docs/platform-engineers/oam/x-definition",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/oam/x-definition.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"X-Definition"},sidebar:"version-v1.1/docs",previous:{title:"Introduction",permalink:"/docs/platform-engineers/oam/oam-model"},next:{title:"CUE Basic",permalink:"/docs/platform-engineers/cue/basic"}},l=[{value:"ComponentDefinition",id:"componentdefinition",children:[]},{value:"TraitDefinition",id:"traitdefinition",children:[]},{value:"PolicyDefinition",id:"policydefinition",children:[]},{value:"WorkflowStepDefinition",id:"workflowstepdefinition",children:[]},{value:"WorkloadDefinition",id:"workloaddefinition",children:[]},{value:"The Standard Protocol Behind Abstraction",id:"the-standard-protocol-behind-abstraction",children:[]},{value:"X-Definition Runtime Context",id:"x-definition-runtime-context",children:[]}],c={toc:l};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In OAM model, ",(0,o.kt)("a",{parentName:"p",href:"./oam-model"},"Application")," used by end user consists many declarative moduels such as Component, Trait, Policy and Workflow etc. These types are actually shaped by many definitions behind them. The module definition (X-Definition) supported by the current OAM model includes ComponentDefinition, TraitDefinition, PolicyDefinition and WorkflowStepDefinition etc."),(0,o.kt)("h2",{id:"componentdefinition"},"ComponentDefinition"),(0,o.kt)("p",null,'The design goal of ComponentDefinition is to allow platform administrators to encapsulate any type of deployable products into "components" to be delivered. Once defined, this type of component can be referenced, instantiated and delivered by users in the ',(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,o.kt)("p",null,"Common component types include Helm Chart, Kustomize directory, a set of Kubernetes YAML files, container images, cloud resource IaC files, or CUE configuration file modules, etc. The component supplier corresponds to the real-world role, which is generally a third-party software distributor (ISV), a DevOps team engineer, or a code package and image generated by the CI system you built."),(0,o.kt)("p",null,"ComponentDefinition can be shared and reused. For example, for an ",(0,o.kt)("inlineCode",{parentName:"p"},"Alibaba Cloud RDS")," component type, end users can select the same ",(0,o.kt)("inlineCode",{parentName:"p"},"Alibaba Cloud RDS")," component type in different applications and instantiate them into cloud database instances with different specifications and different parameter configurations."),(0,o.kt)("p",null,"Let's take a look at the frame format of ComponentDefinition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: <ComponentDefinition name>\n  annotations:\n    definition.oam.dev/description: <Function description>\nspec:\n  workload: # Workload description\n    definition:\n      apiVersion: <Kubernetes Workload resource group>\n      kind: <Kubernetes Workload types>\n  schematic:  # Component description\n    cue: # Details of components defined by CUE language\n      template: <CUE format template>\n")),(0,o.kt)("p",null,"Here is a complete example to introduce how to use ComponentDefinition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: helm\n  namespace: vela-system\n  annotations:\n    definition.oam.dev/description: "helm release is a group of K8s resources from either git repository or helm repo"\nspec:\n  workload:\n    type: autodetects.core.oam.dev\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "source.toolkit.fluxcd.io/v1beta1"\n            metadata: {\n                name: context.name\n            }\n            if parameter.repoType == "git" {\n                kind: "GitRepository"\n                spec: {\n                    url: parameter.repoUrl\n                    ref:\n                        branch: parameter.branch\n                    interval: parameter.pullInterval\n                }\n            }\n            if parameter.repoType == "helm" {\n                kind: "HelmRepository"\n                spec: {\n                    interval: parameter.pullInterval\n                    url:      parameter.repoUrl\n                    if parameter.secretRef != _|_ {\n                        secretRef: {\n                            name: parameter.secretRef\n                        }\n                    }\n                }\n            }\n        }\n\n        outputs: release: {\n            apiVersion: "helm.toolkit.fluxcd.io/v2beta1"\n            kind:       "HelmRelease"\n            metadata: {\n                name: context.name\n            }\n            spec: {\n                interval: parameter.pullInterval\n                chart: {\n                    spec: {\n                        chart:   parameter.chart\n                        version: parameter.version\n                        sourceRef: {\n                            if parameter.repoType == "git" {\n                                kind: "GitRepository"\n                            }\n                            if parameter.repoType == "helm" {\n                                kind: "HelmRepository"\n                            }\n                            name:      context.name\n                            namespace: context.namespace\n                        }\n                        interval: parameter.pullInterval\n                    }\n                }\n                if parameter.targetNamespace != _|_ {\n                    targetNamespace: parameter.targetNamespace\n                }\n                if parameter.values != _|_ {\n                    values: parameter.values\n                }\n            }\n        }\n\n        parameter: {\n            repoType: "git" | "helm"\n            // +usage=The Git or Helm repository URL, accept HTTP/S or SSH address as git url.\n            repoUrl: string\n            // +usage=The interval at which to check for repository and relese updates.\n            pullInterval: *"5m" | string\n            // +usage=1.The relative path to helm chart for git source. 2. chart name for helm resource\n            chart: string\n            // +usage=Chart version\n            version?: string\n            // +usage=The Git reference to checkout and monitor for changes, defaults to master branch.\n            branch: *"master" | string\n            // +usage=The name of the secret containing authentication credentials for the Helm repository.\n            secretRef?: string\n            // +usage=The namespace for helm chart\n            targetNamespace?: string\n            // +usage=Chart version\n            value?: #nestedmap\n        }\n\n        #nestedmap: {\n            ...\n        }\n')),(0,o.kt)("h2",{id:"traitdefinition"},"TraitDefinition"),(0,o.kt)("p",null,"TraitDefinition provides a series of DevOps actions for the component that can be bound on demand. These operation and maintenance actions are usually provided by the platform administrator, such as adding a load balancing strategy, routing strategy, or performing scaler, gray release strategy, etc."),(0,o.kt)("p",null,"The format and field functions of the TraitDefinition are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: <TraitDefinition name>\n  annotations:\n    definition.oam.dev/description: <function description>\nspec:\n  definition:\n    apiVersion: <corresponding Kubernetes resource group>\n    kind: <corresponding Kubernetes resource type>\n  workloadRefPath: <The path to the reference field of the Workload object in the Trait>\n  podDisruptive: <whether the parameter update of Trait cause the underlying resource (pod) to restart>\n  manageWorkload: <Whether the workload is managed by this Trait>\n  skipRevisionAffect: <Whether this Trait is not included in the calculation of version changes>\n  appliesToWorkloads:\n  - <Workload that TraitDefinition can adapt to>\n  conflictsWith:\n  - <other Traits that conflict with this><>\n  revisionEnabled: <whether Trait is aware of changes in component version>\n  schematic:  # Abstract\n    cue: # There are many abstracts\n      template: <CUE format template>\n")),(0,o.kt)("p",null,"Let's look at a practical example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "configure k8s Horizontal Pod Autoscaler for Component which using Deployment as worklaod"\n  name: hpa\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  workloadRefPath: spec.scaleTargetRef\n  schematic:\n    cue:\n      template: |\n        outputs: hpa: {\n          apiVersion: "autoscaling/v2beta2"\n          kind:       "HorizontalPodAutoscaler"\n          spec: {\n            minReplicas: parameter.min\n            maxReplicas: parameter.max\n            metrics: [{\n              type: "Resource"\n              resource: {\n                name: "cpu"\n                target: {\n                  type:               "Utilization"\n                  averageUtilization: parameter.cpuUtil\n                }\n              }\n            }]\n          }\n        }\n        parameter: {\n          min:     *1 | int\n          max:     *10 | int\n          cpuUtil: *50 | int\n        }\n')),(0,o.kt)("h2",{id:"policydefinition"},"PolicyDefinition"),(0,o.kt)("p",null,"PolicyDefinition is simimarly to TraitDefinition, the difference is that TraitDefinition acts on a single component but PolicyDefinition is to act on the entire application as a whole (multiple components). "),(0,o.kt)("p",null,"It can provide global policy for applications, commonly including global security policies (such as RBAC permissions, auditing, and key management), application insights (such as application SLO management, etc.)."),(0,o.kt)("p",null,"The format is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: PolicyDefinition\nmetadata:\n  name: <PolicyDefinition name>\n  annotations:\n    definition.oam.dev/description: <function description>\nspec:\n  schematic:  # strategy description\n    cue: \n      template: <CUE format template>\n")),(0,o.kt)("p",null,"A specific example is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: PolicyDefinition\nmetadata:\n  name: env-binding\n  annotations:\n    definition.oam.dev/description: <Provide differentiated configuration and environmental scheduling strategies for applications>\nspec:\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "core.oam.dev/v1alpha1"\n            kind:       "EnvBinding"\n            spec: {\n                engine: parameter.engine\n                appTemplate: {\n                    apiVersion: "core.oam.dev/v1beta1"\n                    kind:       "Application"\n                    metadata: {\n                        name:      context.appName\n                        namespace: context.namespace\n                    }\n                    spec: {\n                        components: context.components\n                    }\n                }\n                envs: parameter.envs\n            }\n        }\n\n        #Env: {\n            name: string\n            patch: components: [...{\n                name: string\n                type: string\n                properties: {...}\n            }]\n            placement: clusterSelector: {\n                labels?: [string]: string\n                name?: string\n            }\n        }\n\n        parameter: {\n            engine: *"ocm" | string\n            envs: [...#Env]\n        }\n')),(0,o.kt)("h2",{id:"workflowstepdefinition"},"WorkflowStepDefinition"),(0,o.kt)("p",null,"WorkflowStepDefinition is used to describe a series of steps that can be declared in the workflow, such as the deployment of execution resources, status check, data output, dependent input, external script call, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: WorkflowStepDefinition\nmetadata:\n  name: <WorkflowStepDefinition name>\n  annotations:\n    definition.oam.dev/description: <function description>\nspec:\n  schematic:  # node description\n    cue: \n      template: <CUE format template>\n")),(0,o.kt)("p",null,"An actual WorkflowStepDefinition is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: WorkflowStepDefinition\nmetadata:\n  name: apply-component\nspec:\n  schematic:\n    cue:\n      template: |\n        import ("vela/op")\n        parameter: {\n           component: string\n        }\n\n        // load component from application\n        component: op.#Load & {\n           component: parameter.component\n        }\n\n        // apply workload to kubernetes cluster\n        apply: op.#ApplyComponent & {\n           component: parameter.name\n        }\n\n        // wait until workload.status equal "Running"\n        wait: op.#ConditionalWait & {\n           continue: apply.status.phase =="Running"\n        }\n')),(0,o.kt)("h2",{id:"workloaddefinition"},"WorkloadDefinition"),(0,o.kt)("p",null,"WorkloadDefinition is a system-level feature. It's not a field that users should care about but as metadata checked, verified, and used by the OAM system itself."),(0,o.kt)("p",null,"The format is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: WorkloadDefinition\nmetadata:\n  name: <WorkloadDefinition name>\nspec:\n  definitionRef:\n    name: <corresponding Kubernetes resource group>\n    version: <corresponding Kubernetes resource version>\n  podSpecPath: <path to the Pod field in the Workload>\n  childResourceKinds:\n    - apiVersion: <resource group>\n      kind: <resource type>\n")),(0,o.kt)("p",null,"In addition, other Kubernetes resource type that need to be introduced into OAM model in the future will also be added as fields to the workload definition."),(0,o.kt)("h2",{id:"the-standard-protocol-behind-abstraction"},"The Standard Protocol Behind Abstraction"),(0,o.kt)("p",null,"Once the application is created, KubeVela will tag the created resources with a series of tags, which include the version, name, type, etc. of the application. Through these standard protocols, application components, traits and policies can be coordinated. The specific metadata list is as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Label"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"workload.oam.dev/type")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Corresponds to the name of ",(0,o.kt)("inlineCode",{parentName:"td"},"ComponentDefinition"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"trait.oam.dev/type")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Corresponds to the name of ",(0,o.kt)("inlineCode",{parentName:"td"},"TraitDefinition"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"app.oam.dev/name")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Application name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"app.oam.dev/component")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Component name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"trait.oam.dev/resource")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"outputs.\\<resource type\\>"),"in Trait")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"app.oam.dev/appRevision")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Application Revision Name")))),(0,o.kt)("h2",{id:"x-definition-runtime-context"},"X-Definition Runtime Context"),(0,o.kt)("p",null,"In the X-Definition, some runtime context information can be obtained through the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," variable. The specific list is as follows, where the scope indicates which module definitions the Context variable can be used in:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Context Variable"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Scope"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.appRevision")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The app version name corresponding to the current instance of the application"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.appRevisionNum")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The app version number corresponding to the current instance of the application."),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.appName")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The app name corresponding to the current instance of the application."),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.name")),(0,o.kt)("td",{parentName:"tr",align:"center"},"component name in ComponentDefinition and TraitDefinition\uff0cpolicy in PolicyDefinition"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition, PolicyDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.namespace")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The namespace of the current instance of the application"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.revision")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The version name of the current component instance"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.parameter")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The parameters of the current component instance, it can be obtained in the trait"),(0,o.kt)("td",{parentName:"tr",align:"center"},"TraitDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.output")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Object structure after instantiation of current component"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.outputs.<resourceName>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Structure after instantiation of current component and trait"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ComponentDefinition, TraitDefinition")))),(0,o.kt)("p",null,"At the same time, in the Workflow system, because the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," has to act on the application level, it is very different from the above usage. We introduce it separately:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Context Variable"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Scope"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.name")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of the current instance of the application"),(0,o.kt)("td",{parentName:"tr",align:"center"},"WorkflowStepDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.namespace")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The namespace of the current instance of the application"),(0,o.kt)("td",{parentName:"tr",align:"center"},"WorkflowStepDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.labels")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The labels of the current instance of the application"),(0,o.kt)("td",{parentName:"tr",align:"center"},"WorkflowStepDefinition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"context.annotations")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The annotations of the current instance of the application"),(0,o.kt)("td",{parentName:"tr",align:"center"},"WorkflowStepDefinition")))),(0,o.kt)("p",null,"Please note that all the X-Definition concepts introduced in this section only need to be understood by the platform administrator when they want to expand the functions of KubeVela, and end users do not need to have any perception of these concepts."))}s.isMDXComponent=!0}}]);