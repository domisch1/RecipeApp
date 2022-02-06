import{r as L,o as D,c as S,a as C,b as R,d as x,w as O,e as $,f as P,g as k,i as I,h as j,O as V,j as M,k as N,l as E,v as g,s as T,m as F,n as v,p as w,q as b,t as U,y as B,u as W}from"./vendor.34b46083.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}};H();var y=(e,t)=>{for(const[i,s]of t)e[i]=s;return e};const K={created(){this.$store.dispatch("watchAuth")}};function q(e,t,i,s,r,n){const a=L("router-view");return D(),S(a)}var z=y(K,[["render",q]]);const G="modulepreload",A={},X="/",l=function(t,i){return!i||i.length===0?t():Promise.all(i.map(s=>{if(s=`${X}${s}`,s in A)return;A[s]=!0;const r=s.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":G,r||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),r)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",u)})})).then(()=>t())},Y={},Q={id:"landing-page"},Z={id:"cover",class:"flex flex-col justify-center items-center w-screen h-screen px-8 py-16"},J=R("h1",{class:"font-main text-3xl font-semibold mb-4 text-center"}," Save your best Recipes! ",-1),ee=R("p",{class:"font-main text-base text-center w-auto sm:w-96 mb-6"}," A place to store all of your Recipes. ",-1),te=$(" Register now ");function se(e,t,i,s,r,n){const a=L("router-link");return D(),C("section",Q,[R("section",Z,[J,ee,x(a,{to:"/signup",class:"py-3 font-main font-semibold w-full sm:w-80 rounded text-base bg-black text-white hover:bg-gray-800 transition-all duration-150 text-center"},{default:O(()=>[te]),_:1})])])}var re=y(Y,[["render",se]]);const ie=[{path:"/",component:re},{path:"/signup",component:()=>l(()=>import("./SignUp.79cd53bf.js"),["assets/SignUp.79cd53bf.js","assets/vendor.34b46083.js"])},{path:"/login",component:()=>l(()=>import("./Login.b004bf01.js"),["assets/Login.b004bf01.js","assets/vendor.34b46083.js"])},{path:"/create",component:()=>l(()=>import("./CreateRecipe.88f00564.js"),["assets/CreateRecipe.88f00564.js","assets/Navbar.e819376f.js","assets/vendor.34b46083.js"])},{path:"/recipe-list",component:()=>l(()=>import("./RecipeList.55c91191.js"),["assets/RecipeList.55c91191.js","assets/Navbar.e819376f.js","assets/vendor.34b46083.js","assets/Recipe.4789e180.js"])},{path:"/draft",component:()=>l(()=>import("./Draft.b0ed9275.js"),["assets/Draft.b0ed9275.js","assets/Navbar.e819376f.js","assets/vendor.34b46083.js","assets/Recipe.4789e180.js"])},{path:"/shopping-list",component:()=>l(()=>import("./ShoppingList.3a5f21ea.js"),["assets/ShoppingList.3a5f21ea.js","assets/Navbar.e819376f.js","assets/vendor.34b46083.js"])}],_=P({history:k(),routes:ie}),ne={apiKey:"AIzaSyCtR9nHWXHKaC5glpv4Mmi2bX8FtUGsCeM",authDomain:"recipeapp-c3921.firebaseapp.com",projectId:"recipeapp-c3921",storageBucket:"recipeapp-c3921.appspot.com",messagingSenderId:"61991979167",appId:"1:61991979167:web:fe1a6e97d83a6d9e2b7aaa",measurementId:"G-EQFGVH76K4"};I(ne);const m=j(),p=V(),ae=M({state(){return{userEmail:"",recipes:[],dates:[],draftedRecipes:[],shoppingList:[],draftDisabled:!1}},getters:{draftDisabled(e){return e.draftDisabled}},mutations:{setUser(e,t){e.userEmail=t.email},setRecipes(e,t){e.recipes=[],t.forEach(i=>{e.recipes.push(i.data())})},setDraftedRecipes(e,t){e.shoppingList=[],e.draftedRecipes=[];const i=new RegExp("([0-9]+)|([a-zA-Z]+)","g");t.forEach(s=>{e.draftedRecipes.push(s.data());for(let r=0;r<s.data().list.length;r++)e.shoppingList.push(s.data().list[r])});for(let s=0;s<e.shoppingList.length-1;s++)for(let r=s+1;r<e.shoppingList.length;r++)if(e.shoppingList[s].ingredient===e.shoppingList[r].ingredient){let n=e.shoppingList[s].amount.match(i),a=e.shoppingList[r].amount.match(i);if(n[1]===a[1]){let c=parseFloat(n[0]),u=parseFloat(a[0]),h=c+u;n.length&&a.length===1?(e.shoppingList[s].amount=h,e.shoppingList.splice(r,1)):(e.shoppingList[s].amount=h+n[1],e.shoppingList.splice(r,1))}}e.draftedRecipes.sort((s,r)=>s.index-r.index)},draftRecipesContent(e,t){e.dates=t.datesContainer},cleanRecipesContent(e){e.shoppingList=[],e.dates=[]},draftMutations(e,t){t.dateDiff>=e.recipes.length?e.draftDisabled=!0:e.draftDisabled=!1}},actions:{signUp(e,t){N(m,t.email,t.password).then(i=>{_.push("/create"),E(g(p,"users",t.email),{email:t.email})}).catch(i=>{console.log(i)})},login(e,t){T(m,t.email,t.password).then(i=>{_.push("/create")}).catch(i=>{console.log(i)})},signOut(e){F(m).then(()=>{_.push("/login")}).catch(t=>{console.log(t)})},watchAuth(e){v(m,t=>{t?(e.commit("setUser",t),e.dispatch("getRecipes"),e.dispatch("getDraftedRecipes")):console.log("user signed out")})},createRecipe(e,t){E(g(p,"users",e.state.userEmail,"recipes",t.name),{name:t.name,category:t.category,duration:t.duration,list:t.list,description:t.description})},async cleanDraftedRecipes(e,t){(await w(b(p,"users",e.state.userEmail,"draftedRecipes"))).forEach(s=>{U(g(p,"users",e.state.userEmail,"draftedRecipes",s.data().name))}),e.commit("cleanRecipesContent"),e.dispatch("getDraftedRecipes"),e.dispatch("createDraftedRecipe",{dateStart:t.dateStart,dateEnd:t.dateEnd})},async createDraftedRecipe(e,t){const i=t.dateEnd.getDate()-t.dateStart.getDate();if(i>=e.state.recipes.length)e.commit("draftMutations",{dateDiff:i});else{let s=[];e.commit("draftMutations",{dateDiff:i});let r=[...e.state.recipes],n=[],a=[];const c={weekday:"long",year:"numeric",month:"long",day:"numeric"},u=t.dateStart.getMonth(),h=t.dateStart.getFullYear();n.push(t.dateStart.toLocaleString("de-DE",c));for(let o=1;o<i;o++){let d=t.dateStart.getDate()+o,f=new Date(h,u,d);n.push(f.toLocaleString("de-DE",c))}n.push(t.dateEnd.toLocaleString("de-DE",c));for(let o=0;o<=i;o++){let d=Math.floor(Math.random()*r.length);s.push(r[d]),s[o].date=n[o],s[o].index=o;for(let f=0;f<r[d].list.length;f++)a.push(r[d].list[f]);E(g(p,"users",e.state.userEmail,"draftedRecipes",s[o].name),{name:s[o].name,category:s[o].category,duration:s[o].duration,date:s[o].date,index:s[o].index,list:s[o].list,description:s[o].description}),r.splice(d,1)}e.commit("draftRecipesContent",{datesContainer:n}),e.dispatch("getDraftedRecipes")}},getRecipes(e){const t=B(b(p,"users",e.state.userEmail,"recipes"),i=>{e.commit("setRecipes",i)});v(m,i=>{i||t()})},async getDraftedRecipes(e){const t=await w(b(p,"users",e.state.userEmail,"draftedRecipes"));e.commit("setDraftedRecipes",t)}}});W(z).use(ae).use(_).mount("#app");export{y as _};