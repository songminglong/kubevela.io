(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4811],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3752:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"Overview"},s={unversionedId:"platform-engineers/components/built-in/overview",id:"platform-engineers/components/built-in/overview",isDocsHomePage:!1,title:"Overview",description:"`",source:"@site/docs/platform-engineers/components/built-in/overview.md",sourceDirName:"platform-engineers/components/built-in",slug:"/platform-engineers/components/built-in/overview",permalink:"/docs/next/platform-engineers/components/built-in/overview",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/components/built-in/overview.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1630496336,formattedLastUpdatedAt:"9/1/2021",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"System Addon",permalink:"/docs/next/end-user/addons/introduction"},next:{title:"Helm",permalink:"/docs/next/platform-engineers/components/built-in/helm"}},c=[],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ vela components\nNAME            NAMESPACE   WORKLOAD                                DESCRIPTION                                                 \nalibaba-ack     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud ACK cluster       \nalibaba-oss     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud OSS object        \nalibaba-rds     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object        \nhelm            vela-system autodetects.core.oam.dev                helm release is a group of K8s resources from either git    \n                                                                    repository or helm repo                                     \nkustomize       vela-system autodetects.core.oam.dev                kustomize can fetching, building, updating and applying     \n                                                                    Kustomize manifests from git repo.                          \nmy-stateful     vela-system statefulsets.apps                       My StatefulSet component.                                   \nraw             vela-system autodetects.core.oam.dev                raw allow users to specify raw K8s object in properties     \ntask            vela-system jobs.batch                              Describes jobs that run code or a script to completion.     \nwebservice      vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                    that have a stable network endpoint to receive external     \n                                                                    network traffic from customers.                             \nwei-stateful    vela-system statefulsets.apps                       My StatefulSet component.                                   \nworker          vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                    that running at backend. They do NOT have network endpoint  \n                                                                    to receive external network traffic.                        \n")))}u.isMDXComponent=!0}}]);