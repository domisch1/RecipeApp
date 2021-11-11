var Nm=Object.defineProperty;var nu=Object.getOwnPropertySymbols;var km=Object.prototype.hasOwnProperty,Om=Object.prototype.propertyIsEnumerable;var ru=(t,e,n)=>e in t?Nm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,su=(t,e)=>{for(var n in e||(e={}))km.call(e,n)&&ru(t,n,e[n]);if(nu)for(var n of nu(e))Om.call(e,n)&&ru(t,n,e[n]);return t};function Go(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pm=Go(Dm);function iu(t){return!!t||t===""}function Qo(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?xm(r):Qo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ne(t))return t;if(be(t))return t}}const Lm=/;(?![^(]*\))/g,Mm=/:(.+)/;function xm(t){const e={};return t.split(Lm).forEach(n=>{if(n){const r=n.split(Mm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yo(t){let e="";if(Ne(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Yo(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Um(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=$r(t[r],e[r]);return n}function $r(t,e){if(t===e)return!0;let n=cu(t),r=cu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=j(t),r=j(e),n||r)return n&&r?Um(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!$r(t[o],e[o]))return!1}}return String(t)===String(e)}function Xo(t,e){return t.findIndex(n=>$r(n,e))}const pA=t=>t==null?"":j(t)||be(t)&&(t.toString===uu||!X(t.toString))?JSON.stringify(t,ou,2):String(t),ou=(t,e)=>e&&e.__v_isRef?ou(t,e.value):Wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Gn(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!j(e)&&!hu(e)?String(e):e,ue={},zn=[],vt=()=>{},Fm=()=>!1,Vm=/^on[^a-z]/,ei=t=>Vm.test(t),Jo=t=>t.startsWith("onUpdate:"),je=Object.assign,au=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$m=Object.prototype.hasOwnProperty,ne=(t,e)=>$m.call(t,e),j=Array.isArray,Wn=t=>ti(t)==="[object Map]",Gn=t=>ti(t)==="[object Set]",cu=t=>t instanceof Date,X=t=>typeof t=="function",Ne=t=>typeof t=="string",Zo=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",lu=t=>be(t)&&X(t.then)&&X(t.catch),uu=Object.prototype.toString,ti=t=>uu.call(t),jm=t=>ti(t).slice(8,-1),hu=t=>ti(t)==="[object Object]",ea=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=Go(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bm=/-(\w)/g,St=ri(t=>t.replace(Bm,(e,n)=>n?n.toUpperCase():"")),Hm=/\B([A-Z])/g,dn=ri(t=>t.replace(Hm,"-$1").toLowerCase()),si=ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),ta=ri(t=>t?`on${si(t)}`:""),jr=(t,e)=>!Object.is(t,e),ii=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},oi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ai=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fu;const qm=()=>fu||(fu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let pn;const ci=[];class Km{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&pn&&(this.parent=pn,this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(ci.push(this),pn=this)}off(){this.active&&(ci.pop(),pn=ci[ci.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function zm(t,e){e=e||pn,e&&e.active&&e.effects.push(t)}const na=t=>{const e=new Set(t);return e.w=0,e.n=0,e},du=t=>(t.w&Ht)>0,pu=t=>(t.n&Ht)>0,Wm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ht},Gm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];du(s)&&!pu(s)?s.delete(t):e[n++]=s,s.w&=~Ht,s.n&=~Ht}e.length=n}},ra=new WeakMap;let Br=0,Ht=1;const sa=30,Hr=[];let gn;const mn=Symbol(""),ia=Symbol("");class oa{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],zm(this,r)}run(){if(!this.active)return this.fn();if(!Hr.includes(this))try{return Hr.push(gn=this),Qm(),Ht=1<<++Br,Br<=sa?Wm(this):gu(this),this.fn()}finally{Br<=sa&&Gm(this),Ht=1<<--Br,yn(),Hr.pop();const e=Hr.length;gn=e>0?Hr[e-1]:void 0}}stop(){this.active&&(gu(this),this.onStop&&this.onStop(),this.active=!1)}}function gu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Qn=!0;const aa=[];function Yn(){aa.push(Qn),Qn=!1}function Qm(){aa.push(Qn),Qn=!0}function yn(){const t=aa.pop();Qn=t===void 0?!0:t}function it(t,e,n){if(!mu())return;let r=ra.get(t);r||ra.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=na()),yu(s)}function mu(){return Qn&&gn!==void 0}function yu(t,e){let n=!1;Br<=sa?pu(t)||(t.n|=Ht,n=!du(t)):n=!t.has(gn),n&&(t.add(gn),gn.deps.push(t))}function Pt(t,e,n,r,s,i){const o=ra.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?ea(n)&&a.push(o.get("length")):(a.push(o.get(mn)),Wn(t)&&a.push(o.get(ia)));break;case"delete":j(t)||(a.push(o.get(mn)),Wn(t)&&a.push(o.get(ia)));break;case"set":Wn(t)&&a.push(o.get(mn));break}if(a.length===1)a[0]&&ca(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ca(na(c))}}function ca(t,e){for(const n of j(t)?t:[...t])(n!==gn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ym=Go("__proto__,__v_isRef,__isVue"),vu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Zo)),Xm=la(),Jm=la(!1,!0),Zm=la(!0),wu=ey();function ey(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)it(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yn();const r=re(this)[e].apply(this,n);return yn(),r}}),t}function la(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?my:Ru:e?Cu:Au).get(r))return r;const o=j(r);if(!t&&o&&ne(wu,s))return Reflect.get(wu,s,i);const a=Reflect.get(r,s,i);return(Zo(s)?vu.has(s):Ym(s))||(t||it(r,"get",s),e)?a:Ze(a)?!o||!ea(s)?a.value:a:be(a)?t?Nu(a):Xn(a):a}}const ty=_u(),ny=_u(!0);function _u(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=re(s),o=re(o),!j(n)&&Ze(o)&&!Ze(s)))return o.value=s,!0;const a=j(n)&&ea(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,s,i);return n===re(i)&&(a?jr(s,o)&&Pt(n,"set",r,s):Pt(n,"add",r,s)),c}}function ry(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Pt(t,"delete",e,void 0),r}function sy(t,e){const n=Reflect.has(t,e);return(!Zo(e)||!vu.has(e))&&it(t,"has",e),n}function iy(t){return it(t,"iterate",j(t)?"length":mn),Reflect.ownKeys(t)}const Eu={get:Xm,set:ty,deleteProperty:ry,has:sy,ownKeys:iy},oy={get:Zm,set(t,e){return!0},deleteProperty(t,e){return!0}},ay=je({},Eu,{get:Jm,set:ny}),ua=t=>t,li=t=>Reflect.getPrototypeOf(t);function ui(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);e!==i&&!n&&it(s,"get",e),!n&&it(s,"get",i);const{has:o}=li(s),a=r?ua:n?da:qr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function hi(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return t!==s&&!e&&it(r,"has",t),!e&&it(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function fi(t,e=!1){return t=t.__v_raw,!e&&it(re(t),"iterate",mn),Reflect.get(t,"size",t)}function Iu(t){t=re(t);const e=re(this);return li(e).has.call(e,t)||(e.add(t),Pt(e,"add",t,t)),this}function Tu(t,e){e=re(e);const n=re(this),{has:r,get:s}=li(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?jr(e,o)&&Pt(n,"set",t,e):Pt(n,"add",t,e),this}function bu(t){const e=re(this),{has:n,get:r}=li(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Pt(e,"delete",t,void 0),i}function Su(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Pt(t,"clear",void 0,void 0),n}function di(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?ua:t?da:qr;return!t&&it(a,"iterate",mn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function pi(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=Wn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ua:e?da:qr;return!e&&it(i,"iterate",c?ia:mn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:this}}function cy(){const t={get(i){return ui(this,i)},get size(){return fi(this)},has:hi,add:Iu,set:Tu,delete:bu,clear:Su,forEach:di(!1,!1)},e={get(i){return ui(this,i,!1,!0)},get size(){return fi(this)},has:hi,add:Iu,set:Tu,delete:bu,clear:Su,forEach:di(!1,!0)},n={get(i){return ui(this,i,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:di(!0,!1)},r={get(i){return ui(this,i,!0,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:di(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pi(i,!1,!1),n[i]=pi(i,!0,!1),e[i]=pi(i,!1,!0),r[i]=pi(i,!0,!0)}),[t,n,e,r]}const[ly,uy,hy,fy]=cy();function ha(t,e){const n=e?t?fy:hy:t?uy:ly;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const dy={get:ha(!1,!1)},py={get:ha(!1,!0)},gy={get:ha(!0,!1)},Au=new WeakMap,Cu=new WeakMap,Ru=new WeakMap,my=new WeakMap;function yy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vy(t){return t.__v_skip||!Object.isExtensible(t)?0:yy(jm(t))}function Xn(t){return t&&t.__v_isReadonly?t:fa(t,!1,Eu,dy,Au)}function wy(t){return fa(t,!1,ay,py,Cu)}function Nu(t){return fa(t,!0,oy,gy,Ru)}function fa(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=vy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jn(t){return ku(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function ku(t){return!!(t&&t.__v_isReadonly)}function Ou(t){return Jn(t)||ku(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Du(t){return oi(t,"__v_skip",!0),t}const qr=t=>be(t)?Xn(t):t,da=t=>be(t)?Nu(t):t;function Pu(t){mu()&&(t=re(t),t.dep||(t.dep=na()),yu(t.dep))}function Lu(t,e){t=re(t),t.dep&&ca(t.dep)}function Ze(t){return Boolean(t&&t.__v_isRef===!0)}function _y(t){return Mu(t,!1)}function Ey(t){return Mu(t,!0)}function Mu(t,e){return Ze(t)?t:new Iy(t,e)}class Iy{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:qr(e)}get value(){return Pu(this),this._value}set value(e){e=this._shallow?e:re(e),jr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:qr(e),Lu(this))}}function Kr(t){return Ze(t)?t.value:t}const Ty={get:(t,e,n)=>Kr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xu(t){return Jn(t)?t:new Proxy(t,Ty)}class by{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new oa(e,()=>{this._dirty||(this._dirty=!0,Lu(this))}),this.__v_isReadonly=r}get value(){const e=re(this);return Pu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function At(t,e){let n,r;const s=X(t);return s?(n=t,r=vt):(n=t.get,r=t.set),new by(n,r,s||!r)}Promise.resolve();function Sy(t,e,...n){const r=t.vnode.props||ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ue;f?s=n.map(g=>g.trim()):h&&(s=n.map(ai))}let a,c=r[a=ta(e)]||r[a=ta(St(e))];!c&&i&&(c=r[a=ta(dn(e))]),c&&mt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(l,t,6,s)}}function Uu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Uu(l,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):je(o,i),r.set(t,o),o)}function pa(t,e){return!t||!ei(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,dn(e))||ne(t,e))}let ot=null,gi=null;function mi(t){const e=ot;return ot=t,gi=t&&t.type.__scopeId||null,e}function gA(t){gi=t}function mA(){gi=null}const yA=t=>Fu;function Fu(t,e=ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&dh(-1);const i=mi(e),o=t(...s);return mi(i),r._d&&dh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ga(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:R}=t;let T,N;const F=mi(t);try{if(n.shapeFlag&4){const Q=s||r;T=Rt(u.call(Q,Q,h,i,g,f,y)),N=c}else{const Q=e;T=Rt(Q.length>1?Q(i,{attrs:c,slots:a,emit:l}):Q(i,null)),N=e.props?c:Ay(c)}}catch(Q){zr.length=0,Ri(Q,t,1),T=Qe(wt)}let z=T;if(N&&R!==!1){const Q=Object.keys(N),{shapeFlag:fe}=z;Q.length&&fe&(1|6)&&(o&&Q.some(Jo)&&(N=Cy(N,o)),z=Zn(z,N))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),T=z,mi(F),T}const Ay=t=>{let e;for(const n in t)(n==="class"||n==="style"||ei(n))&&((e||(e={}))[n]=t[n]);return e},Cy=(t,e)=>{const n={};for(const r in t)(!Jo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ry(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Vu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!pa(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Vu(r,o,l):!0:!!o;return!1}function Vu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pa(n,i))return!0}return!1}function Ny({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ky=t=>t.__isSuspense;function Oy(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Cv(t)}function yi(t,e){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=ke||ot;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r.proxy):e}}function Dy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ku(()=>{t.isMounted=!0}),zu(()=>{t.isUnmounting=!0}),t}const pt=[Function,Array],Py={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},setup(t,{slots:e}){const n=mv(),r=Dy();let s;return()=>{const i=e.default&&Bu(e.default(),!0);if(!i||!i.length)return;const o=re(t),{mode:a}=o,c=i[0];if(r.isLeaving)return ya(c);const l=ju(c);if(!l)return ya(c);const u=ma(l,o,r,n);va(l,u);const h=n.subTree,f=h&&ju(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const R=y();s===void 0?s=R:R!==s&&(s=R,g=!0)}if(f&&f.type!==wt&&(!En(l,f)||g)){const R=ma(f,o,r,n);if(va(f,R),a==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update()},ya(c);a==="in-out"&&l.type!==wt&&(R.delayLeave=(T,N,F)=>{const z=$u(r,f);z[String(f.key)]=f,T._leaveCb=()=>{N(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return c}}},Ly=Py;function $u(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ma(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:R,onAppear:T,onAfterAppear:N,onAppearCancelled:F}=e,z=String(t.key),Q=$u(n,t),fe=(Z,Te)=>{Z&&mt(Z,r,9,Te)},we={mode:i,persisted:o,beforeEnter(Z){let Te=a;if(!n.isMounted)if(s)Te=R||a;else return;Z._leaveCb&&Z._leaveCb(!0);const de=Q[z];de&&En(t,de)&&de.el._leaveCb&&de.el._leaveCb(),fe(Te,[Z])},enter(Z){let Te=c,de=l,Ve=u;if(!n.isMounted)if(s)Te=T||c,de=N||l,Ve=F||u;else return;let $e=!1;const ze=Z._enterCb=Bt=>{$e||($e=!0,Bt?fe(Ve,[Z]):fe(de,[Z]),we.delayedLeave&&we.delayedLeave(),Z._enterCb=void 0)};Te?(Te(Z,ze),Te.length<=1&&ze()):ze()},leave(Z,Te){const de=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return Te();fe(h,[Z]);let Ve=!1;const $e=Z._leaveCb=ze=>{Ve||(Ve=!0,Te(),ze?fe(y,[Z]):fe(g,[Z]),Z._leaveCb=void 0,Q[de]===t&&delete Q[de])};Q[de]=t,f?(f(Z,$e),f.length<=1&&$e()):$e()},clone(Z){return ma(Z,e,n,r)}};return we}function ya(t){if(vi(t))return t=Zn(t),t.children=null,t}function ju(t){return vi(t)?t.children?t.children[0]:void 0:t}function va(t,e){t.shapeFlag&6&&t.component?va(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bu(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===gt?(i.patchFlag&128&&r++,n=n.concat(Bu(i.children,e))):(e||i.type!==wt)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Hu(t){return X(t)?{setup:t,name:t.name}:t}const wa=t=>!!t.type.__asyncLoader,vi=t=>t.type.__isKeepAlive;function My(t,e){qu(t,"a",e)}function xy(t,e){qu(t,"da",e)}function qu(t,e,n=ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(wi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)vi(s.parent.vnode)&&Uy(r,e,n,s),s=s.parent}}function Uy(t,e,n,r){const s=wi(e,t,r,!0);Wu(()=>{au(r[e],s)},n)}function wi(t,e,n=ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Yn(),er(n);const a=mt(e,n,t,o);return In(),yn(),a});return r?s.unshift(i):s.push(i),i}}const Lt=t=>(e,n=ke)=>(!Ci||t==="sp")&&wi(t,e,n),Fy=Lt("bm"),Ku=Lt("m"),Vy=Lt("bu"),$y=Lt("u"),zu=Lt("bum"),Wu=Lt("um"),jy=Lt("sp"),By=Lt("rtg"),Hy=Lt("rtc");function qy(t,e=ke){wi("ec",t,e)}let _a=!0;function Ky(t){const e=Yu(t),n=t.proxy,r=t.ctx;_a=!1,e.beforeCreate&&Gu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:R,deactivated:T,beforeDestroy:N,beforeUnmount:F,destroyed:z,unmounted:Q,render:fe,renderTracked:we,renderTriggered:Z,errorCaptured:Te,serverPrefetch:de,expose:Ve,inheritAttrs:$e,components:ze,directives:Bt,filters:Bn}=e;if(l&&zy(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ae=o[pe];X(ae)&&(r[pe]=ae.bind(n))}if(s){const pe=s.call(n,n);be(pe)&&(t.data=Xn(pe))}if(_a=!0,i)for(const pe in i){const ae=i[pe],ft=X(ae)?ae.bind(n,n):X(ae.get)?ae.get.bind(n,n):vt,qn=!X(ae)&&X(ae.set)?ae.set.bind(n):vt,Dt=At({get:ft,set:qn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Tt=>Dt.value=Tt})}if(a)for(const pe in a)Qu(a[pe],r,n,pe);if(c){const pe=X(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ae=>{yi(ae,pe[ae])})}u&&Gu(u,t,"c");function Re(pe,ae){j(ae)?ae.forEach(ft=>pe(ft.bind(n))):ae&&pe(ae.bind(n))}if(Re(Fy,h),Re(Ku,f),Re(Vy,g),Re($y,y),Re(My,R),Re(xy,T),Re(qy,Te),Re(Hy,we),Re(By,Z),Re(zu,F),Re(Wu,Q),Re(jy,de),j(Ve))if(Ve.length){const pe=t.exposed||(t.exposed={});Ve.forEach(ae=>{Object.defineProperty(pe,ae,{get:()=>n[ae],set:ft=>n[ae]=ft})})}else t.exposed||(t.exposed={});fe&&t.render===vt&&(t.render=fe),$e!=null&&(t.inheritAttrs=$e),ze&&(t.components=ze),Bt&&(t.directives=Bt)}function zy(t,e,n=vt,r=!1){j(t)&&(t=Ea(t));for(const s in t){const i=t[s];let o;be(i)?"default"in i?o=Kt(i.from||s,i.default,!0):o=Kt(i.from||s):o=Kt(i),Ze(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Gu(t,e,n){mt(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qu(t,e,n,r){const s=r.includes(".")?Oh(n,r):()=>n[r];if(Ne(t)){const i=e[t];X(i)&&rr(s,i)}else if(X(t))rr(s,t.bind(n));else if(be(t))if(j(t))t.forEach(i=>Qu(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&rr(s,i,t)}}function Yu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>_i(c,l,o,!0)),_i(c,e,o)),i.set(e,c),c}function _i(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_i(t,i,n,!0),s&&s.forEach(o=>_i(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wy={data:Xu,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:vn,directives:vn,watch:Qy,provide:Xu,inject:Gy};function Xu(t,e){return e?t?function(){return je(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Gy(t,e){return vn(Ea(t),Ea(e))}function Ea(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?je(je(Object.create(null),t),e):e}function Qy(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function Yy(t,e,n,r=!1){const s={},i={};oi(i,bi,1),t.propsDefaults=Object.create(null),Ju(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(ne(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=St(f);s[y]=Ia(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Ju(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=dn(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ia(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ne(e,h))&&(delete i[h],l=!0)}l&&Pt(t,"set","$attrs")}function Ju(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ni(c))continue;const l=e[c];let u;s&&ne(s,u=St(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:pa(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ia(s,c,h,l[h],t,!ne(l,h))}}return o}function Ia(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(er(s),r=l[n]=c.call(null,e),In())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dn(n))&&(r=!0))}return r}function Zu(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=Zu(h,e,!0);je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,zn),zn;if(j(i))for(let u=0;u<i.length;u++){const h=St(i[u]);eh(h)&&(o[h]=ue)}else if(i)for(const u in i){const h=St(u);if(eh(h)){const f=i[u],g=o[h]=j(f)||X(f)?{type:f}:f;if(g){const y=rh(Boolean,g.type),R=rh(String,g.type);g[0]=y>-1,g[1]=R<0||y<R,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function eh(t){return t[0]!=="$"}function th(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function nh(t,e){return th(t)===th(e)}function rh(t,e){return j(e)?e.findIndex(n=>nh(n,t)):X(e)&&nh(e,t)?0:-1}const sh=t=>t[0]==="_"||t==="$stable",Ta=t=>j(t)?t.map(Rt):[Rt(t)],Jy=(t,e,n)=>{const r=Fu((...s)=>Ta(e(...s)),n);return r._c=!1,r},ih=(t,e,n)=>{const r=t._ctx;for(const s in t){if(sh(s))continue;const i=t[s];if(X(i))e[s]=Jy(s,i,r);else if(i!=null){const o=Ta(i);e[s]=()=>o}}},oh=(t,e)=>{const n=Ta(e);t.slots.default=()=>n},Zy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),oi(e,"_",n)):ih(e,t.slots={})}else t.slots={},e&&oh(t,e);oi(t.slots,bi,1)},ev=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ih(e,s)),o=e}else e&&(oh(t,e),o={default:1});if(i)for(const a in s)!sh(a)&&!(a in o)&&delete s[a]};function vA(t,e){const n=ot;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ue]=e[i];X(o)&&(o={mounted:o,updated:o}),o.deep&&Tn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Yn(),mt(c,n,8,[t.el,a,t,e]),yn())}}function ah(){return{app:null,config:{isNativeTag:Fm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tv=0;function nv(t,e){return function(r,s=null){s!=null&&!be(s)&&(s=null);const i=ah(),o=new Set;let a=!1;const c=i.app={_uid:tv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Qe(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Na(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Ge=Oy;function rv(t){return sv(t)}function sv(t,e){const n=qm();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=vt,cloneNode:y,insertStaticContent:R}=t,T=(d,p,m,_=null,w=null,A=null,k=!1,b=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!En(d,p)&&(_=M(d),dt(d,w,A,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:x,shapeFlag:P}=p;switch(E){case Aa:N(d,p,m,_);break;case wt:F(d,p,m,_);break;case Ei:d==null&&z(p,m,_,k);break;case gt:Bt(d,p,m,_,w,A,k,b,S);break;default:P&1?we(d,p,m,_,w,A,k,b,S):P&6?Bn(d,p,m,_,w,A,k,b,S):(P&64||P&128)&&E.process(d,p,m,_,w,A,k,b,S,ge)}x!=null&&w&&ba(x,d&&d.ref,A,p||d,!p)},N=(d,p,m,_)=>{if(d==null)r(p.el=a(p.children),m,_);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},F=(d,p,m,_)=>{d==null?r(p.el=c(p.children||""),m,_):p.el=d.el},z=(d,p,m,_)=>{[d.el,d.anchor]=R(d.children,p,m,_)},Q=({el:d,anchor:p},m,_)=>{let w;for(;d&&d!==p;)w=f(d),r(d,m,_),d=w;r(p,m,_)},fe=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},we=(d,p,m,_,w,A,k,b,S)=>{k=k||p.type==="svg",d==null?Z(p,m,_,w,A,k,b,S):Ve(d,p,w,A,k,b,S)},Z=(d,p,m,_,w,A,k,b)=>{let S,E;const{type:x,props:P,shapeFlag:U,transition:K,patchFlag:te,dirs:_e}=d;if(d.el&&y!==void 0&&te===-1)S=d.el=y(d.el);else{if(S=d.el=o(d.type,A,P&&P.is,P),U&8?u(S,d.children):U&16&&de(d.children,S,null,_,w,A&&x!=="foreignObject",k,b),_e&&wn(d,null,_,"created"),P){for(const ye in P)ye!=="value"&&!ni(ye)&&i(S,ye,null,P[ye],A,d.children,_,w,C);"value"in P&&i(S,"value",null,P.value),(E=P.onVnodeBeforeMount)&&Ct(E,_,d)}Te(S,d,d.scopeId,k,_)}_e&&wn(d,null,_,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;le&&K.beforeEnter(S),r(S,p,m),((E=P&&P.onVnodeMounted)||le||_e)&&Ge(()=>{E&&Ct(E,_,d),le&&K.enter(S),_e&&wn(d,null,_,"mounted")},w)},Te=(d,p,m,_,w)=>{if(m&&g(d,m),_)for(let A=0;A<_.length;A++)g(d,_[A]);if(w){let A=w.subTree;if(p===A){const k=w.vnode;Te(d,k,k.scopeId,k.slotScopeIds,w.parent)}}},de=(d,p,m,_,w,A,k,b,S=0)=>{for(let E=S;E<d.length;E++){const x=d[E]=b?zt(d[E]):Rt(d[E]);T(null,x,p,m,_,w,A,k,b)}},Ve=(d,p,m,_,w,A,k)=>{const b=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:x}=p;S|=d.patchFlag&16;const P=d.props||ue,U=p.props||ue;let K;(K=U.onVnodeBeforeUpdate)&&Ct(K,m,p,d),x&&wn(p,d,m,"beforeUpdate");const te=w&&p.type!=="foreignObject";if(E?$e(d.dynamicChildren,E,b,m,_,te,A):k||ft(d,p,b,null,m,_,te,A,!1),S>0){if(S&16)ze(b,p,P,U,m,_,w);else if(S&2&&P.class!==U.class&&i(b,"class",null,U.class,w),S&4&&i(b,"style",P.style,U.style,w),S&8){const _e=p.dynamicProps;for(let le=0;le<_e.length;le++){const ye=_e[le],yt=P[ye],Kn=U[ye];(Kn!==yt||ye==="value")&&i(b,ye,yt,Kn,w,d.children,m,_,C)}}S&1&&d.children!==p.children&&u(b,p.children)}else!k&&E==null&&ze(b,p,P,U,m,_,w);((K=U.onVnodeUpdated)||x)&&Ge(()=>{K&&Ct(K,m,p,d),x&&wn(p,d,m,"updated")},_)},$e=(d,p,m,_,w,A,k)=>{for(let b=0;b<p.length;b++){const S=d[b],E=p[b],x=S.el&&(S.type===gt||!En(S,E)||S.shapeFlag&(6|64))?h(S.el):m;T(S,E,x,null,_,w,A,k,!0)}},ze=(d,p,m,_,w,A,k)=>{if(m!==_){for(const b in _){if(ni(b))continue;const S=_[b],E=m[b];S!==E&&b!=="value"&&i(d,b,E,S,k,p.children,w,A,C)}if(m!==ue)for(const b in m)!ni(b)&&!(b in _)&&i(d,b,m[b],null,k,p.children,w,A,C);"value"in _&&i(d,"value",m.value,_.value)}},Bt=(d,p,m,_,w,A,k,b,S)=>{const E=p.el=d?d.el:a(""),x=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:K}=p;K&&(b=b?b.concat(K):K),d==null?(r(E,m,_),r(x,m,_),de(p.children,m,x,w,A,k,b,S)):P>0&&P&64&&U&&d.dynamicChildren?($e(d.dynamicChildren,U,m,w,A,k,b),(p.key!=null||w&&p===w.subTree)&&ch(d,p,!0)):ft(d,p,m,x,w,A,k,b,S)},Bn=(d,p,m,_,w,A,k,b,S)=>{p.slotScopeIds=b,d==null?p.shapeFlag&512?w.ctx.activate(p,m,_,k,S):Hn(p,m,_,w,A,k,S):Re(d,p,S)},Hn=(d,p,m,_,w,A,k)=>{const b=d.component=gv(d,_,w);if(vi(d)&&(b.ctx.renderer=ge),yv(b),b.asyncDep){if(w&&w.registerDep(b,pe),!d.el){const S=b.subTree=Qe(wt);F(null,S,p,m)}return}pe(b,d,p,m,w,A,k)},Re=(d,p,m)=>{const _=p.component=d.component;if(Ry(d,p,m))if(_.asyncDep&&!_.asyncResolved){ae(_,p,m);return}else _.next=p,Sv(_.update),_.update();else p.component=d.component,p.el=d.el,_.vnode=p},pe=(d,p,m,_,w,A,k)=>{const b=()=>{if(d.isMounted){let{next:x,bu:P,u:U,parent:K,vnode:te}=d,_e=x,le;S.allowRecurse=!1,x?(x.el=te.el,ae(d,x,k)):x=te,P&&ii(P),(le=x.props&&x.props.onVnodeBeforeUpdate)&&Ct(le,K,x,te),S.allowRecurse=!0;const ye=ga(d),yt=d.subTree;d.subTree=ye,T(yt,ye,h(yt.el),M(yt),d,w,A),x.el=ye.el,_e===null&&Ny(d,ye.el),U&&Ge(U,w),(le=x.props&&x.props.onVnodeUpdated)&&Ge(()=>Ct(le,K,x,te),w)}else{let x;const{el:P,props:U}=p,{bm:K,m:te,parent:_e}=d,le=wa(p);if(S.allowRecurse=!1,K&&ii(K),!le&&(x=U&&U.onVnodeBeforeMount)&&Ct(x,_e,p),S.allowRecurse=!0,P&&Y){const ye=()=>{d.subTree=ga(d),Y(P,d.subTree,d,w,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=ga(d);T(null,ye,m,_,d,w,A),p.el=ye.el}if(te&&Ge(te,w),!le&&(x=U&&U.onVnodeMounted)){const ye=p;Ge(()=>Ct(x,_e,ye),w)}p.shapeFlag&256&&d.a&&Ge(d.a,w),d.isMounted=!0,p=m=_=null}},S=new oa(b,()=>Sh(d.update),d.scope),E=d.update=S.run.bind(S);E.id=d.uid,S.allowRecurse=E.allowRecurse=!0,E()},ae=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,Xy(d,p.props,_,m),ev(d,p.children,m),Yn(),Pa(void 0,d.update),yn()},ft=(d,p,m,_,w,A,k,b,S=!1)=>{const E=d&&d.children,x=d?d.shapeFlag:0,P=p.children,{patchFlag:U,shapeFlag:K}=p;if(U>0){if(U&128){Dt(E,P,m,_,w,A,k,b,S);return}else if(U&256){qn(E,P,m,_,w,A,k,b,S);return}}K&8?(x&16&&C(E,w,A),P!==E&&u(m,P)):x&16?K&16?Dt(E,P,m,_,w,A,k,b,S):C(E,w,A,!0):(x&8&&u(m,""),K&16&&de(P,m,_,w,A,k,b,S))},qn=(d,p,m,_,w,A,k,b,S)=>{d=d||zn,p=p||zn;const E=d.length,x=p.length,P=Math.min(E,x);let U;for(U=0;U<P;U++){const K=p[U]=S?zt(p[U]):Rt(p[U]);T(d[U],K,m,null,w,A,k,b,S)}E>x?C(d,w,A,!0,!1,P):de(p,m,_,w,A,k,b,S,P)},Dt=(d,p,m,_,w,A,k,b,S)=>{let E=0;const x=p.length;let P=d.length-1,U=x-1;for(;E<=P&&E<=U;){const K=d[E],te=p[E]=S?zt(p[E]):Rt(p[E]);if(En(K,te))T(K,te,m,null,w,A,k,b,S);else break;E++}for(;E<=P&&E<=U;){const K=d[P],te=p[U]=S?zt(p[U]):Rt(p[U]);if(En(K,te))T(K,te,m,null,w,A,k,b,S);else break;P--,U--}if(E>P){if(E<=U){const K=U+1,te=K<x?p[K].el:_;for(;E<=U;)T(null,p[E]=S?zt(p[E]):Rt(p[E]),m,te,w,A,k,b,S),E++}}else if(E>U)for(;E<=P;)dt(d[E],w,A,!0),E++;else{const K=E,te=E,_e=new Map;for(E=te;E<=U;E++){const st=p[E]=S?zt(p[E]):Rt(p[E]);st.key!=null&&_e.set(st.key,E)}let le,ye=0;const yt=U-te+1;let Kn=!1,Zl=0;const Vr=new Array(yt);for(E=0;E<yt;E++)Vr[E]=0;for(E=K;E<=P;E++){const st=d[E];if(ye>=yt){dt(st,w,A,!0);continue}let bt;if(st.key!=null)bt=_e.get(st.key);else for(le=te;le<=U;le++)if(Vr[le-te]===0&&En(st,p[le])){bt=le;break}bt===void 0?dt(st,w,A,!0):(Vr[bt-te]=E+1,bt>=Zl?Zl=bt:Kn=!0,T(st,p[bt],m,null,w,A,k,b,S),ye++)}const eu=Kn?iv(Vr):zn;for(le=eu.length-1,E=yt-1;E>=0;E--){const st=te+E,bt=p[st],tu=st+1<x?p[st+1].el:_;Vr[E]===0?T(null,bt,m,tu,w,A,k,b,S):Kn&&(le<0||E!==eu[le]?Tt(bt,m,tu,2):le--)}}},Tt=(d,p,m,_,w=null)=>{const{el:A,type:k,transition:b,children:S,shapeFlag:E}=d;if(E&6){Tt(d.component.subTree,p,m,_);return}if(E&128){d.suspense.move(p,m,_);return}if(E&64){k.move(d,p,m,ge);return}if(k===gt){r(A,p,m);for(let P=0;P<S.length;P++)Tt(S[P],p,m,_);r(d.anchor,p,m);return}if(k===Ei){Q(d,p,m);return}if(_!==2&&E&1&&b)if(_===0)b.beforeEnter(A),r(A,p,m),Ge(()=>b.enter(A),w);else{const{leave:P,delayLeave:U,afterLeave:K}=b,te=()=>r(A,p,m),_e=()=>{P(A,()=>{te(),K&&K()})};U?U(A,te,_e):_e()}else r(A,p,m)},dt=(d,p,m,_=!1,w=!1)=>{const{type:A,props:k,ref:b,children:S,dynamicChildren:E,shapeFlag:x,patchFlag:P,dirs:U}=d;if(b!=null&&ba(b,null,m,d,!0),x&256){p.ctx.deactivate(d);return}const K=x&1&&U,te=!wa(d);let _e;if(te&&(_e=k&&k.onVnodeBeforeUnmount)&&Ct(_e,p,d),x&6)L(d.component,m,_);else{if(x&128){d.suspense.unmount(m,_);return}K&&wn(d,null,p,"beforeUnmount"),x&64?d.type.remove(d,p,m,w,ge,_):E&&(A!==gt||P>0&&P&64)?C(E,p,m,!1,!0):(A===gt&&P&(128|256)||!w&&x&16)&&C(S,p,m),_&&Wo(d)}(te&&(_e=k&&k.onVnodeUnmounted)||K)&&Ge(()=>{_e&&Ct(_e,p,d),K&&wn(d,null,p,"unmounted")},m)},Wo=d=>{const{type:p,el:m,anchor:_,transition:w}=d;if(p===gt){v(m,_);return}if(p===Ei){fe(d);return}const A=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:b}=w,S=()=>k(m,A);b?b(d.el,A,S):S()}else A()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},L=(d,p,m)=>{const{bum:_,scope:w,update:A,subTree:k,um:b}=d;_&&ii(_),w.stop(),A&&(A.active=!1,dt(k,d,p,m)),b&&Ge(b,p),Ge(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(d,p,m,_=!1,w=!1,A=0)=>{for(let k=A;k<d.length;k++)dt(d[k],p,m,_,w)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ce=(d,p,m)=>{d==null?p._vnode&&dt(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),Rh(),p._vnode=d},ge={p:T,um:dt,m:Tt,r:Wo,mt:Hn,mc:de,pc:ft,pbc:$e,n:M,o:t};let J,Y;return e&&([J,Y]=e(ge)),{render:ce,hydrate:J,createApp:nv(ce,J)}}function ba(t,e,n,r,s=!1){if(j(t)){t.forEach((f,g)=>ba(f,e&&(j(e)?e[g]:e),n,r,s));return}if(wa(r)&&!s)return;const i=r.shapeFlag&4?Na(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):Ze(l)&&(l.value=null)),Ne(c)){const f=()=>{u[c]=o,ne(h,c)&&(h[c]=o)};o?(f.id=-1,Ge(f,n)):f()}else if(Ze(c)){const f=()=>{c.value=o};o?(f.id=-1,Ge(f,n)):f()}else X(c)&&Wt(c,a,12,[o,u])}function Ct(t,e,n,r=null){mt(t,e,7,[n,r])}function ch(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=zt(s[i]),a.el=o.el),n||ch(o,a))}}function iv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ov=t=>t.__isTeleport,Sa="components";function wA(t,e){return uh(Sa,t,!0,e)||t}const lh=Symbol();function _A(t){return Ne(t)?uh(Sa,t,!1)||t:t||lh}function uh(t,e,n=!0,r=!1){const s=ot||ke;if(s){const i=s.type;if(t===Sa){const a=Ev(i);if(a&&(a===e||a===St(e)||a===si(St(e))))return i}const o=hh(s[t]||i[t],e)||hh(s.appContext[t],e);return!o&&r?i:o}}function hh(t,e){return t&&(t[e]||t[St(e)]||t[si(St(e))])}const gt=Symbol(void 0),Aa=Symbol(void 0),wt=Symbol(void 0),Ei=Symbol(void 0),zr=[];let _n=null;function fh(t=!1){zr.push(_n=t?null:[])}function av(){zr.pop(),_n=zr[zr.length-1]||null}let Ii=1;function dh(t){Ii+=t}function ph(t){return t.dynamicChildren=Ii>0?_n||zn:null,av(),Ii>0&&_n&&_n.push(t),t}function EA(t,e,n,r,s,i){return ph(yh(t,e,n,r,s,i,!0))}function gh(t,e,n,r,s){return ph(Qe(t,e,n,r,s,!0))}function Ti(t){return t?t.__v_isVNode===!0:!1}function En(t,e){return t.type===e.type&&t.key===e.key}const bi="__vInternal",mh=({key:t})=>t!=null?t:null,Si=({ref:t})=>t!=null?Ne(t)||Ze(t)||X(t)?{i:ot,r:t}:t:null;function yh(t,e=null,n=null,r=0,s=null,i=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mh(e),ref:e&&Si(e),scopeId:gi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ca(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Ii>0&&!o&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const Qe=cv;function cv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lh)&&(t=wt),Ti(t)){const a=Zn(t,e,!0);return n&&Ca(a,n),a}if(Iv(t)&&(t=t.__vccOpts),e){e=lv(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=Yo(a)),be(c)&&(Ou(c)&&!j(c)&&(c=je({},c)),e.style=Qo(c))}const o=Ne(t)?1:ky(t)?128:ov(t)?64:be(t)?4:X(t)?2:0;return yh(t,e,n,r,s,o,i,!0)}function lv(t){return t?Ou(t)||bi in t?je({},t):t:null}function Zn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?hv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mh(a),ref:e&&e.ref?n&&s?j(s)?s.concat(Si(e)):[s,Si(e)]:Si(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zn(t.ssContent),ssFallback:t.ssFallback&&Zn(t.ssFallback),el:t.el,anchor:t.anchor}}function uv(t=" ",e=0){return Qe(Aa,null,t,e)}function IA(t,e){const n=Qe(Ei,null,t);return n.staticCount=e,n}function TA(t="",e=!1){return e?(fh(),gh(wt,null,t)):Qe(wt,null,t)}function Rt(t){return t==null||typeof t=="boolean"?Qe(wt):j(t)?Qe(gt,null,t.slice()):typeof t=="object"?zt(t):Qe(Aa,null,String(t))}function zt(t){return t.el===null||t.memo?t:Zn(t)}function Ca(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),Ca(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(bi in e)?e._ctx=ot:s===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),r&64?(n=16,e=[uv(e)]):n=8);t.children=e,t.shapeFlag|=n}function hv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yo([e.class,r.class]));else if(s==="style")e.style=Qo([e.style,r.style]);else if(ei(s)){const i=e[s],o=r[s];i!==o&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function bA(t,e,n,r){let s;const i=n&&n[r];if(j(t)||Ne(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function SA(t,e,n={},r,s){if(ot.isCE)return Qe("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),fh();const o=i&&vh(i(n)),a=gh(gt,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function vh(t){return t.some(e=>Ti(e)?!(e.type===wt||e.type===gt&&!vh(e.children)):!0)?t:null}const Ra=t=>t?wh(t)?Na(t)||t.proxy:Ra(t.parent):null,Ai=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ra(t.parent),$root:t=>Ra(t.root),$emit:t=>t.emit,$options:t=>Yu(t),$forceUpdate:t=>()=>Sh(t.update),$nextTick:t=>bh.bind(t.proxy),$watch:t=>Rv.bind(t)}),fv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==ue&&ne(r,e))return o[e]=0,r[e];if(s!==ue&&ne(s,e))return o[e]=1,s[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=2,i[e];if(n!==ue&&ne(n,e))return o[e]=3,n[e];_a&&(o[e]=4)}}const u=Ai[e];let h,f;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&ne(n,e))return o[e]=3,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==ue&&ne(s,e))s[e]=n;else if(r!==ue&&ne(r,e))r[e]=n;else if(ne(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==ue&&ne(t,o)||e!==ue&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Ai,o)||ne(s.config.globalProperties,o)}},dv=ah();let pv=0;function gv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dv,i={uid:pv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new Km(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zu(r,s),emitsOptions:Uu(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Sy.bind(null,i),t.ce&&t.ce(i),i}let ke=null;const mv=()=>ke||ot,er=t=>{ke=t,t.scope.on()},In=()=>{ke&&ke.scope.off(),ke=null};function wh(t){return t.vnode.shapeFlag&4}let Ci=!1;function yv(t,e=!1){Ci=e;const{props:n,children:r}=t.vnode,s=wh(t);Yy(t,n,s,e),Zy(t,r);const i=s?vv(t,e):void 0;return Ci=!1,i}function vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Du(new Proxy(t.ctx,fv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?_v(t):null;er(t),Yn();const i=Wt(r,t,0,[t.props,s]);if(yn(),In(),lu(i)){if(i.then(In,In),e)return i.then(o=>{_h(t,o,e)}).catch(o=>{Ri(o,t,0)});t.asyncDep=i}else _h(t,i,e)}else Ih(t,e)}function _h(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=xu(e)),Ih(t,n)}let Eh;function Ih(t,e,n){const r=t.type;if(!t.render){if(!e&&Eh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=je(je({isCustomElement:i,delimiters:a},o),c);r.render=Eh(s,l)}}t.render=r.render||vt}er(t),Yn(),Ky(t),yn(),In()}function wv(t){return new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}})}function _v(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=wv(t))},slots:t.slots,emit:t.emit,expose:e}}function Na(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xu(Du(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)}}))}function Ev(t){return X(t)&&t.displayName||t.name}function Iv(t){return X(t)&&"__vccOpts"in t}function Wt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ri(i,e,n)}return s}function mt(t,e,n,r){if(X(t)){const i=Wt(t,e,n,r);return i&&lu(i)&&i.catch(o=>{Ri(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(mt(t[i],e,n,r));return s}function Ri(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Wt(c,null,10,[t,o,a]);return}}Tv(t,n,s,r)}function Tv(t,e,n,r=!0){console.error(t)}let Ni=!1,ka=!1;const at=[];let Mt=0;const Wr=[];let Gr=null,tr=0;const Qr=[];let Gt=null,nr=0;const Th=Promise.resolve();let Oa=null,Da=null;function bh(t){const e=Oa||Th;return t?e.then(this?t.bind(this):t):e}function bv(t){let e=Mt+1,n=at.length;for(;e<n;){const r=e+n>>>1;Yr(at[r])<t?e=r+1:n=r}return e}function Sh(t){(!at.length||!at.includes(t,Ni&&t.allowRecurse?Mt+1:Mt))&&t!==Da&&(t.id==null?at.push(t):at.splice(bv(t.id),0,t),Ah())}function Ah(){!Ni&&!ka&&(ka=!0,Oa=Th.then(Nh))}function Sv(t){const e=at.indexOf(t);e>Mt&&at.splice(e,1)}function Ch(t,e,n,r){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ah()}function Av(t){Ch(t,Gr,Wr,tr)}function Cv(t){Ch(t,Gt,Qr,nr)}function Pa(t,e=null){if(Wr.length){for(Da=e,Gr=[...new Set(Wr)],Wr.length=0,tr=0;tr<Gr.length;tr++)Gr[tr]();Gr=null,tr=0,Da=null,Pa(t,e)}}function Rh(t){if(Qr.length){const e=[...new Set(Qr)];if(Qr.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,r)=>Yr(n)-Yr(r)),nr=0;nr<Gt.length;nr++)Gt[nr]();Gt=null,nr=0}}const Yr=t=>t.id==null?1/0:t.id;function Nh(t){ka=!1,Ni=!0,Pa(t),at.sort((n,r)=>Yr(n)-Yr(r));const e=vt;try{for(Mt=0;Mt<at.length;Mt++){const n=at[Mt];n&&n.active!==!1&&Wt(n,null,14)}}finally{Mt=0,at.length=0,Rh(),Ni=!1,Oa=null,(at.length||Wr.length||Qr.length)&&Nh(t)}}function AA(t,e){return La(t,null,e)}const kh={};function rr(t,e,n){return La(t,e,n)}function La(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ue){const a=ke;let c,l=!1,u=!1;if(Ze(t)?(c=()=>t.value,l=!!t._shallow):Jn(t)?(c=()=>t,r=!0):j(t)?(u=!0,l=t.some(Jn),c=()=>t.map(N=>{if(Ze(N))return N.value;if(Jn(N))return Tn(N);if(X(N))return Wt(N,a,2)})):X(t)?e?c=()=>Wt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),mt(t,a,3,[f])}:c=vt,e&&r){const N=c;c=()=>Tn(N())}let h,f=N=>{h=T.onStop=()=>{Wt(N,a,4)}};if(Ci)return f=vt,e?n&&mt(e,a,3,[c(),u?[]:void 0,f]):c(),vt;let g=u?[]:kh;const y=()=>{if(!!T.active)if(e){const N=T.run();(r||l||(u?N.some((F,z)=>jr(F,g[z])):jr(N,g)))&&(h&&h(),mt(e,a,3,[N,g===kh?void 0:g,f]),g=N)}else T.run()};y.allowRecurse=!!e;let R;s==="sync"?R=y:s==="post"?R=()=>Ge(y,a&&a.suspense):R=()=>{!a||a.isMounted?Av(y):y()};const T=new oa(c,R);return e?n?y():g=T.run():s==="post"?Ge(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&au(a.scope.effects,T)}}function Rv(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?Oh(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=ke;er(this);const a=La(s,i.bind(r),n);return o?er(o):In(),a}function Oh(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Tn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))Tn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Tn(t[n],e);else if(Gn(t)||Wn(t))t.forEach(n=>{Tn(n,e)});else if(hu(t))for(const n in t)Tn(t[n],e);return t}function Dh(t,e,n){const r=arguments.length;return r===2?be(e)&&!j(e)?Ti(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ti(n)&&(n=[n]),Qe(t,e,n))}const Nv="3.2.20",kv="http://www.w3.org/2000/svg",sr=typeof document!="undefined"?document:null,Ph=new Map,Ov={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(kv,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=Ph.get(t);if(!i){const o=sr.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}Ph.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Dv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Pv(t,e,n){const r=t.style,s=r.display;if(!n)t.removeAttribute("style");else if(Ne(n))e!==n&&(r.cssText=n);else{for(const i in n)Ma(r,i,n[i]);if(e&&!Ne(e))for(const i in e)n[i]==null&&Ma(r,i,"")}"_vod"in t&&(r.display=s)}const Lh=/\s*!important$/;function Ma(t,e,n){if(j(n))n.forEach(r=>Ma(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Lv(t,e);Lh.test(n)?t.setProperty(dn(r),n.replace(Lh,""),"important"):t[r]=n}}const Mh=["Webkit","Moz","ms"],xa={};function Lv(t,e){const n=xa[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return xa[e]=r;r=si(r);for(let s=0;s<Mh.length;s++){const i=Mh[s]+r;if(i in t)return xa[e]=i}return e}const xh="http://www.w3.org/1999/xlink";function Mv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xh,e.slice(6,e.length)):t.setAttributeNS(xh,e,n);else{const i=Pm(e);n==null||i&&!iu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=iu(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(c){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let ki=Date.now,Uh=!1;if(typeof window!="undefined"){ki()>document.createEvent("Event").timeStamp&&(ki=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Uh=!!(t&&Number(t[1])<=53)}let Ua=0;const Uv=Promise.resolve(),Fv=()=>{Ua=0},Vv=()=>Ua||(Uv.then(Fv),Ua=ki());function Qt(t,e,n,r){t.addEventListener(e,n,r)}function $v(t,e,n,r){t.removeEventListener(e,n,r)}function jv(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Bv(e);if(r){const l=i[e]=Hv(r,s);Qt(t,a,l,c)}else o&&($v(t,a,o,c),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function Bv(t){let e;if(Fh.test(t)){e={};let n;for(;n=t.match(Fh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[dn(t.slice(2)),e]}function Hv(t,e){const n=r=>{const s=r.timeStamp||ki();(Uh||s>=n.attached-1)&&mt(qv(r,n.value),e,5,[r])};return n.value=t,n.attached=Vv(),n}function qv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const Vh=/^on[a-z]/,Kv=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Dv(t,r,s):e==="style"?Pv(t,n,r):ei(e)?Jo(e)||jv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zv(t,e,r,s))?xv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mv(t,e,r,s))};function zv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Vh.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vh.test(e)&&Ne(n)?!1:e in t}const Wv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ly.props;const ir=t=>{const e=t.props["onUpdate:modelValue"];return j(e)?n=>ii(e,n):e};function Gv(t){t.target.composing=!0}function $h(t){const e=t.target;e.composing&&(e.composing=!1,Qv(e,"input"))}function Qv(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const CA={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ir(s);const i=r||s.props&&s.props.type==="number";Qt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=ai(a)),t._assign(a)}),n&&Qt(t,"change",()=>{t.value=t.value.trim()}),e||(Qt(t,"compositionstart",Gv),Qt(t,"compositionend",$h),Qt(t,"change",$h))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ir(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ai(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},RA={deep:!0,created(t,e,n){t._assign=ir(n),Qt(t,"change",()=>{const r=t._modelValue,s=Xr(t),i=t.checked,o=t._assign;if(j(r)){const a=Xo(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Gn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Hh(t,i))})},mounted:jh,beforeUpdate(t,e,n){t._assign=ir(n),jh(t,e,n)}};function jh(t,{value:e,oldValue:n},r){t._modelValue=e,j(e)?t.checked=Xo(e,r.props.value)>-1:Gn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=$r(e,Hh(t,!0)))}const NA={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Gn(e);Qt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ai(Xr(o)):Xr(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=ir(r)},mounted(t,{value:e}){Bh(t,e)},beforeUpdate(t,e,n){t._assign=ir(n)},updated(t,{value:e}){Bh(t,e)}};function Bh(t,e){const n=t.multiple;if(!(n&&!j(e)&&!Gn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Xr(i);if(n)j(e)?i.selected=Xo(e,o)>-1:i.selected=e.has(o);else if($r(Xr(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xr(t){return"_value"in t?t._value:t.value}function Hh(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Yv=["ctrl","shift","alt","meta"],Xv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yv.some(n=>t[`${n}Key`]&&!e.includes(n))},kA=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Xv[e[s]];if(i&&i(n,e))return}return t(n,...r)},Jv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},OA=(t,e)=>n=>{if(!("key"in n))return;const r=dn(n.key);if(e.some(s=>s===r||Jv[s]===r))return t(n)},DA={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Jr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Jr(t,!0),r.enter(t)):r.leave(t,()=>{Jr(t,!1)}):Jr(t,e))},beforeUnmount(t,{value:e}){Jr(t,e)}};function Jr(t,e){t.style.display=e?t._vod:"none"}const Zv=je({patchProp:Kv},Ov);let qh;function ew(){return qh||(qh=rv(Zv))}const PA=(...t)=>{const e=ew().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tw(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tw(t){return Ne(t)?document.querySelector(t):t}function nw(){return Kh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Kh(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const rw=typeof Proxy=="function",sw="devtools-plugin:setup",iw="plugin:settings:set";class ow{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=su({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch(a){}i=o}},n.on(iw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function aw(t,e){const n=Kh(),r=nw(),s=rw&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(sw,t,e);else{const i=s?new ow(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:i}),i&&e(i.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var cw="store";function or(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function lw(t){return t!==null&&typeof t=="object"}function uw(t){return t&&typeof t.then=="function"}function hw(t,e){return function(){return t(e)}}function zh(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Wh(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Oi(t,n,[],t._modules.root,!0),Fa(t,n,e)}function Fa(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};or(s,function(o,a){i[a]=hw(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Xn({data:e}),t.strict&&mw(t),r&&n&&t._withCommit(function(){r.data=null})}function Oi(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Va(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=fw(t,o,n);r.forEachMutation(function(u,h){var f=o+h;dw(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,g=u.handler||u;pw(t,f,g,l)}),r.forEachGetter(function(u,h){var f=o+h;gw(t,f,u,l)}),r.forEachChild(function(u,h){Oi(t,e,n.concat(h),u,s)})}function fw(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Di(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Di(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Gh(t,e)}},state:{get:function(){return Va(t.state,n)}}}),s}function Gh(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function dw(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function pw(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return uw(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function gw(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function mw(t){rr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Va(t,e){return e.reduce(function(n,r){return n[r]},t)}function Di(t,e,n){return lw(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var yw="vuex bindings",Qh="vuex:mutations",$a="vuex:actions",ar="vuex",vw=0;function ww(t,e){aw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[yw]},function(n){n.addTimelineLayer({id:Qh,label:"Vuex Mutations",color:Yh}),n.addTimelineLayer({id:$a,label:"Vuex Actions",color:Yh}),n.addInspector({id:ar,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===ar)if(r.filter){var s=[];ef(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Zh(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===ar){var s=r.nodeId;Gh(e,s),r.state=Iw(bw(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===ar){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(ar),n.sendInspectorState(ar),n.addTimelineEvent({layerId:Qh,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=vw++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:$a,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:$a,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Yh=8702998,_w=6710886,Ew=16777215,Xh={label:"namespaced",textColor:Ew,backgroundColor:_w};function Jh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Zh(t,e){return{id:e||"root",label:Jh(e),tags:t.namespaced?[Xh]:[],children:Object.keys(t._children).map(function(n){return Zh(t._children[n],e+n+"/")})}}function ef(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Xh]:[]}),Object.keys(e._children).forEach(function(s){ef(t,e._children[s],n,r+s+"/")})}function Iw(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=Tw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Jh(o):o,editable:!1,value:ja(function(){return i[o]})}})}return s}function Tw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=ja(function(){return t[n]})}else e[n]=ja(function(){return t[n]})}),e}function bw(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ja(t){try{return t()}catch(e){return e}}var _t=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},tf={namespaced:{configurable:!0}};tf.namespaced.get=function(){return!!this._rawModule.namespaced};_t.prototype.addChild=function(e,n){this._children[e]=n};_t.prototype.removeChild=function(e){delete this._children[e]};_t.prototype.getChild=function(e){return this._children[e]};_t.prototype.hasChild=function(e){return e in this._children};_t.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};_t.prototype.forEachChild=function(e){or(this._children,e)};_t.prototype.forEachGetter=function(e){this._rawModule.getters&&or(this._rawModule.getters,e)};_t.prototype.forEachAction=function(e){this._rawModule.actions&&or(this._rawModule.actions,e)};_t.prototype.forEachMutation=function(e){this._rawModule.mutations&&or(this._rawModule.mutations,e)};Object.defineProperties(_t.prototype,tf);var bn=function(e){this.register([],e,!1)};bn.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};bn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};bn.prototype.update=function(e){nf([],this.root,e)};bn.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new _t(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&or(n.modules,function(a,c){s.register(e.concat(c),a,r)})};bn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};bn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function nf(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;nf(t.concat(r),e.getChild(r),n.modules[r])}}function LA(t){return new et(t)}var et=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new bn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,y){return l.call(o,f,g,y)},this.strict=s;var u=this._modules.root.state;Oi(this,u,[],this._modules.root),Fa(this,u),r.forEach(function(h){return h(n)})},Ba={state:{configurable:!0}};et.prototype.install=function(e,n){e.provide(n||cw,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&ww(e,this)};Ba.state.get=function(){return this._state.data};Ba.state.set=function(t){};et.prototype.commit=function(e,n,r){var s=this,i=Di(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};et.prototype.dispatch=function(e,n){var r=this,s=Di(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch(u){}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch(g){}u(f)},function(f){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,f)})}catch(g){}h(f)})})}};et.prototype.subscribe=function(e,n){return zh(e,this._subscribers,n)};et.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return zh(r,this._actionSubscribers,n)};et.prototype.watch=function(e,n,r){var s=this;return rr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};et.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};et.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Oi(this,this.state,e,this._modules.get(e),r.preserveState),Fa(this,this.state)};et.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Va(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Wh(this)};et.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};et.prototype.hotUpdate=function(e){this._modules.update(e),Wh(this,!0)};et.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(et.prototype,Ba);/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const rf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",cr=t=>rf?Symbol(t):"_vr_"+t,Sw=cr("rvlm"),sf=cr("rvd"),Ha=cr("r"),of=cr("rl"),qa=cr("rvl"),lr=typeof window!="undefined";function Aw(t){return t.__esModule||rf&&t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ka(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Zr=()=>{},Cw=/\/$/,Rw=t=>t.replace(Cw,"");function za(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Dw(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Nw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function af(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ur(e.matched[r],n.matched[s])&&cf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ow(t[n],e[n]))return!1;return!0}function Ow(t,e){return Array.isArray(t)?lf(t,e):Array.isArray(e)?lf(e,t):t===e}function lf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Dw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var es;(function(t){t.pop="pop",t.push="push"})(es||(es={}));var ts;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ts||(ts={}));function Pw(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Rw(t)}const Lw=/^[^#]+#/;function Mw(t,e){return t.replace(Lw,"#")+e}function xw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uf(t,e){return(history.state?history.state.position-e:-1)+t}const Wa=new Map;function Fw(t,e){Wa.set(t,e)}function Vw(t){const e=Wa.get(t);return Wa.delete(t),e}let $w=()=>location.protocol+"//"+location.host;function hf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),af(c,"")}return af(n,t)+r+s}function jw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=hf(t,location),y=n.value,R=e.value;let T=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}T=R?f.position-R.position:0}else r(g);s.forEach(N=>{N(n.value,y,{delta:T,type:es.pop,direction:T?T>0?ts.forward:ts.back:ts.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:Pi()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ff(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pi():null}}function Bw(t){const{history:e,location:n}=window,r={value:hf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:$w()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=he({},e.state,ff(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=he({},s.value,e.state,{forward:c,scroll:Pi()});i(u.current,u,!0);const h=he({},ff(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function MA(t){t=Pw(t);const e=Bw(t),n=jw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:Mw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Hw(t){return typeof t=="string"||t&&typeof t=="object"}function df(t){return typeof t=="string"||typeof t=="symbol"}const Yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pf=cr("nf");var gf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gf||(gf={}));function hr(t,e){return he(new Error,{type:t,[pf]:!0},e)}function Sn(t,e){return t instanceof Error&&pf in t&&(e==null||!!(t.type&e))}const mf="[^/]+?",qw={sensitive:!1,strict:!1,start:!0,end:!0},Kw=/[.+*?^${}()[\]/\\]/g;function zw(t,e){const n=he({},qw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Kw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:R,optional:T,regexp:N}=f;i.push({name:y,repeatable:R,optional:T});const F=N||mf;if(F!==mf){g+=10;try{new RegExp(`(${F})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${y}" (${F}): `+Q.message)}}let z=R?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(z=T&&l.length<2?`(?:/${z})`:"/"+z),T&&(z+="?"),s+=z,g+=20,T&&(g+=-8),R&&(g+=-20),F===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:R,optional:T}=g,N=y in l?l[y]:"";if(Array.isArray(N)&&!R)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const F=Array.isArray(N)?N.join("/"):N;if(!F)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=F}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ww(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Gw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ww(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Qw={type:0,value:""},Yw=/[a-zA-Z0-9_]/;function Xw(t){if(!t)return[[]];if(t==="/")return[[Qw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Yw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Jw(t,e,n){const r=zw(Xw(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Zw(t,e){const n=[],r=new Map;e=vf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=t_(u);y.aliasOf=f&&f.record;const R=vf(e,u),T=[y];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of z)T.push(he({},y,{components:f?f.record.components:y.components,path:Q,aliasOf:f?f.record:y}))}let N,F;for(const z of T){const{path:Q}=z;if(h&&Q[0]!=="/"){const fe=h.record.path,we=fe[fe.length-1]==="/"?"":"/";z.path=h.record.path+(Q&&we+Q)}if(N=Jw(z,h,R),f?f.alias.push(N):(F=F||N,F!==N&&F.alias.push(N),g&&u.name&&!yf(N)&&o(u.name)),"children"in y){const fe=y.children;for(let we=0;we<fe.length;we++)i(fe[we],N,f&&f.children[we])}f=f||N,c(N)}return F?()=>{o(F)}:Zr}function o(u){if(df(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Gw(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!yf(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,R;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw hr(1,{location:u});R=f.record.name,g=he(e_(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(F=>F.re.test(y)),f&&(g=f.parse(y),R=f.record.name);else{if(f=h.name?r.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw hr(1,{location:u,currentLocation:h});R=f.record.name,g=he({},h.params,u.params),y=f.stringify(g)}const T=[];let N=f;for(;N;)T.unshift(N.record),N=N.parent;return{name:R,path:y,params:g,matched:T,meta:r_(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function e_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function t_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:n_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function n_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function r_(t){return t.reduce((e,n)=>he(e,n.meta),{})}function vf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const wf=/#/g,s_=/&/g,i_=/\//g,o_=/=/g,a_=/\?/g,_f=/\+/g,c_=/%5B/g,l_=/%5D/g,Ef=/%5E/g,u_=/%60/g,If=/%7B/g,h_=/%7C/g,Tf=/%7D/g,f_=/%20/g;function Ga(t){return encodeURI(""+t).replace(h_,"|").replace(c_,"[").replace(l_,"]")}function d_(t){return Ga(t).replace(If,"{").replace(Tf,"}").replace(Ef,"^")}function Qa(t){return Ga(t).replace(_f,"%2B").replace(f_,"+").replace(wf,"%23").replace(s_,"%26").replace(u_,"`").replace(If,"{").replace(Tf,"}").replace(Ef,"^")}function p_(t){return Qa(t).replace(o_,"%3D")}function g_(t){return Ga(t).replace(wf,"%23").replace(a_,"%3F")}function m_(t){return t==null?"":g_(t).replace(i_,"%2F")}function Li(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function y_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_f," "),o=i.indexOf("="),a=Li(o<0?i:i.slice(0,o)),c=o<0?null:Li(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function bf(t){let e="";for(let n in t){const r=t[n];if(n=p_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Qa(i)):[r&&Qa(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function v_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ns(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Xt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(hr(4,{from:n,to:e})):h instanceof Error?a(h):Hw(h)?a(hr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ya(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(w_(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Xt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Aw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Xt(f,n,r,i,o)()}))}}return s}function w_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sf(t){const e=Kt(Ha),n=Kt(of),r=At(()=>e.resolve(Kr(t.to))),s=At(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ur.bind(null,u));if(f>-1)return f;const g=Af(c[l-2]);return l>1&&Af(u)===g&&h[h.length-1].path!==g?h.findIndex(ur.bind(null,c[l-2])):f}),i=At(()=>s.value>-1&&T_(n.params,r.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&cf(n.params,r.value.params));function a(c={}){return I_(c)?e[Kr(t.replace)?"replace":"push"](Kr(t.to)).catch(Zr):Promise.resolve()}return{route:r,href:At(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const __=Hu({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sf,setup(t,{slots:e}){const n=Xn(Sf(t)),{options:r}=Kt(Ha),s=At(()=>({[Cf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Dh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),E_=__;function I_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function T_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cf=(t,e,n)=>t!=null?t:e!=null?e:n,b_=Hu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Kt(qa),s=At(()=>t.route||r.value),i=Kt(sf,0),o=At(()=>s.value.matched[i]);yi(sf,i+1),yi(Sw,o),yi(qa,s);const a=_y();return rr(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!ur(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Rf(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,R=Dh(u,he({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Rf(n.default,{Component:R,route:c})||R}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const S_=b_;function xA(t){const e=Zw(t.routes,t),n=t.parseQuery||y_,r=t.stringifyQuery||bf,s=t.history,i=ns(),o=ns(),a=ns(),c=Ey(Yt);let l=Yt;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ka.bind(null,v=>""+v),h=Ka.bind(null,m_),f=Ka.bind(null,Li);function g(v,L){let C,M;return df(v)?(C=e.getRecordMatcher(v),M=L):M=v,e.addRoute(M,C)}function y(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function R(){return e.getRoutes().map(v=>v.record)}function T(v){return!!e.getRecordMatcher(v)}function N(v,L){if(L=he({},L||c.value),typeof v=="string"){const Y=za(n,v,L.path),d=e.resolve({path:Y.path},L),p=s.createHref(Y.fullPath);return he(Y,d,{params:f(d.params),hash:Li(Y.hash),redirectedFrom:void 0,href:p})}let C;if("path"in v)C=he({},v,{path:za(n,v.path,L.path).path});else{const Y=he({},v.params);for(const d in Y)Y[d]==null&&delete Y[d];C=he({},v,{params:h(v.params)}),L.params=h(L.params)}const M=e.resolve(C,L),ce=v.hash||"";M.params=u(f(M.params));const ge=Nw(r,he({},v,{hash:d_(ce),path:M.path})),J=s.createHref(ge);return he({fullPath:ge,hash:ce,query:r===bf?v_(v.query):v.query||{}},M,{redirectedFrom:void 0,href:J})}function F(v){return typeof v=="string"?za(n,v,c.value.path):he({},v)}function z(v,L){if(l!==v)return hr(8,{from:L,to:v})}function Q(v){return Z(v)}function fe(v){return Q(he(F(v),{replace:!0}))}function we(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:C}=L;let M=typeof C=="function"?C(v):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),he({query:v.query,hash:v.hash,params:v.params},M)}}function Z(v,L){const C=l=N(v),M=c.value,ce=v.state,ge=v.force,J=v.replace===!0,Y=we(C);if(Y)return Z(he(F(Y),{state:ce,force:ge,replace:J}),L||C);const d=C;d.redirectedFrom=L;let p;return!ge&&kw(r,M,C)&&(p=hr(16,{to:d,from:M}),qn(M,M,!0,!1)),(p?Promise.resolve(p):de(d,M)).catch(m=>Sn(m)?m:pe(m,d,M)).then(m=>{if(m){if(Sn(m,2))return Z(he(F(m.to),{state:ce,force:ge,replace:J}),L||d)}else m=$e(d,M,!0,J,ce);return Ve(d,M,m),m})}function Te(v,L){const C=z(v,L);return C?Promise.reject(C):Promise.resolve()}function de(v,L){let C;const[M,ce,ge]=A_(v,L);C=Ya(M.reverse(),"beforeRouteLeave",v,L);for(const Y of M)Y.leaveGuards.forEach(d=>{C.push(Xt(d,v,L))});const J=Te.bind(null,v,L);return C.push(J),fr(C).then(()=>{C=[];for(const Y of i.list())C.push(Xt(Y,v,L));return C.push(J),fr(C)}).then(()=>{C=Ya(ce,"beforeRouteUpdate",v,L);for(const Y of ce)Y.updateGuards.forEach(d=>{C.push(Xt(d,v,L))});return C.push(J),fr(C)}).then(()=>{C=[];for(const Y of v.matched)if(Y.beforeEnter&&!L.matched.includes(Y))if(Array.isArray(Y.beforeEnter))for(const d of Y.beforeEnter)C.push(Xt(d,v,L));else C.push(Xt(Y.beforeEnter,v,L));return C.push(J),fr(C)}).then(()=>(v.matched.forEach(Y=>Y.enterCallbacks={}),C=Ya(ge,"beforeRouteEnter",v,L),C.push(J),fr(C))).then(()=>{C=[];for(const Y of o.list())C.push(Xt(Y,v,L));return C.push(J),fr(C)}).catch(Y=>Sn(Y,8)?Y:Promise.reject(Y))}function Ve(v,L,C){for(const M of a.list())M(v,L,C)}function $e(v,L,C,M,ce){const ge=z(v,L);if(ge)return ge;const J=L===Yt,Y=lr?history.state:{};C&&(M||J?s.replace(v.fullPath,he({scroll:J&&Y&&Y.scroll},ce)):s.push(v.fullPath,ce)),c.value=v,qn(v,L,C,J),ft()}let ze;function Bt(){ze=s.listen((v,L,C)=>{const M=N(v),ce=we(M);if(ce){Z(he(ce,{replace:!0}),M).catch(Zr);return}l=M;const ge=c.value;lr&&Fw(uf(ge.fullPath,C.delta),Pi()),de(M,ge).catch(J=>Sn(J,4|8)?J:Sn(J,2)?(Z(J.to,M).then(Y=>{Sn(Y,4|16)&&!C.delta&&C.type===es.pop&&s.go(-1,!1)}).catch(Zr),Promise.reject()):(C.delta&&s.go(-C.delta,!1),pe(J,M,ge))).then(J=>{J=J||$e(M,ge,!1),J&&(C.delta?s.go(-C.delta,!1):C.type===es.pop&&Sn(J,4|16)&&s.go(-1,!1)),Ve(M,ge,J)}).catch(Zr)})}let Bn=ns(),Hn=ns(),Re;function pe(v,L,C){ft(v);const M=Hn.list();return M.length?M.forEach(ce=>ce(v,L,C)):console.error(v),Promise.reject(v)}function ae(){return Re&&c.value!==Yt?Promise.resolve():new Promise((v,L)=>{Bn.add([v,L])})}function ft(v){Re||(Re=!0,Bt(),Bn.list().forEach(([L,C])=>v?C(v):L()),Bn.reset())}function qn(v,L,C,M){const{scrollBehavior:ce}=t;if(!lr||!ce)return Promise.resolve();const ge=!C&&Vw(uf(v.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return bh().then(()=>ce(v,L,ge)).then(J=>J&&Uw(J)).catch(J=>pe(J,v,L))}const Dt=v=>s.go(v);let Tt;const dt=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:T,getRoutes:R,resolve:N,options:t,push:Q,replace:fe,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Hn.add,isReady:ae,install(v){const L=this;v.component("RouterLink",E_),v.component("RouterView",S_),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(c)}),lr&&!Tt&&c.value===Yt&&(Tt=!0,Q(s.location).catch(ce=>{}));const C={};for(const ce in Yt)C[ce]=At(()=>c.value[ce]);v.provide(Ha,L),v.provide(of,Xn(C)),v.provide(qa,c);const M=v.unmount;dt.add(v),v.unmount=function(){dt.delete(v),dt.size<1&&(l=Yt,ze&&ze(),c.value=Yt,Tt=!1,Re=!1),M()}}}}function fr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function A_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ur(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ur(l,c))||s.push(c))}return[n,r,s]}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Xa(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function C_(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(u){try{l(r.next(u))}catch(h){o(h)}}function c(u){try{l(r.throw(u))}catch(h){o(h)}}function l(u){u.done?i(u.value):s(u.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function R_(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],s=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ja(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Mi(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),s,i=[],o;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function Nf(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},k_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},O_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):k_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},D_=function(t){try{return O_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Of(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L_(){return Oe().indexOf("Electron/")>=0}function Pf(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M_(){return Oe().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="FirebaseError";class dr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=x_,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?U_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dr(s,a,r)}}function U_(t,e){return t.replace(F_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const F_=/\{\$([^}]+)}/g;function V_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lf(i)&&Lf(o)){if(!xi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $_(t,e){const n=new j_(t,e);return n.subscribe.bind(n)}class j_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}var pr=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H_=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new P_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch(i){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(K_(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch(h){}try{for(var s=Ja(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var o=Mi(i.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch(h){}}}catch(h){n={error:h}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=An),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return C_(this,void 0,void 0,function(){var e;return R_(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Nf(Nf([],Mi(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Mi(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=An),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=An),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var s=e.options,i=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=Ja(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Mi(l.value,2),h=u[0],f=u[1],g=this.normalizeInstanceIdentifier(h);o===g&&f.resolve(a)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);var o=this.instances.get(s);return o&&e(o,s),function(){i.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,s,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=Ja(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch(l){}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,s=r===void 0?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:q_(n),options:s}),this.instances.set(n,i),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=An),this.component?this.component.multipleInstances?e:An:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function q_(t){return t===An?void 0:t}function K_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z_=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new H_(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const W_={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},G_=se.INFO,Q_={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Y_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Q_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=G_,this._logHandler=Y_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",Mf="0.7.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new ec("@firebase/app"),Z_="@firebase/app-compat",eE="@firebase/analytics-compat",tE="@firebase/analytics",nE="@firebase/app-check-compat",rE="@firebase/app-check",sE="@firebase/auth",iE="@firebase/auth-compat",oE="@firebase/database",aE="@firebase/database-compat",cE="@firebase/functions",lE="@firebase/functions-compat",uE="@firebase/installations",hE="@firebase/installations-compat",fE="@firebase/messaging",dE="@firebase/messaging-compat",pE="@firebase/performance",gE="@firebase/performance-compat",mE="@firebase/remote-config",yE="@firebase/remote-config-compat",vE="@firebase/storage",wE="@firebase/storage-compat",_E="@firebase/firestore",EE="@firebase/firestore-compat",IE="firebase",TE="9.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="[DEFAULT]",bE={[tc]:"fire-core",[Z_]:"fire-core-compat",[tE]:"fire-analytics",[eE]:"fire-analytics-compat",[rE]:"fire-app-check",[nE]:"fire-app-check-compat",[sE]:"fire-auth",[iE]:"fire-auth-compat",[oE]:"fire-rtdb",[aE]:"fire-rtdb-compat",[cE]:"fire-fn",[lE]:"fire-fn-compat",[uE]:"fire-iid",[hE]:"fire-iid-compat",[fE]:"fire-fcm",[dE]:"fire-fcm-compat",[pE]:"fire-perf",[gE]:"fire-perf-compat",[mE]:"fire-rc",[yE]:"fire-rc-compat",[vE]:"fire-gcs",[wE]:"fire-gcs-compat",[_E]:"fire-fst",[EE]:"fire-fst-compat","fire-js":"fire-js",[IE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,rc=new Map;function SE(t,e){try{t.container.addComponent(e)}catch(n){nc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function as(t){const e=t.name;if(rc.has(e))return nc.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of Ui.values())SE(n,t);return!0}function sc(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Fi=new rs("app","Firebase",AE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=TE;function UA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:xf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Fi.create("bad-app-name",{appName:String(r)});const s=Ui.get(r);if(s){if(xi(t,s.options)&&xi(n,s.config))return s;throw Fi.create("duplicate-app",{appName:r})}const i=new z_(r);for(const a of rc.values())i.addComponent(a);const o=new CE(t,n,i);return Ui.set(r,o),o}function Uf(t=xf){const e=Ui.get(t);if(!e)throw Fi.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=bE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nc.warn(a.join(" "));return}as(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){as(new pr("platform-logger",e=>new X_(e),"PRIVATE")),Jt(tc,Mf,t),Jt(tc,Mf,"esm2017"),Jt("fire-js","")}RE("");var NE="firebase",kE="9.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(NE,kE,"app");function Ff(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OE=Ff,Vf=new rs("auth","Firebase",Ff());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new ec("@firebase/auth");function Vi(t,...e){$f.logLevel<=se.ERROR&&$f.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw ic(t,...e)}function Nt(t,...e){return ic(t,...e)}function DE(t,e,n){const r=Object.assign(Object.assign({},OE()),{[e]:n});return new rs("auth","Firebase",r).create(e,{appName:t.name})}function ic(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vf.create(t,...e)}function B(t,e,...n){if(!t)throw ic(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vi(e),new Error(e)}function Ut(t,e){t||xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;function Ft(t){Ut(t instanceof Function,"Expected a class definition");let e=jf.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e){const n=sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xi(i,e!=null?e:{}))return s;Et(s,"already-initialized")}return n.initialize({options:e})}function LE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ME(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ME()||Of()||"connection"in navigator)?navigator.onLine:!0}function UE(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=kf()||Df()}get(){return xE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new ls(3e4,6e4);function us(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hs(t,e,n,r,s={}){return Hf(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ss(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(cc.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),cc.fetch()(qf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Hf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FE),e);try{const s=new $E(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw lc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw lc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw DE(t,u,l);Et(t,u)}}catch(s){if(s instanceof dr)throw s;Et(t,"network-request-failed")}}async function fs(t,e,n,r,s={}){const i=await hs(t,e,n,r,s);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qf(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ac(t.config,s):`${t.config.apiScheme}://${s}`}class $E{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"timeout")),VE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){return hs(t,"POST","/v1/accounts:delete",e)}async function BE(t,e){return hs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function HE(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=hc(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ds(uc(s.auth_time)),issuedAtTime:ds(uc(s.iat)),expirationTime:ds(uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function hc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=D_(n);return s?JSON.parse(s):(Vi("Failed to decode base64 JWT payload"),null)}catch(s){return Vi("Caught error parsing JWT payload as JSON",s),null}}function qE(t){const e=hc(t);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dr&&KE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ps(t,BE(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?QE(i.providerUserInfo):[],a=GE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function WE(t){const e=ct(t);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function QE(t){return t.map(e=>{var{providerId:n}=e,r=Xa(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(t,e){const n=await Hf(t,{},()=>{const r=ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qf(t,s,"/v1/token",`key=${i}`);return cc.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):qE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await YE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gs;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gs,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){B(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new zE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Kf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HE(this,e)}reload(){return WE(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ps(this,jE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:Q,isAnonymous:fe,providerData:we,stsTokenManager:Z}=n;B(z&&Z,e,"internal-error");const Te=gs.fromJSON(this.name,Z);B(typeof z=="string",e,"internal-error"),Zt(h,e.name),Zt(f,e.name),B(typeof Q=="boolean",e,"internal-error"),B(typeof fe=="boolean",e,"internal-error"),Zt(g,e.name),Zt(y,e.name),Zt(R,e.name),Zt(T,e.name),Zt(N,e.name),Zt(F,e.name);const de=new Cn({uid:z,auth:e,email:f,emailVerified:Q,displayName:h,isAnonymous:fe,photoURL:y,phoneNumber:g,tenantId:R,stsTokenManager:Te,createdAt:N,lastLoginAt:F});return we&&Array.isArray(we)&&(de.providerData=we.map(Ve=>Object.assign({},Ve))),T&&(de._redirectEventId=T),de}static async _fromIdTokenResponse(e,n,r=!1){const s=new gs;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $i(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zf.type="NONE";const Wf=zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ji(this.userKey,s.apiKey,i),this.fullPersistenceKey=ji("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gr(Ft(Wf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ft(Wf);const o=ji(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch(u){}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch(u){}})),new gr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zf(e))return"Blackberry";if(ed(e))return"Webos";if(fc(e))return"Safari";if((e.includes("chrome/")||Yf(e))&&!e.includes("edge/"))return"Chrome";if(Jf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qf(t=Oe()){return/firefox\//i.test(t)}function fc(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yf(t=Oe()){return/crios\//i.test(t)}function Xf(t=Oe()){return/iemobile/i.test(t)}function Jf(t=Oe()){return/android/i.test(t)}function Zf(t=Oe()){return/blackberry/i.test(t)}function ed(t=Oe()){return/webos/i.test(t)}function Bi(t=Oe()){return/iphone|ipad|ipod/i.test(t)}function XE(t=Oe()){var e;return Bi(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function JE(){return Pf()&&document.documentMode===10}function td(t=Oe()){return Bi(t)||Jf(t)||ed(t)||Zf(t)||/windows phone/i.test(t)||Xf(t)}function ZE(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e=[]){let n;switch(t){case"Browser":n=Gf(Oe());break;case"Worker":n=`${Gf(Oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await gr.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Hi(t){return ct(t)}class rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=$_(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}async function t0(t,e){return hs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e){return fs(t,"POST","/v1/accounts:signInWithPassword",us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",us(t,e))}async function s0(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends dc{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return n0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return r0(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return t0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return s0(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t,e){return fs(t,"POST","/v1/accounts:signInWithIdp",us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="http://localhost";class Rn extends dc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xa(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mr(e,n)}buildRequest(){const e={requestUri:i0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ss(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a0(t){const e=is(os(t)).link,n=e?is(os(e)).deep_link_id:null,r=is(os(t)).deep_link_id;return(r?is(os(r)).link:null)||r||n||e||t}class pc{constructor(e){var n,r,s,i,o,a;const c=is(os(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=o0((s=c.mode)!==null&&s!==void 0?s:null);B(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=a0(e);try{return new pc(n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.providerId=yr.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pc.parseLink(n);return B(r,"argument-error"),ms._fromEmailAndCode(e,r.code,r.tenantId)}}yr.PROVIDER_ID="password";yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends sd{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends ys{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch(n){return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends ys{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch(s){return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ys{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch(n){return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ys{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rn.credential(n,r)}catch(s){return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t,e){return fs(t,"POST","/v1/accounts:signUp",us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=id(r);return new Nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=id(r);return new Nn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends dr{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qi(e,n,r,s)}}function od(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(t,i,e,r):i})}async function l0(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ps(t,od(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=hc(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),Nn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t,e,n=!1){const r="signIn",s=await od(t,r,e),i=await Nn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function h0(t,e){return ad(Hi(t),e)}async function FA(t,e,n){const r=Hi(t),s=await c0(r,{returnSecureToken:!0,email:e,password:n}),i=await Nn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function VA(t,e,n){return h0(ct(t),yr.credential(e,n))}function $A(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function jA(t){return ct(t).signOut()}const Ki="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ki,"1"),this.storage.removeItem(Ki),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){const t=Oe();return fc(t)||Bi(t)}const d0=1e3,p0=10;class ld extends cd{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=f0()&&ZE(),this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,p0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ld.type="LOCAL";const g0=ld;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ud.type="SESSION";const hd=ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await m0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=gc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function v0(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){return typeof kt().WorkerGlobalScope!="undefined"&&typeof kt().importScripts=="function"}async function w0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function _0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function E0(){return fd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firebaseLocalStorageDb",I0=1,Wi="firebaseLocalStorage",pd="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gi(t,e){return t.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function T0(){const t=indexedDB.deleteDatabase(dd);return new vs(t).toPromise()}function mc(){const t=indexedDB.open(dd,I0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wi,{keyPath:pd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wi)?e(r):(r.close(),await T0(),e(await mc()))})})}async function gd(t,e,n){const r=Gi(t,!0).put({[pd]:e,value:n});return new vs(r).toPromise()}async function b0(t,e){const n=Gi(t,!1).get(e),r=await new vs(n).toPromise();return r===void 0?null:r.value}function md(t,e){const n=Gi(t,!0).delete(e);return new vs(n).toPromise()}const S0=800,A0=3;class yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>A0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(E0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await w0(),!this.activeServiceWorker)return;this.sender=new y0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await gd(e,Ki,"1"),await md(e,Ki),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>b0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gi(s,!1).getAll();return new vs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yd.type="LOCAL";const C0=yd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function N0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",R0().appendChild(r)})}function k0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ls(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e){return e?Ft(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends dc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D0(t){return ad(t.auth,new yc(t),t.bypassAuthState)}function P0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),u0(n,new yc(t),t.bypassAuthState)}async function L0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),l0(n,new yc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D0;case"linkViaPopup":case"linkViaRedirect":return L0;case"reauthViaPopup":case"reauthViaRedirect":return P0;default:Et(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new ls(2e3,1e4);class vr extends vd{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,M0.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="pendingRedirect",vc=new Map;class U0 extends vd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=vc.get(this.auth._key());if(!e){try{const r=await F0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vc.set(this.auth._key(),e)}return this.bypassAuthState||vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F0(t,e){const n=$0(e),r=V0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function V0(t){return Ft(t._redirectPersistence)}function $0(t){return ji(x0,t.config.apiKey,t.name)}async function j0(t,e,n=!1){const r=Hi(t),s=O0(r,e),o=await new U0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=10*60*1e3;class H0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_d(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B0&&this.cachedEventUids.clear(),this.cachedEventUids.has(wd(e))}saveEventToCache(e){this.cachedEventUids.add(wd(e)),this.lastProcessedEventTime=Date.now()}}function wd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _d({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function q0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _d(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e={}){return hs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W0=/^https?/;async function G0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await K0(t);for(const n of e)try{if(Q0(n))return}catch(r){}Et(t,"unauthorized-domain")}function Q0(t){const e=oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W0.test(n))return!1;if(z0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new ls(3e4,6e4);function Ed(){const t=kt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function X0(t){return new Promise((e,n)=>{var r,s,i;function o(){Ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ed(),n(Nt(t,"network-request-failed"))},timeout:Y0.get()})}if((s=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=kt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=k0("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},N0(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Qi=null,e})}let Qi=null;function J0(t){return Qi=Qi||X0(t),Qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new ls(5e3,15e3),eI="__/auth/iframe",tI="emulator/auth/iframe",nI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true"},rI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sI(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ac(e,tI):`https://${t.config.authDomain}/${eI}`,r={apiKey:e.apiKey,appName:t.name,v:cs},s=rI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ss(r).slice(1)}`}async function iI(t){const e=await J0(t),n=kt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:sI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=kt().setTimeout(()=>{i(o)},Z0.get());function c(){kt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aI=500,cI=600,lI="_blank",uI="http://localhost";class Id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function hI(t,e,n,r=aI,s=cI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oI),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=Yf(l)?lI:n),Qf(l)&&(e=e||uI,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(XE(l)&&a!=="_self")return fI(e||"",a),new Id(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch(f){}return new Id(h)}function fI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="__/auth/handler",pI="emulator/auth/handler";function Td(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:s};if(e instanceof sd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",V_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ys){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${gI(t)}?${ss(a).slice(1)}`}function gI({config:t}){return t.emulator?ac(t,pI):`https://${t.authDomain}/${dI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class mI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=j0}async _openPopup(e,n,r,s){var i;Ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Td(e,n,r,oc(),s);return hI(e,o,gc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),v0(Td(e,n,r,oc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await iI(e),r=new H0(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wc];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return td()||fc()||Bi()}}const yI=mI;var bd="@firebase/auth",Sd="0.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _I(t){as(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),B(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(t)},c=new e0(o,a);return LE(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),as(new pr("auth-internal",e=>{const n=Hi(e.getProvider("auth").getImmediate());return(r=>new vI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(bd,Sd,wI(t)),Jt(bd,Sd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t=Uf()){const e=sc(t,"auth");return e.isInitialized()?e.getImmediate():PE(t,{popupRedirectResolver:yI,persistence:[C0,g0,hd]})}_I("Browser");var EI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,_c=_c||{},H=EI||self;function Yi(){}function Ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ws(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function II(t){return Object.prototype.hasOwnProperty.call(t,Ic)&&t[Ic]||(t[Ic]=++TI)}var Ic="closure_uid_"+(1e9*Math.random()>>>0),TI=0;function bI(t,e,n){return t.call.apply(t.bind,arguments)}function SI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=bI:Le=SI,Le.apply(null,arguments)}function Xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function sn(){this.s=this.s,this.o=this.o}var AI=0,CI={};sn.prototype.s=!1;sn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),AI!=0)){var t=II(this);delete CI[t]}};sn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ad=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Cd=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function RI(t){e:{var e=wT;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rd(t){return Array.prototype.concat.apply([],arguments)}function Tc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ji(t){return/^[\s\xa0]*$/.test(t)}var Nd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ye(t,e){return t.indexOf(e)!=-1}function bc(t,e){return t<e?-1:t>e?1:0}var Xe;e:{var kd=H.navigator;if(kd){var Od=kd.userAgent;if(Od){Xe=Od;break e}}Xe=""}function Sc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Dd(t){const e={};for(const n in t)e[n]=t[n];return e}var Pd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ld(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Pd.length;i++)n=Pd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ac(t){return Ac[" "](t),t}Ac[" "]=Yi;function NI(t){var e=DI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kI=Ye(Xe,"Opera"),wr=Ye(Xe,"Trident")||Ye(Xe,"MSIE"),Md=Ye(Xe,"Edge"),Cc=Md||wr,xd=Ye(Xe,"Gecko")&&!(Ye(Xe.toLowerCase(),"webkit")&&!Ye(Xe,"Edge"))&&!(Ye(Xe,"Trident")||Ye(Xe,"MSIE"))&&!Ye(Xe,"Edge"),OI=Ye(Xe.toLowerCase(),"webkit")&&!Ye(Xe,"Edge");function Ud(){var t=H.document;return t?t.documentMode:void 0}var Zi;e:{var Rc="",Nc=function(){var t=Xe;if(xd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Md)return/Edge\/([\d\.]+)/.exec(t);if(wr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OI)return/WebKit\/(\S+)/.exec(t);if(kI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Rc=Nc?Nc[1]:""),wr){var kc=Ud();if(kc!=null&&kc>parseFloat(Rc)){Zi=String(kc);break e}}Zi=Rc}var DI={};function PI(){return NI(function(){let t=0;const e=Nd(String(Zi)).split("."),n=Nd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=bc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||bc(s[2].length==0,i[2].length==0)||bc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Oc;if(H.document&&wr){var Fd=Ud();Oc=Fd||parseInt(Zi,10)||void 0}else Oc=void 0;var LI=Oc,MI=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Yi,e),H.removeEventListener("test",Yi,e)}catch(n){}return t}();function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};function _s(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xd){e:{try{Ac(e.nodeName);var s=!0;break e}catch(i){}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_s.Z.h.call(this)}}Me(_s,Be);var xI={2:"touch",3:"pen",4:"mouse"};_s.prototype.h=function(){_s.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Es="closure_listenable_"+(1e6*Math.random()|0),UI=0;function FI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++UI,this.ca=this.fa=!1}function eo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function to(t){this.src=t,this.g={},this.h=0}to.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Pc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new FI(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Dc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ad(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(eo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Lc="closure_lm_"+(1e6*Math.random()|0),Mc={};function Vd(t,e,n,r,s){if(r&&r.once)return jd(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vd(t,e[i],n,r,s);return null}return n=Vc(n),t&&t[Es]?t.N(e,n,ws(r)?!!r.capture:!!r,s):$d(t,e,n,!1,r,s)}function $d(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ws(s)?!!s.capture:!!s,a=Uc(t);if(a||(t[Lc]=a=new to(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=VI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)MI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Hd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VI(){function t(n){return e.call(t.src,t.listener,n)}var e=$I;return t}function jd(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)jd(t,e[i],n,r,s);return null}return n=Vc(n),t&&t[Es]?t.O(e,n,ws(r)?!!r.capture:!!r,s):$d(t,e,n,!0,r,s)}function Bd(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Bd(t,e[i],n,r,s);else r=ws(r)?!!r.capture:!!r,n=Vc(n),t&&t[Es]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Pc(i,n,r,s),-1<n&&(eo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pc(e,n,r,s)),(n=-1<t?e[t]:null)&&xc(n))}function xc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Es])Dc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Hd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Uc(e))?(Dc(n,t),n.h==0&&(n.src=null,e[Lc]=null)):eo(t)}}}function Hd(t){return t in Mc?Mc[t]:Mc[t]="on"+t}function $I(t,e){if(t.ca)t=!0;else{e=new _s(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&xc(t),t=n.call(r,e)}return t}function Uc(t){return t=t[Lc],t instanceof to?t:null}var Fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vc(t){return typeof t=="function"?t:(t[Fc]||(t[Fc]=function(e){return t.handleEvent(e)}),t[Fc])}function De(){sn.call(this),this.i=new to(this),this.P=this,this.I=null}Me(De,sn);De.prototype[Es]=!0;De.prototype.removeEventListener=function(t,e,n,r){Bd(this,t,e,n,r)};function xe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var s=e;e=new Be(r,t),Ld(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=no(o,r,!0,e)&&s}if(o=e.g=t,s=no(o,r,!0,e)&&s,s=no(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=no(o,r,!1,e)&&s}De.prototype.M=function(){if(De.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)eo(n[r]);delete t.g[e],t.h--}}this.I=null};De.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function no(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Dc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var $c=H.JSON.stringify;function jI(){var t=Kd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BI{constructor(){this.h=this.g=null}add(e,n){const r=qd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new HI,t=>t.reset());class HI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qI(t){H.setTimeout(()=>{throw t},0)}function jc(t,e){Bc||KI(),Hc||(Bc(),Hc=!0),Kd.add(t,e)}var Bc;function KI(){var t=H.Promise.resolve(void 0);Bc=function(){t.then(zI)}}var Hc=!1,Kd=new BI;function zI(){for(var t;t=jI();){try{t.h.call(t.g)}catch(n){qI(n)}var e=qd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hc=!1}function ro(t,e){De.call(this),this.h=t||1,this.g=e||H,this.j=Le(this.kb,this),this.l=Date.now()}Me(ro,De);D=ro.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xe(this,"tick"),this.da&&(qc(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){ro.Z.M.call(this),qc(this),delete this.g};function Kc(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function zd(t){t.g=Kc(()=>{t.g=null,t.i&&(t.i=!1,zd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class WI extends sn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zd(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(t){sn.call(this),this.h=t,this.g={}}Me(Is,sn);var Wd=[];function Gd(t,e,n,r){Array.isArray(n)||(n&&(Wd[0]=n.toString()),n=Wd);for(var s=0;s<n.length;s++){var i=Vd(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qd(t){Sc(t.g,function(e,n){this.g.hasOwnProperty(n)&&xc(e)},t),t.g={}}Is.prototype.M=function(){Is.Z.M.call(this),Qd(this)};Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function so(){this.g=!0}so.prototype.Aa=function(){this.g=!1};function GI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function QI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function _r(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XI(t,n)+(r?" "+r:"")})}function YI(t,e){t.info(function(){return"TIMEOUT: "+e})}so.prototype.info=function(){};function XI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $c(n)}catch(a){return e}}var kn={},Yd=null;function io(){return Yd=Yd||new De}kn.Ma="serverreachability";function Xd(t){Be.call(this,kn.Ma,t)}Me(Xd,Be);function Ts(t){const e=io();xe(e,new Xd(e,t))}kn.STAT_EVENT="statevent";function Jd(t,e){Be.call(this,kn.STAT_EVENT,t),this.stat=e}Me(Jd,Be);function Je(t){const e=io();xe(e,new Jd(e,t))}kn.Na="timingevent";function Zd(t,e){Be.call(this,kn.Na,t),this.size=e}Me(Zd,Be);function bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var oo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ep={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function zc(){}zc.prototype.h=null;function tp(t){return t.h||(t.h=t.i())}function np(){}var Ss={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Wc(){Be.call(this,"d")}Me(Wc,Be);function Gc(){Be.call(this,"c")}Me(Gc,Be);var Qc;function ao(){}Me(ao,zc);ao.prototype.g=function(){return new XMLHttpRequest};ao.prototype.i=function(){return{}};Qc=new ao;function As(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Is(this),this.P=JI,t=Cc?125:void 0,this.W=new ro(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new rp}function rp(){this.i=null,this.g="",this.h=!1}var JI=45e3,Yc={},co={};D=As.prototype;D.setTimeout=function(t){this.P=t};function Xc(t,e,n){t.K=1,t.v=po(Vt(e)),t.s=n,t.U=!0,sp(t,null)}function sp(t,e){t.F=Date.now(),Cs(t),t.A=Vt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new rp,t.g=xp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new WI(Le(t.Ia,t,t.g),t.O)),Gd(t.V,t.g,"readystatechange",t.gb),e=t.H?Dd(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ts(1),GI(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Cc||this.g&&(this.h.h||this.g.ga()||Sp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ts(3):Ts(2)),lo(this);var n=this.g.ba();this.N=n;t:if(ip(this)){var r=Sp(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){On(this),Rs(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,QI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ji(a)){var l=a;break t}}l=null}if(n=l)_r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jc(this,n);else{this.i=!1,this.o=3,Je(12),On(this),Rs(this);break e}}this.U?(op(this,u,o),Cc&&this.i&&u==3&&(Gd(this.V,this.W,"tick",this.fb),this.W.start())):(_r(this.j,this.m,o,null),Jc(this,o)),u==4&&On(this),this.i&&!this.I&&(u==4?Dp(this.l,this):(this.i=!1,Cs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),On(this),Rs(this)}}}catch(u){}finally{}};function ip(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function op(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=ZI(t,n),s==co){e==4&&(t.o=4,Je(14),r=!1),_r(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Yc){t.o=4,Je(15),_r(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _r(t.j,t.m,s,null),Jc(t,s);ip(t)&&s!=co&&s!=Yc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ll(e),e.L=!0,Je(11))):(_r(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),Rs(t))}D.fb=function(){if(this.g){var t=$t(this.g),e=this.g.ga();this.C<e.length&&(lo(this),op(this,t,e),this.i&&t!=4&&Cs(this))}};function ZI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?co:(n=Number(e.substring(n,r)),isNaN(n)?Yc:(r+=1,r+n>e.length?co:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,On(this)};function Cs(t){t.Y=Date.now()+t.P,ap(t,t.P)}function ap(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bs(Le(t.eb,t),e)}function lo(t){t.B&&(H.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(YI(this.j,this.A),this.K!=2&&(Ts(3),Je(17)),On(this),this.o=2,Rs(this)):ap(this,this.Y-t)};function Rs(t){t.l.G==0||t.I||Dp(t.l,t)}function On(t){lo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,qc(t.W),Qd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tl(n.i,t))){if(n.I=t.N,!t.J&&tl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_o(n),vo(n);else break e;cl(n),Je(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=bs(Le(n.ab,n),6e3));if(1>=mp(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else Ln(n,11)}else if((t.J||n.g==t)&&_o(n),!Ji(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;!i.g&&(Ye(y,"spdy")||Ye(y,"quic")||Ye(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(nl(i,i.h),i.h=null))}if(r.D){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.sa=R,Ee(r.F,r.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Mp(r,r.H?r.la:null,r.W),o.J){yp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(lo(a),Cs(a)),r.g=o}else kp(r);0<n.l.length&&wo(n)}else l[0]!="stop"&&l[0]!="close"||Ln(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ln(n,7):ol(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ts(4)}catch(l){}}function eT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ec(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Zc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ec(t)||typeof t=="string")Cd(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ec(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=eT(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Er(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Er)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=Er.prototype;D.R=function(){el(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return el(this),this.g.concat()};function el(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Dn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Dn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Dn(this.h,t)?this.h[t]:e};D.set=function(t,e){Dn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var cp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Pn){this.g=e!==void 0?e:t.g,uo(this,t.j),this.s=t.s,ho(this,t.i),fo(this,t.m),this.l=t.l,e=t.h;var n=new Os;n.i=e.i,e.g&&(n.g=new Er(e.g),n.h=e.h),lp(this,n),this.o=t.o}else t&&(n=String(t).match(cp))?(this.g=!!e,uo(this,n[1]||"",!0),this.s=Ns(n[2]||""),ho(this,n[3]||"",!0),fo(this,n[4]),this.l=Ns(n[5]||"",!0),lp(this,n[6]||"",!0),this.o=Ns(n[7]||"")):(this.g=!!e,this.h=new Os(null,this.g))}Pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,up,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,up,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?oT:iT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,cT)),t.join("")};function Vt(t){return new Pn(t)}function uo(t,e,n){t.j=n?Ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ho(t,e,n){t.i=n?Ns(e,!0):e}function fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function lp(t,e,n){e instanceof Os?(t.h=e,lT(t.h,t.g)):(n||(e=ks(e,aT)),t.h=new Os(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function po(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nT(t){return t instanceof Pn?Vt(t):new Pn(t,void 0)}function rT(t,e,n,r){var s=new Pn(null,void 0);return t&&uo(s,t),e&&ho(s,e),n&&fo(s,n),r&&(s.l=r),s}function Ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var up=/[#\/\?@]/g,iT=/[#\?:]/g,oT=/[#\?]/g,aT=/[#\?@]/g,cT=/#/g;function Os(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function on(t){t.g||(t.g=new Er,t.h=0,t.i&&tT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Os.prototype;D.add=function(t,e){on(this),this.i=null,t=Ir(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hp(t,e){on(t),e=Ir(t,e),Dn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Dn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&el(t)))}function fp(t,e){return on(t),e=Ir(t,e),Dn(t.g.h,e)}D.forEach=function(t,e){on(this),this.g.forEach(function(n,r){Cd(n,function(s){t.call(e,s,r,this)},this)},this)};D.T=function(){on(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};D.R=function(t){on(this);var e=[];if(typeof t=="string")fp(this,t)&&(e=Rd(e,this.g.get(Ir(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rd(e,t[n])}return e};D.set=function(t,e){return on(this),this.i=null,t=Ir(this,t),fp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function dp(t,e,n){hp(t,e),0<n.length&&(t.i=null,t.g.set(Ir(t,e),Tc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Ir(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lT(t,e){e&&!t.j&&(on(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(hp(this,r),dp(this,s,n))},t)),t.j=e}var uT=class{constructor(t,e){this.h=t,this.g=e}};function pp(t){this.l=t||hT,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hT=10;function gp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mp(t){return t.h?1:t.g?t.g.size:0}function tl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nl(t,e){t.g?t.g.add(e):t.h=e}function yp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pp.prototype.cancel=function(){if(this.i=vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tc(t.i)}function rl(){}rl.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};rl.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function fT(){this.g=new rl}function dT(t,e,n){const r=n||"";try{Zc(t,function(s,i){let o=s;ws(s)&&(o=$c(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function pT(t,e){const n=new so;if(H.Image){const r=new Image;r.onload=Xi(go,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xi(go,n,r,"TestLoadImage: error",!1,e),r.onabort=Xi(go,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xi(go,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function go(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Ds(t){this.l=t.$b||null,this.j=t.ib||!1}Me(Ds,zc);Ds.prototype.g=function(){return new mo(this.l,this.j)};Ds.prototype.i=function(t){return function(){return t}}({});function mo(t,e){De.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(mo,De);var sl=0;D=mo.prototype;D.open=function(t,e){if(this.readyState!=sl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ls(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=sl};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function wp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ps(this):Ls(this),this.readyState==3&&wp(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Ps(this))};D.Ta=function(t){this.g&&(this.response=t,Ps(this))};D.ha=function(){this.g&&Ps(this)};function Ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ls(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gT=H.JSON.parse;function Se(t){De.call(this),this.headers=new Er,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_p,this.K=this.L=!1}Me(Se,De);var _p="",mT=/^https?$/i,yT=["POST","PUT"];D=Se.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qc.g(),this.C=this.u?tp(this.u):tp(Qc),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ep(this,i);return}t=n||"";const s=new Er(this.headers);r&&Zc(r,function(i,o){s.set(o,i)}),r=RI(s.T()),n=H.FormData&&t instanceof H.FormData,!(0<=Ad(yT,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bp(this),0<this.B&&((this.K=vT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=Kc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ep(this,i)}};function vT(t){return wr&&PI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function wT(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof _c!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function Ep(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ip(t),yo(t)}function Ip(t){t.D||(t.D=!0,xe(t,"complete"),xe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),yo(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yo(this,!0)),Se.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Tp(this):this.cb())};D.cb=function(){Tp(this)};function Tp(t){if(t.h&&typeof _c!="undefined"&&(!t.C[1]||$t(t)!=4||t.ba()!=2)){if(t.v&&$t(t)==4)Kc(t.Fa,0,t);else if(xe(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(cp)[1]||null;if(!s&&H.self&&H.self.location){var i=H.self.location.protocol;s=i.substr(0,i.length-1)}r=!mT.test(s?s.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch(c){o=""}t.j=o+" ["+t.ba()+"]",Ip(t)}}finally{yo(t)}}}}function yo(t,e){if(t.g){bp(t);const n=t.g,r=t.C[0]?Yi:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch(s){}}}function bp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<$t(this)?this.g.status:-1}catch(t){return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gT(e)}};function Sp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _p:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function _T(t){let e="";return Sc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function il(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_T(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ap(t){this.za=0,this.l=[],this.h=new so,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ms("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ms("baseRetryDelayMs",5e3,t),this.$a=Ms("retryDelaySeedMs",1e4,t),this.Ya=Ms("forwardChannelMaxRetries",2,t),this.ra=Ms("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new pp(t&&t.concurrentRequestLimit),this.Ca=new fT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Ap.prototype;D.ma=8;D.G=1;function ol(t){if(Cp(t),t.G==3){var e=t.V++,n=Vt(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),xs(t,n),e=new As(t,t.h,e,void 0),e.K=2,e.v=po(Vt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=xp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Cs(e)}Lp(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}};function vo(t){t.g&&(ll(t),t.g.cancel(),t.g=null)}function Cp(t){vo(t),t.u&&(H.clearTimeout(t.u),t.u=null),_o(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function al(t,e){t.l.push(new uT(t.Za++,e)),t.G==3&&wo(t)}function wo(t){gp(t.i)||t.m||(t.m=!0,jc(t.Ha,t),t.C=0)}function ET(t,e){return mp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=bs(Le(t.Ha,t,e),Pp(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new As(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Dd(i),Ld(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Np(this,s,e),n=Vt(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),xs(this,n),this.o&&i&&il(n,this.o,i),nl(this.i,s),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),s.$=!0,Xc(s,n,null)):Xc(s,n,e),this.G=2}}else this.G==3&&(t?Rp(this,t):this.l.length==0||gp(this.i)||Rp(this))};function Rp(t,e){var n;e?n=e.m:n=t.V++;const r=Vt(t.F);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.U),xs(t,r),t.o&&t.s&&il(r,t.o,t.s),n=new As(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Np(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),nl(t.i,n),Xc(n,r,e)}function xs(t,e){t.j&&Zc({},function(n,r){Ee(e,r,n)})}function Np(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Le(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{dT(u,o,"req"+l+"_")}catch(h){r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function kp(t){t.g||t.u||(t.Y=1,jc(t.Ga,t),t.A=0)}function cl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=bs(Le(t.Ga,t),Pp(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Op(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=bs(Le(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Je(10),vo(this),Op(this))};function ll(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Op(t){t.g=new As(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Vt(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),xs(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&il(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=po(Vt(e)),n.s=null,n.U=!0,sp(n,t)}D.ab=function(){this.v!=null&&(this.v=null,vo(this),cl(this),Je(19))};function _o(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Dp(t,e){var n=null;if(t.g==e){_o(t),ll(t),t.g=null;var r=2}else if(tl(t.i,e))n=e.D,yp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=io(),xe(r,new Zd(r,n,e,s)),wo(t)}else kp(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&ET(t,e)||r==2&&cl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function Pp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ln(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Le(t.jb,t);n||(n=new Pn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||uo(n,"https"),po(n)),pT(n.toString(),r)}else Je(2);t.G=0,t.j&&t.j.va(e),Lp(t),Cp(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Je(2)):(this.h.info("Failed to ping google.com"),Je(1))};function Lp(t){t.G=0,t.I=-1,t.j&&((vp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Tc(t.l),t.l.length=0),t.j.ua())}function Mp(t,e,n){let r=nT(n);if(r.i!="")e&&ho(r,e+"."+r.i),fo(r,r.m);else{const s=H.location;r=rT(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Sc(t.aa,function(s,i){Ee(r,i,s)}),e=t.D,n=t.sa,e&&n&&Ee(r,e,n),Ee(r,"VER",t.ma),xs(t,r),r}function xp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Se(new Ds({ib:!0})):new Se(t.qa),e.L=t.H,e}function Up(){}D=Up.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function Eo(){if(wr&&!(10<=Number(LI)))throw Error("Environmental error: no available transport.")}Eo.prototype.g=function(t,e){return new lt(t,e)};function lt(t,e){De.call(this),this.g=new Ap(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ji(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ji(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Tr(this)}Me(lt,De);lt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jc(Le(t.hb,t,e))),Je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Mp(t,null,t.W),wo(t)};lt.prototype.close=function(){ol(this.g)};lt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,al(this.g,e)}else this.v?(e={},e.__data__=$c(t),al(this.g,e)):al(this.g,t)};lt.prototype.M=function(){this.g.j=null,delete this.j,ol(this.g),delete this.g,lt.Z.M.call(this)};function Fp(t){Wc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Fp,Wc);function Vp(){Gc.call(this),this.status=1}Me(Vp,Gc);function Tr(t){this.g=t}Me(Tr,Up);Tr.prototype.xa=function(){xe(this.g,"a")};Tr.prototype.wa=function(t){xe(this.g,new Fp(t))};Tr.prototype.va=function(t){xe(this.g,new Vp(t))};Tr.prototype.ua=function(){xe(this.g,"b")};Eo.prototype.createWebChannel=Eo.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;oo.NO_ERROR=0;oo.TIMEOUT=8;oo.HTTP_ERROR=6;ep.COMPLETE="complete";np.EventType=Ss;Ss.OPEN="a";Ss.CLOSE="b";Ss.ERROR="c";Ss.MESSAGE="d";De.prototype.listen=De.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.La;Se.prototype.getLastErrorCode=Se.prototype.Da;Se.prototype.getStatus=Se.prototype.ba;Se.prototype.getResponseJson=Se.prototype.Qa;Se.prototype.getResponseText=Se.prototype.ga;Se.prototype.send=Se.prototype.ea;var IT=function(){return new Eo},TT=function(){return io()},ul=oo,bT=ep,ST=kn,$p={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},AT=Ds,Io=np,CT=Se;const jp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br="9.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new ec("@firebase/firestore");function Bp(){return Mn.logLevel}function V(t,...e){if(Mn.logLevel<=se.DEBUG){const n=e.map(hl);Mn.debug(`Firestore (${br}): ${t}`,...n)}}function an(t,...e){if(Mn.logLevel<=se.ERROR){const n=e.map(hl);Mn.error(`Firestore (${br}): ${t}`,...n)}}function Hp(t,...e){if(Mn.logLevel<=se.WARN){const n=e.map(hl);Mn.warn(`Firestore (${br}): ${t}`,...n)}}function hl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch(n){return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function me(t,e){t||W()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class NT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class kT{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new RT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new tt(e)}}class OT{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=tt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class DT{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new OT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fl.T=-1;class qp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=PT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Sr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new ut(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Us{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const LT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Us{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return LT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.fields=e,e.sort(nt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new He(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new He(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const MT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(t){if(me(!!t),typeof t=="string"){let e=0;const n=MT.exec(t);if(me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gp(t){const e=t.mapValue.fields.__previous_value__;return Wp(e)?Gp(e):e}function Fs(t){const e=ln(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){return t==null}function To(t){return t===0&&1/t==-1/0}function xT(t){return typeof t=="number"&&Number.isInteger(t)&&!To(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ie.fromString(e))}static fromName(e){return new q(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wp(t)?4:10:W()}function Ot(t,e){const n=xn(t);if(n!==xn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fs(t).isEqual(Fs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=ln(r.timestampValue),o=ln(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Cr(r.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ae(r.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ae(r.integerValue)===Ae(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ae(r.doubleValue),o=Ae(s.doubleValue);return i===o?To(i)===To(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Sr(t.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Kp(i)!==Kp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ot(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Vs(t,e){return(t.values||[]).find(n=>Ot(n,e))!==void 0}function Nr(t,e){const n=xn(t),r=xn(e);if(n!==r)return oe(n,r);switch(n){case 0:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ae(s.integerValue||s.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Qp(t.timestampValue,e.timestampValue);case 4:return Qp(Fs(t),Fs(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Cr(s),a=Cr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=oe(Ae(s.latitude),Ae(i.latitude));return o!==0?o:oe(Ae(s.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Nr(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const f=Nr(o[a[u]],c[l[u]]);if(f!==0)return f}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Qp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=ln(t),r=ln(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function pl(t){return gl(t)}function gl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=ln(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=gl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${gl(r.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function ml(t){return!!t&&"integerValue"in t}function yl(t){return!!t&&"arrayValue"in t}function Yp(t){return!!t&&"nullValue"in t}function Xp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bo(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=$s(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It($s(this.value))}}function Jp(t){const e=[];return Ar(t.fields,(n,r)=>{const s=new nt([n]);if(bo(r)){const i=Jp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new dl(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new qe(e,0,ie.min(),It.empty(),0)}static newFoundDocument(e,n,r){return new qe(e,1,n,r,0)}static newNoDocument(e,n){return new qe(e,2,n,It.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,It.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new qe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function Zp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UT(t,e,n,r,s,i,o)}function vl(t){const e=G(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>VT(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=So(e.startAt)),e.endAt&&(n+="|ub:",n+=So(e.endAt)),e.A=n}return e.A}function FT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${pl(r.value)}`;var r}).join(", ")}]`),Rr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+So(t.startAt)),t.endAt&&(e+=", endAt: "+So(t.endAt)),`Target(${e})`}function wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!WT(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ot(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ng(t.startAt,e.startAt)&&ng(t.endAt,e.endAt)}function _l(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new $T(e,n,r):n==="array-contains"?new HT(e,r):n==="in"?new qT(e,r):n==="not-in"?new KT(e,r):n==="array-contains-any"?new zT(e,r):new rt(e,n,r)}static R(e,n,r){return n==="in"?new jT(e,r):new BT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Nr(n,this.value)):n!==null&&xn(this.value)===xn(n)&&this.P(Nr(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function VT(t){return t.field.canonicalString()+t.op.toString()+pl(t.value)}class $T extends rt{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.P(n)}}class jT extends rt{constructor(e,n){super(e,"in",n),this.keys=eg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BT extends rt{constructor(e,n){super(e,"not-in",n),this.keys=eg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class HT extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yl(n)&&Vs(n.arrayValue,this.value)}}class qT extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vs(this.value.arrayValue,n)}}class KT extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vs(this.value.arrayValue,n)}}class zT extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vs(this.value.arrayValue,r))}}class El{constructor(e,n){this.position=e,this.before=n}}function So(t){return`${t.before?"b":"a"}:${t.position.map(e=>pl(e)).join(",")}`}class js{constructor(e,n="asc"){this.field=e,this.dir=n}}function WT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function tg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Nr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function ng(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ot(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function GT(t,e,n,r,s,i,o,a){return new Ao(t,e,n,r,s,i,o,a)}function Il(t){return new Ao(t)}function Co(t){return!Rr(t.limit)&&t.limitType==="F"}function Ro(t){return!Rr(t.limit)&&t.limitType==="L"}function QT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function YT(t){for(const e of t.filters)if(e.v())return e.field;return null}function XT(t){return t.collectionGroup!==null}function Bs(t){const e=G(t);if(e.V===null){e.V=[];const n=YT(e),r=QT(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new js(n)),e.V.push(new js(nt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new js(nt.keyField(),i))}}}return e.V}function Un(t){const e=G(t);if(!e.S)if(e.limitType==="F")e.S=Zp(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new js(i.field,o))}const r=e.endAt?new El(e.endAt.position,!e.endAt.before):null,s=e.startAt?new El(e.startAt.position,!e.startAt.before):null;e.S=Zp(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function JT(t,e,n){return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function No(t,e){return wl(Un(t),Un(e))&&t.limitType===e.limitType}function rg(t){return`${vl(Un(t))}|lt:${t.limitType}`}function Tl(t){return`Query(target=${FT(Un(t))}; limitType=${t.limitType})`}function ko(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!tg(n.startAt,Bs(n),r)||n.endAt&&tg(n.endAt,Bs(n),r))}(t,e)}function sg(t){return(e,n)=>{let r=!1;for(const s of Bs(t)){const i=ZT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZT(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Nr(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function og(t){return{integerValue:""+t}}function eb(t,e){return xT(e)?og(e):ig(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this._=void 0}}function tb(t,e,n){return t instanceof Do?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Hs?cg(t,e):t instanceof qs?lg(t,e):function(r,s){const i=ag(r,s),o=ug(i)+ug(r.C);return ml(i)&&ml(r.C)?og(o):ig(r.N,o)}(t,e)}function nb(t,e,n){return t instanceof Hs?cg(t,e):t instanceof qs?lg(t,e):n}function ag(t,e){return t instanceof Po?ml(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Do extends Oo{}class Hs extends Oo{constructor(e){super(),this.elements=e}}function cg(t,e){const n=hg(e);for(const r of t.elements)n.some(s=>Ot(s,r))||n.push(r);return{arrayValue:{values:n}}}class qs extends Oo{constructor(e){super(),this.elements=e}}function lg(t,e){let n=hg(e);for(const r of t.elements)n=n.filter(s=>!Ot(s,r));return{arrayValue:{values:n}}}class Po extends Oo{constructor(e,n){super(),this.N=e,this.C=n}}function ug(t){return Ae(t.integerValue||t.doubleValue)}function hg(t){return yl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Hs&&r instanceof Hs||n instanceof qs&&r instanceof qs?Sr(n.elements,r.elements,Ot):n instanceof Po&&r instanceof Po?Ot(n.C,r.C):n instanceof Do&&r instanceof Do}(t.transform,e.transform)}class sb{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mo{}function ib(t,e,n){t instanceof xo?function(r,s,i){const o=r.value.clone(),a=gg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(r,s,i){if(!Lo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=gg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(pg(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function bl(t,e,n){t instanceof xo?function(r,s,i){if(!Lo(r.precondition,s))return;const o=r.value.clone(),a=mg(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(dg(s),o).setHasLocalMutations()}(t,e,n):t instanceof kr?function(r,s,i){if(!Lo(r.precondition,s))return;const o=mg(r.fieldTransforms,i,s),a=s.data;a.setAll(pg(r)),a.setAll(o),s.convertToFoundDocument(dg(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Lo(r.precondition,s)&&s.convertToNoDocument(ie.min())}(t,e)}function ob(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ag(r.transform,s||null);i!=null&&(n==null&&(n=It.empty()),n.set(r.field,i))}return n||null}function fg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Sr(n,r,(s,i)=>rb(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function dg(t){return t.isFoundDocument()?t.version:ie.min()}class xo extends Mo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class kr extends Mo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function pg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gg(t,e,n){const r=new Map;me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,nb(o,a,n[s]))}return r}function mg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tb(i,o,e))}return r}class yg extends Mo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class ab extends Mo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ee;function lb(t){switch(t){default:return W();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function vg(t){if(t===void 0)return an("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ce.OK:return I.OK;case Ce.CANCELLED:return I.CANCELLED;case Ce.UNKNOWN:return I.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return I.INTERNAL;case Ce.UNAVAILABLE:return I.UNAVAILABLE;case Ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ce.NOT_FOUND:return I.NOT_FOUND;case Ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ce.ABORTED:return I.ABORTED;case Ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ce.DATA_LOSS:return I.DATA_LOSS;default:return W()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uo(this.root,e,this.comparator,!0)}}class Uo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ue.RED,this.left=s!=null?s:Ue.EMPTY,this.right=i!=null?i:Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new Ke(q.comparator);function Vn(){return ub}const hb=new Ke(q.comparator);function Sl(){return hb}const fb=new Ke(q.comparator);function db(){return fb}const pb=new Fe(q.comparator);function ve(...t){let e=pb;for(const n of t)e=e.add(n);return e}const gb=new Fe(oe);function _g(){return gb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ks.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fo(ie.min(),r,_g(),Vn(),ve())}}class Ks{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ks(He.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class Eg{constructor(e,n){this.targetId=e,this.O=n}}class Ig{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Tg{constructor(){this.F=0,this.M=Sg(),this.L=He.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ve(),n=ve(),r=ve();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Ks(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=Sg()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class mb{constructor(e){this.tt=e,this.et=new Map,this.nt=Vn(),this.st=bg(),this.it=new Fe(oe)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(_l(i))if(r===0){const o=new q(i.path);this.ct(n,o,qe.newNoDocument(o,ie.min()))}else me(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&_l(a.target)){const c=new q(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,qe.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=ve();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new Fo(e,n,this.it,this.nt,r);return this.nt=Vn(),this.st=bg(),this.it=new Fe(oe),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Tg,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Fe(oe),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Tg),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function bg(){return new Ke(q.comparator)}function Sg(){return new Ke(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wb{constructor(e,n){this.databaseId=e,this.D=n}}function $o(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ag(t,e){return t.D?e.toBase64():e.toUint8Array()}function _b(t,e){return $o(t,e.toTimestamp())}function jt(t){return me(!!t),ie.fromTimestamp(function(e){const n=ln(e);return new ut(n.seconds,n.nanos)}(t))}function Al(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cg(t){const e=Ie.fromString(t);return me(Pg(e)),e}function Cl(t,e){return Al(t.databaseId,e.path)}function Rl(t,e){const n=Cg(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Rg(n))}function Nl(t,e){return Al(t.databaseId,e)}function Eb(t){const e=Cg(t);return e.length===4?Ie.emptyPath():Rg(e)}function kl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rg(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ng(t,e,n){return{name:Cl(t,e),fields:n.value.mapValue.fields}}function Ib(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.D?(me(l===void 0||typeof l=="string"),He.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),He.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:vg(c.code);return new $(l,c.message||"")}(o);n=new Ig(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rl(t,r.document.name),i=jt(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=qe.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Vo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rl(t,r.document),i=r.readTime?jt(r.readTime):ie.min(),o=qe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rl(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new cb(s),o=r.targetId;n=new Eg(o,i)}}return n}function Tb(t,e){let n;if(e instanceof xo)n={update:Ng(t,e.key,e.value)};else if(e instanceof yg)n={delete:Cl(t,e.key)};else if(e instanceof kr)n={update:Ng(t,e.key,e.data),updateMask:Pb(e.fieldMask)};else{if(!(e instanceof ab))return W();n={verify:Cl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Do)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Po)return{fieldPath:i.field.canonicalString(),increment:o.C};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:_b(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function bb(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?jt(r.updateTime):jt(s);return i.isEqual(ie.min())&&(i=jt(s)),new sb(i,r.transformResults||[])}(n,e))):[]}function Sb(t,e){return{documents:[Nl(t,e.path)]}}function Ab(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Nl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(Xp(u.value))return{unaryFilter:{field:Or(u.field),op:"IS_NAN"}};if(Yp(u.value))return{unaryFilter:{field:Or(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Xp(u.value))return{unaryFilter:{field:Or(u.field),op:"IS_NOT_NAN"}};if(Yp(u.value))return{unaryFilter:{field:Or(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(u.field),op:kb(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Or(l.field),direction:Nb(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||Rr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Og(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Og(e.endAt)),n}function Cb(t){let e=Eb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=kg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new js(Dr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Rr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Dg(n.startAt));let l=null;return n.endAt&&(l=Dg(n.endAt)),GT(e,s,o,i,a,"F",c,l)}function Rb(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function kg(t){return t?t.unaryFilter!==void 0?[Db(t)]:t.fieldFilter!==void 0?[Ob(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>kg(e)).reduce((e,n)=>e.concat(n)):W():[]}function Og(t){return{before:t.before,values:t.position}}function Dg(t){const e=!!t.before,n=t.values||[];return new El(n,e)}function Nb(t){return yb[t]}function kb(t){return vb[t]}function Or(t){return{fieldPath:t.canonicalString()}}function Dr(t){return nt.fromServerFormat(t.fieldPath)}function Ob(t){return rt.create(Dr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function Db(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Dr(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Dr(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Dr(t.unaryFilter.field);return rt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Dr(t.unaryFilter.field);return rt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function Pb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Pg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Lb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ib(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&bl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&bl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ie.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Sr(this.mutations,e.mutations,(n,r)=>fg(n,r))&&Sr(this.baseMutations,e.baseMutations,(n,r)=>fg(n,r))}}class Ol{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length);let s=db();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ol(e,n,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,s,i=ie.min(),o=ie.min(),a=He.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.Wt=e}}function Fb(t){const e=Cb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?JT(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.Gt=new $b}addToCollectionParentIndex(e,n){return this.Gt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Gt.getEntries(n))}}class $b{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Pr(0)}static ie(){return new Pr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Lb)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Ar(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zp(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ie.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:qe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):XT(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new q(n)).next(r=>{let s=Sl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=Sl();return this.Ht.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new Ao(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=qe.newInvalidDocument(u),s=s.insert(u,h)),bl(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{ko(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=ve();for(const o of n)for(const a of o.mutations)a instanceof kr&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Dl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ie.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(Co(n)||Ro(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(Bp()<=se.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tl(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new Fe(sg(e));return n.forEach((s,i)=>{ko(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Bp()<=se.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Tl(n)),this.On.getDocumentsMatchingQuery(e,n,ie.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new Ke(oe),this.qn=new Gs(i=>vl(i),wl),this.Kn=ie.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Lg(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function qb(t,e,n,r){return new Hb(t,e,n,r)}async function Mg(t,e){const n=G(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Lg(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=ve();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return s.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function Kb(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const R=c.docVersions.get(g);me(R!==null),y.version.compareTo(R)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&l.addEntry(y,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function xg(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function zb(t,e){const n=G(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const g=h.withResumeToken(f,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(u,g),function(y,R,T){return me(R.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(i,g))}});let c=Vn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Wb(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ie.min())){const l=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=s,i))}function Wb(t,e,n,r,s){let i=ve();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Vn();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function Gb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Qb(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new $n(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Pl(t,e,n){const r=G(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zs(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function Ug(t,e,n){const r=G(t);let s=ie.min(),i=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.qn.get(l);return h!==void 0?O.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,Un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:ve())).next(a=>({documents:a,Gn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return O.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:jt(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Fb(r.bundledQuery),readTime:jt(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.Zn=new Fe(Pe.ts),this.es=new Fe(Pe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Pe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new q(new Ie([])),r=new Pe(n,e),s=new Pe(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new q(new Ie([])),r=new Pe(n,e),s=new Pe(n,e+1);let i=ve();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return q.comparator(e.key,n.key)||oe(e.ls,n.ls)}static ns(e,n){return oe(e.ls,n.ls)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Fe(Pe.ts)}checkEmpty(e){return O.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new xb(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new Pe(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return O.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return O.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),s=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(oe);return n.forEach(s=>{const i=new Pe(s,0),o=new Pe(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),O.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new q(i),0);let a=new Fe(oe);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),O.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return O.forEach(n.mutations,s=>{const i=new Pe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Pe(n,0),s=this.ds.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,O.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Ke(q.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.clone():qe.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():qe.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=Vn();const i=new q(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||ko(n,c)&&(s=s.insert(c.key,c.clone()))}return O.resolve(s)}Ts(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zb(this)}getSize(e){return O.resolve(this.size)}}class Zb extends jb{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.persistence=e,this.Es=new Gs(n=>vl(n),wl),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Is=0,this.As=new Ll,this.targetCount=0,this.Rs=Pr.se()}forEachTarget(e,n){return this.Es.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),O.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Pr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ce(n),O.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n){this.bs={},this.Le=new fl(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new eS(this),this.Ht=new Vb,this.He=function(r,s){return new Jb(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new Ub(n),this.Je=new Yb(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new Xb(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new nS(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return O.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class nS extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Ds=new Ll,this.Cs=null}static Ns(e){return new Ml(e)}get xs(){if(this.Cs)return this.Cs;throw W()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,r=>{const s=q.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return O.or([()=>O.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class Fg{constructor(){this.activeTargetIds=_g()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rS{constructor(){this.yi=new Fg,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);V("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>(V("RestConnection","Received: ",a),a),a=>{throw Hp("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+br,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=iS[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new CT;a.listenOnce(bT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ul.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),i(l);break;case ul.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new $(f,h.message))}else o(new $(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(I.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=IT(),i=TT(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new AT({})),this.Ui(o.initMessageHeaders,n),kf()||Df()||L_()||Pf()||M_()||Of()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");V("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new oS({vi:g=>{u?V("Connection","Not sending because WebChannel is closed:",g):(l||(V("Connection","Opening WebChannel transport."),c.open(),l=!0),V("Connection","WebChannel sending:",g),c.send(g))},Vi:()=>c.close()}),f=(g,y,R)=>{g.listen(y,T=>{try{R(T)}catch(N){setTimeout(()=>{throw N},0)}})};return f(c,Io.EventType.OPEN,()=>{u||V("Connection","WebChannel transport opened.")}),f(c,Io.EventType.CLOSE,()=>{u||(u=!0,V("Connection","WebChannel transport closed"),h.$i())}),f(c,Io.EventType.ERROR,g=>{u||(u=!0,Hp("Connection","WebChannel transport errored:",g),h.$i(new $(I.UNAVAILABLE,"The operation could not be completed")))}),f(c,Io.EventType.MESSAGE,g=>{var y;if(!u){const R=g.data[0];me(!!R);const T=R,N=T.error||((y=T[0])===null||y===void 0?void 0:y.error);if(N){V("Connection","WebChannel received error:",N);const F=N.status;let z=function(fe){const we=Ce[fe];if(we!==void 0)return vg(we)}(F),Q=N.message;z===void 0&&(z=I.INTERNAL,Q="Unknown error status: "+F+" with message "+N.message),u=!0,h.$i(new $(z,Q)),c.close()}else V("Connection","WebChannel received:",R),h.Oi(R)}}),f(i,ST.STAT_EVENT,g=>{g.stat===$p.PROXY?V("Connection","Detected buffering proxy"):g.stat===$p.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function xl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){return new wb(t,!0)}class $g{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,r,s,i,o,a){this.Oe=e,this.er=r,this.nr=s,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new $g(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const s=new $(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cS extends jg{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=Ib(this.N,e),r=function(s){if(!("targetChange"in s))return ie.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ie.min():i.readTime?jt(i.readTime):ie.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=kl(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=_l(a)?{documents:Sb(s,a)}:{query:Ab(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ag(s,i.resumeToken):i.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=$o(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=Rb(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=kl(this.N),n.removeTarget=e,this.mr(n)}}class lS extends jg{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=bb(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.Dr(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=kl(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tb(this.N,r))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new $(I.UNKNOWN,s.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new $(I.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class hS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(an(n),this.Mr=!1):V("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{jn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.Wr.add(4),await Qs(c),c.Hr.set("Unknown"),c.Wr.delete(4),await Bo(c)}(this))})}),this.Hr=new hS(r,s)}}async function Bo(t){if(jn(t))for(const e of t.Gr)await e(!0)}async function Qs(t){for(const e of t.Gr)await e(!1)}function Bg(t,e){const n=G(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Vl(n)?Fl(n):Lr(n).hr()&&Ul(n,e))}function Hg(t,e){const n=G(t),r=Lr(n);n.Qr.delete(e),r.hr()&&qg(n,e),n.Qr.size===0&&(r.hr()?r.wr():jn(n)&&n.Hr.set("Unknown"))}function Ul(t,e){t.Jr.Y(e.targetId),Lr(t).br(e)}function qg(t,e){t.Jr.Y(e),Lr(t).Pr(e)}function Fl(t){t.Jr=new mb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Lr(t).start(),t.Hr.Lr()}function Vl(t){return jn(t)&&!Lr(t).ur()&&t.Qr.size>0}function jn(t){return G(t).Wr.size===0}function Kg(t){t.Jr=void 0}async function dS(t){t.Qr.forEach((e,n)=>{Ul(t,e)})}async function pS(t,e){Kg(t),Vl(t)?(t.Hr.qr(e),Fl(t)):t.Hr.set("Unknown")}async function gS(t,e,n){if(t.Hr.set("Online"),e instanceof Ig&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(t,r)}else if(e instanceof Vo?t.Jr.rt(e):e instanceof Eg?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(ie.min()))try{const r=await xg(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Jr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Qr.get(c);l&&s.Qr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Qr.get(a);if(!c)return;s.Qr.set(a,c.withResumeToken(He.EMPTY_BYTE_STRING,c.snapshotVersion)),qg(s,a);const l=new $n(c.target,a,1,c.sequenceNumber);Ul(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ho(t,r)}}async function Ho(t,e,n){if(!zs(e))throw e;t.Wr.add(1),await Qs(t),t.Hr.set("Offline"),n||(n=()=>xg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Bo(t)})}function zg(t,e){return e().catch(n=>Ho(t,n,e))}async function qo(t){const e=G(t),n=un(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;mS(e);)try{const s=await Gb(e.localStore,r);if(s===null){e.jr.length===0&&n.wr();break}r=s.batchId,yS(e,s)}catch(s){await Ho(e,s)}Wg(e)&&Gg(e)}function mS(t){return jn(t)&&t.jr.length<10}function yS(t,e){t.jr.push(e);const n=un(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Wg(t){return jn(t)&&!un(t).ur()&&t.jr.length>0}function Gg(t){un(t).start()}async function vS(t){un(t).Nr()}async function wS(t){const e=un(t);for(const n of t.jr)e.Sr(n.mutations)}async function _S(t,e,n){const r=t.jr.shift(),s=Ol.from(r,e,n);await zg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qo(t)}async function ES(t,e){e&&un(t).Vr&&await async function(n,r){if(s=r.code,lb(s)&&s!==I.ABORTED){const i=n.jr.shift();un(n).dr(),await zg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await qo(n)}var s}(t,e),Wg(t)&&Gg(t)}async function IS(t,e){const n=G(t);e?(n.Wr.delete(2),await Bo(n)):e||(n.Wr.add(2),await Qs(n),n.Hr.set("Unknown"))}function Lr(t){return t.Yr||(t.Yr=function(e,n,r){const s=G(e);return s.$r(),new cS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:dS.bind(null,t),Ci:pS.bind(null,t),Rr:gS.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),Vl(t)?Fl(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Kg(t))})),t.Yr}function un(t){return t.Xr||(t.Xr=function(e,n,r){const s=G(e);return s.$r(),new lS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:vS.bind(null,t),Ci:ES.bind(null,t),Cr:wS.bind(null,t),Dr:_S.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await qo(t)):(await t.Xr.stop(),t.jr.length>0&&(V("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new $l(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jl(t,e){if(an("AsyncQueue",`${e}: ${t}`),zs(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Sl(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.Zr=new Ke(q.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):W():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class xr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new xr(e,n,Mr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&No(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.no=void 0,this.listeners=[]}}class bS{constructor(){this.queries=new Gs(e=>rg(e),No),this.onlineState="Unknown",this.so=new Set}}async function Yg(t,e){const n=G(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new TS),s)try{i.no=await n.onListen(r)}catch(o){const a=jl(o,`Initialization of query '${Tl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&Bl(n)}async function Xg(t,e){const n=G(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function SS(t,e){const n=G(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(s)&&(r=!0);o.no=s}}r&&Bl(n)}function AS(t,e,n){const r=G(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Bl(t){t.so.forEach(e=>{e.next()})}class Jg{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.key=e}}class em{constructor(e){this.key=e}}class CS{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=ve(),this.mutatedKeys=ve(),this.Io=sg(e),this.Ao=new Mr(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new Qg,s=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Co(this.query)&&s.size===this.query.limit?s.last():null,l=Ro(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=ko(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?y!==R&&(r.track({type:3,doc:g}),T=!0):this.vo(f,g)||(r.track({type:2,doc:g}),T=!0,(c&&this.Io(g,c)>0||l&&this.Io(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(g?(o=o.add(g),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Co(this.query)||Ro(this.query))for(;o.size>this.query.limit;){const u=Co(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ao:o,Po:r,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(f)}(l.type,u.type)||this.Io(l.doc,u.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,i.length!==0||c?{snapshot:new xr(this.query,e.Ao,s,i,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Qg,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=ve(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new em(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new Zg(r))}),n}No(e){this.po=e.Gn,this.Eo=ve();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return xr.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class RS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NS{constructor(e){this.key=e,this.ko=!1}}class kS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Gs(a=>rg(a),No),this.Fo=new Map,this.Mo=new Set,this.Lo=new Ke(q.comparator),this.Bo=new Map,this.Uo=new Ll,this.qo={},this.Ko=new Map,this.jo=Pr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function OS(t,e){const n=jS(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await Qb(n.localStore,Un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await DS(n,e,r,a==="current"),n.isPrimaryClient&&Bg(n.remoteStore,o)}return s}async function DS(t,e,n,r){t.Wo=(u,h,f)=>async function(g,y,R,T){let N=y.view.bo(R);N.Ln&&(N=await Ug(g.localStore,y.query,!1).then(({documents:Q})=>y.view.bo(Q,N)));const F=T&&T.targetChanges.get(y.targetId),z=y.view.applyChanges(N,g.isPrimaryClient,F);return om(g,y.targetId,z.Do),z.snapshot}(t,u,h,f);const s=await Ug(t.localStore,e,!0),i=new CS(e,s.Gn),o=i.bo(s.documents),a=Ks.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);om(t,n,c.Do);const l=new RS(e,n,i);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function PS(t,e){const n=G(t),r=n.Oo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!No(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Hg(n.remoteStore,r.targetId),Hl(n,r.targetId)}).catch(Ws)):(Hl(n,r.targetId),await Pl(n.localStore,r.targetId,!0))}async function LS(t,e,n){const r=BS(t);try{const s=await function(i,o){const a=G(i),c=ut.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const g=[];for(const y of o){const R=ob(y,u.get(y.key));R!=null&&g.push(new kr(y.key,R,Jp(R.value.mapValue),Fn.exists(!0)))}return a.In.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.qo[i.currentUser.toKey()];c||(c=new Ke(oe)),c=c.insert(o,a),i.qo[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ys(r,s.changes),await qo(r.remoteStore)}catch(s){const i=jl(s,"Failed to persist write");n.reject(i)}}async function tm(t,e){const n=G(t);try{const r=await zb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Bo.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?me(o.ko):s.removedDocuments.size>0&&(me(o.ko),o.ko=!1))}),await Ys(n,r,e)}catch(r){await Ws(r)}}function nm(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.io(o)&&(c=!0)}),c&&Bl(a)}(r.eventManager,e),s.length&&r.$o.Rr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MS(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Bo.get(e),i=s&&s.key;if(i){let o=new Ke(q.comparator);o=o.insert(i,qe.newNoDocument(i,ie.min()));const a=ve().add(i),c=new Fo(ie.min(),new Map,new Fe(oe),o,a);await tm(r,c),r.Lo=r.Lo.remove(i),r.Bo.delete(e),ql(r)}else await Pl(r.localStore,e,!1).then(()=>Hl(r,e,n)).catch(Ws)}async function xS(t,e){const n=G(t),r=e.batch.batchId;try{const s=await Kb(n.localStore,e);sm(n,r,null),rm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ys(n,s)}catch(s){await Ws(s)}}async function US(t,e,n){const r=G(t);try{const s=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);sm(r,e,n),rm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ys(r,s)}catch(s){await Ws(s)}}function rm(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function sm(t,e,n){const r=G(t);let s=r.qo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function Hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||im(t,r)})}function im(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Hg(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),ql(t))}function om(t,e,n){for(const r of n)r instanceof Zg?(t.Uo.addReference(r.key,e),FS(t,r)):r instanceof em?(V("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||im(t,r.key)):W()}function FS(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(V("SyncEngine","New document in limbo: "+n),t.Mo.add(r),ql(t))}function ql(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new q(Ie.fromString(e)),r=t.jo.next();t.Bo.set(r,new NS(n)),t.Lo=t.Lo.insert(n,r),Bg(t.remoteStore,new $n(Un(Il(n.path)),r,2,fl.T))}}async function Ys(t,e,n){const r=G(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Dl.kn(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!zs(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,i))}async function VS(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Mg(n.localStore,e);n.currentUser=e,function(s,i){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new $(I.CANCELLED,i))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ys(n,r.Wn)}}function $S(t,e){const n=G(t),r=n.Bo.get(e);if(r&&r.ko)return ve().add(r.key);{let s=ve();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function jS(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$S.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MS.bind(null,e),e.$o.Rr=SS.bind(null,e.eventManager),e.$o.Go=AS.bind(null,e.eventManager),e}function BS(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=US.bind(null,e),e}class HS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=jo(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return qb(this.persistence,new Bb,e.initialUser,this.N)}Jo(e){return new tS(Ml.Ns,this.N)}Ho(e){return new rS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VS.bind(null,this.syncEngine),await IS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bS}createDatastore(e){const n=jo(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new aS(s));var s;return function(i,o,a){return new uS(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>nm(this.syncEngine,a,0),o=Vg.bt()?new Vg:new sS,new fS(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new kS(r,s,i,o,a,c);return l&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);V("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Qs(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=qp.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{V("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=jl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zS(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function WS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GS(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=G(i);a.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const c=jn(a);a.Wr.add(3),await Qs(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await Bo(a)}(e.remoteStore,s)),t.onlineComponents=e}async function GS(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await zS(t,new HS)),t.offlineComponents}async function cm(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await WS(t,new qS)),t.onlineComponents}function QS(t){return cm(t).then(e=>e.syncEngine)}async function Kl(t){const e=await cm(t),n=e.eventManager;return n.onListen=OS.bind(null,e.syncEngine),n.onUnlisten=PS.bind(null,e.syncEngine),n}function YS(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new am({next:h=>{i.enqueueAndForget(()=>Xg(s,u)),h.fromCache&&a.source==="server"?c.reject(new $(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Jg(o,l,{includeMetadataChanges:!0,fo:!0});return Yg(s,u)}(await Kl(t),t.asyncQueue,e,n,r)),r.promise}class XS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Xs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JS(t,e,n,r){if(e===!0&&r===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hm(t){if(!q.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fm(t){if(q.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zl(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,JS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dm({}),this._settingsFrozen=!1,e instanceof Xs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(r.options.projectId)}(e))}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dm(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new NT;switch(n.type){case"gapi":const r=n.client;return me(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new DT(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(I.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lm.get(e);n&&(V("ComponentProvider","Removing Datastore"),lm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class Js{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Js(this.firestore,e,this._query)}}class fn extends Js{constructor(e,n,r){super(e,n,Il(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new q(e))}withConverter(e){return new fn(this.firestore,e,this._path)}}function HA(t,e,...n){if(t=ct(t),um("collection","path",e),t instanceof Wl){const r=Ie.fromString(e,...n);return fm(r),new fn(t,null,r)}{if(!(t instanceof ht||t instanceof fn))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return fm(r),new fn(t.firestore,null,r)}}function qA(t,e,...n){if(t=ct(t),arguments.length===1&&(e=qp.I()),um("doc","path",e),t instanceof Wl){const r=Ie.fromString(e,...n);return hm(r),new ht(t,null,new q(r))}{if(!(t instanceof ht||t instanceof fn))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return hm(r),new ht(t.firestore,t instanceof fn?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new $g(this,"async_queue_retry"),this.Rc=()=>{const n=xl();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=xl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new cn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!zs(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw an("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=$l.createAndSchedule(this,e,n,r,i=>this.Vc(i));return this.yc.push(s),s}bc(){this.Tc&&W()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function pm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ur extends Wl{constructor(e,n){super(e,n),this.type="firestore",this._queue=new ZS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gm(this),this._firestoreClient.terminate()}}function KA(t=Uf()){return sc(t,"firestore").getImmediate()}function Gl(t){return t._firestoreClient||gm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gm(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new XS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new KS(t._credentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fr(He.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fr(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=/^__.*__$/;class tA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}function ym(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Xl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.Mc(e),s}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return Ko(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(ym(this.kc)&&eA.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class nA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||jo(e)}jc(e,n,r,s=!1){return new Xl({kc:e,methodName:n,Kc:r,path:nt.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function rA(t){const e=t._freezeSettings(),n=jo(t._databaseId);return new nA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sA(t,e,n,r,s,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,s);Em("Data must be an object, but it was:",o,r);const a=wm(r,o);let c,l;if(i.merge)c=new dl(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=iA(e,h,n);if(!o.contains(f))throw new $(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);aA(u,f)||u.push(f)}c=new dl(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new tA(new It(a),c,l)}function vm(t,e){if(_m(t=ct(t)))return Em("Unsupported field value:",e,t),wm(t,e);if(t instanceof mm)return function(n,r){if(!ym(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=vm(o,r.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eb(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ut.fromDate(n);return{timestampValue:$o(r.N,s)}}if(n instanceof ut){const s=new ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$o(r.N,s)}}if(n instanceof Yl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fr)return{bytesValue:Ag(r.N,n._byteString)};if(n instanceof ht){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Al(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${zl(n)}`)}(t,e)}function wm(t,e){const n={};return zp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,(r,s)=>{const i=vm(s,e.Oc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _m(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Yl||t instanceof Fr||t instanceof ht||t instanceof mm)}function Em(t,e,n){if(!_m(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=zl(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function iA(t,e,n){if((e=ct(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return Im(t,e);throw Ko("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const oA=new RegExp("[~\\*/\\[\\]]");function Im(t,e,n){if(e.search(oA)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ql(...e.split("."))._internalPath}catch(r){throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(I.INVALID_ARGUMENT,a+t+c)}function aA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cA extends Tm{data(){return super.data()}}function bm(t,e){return typeof e=="string"?Im(t,e):e instanceof Ql?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sm extends Tm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zo extends Sm{data(e={}){return super.data(e)}}class Am{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zo(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new zo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new zo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:lA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){if(Ro(t)&&t.explicitOrderBy.length===0)throw new $(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{convertValue(e,n="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const r={};return Ar(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Yl(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fs(e));default:return null}}convertTimestamp(e){const n=ln(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);me(Pg(r));const s=new Xs(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Jl extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function zA(t){t=hn(t,Js);const e=hn(t.firestore,Ur),n=Gl(e),r=new Jl(e);return Cm(t._query),YS(n,t._query).then(s=>new Am(e,r,t,s))}function WA(t,e,n){t=hn(t,ht);const r=hn(t.firestore,Ur),s=hA(t.converter,e,n);return Rm(r,[sA(rA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Fn.none())])}function GA(t){return Rm(hn(t.firestore,Ur),[new yg(t._key,Fn.none())])}function QA(t,...e){var n,r,s;t=ct(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pm(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(pm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ht)l=hn(t.firestore,Ur),u=Il(t._key.path),c={next:h=>{e[o]&&e[o](fA(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=hn(t,Js);l=hn(h.firestore,Ur),u=h._query;const f=new Jl(l);c={next:g=>{e[o]&&e[o](new Am(l,f,h,g))},error:e[o+1],complete:e[o+2]},Cm(t._query)}return function(h,f,g,y){const R=new am(y),T=new Jg(f,R,g);return h.asyncQueue.enqueueAndForget(async()=>Yg(await Kl(h),T)),()=>{R.ec(),h.asyncQueue.enqueueAndForget(async()=>Xg(await Kl(h),T))}}(Gl(l),u,a,c)}function Rm(t,e){return function(n,r){const s=new cn;return n.asyncQueue.enqueueAndForget(async()=>LS(await QS(n),r,s)),s.promise}(Gl(t),e)}function fA(t,e,n){const r=n.docs.get(e._key),s=new Jl(t);return new Sm(t,s,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){br=n})(cs),as(new pr("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Ur(s,new kT(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Jt(jp,"3.2.0",t),Jt(jp,"3.2.0","esm2017")})();export{TA as A,kA as B,Yo as C,NA as D,OA as E,gt as F,bA as G,pA as H,SA as I,Hu as J,gA as K,mA as L,At as M,_y as N,KA as O,AA as P,_A as Q,hv as R,DA as S,yA as T,IA as U,RA as V,EA as a,yh as b,gh as c,Qe as d,uv as e,xA as f,MA as g,BA as h,UA as i,LA as j,FA as k,WA as l,jA as m,$A as n,fh as o,zA as p,HA as q,wA as r,VA as s,GA as t,PA as u,qA as v,Fu as w,vA as x,QA as y,CA as z};
