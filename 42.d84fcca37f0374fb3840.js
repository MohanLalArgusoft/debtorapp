(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{k5eQ:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_route",function(){return a}),o.d(e,"ion_route_redirect",function(){return h}),o.d(e,"ion_router",function(){return S}),o.d(e,"ion_router_link",function(){return D});var n=o("A36C"),r=o("Zgba"),i=o("QPqR"),s=o("74mu");const a=class{constructor(t){Object(n.o)(this,t),this.ionRouteDataChanged=Object(n.g)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const o=t?Object.keys(t):[],n=e?Object.keys(e):[];if(o.length===n.length){for(const r of o)if(t[r]!==e[r])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},h=class{constructor(t){Object(n.o)(this,t),this.ionRouteRedirectChanged=Object(n.g)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},c="root",l="forward",u=t=>"/"+t.filter(t=>t.length>0).join("/"),d=t=>{if(null==t)return[""];const e=t.split("?")[0].split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e},f=async(t,e,o,n,r=!1,i)=>{try{const s=p(t);if(n>=e.length||!s)return r;await s.componentOnReady();const a=e[n],h=await s.setRouteId(a.id,a.params,o,i);return h.changed&&(o=c,r=!0),r=await f(h.element,e,o,n+1,r,i),h.markVisible&&await h.markVisible(),r}catch(s){return console.error(s),!1}},g=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",p=t=>{if(t)return t.matches(g)?t:t.querySelector(g)||void 0},b=(t,e)=>e.find(e=>((t,e)=>{const{from:o,to:n}=e;if(void 0===n)return!1;if(o.length>t.length)return!1;for(let r=0;r<o.length;r++){const e=o[r];if("*"===e)return!0;if(e!==t[r])return!1}return o.length===t.length})(t,e)),m=(t,e)=>{const o=Math.min(t.length,e.length);let n=0;for(;n<o&&t[n].toLowerCase()===e[n].id;n++);return n},w=(t,e)=>{const o=new C(t);let n,r=!1;for(let i=0;i<e.length;i++){const t=e[i].path;if(""===t[0])r=!0;else{for(const e of t){const t=o.next();if(":"===e[0]){if(""===t)return null;n=n||[],(n[i]||(n[i]={}))[e.slice(1)]=t}else if(t!==e)return null}r=!1}}return r&&r!==(""===o.next())?null:n?e.map((t,e)=>({id:t.id,path:t.path,params:v(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave})):e},v=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0,R=(t,e)=>{let o=null,n=0;for(const r of e){const e=w(t,r);if(null!==e){const t=y(e);t>n&&(n=t,o=e)}}return o},y=t=>{let e=1,o=1;for(const n of t)for(const t of n.path)":"===t[0]?e+=Math.pow(1,o):""!==t&&(e+=Math.pow(2,o)),o++;return e};class C{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const j=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=k(t,"to");return{from:d(k(t,"from")),to:null==e?void 0:d(e)}}),O=t=>E(P(t)),P=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const o=k(e,"component");if(null==o)throw new Error("component missing in ion-route");return{path:d(k(e,"url")),id:o.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:P(t,e)}}),k=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,E=t=>{const e=[];for(const o of t)L([],e,o);return e},L=(t,e,o)=>{const n=t.slice();if(n.push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length)for(const r of o.children)L(n,e,r);else e.push(n)},S=class{constructor(t){Object(n.o)(this,t),this.ionRouteWillChange=Object(n.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[ion-router] router will load"),await(p(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(i.m)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i.m)(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getPath();const o=await this.runGuards(e);return!0!==o?("object"==typeof o&&(e=d(o.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t))}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,e="forward",o){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);let n=d(t),r=t.split("?")[1];const i=await this.runGuards(n);if(!0!==i){if("object"!=typeof i)return!1;n=d(i.redirect),r=i.redirect.split("?")[1]}return this.setPath(n,e,r),this.writeNavStateRoot(n,e,o)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const o=e.map(t=>t.id);console.debug("%c "+u(t),"font-weight: bold; padding-left: 20px","=>\t",`(${o.join(", ")})`)}console.groupEnd()})(O(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ","$c "+u(e.from),"font-weight: bold"," TO: ","$c "+u(e.to),"font-weight: bold");console.groupEnd()})(j(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:o}=await(async t=>{const e=[];let o,n=window.document.body;for(;o=p(n),o;){const t=await o.getRouteId();if(!t)break;n=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:o}})(),n=((t,e)=>{let o=null,n=0;const r=t.map(t=>t.id);for(const i of e){const t=m(r,i);t>n&&(o=i,n=t)}return o?o.map((e,o)=>({id:e.id,path:e.path,params:v(e.params,t[o]&&t[o].params)})):null})(e,O(this.el));if(!n)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const r=(t=>{const e=[];for(const o of t)for(const t of o.path)if(":"===t[0]){const n=o.params&&o.params[t.slice(1)];if(!n)return null;e.push(n)}else""!==t&&e.push(t);return e})(n);return r?(console.debug("[ion-router] nav changed -> update URL",e,r),this.setPath(r,t),await this.safeWriteNavState(o,n,c,r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&b(t,j(this.el))&&this.writeNavStateRoot(t,c)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),c)}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,o=this.lastState;return this.lastState=e,e>o||e>=o&&o>0?l:e<o?"back":c}async writeNavStateRoot(t,e,o){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=j(this.el),r=b(t,n);let i=null;r&&(this.setPath(r.to,e),i=r.from,t=r.to);const s=O(this.el),a=R(t,s);return a?this.safeWriteNavState(document.body,a,e,t,i,0,o):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,o,n,r,i=0,s){const a=await this.lock();let h=!1;try{h=await this.writeNavState(t,e,o,n,r,i,s)}catch(c){console.error(c)}return a(),h}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async runGuards(t=this.getPath(),e=d(this.previousPath)){if(!t||!e)return!0;const o=O(this.el),n=R(t,o),r=R(e,o),i=n&&n[n.length-1].beforeEnter,s=r&&r[r.length-1].beforeLeave,a=!s||await s();if(!1===a||"object"==typeof a)return a;const h=!i||await i();return!1!==h&&"object"!=typeof h||h}async writeNavState(t,e,o,n,r,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(n,r);a&&this.ionRouteWillChange.emit(a);const h=await f(t,e,o,i,!1,s);return this.busy=!1,h&&console.debug("[ion-router] route changed",n),a&&this.ionRouteDidChange.emit(a),h}setPath(t,e,o){this.state++,((t,e,o,n,r,i,s)=>{let a=u([...d(this.root),...n]);o&&(a="#"+a),void 0!==s&&(a=a+"?"+s),r===l?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,0,this.useHash,t,e,this.state,o)}getPath(){return((t,e,o)=>{let n=t.pathname;if(this.useHash){const e=t.hash;n="#"===e[0]?e.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let o=0;o<t.length;o++)if(t[o].length>0&&t[o]!==e[o])return null;return e.length===t.length?[""]:e.slice(t.length)})(d(e),d(n))})(window.location,this.root)}routeChangeEvent(t,e){const o=this.previousPath,n=u(t);return this.previousPath=n,n===o?null:{from:o,redirectedFrom:e?u(e):null,to:n}}get el(){return Object(n.k)(this)}},D=class{constructor(t){Object(n.o)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(s.d)(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=Object(r.b)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(n.j)(n.c,{onClick:this.onClick,class:Object(s.a)(this.color,{[t]:!0,"ion-activatable":!0})},Object(n.j)("a",Object.assign({},e),Object(n.j)("slot",null)))}};D.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);