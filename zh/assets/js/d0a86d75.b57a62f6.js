(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3977],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||l[d]||s;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11339:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c},default:function(){return h}});var r=n(22122),i=n(19756),s=(n(67294),n(3905)),o={title:"\u4e00\u6b21\u6027\u4efb\u52a1"},a={unversionedId:"end-user/components/cue/task",id:"end-user/components/cue/task",isDocsHomePage:!1,title:"\u4e00\u6b21\u6027\u4efb\u52a1",description:"\u4e00\u6b21\u6027\u4efb\u52a1\uff08Task\uff09\u63cf\u8ff0\u8fd0\u884c\u4ee3\u7801\u6216\u811a\u672c\u4ee5\u5b8c\u6210\u7684\u4f5c\u4e1a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/components/cue/task.md",sourceDirName:"end-user/components/cue",slug:"/end-user/components/cue/task",permalink:"/zh/docs/next/end-user/components/cue/task",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/cue/task.md",version:"current",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1630629589,formattedLastUpdatedAt:"2021/9/3",frontMatter:{title:"\u4e00\u6b21\u6027\u4efb\u52a1"},sidebar:"docs",previous:{title:"\u539f\u751f\u8d44\u6e90",permalink:"/zh/docs/next/end-user/components/cue/raw"},next:{title:"Web \u670d\u52a1",permalink:"/zh/docs/next/end-user/components/cue/webservice"}},c=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",children:[]}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u4e00\u6b21\u6027\u4efb\u52a1\uff08Task\uff09\u63cf\u8ff0\u8fd0\u884c\u4ee3\u7801\u6216\u811a\u672c\u4ee5\u5b8c\u6210\u7684\u4f5c\u4e1a\u3002"),(0,s.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: mytask\n      type: task\n      properties:\n        image: perl\n        count: 10\n        cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),(0,s.kt)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'# Properties\n+----------------+--------------------------------------------------------------------------------------------------+-----------------------------------+----------+---------+\n|      NAME      |                                           DESCRIPTION                                            |               TYPE                | REQUIRED | DEFAULT |\n+----------------+--------------------------------------------------------------------------------------------------+-----------------------------------+----------+---------+\n| cmd            | Commands to run in the container                                                                 | []string                          | false    |         |\n| env            | Define arguments by using environment variables                                                  | [[]env](#env)                     | false    |         |\n| count          | Specify number of tasks to run in parallel                                                       | int                               | true     |       1 |\n| restart        | Define the job restart policy, the value can only be Never or OnFailure. By default, it\'s Never. | string                            | true     | Never   |\n| image          | Which image would you like to use for your service                                               | string                            | true     |         |\n| cpu            | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)                 | string                            | false    |         |\n| memory         | Specifies the attributes of the memory resource required for the container.                      | string                            | false    |         |\n| volumes        | Declare volumes and volumeMounts                                                                 | [[]volumes](#volumes)             | false    |         |\n| livenessProbe  | Instructions for assessing whether the container is alive.                                       | [livenessProbe](#livenessProbe)   | false    |         |\n| readinessProbe | Instructions for assessing whether the container is in a suitable state to serve traffic.        | [readinessProbe](#readinessProbe) | false    |         |\n+----------------+--------------------------------------------------------------------------------------------------+-----------------------------------+----------+---------+\n\n\n########### readinessProbe\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n|        NAME         |                                             DESCRIPTION                                              |          TYPE           | REQUIRED | DEFAULT |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n| exec                | Instructions for assessing container health by executing a command. Either this attribute or the     | [exec](#exec)           | false    |         |\n|                     | httpGet attribute or the tcpSocket attribute MUST be specified. This attribute is mutually exclusive |                         |          |         |\n|                     | with both the httpGet attribute and the tcpSocket attribute.                                         |                         |          |         |\n| httpGet             | Instructions for assessing container health by executing an HTTP GET request. Either this attribute  | [httpGet](#httpGet)     | false    |         |\n|                     | or the exec attribute or the tcpSocket attribute MUST be specified. This attribute is mutually       |                         |          |         |\n|                     | exclusive with both the exec attribute and the tcpSocket attribute.                                  |                         |          |         |\n| tcpSocket           | Instructions for assessing container health by probing a TCP socket. Either this attribute or the    | [tcpSocket](#tcpSocket) | false    |         |\n|                     | exec attribute or the httpGet attribute MUST be specified. This attribute is mutually exclusive with |                         |          |         |\n|                     | both the exec attribute and the httpGet attribute.                                                   |                         |          |         |\n| initialDelaySeconds | Number of seconds after the container is started before the first probe is initiated.                | int                     | true     |       0 |\n| periodSeconds       | How often, in seconds, to execute the probe.                                                         | int                     | true     |      10 |\n| timeoutSeconds      | Number of seconds after which the probe times out.                                                   | int                     | true     |       1 |\n| successThreshold    | Minimum consecutive successes for the probe to be considered successful after having failed.         | int                     | true     |       1 |\n| failureThreshold    | Number of consecutive failures required to determine the container is not alive (liveness probe) or  | int                     | true     |       3 |\n|                     | not ready (readiness probe).                                                                         |                         |          |         |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n\n\n############### tcpSocket\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| NAME |                                      DESCRIPTION                                      | TYPE | REQUIRED | DEFAULT |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| port | The TCP socket within the container that should be probed to assess container health. | int  | true     |         |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n\n\n############# httpGet\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n|    NAME     |                                      DESCRIPTION                                      |             TYPE              | REQUIRED | DEFAULT |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n| path        | The endpoint, relative to the port, to which the HTTP GET request should be directed. | string                        | true     |         |\n| port        | The TCP socket within the container to which the HTTP GET request should be directed. | int                           | true     |         |\n| httpHeaders |                                                                                       | [[]httpHeaders](#httpHeaders) | false    |         |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n\n\n############## httpHeaders\n+-------+-------------+--------+----------+---------+\n| NAME  | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-------+-------------+--------+----------+---------+\n| name  |             | string | true     |         |\n| value |             | string | true     |         |\n+-------+-------------+--------+----------+---------+\n\n\n############ exec\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n|  NAME   |                                             DESCRIPTION                                              |   TYPE   | REQUIRED | DEFAULT |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n| command | A command to be executed inside the container to assess its health. Each space delimited token of    | []string | true     |         |\n|         | the command is a separate array element. Commands exiting 0 are considered to be successful probes,  |          |          |         |\n|         | whilst all other exit codes are considered failures.                                                 |          |          |         |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n\n\n###### livenessProbe\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n|        NAME         |                                             DESCRIPTION                                              |          TYPE           | REQUIRED | DEFAULT |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n| exec                | Instructions for assessing container health by executing a command. Either this attribute or the     | [exec](#exec)           | false    |         |\n|                     | httpGet attribute or the tcpSocket attribute MUST be specified. This attribute is mutually exclusive |                         |          |         |\n|                     | with both the httpGet attribute and the tcpSocket attribute.                                         |                         |          |         |\n| httpGet             | Instructions for assessing container health by executing an HTTP GET request. Either this attribute  | [httpGet](#httpGet)     | false    |         |\n|                     | or the exec attribute or the tcpSocket attribute MUST be specified. This attribute is mutually       |                         |          |         |\n|                     | exclusive with both the exec attribute and the tcpSocket attribute.                                  |                         |          |         |\n| tcpSocket           | Instructions for assessing container health by probing a TCP socket. Either this attribute or the    | [tcpSocket](#tcpSocket) | false    |         |\n|                     | exec attribute or the httpGet attribute MUST be specified. This attribute is mutually exclusive with |                         |          |         |\n|                     | both the exec attribute and the httpGet attribute.                                                   |                         |          |         |\n| initialDelaySeconds | Number of seconds after the container is started before the first probe is initiated.                | int                     | true     |       0 |\n| periodSeconds       | How often, in seconds, to execute the probe.                                                         | int                     | true     |      10 |\n| timeoutSeconds      | Number of seconds after which the probe times out.                                                   | int                     | true     |       1 |\n| successThreshold    | Minimum consecutive successes for the probe to be considered successful after having failed.         | int                     | true     |       1 |\n| failureThreshold    | Number of consecutive failures required to determine the container is not alive (liveness probe) or  | int                     | true     |       3 |\n|                     | not ready (readiness probe).                                                                         |                         |          |         |\n+---------------------+------------------------------------------------------------------------------------------------------+-------------------------+----------+---------+\n\n\n########## tcpSocket\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| NAME |                                      DESCRIPTION                                      | TYPE | REQUIRED | DEFAULT |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n| port | The TCP socket within the container that should be probed to assess container health. | int  | true     |         |\n+------+---------------------------------------------------------------------------------------+------+----------+---------+\n\n\n######## httpGet\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n|    NAME     |                                      DESCRIPTION                                      |             TYPE              | REQUIRED | DEFAULT |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n| path        | The endpoint, relative to the port, to which the HTTP GET request should be directed. | string                        | true     |         |\n| port        | The TCP socket within the container to which the HTTP GET request should be directed. | int                           | true     |         |\n| httpHeaders |                                                                                       | [[]httpHeaders](#httpHeaders) | false    |         |\n+-------------+---------------------------------------------------------------------------------------+-------------------------------+----------+---------+\n\n\n######### httpHeaders\n+-------+-------------+--------+----------+---------+\n| NAME  | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-------+-------------+--------+----------+---------+\n| name  |             | string | true     |         |\n| value |             | string | true     |         |\n+-------+-------------+--------+----------+---------+\n\n\n####### exec\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n|  NAME   |                                             DESCRIPTION                                              |   TYPE   | REQUIRED | DEFAULT |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n| command | A command to be executed inside the container to assess its health. Each space delimited token of    | []string | true     |         |\n|         | the command is a separate array element. Commands exiting 0 are considered to be successful probes,  |          |          |         |\n|         | whilst all other exit codes are considered failures.                                                 |          |          |         |\n+---------+------------------------------------------------------------------------------------------------------+----------+----------+---------+\n\n\n##### volumes\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                             DESCRIPTION                             |  TYPE  | REQUIRED | DEFAULT |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n| name      |                                                                     | string | true     |         |\n| mountPath |                                                                     | string | true     |         |\n| type      | Specify volume type, options: "pvc","configMap","secret","emptyDir" | string | true     |         |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n\n\n## env\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n|   NAME    |                        DESCRIPTION                        |          TYPE           | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n| name      | Environment variable name                                 | string                  | true     |         |\n| value     | The value of the environment variable                     | string                  | false    |         |\n| valueFrom | Specifies a source the value of this var should come from | [valueFrom](#valueFrom) | false    |         |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n\n\n### valueFrom\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n|     NAME     |                   DESCRIPTION                    |             TYPE              | REQUIRED | DEFAULT |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n| secretKeyRef | Selects a key of a secret in the pod\'s namespace | [secretKeyRef](#secretKeyRef) | true     |         |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n\n\n#### secretKeyRef\n+------+------------------------------------------------------------------+--------+----------+---------+\n| NAME |                           DESCRIPTION                            |  TYPE  | REQUIRED | DEFAULT |\n+------+------------------------------------------------------------------+--------+----------+---------+\n| name | The name of the secret in the pod\'s namespace to select from     | string | true     |         |\n| key  | The key of the secret to select from. Must be a valid secret key | string | true     |         |\n+------+------------------------------------------------------------------+--------+----------+---------+\n')))}h.isMDXComponent=!0}}]);