(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4320],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?i.createElement(f,r(r({ref:n},c),{},{components:t})):i.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6401:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var i=t(22122),a=t(19756),o=(t(67294),t(3905)),r={title:"Definition Objects"},l={unversionedId:"platform-engineers/definition-and-templates",id:"version-v1.0/platform-engineers/definition-and-templates",isDocsHomePage:!1,title:"Definition Objects",description:"This documentation explains ComponentDefinition and TraitDefinition in detail.",source:"@site/versioned_docs/version-v1.0/platform-engineers/definition-and-templates.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/definition-and-templates",permalink:"/docs/platform-engineers/definition-and-templates",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/definition-and-templates.md",version:"v1.0",lastUpdatedBy:"FogDong",lastUpdatedAt:1627992881,formattedLastUpdatedAt:"8/3/2021",frontMatter:{title:"Definition Objects"},sidebar:"version-v1.0/docs",previous:{title:"Resource Model",permalink:"/docs/platform-engineers/overview"},next:{title:"Generating UI Forms",permalink:"/docs/platform-engineers/openapi-v3-json-schema"}},s=[{value:"Overview",id:"overview",children:[{value:"Capability Indicator",id:"capability-indicator",children:[]},{value:"Interoperability Fields",id:"interoperability-fields",children:[]},{value:"Capability Encapsulation and Abstraction",id:"capability-encapsulation-and-abstraction",children:[]}]},{value:"Definition Revisions",id:"definition-revisions",children:[{value:"Specify Definition Revision in Application",id:"specify-definition-revision-in-application",children:[]}]}],p={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation explains ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," in detail."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Essentially, a definition object in KubeVela is a programmable build block. A definition object normally includes several information to model a certain platform capability that would used in further application deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Capability Indicator")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," uses ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.workload")," to indicate the workload type of this component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," uses ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.definitionRef")," to indicate the provider of this trait."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interoperability Fields"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"they are for the platform to ensure a trait can work with given workload type. Hence only ",(0,o.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," has these fields."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Capability Encapsulation and Abstraction")," defined by ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.schematic"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this defines the ",(0,o.kt)("strong",{parentName:"li"},"templating and parametering")," (i.e. encapsulation) of this capability.")))),(0,o.kt)("p",null,"Hence, the basic structure of definition object is as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: XxxDefinition\nmetadata:\n  name: <definition name>\nspec:\n  ...\n  schematic:\n    cue:\n      # cue template ...\n    helm:\n      # Helm chart ...\n  # ... interoperability fields\n")),(0,o.kt)("p",null,"Let's explain these fields one by one."),(0,o.kt)("h3",{id:"capability-indicator"},"Capability Indicator"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition"),", the indicator of workload type is declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.workload"),"."),(0,o.kt)("p",null,"Below is a definition for ",(0,o.kt)("em",{parentName:"p"},"Web Service")," in KubeVela: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n    ...        \n')),(0,o.kt)("p",null,"In above example, it claims to leverage Kubernetes Deployment (",(0,o.kt)("inlineCode",{parentName:"p"},"apiVersion: apps/v1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kind: Deployment"),") as the workload type for component."),(0,o.kt)("h3",{id:"interoperability-fields"},"Interoperability Fields"),(0,o.kt)("p",null,"The interoperability fields are ",(0,o.kt)("strong",{parentName:"p"},"trait only"),". An overall view of interoperability fields in a ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," is show as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name:  ingress\nspec:\n  appliesToWorkloads: \n    - deployments.apps\n    - webservice\n  conflictsWith: \n    - service\n  workloadRefPath: spec.wrokloadRef\n  podDisruptive: false\n")),(0,o.kt)("p",null,"Let's explain them in detail."),(0,o.kt)("h4",{id:"specappliestoworkloads"},(0,o.kt)("inlineCode",{parentName:"h4"},".spec.appliesToWorkloads")),(0,o.kt)("p",null,"This field defines the constraints that what kinds of workloads this trait is allowed to apply to."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It accepts an array of string as value."),(0,o.kt)("li",{parentName:"ul"},"Each item in the array refers to one or a group of workload types to which this trait is allowed to apply.")),(0,o.kt)("p",null,"There are four approaches to denote one or a group of workload types."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," name, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"webservice"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"worker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," definition reference (CRD name), e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"deployments.apps")),(0,o.kt)("li",{parentName:"ul"},"Resource group of ",(0,o.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," definition reference prefixed with ",(0,o.kt)("inlineCode",{parentName:"li"},"*."),", e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"*.apps"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"*.oam.dev"),". This means the trait is allowed to apply to any workloads in this group."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*")," means this trait is allowed to apply to any workloads")),(0,o.kt)("p",null,"If this field is omitted, it means this trait is allowed to apply to any workload types."),(0,o.kt)("p",null,"KubeVela will raise an error if a trait is applied to a workload which is NOT included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appliesToWorkloads"),"."),(0,o.kt)("h5",{id:"specconflictswith"},(0,o.kt)("inlineCode",{parentName:"h5"},".spec.conflictsWith")),(0,o.kt)("p",null,"This field defines that constraints that what kinds of traits are conflicting with this trait, if they are applied to the same workload."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It accepts an array of string as value. "),(0,o.kt)("li",{parentName:"ul"},"Each item in the array refers to one or a group of traits.")),(0,o.kt)("p",null,"There are four approaches to denote one or a group of workload types."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," name, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress")),(0,o.kt)("li",{parentName:"ul"},"Resource group of ",(0,o.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," definition reference prefixed with ",(0,o.kt)("inlineCode",{parentName:"li"},"*."),", e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"*.networking.k8s.io"),". This means the trait is conflicting with any traits in this group."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*")," means this trait is conflicting with any other trait.")),(0,o.kt)("p",null,"If this field is omitted, it means this trait is NOT conflicting with any traits."),(0,o.kt)("h5",{id:"specworkloadrefpath"},(0,o.kt)("inlineCode",{parentName:"h5"},".spec.workloadRefPath")),(0,o.kt)("p",null,"This field defines the field path of the trait which is used to store the reference of the workload to which the trait is applied."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It accepts a string as value, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.workloadRef"),".")),(0,o.kt)("p",null,"If this field is set, KubeVela core will automatically fill the workload reference into target field of the trait. Then the trait controller can get the workload reference from the trait latter. So this field usually accompanies with the traits whose controllers relying on the workload reference at runtime. "),(0,o.kt)("p",null,"Please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler")," trait as a demonstration of how to set this field."),(0,o.kt)("h5",{id:"specpoddisruptive"},(0,o.kt)("inlineCode",{parentName:"h5"},".spec.podDisruptive")),(0,o.kt)("p",null,"This field defines that adding/updating the trait will disruptive the pod or not.\nIn this example, the answer is not, so the field is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", it will not affect the pod when the trait is added or updated.\nIf the field is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then it will cause the pod to disruptive and restart when the trait is added or updated.\nBy default, the value is ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," which means this trait will not affect.\nPlease take care of this field, it's really important and useful for serious large scale production usage scenarios."),(0,o.kt)("h3",{id:"capability-encapsulation-and-abstraction"},"Capability Encapsulation and Abstraction"),(0,o.kt)("p",null,"The programmable template of given capability are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.schematic")," field. For example, below is the full definition of ",(0,o.kt)("em",{parentName:"p"},"Web Service")," type in KubeVela:"),(0,o.kt)("details",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n        \n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n        \n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n        \n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n        \n                            if parameter["env"] != _|_ {\n                                env: parameter.env\n                            }\n        \n                            if context["config"] != _|_ {\n                                env: context.config\n                            }\n        \n                            ports: [{\n                                containerPort: parameter.port\n                            }]\n        \n                            if parameter["cpu"] != _|_ {\n                                resources: {\n                                    limits:\n                                        cpu: parameter.cpu\n                                    requests:\n                                        cpu: parameter.cpu\n                                }\n                            }\n                        }]\n                }\n                }\n            }\n        }\n        parameter: {\n            // +usage=Which image would you like to use for your service\n            // +short=i\n            image: string\n        \n            // +usage=Commands to run in the container\n            cmd?: [...string]\n        \n            // +usage=Which port do you want customer traffic sent to\n            // +short=p\n            port: *80 | int\n            // +usage=Define arguments by using environment variables\n            env?: [...{\n                // +usage=Environment variable name\n                name: string\n                // +usage=The value of the environment variable\n                value?: string\n                // +usage=Specifies a source the value of this var should come from\n                valueFrom?: {\n                    // +usage=Selects a key of a secret in the pod\'s namespace\n                    secretKeyRef: {\n                        // +usage=The name of the secret in the pod\'s namespace to select from\n                        name: string\n                        // +usage=The key of the secret to select from. Must be a valid secret key\n                        key: string\n                    }\n                }\n            }]\n            // +usage=Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)\n            cpu?: string\n        }     \n'))),(0,o.kt)("p",null,"The specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"schematic")," is explained in following CUE and Helm specific documentations."),(0,o.kt)("p",null,"Also, the ",(0,o.kt)("inlineCode",{parentName:"p"},"schematic")," filed enables you to render UI forms directly based on them, please check the ",(0,o.kt)("a",{parentName:"p",href:"openapi-v3-json-schema"},"Generate Forms from Definitions")," section about how to."),(0,o.kt)("h2",{id:"definition-revisions"},"Definition Revisions"),(0,o.kt)("p",null,"In KubeVela, definition entities are mutable. Each time a ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," is updated, a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"DefinitionRevision")," will be generated to snapshot this change. Hence, KubeVela allows user to reference a specific revision of definition to declare an application."),(0,o.kt)("p",null,"For example, we can design a new parameter named ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"webservice")," component definition by applying a new definition with same name as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show webservice\n# Properties\n+-------+----------------------------------------------------+----------+----------+---------+\n| NAME  |                    DESCRIPTION                     |   TYPE   | REQUIRED | DEFAULT |\n+-------+----------------------------------------------------+----------+----------+---------+\n| cmd   | Commands to run in the container                   | []string | false    |         |\n... // skip\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/definition-revision/webservice-v2.yaml\n")),(0,o.kt)("p",null,"The change will take effect immediately."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show webservice\n# Properties\n+-------+----------------------------------------------------+----------+----------+---------+\n| NAME  |                    DESCRIPTION                     |   TYPE   | REQUIRED | DEFAULT |\n+-------+----------------------------------------------------+----------+----------+---------+\n| cmd   | Commands to run in the container                   | []string | false    |         |\n| args  | Arguments to the cmd                               | []string | false    |         |\n... // skip\n")),(0,o.kt)("p",null,"We will see a new definition revision will be automatically generated, ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," is the latest version, ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," is the previous one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$  kubectl get definitionrevision -l="componentdefinition.oam.dev/name=webservice" -n vela-system\nNAME            REVISION   HASH               TYPE\nwebservice-v1   1          3f6886d9832021ba   Component\nwebservice-v2   2          b3b9978e7164d973   Component\n')),(0,o.kt)("h3",{id:"specify-definition-revision-in-application"},"Specify Definition Revision in Application"),(0,o.kt)("p",null,"Users can specify the revision with ",(0,o.kt)("inlineCode",{parentName:"p"},"@version")," approach, for example, if a user want to stick to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," revision of ",(0,o.kt)("inlineCode",{parentName:"p"},"webservice")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# testapp.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n  - name: server\n    type: webservice@v1\n    properties:\n      image: foo\n      cmd:\n        - sleep\n        - '1000'\n")),(0,o.kt)("p",null,"If no revision is specified, KubeVela will always use the latest revision for a given component definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# testapp.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n  - name: server\n    type: webservice # type: webservice@v2\n    properties:\n      image: foo\n      cmd:\n        - sleep\n        - '1000'\n      args:\n        - wait\n")))}c.isMDXComponent=!0}}]);