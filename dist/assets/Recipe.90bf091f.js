import{_ as a}from"./index.371774f6.js";import{o as n,a as p,b as e,I as o,C as c}from"./vendor.34b46083.js";var l="/assets/ShevronDown.e902212b.svg";const d={data(){return{toggleRecipe:!1}},methods:{openRecipe(){this.toggleRecipe=!this.toggleRecipe}}},_={class:"recipe-header"},h={class:"recipe-caption"},m={class:"recipe-content"},g={class:"relative mb-3"},v={class:"recipe-duration"},f={class:"recipe-category"},R={class:"relative"},u=e("p",{class:"font-main font-semibold mb-2"},"Description",-1),b={class:"font-main"};function $(s,t,y,k,w,i){return n(),p("div",{class:c(["recipe",{"recipe-open":this.toggleRecipe}])},[e("div",_,[e("h3",h,[o(s.$slots,"recipe-name")]),e("img",{src:l,alt:"Arrow",class:c(["recipe-icon",{"turn-arrow":this.toggleRecipe}]),onClick:t[0]||(t[0]=(...r)=>i.openRecipe&&i.openRecipe(...r))},null,2)]),e("div",m,[e("div",g,[e("span",v,[o(s.$slots,"recipe-duration")]),e("span",f,[o(s.$slots,"recipe-category")])]),o(s.$slots,"table-container"),e("div",R,[u,e("p",b,[o(s.$slots,"recipe-description")])])])],2)}var j=a(d,[["render",$]]);export{j as R};