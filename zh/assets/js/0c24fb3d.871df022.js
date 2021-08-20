(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8961],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26714:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={title:"vela def render"},l={unversionedId:"cli/vela_def_render",id:"cli/vela_def_render",isDocsHomePage:!1,title:"vela def render",description:"Render definition",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/vela_def_render.md",sourceDirName:"cli",slug:"/cli/vela_def_render",permalink:"/zh/docs/next/cli/vela_def_render",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/cli/vela_def_render.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629373937,formattedLastUpdatedAt:"2021/8/19",frontMatter:{title:"vela def render"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],d={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Render definition"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Render definition with cue format into kubernetes YAML format. Could be used to check whether the cue format definition is working as expected. If a directory is used as input, all cue definitions in the directory will be rendered."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela def render DEFINITION.cue [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Command below will render my-webservice.cue into YAML format and print it out.\n> vela def render my-webservice.cue\n# Command below will render my-webservice.cue and save it in my-webservice.yaml.\n> vela def render my-webservice.cue -o my-webservice.yaml# Command below will render all cue format definitions in the ./defs/cue/ directory and save the YAML objects in ./defs/yaml/.\n> vela def render ./defs/cue/ -o ./defs/yaml/\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help             help for render\n      --message string   Specify the header message of the generated YAML file. For example, declaring author information.\n  -o, --output string    Specify the output path of the rendered definition YAML. If empty, the definition will be printed in the console. If input is a directory, the output path is expected to be a directory as well.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/cli/vela_def"},"vela def"),"\t - Manage Definitions")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-19-aug-2021"},"Auto generated by spf13/cobra on 19-Aug-2021"))}s.isMDXComponent=!0}}]);