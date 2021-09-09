(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5452],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31314:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"Helm"},o={unversionedId:"end-user/components/helm",id:"end-user/components/helm",isDocsHomePage:!1,title:"Helm",description:"KubeVela's Helm component meets the needs of users to connect to Helm Chart. You can deploy any ready-made Helm chart software package from Helm Repo, Git Repo or OSS bucket through the Helm component, and overwrite its parameters.",source:"@site/docs/end-user/components/helm.md",sourceDirName:"end-user/components",slug:"/end-user/components/helm",permalink:"/docs/next/end-user/components/helm",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/components/helm.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1631091425,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Helm"},sidebar:"docs",previous:{title:"Jenkins + KubeVela for CI/CD",permalink:"/docs/next/case-studies/jenkins-cicd"},next:{title:"Kustomize",permalink:"/docs/next/end-user/components/kustomize"}},p=[{value:"Deploy From Helm Repo",id:"deploy-from-helm-repo",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Deploy From OSS bucket",id:"deploy-from-oss-bucket",children:[]},{value:"Deploy From Git Repo",id:"deploy-from-git-repo",children:[]}],m={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"KubeVela's Helm component meets the needs of users to connect to Helm Chart. You can deploy any ready-made Helm chart software package from Helm Repo, Git Repo or OSS bucket through the Helm component, and overwrite its parameters."),(0,l.kt)("h2",{id:"deploy-from-helm-repo"},"Deploy From Helm Repo"),(0,l.kt)("p",null,"In this ",(0,l.kt)("inlineCode",{parentName:"p"},"Application"),", we hope to deliver a component called redis-comp. It is a chart from the ",(0,l.kt)("a",{parentName:"p",href:"https://charts.bitnami.com/bitnami"},"bitnami"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-delivering-chart\nspec:\n  components:\n    - name: redis-comp\n      type: helm\n      properties:\n        chart: redis-cluster\n        version: 6.2.7\n        url: https://charts.bitnami.com/bitnami\n        repoType: helm\nEOF\n")),(0,l.kt)("p",null,"Please copy the above code block and deploy it directly to the runtime cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"application.core.oam.dev/app-delivering-chart created\n")),(0,l.kt)("p",null,"Finally, we use ",(0,l.kt)("inlineCode",{parentName:"p"},"vela ls")," to view the application status after successful delivery:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"APP                     COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \napp-delivering-chart    redis-comp  helm                running healthy         2021-08-28 18:48:21 +0800 CST\n")),(0,l.kt)("p",null,"We also see that the PHASE of the app-delivering-chart APP is running and the STATUS is healthy."),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repoType"),(0,l.kt)("td",{parentName:"tr",align:null},"required, indicates where it's from"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, synchronize with Helm Repo, tunning interval and 5 minutes by default"),(0,l.kt)("td",{parentName:"tr",align:null},"10m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"required, Helm Reop address, it supports http/https"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://charts.bitnami.com/bitnami"},"https://charts.bitnami.com/bitnami"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, The name of the Secret object that holds the credentials required to pull the repo. The username and password fields must be included in the HTTP/S basic authentication Secret. For TLS the secret must contain a certFile and keyFile, and/or caCert fields. For TLS authentication, the secret must contain a certFile / keyFile field and/or caCert field."),(0,l.kt)("td",{parentName:"tr",align:null},"sec-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, timeout for pulling repo index"),(0,l.kt)("td",{parentName:"tr",align:null},"60s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chart"),(0,l.kt)("td",{parentName:"tr",align:null},"required, chart title"),(0,l.kt)("td",{parentName:"tr",align:null},"redis-cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, chart version, * by default"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetNamespace"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, the namespace to install chart, decided by chart itself"),(0,l.kt)("td",{parentName:"tr",align:null},"your-ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"releaseName"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, release name after installed"),(0,l.kt)("td",{parentName:"tr",align:null},"your-rn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, override the Values.yaml inchart, using for the rendering of Helm"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"deploy-from-oss-bucket"},"Deploy From OSS bucket"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repoType"),(0,l.kt)("td",{parentName:"tr",align:null},"required, indicates where it's from"),(0,l.kt)("td",{parentName:"tr",align:null},"oss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, synchronize with bucket, tunning interval and 5 minutes by default"),(0,l.kt)("td",{parentName:"tr",align:null},"10m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"required, bucket's endpoint and no need to fill in with scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"oss-cn-beijing.aliyuncs.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, Save the name of a Secret, which is the credential to read the bucket. Secret contains accesskey and secretkey fields"),(0,l.kt)("td",{parentName:"tr",align:null},"sec-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, The timeout period of the download operation, the default is 20s"),(0,l.kt)("td",{parentName:"tr",align:null},"60s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chart"),(0,l.kt)("td",{parentName:"tr",align:null},"required, Chart storage path (key)"),(0,l.kt)("td",{parentName:"tr",align:null},"./chart/podinfo-5.1.3.tgz")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, In OSS source, this parameter has no effect"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetNamespace"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, The namespace of the installed chart, which is determined by the chart itself by default"),(0,l.kt)("td",{parentName:"tr",align:null},"your-ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"releaseName"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, Installed release name"),(0,l.kt)("td",{parentName:"tr",align:null},"your-rn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, Overwrite the Values.yaml of the chart for Helm rendering."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.bucketName"),(0,l.kt)("td",{parentName:"tr",align:null},"required, bucket name"),(0,l.kt)("td",{parentName:"tr",align:null},"your-bucket")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.provider"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, Optional generic or aws, fill in aws if the certificate is obtained from aws EC2. The default is generic."),(0,l.kt)("td",{parentName:"tr",align:null},"generic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oss.region"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, bucket region"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How-to")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"(Opentional) If your OSS bucket needs identity verification, create a Secret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create secret generic bucket-secret --from-literal=accesskey=<your-ak> --from-literal=secretkey=<your-sk>\nsecret/bucket-secret created\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: bucket-app\nspec:\n  components:\n    - name: bucket-comp\n      type: helm\n      properties:\n        repoType: oss\n        # required if bucket is private\n        secretRef: bucket-secret\n        chart: ./chart/podinfo-5.1.3.tgz\n        url: oss-cn-beijing.aliyuncs.com\n        oss:\n            bucketName: definition-registry\n")),(0,l.kt)("h2",{id:"deploy-from-git-repo"},"Deploy From Git Repo"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repoType"),(0,l.kt)("td",{parentName:"tr",align:null},"required, indicates where it's from"),(0,l.kt)("td",{parentName:"tr",align:null},"git")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pullInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, synchronize with Git Repo, tunning interval and 5 minutes by default"),(0,l.kt)("td",{parentName:"tr",align:null},"10m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"required, Git Repo address"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/oam-dev/terraform-controller"},"https://github.com/oam-dev/terraform-controller"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, The name of the Secret object that holds the credentials required to pull the Git repository. For HTTP/S basic authentication, the Secret must contain the username and password fields. For SSH authentication, the identity, identity.pub and known_hosts fields must be included"),(0,l.kt)("td",{parentName:"tr",align:null},"sec-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, The timeout period of the download operation, the default is 20s"),(0,l.kt)("td",{parentName:"tr",align:null},"60s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chart"),(0,l.kt)("td",{parentName:"tr",align:null},"required, Chart storage path (key)"),(0,l.kt)("td",{parentName:"tr",align:null},"./chart/podinfo-5.1.3.tgz")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, In Git source, this parameter has no effect"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targetNamespace"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, the namespace to install chart, decided by chart itself"),(0,l.kt)("td",{parentName:"tr",align:null},"your-ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"releaseName"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, Installed release name"),(0,l.kt)("td",{parentName:"tr",align:null},"your-rn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, Overwrite the Values.yaml of the chart for Helm rendering."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"git.branch"),(0,l.kt)("td",{parentName:"tr",align:null},"optional, Git branch, master by default"),(0,l.kt)("td",{parentName:"tr",align:null},"dev")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How-to")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n   name: app-delivering-chart\nspec:\n   components:\n     - name: terraform-controller\n       type: helm\n       properties:\n          repoType: git\n          url: https://github.com/oam-dev/terraform-controller\n          chart: ./chart\n          git:\n            branch: master\n")))}d.isMDXComponent=!0}}]);