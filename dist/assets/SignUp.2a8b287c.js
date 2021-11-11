import{r as u,o as r,a as i,b as s,x as a,z as n,A as l,B as p,d as f,w,e as c}from"./vendor.34b46083.js";import{_ as h}from"./SimpleShiny.b9c62c88.js";import{_}from"./index.371774f6.js";const g={data(){return{user:{email:"",password:"",confirmPassword:""},formValidation:{wrongEmail:!1,wrongPassword:!1,wrongConfirmPassword:!1}}},methods:{sendSignUp(){this.$store.dispatch("signUp",this.user),this.user={email:"",password:"",confirmPassword:""}},checkForm(){this.formValidation={wrongEmail:!1,wrongPassword:!1,wrongConfirmPassword:!1},this.user.email.includes("@")?this.user.password<6?(this.formValidation.wrongPassword=!0,console.log("Pass")):this.user.confirmPassword!==this.user.password?this.formValidation.wrongConfirmPassword=!0:this.sendSignUp():(this.formValidation.wrongEmail=!0,console.log("Email"))}}},x={id:"sign-up",class:"wrapper"},P=s("section",{id:"cover-image",class:"cover-image-container"},[s("img",{src:h,alt:"Background",class:"cover-image"})],-1),v={id:"sign-up-form",class:"form-container"},V={action:"",class:"form"},b=s("h2",{class:"form-caption"},"Create your Account.",-1),k=s("hr",{class:"divider"},null,-1),C={class:"input-container"},y=s("label",{for:"email"},"E-Mail",-1),E={key:0,class:"text-sm text-red-700 mt-2 font-main"},U={class:"input-container"},S=s("label",{for:"password"},"Password",-1),B={key:0,class:"text-sm text-red-700 mt-2 font-main"},M={class:"input-container"},N=s("label",{for:"confirm-password"},"Confirm Password",-1),j={key:0,class:"text-sm text-red-700 mt-2 font-main"},F={class:"subtext"},A=c(" You have an account? "),T=c("Login");function Y(z,o,D,L,t,d){const m=u("router-link");return r(),i("section",x,[P,s("section",v,[s("form",V,[b,k,s("div",C,[y,a(s("input",{type:"text",placeholder:"test@test.com",id:"email",autocomplete:"off","onUpdate:modelValue":o[0]||(o[0]=e=>t.user.email=e)},null,512),[[n,t.user.email]]),this.formValidation.wrongEmail?(r(),i("p",E," Please enter a valid E-Mail adress. ")):l("",!0)]),s("div",U,[S,a(s("input",{type:"password",placeholder:"***************",id:"password",autocomplete:"off","onUpdate:modelValue":o[1]||(o[1]=e=>t.user.password=e)},null,512),[[n,t.user.password]]),this.formValidation.wrongPassword?(r(),i("p",B," Your password must be at least 6 characters long. ")):l("",!0)]),s("div",M,[N,a(s("input",{type:"password",placeholder:"***************",id:"confirm-password",autocomplete:"off","onUpdate:modelValue":o[2]||(o[2]=e=>this.user.confirmPassword=e)},null,512),[[n,this.user.confirmPassword]]),this.formValidation.wrongConfirmPassword?(r(),i("p",j," Must be the same value as password. ")):l("",!0)]),s("button",{class:"action-button",onClick:o[3]||(o[3]=p((...e)=>d.checkForm&&d.checkForm(...e),["prevent"]))}," Sign up "),s("p",F,[A,f(m,{to:"login",class:"subtext-route"},{default:w(()=>[T]),_:1})])])])])}var I=_(g,[["render",Y]]);export{I as default};
