var xc=Object.defineProperty;var hs=Object.getOwnPropertySymbols;var Lc=Object.prototype.hasOwnProperty,Dc=Object.prototype.propertyIsEnumerable;var ps=(t,e,n)=>e in t?xc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gs=(t,e)=>{for(var n in e||(e={}))Lc.call(e,n)&&ps(t,n,e[n]);if(hs)for(var n of hs(e))Dc.call(e,n)&&ps(t,n,e[n]);return t};function jr(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Uc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fc=jr(Uc);function ms(t){return!!t||t===""}function Br(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ue(r)?Bc(r):Br(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ue(t))return t;if(ce(t))return t}}const $c=/;(?![^(]*\))/g,jc=/:(.+)/;function Bc(t){const e={};return t.split($c).forEach(n=>{if(n){const r=n.split(jc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Hr(t){let e="";if(ue(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=Hr(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Hc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ln(t[r],e[r]);return n}function ln(t,e){if(t===e)return!0;let n=ys(t),r=ys(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=D(t),r=D(e),n||r)return n&&r?Hc(t,e):!1;if(n=ce(t),r=ce(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ln(t[o],e[o]))return!1}}return String(t)===String(e)}function Vr(t,e){return t.findIndex(n=>ln(n,e))}const Pg=t=>t==null?"":D(t)||ce(t)&&(t.toString===Is||!j(t.toString))?JSON.stringify(t,_s,2):String(t),_s=(t,e)=>e&&e.__v_isRef?_s(t,e.value):Mt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:xt(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!D(e)&&!Es(e)?String(e):e,X={},Nt=[],Ne=()=>{},Vc=()=>!1,Wc=/^on[^a-z]/,Bn=t=>Wc.test(t),Wr=t=>t.startsWith("onUpdate:"),pe=Object.assign,vs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kc=Object.prototype.hasOwnProperty,z=(t,e)=>Kc.call(t,e),D=Array.isArray,Mt=t=>Hn(t)==="[object Map]",xt=t=>Hn(t)==="[object Set]",ys=t=>t instanceof Date,j=t=>typeof t=="function",ue=t=>typeof t=="string",Kr=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",bs=t=>ce(t)&&j(t.then)&&j(t.catch),Is=Object.prototype.toString,Hn=t=>Is.call(t),zc=t=>Hn(t).slice(8,-1),Es=t=>Hn(t)==="[object Object]",zr=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=jr(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qc=/-(\w)/g,Fe=Wn(t=>t.replace(qc,(e,n)=>n?n.toUpperCase():"")),Gc=/\B([A-Z])/g,Lt=Wn(t=>t.replace(Gc,"-$1").toLowerCase()),Kn=Wn(t=>t.charAt(0).toUpperCase()+t.slice(1)),qr=Wn(t=>t?`on${Kn(t)}`:""),un=(t,e)=>!Object.is(t,e),zn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ws;const Jc=()=>ws||(ws=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dt;const Jn=[];class Yc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dt&&(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Jn.push(this),dt=this)}off(){this.active&&(Jn.pop(),dt=Jn[Jn.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Xc(t,e){e=e||dt,e&&e.active&&e.effects.push(t)}const Gr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ts=t=>(t.w&Qe)>0,Cs=t=>(t.n&Qe)>0,Qc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qe},Zc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Ts(i)&&!Cs(i)?i.delete(t):e[n++]=i,i.w&=~Qe,i.n&=~Qe}e.length=n}},Jr=new WeakMap;let fn=0,Qe=1;const Yr=30,dn=[];let ht;const pt=Symbol(""),Xr=Symbol("");class Qr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Xc(this,r)}run(){if(!this.active)return this.fn();if(!dn.includes(this))try{return dn.push(ht=this),el(),Qe=1<<++fn,fn<=Yr?Qc(this):Ss(this),this.fn()}finally{fn<=Yr&&Zc(this),Qe=1<<--fn,gt(),dn.pop();const e=dn.length;ht=e>0?dn[e-1]:void 0}}stop(){this.active&&(Ss(this),this.onStop&&this.onStop(),this.active=!1)}}function Ss(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dt=!0;const Zr=[];function Ut(){Zr.push(Dt),Dt=!1}function el(){Zr.push(Dt),Dt=!0}function gt(){const t=Zr.pop();Dt=t===void 0?!0:t}function we(t,e,n){if(!Rs())return;let r=Jr.get(t);r||Jr.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Gr()),As(i)}function Rs(){return Dt&&ht!==void 0}function As(t,e){let n=!1;fn<=Yr?Cs(t)||(t.n|=Qe,n=!Ts(t)):n=!t.has(ht),n&&(t.add(ht),ht.deps.push(t))}function Ke(t,e,n,r,i,s){const o=Jr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&D(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":D(t)?zr(n)&&a.push(o.get("length")):(a.push(o.get(pt)),Mt(t)&&a.push(o.get(Xr)));break;case"delete":D(t)||(a.push(o.get(pt)),Mt(t)&&a.push(o.get(Xr)));break;case"set":Mt(t)&&a.push(o.get(pt));break}if(a.length===1)a[0]&&ei(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ei(Gr(c))}}function ei(t,e){for(const n of D(t)?t:[...t])(n!==ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const tl=jr("__proto__,__v_isRef,__isVue"),Os=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Kr)),nl=ti(),rl=ti(!1,!0),il=ti(!0),Ps=sl();function sl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let s=0,o=this.length;s<o;s++)we(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ut();const r=q(this)[e].apply(this,n);return gt(),r}}),t}function ti(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?Il:$s:e?Fs:Us).get(r))return r;const o=D(r);if(!t&&o&&z(Ps,i))return Reflect.get(Ps,i,s);const a=Reflect.get(r,i,s);return(Kr(i)?Os.has(i):tl(i))||(t||we(r,"get",i),e)?a:be(a)?!o||!zr(i)?a.value:a:ce(a)?t?js(a):Ft(a):a}}const ol=ks(),al=ks(!0);function ks(t=!1){return function(n,r,i,s){let o=n[r];if(!t&&(i=q(i),o=q(o),!D(n)&&be(o)&&!be(i)))return o.value=i,!0;const a=D(n)&&zr(r)?Number(r)<n.length:z(n,r),c=Reflect.set(n,r,i,s);return n===q(s)&&(a?un(i,o)&&Ke(n,"set",r,i):Ke(n,"add",r,i)),c}}function cl(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ke(t,"delete",e,void 0),r}function ll(t,e){const n=Reflect.has(t,e);return(!Kr(e)||!Os.has(e))&&we(t,"has",e),n}function ul(t){return we(t,"iterate",D(t)?"length":pt),Reflect.ownKeys(t)}const Ns={get:nl,set:ol,deleteProperty:cl,has:ll,ownKeys:ul},fl={get:il,set(t,e){return!0},deleteProperty(t,e){return!0}},dl=pe({},Ns,{get:rl,set:al}),ni=t=>t,Yn=t=>Reflect.getPrototypeOf(t);function Xn(t,e,n=!1,r=!1){t=t.__v_raw;const i=q(t),s=q(e);e!==s&&!n&&we(i,"get",e),!n&&we(i,"get",s);const{has:o}=Yn(i),a=r?ni:n?si:hn;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Qn(t,e=!1){const n=this.__v_raw,r=q(n),i=q(t);return t!==i&&!e&&we(r,"has",t),!e&&we(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Zn(t,e=!1){return t=t.__v_raw,!e&&we(q(t),"iterate",pt),Reflect.get(t,"size",t)}function Ms(t){t=q(t);const e=q(this);return Yn(e).has.call(e,t)||(e.add(t),Ke(e,"add",t,t)),this}function xs(t,e){e=q(e);const n=q(this),{has:r,get:i}=Yn(n);let s=r.call(n,t);s||(t=q(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?un(e,o)&&Ke(n,"set",t,e):Ke(n,"add",t,e),this}function Ls(t){const e=q(this),{has:n,get:r}=Yn(e);let i=n.call(e,t);i||(t=q(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Ke(e,"delete",t,void 0),s}function Ds(){const t=q(this),e=t.size!==0,n=t.clear();return e&&Ke(t,"clear",void 0,void 0),n}function er(t,e){return function(r,i){const s=this,o=s.__v_raw,a=q(o),c=e?ni:t?si:hn;return!t&&we(a,"iterate",pt),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function tr(t,e,n){return function(...r){const i=this.__v_raw,s=q(i),o=Mt(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?ni:e?si:hn;return!e&&we(s,"iterate",c?Xr:pt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function hl(){const t={get(s){return Xn(this,s)},get size(){return Zn(this)},has:Qn,add:Ms,set:xs,delete:Ls,clear:Ds,forEach:er(!1,!1)},e={get(s){return Xn(this,s,!1,!0)},get size(){return Zn(this)},has:Qn,add:Ms,set:xs,delete:Ls,clear:Ds,forEach:er(!1,!0)},n={get(s){return Xn(this,s,!0)},get size(){return Zn(this,!0)},has(s){return Qn.call(this,s,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:er(!0,!1)},r={get(s){return Xn(this,s,!0,!0)},get size(){return Zn(this,!0)},has(s){return Qn.call(this,s,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tr(s,!1,!1),n[s]=tr(s,!0,!1),e[s]=tr(s,!1,!0),r[s]=tr(s,!0,!0)}),[t,n,e,r]}const[pl,gl,ml,_l]=hl();function ri(t,e){const n=e?t?_l:ml:t?gl:pl;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(z(n,i)&&i in r?n:r,i,s)}const vl={get:ri(!1,!1)},yl={get:ri(!1,!0)},bl={get:ri(!0,!1)},Us=new WeakMap,Fs=new WeakMap,$s=new WeakMap,Il=new WeakMap;function El(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wl(t){return t.__v_skip||!Object.isExtensible(t)?0:El(zc(t))}function Ft(t){return t&&t.__v_isReadonly?t:ii(t,!1,Ns,vl,Us)}function Tl(t){return ii(t,!1,dl,yl,Fs)}function js(t){return ii(t,!0,fl,bl,$s)}function ii(t,e,n,r,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=wl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function $t(t){return Bs(t)?$t(t.__v_raw):!!(t&&t.__v_isReactive)}function Bs(t){return!!(t&&t.__v_isReadonly)}function Hs(t){return $t(t)||Bs(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Vs(t){return qn(t,"__v_skip",!0),t}const hn=t=>ce(t)?Ft(t):t,si=t=>ce(t)?js(t):t;function Ws(t){Rs()&&(t=q(t),t.dep||(t.dep=Gr()),As(t.dep))}function Ks(t,e){t=q(t),t.dep&&ei(t.dep)}function be(t){return Boolean(t&&t.__v_isRef===!0)}function Cl(t){return zs(t,!1)}function Sl(t){return zs(t,!0)}function zs(t,e){return be(t)?t:new Rl(t,e)}class Rl{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:hn(e)}get value(){return Ws(this),this._value}set value(e){e=this._shallow?e:q(e),un(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:hn(e),Ks(this))}}function pn(t){return be(t)?t.value:t}const Al={get:(t,e,n)=>pn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return be(i)&&!be(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function qs(t){return $t(t)?t:new Proxy(t,Al)}class Ol{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Qr(e,()=>{this._dirty||(this._dirty=!0,Ks(this))}),this.__v_isReadonly=r}get value(){const e=q(this);return Ws(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(t,e){let n,r;const i=j(t);return i?(n=t,r=Ne):(n=t.get,r=t.set),new Ol(n,r,i||!r)}Promise.resolve();function Pl(t,e,...n){const r=t.vnode.props||X;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||X;h?i=n.map(m=>m.trim()):d&&(i=n.map(Gn))}let a,c=r[a=qr(e)]||r[a=qr(Fe(e))];!c&&s&&(c=r[a=qr(Lt(e))]),c&&Pe(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(l,t,6,i)}}function Gs(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Gs(l,e,!0);u&&(a=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(D(s)?s.forEach(c=>o[c]=null):pe(o,s),r.set(t,o),o)}function oi(t,e){return!t||!Bn(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Lt(e))||z(t,e))}let Te=null,nr=null;function rr(t){const e=Te;return Te=t,nr=t&&t.type.__scopeId||null,e}function kg(t){nr=t}function Ng(){nr=null}const Mg=t=>Js;function Js(t,e=Te,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Co(-1);const s=rr(e),o=t(...i);return rr(s),r._d&&Co(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ai(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:m,ctx:C,inheritAttrs:x}=t;let R,A;const L=rr(t);try{if(n.shapeFlag&4){const W=i||r;R=Be(u.call(W,W,d,s,m,h,C)),A=c}else{const W=e;R=Be(W.length>1?W(s,{attrs:c,slots:a,emit:l}):W(s,null)),A=e.props?c:kl(c)}}catch(W){gn.length=0,gr(W,t,1),R=ye(Me)}let H=R;if(A&&x!==!1){const W=Object.keys(A),{shapeFlag:ie}=H;W.length&&ie&(1|6)&&(o&&W.some(Wr)&&(A=Nl(A,o)),H=jt(H,A))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),R=H,rr(L),R}const kl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bn(n))&&((e||(e={}))[n]=t[n]);return e},Nl=(t,e)=>{const n={};for(const r in t)(!Wr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ml(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ys(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!oi(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ys(r,o,l):!0:!!o;return!1}function Ys(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!oi(n,s))return!0}return!1}function xl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ll=t=>t.__isSuspense;function Dl(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Nu(t)}function ir(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function et(t,e,n=!1){const r=fe||Te;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(r.proxy):e}}function Ul(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return no(()=>{t.isMounted=!0}),ro(()=>{t.isUnmounting=!0}),t}const Ae=[Function,Array],Fl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ae,onEnter:Ae,onAfterEnter:Ae,onEnterCancelled:Ae,onBeforeLeave:Ae,onLeave:Ae,onAfterLeave:Ae,onLeaveCancelled:Ae,onBeforeAppear:Ae,onAppear:Ae,onAfterAppear:Ae,onAppearCancelled:Ae},setup(t,{slots:e}){const n=Iu(),r=Ul();let i;return()=>{const s=e.default&&Zs(e.default(),!0);if(!s||!s.length)return;const o=q(t),{mode:a}=o,c=s[0];if(r.isLeaving)return li(c);const l=Qs(c);if(!l)return li(c);const u=ci(l,o,r,n);ui(l,u);const d=n.subTree,h=d&&Qs(d);let m=!1;const{getTransitionKey:C}=l.type;if(C){const x=C();i===void 0?i=x:x!==i&&(i=x,m=!0)}if(h&&h.type!==Me&&(!yt(l,h)||m)){const x=ci(h,o,r,n);if(ui(h,x),a==="out-in")return r.isLeaving=!0,x.afterLeave=()=>{r.isLeaving=!1,n.update()},li(c);a==="in-out"&&l.type!==Me&&(x.delayLeave=(R,A,L)=>{const H=Xs(r,h);H[String(h.key)]=h,R._leaveCb=()=>{A(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return c}}},$l=Fl;function Xs(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ci(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:C,onBeforeAppear:x,onAppear:R,onAfterAppear:A,onAppearCancelled:L}=e,H=String(t.key),W=Xs(n,t),ie=(V,ae)=>{V&&Pe(V,r,9,ae)},oe={mode:s,persisted:o,beforeEnter(V){let ae=a;if(!n.isMounted)if(i)ae=x||a;else return;V._leaveCb&&V._leaveCb(!0);const Z=W[H];Z&&yt(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),ie(ae,[V])},enter(V){let ae=c,Z=l,de=u;if(!n.isMounted)if(i)ae=R||c,Z=A||l,de=L||u;else return;let he=!1;const me=V._enterCb=Xe=>{he||(he=!0,Xe?ie(de,[V]):ie(Z,[V]),oe.delayedLeave&&oe.delayedLeave(),V._enterCb=void 0)};ae?(ae(V,me),ae.length<=1&&me()):me()},leave(V,ae){const Z=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return ae();ie(d,[V]);let de=!1;const he=V._leaveCb=me=>{de||(de=!0,ae(),me?ie(C,[V]):ie(m,[V]),V._leaveCb=void 0,W[Z]===t&&delete W[Z])};W[Z]=t,h?(h(V,he),h.length<=1&&he()):he()},clone(V){return ci(V,e,n,r)}};return oe}function li(t){if(sr(t))return t=jt(t),t.children=null,t}function Qs(t){return sr(t)?t.children?t.children[0]:void 0:t}function ui(t,e){t.shapeFlag&6&&t.component?ui(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zs(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===Oe?(s.patchFlag&128&&r++,n=n.concat(Zs(s.children,e))):(e||s.type!==Me)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function eo(t){return j(t)?{setup:t,name:t.name}:t}const fi=t=>!!t.type.__asyncLoader,sr=t=>t.type.__isKeepAlive;function jl(t,e){to(t,"a",e)}function Bl(t,e){to(t,"da",e)}function to(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}t()});if(or(e,r,n),n){let i=n.parent;for(;i&&i.parent;)sr(i.parent.vnode)&&Hl(r,e,n,i),i=i.parent}}function Hl(t,e,n,r){const i=or(e,t,r,!0);io(()=>{vs(r[e],i)},n)}function or(t,e,n=fe,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),Bt(n);const a=Pe(e,n,t,o);return bt(),gt(),a});return r?i.unshift(s):i.push(s),s}}const ze=t=>(e,n=fe)=>(!pr||t==="sp")&&or(t,e,n),Vl=ze("bm"),no=ze("m"),Wl=ze("bu"),Kl=ze("u"),ro=ze("bum"),io=ze("um"),zl=ze("sp"),ql=ze("rtg"),Gl=ze("rtc");function Jl(t,e=fe){or("ec",t,e)}let di=!0;function Yl(t){const e=ao(t),n=t.proxy,r=t.ctx;di=!1,e.beforeCreate&&so(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:C,activated:x,deactivated:R,beforeDestroy:A,beforeUnmount:L,destroyed:H,unmounted:W,render:ie,renderTracked:oe,renderTriggered:V,errorCaptured:ae,serverPrefetch:Z,expose:de,inheritAttrs:he,components:me,directives:Xe,filters:At}=e;if(l&&Xl(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const G=o[ee];j(G)&&(r[ee]=G.bind(n))}if(i){const ee=i.call(n,n);ce(ee)&&(t.data=Ft(ee))}if(di=!0,s)for(const ee in s){const G=s[ee],Se=j(G)?G.bind(n,n):j(G.get)?G.get.bind(n,n):Ne,Pt=!j(G)&&j(G.set)?G.set.bind(n):Ne,We=$e({get:Se,set:Pt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>We.value,set:De=>We.value=De})}if(a)for(const ee in a)oo(a[ee],r,n,ee);if(c){const ee=j(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(G=>{ir(G,ee[G])})}u&&so(u,t,"c");function le(ee,G){D(G)?G.forEach(Se=>ee(Se.bind(n))):G&&ee(G.bind(n))}if(le(Vl,d),le(no,h),le(Wl,m),le(Kl,C),le(jl,x),le(Bl,R),le(Jl,ae),le(Gl,oe),le(ql,V),le(ro,L),le(io,W),le(zl,Z),D(de))if(de.length){const ee=t.exposed||(t.exposed={});de.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:Se=>n[G]=Se})})}else t.exposed||(t.exposed={});ie&&t.render===Ne&&(t.render=ie),he!=null&&(t.inheritAttrs=he),me&&(t.components=me),Xe&&(t.directives=Xe)}function Xl(t,e,n=Ne,r=!1){D(t)&&(t=hi(t));for(const i in t){const s=t[i];let o;ce(s)?"default"in s?o=et(s.from||i,s.default,!0):o=et(s.from||i):o=et(s),be(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function so(t,e,n){Pe(D(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function oo(t,e,n,r){const i=r.includes(".")?Vo(n,r):()=>n[r];if(ue(t)){const s=e[t];j(s)&&Wt(i,s)}else if(j(t))Wt(i,t.bind(n));else if(ce(t))if(D(t))t.forEach(s=>oo(s,e,n,r));else{const s=j(t.handler)?t.handler.bind(n):e[t.handler];j(s)&&Wt(i,s,t)}}function ao(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>ar(c,l,o,!0)),ar(c,e,o)),s.set(e,c),c}function ar(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ar(t,s,n,!0),i&&i.forEach(o=>ar(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ql[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ql={data:co,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:mt,directives:mt,watch:eu,provide:co,inject:Zl};function co(t,e){return e?t?function(){return pe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Zl(t,e){return mt(hi(t),hi(e))}function hi(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function mt(t,e){return t?pe(pe(Object.create(null),t),e):e}function eu(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function tu(t,e,n,r=!1){const i={},s={};qn(s,fr,1),t.propsDefaults=Object.create(null),lo(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Tl(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function nu(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=q(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const m=e[h];if(c)if(z(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const C=Fe(h);i[C]=pi(c,a,C,m,t,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{lo(t,e,i,s)&&(l=!0);let u;for(const d in a)(!e||!z(e,d)&&((u=Lt(d))===d||!z(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=pi(c,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!z(e,d))&&(delete s[d],l=!0)}l&&Ke(t,"set","$attrs")}function lo(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vn(c))continue;const l=e[c];let u;i&&z(i,u=Fe(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:oi(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(s){const c=q(n),l=a||X;for(let u=0;u<s.length;u++){const d=s[u];n[d]=pi(i,c,d,l[d],t,!z(l,d))}}return o}function pi(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&j(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Bt(i),r=l[n]=c.call(null,e),bt())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Lt(n))&&(r=!0))}return r}function uo(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!j(t)){const u=d=>{c=!0;const[h,m]=uo(d,e,!0);pe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,Nt),Nt;if(D(s))for(let u=0;u<s.length;u++){const d=Fe(s[u]);fo(d)&&(o[d]=X)}else if(s)for(const u in s){const d=Fe(u);if(fo(d)){const h=s[u],m=o[d]=D(h)||j(h)?{type:h}:h;if(m){const C=go(Boolean,m.type),x=go(String,m.type);m[0]=C>-1,m[1]=x<0||C<x,(C>-1||z(m,"default"))&&a.push(d)}}}const l=[o,a];return r.set(t,l),l}function fo(t){return t[0]!=="$"}function ho(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function po(t,e){return ho(t)===ho(e)}function go(t,e){return D(e)?e.findIndex(n=>po(n,t)):j(e)&&po(e,t)?0:-1}const mo=t=>t[0]==="_"||t==="$stable",gi=t=>D(t)?t.map(Be):[Be(t)],ru=(t,e,n)=>{const r=Js((...i)=>gi(e(...i)),n);return r._c=!1,r},_o=(t,e,n)=>{const r=t._ctx;for(const i in t){if(mo(i))continue;const s=t[i];if(j(s))e[i]=ru(i,s,r);else if(s!=null){const o=gi(s);e[i]=()=>o}}},vo=(t,e)=>{const n=gi(e);t.slots.default=()=>n},iu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),qn(e,"_",n)):_o(e,t.slots={})}else t.slots={},e&&vo(t,e);qn(t.slots,fr,1)},su=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(pe(i,e),!n&&a===1&&delete i._):(s=!e.$stable,_o(e,i)),o=e}else e&&(vo(t,e),o={default:1});if(s)for(const a in i)!mo(a)&&!(a in o)&&delete i[a]};function xg(t,e){const n=Te;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=X]=e[s];j(o)&&(o={mounted:o,updated:o}),o.deep&&It(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function _t(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ut(),Pe(c,n,8,[t.el,a,t,e]),gt())}}function yo(){return{app:null,config:{isNativeTag:Vc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ou=0;function au(t,e){return function(r,i=null){i!=null&&!ce(i)&&(i=null);const s=yo(),o=new Set;let a=!1;const c=s.app={_uid:ou++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:xu,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,d){if(!a){const h=ye(r,i);return h.appContext=s,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Ii(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}const ve=Dl;function cu(t){return lu(t)}function lu(t,e){const n=Jc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Ne,cloneNode:C,insertStaticContent:x}=t,R=(f,p,g,y=null,v=null,w=null,S=!1,I=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!yt(f,p)&&(y=k(f),Re(f,v,w,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=p;switch(b){case vi:A(f,p,g,y);break;case Me:L(f,p,g,y);break;case cr:f==null&&H(p,g,y,S);break;case Oe:Xe(f,p,g,y,v,w,S,I,E);break;default:O&1?oe(f,p,g,y,v,w,S,I,E):O&6?At(f,p,g,y,v,w,S,I,E):(O&64||O&128)&&b.process(f,p,g,y,v,w,S,I,E,te)}N!=null&&v&&mi(N,f&&f.ref,w,p||f,!p)},A=(f,p,g,y)=>{if(f==null)r(p.el=a(p.children),g,y);else{const v=p.el=f.el;p.children!==f.children&&l(v,p.children)}},L=(f,p,g,y)=>{f==null?r(p.el=c(p.children||""),g,y):p.el=f.el},H=(f,p,g,y)=>{[f.el,f.anchor]=x(f.children,p,g,y)},W=({el:f,anchor:p},g,y)=>{let v;for(;f&&f!==p;)v=h(f),r(f,g,y),f=v;r(p,g,y)},ie=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},oe=(f,p,g,y,v,w,S,I,E)=>{S=S||p.type==="svg",f==null?V(p,g,y,v,w,S,I,E):de(f,p,v,w,S,I,E)},V=(f,p,g,y,v,w,S,I)=>{let E,b;const{type:N,props:O,shapeFlag:M,transition:F,patchFlag:K,dirs:se}=f;if(f.el&&C!==void 0&&K===-1)E=f.el=C(f.el);else{if(E=f.el=o(f.type,w,O&&O.is,O),M&8?u(E,f.children):M&16&&Z(f.children,E,null,y,v,w&&N!=="foreignObject",S,I),se&&_t(f,null,y,"created"),O){for(const re in O)re!=="value"&&!Vn(re)&&s(E,re,null,O[re],w,f.children,y,v,T);"value"in O&&s(E,"value",null,O.value),(b=O.onVnodeBeforeMount)&&je(b,y,f)}ae(E,f,f.scopeId,S,y)}se&&_t(f,null,y,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&F&&!F.persisted;Y&&F.beforeEnter(E),r(E,p,g),((b=O&&O.onVnodeMounted)||Y||se)&&ve(()=>{b&&je(b,y,f),Y&&F.enter(E),se&&_t(f,null,y,"mounted")},v)},ae=(f,p,g,y,v)=>{if(g&&m(f,g),y)for(let w=0;w<y.length;w++)m(f,y[w]);if(v){let w=v.subTree;if(p===w){const S=v.vnode;ae(f,S,S.scopeId,S.slotScopeIds,v.parent)}}},Z=(f,p,g,y,v,w,S,I,E=0)=>{for(let b=E;b<f.length;b++){const N=f[b]=I?tt(f[b]):Be(f[b]);R(null,N,p,g,y,v,w,S,I)}},de=(f,p,g,y,v,w,S)=>{const I=p.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:N}=p;E|=f.patchFlag&16;const O=f.props||X,M=p.props||X;let F;(F=M.onVnodeBeforeUpdate)&&je(F,g,p,f),N&&_t(p,f,g,"beforeUpdate");const K=v&&p.type!=="foreignObject";if(b?he(f.dynamicChildren,b,I,g,y,K,w):S||Se(f,p,I,null,g,y,K,w,!1),E>0){if(E&16)me(I,p,O,M,g,y,v);else if(E&2&&O.class!==M.class&&s(I,"class",null,M.class,v),E&4&&s(I,"style",O.style,M.style,v),E&8){const se=p.dynamicProps;for(let Y=0;Y<se.length;Y++){const re=se[Y],ke=O[re],kt=M[re];(kt!==ke||re==="value")&&s(I,re,ke,kt,v,f.children,g,y,T)}}E&1&&f.children!==p.children&&u(I,p.children)}else!S&&b==null&&me(I,p,O,M,g,y,v);((F=M.onVnodeUpdated)||N)&&ve(()=>{F&&je(F,g,p,f),N&&_t(p,f,g,"updated")},y)},he=(f,p,g,y,v,w,S)=>{for(let I=0;I<p.length;I++){const E=f[I],b=p[I],N=E.el&&(E.type===Oe||!yt(E,b)||E.shapeFlag&(6|64))?d(E.el):g;R(E,b,N,null,y,v,w,S,!0)}},me=(f,p,g,y,v,w,S)=>{if(g!==y){for(const I in y){if(Vn(I))continue;const E=y[I],b=g[I];E!==b&&I!=="value"&&s(f,I,b,E,S,p.children,v,w,T)}if(g!==X)for(const I in g)!Vn(I)&&!(I in y)&&s(f,I,g[I],null,S,p.children,v,w,T);"value"in y&&s(f,"value",g.value,y.value)}},Xe=(f,p,g,y,v,w,S,I,E)=>{const b=p.el=f?f.el:a(""),N=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:F}=p;F&&(I=I?I.concat(F):F),f==null?(r(b,g,y),r(N,g,y),Z(p.children,g,N,v,w,S,I,E)):O>0&&O&64&&M&&f.dynamicChildren?(he(f.dynamicChildren,M,g,v,w,S,I),(p.key!=null||v&&p===v.subTree)&&bo(f,p,!0)):Se(f,p,g,N,v,w,S,I,E)},At=(f,p,g,y,v,w,S,I,E)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,g,y,S,E):Ot(p,g,y,v,w,S,E):le(f,p,E)},Ot=(f,p,g,y,v,w,S)=>{const I=f.component=bu(f,y,v);if(sr(f)&&(I.ctx.renderer=te),Eu(I),I.asyncDep){if(v&&v.registerDep(I,ee),!f.el){const E=I.subTree=ye(Me);L(null,E,p,g)}return}ee(I,f,p,g,v,w,S)},le=(f,p,g)=>{const y=p.component=f.component;if(Ml(f,p,g))if(y.asyncDep&&!y.asyncResolved){G(y,p,g);return}else y.next=p,Pu(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ee=(f,p,g,y,v,w,S)=>{const I=()=>{if(f.isMounted){let{next:N,bu:O,u:M,parent:F,vnode:K}=f,se=N,Y;E.allowRecurse=!1,N?(N.el=K.el,G(f,N,S)):N=K,O&&zn(O),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&je(Y,F,N,K),E.allowRecurse=!0;const re=ai(f),ke=f.subTree;f.subTree=re,R(ke,re,d(ke.el),k(ke),f,v,w),N.el=re.el,se===null&&xl(f,re.el),M&&ve(M,v),(Y=N.props&&N.props.onVnodeUpdated)&&ve(()=>je(Y,F,N,K),v)}else{let N;const{el:O,props:M}=p,{bm:F,m:K,parent:se}=f,Y=fi(p);if(E.allowRecurse=!1,F&&zn(F),!Y&&(N=M&&M.onVnodeBeforeMount)&&je(N,se,p),E.allowRecurse=!0,O&&$){const re=()=>{f.subTree=ai(f),$(O,f.subTree,f,v,null)};Y?p.type.__asyncLoader().then(()=>!f.isUnmounted&&re()):re()}else{const re=f.subTree=ai(f);R(null,re,g,y,f,v,w),p.el=re.el}if(K&&ve(K,v),!Y&&(N=M&&M.onVnodeMounted)){const re=p;ve(()=>je(N,se,re),v)}p.shapeFlag&256&&f.a&&ve(f.a,v),f.isMounted=!0,p=g=y=null}},E=new Qr(I,()=>Uo(f.update),f.scope),b=f.update=E.run.bind(E);b.id=f.uid,E.allowRecurse=b.allowRecurse=!0,b()},G=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,nu(f,p.props,y,g),su(f,p.children,g),Ut(),Ci(void 0,f.update),gt()},Se=(f,p,g,y,v,w,S,I,E=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,O=p.children,{patchFlag:M,shapeFlag:F}=p;if(M>0){if(M&128){We(b,O,g,y,v,w,S,I,E);return}else if(M&256){Pt(b,O,g,y,v,w,S,I,E);return}}F&8?(N&16&&T(b,v,w),O!==b&&u(g,O)):N&16?F&16?We(b,O,g,y,v,w,S,I,E):T(b,v,w,!0):(N&8&&u(g,""),F&16&&Z(O,g,y,v,w,S,I,E))},Pt=(f,p,g,y,v,w,S,I,E)=>{f=f||Nt,p=p||Nt;const b=f.length,N=p.length,O=Math.min(b,N);let M;for(M=0;M<O;M++){const F=p[M]=E?tt(p[M]):Be(p[M]);R(f[M],F,g,null,v,w,S,I,E)}b>N?T(f,v,w,!0,!1,O):Z(p,g,y,v,w,S,I,E,O)},We=(f,p,g,y,v,w,S,I,E)=>{let b=0;const N=p.length;let O=f.length-1,M=N-1;for(;b<=O&&b<=M;){const F=f[b],K=p[b]=E?tt(p[b]):Be(p[b]);if(yt(F,K))R(F,K,g,null,v,w,S,I,E);else break;b++}for(;b<=O&&b<=M;){const F=f[O],K=p[M]=E?tt(p[M]):Be(p[M]);if(yt(F,K))R(F,K,g,null,v,w,S,I,E);else break;O--,M--}if(b>O){if(b<=M){const F=M+1,K=F<N?p[F].el:y;for(;b<=M;)R(null,p[b]=E?tt(p[b]):Be(p[b]),g,K,v,w,S,I,E),b++}}else if(b>M)for(;b<=O;)Re(f[b],v,w,!0),b++;else{const F=b,K=b,se=new Map;for(b=K;b<=M;b++){const Ee=p[b]=E?tt(p[b]):Be(p[b]);Ee.key!=null&&se.set(Ee.key,b)}let Y,re=0;const ke=M-K+1;let kt=!1,us=0;const cn=new Array(ke);for(b=0;b<ke;b++)cn[b]=0;for(b=F;b<=O;b++){const Ee=f[b];if(re>=ke){Re(Ee,v,w,!0);continue}let Ue;if(Ee.key!=null)Ue=se.get(Ee.key);else for(Y=K;Y<=M;Y++)if(cn[Y-K]===0&&yt(Ee,p[Y])){Ue=Y;break}Ue===void 0?Re(Ee,v,w,!0):(cn[Ue-K]=b+1,Ue>=us?us=Ue:kt=!0,R(Ee,p[Ue],g,null,v,w,S,I,E),re++)}const fs=kt?uu(cn):Nt;for(Y=fs.length-1,b=ke-1;b>=0;b--){const Ee=K+b,Ue=p[Ee],ds=Ee+1<N?p[Ee+1].el:y;cn[b]===0?R(null,Ue,g,ds,v,w,S,I,E):kt&&(Y<0||b!==fs[Y]?De(Ue,g,ds,2):Y--)}}},De=(f,p,g,y,v=null)=>{const{el:w,type:S,transition:I,children:E,shapeFlag:b}=f;if(b&6){De(f.component.subTree,p,g,y);return}if(b&128){f.suspense.move(p,g,y);return}if(b&64){S.move(f,p,g,te);return}if(S===Oe){r(w,p,g);for(let O=0;O<E.length;O++)De(E[O],p,g,y);r(f.anchor,p,g);return}if(S===cr){W(f,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(w),r(w,p,g),ve(()=>I.enter(w),v);else{const{leave:O,delayLeave:M,afterLeave:F}=I,K=()=>r(w,p,g),se=()=>{O(w,()=>{K(),F&&F()})};M?M(w,K,se):se()}else r(w,p,g)},Re=(f,p,g,y=!1,v=!1)=>{const{type:w,props:S,ref:I,children:E,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:M}=f;if(I!=null&&mi(I,null,g,f,!0),N&256){p.ctx.deactivate(f);return}const F=N&1&&M,K=!fi(f);let se;if(K&&(se=S&&S.onVnodeBeforeUnmount)&&je(se,p,f),N&6)P(f.component,g,y);else{if(N&128){f.suspense.unmount(g,y);return}F&&_t(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,v,te,y):b&&(w!==Oe||O>0&&O&64)?T(b,p,g,!1,!0):(w===Oe&&O&(128|256)||!v&&N&16)&&T(E,p,g),y&&$r(f)}(K&&(se=S&&S.onVnodeUnmounted)||F)&&ve(()=>{se&&je(se,p,f),F&&_t(f,null,p,"unmounted")},g)},$r=f=>{const{type:p,el:g,anchor:y,transition:v}=f;if(p===Oe){_(g,y);return}if(p===cr){ie(f);return}const w=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:I}=v,E=()=>S(g,w);I?I(f.el,w,E):E()}else w()},_=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},P=(f,p,g)=>{const{bum:y,scope:v,update:w,subTree:S,um:I}=f;y&&zn(y),v.stop(),w&&(w.active=!1,Re(S,f,p,g)),I&&ve(I,p),ve(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},T=(f,p,g,y=!1,v=!1,w=0)=>{for(let S=w;S<f.length;S++)Re(f[S],p,g,y,v)},k=f=>f.shapeFlag&6?k(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),J=(f,p,g)=>{f==null?p._vnode&&Re(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),jo(),p._vnode=f},te={p:R,um:Re,m:De,r:$r,mt:Ot,mc:Z,pc:Se,pbc:he,n:k,o:t};let B,$;return e&&([B,$]=e(te)),{render:J,hydrate:B,createApp:au(J,B)}}function mi(t,e,n,r,i=!1){if(D(t)){t.forEach((h,m)=>mi(h,e&&(D(e)?e[m]:e),n,r,i));return}if(fi(r)&&!i)return;const s=r.shapeFlag&4?Ii(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===X?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ue(l)?(u[l]=null,z(d,l)&&(d[l]=null)):be(l)&&(l.value=null)),ue(c)){const h=()=>{u[c]=o,z(d,c)&&(d[c]=o)};o?(h.id=-1,ve(h,n)):h()}else if(be(c)){const h=()=>{c.value=o};o?(h.id=-1,ve(h,n)):h()}else j(c)&&nt(c,a,12,[o,u])}function je(t,e,n,r=null){Pe(t,e,7,[n,r])}function bo(t,e,n=!1){const r=t.children,i=e.children;if(D(r)&&D(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=tt(i[s]),a.el=o.el),n||bo(o,a))}}function uu(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const fu=t=>t.__isTeleport,_i="components";function Lg(t,e){return Eo(_i,t,!0,e)||t}const Io=Symbol();function Dg(t){return ue(t)?Eo(_i,t,!1)||t:t||Io}function Eo(t,e,n=!0,r=!1){const i=Te||fe;if(i){const s=i.type;if(t===_i){const a=Su(s);if(a&&(a===e||a===Fe(e)||a===Kn(Fe(e))))return s}const o=wo(i[t]||s[t],e)||wo(i.appContext[t],e);return!o&&r?s:o}}function wo(t,e){return t&&(t[e]||t[Fe(e)]||t[Kn(Fe(e))])}const Oe=Symbol(void 0),vi=Symbol(void 0),Me=Symbol(void 0),cr=Symbol(void 0),gn=[];let vt=null;function To(t=!1){gn.push(vt=t?null:[])}function du(){gn.pop(),vt=gn[gn.length-1]||null}let lr=1;function Co(t){lr+=t}function So(t){return t.dynamicChildren=lr>0?vt||Nt:null,du(),lr>0&&vt&&vt.push(t),t}function Ug(t,e,n,r,i,s){return So(Oo(t,e,n,r,i,s,!0))}function Ro(t,e,n,r,i){return So(ye(t,e,n,r,i,!0))}function ur(t){return t?t.__v_isVNode===!0:!1}function yt(t,e){return t.type===e.type&&t.key===e.key}const fr="__vInternal",Ao=({key:t})=>t!=null?t:null,dr=({ref:t})=>t!=null?ue(t)||be(t)||j(t)?{i:Te,r:t}:t:null;function Oo(t,e=null,n=null,r=0,i=null,s=t===Oe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ao(e),ref:e&&dr(e),scopeId:nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(yi(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),lr>0&&!o&&vt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&vt.push(c),c}const ye=hu;function hu(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Io)&&(t=Me),ur(t)){const a=jt(t,e,!0);return n&&yi(a,n),a}if(Ru(t)&&(t=t.__vccOpts),e){e=pu(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=Hr(a)),ce(c)&&(Hs(c)&&!D(c)&&(c=pe({},c)),e.style=Br(c))}const o=ue(t)?1:Ll(t)?128:fu(t)?64:ce(t)?4:j(t)?2:0;return Oo(t,e,n,r,i,o,s,!0)}function pu(t){return t?Hs(t)||fr in t?pe({},t):t:null}function jt(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?mu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ao(a),ref:e&&e.ref?n&&i?D(i)?i.concat(dr(e)):[i,dr(e)]:dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jt(t.ssContent),ssFallback:t.ssFallback&&jt(t.ssFallback),el:t.el,anchor:t.anchor}}function gu(t=" ",e=0){return ye(vi,null,t,e)}function Fg(t,e){const n=ye(cr,null,t);return n.staticCount=e,n}function $g(t="",e=!1){return e?(To(),Ro(Me,null,t)):ye(Me,null,t)}function Be(t){return t==null||typeof t=="boolean"?ye(Me):D(t)?ye(Oe,null,t.slice()):typeof t=="object"?tt(t):ye(vi,null,String(t))}function tt(t){return t.el===null||t.memo?t:jt(t)}function yi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),yi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(fr in e)?e._ctx=Te:i===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[gu(e)]):n=8);t.children=e,t.shapeFlag|=n}function mu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Hr([e.class,r.class]));else if(i==="style")e.style=Br([e.style,r.style]);else if(Bn(i)){const s=e[i],o=r[i];s!==o&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function jg(t,e,n,r){let i;const s=n&&n[r];if(D(t)||ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function Bg(t,e,n={},r,i){if(Te.isCE)return ye("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),To();const o=s&&Po(s(n)),a=Ro(Oe,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Po(t){return t.some(e=>ur(e)?!(e.type===Me||e.type===Oe&&!Po(e.children)):!0)?t:null}const bi=t=>t?ko(t)?Ii(t)||t.proxy:bi(t.parent):null,hr=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bi(t.parent),$root:t=>bi(t.root),$emit:t=>t.emit,$options:t=>ao(t),$forceUpdate:t=>()=>Uo(t.update),$nextTick:t=>Do.bind(t.proxy),$watch:t=>Mu.bind(t)}),_u={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 0:return r[e];case 1:return i[e];case 3:return n[e];case 2:return s[e]}else{if(r!==X&&z(r,e))return o[e]=0,r[e];if(i!==X&&z(i,e))return o[e]=1,i[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=2,s[e];if(n!==X&&z(n,e))return o[e]=3,n[e];di&&(o[e]=4)}}const u=hr[e];let d,h;if(u)return e==="$attrs"&&we(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==X&&z(n,e))return o[e]=3,n[e];if(h=c.config.globalProperties,z(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==X&&z(i,e))i[e]=n;else if(r!==X&&z(r,e))r[e]=n;else if(z(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return n[o]!==void 0||t!==X&&z(t,o)||e!==X&&z(e,o)||(a=s[0])&&z(a,o)||z(r,o)||z(hr,o)||z(i.config.globalProperties,o)}},vu=yo();let yu=0;function bu(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||vu,s={uid:yu++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new Yc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uo(r,i),emitsOptions:Gs(r,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Pl.bind(null,s),t.ce&&t.ce(s),s}let fe=null;const Iu=()=>fe||Te,Bt=t=>{fe=t,t.scope.on()},bt=()=>{fe&&fe.scope.off(),fe=null};function ko(t){return t.vnode.shapeFlag&4}let pr=!1;function Eu(t,e=!1){pr=e;const{props:n,children:r}=t.vnode,i=ko(t);tu(t,n,i,e),iu(t,r);const s=i?wu(t,e):void 0;return pr=!1,s}function wu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vs(new Proxy(t.ctx,_u));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Cu(t):null;Bt(t),Ut();const s=nt(r,t,0,[t.props,i]);if(gt(),bt(),bs(s)){if(s.then(bt,bt),e)return s.then(o=>{No(t,o,e)}).catch(o=>{gr(o,t,0)});t.asyncDep=s}else No(t,s,e)}else xo(t,e)}function No(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=qs(e)),xo(t,n)}let Mo;function xo(t,e,n){const r=t.type;if(!t.render){if(!e&&Mo&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:s,delimiters:a},o),c);r.render=Mo(i,l)}}t.render=r.render||Ne}Bt(t),Ut(),Yl(t),gt(),bt()}function Tu(t){return new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}})}function Cu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Tu(t))},slots:t.slots,emit:t.emit,expose:e}}function Ii(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qs(Vs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)}}))}function Su(t){return j(t)&&t.displayName||t.name}function Ru(t){return j(t)&&"__vccOpts"in t}function nt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){gr(s,e,n)}return i}function Pe(t,e,n,r){if(j(t)){const s=nt(t,e,n,r);return s&&bs(s)&&s.catch(o=>{gr(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Pe(t[s],e,n,r));return i}function gr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){nt(c,null,10,[t,o,a]);return}}Au(t,n,i,r)}function Au(t,e,n,r=!0){console.error(t)}let mr=!1,Ei=!1;const Ce=[];let qe=0;const mn=[];let _n=null,Ht=0;const vn=[];let rt=null,Vt=0;const Lo=Promise.resolve();let wi=null,Ti=null;function Do(t){const e=wi||Lo;return t?e.then(this?t.bind(this):t):e}function Ou(t){let e=qe+1,n=Ce.length;for(;e<n;){const r=e+n>>>1;yn(Ce[r])<t?e=r+1:n=r}return e}function Uo(t){(!Ce.length||!Ce.includes(t,mr&&t.allowRecurse?qe+1:qe))&&t!==Ti&&(t.id==null?Ce.push(t):Ce.splice(Ou(t.id),0,t),Fo())}function Fo(){!mr&&!Ei&&(Ei=!0,wi=Lo.then(Bo))}function Pu(t){const e=Ce.indexOf(t);e>qe&&Ce.splice(e,1)}function $o(t,e,n,r){D(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Fo()}function ku(t){$o(t,_n,mn,Ht)}function Nu(t){$o(t,rt,vn,Vt)}function Ci(t,e=null){if(mn.length){for(Ti=e,_n=[...new Set(mn)],mn.length=0,Ht=0;Ht<_n.length;Ht++)_n[Ht]();_n=null,Ht=0,Ti=null,Ci(t,e)}}function jo(t){if(vn.length){const e=[...new Set(vn)];if(vn.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,r)=>yn(n)-yn(r)),Vt=0;Vt<rt.length;Vt++)rt[Vt]();rt=null,Vt=0}}const yn=t=>t.id==null?1/0:t.id;function Bo(t){Ei=!1,mr=!0,Ci(t),Ce.sort((n,r)=>yn(n)-yn(r));const e=Ne;try{for(qe=0;qe<Ce.length;qe++){const n=Ce[qe];n&&n.active!==!1&&nt(n,null,14)}}finally{qe=0,Ce.length=0,jo(),mr=!1,wi=null,(Ce.length||mn.length||vn.length)&&Bo(t)}}function Hg(t,e){return Si(t,null,e)}const Ho={};function Wt(t,e,n){return Si(t,e,n)}function Si(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=X){const a=fe;let c,l=!1,u=!1;if(be(t)?(c=()=>t.value,l=!!t._shallow):$t(t)?(c=()=>t,r=!0):D(t)?(u=!0,l=t.some($t),c=()=>t.map(A=>{if(be(A))return A.value;if($t(A))return It(A);if(j(A))return nt(A,a,2)})):j(t)?e?c=()=>nt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Pe(t,a,3,[h])}:c=Ne,e&&r){const A=c;c=()=>It(A())}let d,h=A=>{d=R.onStop=()=>{nt(A,a,4)}};if(pr)return h=Ne,e?n&&Pe(e,a,3,[c(),u?[]:void 0,h]):c(),Ne;let m=u?[]:Ho;const C=()=>{if(!!R.active)if(e){const A=R.run();(r||l||(u?A.some((L,H)=>un(L,m[H])):un(A,m)))&&(d&&d(),Pe(e,a,3,[A,m===Ho?void 0:m,h]),m=A)}else R.run()};C.allowRecurse=!!e;let x;i==="sync"?x=C:i==="post"?x=()=>ve(C,a&&a.suspense):x=()=>{!a||a.isMounted?ku(C):C()};const R=new Qr(c,x);return e?n?C():m=R.run():i==="post"?ve(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&vs(a.scope.effects,R)}}function Mu(t,e,n){const r=this.proxy,i=ue(t)?t.includes(".")?Vo(r,t):()=>r[t]:t.bind(r,r);let s;j(e)?s=e:(s=e.handler,n=e);const o=fe;Bt(this);const a=Si(i,s.bind(r),n);return o?Bt(o):bt(),a}function Vo(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function It(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))It(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)It(t[n],e);else if(xt(t)||Mt(t))t.forEach(n=>{It(n,e)});else if(Es(t))for(const n in t)It(t[n],e);return t}function Wo(t,e,n){const r=arguments.length;return r===2?ce(e)&&!D(e)?ur(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ur(n)&&(n=[n]),ye(t,e,n))}const xu="3.2.20",Lu="http://www.w3.org/2000/svg",Kt=typeof document!="undefined"?document:null,Ko=new Map,Du={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Kt.createElementNS(Lu,t):Kt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=Ko.get(t);if(!s){const o=Kt.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,s=o.content,r){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}Ko.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Uu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Fu(t,e,n){const r=t.style,i=r.display;if(!n)t.removeAttribute("style");else if(ue(n))e!==n&&(r.cssText=n);else{for(const s in n)Ri(r,s,n[s]);if(e&&!ue(e))for(const s in e)n[s]==null&&Ri(r,s,"")}"_vod"in t&&(r.display=i)}const zo=/\s*!important$/;function Ri(t,e,n){if(D(n))n.forEach(r=>Ri(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=$u(t,e);zo.test(n)?t.setProperty(Lt(r),n.replace(zo,""),"important"):t[r]=n}}const qo=["Webkit","Moz","ms"],Ai={};function $u(t,e){const n=Ai[e];if(n)return n;let r=Fe(e);if(r!=="filter"&&r in t)return Ai[e]=r;r=Kn(r);for(let i=0;i<qo.length;i++){const s=qo[i]+r;if(s in t)return Ai[e]=s}return e}const Go="http://www.w3.org/1999/xlink";function ju(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Go,e.slice(6,e.length)):t.setAttributeNS(Go,e,n);else{const s=Fc(e);n==null||s&&!ms(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Bu(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=ms(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(c){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let _r=Date.now,Jo=!1;if(typeof window!="undefined"){_r()>document.createEvent("Event").timeStamp&&(_r=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Jo=!!(t&&Number(t[1])<=53)}let Oi=0;const Hu=Promise.resolve(),Vu=()=>{Oi=0},Wu=()=>Oi||(Hu.then(Vu),Oi=_r());function it(t,e,n,r){t.addEventListener(e,n,r)}function Ku(t,e,n,r){t.removeEventListener(e,n,r)}function zu(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=qu(e);if(r){const l=s[e]=Gu(r,i);it(t,a,l,c)}else o&&(Ku(t,a,o,c),s[e]=void 0)}}const Yo=/(?:Once|Passive|Capture)$/;function qu(t){let e;if(Yo.test(t)){e={};let n;for(;n=t.match(Yo);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Lt(t.slice(2)),e]}function Gu(t,e){const n=r=>{const i=r.timeStamp||_r();(Jo||i>=n.attached-1)&&Pe(Ju(r,n.value),e,5,[r])};return n.value=t,n.attached=Wu(),n}function Ju(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r(i))}else return e}const Xo=/^on[a-z]/,Yu=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?Uu(t,r,i):e==="style"?Fu(t,n,r):Bn(e)?Wr(e)||zu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xu(t,e,r,i))?Bu(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ju(t,e,r,i))};function Xu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Xo.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xo.test(e)&&ue(n)?!1:e in t}const Qu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$l.props;const zt=t=>{const e=t.props["onUpdate:modelValue"];return D(e)?n=>zn(e,n):e};function Zu(t){t.target.composing=!0}function Qo(t){const e=t.target;e.composing&&(e.composing=!1,ef(e,"input"))}function ef(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Vg={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=zt(i);const s=r||i.props&&i.props.type==="number";it(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=Gn(a)),t._assign(a)}),n&&it(t,"change",()=>{t.value=t.value.trim()}),e||(it(t,"compositionstart",Zu),it(t,"compositionend",Qo),it(t,"change",Qo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=zt(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Gn(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Wg={deep:!0,created(t,e,n){t._assign=zt(n),it(t,"change",()=>{const r=t._modelValue,i=bn(t),s=t.checked,o=t._assign;if(D(r)){const a=Vr(r,i),c=a!==-1;if(s&&!c)o(r.concat(i));else if(!s&&c){const l=[...r];l.splice(a,1),o(l)}}else if(xt(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(ta(t,s))})},mounted:Zo,beforeUpdate(t,e,n){t._assign=zt(n),Zo(t,e,n)}};function Zo(t,{value:e,oldValue:n},r){t._modelValue=e,D(e)?t.checked=Vr(e,r.props.value)>-1:xt(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ln(e,ta(t,!0)))}const Kg={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=xt(e);it(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Gn(bn(o)):bn(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=zt(r)},mounted(t,{value:e}){ea(t,e)},beforeUpdate(t,e,n){t._assign=zt(n)},updated(t,{value:e}){ea(t,e)}};function ea(t,e){const n=t.multiple;if(!(n&&!D(e)&&!xt(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=bn(s);if(n)D(e)?s.selected=Vr(e,o)>-1:s.selected=e.has(o);else if(ln(bn(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bn(t){return"_value"in t?t._value:t.value}function ta(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tf=["ctrl","shift","alt","meta"],nf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tf.some(n=>t[`${n}Key`]&&!e.includes(n))},zg=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=nf[e[i]];if(s&&s(n,e))return}return t(n,...r)},qg={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):In(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),In(t,!0),r.enter(t)):r.leave(t,()=>{In(t,!1)}):In(t,e))},beforeUnmount(t,{value:e}){In(t,e)}};function In(t,e){t.style.display=e?t._vod:"none"}const rf=pe({patchProp:Yu},Du);let na;function sf(){return na||(na=cu(rf))}const Gg=(...t)=>{const e=sf().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=of(r);if(!i)return;const s=e._component;!j(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function of(t){return ue(t)?document.querySelector(t):t}function af(){return ra().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ra(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const cf=typeof Proxy=="function",lf="devtools-plugin:setup",uf="plugin:settings:set";class ff{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=gs({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch(o){}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch(a){}s=o}},n.on(uf,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function df(t,e){const n=ra(),r=af(),i=cf&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(lf,t,e);else{const s=i?new ff(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var hf="store";function qt(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function pf(t){return t!==null&&typeof t=="object"}function gf(t){return t&&typeof t.then=="function"}function mf(t,e){return function(){return t(e)}}function ia(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function sa(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;vr(t,n,[],t._modules.root,!0),Pi(t,n,e)}function Pi(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};qt(i,function(o,a){s[a]=mf(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=Ft({data:e}),t.strict&&If(t),r&&n&&t._withCommit(function(){r.data=null})}function vr(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=ki(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=_f(t,o,n);r.forEachMutation(function(u,d){var h=o+d;vf(t,h,u,l)}),r.forEachAction(function(u,d){var h=u.root?d:o+d,m=u.handler||u;yf(t,h,m,l)}),r.forEachGetter(function(u,d){var h=o+d;bf(t,h,u,l)}),r.forEachChild(function(u,d){vr(t,e,n.concat(d),u,i)})}function _f(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var c=yr(s,o,a),l=c.payload,u=c.options,d=c.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,l)},commit:r?t.commit:function(s,o,a){var c=yr(s,o,a),l=c.payload,u=c.options,d=c.type;(!u||!u.root)&&(d=e+d),t.commit(d,l,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return oa(t,e)}},state:{get:function(){return ki(t.state,n)}}}),i}function oa(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function vf(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function yf(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return gf(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function bf(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function If(t){Wt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function ki(t,e){return e.reduce(function(n,r){return n[r]},t)}function yr(t,e,n){return pf(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Ef="vuex bindings",aa="vuex:mutations",Ni="vuex:actions",Gt="vuex",wf=0;function Tf(t,e){df({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Ef]},function(n){n.addTimelineLayer({id:aa,label:"Vuex Mutations",color:ca}),n.addTimelineLayer({id:Ni,label:"Vuex Actions",color:ca}),n.addInspector({id:Gt,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Gt)if(r.filter){var i=[];da(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[fa(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Gt){var i=r.nodeId;oa(e,i),r.state=Rf(Of(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Gt){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit(function(){r.set(e._state.data,s,r.state.value)})}}),e.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Gt),n.sendInspectorState(Gt),n.addTimelineEvent({layerId:aa,event:{time:Date.now(),title:r.type,data:s}})}),e.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=wf++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:Ni,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:Ni,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var ca=8702998,Cf=6710886,Sf=16777215,la={label:"namespaced",textColor:Sf,backgroundColor:Cf};function ua(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function fa(t,e){return{id:e||"root",label:ua(e),tags:t.namespaced?[la]:[],children:Object.keys(t._children).map(function(n){return fa(t._children[n],e+n+"/")})}}function da(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[la]:[]}),Object.keys(e._children).forEach(function(i){da(t,e._children[i],n,r+i+"/")})}function Rf(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var s=Af(e);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?ua(o):o,editable:!1,value:Mi(function(){return s[o]})}})}return i}function Af(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=Mi(function(){return t[n]})}else e[n]=Mi(function(){return t[n]})}),e}function Of(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Mi(t){try{return t()}catch(e){return e}}var xe=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},ha={namespaced:{configurable:!0}};ha.namespaced.get=function(){return!!this._rawModule.namespaced};xe.prototype.addChild=function(e,n){this._children[e]=n};xe.prototype.removeChild=function(e){delete this._children[e]};xe.prototype.getChild=function(e){return this._children[e]};xe.prototype.hasChild=function(e){return e in this._children};xe.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};xe.prototype.forEachChild=function(e){qt(this._children,e)};xe.prototype.forEachGetter=function(e){this._rawModule.getters&&qt(this._rawModule.getters,e)};xe.prototype.forEachAction=function(e){this._rawModule.actions&&qt(this._rawModule.actions,e)};xe.prototype.forEachMutation=function(e){this._rawModule.mutations&&qt(this._rawModule.mutations,e)};Object.defineProperties(xe.prototype,ha);var Et=function(e){this.register([],e,!1)};Et.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Et.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};Et.prototype.update=function(e){pa([],this.root,e)};Et.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new xe(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&qt(n.modules,function(a,c){i.register(e.concat(c),a,r)})};Et.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};Et.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function pa(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;pa(t.concat(r),e.getChild(r),n.modules[r])}}function Jg(t){return new Ie(t)}var Ie=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Et(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(h,m){return c.call(o,h,m)},this.commit=function(h,m,C){return l.call(o,h,m,C)},this.strict=i;var u=this._modules.root.state;vr(this,u,[],this._modules.root),Pi(this,u),r.forEach(function(d){return d(n)})},xi={state:{configurable:!0}};Ie.prototype.install=function(e,n){e.provide(n||hf,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Tf(e,this)};xi.state.get=function(){return this._state.data};xi.state.set=function(t){};Ie.prototype.commit=function(e,n,r){var i=this,s=yr(e,n,r),o=s.type,a=s.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Ie.prototype.dispatch=function(e,n){var r=this,i=yr(e,n),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch(u){}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,d){l.then(function(h){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch(m){}u(h)},function(h){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,h)})}catch(m){}d(h)})})}};Ie.prototype.subscribe=function(e,n){return ia(e,this._subscribers,n)};Ie.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return ia(r,this._actionSubscribers,n)};Ie.prototype.watch=function(e,n,r){var i=this;return Wt(function(){return e(i.state,i.getters)},n,Object.assign({},r))};Ie.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ie.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),vr(this,this.state,e,this._modules.get(e),r.preserveState),Pi(this,this.state)};Ie.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=ki(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),sa(this)};Ie.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ie.prototype.hotUpdate=function(e){this._modules.update(e),sa(this,!0)};Ie.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ie.prototype,xi);/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const ga=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Jt=t=>ga?Symbol(t):"_vr_"+t,Pf=Jt("rvlm"),ma=Jt("rvd"),Li=Jt("r"),_a=Jt("rl"),Di=Jt("rvl"),Yt=typeof window!="undefined";function kf(t){return t.__esModule||ga&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Ui(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const En=()=>{},Nf=/\/$/,Mf=t=>t.replace(Nf,"");function Fi(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Uf(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function xf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function va(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lf(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Xt(e.matched[r],n.matched[i])&&ya(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ya(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Df(t[n],e[n]))return!1;return!0}function Df(t,e){return Array.isArray(t)?ba(t,e):Array.isArray(e)?ba(e,t):t===e}function ba(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Uf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var wn;(function(t){t.pop="pop",t.push="push"})(wn||(wn={}));var Tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tn||(Tn={}));function Ff(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mf(t)}const $f=/^[^#]+#/;function jf(t,e){return t.replace($f,"#")+e}function Bf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const br=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Bf(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ia(t,e){return(history.state?history.state.position-e:-1)+t}const $i=new Map;function Vf(t,e){$i.set(t,e)}function Wf(t){const e=$i.get(t);return $i.delete(t),e}let Kf=()=>location.protocol+"//"+location.host;function Ea(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),va(c,"")}return va(n,t)+r+i}function zf(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const m=Ea(t,location),C=n.value,x=e.value;let R=0;if(h){if(n.value=m,e.value=h,o&&o===C){o=null;return}R=x?h.position-x.position:0}else r(m);i.forEach(A=>{A(n.value,C,{delta:R,type:wn.pop,direction:R?R>0?Tn.forward:Tn.back:Tn.unknown})})};function c(){o=n.value}function l(h){i.push(h);const m=()=>{const C=i.indexOf(h);C>-1&&i.splice(C,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(Q({},h.state,{scroll:br()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function wa(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?br():null}}function qf(t){const{history:e,location:n}=window,r={value:Ea(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Kf()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=Q({},e.state,wa(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Q({},i.value,e.state,{forward:c,scroll:br()});s(u.current,u,!0);const d=Q({},wa(r.value,c,null),{position:u.position+1},l);s(c,d,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function Yg(t){t=Ff(t);const e=qf(t),n=zf(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Q({location:"",base:t,go:r,createHref:jf.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Gf(t){return typeof t=="string"||t&&typeof t=="object"}function Ta(t){return typeof t=="string"||typeof t=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ca=Jt("nf");var Sa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sa||(Sa={}));function Qt(t,e){return Q(new Error,{type:t,[Ca]:!0},e)}function wt(t,e){return t instanceof Error&&Ca in t&&(e==null||!!(t.type&e))}const Ra="[^/]+?",Jf={sensitive:!1,strict:!1,start:!0,end:!0},Yf=/[.+*?^${}()[\]/\\]/g;function Xf(t,e){const n=Q({},Jf,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let d=0;d<l.length;d++){const h=l[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(Yf,"\\$&"),m+=40;else if(h.type===1){const{value:C,repeatable:x,optional:R,regexp:A}=h;s.push({name:C,repeatable:x,optional:R});const L=A||Ra;if(L!==Ra){m+=10;try{new RegExp(`(${L})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${C}" (${L}): `+W.message)}}let H=x?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(H=R&&l.length<2?`(?:/${H})`:"/"+H),R&&(H+="?"),i+=H,m+=20,R&&(m+=-8),x&&(m+=-20),L===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",C=s[h-1];d[C.name]=m&&C.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:C,repeatable:x,optional:R}=m,A=C in l?l[C]:"";if(Array.isArray(A)&&!x)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(A)?A.join("/"):A;if(!L)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);u+=L}}return u}return{re:o,score:r,keys:s,parse:a,stringify:c}}function Qf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Zf(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=Qf(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const ed={type:0,value:""},td=/[a-zA-Z0-9_]/;function nd(t){if(!t)return[[]];if(t==="/")return[[ed]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function d(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:td.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}function rd(t,e,n){const r=Xf(nd(t.path),n),i=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function id(t,e){const n=[],r=new Map;e=Oa({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,d,h){const m=!h,C=od(u);C.aliasOf=h&&h.record;const x=Oa(e,u),R=[C];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of H)R.push(Q({},C,{components:h?h.record.components:C.components,path:W,aliasOf:h?h.record:C}))}let A,L;for(const H of R){const{path:W}=H;if(d&&W[0]!=="/"){const ie=d.record.path,oe=ie[ie.length-1]==="/"?"":"/";H.path=d.record.path+(W&&oe+W)}if(A=rd(H,d,x),h?h.alias.push(A):(L=L||A,L!==A&&L.alias.push(A),m&&u.name&&!Aa(A)&&o(u.name)),"children"in C){const ie=C.children;for(let oe=0;oe<ie.length;oe++)s(ie[oe],A,h&&h.children[oe])}h=h||A,c(A)}return L?()=>{o(L)}:En}function o(u){if(Ta(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Zf(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!Aa(u)&&r.set(u.record.name,u)}function l(u,d){let h,m={},C,x;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Qt(1,{location:u});x=h.record.name,m=Q(sd(d.params,h.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),C=h.stringify(m)}else if("path"in u)C=u.path,h=n.find(L=>L.re.test(C)),h&&(m=h.parse(C),x=h.record.name);else{if(h=d.name?r.get(d.name):n.find(L=>L.re.test(d.path)),!h)throw Qt(1,{location:u,currentLocation:d});x=h.record.name,m=Q({},d.params,u.params),C=h.stringify(m)}const R=[];let A=h;for(;A;)R.unshift(A.record),A=A.parent;return{name:x,path:C,params:m,matched:R,meta:cd(R)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function sd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function od(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ad(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ad(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Aa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cd(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Oa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Pa=/#/g,ld=/&/g,ud=/\//g,fd=/=/g,dd=/\?/g,ka=/\+/g,hd=/%5B/g,pd=/%5D/g,Na=/%5E/g,gd=/%60/g,Ma=/%7B/g,md=/%7C/g,xa=/%7D/g,_d=/%20/g;function ji(t){return encodeURI(""+t).replace(md,"|").replace(hd,"[").replace(pd,"]")}function vd(t){return ji(t).replace(Ma,"{").replace(xa,"}").replace(Na,"^")}function Bi(t){return ji(t).replace(ka,"%2B").replace(_d,"+").replace(Pa,"%23").replace(ld,"%26").replace(gd,"`").replace(Ma,"{").replace(xa,"}").replace(Na,"^")}function yd(t){return Bi(t).replace(fd,"%3D")}function bd(t){return ji(t).replace(Pa,"%23").replace(dd,"%3F")}function Id(t){return t==null?"":bd(t).replace(ud,"%2F")}function Ir(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ed(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(ka," "),o=s.indexOf("="),a=Ir(o<0?s:s.slice(0,o)),c=o<0?null:Ir(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function La(t){let e="";for(let n in t){const r=t[n];if(n=yd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&Bi(s)):[r&&Bi(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function wd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Cn(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(Qt(4,{from:n,to:e})):d instanceof Error?a(d):Gf(d)?a(Qt(2,{from:e,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Hi(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Td(a)){const l=(a.__vccOpts||a)[e];l&&i.push(ot(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=kf(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&ot(h,n,r,s,o)()}))}}return i}function Td(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Da(t){const e=et(Li),n=et(_a),r=$e(()=>e.resolve(pn(t.to))),i=$e(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Xt.bind(null,u));if(h>-1)return h;const m=Ua(c[l-2]);return l>1&&Ua(u)===m&&d[d.length-1].path!==m?d.findIndex(Xt.bind(null,c[l-2])):h}),s=$e(()=>i.value>-1&&Ad(n.params,r.value.params)),o=$e(()=>i.value>-1&&i.value===n.matched.length-1&&ya(n.params,r.value.params));function a(c={}){return Rd(c)?e[pn(t.replace)?"replace":"push"](pn(t.to)).catch(En):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Cd=eo({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Da,setup(t,{slots:e}){const n=Ft(Da(t)),{options:r}=et(Li),i=$e(()=>({[Fa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Sd=Cd;function Rd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ad(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Ua(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fa=(t,e,n)=>t!=null?t:e!=null?e:n,Od=eo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=et(Di),i=$e(()=>t.route||r.value),s=et(ma,0),o=$e(()=>i.value.matched[s]);ir(ma,s+1),ir(Pf,o),ir(Di,i);const a=Cl();return Wt(()=>[a.value,o.value,t.name],([c,l,u],[d,h,m])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!Xt(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,l=o.value,u=l&&l.components[t.name],d=t.name;if(!u)return $a(n.default,{Component:u,route:c});const h=l.props[t.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,x=Wo(u,Q({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return $a(n.default,{Component:x,route:c})||x}}});function $a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Pd=Od;function Xg(t){const e=id(t.routes,t),n=t.parseQuery||Ed,r=t.stringifyQuery||La,i=t.history,s=Cn(),o=Cn(),a=Cn(),c=Sl(st);let l=st;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ui.bind(null,_=>""+_),d=Ui.bind(null,Id),h=Ui.bind(null,Ir);function m(_,P){let T,k;return Ta(_)?(T=e.getRecordMatcher(_),k=P):k=_,e.addRoute(k,T)}function C(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function x(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function A(_,P){if(P=Q({},P||c.value),typeof _=="string"){const $=Fi(n,_,P.path),f=e.resolve({path:$.path},P),p=i.createHref($.fullPath);return Q($,f,{params:h(f.params),hash:Ir($.hash),redirectedFrom:void 0,href:p})}let T;if("path"in _)T=Q({},_,{path:Fi(n,_.path,P.path).path});else{const $=Q({},_.params);for(const f in $)$[f]==null&&delete $[f];T=Q({},_,{params:d(_.params)}),P.params=d(P.params)}const k=e.resolve(T,P),J=_.hash||"";k.params=u(h(k.params));const te=xf(r,Q({},_,{hash:vd(J),path:k.path})),B=i.createHref(te);return Q({fullPath:te,hash:J,query:r===La?wd(_.query):_.query||{}},k,{redirectedFrom:void 0,href:B})}function L(_){return typeof _=="string"?Fi(n,_,c.value.path):Q({},_)}function H(_,P){if(l!==_)return Qt(8,{from:P,to:_})}function W(_){return V(_)}function ie(_){return W(Q(L(_),{replace:!0}))}function oe(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(_):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),Q({query:_.query,hash:_.hash,params:_.params},k)}}function V(_,P){const T=l=A(_),k=c.value,J=_.state,te=_.force,B=_.replace===!0,$=oe(T);if($)return V(Q(L($),{state:J,force:te,replace:B}),P||T);const f=T;f.redirectedFrom=P;let p;return!te&&Lf(r,k,T)&&(p=Qt(16,{to:f,from:k}),Pt(k,k,!0,!1)),(p?Promise.resolve(p):Z(f,k)).catch(g=>wt(g)?g:ee(g,f,k)).then(g=>{if(g){if(wt(g,2))return V(Q(L(g.to),{state:J,force:te,replace:B}),P||f)}else g=he(f,k,!0,B,J);return de(f,k,g),g})}function ae(_,P){const T=H(_,P);return T?Promise.reject(T):Promise.resolve()}function Z(_,P){let T;const[k,J,te]=kd(_,P);T=Hi(k.reverse(),"beforeRouteLeave",_,P);for(const $ of k)$.leaveGuards.forEach(f=>{T.push(ot(f,_,P))});const B=ae.bind(null,_,P);return T.push(B),Zt(T).then(()=>{T=[];for(const $ of s.list())T.push(ot($,_,P));return T.push(B),Zt(T)}).then(()=>{T=Hi(J,"beforeRouteUpdate",_,P);for(const $ of J)$.updateGuards.forEach(f=>{T.push(ot(f,_,P))});return T.push(B),Zt(T)}).then(()=>{T=[];for(const $ of _.matched)if($.beforeEnter&&!P.matched.includes($))if(Array.isArray($.beforeEnter))for(const f of $.beforeEnter)T.push(ot(f,_,P));else T.push(ot($.beforeEnter,_,P));return T.push(B),Zt(T)}).then(()=>(_.matched.forEach($=>$.enterCallbacks={}),T=Hi(te,"beforeRouteEnter",_,P),T.push(B),Zt(T))).then(()=>{T=[];for(const $ of o.list())T.push(ot($,_,P));return T.push(B),Zt(T)}).catch($=>wt($,8)?$:Promise.reject($))}function de(_,P,T){for(const k of a.list())k(_,P,T)}function he(_,P,T,k,J){const te=H(_,P);if(te)return te;const B=P===st,$=Yt?history.state:{};T&&(k||B?i.replace(_.fullPath,Q({scroll:B&&$&&$.scroll},J)):i.push(_.fullPath,J)),c.value=_,Pt(_,P,T,B),Se()}let me;function Xe(){me=i.listen((_,P,T)=>{const k=A(_),J=oe(k);if(J){V(Q(J,{replace:!0}),k).catch(En);return}l=k;const te=c.value;Yt&&Vf(Ia(te.fullPath,T.delta),br()),Z(k,te).catch(B=>wt(B,4|8)?B:wt(B,2)?(V(B.to,k).then($=>{wt($,4|16)&&!T.delta&&T.type===wn.pop&&i.go(-1,!1)}).catch(En),Promise.reject()):(T.delta&&i.go(-T.delta,!1),ee(B,k,te))).then(B=>{B=B||he(k,te,!1),B&&(T.delta?i.go(-T.delta,!1):T.type===wn.pop&&wt(B,4|16)&&i.go(-1,!1)),de(k,te,B)}).catch(En)})}let At=Cn(),Ot=Cn(),le;function ee(_,P,T){Se(_);const k=Ot.list();return k.length?k.forEach(J=>J(_,P,T)):console.error(_),Promise.reject(_)}function G(){return le&&c.value!==st?Promise.resolve():new Promise((_,P)=>{At.add([_,P])})}function Se(_){le||(le=!0,Xe(),At.list().forEach(([P,T])=>_?T(_):P()),At.reset())}function Pt(_,P,T,k){const{scrollBehavior:J}=t;if(!Yt||!J)return Promise.resolve();const te=!T&&Wf(Ia(_.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Do().then(()=>J(_,P,te)).then(B=>B&&Hf(B)).catch(B=>ee(B,_,P))}const We=_=>i.go(_);let De;const Re=new Set;return{currentRoute:c,addRoute:m,removeRoute:C,hasRoute:R,getRoutes:x,resolve:A,options:t,push:W,replace:ie,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ot.add,isReady:G,install(_){const P=this;_.component("RouterLink",Sd),_.component("RouterView",Pd),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>pn(c)}),Yt&&!De&&c.value===st&&(De=!0,W(i.location).catch(J=>{}));const T={};for(const J in st)T[J]=$e(()=>c.value[J]);_.provide(Li,P),_.provide(_a,Ft(T)),_.provide(Di,c);const k=_.unmount;Re.add(_),_.unmount=function(){Re.delete(_),Re.size<1&&(l=st,me&&me(),c.value=st,De=!1,le=!1),k()}}}}function Zt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function kd(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xt(l,c))||i.push(c))}return[n,r,i]}/*! *****************************************************************************
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
***************************************************************************** */function Vi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nd(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{l(r.next(u))}catch(d){o(d)}}function c(u){try{l(r.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function Md(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Wi(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Er(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function ja(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}/**
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
 */const xd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ld=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ld(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const C=l<<6&192|d;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ud=function(t){try{return Dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ge(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function jd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hd(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */const Vd="FirebaseError";class en extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Vd,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,r)}}function Wd(t,e){return t.replace(Kd,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kd=/\{\$([^}]+)}/g;function zd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ba(s)&&Ba(o)){if(!wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ba(t){return t!==null&&typeof t=="object"}/**
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
 */function Rn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function An(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function On(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qd(t,e){const n=new Gd(t,e);return n.subscribe.bind(n)}class Gd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jd(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ki),i.error===void 0&&(i.error=Ki),i.complete===void 0&&(i.complete=Ki);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ki(){}/**
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
 */function tn(t){return t&&t._delegate?t._delegate:t}var Pn=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var Tt="[DEFAULT]";/**
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
 */var Yd=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new Fd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch(s){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Qd(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch(d){}try{for(var i=Wi(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Er(s.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch(d){}}}catch(d){n={error:d}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Tt),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return Nd(this,void 0,void 0,function(){var e;return Md(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(ja(ja([],Er(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Er(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Tt),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Tt),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=Wi(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Er(l.value,2),d=u[0],h=u[1],m=this.normalizeInstanceIdentifier(d);o===m&&h.resolve(a)}}catch(C){n={error:C}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=Wi(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch(l){}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xd(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Tt),this.component?this.component.multipleInstances?e:Tt:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Xd(t){return t===Tt?void 0:t}function Qd(t){return t.instantiationMode==="EAGER"}/**
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
 */var Zd=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new Yd(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const eh={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},th=ne.INFO,nh={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},rh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nh[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=th,this._logHandler=rh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
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
 */class ih{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zi="@firebase/app",Va="0.7.5";/**
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
 */const qi=new Ha("@firebase/app"),oh="@firebase/app-compat",ah="@firebase/analytics-compat",ch="@firebase/analytics",lh="@firebase/app-check-compat",uh="@firebase/app-check",fh="@firebase/auth",dh="@firebase/auth-compat",hh="@firebase/database",ph="@firebase/database-compat",gh="@firebase/functions",mh="@firebase/functions-compat",_h="@firebase/installations",vh="@firebase/installations-compat",yh="@firebase/messaging",bh="@firebase/messaging-compat",Ih="@firebase/performance",Eh="@firebase/performance-compat",wh="@firebase/remote-config",Th="@firebase/remote-config-compat",Ch="@firebase/storage",Sh="@firebase/storage-compat",Rh="@firebase/firestore",Ah="@firebase/firestore-compat",Oh="firebase",Ph="9.2.0";/**
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
 */const Wa="[DEFAULT]",kh={[zi]:"fire-core",[oh]:"fire-core-compat",[ch]:"fire-analytics",[ah]:"fire-analytics-compat",[uh]:"fire-app-check",[lh]:"fire-app-check-compat",[fh]:"fire-auth",[dh]:"fire-auth-compat",[hh]:"fire-rtdb",[ph]:"fire-rtdb-compat",[gh]:"fire-fn",[mh]:"fire-fn-compat",[_h]:"fire-iid",[vh]:"fire-iid-compat",[yh]:"fire-fcm",[bh]:"fire-fcm-compat",[Ih]:"fire-perf",[Eh]:"fire-perf-compat",[wh]:"fire-rc",[Th]:"fire-rc-compat",[Ch]:"fire-gcs",[Sh]:"fire-gcs-compat",[Rh]:"fire-fst",[Ah]:"fire-fst-compat","fire-js":"fire-js",[Oh]:"fire-js-all"};/**
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
 */const Tr=new Map,Gi=new Map;function Nh(t,e){try{t.container.addComponent(e)}catch(n){qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cr(t){const e=t.name;if(Gi.has(e))return qi.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,t);for(const n of Tr.values())Nh(n,t);return!0}function Ka(t,e){return t.container.getProvider(e)}/**
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
 */const Mh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Sr=new Sn("app","Firebase",Mh);/**
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
 */class xh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Rr=Ph;function Qg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Wa,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Sr.create("bad-app-name",{appName:String(r)});const i=Tr.get(r);if(i){if(wr(t,i.options)&&wr(n,i.config))return i;throw Sr.create("duplicate-app",{appName:r})}const s=new Zd(r);for(const a of Gi.values())s.addComponent(a);const o=new xh(t,n,s);return Tr.set(r,o),o}function Lh(t=Wa){const e=Tr.get(t);if(!e)throw Sr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=kh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qi.warn(a.join(" "));return}Cr(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */function Dh(t){Cr(new Pn("platform-logger",e=>new ih(e),"PRIVATE")),nn(zi,Va,t),nn(zi,Va,"esm2017"),nn("fire-js","")}Dh("");var Uh="firebase",Fh="9.2.0";/**
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
 */nn(Uh,Fh,"app");function za(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $h=za,qa=new Sn("auth","Firebase",za());/**
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
 */const Ga=new Ha("@firebase/auth");function Ar(t,...e){Ga.logLevel<=ne.ERROR&&Ga.error(`Auth (${Rr}): ${t}`,...e)}/**
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
 */function Le(t,...e){throw Ji(t,...e)}function He(t,...e){return Ji(t,...e)}function jh(t,e,n){const r=Object.assign(Object.assign({},$h()),{[e]:n});return new Sn("auth","Firebase",r).create(e,{appName:t.name})}function Ji(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qa.create(t,...e)}function U(t,e,...n){if(!t)throw Ji(e,...n)}function Ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ar(e),new Error(e)}function Je(t,e){t||Ge(e)}/**
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
 */const Ja=new Map;function Ye(t){Je(t instanceof Function,"Expected a class definition");let e=Ja.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ja.set(t,e),e)}/**
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
 */function Bh(t,e){const n=Ka(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wr(s,e!=null?e:{}))return i;Le(i,"already-initialized")}return n.initialize({options:e})}function Hh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vh(){return Ya()==="http:"||Ya()==="https:"}function Ya(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Wh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vh()||jd()||"connection"in navigator)?navigator.onLine:!0}function Kh(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=$d()||Bd()}get(){return Wh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xi(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qi{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const qh=new kn(3e4,6e4);function Nn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mn(t,e,n,r,i={}){return Xa(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rn(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(Qi.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),Qi.fetch()(Qa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Xa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zh),e);try{const i=new Gh(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jh(t,u,l);Le(t,u)}}catch(i){if(i instanceof en)throw i;Le(t,"network-request-failed")}}async function xn(t,e,n,r,i={}){const s=await Mn(t,e,n,r,i);return"mfaPendingCredential"in s&&Le(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qa(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xi(t.config,i):`${t.config.apiScheme}://${i}`}class Gh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"timeout")),qh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=He(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Jh(t,e){return Mn(t,"POST","/v1/accounts:delete",e)}async function Yh(t,e){return Mn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ln(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function Xh(t,e=!1){const n=tn(t),r=await n.getIdToken(e),i=ts(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ln(es(i.auth_time)),issuedAtTime:Ln(es(i.iat)),expirationTime:Ln(es(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function es(t){return Number(t)*1e3}function ts(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ud(n);return i?JSON.parse(i):(Ar("Failed to decode base64 JWT payload"),null)}catch(i){return Ar("Caught error parsing JWT payload as JSON",i),null}}function Qh(t){const e=ts(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&Zh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Zh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ep{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Za{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Or(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Dn(t,Yh(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?rp(s.providerUserInfo):[],a=np(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Za(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function tp(t){const e=tn(t);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function np(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rp(t){return t.map(e=>{var{providerId:n}=e,r=Vi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ip(t,e){const n=await Xa(t,{},()=>{const r=Rn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qa(t,i,"/v1/token",`key=${s}`);return Qi.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Qh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ip(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Un;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
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
 */function at(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ct{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ep(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Za(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xh(this,e)}reload(){return tp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Or(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dn(this,Jh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:W,isAnonymous:ie,providerData:oe,stsTokenManager:V}=n;U(H&&V,e,"internal-error");const ae=Un.fromJSON(this.name,V);U(typeof H=="string",e,"internal-error"),at(d,e.name),at(h,e.name),U(typeof W=="boolean",e,"internal-error"),U(typeof ie=="boolean",e,"internal-error"),at(m,e.name),at(C,e.name),at(x,e.name),at(R,e.name),at(A,e.name),at(L,e.name);const Z=new Ct({uid:H,auth:e,email:h,emailVerified:W,displayName:d,isAnonymous:ie,photoURL:C,phoneNumber:m,tenantId:x,stsTokenManager:ae,createdAt:A,lastLoginAt:L});return oe&&Array.isArray(oe)&&(Z.providerData=oe.map(de=>Object.assign({},de))),R&&(Z._redirectEventId=R),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Un;i.updateFromServerResponse(n);const s=new Ct({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Or(s),s}}/**
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
 */class ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ec.type="NONE";const tc=ec;/**
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
 */function Pr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(Ye(tc),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ye(tc);const o=Pr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ct._fromJSON(e,u);l!==s&&(a=d),s=l;break}}catch(u){}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new rn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch(u){}})),new rn(s,e,r))}}/**
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
 */function nc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ac(e))return"Blackberry";if(cc(e))return"Webos";if(ns(e))return"Safari";if((e.includes("chrome/")||ic(e))&&!e.includes("edge/"))return"Chrome";if(oc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rc(t=ge()){return/firefox\//i.test(t)}function ns(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ic(t=ge()){return/crios\//i.test(t)}function sc(t=ge()){return/iemobile/i.test(t)}function oc(t=ge()){return/android/i.test(t)}function ac(t=ge()){return/blackberry/i.test(t)}function cc(t=ge()){return/webos/i.test(t)}function kr(t=ge()){return/iphone|ipad|ipod/i.test(t)}function sp(t=ge()){var e;return kr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function op(){return Hd()&&document.documentMode===10}function lc(t=ge()){return kr(t)||oc(t)||cc(t)||ac(t)||/windows phone/i.test(t)||sc(t)}function ap(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function uc(t,e=[]){let n;switch(t){case"Browser":n=nc(ge());break;case"Worker":n=`${nc(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}/**
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
 */class cp{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await rn.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tn(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Nr(t){return tn(t)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=qd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class rs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,n){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function lp(t,e){return Mn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function up(t,e){return xn(t,"POST","/v1/accounts:signInWithPassword",Nn(t,e))}/**
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
 */async function fp(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}async function dp(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}/**
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
 */class Fn extends rs{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return up(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fp(e,{email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dp(e,{idToken:n,email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function sn(t,e){return xn(t,"POST","/v1/accounts:signInWithIdp",Nn(t,e))}/**
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
 */const hp="http://localhost";class St extends rs{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vi(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new St(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:hp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rn(n)}return e}}/**
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
 */function pp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gp(t){const e=An(On(t)).link,n=e?An(On(e)).deep_link_id:null,r=An(On(t)).deep_link_id;return(r?An(On(r)).link:null)||r||n||e||t}class is{constructor(e){var n,r,i,s,o,a;const c=An(On(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=pp((i=c.mode)!==null&&i!==void 0?i:null);U(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gp(e);try{return new is(n)}catch(r){return null}}}/**
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
 */class on{constructor(){this.providerId=on.PROVIDER_ID}static credential(e,n){return Fn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=is.parseLink(n);return U(r,"argument-error"),Fn._fromEmailAndCode(e,r.code,r.tenantId)}}on.PROVIDER_ID="password";on.EMAIL_PASSWORD_SIGN_IN_METHOD="password";on.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $n extends dc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ct extends $n{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch(n){return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class lt extends $n{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return St._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch(i){return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class ut extends $n{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch(n){return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
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
 */class ft extends $n{constructor(){super("twitter.com")}static credential(e,n){return St._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ft.credential(n,r)}catch(i){return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
 */async function mp(t,e){return xn(t,"POST","/v1/accounts:signUp",Nn(t,e))}/**
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
 */class Rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ct._fromIdTokenResponse(e,r,i),o=hc(r);return new Rt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hc(r);return new Rt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mr extends en{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mr(e,n,r,i)}}function pc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(t,s,e,r):s})}async function _p(t,e,n=!1){const r=await Dn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rt._forOperation(t,"link",r)}/**
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
 */async function vp(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Dn(t,pc(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=ts(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Rt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),s}}/**
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
 */async function gc(t,e,n=!1){const r="signIn",i=await pc(t,r,e),s=await Rt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yp(t,e){return gc(Nr(t),e)}async function Zg(t,e,n){const r=Nr(t),i=await mp(r,{returnSecureToken:!0,email:e,password:n}),s=await Rt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function em(t,e,n){return yp(tn(t),on.credential(e,n))}function tm(t){return tn(t).signOut()}const xr="__sak";/**
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
 */class mc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bp(){const t=ge();return ns(t)||kr(t)}const Ip=1e3,Ep=10;class _c extends mc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bp()&&ap(),this.fallbackToPolling=lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);op()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ep):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_c.type="LOCAL";const wp=_c;/**
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
 */class vc extends mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vc.type="SESSION";const yc=vc;/**
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
 */function Tp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Tp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lr.receivers=[];/**
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
 */function ss(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Cp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ss("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function Sp(t){Ve().location.href=t}/**
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
 */function bc(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function Rp(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function Ap(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Op(){return bc()?self:null}/**
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
 */const Ic="firebaseLocalStorageDb",Pp=1,Dr="firebaseLocalStorage",Ec="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ur(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function kp(){const t=indexedDB.deleteDatabase(Ic);return new jn(t).toPromise()}function os(){const t=indexedDB.open(Ic,Pp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dr,{keyPath:Ec})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dr)?e(r):(r.close(),await kp(),e(await os()))})})}async function wc(t,e,n){const r=Ur(t,!0).put({[Ec]:e,value:n});return new jn(r).toPromise()}async function Np(t,e){const n=Ur(t,!1).get(e),r=await new jn(n).toPromise();return r===void 0?null:r.value}function Tc(t,e){const n=Ur(t,!0).delete(e);return new jn(n).toPromise()}const Mp=800,xp=3;class Cc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await os(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lr._getInstance(Op()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rp(),!this.activeServiceWorker)return;this.sender=new Cp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ap()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await os();return await wc(e,xr,"1"),await Tc(e,xr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Np(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ur(i,!1).getAll();return new jn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cc.type="LOCAL";const Lp=Cc;/**
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
 */function Dp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Up(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=He("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Dp().appendChild(r)})}function Fp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new kn(3e4,6e4);/**
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
 */function $p(t,e){return e?Ye(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class as extends rs{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jp(t){return gc(t.auth,new as(t),t.bypassAuthState)}function Bp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),vp(n,new as(t),t.bypassAuthState)}async function Hp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),_p(n,new as(t),t.bypassAuthState)}/**
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
 */class Sc{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jp;case"linkViaPopup":case"linkViaRedirect":return Hp;case"reauthViaPopup":case"reauthViaRedirect":return Bp;default:Le(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vp=new kn(2e3,1e4);class an extends Sc{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=ss();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Vp.get())};e()}}an.currentPopupAction=null;/**
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
 */const Wp="pendingRedirect",cs=new Map;class Kp extends Sc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const r=await zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zp(t,e){const n=Gp(e),r=qp(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qp(t){return Ye(t._redirectPersistence)}function Gp(t){return Pr(Wp,t.config.apiKey,t.name)}async function Jp(t,e,n=!1){const r=Nr(t),i=$p(r,e),o=await new Kp(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Yp=10*60*1e3;class Xp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ac(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rc(e))}saveEventToCache(e){this.cachedEventUids.add(Rc(e)),this.lastProcessedEventTime=Date.now()}}function Rc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(t);default:return!1}}/**
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
 */async function Zp(t,e={}){return Mn(t,"GET","/v1/projects",e)}/**
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
 */const eg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tg=/^https?/;async function ng(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zp(t);for(const n of e)try{if(rg(n))return}catch(r){}Le(t,"unauthorized-domain")}function rg(t){const e=Yi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tg.test(n))return!1;if(eg.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ig=new kn(3e4,6e4);function Oc(){const t=Ve().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sg(t){return new Promise((e,n)=>{var r,i,s;function o(){Oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oc(),n(He(t,"network-request-failed"))},timeout:ig.get()})}if((i=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ve().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Fp("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},Up(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Fr=null,e})}let Fr=null;function og(t){return Fr=Fr||sg(t),Fr}/**
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
 */const ag=new kn(5e3,15e3),cg="__/auth/iframe",lg="emulator/auth/iframe",ug={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true"},fg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xi(e,lg):`https://${t.config.authDomain}/${cg}`,r={apiKey:e.apiKey,appName:t.name,v:Rr},i=fg.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rn(r).slice(1)}`}async function hg(t){const e=await og(t),n=Ve().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:dg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ug,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=Ve().setTimeout(()=>{s(o)},ag.get());function c(){Ve().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const pg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gg=500,mg=600,_g="_blank",vg="http://localhost";class Pc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function yg(t,e,n,r=gg,i=mg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pg),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ge().toLowerCase();n&&(a=ic(l)?_g:n),rc(l)&&(e=e||vg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,C])=>`${h}${m}=${C},`,"");if(sp(l)&&a!=="_self")return bg(e||"",a),new Pc(null);const d=window.open(e||"",a,u);U(d,t,"popup-blocked");try{d.focus()}catch(h){}return new Pc(d)}function bg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ig="__/auth/handler",Eg="emulator/auth/handler";function kc(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rr,eventId:i};if(e instanceof dc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof $n){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${wg(t)}?${Rn(a).slice(1)}`}function wg({config:t}){return t.emulator?Xi(t,Eg):`https://${t.authDomain}/${Ig}`}/**
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
 */const ls="webStorageSupport";class Tg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yc,this._completeRedirectFn=Jp}async _openPopup(e,n,r,i){var s;Je((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=kc(e,n,r,Yi(),i);return yg(e,o,ss())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Sp(kc(e,n,r,Yi(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Je(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await hg(e),r=new Xp(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ls,{type:ls},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ls];o!==void 0&&n(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ng(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lc()||ns()||kr()}}const Cg=Tg;var Nc="@firebase/auth",Mc="0.19.0";/**
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
 */class Sg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ag(t){Cr(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),U(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uc(t)},c=new cp(o,a);return Hh(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cr(new Pn("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new Sg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Nc,Mc,Rg(t)),nn(Nc,Mc,"esm2017")}/**
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
 */function nm(t=Lh()){const e=Ka(t,"auth");return e.isInitialized()?e.getImmediate():Bh(t,{popupRedirectResolver:Cg,persistence:[Lp,wp,yc]})}Ag("Browser");export{kg as A,Ng as B,$e as C,Cl as D,Hg as E,Oe as F,Dg as G,$g as H,mu as I,qg as J,Mg as K,Fg as L,Wg as M,Ug as a,Oo as b,Ro as c,ye as d,gu as e,Xg as f,Yg as g,nm as h,Qg as i,Jg as j,Zg as k,tm as l,Gg as m,xg as n,To as o,zg as p,Kg as q,Lg as r,em as s,jg as t,Pg as u,Vg as v,Js as w,Hr as x,Bg as y,eo as z};
