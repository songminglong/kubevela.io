(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5086],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9838:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return c},default:function(){return l}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),s={title:"Worker"},a={unversionedId:"platform-engineers/components/built-in/worker",id:"platform-engineers/components/built-in/worker",isDocsHomePage:!1,title:"Worker",description:"Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic.",source:"@site/docs/platform-engineers/components/built-in/worker.md",sourceDirName:"platform-engineers/components/built-in",slug:"/platform-engineers/components/built-in/worker",permalink:"/docs/next/platform-engineers/components/built-in/worker",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/components/built-in/worker.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1630496336,formattedLastUpdatedAt:"9/1/2021",frontMatter:{title:"Worker"},sidebar:"docs",previous:{title:"Web Service",permalink:"/docs/next/platform-engineers/components/built-in/webservice"},next:{title:"AliCloud ACK",permalink:"/docs/next/platform-engineers/components/built-in/alicloud-ack"}},c=[{value:"How-to",id:"how-to",children:[]},{value:"Description",id:"description",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic. "),(0,o.kt)("h2",{id:"how-to"},"How-to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: myworker\n      type: worker\n      properties:\n        image: "busybox"\n        cmd:\n          - sleep\n          - "1000"\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ vela show worker\n# Properties\n+------------------+-------------------------------------------------------------------------------------------+-----------------------------------+----------+---------+\n|       NAME       |                                        DESCRIPTION                                        |               TYPE                | REQUIRED | DEFAULT |\n+------------------+-------------------------------------------------------------------------------------------+-----------------------------------+----------+---------+\n| cmd              | Commands to run in the container                                                          | []string                          | false    |         |\n| env              | Define arguments by using environment variables                                           | [[]env](#env)                     | false    |         |\n| image            | Which image would you like to use for your service                                        | string                            | true     |         |\n| imagePullPolicy  | Specify image pull policy for your service                                                | string                            | false    |         |\n| cpu              | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)          | string                            | false    |         |\n| memory           | Specifies the attributes of the memory resource required for the container.               | string                            | false    |         |\n| volumes          | Declare volumes and volumeMounts                                                          | [[]volumes](#volumes)             | false    |         |\n| livenessProbe    | Instructions for assessing whether the container is alive.                                | [livenessProbe](#livenessProbe)   | false    |         |\n| readinessProbe   | Instructions for assessing whether the container is in a suitable state to serve traffic. | [readinessProbe](#readinessProbe) | false    |         |\n| imagePullSecrets | Specify image pull secrets for your service                                               | []string                          | false    |         |\n+------------------+-------------------------------------------------------------------------------------------+-----------------------------------+----------+---------+\n\n\n########### readinessProbe\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n|        NAME         |                                             DESCRIPTION                                              |          TYPE           | REQUIRED | DEFAULT |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n| exec                | Instructions for assessing container health by executing a command. Either this attribute or the     | [exec](#exec)           | false    |         |\n|                     | httpGet attribute or the tcpSocket attribute MUST be specified. This attribute is mutually exclusive |                         |          |         |\n|                     | with both the httpGet attribute and the tcpSocket attribute.                                         |                         |          |         |\n| httpGet             | Instructions for assessing container health by executing an HTTP GET request. Either this attribute  | [httpGet](#httpGet)     | false    |         |\n|                     | or the exec attribute or the tcpSocket attribute MUST be specified. This attribute is mutually       |                         |          |         |\n|                     | exclusive with both the exec attribute and the tcpSocket attribute.                                  |                         |          |         |\n| tcpSocket           | Instructions for assessing container health by probing a TCP socket. Either this attribute or the    | [tcpSocket](#tcpSocket) | false    |         |\n|                     | exec attribute or the httpGet attribute MUST be specified. This attribute is mutually exclusive with |                         |          |         |\n|                     | both the exec attribute and the httpGet attribute.                                                   |                         |          |         |\n| initialDelaySeconds | Number of seconds after the container is started before the first probe is initiated.                | int                     | true     |       0 |\n| periodSeconds       | How often, in seconds, to execute the probe.                                                         | int                     | true     |      10 |\n| timeoutSeconds      | Number of seconds after which the probe times out.                                                   | int                     | true     |       1 |\n| successThreshold    | Minimum consecutive successes for the probe to be considered successful after having failed.         | int                     | true     |       1 |\n| failureThreshold    | Number of consecutive failures required to determine the container is not alive (liveness probe) or  | int                     | true     |       3 |\n|                     | not ready (readiness probe).                                                                         |                         |          |         |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n\n\n############### tcpSocket\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| NAME |                                      DESCRIPTION                                      | TYPE | REQUIRED | DEFAULT |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| port | The TCP socket within the container that should be probed to assess container health. | int  | true     |         |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n\n\n############# httpGet\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n|    NAME     |                                      DESCRIPTION                                      |             TYPE              | REQUIRED | DEFAULT |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n| path        | The endpoint, relative to the port, to which the HTTP GET request should be directed. | string                        | true     |         |\n| port        | The TCP socket within the container to which the HTTP GET request should be directed. | int                           | true     |         |\n| httpHeaders |                                                                                       | [[]httpHeaders](#httpHeaders) | false    |         |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n\n\n############## httpHeaders\n+-------+-------------+--------+----------+---------+\n| NAME  | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-------+-------------+--------+----------+---------+\n| name  |             | string | true     |         |\n| value |             | string | true     |         |\n+-------+-------------+--------+----------+---------+\n\n\n############ exec\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n|  NAME   |                                             DESCRIPTION                                              |   TYPE   | REQUIRED | DEFAULT |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n| command | A command to be executed inside the container to assess its health. Each space delimited token of    | []string | true     |         |\n|         | the command is a separate array element. Commands exiting 0 are considered to be successful probes,  |          |          |         |\n|         | whilst all other exit codes are considered failures.                                                 |          |          |         |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n\n\n###### livenessProbe\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n|        NAME         |                                             DESCRIPTION                                              |          TYPE           | REQUIRED | DEFAULT |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n| exec                | Instructions for assessing container health by executing a command. Either this attribute or the     | [exec](#exec)           | false    |         |\n|                     | httpGet attribute or the tcpSocket attribute MUST be specified. This attribute is mutually exclusive |                         |          |         |\n|                     | with both the httpGet attribute and the tcpSocket attribute.                                         |                         |          |         |\n| httpGet             | Instructions for assessing container health by executing an HTTP GET request. Either this attribute  | [httpGet](#httpGet)     | false    |         |\n|                     | or the exec attribute or the tcpSocket attribute MUST be specified. This attribute is mutually       |                         |          |         |\n|                     | exclusive with both the exec attribute and the tcpSocket attribute.                                  |                         |          |         |\n| tcpSocket           | Instructions for assessing container health by probing a TCP socket. Either this attribute or the    | [tcpSocket](#tcpSocket) | false    |         |\n|                     | exec attribute or the httpGet attribute MUST be specified. This attribute is mutually exclusive with |                         |          |         |\n|                     | both the exec attribute and the httpGet attribute.                                                   |                         |          |         |\n| initialDelaySeconds | Number of seconds after the container is started before the first probe is initiated.                | int                     | true     |       0 |\n| periodSeconds       | How often, in seconds, to execute the probe.                                                         | int                     | true     |      10 |\n| timeoutSeconds      | Number of seconds after which the probe times out.                                                   | int                     | true     |       1 |\n| successThreshold    | Minimum consecutive successes for the probe to be considered successful after having failed.         | int                     | true     |       1 |\n| failureThreshold    | Number of consecutive failures required to determine the container is not alive (liveness probe) or  | int                     | true     |       3 |\n|                     | not ready (readiness probe).                                                                         |                         |          |         |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n\n\n########## tcpSocket\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| NAME |                                      DESCRIPTION                                      | TYPE | REQUIRED | DEFAULT |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| port | The TCP socket within the container that should be probed to assess container health. | int  | true     |         |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n\n\n######## httpGet\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n|    NAME     |                                      DESCRIPTION                                      |             TYPE              | REQUIRED | DEFAULT |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n| path        | The endpoint, relative to the port, to which the HTTP GET request should be directed. | string                        | true     |         |\n| port        | The TCP socket within the container to which the HTTP GET request should be directed. | int                           | true     |         |\n| httpHeaders |                                                                                       | [[]httpHeaders](#httpHeaders) | false    |         |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n\n\n######### httpHeaders\n+-------+-------------+--------+----------+---------+\n| NAME  | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-------+-------------+--------+----------+---------+\n| name  |             | string | true     |         |\n| value |             | string | true     |         |\n+-------+-------------+--------+----------+---------+\n\n\n####### exec\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n|  NAME   |                                             DESCRIPTION                                              |   TYPE   | REQUIRED | DEFAULT |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n| command | A command to be executed inside the container to assess its health. Each space delimited token of    | []string | true     |         |\n|         | the command is a separate array element. Commands exiting 0 are considered to be successful probes,  |          |          |         |\n|         | whilst all other exit codes are considered failures.                                                 |          |          |         |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n\n\n##### volumes\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                             DESCRIPTION                             |  TYPE  | REQUIRED | DEFAULT |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n| name      |                                                                     | string | true     |         |\n| mountPath |                                                                     | string | true     |         |\n| type      | Specify volume type, options: "pvc","configMap","secret","emptyDir" | string | true     |         |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n\n\n## env\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n|   NAME    |                        DESCRIPTION                        |          TYPE           | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n| name      | Environment variable name                                 | string                  | true     |         |\n| value     | The value of the environment variable                     | string                  | false    |         |\n| valueFrom | Specifies a source the value of this var should come from | [valueFrom](#valueFrom) | false    |         |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n\n\n### valueFrom\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n|     NAME     |                   DESCRIPTION                    |             TYPE              | REQUIRED | DEFAULT |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n| secretKeyRef | Selects a key of a secret in the pod\'s namespace | [secretKeyRef](#secretKeyRef) | true     |         |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n\n\n#### secretKeyRef\n+------+------------------------------------------------------------------+--------+----------+---------+\n| NAME |                           DESCRIPTION                            |  TYPE  | REQUIRED | DEFAULT |\n+------+------------------------------------------------------------------+--------+----------+---------+\n| name | The name of the secret in the pod\'s namespace to select from     | string | true     |         |\n| key  | The key of the secret to select from. Must be a valid secret key | string | true     |         |\n+------+------------------------------------------------------------------+--------+----------+---------+\n')))}l.isMDXComponent=!0}}]);