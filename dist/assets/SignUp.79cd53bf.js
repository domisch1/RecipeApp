import{r as u,o as t,a as i,b as s,x as a,z as n,A as l,B as p,d as f,w,e as c}from"./vendor.34b46083.js";import{_ as h}from"./index.ea71d726.js";const _={data(){return{user:{email:"",password:"",confirmPassword:""},formValidation:{wrongEmail:!1,wrongPassword:!1,wrongConfirmPassword:!1}}},methods:{sendSignUp(){this.$store.dispatch("signUp",this.user),this.user={email:"",password:"",confirmPassword:""}},checkForm(){this.formValidation={wrongEmail:!1,wrongPassword:!1,wrongConfirmPassword:!1},this.user.email.includes("@")?this.user.password<6?(this.formValidation.wrongPassword=!0,console.log("Pass")):this.user.confirmPassword!==this.user.password?this.formValidation.wrongConfirmPassword=!0:this.sendSignUp():(this.formValidation.wrongEmail=!0,console.log("Email"))}}},g={id:"sign-up",class:"wrapper"},P=s("section",{id:"cover-image",class:"cover-image-container"},null,-1),v={id:"sign-up-form",class:"form-container"},V={action:"",class:"form"},b=s("h2",{class:"form-caption"},"Create your Account.",-1),k=s("hr",{class:"divider"},null,-1),x={class:"input-container"},C=s("label",{for:"email"},"E-Mail",-1),E={key:0,class:"error-msg"},y={class:"input-container"},U=s("label",{for:"password"},"Password",-1),M={key:0,class:"error-msg"},B={class:"input-container"},N=s("label",{for:"confirm-password"},"Confirm Password",-1),S={key:0,class:"error-msg"},F={class:"subtext"},j=c(" You have an account? "),A=c("Login");function T(Y,o,z,D,e,d){const m=u("router-link");return t(),i("section",g,[P,s("section",v,[s("form",V,[b,k,s("div",x,[C,a(s("input",{type:"text",placeholder:"test@test.com",id:"email",autocomplete:"off","onUpdate:modelValue":o[0]||(o[0]=r=>e.user.email=r)},null,512),[[n,e.user.email]]),e.formValidation.wrongEmail?(t(),i("p",E," Please enter a valid E-Mail adress. ")):l("",!0)]),s("div",y,[U,a(s("input",{type:"password",placeholder:"***************",id:"password",autocomplete:"off","onUpdate:modelValue":o[1]||(o[1]=r=>e.user.password=r)},null,512),[[n,e.user.password]]),e.formValidation.wrongPassword?(t(),i("p",M," Your password must be at least 6 characters long. ")):l("",!0)]),s("div",B,[N,a(s("input",{type:"password",placeholder:"***************",id:"confirm-password",autocomplete:"off","onUpdate:modelValue":o[2]||(o[2]=r=>this.user.confirmPassword=r)},null,512),[[n,this.user.confirmPassword]]),e.formValidation.wrongConfirmPassword?(t(),i("p",S," Must be the same value as password. ")):l("",!0)]),s("button",{class:"action-button",onClick:o[3]||(o[3]=p((...r)=>d.checkForm&&d.checkForm(...r),["prevent"]))}," Sign up "),s("p",F,[j,f(m,{to:"login",class:"subtext-route"},{default:w(()=>[A]),_:1})])])])])}var G=h(_,[["render",T]]);export{G as default};