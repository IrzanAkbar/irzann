import{p as V,f as R,q as j,v as q,c as g,R as B,w as W,x as K,y as z,z as T,S as I,A as G,B as H,a as O,C as U,d as J,g as E,m as $,i as y,t as w,D as Q,h as X,e as Y,k as Z,j as C,G as tt,H as et,I as nt}from"./routing-e8757775.js";const rt="modulepreload",st=function(t){return"/_build/"+t},L={},x=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=st(i),i in L)return;L[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let p=s.length-1;p>=0;p--){const u=s[p];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":rt,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((p,u)=>{f.addEventListener("load",p),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},ot=t=>e=>{const{base:n}=e,r=V(()=>e.children),s=R(()=>j(e.root?{component:e.root,children:r()}:r(),e.base||"")),i=q(t,s,{base:n});return t.create&&t.create(i),g(B.Provider,{value:i,get children(){return g(at,{routerState:i,get branches(){return s()}})}})};function at(t){const e=R(()=>W(t.branches,t.routerState.location.pathname)),n=K(()=>{const o=e(),c={};for(let m=0;m<o.length;m++)Object.assign(c,o[m].params);return c}),r=[];let s;const i=R(z(e,(o,c,m)=>{let f=c&&o.length===c.length;const p=[];for(let u=0,v=o.length;u<v;u++){const b=c&&c[u],l=o[u];m&&b&&l.route.key===b.route.key?p[u]=m[u]:(f=!1,r[u]&&r[u](),G(a=>{r[u]=a,p[u]=H(t.routerState,p[u-1]||t.routerState.base,it(()=>i()[u+1]),()=>e()[u],n)}))}return r.splice(o.length).forEach(u=>u()),m&&f?m:(s=p[0],p)}));return g(I,{get when(){return i()&&s},keyed:!0,children:o=>g(T.Provider,{value:o,get children(){return o.outlet()}})})}const it=t=>()=>g(I,{get when(){return t()},keyed:!0,children:e=>g(T.Provider,{value:e,get children(){return e.outlet()}})});function lt([t,e],n,r){return[n?()=>n(t()):t,r?s=>e(r(s)):e]}function ct(t){if(t==="#")return null;try{return document.querySelector(t)}catch{return null}}function ut(t){let e=!1;const n=s=>typeof s=="string"?{value:s}:s,r=lt(O(n(t.get()),{equals:(s,i)=>s.value===i.value}),void 0,s=>(!e&&t.set(s),s));return t.init&&U(t.init((s=t.get())=>{e=!0,r[1](n(s)),e=!1})),ot({signal:r,create:t.create,utils:t.utils})}function dt(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function ht(t,e){const n=ct(`#${t}`);n?n.scrollIntoView():e&&window.scrollTo(0,0)}const ft=new Map;function pt(t=!0,e=!1,n="/_server"){return r=>{const s=r.base.path(),i=r.navigatorFactory(r.base);let o={};function c(l){return l.namespaceURI==="http://www.w3.org/2000/svg"}function m(l){if(l.defaultPrevented||l.button!==0||l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)return;const a=l.composedPath().find(A=>A instanceof Node&&A.nodeName.toUpperCase()==="A");if(!a||e&&!a.getAttribute("link"))return;const h=c(a),d=h?a.href.baseVal:a.href;if((h?a.target.baseVal:a.target)||!d&&!a.hasAttribute("state"))return;const _=(a.getAttribute("rel")||"").split(/\s+/);if(a.hasAttribute("download")||_&&_.includes("external"))return;const k=h?new URL(d,document.baseURI):new URL(d);if(!(k.origin!==window.location.origin||s&&k.pathname&&!k.pathname.toLowerCase().startsWith(s.toLowerCase())))return[a,k]}function f(l){const a=m(l);if(!a)return;const[h,d]=a,S=r.parsePath(d.pathname+d.search+d.hash),_=h.getAttribute("state");l.preventDefault(),i(S,{resolve:!1,replace:h.hasAttribute("replace"),scroll:!h.hasAttribute("noscroll"),state:_&&JSON.parse(_)})}function p(l){const a=m(l);if(!a)return;const[h,d]=a;o[d.pathname]||r.preloadRoute(d,h.getAttribute("preload")!=="false")}function u(l){const a=m(l);if(!a)return;const[h,d]=a;o[d.pathname]||(o[d.pathname]=setTimeout(()=>{r.preloadRoute(d,h.getAttribute("preload")!=="false"),delete o[d.pathname]},200))}function v(l){const a=m(l);if(!a)return;const[,h]=a;o[h.pathname]&&(clearTimeout(o[h.pathname]),delete o[h.pathname])}function b(l){let a=l.submitter&&l.submitter.hasAttribute("formaction")?l.submitter.formAction:l.target.action;if(!a)return;if(!a.startsWith("action:")){const d=new URL(a);if(a=r.parsePath(d.pathname+d.search),!a.startsWith(n))return}if(l.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const h=ft.get(a);if(h){l.preventDefault();const d=new FormData(l.target);h.call(r,d)}}J(["click","submit"]),document.addEventListener("click",f),t&&(document.addEventListener("mouseover",u),document.addEventListener("mouseout",v),document.addEventListener("focusin",p),document.addEventListener("touchstart",p)),document.addEventListener("submit",b),U(()=>{document.removeEventListener("click",f),t&&(document.removeEventListener("mouseover",u),document.removeEventListener("mouseout",v),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",b)})}}function mt(t){return ut({get:()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),set({value:e,replace:n,scroll:r,state:s}){n?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),ht(window.location.hash.slice(1),r)},init:e=>dt(window,"popstate",()=>e()),create:pt(t.preload,t.explicitLinks,t.actionBase),utils:{go:e=>window.history.go(e)}})(t)}const gt=w("<style>"),bt=w("<link>"),vt=w("<script> "),xt={style:t=>(()=>{const e=gt();return E(e,$(()=>t.attrs),!1,!0),y(e,()=>t.children),e})(),link:t=>(()=>{const e=bt();return E(e,$(()=>t.attrs),!1,!1),e})(),script:t=>t.attrs.src?(()=>{const e=vt();return E(e,$(()=>t.attrs,{get id(){return t.key}}),!1,!0),e})():null};function _t(t){let{tag:e,attrs:{key:n,...r}={key:void 0},children:s}=t;return xt[e]({attrs:r,key:n,children:s})}function wt(t,e,n,r="default"){return Q(async()=>{{const i=(await t.import())[r],c=(await e.inputs?.[t.src].assets()).filter(f=>f.tag==="style"||f.attrs.rel==="stylesheet");return{default:f=>[...c.map(p=>_t(p)),g(i,f)]}}})}const N=[{type:"page",$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>x(()=>import("./_...404_-8a5712b0.js"),["assets/_...404_-8a5712b0.js","assets/routing-e8757775.js","assets/components-70d2ff75.js"]),import:()=>{const t="src/routes/[...404].tsx?pick=default&pick=$css";return x(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),[])}},path:"/*404",filePath:"/home/vemonet/dev/llm/libre-chat/frontend/src/routes/[...404].tsx"},{type:"page",$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>x(()=>import("./about-cf4c1418.js"),["assets/about-cf4c1418.js","assets/routing-e8757775.js","assets/components-70d2ff75.js"]),import:()=>{const t="src/routes/about.tsx?pick=default&pick=$css";return x(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),[])}},path:"/about",filePath:"/home/vemonet/dev/llm/libre-chat/frontend/src/routes/about.tsx"},{type:"page",$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>x(()=>import("./index-683459cb.js"),["assets/index-683459cb.js","assets/routing-e8757775.js"]),import:()=>{const t="src/routes/index.tsx?pick=default&pick=$css";return x(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),[])}},path:"/",filePath:"/home/vemonet/dev/llm/libre-chat/frontend/src/routes/index.tsx"}],kt=yt(N.filter(t=>t.type==="page"));Et(N.filter(t=>t.type==="api"));function yt(t){function e(n,r,s,i){const o=Object.values(n).find(c=>s.startsWith(c.id+"/"));return o?(e(o.children||(o.children=[]),r,s.slice(o.id.length)),n):(n.push({...r,id:s,path:s.replace(/\/\([^)/]+\)/g,"")}),n)}return t.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>e(n,r,r.path,r.path),[])}function Et(t){return t.flatMap(e=>D(e.path).map(r=>({...e,path:r}))).map($t).sort((e,n)=>n.score-e.score)}function D(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),r=t.slice(e.index+e[0].length);const s=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=e[1]),r=r.slice(e[0].length);return D(r).reduce((i,o)=>[...i,...s.map(c=>c+o)],[])}function $t(t){const e=t.path.split("/").filter(Boolean),n=[],r=[];let s=0,i=!1;for(const[o,c]of e.entries())if(c[0]===":"){const m=c.slice(1);s+=3,n.push({type:":",name:m,index:o}),r.push(null)}else c[0]==="*"?(s-=1,n.push({type:"*",name:c.slice(1),index:o}),i=!0):(s+=4,c.match(/^\(.+\)$/)||r.push(c));return{...t,score:s,params:n,matchSegments:r,wildcard:i}}function Rt(){function t(n){return{...n,...n.$$route?n.$$route.require().route:void 0,metadata:{...n.$$route?n.$$route.require().route.metadata:{},filesystem:!0},component:wt(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(t):void 0}}return kt.map(t)}let P;const St=()=>P||(P=Rt()),At=w('<nav class="bg-gray-200 dark:bg-gray-900 text-black dark:text-white"><div class="nav-btns-desktop flex justify-between items-center"><div></div><div class="text-xl font-thin"></div><div class=flex><a href=/gradio target=_blank rel="noopener noreferrer"data-tooltip="Gradio UI"class="text-black hover:text-black dark:text-white"><button class="px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><img class=h-5 src=https://gradio-theme-soft.hf.space/assets/logo-3707f936.svg></button></a><a href=/docs target=_blank rel="noopener noreferrer"data-tooltip="OpenAPI documentation"class="text-black hover:text-black dark:text-white"><button class="px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><img class=h-5 src=https://raw.github.com/vemonet/libre-chat/main/docs/docs/assets/openapi_logo.svg></button></a><a target=_blank rel="noopener noreferrer"class="text-black hover:text-black dark:text-white"><button data-tooltip="Source code"class="px-4 py-2 mr-6 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><i class="fab fa-github text-xl"></i></button></a></div></div><div class="nav-btns-mobile flex gap-1 absolute top-2 right-3"><button data-tooltip=Menu id=mobile-nav-btn class="px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><i class="fas fa-bars"></i></button><div id=nav-btns-mobile class=hidden><a href=/docs target=_blank rel="noopener noreferrer"class="text-black hover:text-black dark:text-white"><button data-tooltip-target=tooltip-api class="px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><img class=h-5 src=https://raw.github.com/vemonet/libre-chat/main/docs/docs/assets/openapi_logo.svg></button></a><a target=_blank rel="noopener noreferrer"class="text-black hover:text-black dark:text-white"><button data-tooltip="Source code"class="px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500"><i class="fab fa-github text-xl">');function Ct(){const[t,e]=X(M);return Y(),(()=>{const n=At(),r=n.firstChild,s=r.firstChild,i=s.nextSibling,o=i.nextSibling,c=o.firstChild,m=c.nextSibling,f=m.nextSibling,p=r.nextSibling,u=p.firstChild,v=u.nextSibling,b=v.firstChild,l=b.nextSibling;return y(i,()=>t().info.title),Z(a=>{const h=t().info.repository_url,d=t().info.repository_url;return h!==a.e&&C(f,"href",a.e=h),d!==a.t&&C(l,"href",a.t=d),a},{e:void 0,t:void 0}),n})()}const Lt=w('<div class="flex flex-col h-screen">'),F={apiUrl:window.origin,info:{title:"Libre Chat",description:"Open source chatbot",repository_url:"https://github.com/vemonet/libre-chat",favicon:"https://raw.github.com/vemonet/libre-chat/main/docs/docs/assets/logo.png",examples:["What is the capital of the Netherlands?"]}},M=tt([F,()=>{}]);function Tt(){const[t,e]=O(F);return et(async()=>{const n={}.VITE_API_URL||window.origin,s=await(await fetch(`${n}/config`)).json();e({apiUrl:n,...s})}),g(M.Provider,{value:[t,e],get children(){return g(mt,{root:n=>(()=>{const r=Lt();return y(r,g(Ct,{}),null),y(r,g(nt,{get children(){return n.children}}),null),r})(),get children(){return g(St,{})}})}})}export{Tt as A,M as C,x as _};