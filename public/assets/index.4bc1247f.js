import{r as E,o as b,c as A,a as C,b as c,d as S,w as k,e as O,f as P,g as $,i as j,h as I,O as M,j as V,k as W,l as w,v as _,s as z,m as N,n as L,p as y,q as R,t as T,y as F,u as U}from"./vendor.34b46083.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}};B();var D=(e,t)=>{for(const[i,s]of t)e[i]=s;return e};const H={created(){this.$store.dispatch("watchAuth")}};function K(e,t,i,s,a,r){const n=E("router-view");return b(),A(n)}var q=D(H,[["render",K]]);const G="modulepreload",x={},X="/",u=function(t,i){return!i||i.length===0?t():Promise.all(i.map(s=>{if(s=`${X}${s}`,s in x)return;x[s]=!0;const a=s.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":G,a||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),a)return new Promise((p,m)=>{n.addEventListener("load",p),n.addEventListener("error",m)})})).then(()=>t())};var Y="/assets/Clock.26e622f6.svg",Q="/assets/Star.8f1ed1c8.svg",Z="/assets/ShoppingCart.90ec9179.svg";const J={},ee={id:"landing-page"},te={id:"cover",class:"flex flex-col justify-center items-center w-screen h-96 bg-gray-200 px-8 py-16"},se=c("h1",{class:"font-main text-3xl font-semibold mb-8 text-center"}," Make your life easyer by using this amazing App! ",-1),ae=c("p",{class:"font-main text-base text-center w-auto sm:w-96 mb-10"}," A must have for everyone who want's to cook by their own and save lots of time ",-1),ie=O(" Register now "),re=c("section",{id:"features",class:"flex flex-col sm:flex-row justify-around mx-8 my-10 sm:mx-32 flex-wrap"},[c("div",{class:"feature-container"},[c("img",{src:Y,alt:"Clock",class:"feature-img"}),c("p",{class:"feature-text"}," A time saving experience. With an awesome workflow and a great idea you save an amazing amount of time! ")]),c("div",{class:"feature-container"},[c("img",{src:Q,alt:"Star",class:"feature-img"}),c("p",{class:"feature-text"}," A time saving experience. With an awesome workflow and a great idea you save an amazing amount of time! ")]),c("div",{class:"feature-container"},[c("img",{src:Z,alt:"Shopping Cart",class:"feature-img"}),c("p",{class:"feature-text"}," A time saving experience. With an awesome workflow and a great idea you save an amazing amount of time! ")])],-1);function ne(e,t,i,s,a,r){const n=E("router-link");return b(),C("section",ee,[c("section",te,[se,ae,S(n,{to:"/signup",class:"py-3 font-main font-semibold w-full sm:w-80 rounded text-base bg-black text-white hover:bg-gray-800 transition-all duration-150 text-center"},{default:k(()=>[ie]),_:1})]),re])}var oe=D(J,[["render",ne]]);const ce=[{path:"/",component:oe},{path:"/signup",component:()=>u(()=>import("./SignUp.c4b6b399.js"),["assets/SignUp.c4b6b399.js","assets/vendor.34b46083.js"])},{path:"/login",component:()=>u(()=>import("./Login.71a1235a.js"),["assets/Login.71a1235a.js","assets/vendor.34b46083.js"])},{path:"/create",component:()=>u(()=>import("./CreateRecipe.31db9d88.js"),["assets/CreateRecipe.31db9d88.js","assets/Navbar.4f2bac70.js","assets/vendor.34b46083.js"])},{path:"/recipe-list",component:()=>u(()=>import("./RecipeList.364bc86f.js"),["assets/RecipeList.364bc86f.js","assets/Navbar.4f2bac70.js","assets/vendor.34b46083.js","assets/Recipe.b64ae880.js"])},{path:"/draft",component:()=>u(()=>import("./Draft.aa1822d8.js"),["assets/Draft.aa1822d8.js","assets/Navbar.4f2bac70.js","assets/vendor.34b46083.js","assets/Recipe.b64ae880.js"])},{path:"/shopping-list",component:()=>u(()=>import("./ShoppingList.298cc444.js"),["assets/ShoppingList.298cc444.js","assets/Navbar.4f2bac70.js","assets/vendor.34b46083.js"])}],v=P({history:$(),routes:ce}),pe={apiKey:"AIzaSyCtR9nHWXHKaC5glpv4Mmi2bX8FtUGsCeM",authDomain:"recipeapp-c3921.firebaseapp.com",projectId:"recipeapp-c3921",storageBucket:"recipeapp-c3921.appspot.com",messagingSenderId:"61991979167",appId:"1:61991979167:web:fe1a6e97d83a6d9e2b7aaa",measurementId:"G-EQFGVH76K4"};j(pe);const h=I(),d=M(),de=V({state(){return{userEmail:"",recipes:[],dates:[],draftedRecipes:[],shoppingList:[],draftDisabled:!1}},getters:{draftDisabled(e){return e.draftDisabled}},mutations:{setUser(e,t){e.userEmail=t.email},setRecipes(e,t){e.recipes=[],t.forEach(i=>{e.recipes.push(i.data())})},setDraftedRecipes(e,t){e.shoppingList=[],e.draftedRecipes=[];const i=new RegExp("([0-9]+)|([a-zA-Z]+)","g");t.forEach(s=>{e.draftedRecipes.push(s.data());for(let a=0;a<s.data().list.length;a++)e.shoppingList.push(s.data().list[a])});for(let s=0;s<e.shoppingList.length-1;s++)for(let a=s+1;a<e.shoppingList.length;a++)if(e.shoppingList[s].ingredient===e.shoppingList[a].ingredient){let r=e.shoppingList[s].amount.match(i),n=e.shoppingList[a].amount.match(i);if(r[1]===n[1]){let p=parseFloat(r[0]),m=parseFloat(n[0]),g=p+m;r.length&&n.length===1?(e.shoppingList[s].amount=g,e.shoppingList.splice(a,1)):(e.shoppingList[s].amount=g+r[1],e.shoppingList.splice(a,1))}}e.draftedRecipes.sort((s,a)=>s.index-a.index)},draftRecipesContent(e,t){e.dates=t.datesContainer},cleanRecipesContent(e){e.shoppingList=[],e.dates=[]},draftMutations(e,t){t.dateDiff>=e.recipes.length?e.draftDisabled=!0:e.draftDisabled=!1}},actions:{signUp(e,t){W(h,t.email,t.password).then(i=>{v.push("/create"),w(_(d,"users",t.email),{email:t.email})}).catch(i=>{console.log(i)})},login(e,t){z(h,t.email,t.password).then(i=>{v.push("/create")}).catch(i=>{console.log(i)})},signOut(e){N(h).then(()=>{v.push("/login")}).catch(t=>{console.log(t)})},watchAuth(e){L(h,t=>{t?(e.commit("setUser",t),e.dispatch("getRecipes"),e.dispatch("getDraftedRecipes")):console.log("user signed out")})},createRecipe(e,t){w(_(d,"users",e.state.userEmail,"recipes",t.name),{name:t.name,category:t.category,duration:t.duration,list:t.list,description:t.description})},async cleanDraftedRecipes(e,t){(await y(R(d,"users",e.state.userEmail,"draftedRecipes"))).forEach(s=>{T(_(d,"users",e.state.userEmail,"draftedRecipes",s.data().name))}),e.commit("cleanRecipesContent"),e.dispatch("getDraftedRecipes"),e.dispatch("createDraftedRecipe",{dateStart:t.dateStart,dateEnd:t.dateEnd})},async createDraftedRecipe(e,t){const i=t.dateEnd.getDate()-t.dateStart.getDate();if(i>=e.state.recipes.length)e.commit("draftMutations",{dateDiff:i});else{let s=[];e.commit("draftMutations",{dateDiff:i});let a=[...e.state.recipes],r=[],n=[];const p={weekday:"long",year:"numeric",month:"long",day:"numeric"},m=t.dateStart.getMonth(),g=t.dateStart.getFullYear();r.push(t.dateStart.toLocaleString("de-DE",p));for(let o=1;o<i;o++){let l=t.dateStart.getDate()+o,f=new Date(g,m,l);r.push(f.toLocaleString("de-DE",p))}r.push(t.dateEnd.toLocaleString("de-DE",p));for(let o=0;o<=i;o++){let l=Math.floor(Math.random()*a.length);s.push(a[l]),s[o].date=r[o],s[o].index=o;for(let f=0;f<a[l].list.length;f++)n.push(a[l].list[f]);w(_(d,"users",e.state.userEmail,"draftedRecipes",s[o].name),{name:s[o].name,category:s[o].category,duration:s[o].duration,date:s[o].date,index:s[o].index,list:s[o].list,description:s[o].description}),a.splice(l,1)}e.commit("draftRecipesContent",{datesContainer:r}),e.dispatch("getDraftedRecipes")}},getRecipes(e){const t=F(R(d,"users",e.state.userEmail,"recipes"),i=>{e.commit("setRecipes",i)});L(h,i=>{i||t()})},async getDraftedRecipes(e){const t=await y(R(d,"users",e.state.userEmail,"draftedRecipes"));e.commit("setDraftedRecipes",t)}}});U(q).use(de).use(v).mount("#app");export{D as _};
