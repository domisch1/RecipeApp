import{r as c,o as g,a as d,b as t,C as e,d as r,w as l,x as u,e as o}from"./vendor.029b2c96.js";import{_}from"./index.2e650087.js";const h={data(){return{toggle:!1}},methods:{toggleHamburger(){this.toggle=!this.toggle},sendSignOut(){this.$store.dispatch("signOut")}}},m=o("Create"),p=o("Recipe List"),v=o("Draft"),b=o("Shopping List");function f(k,s,x,C,N,a){const n=c("router-link");return g(),d("header",{class:e(["navbar-container z-50",{"mobile-navbar":this.toggle}])},[t("div",{class:"hamburger",onClick:s[0]||(s[0]=(...i)=>a.toggleHamburger&&a.toggleHamburger(...i))},[t("span",{id:"first",class:e(["hamburger-line",{first:this.toggle}])},null,2),t("span",{id:"second",class:e(["hamburger-line",{"hide-element":this.toggle}])},null,2),t("span",{id:"third",class:e(["hamburger-line",{third:this.toggle}])},null,2)]),t("nav",{class:e(["navbar",{"hide-element":!this.toggle}])},[r(n,{to:"create",class:"nav-link"},{default:l(()=>[m]),_:1}),r(n,{to:"recipe-list",class:"nav-link"},{default:l(()=>[p]),_:1}),r(n,{to:"draft",class:"nav-link"},{default:l(()=>[v]),_:1}),r(n,{to:"shopping-list",class:"nav-link"},{default:l(()=>[b]),_:1})],2),(g(),d("button",{key:0,class:e(["logout",{"hide-element":!this.toggle}]),onClick:s[1]||(s[1]=u((...i)=>a.sendSignOut&&a.sendSignOut(...i),["prevent"]))}," Logout ",2))],2)}var w=_(h,[["render",f]]);export{w as N};