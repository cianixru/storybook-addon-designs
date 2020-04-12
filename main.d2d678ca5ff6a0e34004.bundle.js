(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1245:function(e,t,o){"use strict";o.r(t);var s=o(91),n=o(1),c=o(420),a=o.n(c),r=o(421);s.addons.setConfig({theme:Object(n.create)({brandTitle:"storybook-addon-designs",brandImage:a.a,brandUrl:r.homepage})})},1246:function(e,t,o){o(1285)},1250:function(e,t){},1251:function(e,t){},1252:function(e,t){},1253:function(e,t){},1285:function(e,t,o){"use strict";o.r(t);var s=o(91),n=o.n(s),c=o(1);const a="STORYBOOK_ADDON_DESIGNS",r={UpdateConfig:a+"/update_config"};var i=o(0),l=o(78),u=o(6);const b=({config:e})=>Object(c.jsx)("div",{css:d},Object(c.jsx)(u.Placeholder,{css:j},"Loading..."),Object(c.jsx)("iframe",{css:f,src:e.url,allowFullScreen:e.allowFullscreen}));const d=c.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,j=c.css`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,f=c.css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`,p=({config:e})=>{var t,o,s;return Object(c.jsx)("div",{css:m},Object(c.jsx)(u.Link,{cancel:!1,href:e.url,target:(t=e.target,null!=t?t:"_blank"),rel:(o=e.rel,null!=o?o:"noopener"),withArrow:(s=e.showArrow,null==s||s)},e.label||e.url))};const m=c.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,g=({config:e})=>{const t=Object(i.useMemo)(()=>({url:`https://www.figma.com/embed?embed_host=${e.embedHost||location.hostname}&url=${e.url}`,allowFullscreen:e.allowFullscreen}),[e.url,e.allowFullscreen,e.embedHost]);return Object(c.jsx)(b,{config:t})},O=()=>Object(c.jsx)(u.Placeholder,null,Object(c.jsx)(i.Fragment,null,"Loading...")),h=({children:e,className:t,style:o,defaultValue:s,value:n,onChange:a})=>{const[r,l]=Object(i.useState)([0,0]);Object(i.useEffect)(()=>{l(s||(n||[0,0]))},[s]);const u=((e,t)=>{const[o,s]=Object(i.useState)([0,0]),[n,c]=Object(i.useState)(!1),a=Object(i.useCallback)(e=>{0===e.button&&(s([e.screenX,e.screenY]),c(!0))},[c,s]),r=Object(i.useCallback)(e=>{const t=e.touches[0];s([t.screenX,t.screenY]),c(!0)},[c,s]),l=Object(i.useCallback)(t=>{n&&s(o=>(e([t[0]-o[0],t[1]-o[1]]),t))},[s,n,...t]),u=Object(i.useCallback)(e=>{const{screenX:t,screenY:o}=e;l([t,o])},[l]),b=Object(i.useCallback)(e=>{const{screenX:t,screenY:o}=e.touches[0];l([t,o])},[s,n,...t]),d=Object(i.useCallback)(()=>{s([0,0]),c(!1)},[c,s]);return{onMouseDown:a,onMouseMove:u,onMouseUp:d,onMouseLeave:d,onTouchStart:r,onTouchMove:b,onTouchCancel:d,onTouchEnd:d}})(e=>{a&&a(e),l(t=>[t[0]+e[0],t[1]+e[1]])},[l,a]),b=Object(i.useMemo)(()=>{const e=n||r;return{transform:`translate(${e[0]}px, ${e[1]}px)`}},[n,r]);return Object(c.jsx)("div",Object.assign({css:x,className:t,style:o},u),Object(c.jsx)("div",{css:k,style:b},e))};const x=c.css`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,k=c.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,v=({onZoomIn:e,onZoomOut:t,onReset:o})=>Object(c.jsx)(i.Fragment,null,Object(c.jsx)(u.IconButton,{onClick:e},Object(c.jsx)(u.Icons,{icon:"zoom"})),Object(c.jsx)(u.IconButton,{onClick:t},Object(c.jsx)(u.Icons,{icon:"zoomout"})),Object(c.jsx)(u.IconButton,{onClick:o},Object(c.jsx)(u.Icons,{icon:"zoomreset"})));const y=(e,t)=>{const[o,s]=Object(i.useState)(1);return Object(i.useEffect)(()=>{s(e)},t),{scale:o,zoomIn:Object(i.useCallback)(()=>{s(e=>e+.1)},[s]),zoomOut:Object(i.useCallback)(()=>{s(e=>Math.max(e-.1,.1))},[s]),resetZoom:Object(i.useCallback)(()=>{s(1)},[s])}},w=({config:e})=>{const t=y(e.scale||1,[e.scale]),o=Object(i.useMemo)(()=>({transform:`scale(${t.scale})`}),[t.scale]);return Object(c.jsx)("div",{css:C},Object(c.jsx)(u.FlexBar,{border:!0},Object(c.jsx)(i.Fragment,{key:"left"},Object(c.jsx)("p",null,Object(c.jsx)("b",null,"Image")),Object(c.jsx)(u.Separator,null),Object(c.jsx)(v,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),Object(c.jsx)(h,{css:S,defaultValue:e.offset},Object(c.jsx)("img",{css:P,src:e.url,style:o})))};const C=c.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,S=c.css`
  flex-grow: 1;
`,P=c.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`;var I=o(271);const _=Object(c.jsx)(u.Placeholder,null,"Loading PDF..."),F=({config:e})=>{const t=((e=1)=>{const[t,o]=Object(i.useState)(1),[s,n]=Object(i.useState)(1),c=Object(i.useCallback)(t=>{n(t),o(t>0?e:0)},[e,n,o]),a=Object(i.useCallback)(e=>{o(e>s?s:e<=0?1:e)},[s,o]);Object(i.useEffect)(()=>{a(e)},[e]);const r=t<=1,l=t>=s,u=Object(i.useCallback)(()=>{l||o(e=>e+1)},[l,o]),b=Object(i.useCallback)(()=>{r||o(e=>e-1)},[r,o]);return{current:t,total:s,isFirst:r,isLast:l,next:u,prev:b,jump:a,init:c}})(e.page),o=Object(i.useCallback)(e=>{t.init(e.numPages)},[t.init]),{scale:s,zoomIn:n,zoomOut:a,resetZoom:r}=y(e.scale||1,[e.scale]);return Object(c.jsx)("div",{css:T},Object(c.jsx)(u.FlexBar,{border:!0},Object(c.jsx)(i.Fragment,{key:"left"},Object(c.jsx)("p",null,Object(c.jsx)("b",null,"PDF")),Object(c.jsx)(u.Separator,null),Object(c.jsx)(v,{onReset:r,onZoomIn:n,onZoomOut:a}),Object(c.jsx)(u.Separator,null),Object(c.jsx)(u.IconButton,{css:D,onClick:t.prev,disabled:t.isFirst},Object(c.jsx)(u.Icons,{icon:"arrowleft"})),Object(c.jsx)("div",{css:E},t.current," / ",t.total),Object(c.jsx)(u.IconButton,{css:D,onClick:t.next,disabled:t.isLast},Object(c.jsx)(u.Icons,{icon:"arrowright"})))),Object(c.jsx)(h,{css:L,defaultValue:e.offset},Object(c.jsx)(I.Document,{file:e.url,loading:_,onLoadSuccess:o},Object(c.jsx)(I.Page,{css:A,loading:_,pageNumber:t.current,scale:s}))))};const T=c.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,D=e=>c.css`
  &[disabled] {
    color: ${e.color.medium};
    cursor: not-allowed;
  }
`,L=c.css`
  flex-grow: 1;
`,A=c.css`
  position: absolute !important;
  top: 50%;
  left: 50%;
  display: inline-block;

  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  transform: translate(-50%, -50%);
`,E=c.css`
  display: flex;
  align-items: center;
`;var M=o(272),U=o(273),z=function(e,t,o,s){return new(o||(o=Promise))((function(n,c){function a(e){try{i(s.next(e))}catch(e){c(e)}}function r(e){try{i(s.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}i((s=s.apply(e,t||[])).next())}))};const N=e=>"storybook-addon-designs."+U(e);var R=function(e,t,o,s){return new(o||(o=Promise))((function(n,c){function a(e){try{i(s.next(e))}catch(e){c(e)}}function r(e){try{i(s.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}i((s=s.apply(e,t||[])).next())}))};const B={format:"svg",scale:1},$=({config:e,fileKey:t,nodeId:o})=>{var s,n;const[a,r]=Object(i.useState)(),l=decodeURIComponent(o),b=Object(i.useMemo)(()=>Object.assign(Object.assign({},B),e.renderOptions),[e.renderOptions]),[d,j]=Object(i.useState)((null===(s=e.credential)||void 0===s?void 0:s.personalAccessToken)?{"x-figma-token":null===(n=e.credential)||void 0===n?void 0:n.personalAccessToken}:void 0),f=Object(i.useMemo)(()=>{const t=e.credential;return{authUrl:"https://www.figma.com/oauth",tokenUrl:"https://www.figma.com/api/oauth/token",scope:["file_read"],clientId:t.oauthClientId,clientSecret:t.oauthClientSecret}},[e.credential]);Object(i.useEffect)(()=>{if(d)return;const e=function(e){const t=N(e);return M.get(t)||null}(f);e&&j({authorization:`Bearer ${e}`})},[d,f]);const p=Object(i.useCallback)(()=>R(void 0,void 0,void 0,(function*(){const e=yield function(e){return z(this,void 0,void 0,(function*(){const t=N(e),{authUrl:o,tokenUrl:s,scope:n,clientSecret:c,clientId:a}=e,r=(location.origin+location.pathname).split("/").slice(0,-1).join("/")+"/addon-designs-oauth.html",i=U((new Date).valueOf()),l=new URL(o);l.searchParams.set("client_id",a),l.searchParams.set("redirect_uri",r),l.searchParams.set("scope",n.join(",")),l.searchParams.set("state",i),l.searchParams.set("response_type","code");const u=window.open(l.href,"Designs addon OAuth modal","modal");return new Promise((e,o)=>{const n=l=>{var b;if(l.origin===location.origin)try{const o=JSON.parse(l.data);if("OAUTH_COMPLETE"!==o.type)return;const{code:d,state:j}=o.payload;if(j!==i)return void console.error("[storybook-addon-designs] State does not match. Aborted.");const f=new URL(s);f.searchParams.set("client_id",a),f.searchParams.set("client_secret",c),f.searchParams.set("redirect_uri",r),f.searchParams.set("code",d),f.searchParams.set("grant_type","authorization_code"),fetch(f.toString(),{method:"POST"}).then(e=>e.json()).then(e=>(M.set(t,e.access_token,{expires:new Date((new Date).getTime()+1e3*e.expires_in)}),e.access_token)).then(e)}catch(e){o(e)}finally{null===(b=u)||void 0===b||b.close(),window.removeEventListener("message",n)}};window.addEventListener("message",n)})}))}(f);j({authorization:`Bearer ${e}`})})),[f]);Object(i.useEffect)(()=>{if(!d)return;const e=new URL(`https://api.figma.com/v1/images/${t}`);e.searchParams.set("ids",l),e.searchParams.set("format",b.format),e.searchParams.set("scale",b.scale.toString()),fetch(e.toString(),{headers:d}).then(e=>e.json()).then(e=>{r(e.images[l])})},[d,t,e.renderOptions]);const m=Object(i.useMemo)(()=>({type:"pdf"===b.format?"pdf":"image",url:null!=a?a:""}),[a,b.format]);if(!d)return Object(c.jsx)(u.Placeholder,null,Object(c.jsx)(i.Fragment,null,Object(c.jsx)(u.Button,{primary:!0,onClick:p},"Sign in to Figma")));if(!a)return Object(c.jsx)(O,null);const g="pdf"===b.format?F:w;return Object(c.jsx)(g,{config:m})},Z=/https:\/\/(?:[w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*?)?(?:\?node-id=(.+))?$/,Y=({config:e})=>{const t=Object(i.useMemo)(()=>e.url.match(Z),[e.url]),o=!(s=e.credential)||!!("personalAccessToken"in s&&s.personalAccessToken)||!!("oauthClientId"in s&&s.oauthClientId&&s.oauthClientSecret);var s;if(Object(i.useEffect)(()=>{t||console.warn("[storybook-addon-designs] The URL you specified is not valid Figma URL.\nThe addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>."),o||console.warn("[storybook-addon-designs] Given credential object is invalid.The addon fallbacks to link mode.\nPlease specify `personalAccessToken` or `oauthClientId` AND `oauthClientSecret`.")},[t,o]),!t)return Object(c.jsx)(b,{config:e});if(!o)return Object(c.jsx)(p,{config:{type:"link",url:e.url}});const[,n,a,r]=t;return"file"===n&&r&&e.credential?Object(c.jsx)($,{config:e,fileKey:a,nodeId:r}):Object(c.jsx)(g,{config:e})},G=({tabs:e})=>{const[t,o]=Object(i.useState)(e[0].id);return Object(c.jsx)(u.Tabs,{absolute:!0,selected:t,actions:{onSelect:o}},e.map(e=>Object(c.jsx)("div",{key:e.id,id:e.id,title:e.name},e.offscreen||t===e.id?e.content:null)))},H=({active:e,api:t,channel:o})=>{const[s,n]=Object(i.useState)(),[a,d]=Object(i.useState)();if(Object(i.useEffect)(()=>{const e=e=>{d(e);const o=t.getParameters(e,"design");n(e=>o!==e?o:e)};return o.on(r.UpdateConfig,n),o.on(l.STORY_CHANGED,e),()=>{o.removeListener(r.UpdateConfig,n),o.removeListener(l.STORY_CHANGED,e)}},[]),!e)return null;if(!s||"length"in s&&0===s.length)return Object(c.jsx)(u.Placeholder,null,Object(c.jsx)(i.Fragment,null,"No designs found"),Object(c.jsx)(i.Fragment,null,"Learn how to"," ",Object(c.jsx)(u.Link,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));const j=[...s instanceof Array?s:[s]].map((e,t)=>{var o;const s={id:`addon-designs-tab--${t}`,name:e.name||e.type.toUpperCase(),offscreen:(o=e.offscreen,null==o||o)};switch(e.type){case"iframe":return Object.assign(Object.assign({},s),{content:Object(c.jsx)(b,{config:e})});case"figma":return Object.assign(Object.assign({},s),{content:Object(c.jsx)(Y,{config:e}),offscreen:!1});case"pdf":return Object.assign(Object.assign({},s),{content:Object(c.jsx)(F,{config:e})});case"image":return Object.assign(Object.assign({},s),{content:Object(c.jsx)(w,{key:a,config:e})});case"link":return Object.assign(Object.assign({},s),{content:Object(c.jsx)(p,{config:e})})}return Object.assign(Object.assign({},s),{content:Object(c.jsx)(u.Placeholder,null,Object(c.jsx)(i.Fragment,null,"Invalid config type"),Object(c.jsx)(i.Fragment,null,"Config type you set is not supported. Please choose one from"," ",Object(c.jsx)(u.Link,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})});return 1===j.length?Object(c.jsx)("div",{key:a},j[0].content):Object(c.jsx)(G,{key:a,tabs:j})};n.a.register(a,e=>{n.a.addPanel("STORYBOOK_ADDON_DESIGNS/panel",{title:"Design",render:({active:t,key:o})=>Object(c.jsx)(H,{key:o,channel:n.a.getChannel(),api:e,active:t})})})},420:function(e,t,o){e.exports=o.p+"static/media/logo-with-text.39ee7ff9.svg"},421:function(e){e.exports=JSON.parse('{"name":"storybook-addon-designs","version":"5.3.0-alpha.1","description":"Storybook addon for embedding your design preview in addon panel","main":"lib/index.js","types":"lib/index.d.ts","repository":"git@github.com:pocka/storybook-addon-designs.git","homepage":"https://github.com/pocka/storybook-addon-designs","author":"pocka <pockawoooh@gmail.com>","license":"MIT","files":["lib","register.js"],"devDependencies":{"@storybook/addons":"^5.0.3","@storybook/components":"^5.0.3","@storybook/core-events":"^5.0.3","@storybook/theming":"^5.0.3","@types/js-cookie":"^2.2.5","@types/object-hash":"^1.3.1","@types/pdfjs-dist":"^2.0.0","@types/react":"^16.8.8","@types/webpack-env":"^1.13.9","react":"^16.8.4","typescript":"^3.7.0"},"peerDependencies":{"@storybook/addons":"^5.0.0","@storybook/components":"^5.0.0","@storybook/theming":"^5.0.0","react":">=16.8.0"},"scripts":{"dev":"tsc --watch --preserveWatchOutput","build":"tsc","test":"echo \'No tests\' && exit 0","clean":"rm -r lib","prepublishOnly":"cp ../../README.md ./ && yarn build"},"dependencies":{"html-webpack-plugin":"^3.2.0","js-cookie":"^2.2.1","object-hash":"^2.0.3","react-pdf":"^4.0.5"},"publishConfig":{"tag":"latest"}}')},423:function(e,t,o){o(424),o(567),o(1245),e.exports=o(1246)},486:function(e,t){}},[[423,1,2]]]);