import{N as b}from"./Navbar.dc0b3494.js";import{R as _}from"./Recipe.90bf091f.js";import{_ as v}from"./index.371774f6.js";import{r as c,o as a,a as i,d as h,b as e,F as d,G as m,c as y,w as s,e as n,H as t}from"./vendor.34b46083.js";const f={data(){return{recipes:[{name:"Chicken with rice",duration:"45 minutes",category:"Omnivor",ingredients:[{ingredient:"Chicken filet",amount:3},{ingredient:"Rice",amount:"300g"},{ingredient:"Water",amount:"500ml"}],description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{name:"Smoothie bowl",duration:"15 minutes",category:"Vegan",ingredients:[{ingredient:"Bananas",amount:2},{ingredient:"Apples",amount:1},{ingredient:"Orange",amount:1},{ingredient:"Almond milk",amount:"200ml"},{ingredient:"Chia seeds",amount:"50g"}],description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"}]}},components:{Navbar:b,Recipe:_}},k={id:"recipe-list"},w={class:"container-wrapper"},x=e("h2",{class:"caption"},"These are your Recipes.",-1),L={class:"table w-full font-main mb-4"},j=e("div",{class:"table-row-group"},[e("div",{class:"table-row bg-gray-800"},[e("div",{class:"table-cell text-center font-semibold text-white py-2"}," Ingredient "),e("div",{class:"table-cell text-center font-semibold text-white py-2"}," Amount ")])],-1),N={class:"table-row bg-gray-100"},R={class:"table-cell text-center py-2"},A={class:"table-cell text-center py-2"};function B(C,$,S,V,q,F){const l=c("navbar"),u=c("recipe");return a(),i("section",k,[h(l),e("section",w,[x,(a(!0),i(d,null,m(this.$store.state.recipes,(o,p)=>(a(),y(u,{key:p},{"recipe-name":s(()=>[n(t(o.name),1)]),"recipe-duration":s(()=>[n(t(o.duration),1)]),"recipe-category":s(()=>[n(t(o.category),1)]),"table-container":s(()=>[e("div",L,[j,(a(!0),i(d,null,m(o.list,(r,g)=>(a(),i("div",{class:"table-row-group",key:g},[e("div",N,[e("div",R,t(r.ingredient),1),e("div",A,t(r.amount),1)])]))),128))])]),"recipe-description":s(()=>[n(t(o.description),1)]),_:2},1024))),128))])])}var G=v(f,[["render",B]]);export{G as default};