import{r as d,o as l,a as p,b as s,n,v as r,p as u,d as _,w as m,e as a}from"./vendor.e04b2906.js";import{_ as f}from"./SimpleShiny.b9c62c88.js";import{_ as h}from"./index.2e78054d.js";const w={data(){return{user:{email:"",password:""}}},methods:{sendSignUp(){this.$store.dispatch("signUp",this.user),this.user={email:"",password:""}}}},g={id:"sign-up",class:"wrapper"},v=s("section",{id:"cover-image",class:"cover-image-container"},[s("img",{src:f,alt:"Background",class:"cover-image"})],-1),b={id:"sign-up-form",class:"form-container"},x={action:"",class:"form"},S=s("h2",{class:"form-caption"},"Create your Account.",-1),U=s("hr",{class:"divider"},null,-1),k={class:"input-container"},y=s("label",{for:"email"},"E-Mail",-1),C={class:"input-container"},V=s("label",{for:"password"},"Password",-1),B=s("div",{class:"input-container"},[s("label",{for:"confirm-password"},"Confirm Password"),s("input",{type:"password",placeholder:"***************",id:"confirm-password",autocomplete:"off"})],-1),j={class:"subtext"},M=a(" You have an account? "),N=a("Login");function E(P,o,T,A,t,i){const c=d("router-link");return l(),p("section",g,[v,s("section",b,[s("form",x,[S,U,s("div",k,[y,n(s("input",{type:"text",placeholder:"test@test.com",id:"email",autocomplete:"off","onUpdate:modelValue":o[0]||(o[0]=e=>t.user.email=e)},null,512),[[r,t.user.email]])]),s("div",C,[V,n(s("input",{type:"password",placeholder:"***************",id:"password",autocomplete:"off","onUpdate:modelValue":o[1]||(o[1]=e=>t.user.password=e)},null,512),[[r,t.user.password]])]),B,s("button",{class:"action-button",onClick:o[2]||(o[2]=u((...e)=>i.sendSignUp&&i.sendSignUp(...e),["prevent"]))}," Sign up "),s("p",j,[M,_(c,{to:"login",class:"subtext-route"},{default:m(()=>[N]),_:1})])])])])}var q=h(w,[["render",E]]);export{q as default};