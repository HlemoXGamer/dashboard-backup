import{o as n,c as p,F as b,a as k,b as f,e as y,_ as $,f as w,i as C,j as z,k as R,l as S,m as B,n as a,p as m,q as t,s as e,t as g,v as V,w as s,V as L,x as h,y as N,T as x,r as v}from"./index-ad06e79a.js";import A from"./Footer-6c48fed1.js";import E from"./NavBarNotifications-95d8fcb3.js";import I from"./NavbarThemeSwitcher-8698e44a.js";import D from"./UserProfile-24bbf5d1.js";import F from"./NavBarI18n-e05cc4ab.js";import{V as P}from"./VSpacer-f6bbbddf.js";import"./VMenu-0f9b48c2.js";import"./VOverlay-907c7a82.js";import"./lazy-4cfe01f9.js";import"./dialog-transition-9757e826.js";import"./VDivider-4cc22aef.js";import"./VList-9ab7df99.js";import"./ssrBoot-defe399c.js";import"./VListItemAction-ebac8d0e.js";const T={class:"nav-items"},W={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(d){const i=l=>"children"in l?$:w;return(l,u)=>(n(),p("ul",T,[(n(!0),p(b,null,k(d.navItems,(o,c)=>(n(),f(y(i(o)),{key:c,item:o},null,8,["item"]))),128))]))}},q={class:"layout-navbar"},H={class:"navbar-content-container"},O={class:"layout-horizontal-nav"},M={class:"horizontal-nav-content-container"},j={class:"layout-page-content"},U={class:"layout-footer"},Y={class:"footer-content-container"},G={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(d){const{y:i}=C(),{width:l}=z(),u=R(),o=S(!1);u.beforeEach(()=>{o.value=!0}),u.afterEach(()=>{o.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:_}=B();return(r,Q)=>(n(),p("div",{class:g(["layout-wrapper",e(c)(e(l),e(i))])},[a("div",{class:g(["layout-navbar-and-nav-container",e(_)&&"header-blur"])},[a("div",q,[a("div",H,[m(r.$slots,"navbar")])]),a("div",O,[a("div",M,[t(e(W),{"nav-items":d.navItems},null,8,["nav-items"])])])],2),a("main",j,[r.$slots["content-loading"]?(n(),p(b,{key:0},[e(o)?m(r.$slots,"content-loading",{key:0}):m(r.$slots,"default",{key:1})],64)):m(r.$slots,"default",{key:1})]),a("footer",U,[a("div",Y,[m(r.$slots,"footer")])])],2))}},J=[{title:"Dashboard",to:{name:"dashboard"},icon:{icon:"tabler-dashboard"},roles:["admin"]},{title:"Branches",icon:{icon:"tabler-building-store"},children:[{title:"Branches",to:{name:"branches"},roles:["admin"]},{title:"Service Cost",to:{name:"service-cost"},roles:["admin"]}],roles:["admin"]},{title:"Areas",to:{name:"areas"},icon:{icon:"tabler-building-community"},roles:["admin"]},{title:"All Orders",to:{name:"orders"},icon:{icon:"tabler-package"},roles:["admin","agent","restaurant","operation","logistic"]},{title:"My Orders",to:{name:"my-orders"},icon:{icon:"tabler-package"},roles:["agent"]},{title:"Products",to:{name:"products"},icon:{icon:"tabler-baguette"},children:[{title:"Products",to:{name:"products"},icon:{icon:"tabler-baguette"},roles:["admin","markter"]},{title:"Extra And Flavors",to:{name:"extra-flavors"},icon:{icon:"tabler-baguette"},roles:["admin"]}],roles:["admin","markter"]},{title:"Categories",to:{name:"categories"},icon:{icon:"tabler-bookmark"},roles:["admin","restaurant","markter"]},{title:"Deliveries",to:{name:"deliveries"},icon:{icon:"tabler-truck-delivery"},roles:["admin","restaurant","logistic"]},{title:"Employees",to:{name:"employees"},icon:{icon:"tabler-user-star"},roles:["admin"]},{title:"Users",to:{name:"users"},icon:{icon:"tabler-users"},roles:["admin"]},{title:"Agents",to:{name:"agents"},icon:{icon:"tabler-user-check"},roles:["admin"]},{title:"Marketers",to:{name:"marketers"},icon:{icon:"tabler-user-edit"},roles:["admin"]},{title:"Operations",to:{name:"operations"},icon:{icon:"tabler-user-code"},roles:["admin"]},{title:"Logistics",to:{name:"logistics"},icon:{icon:"tabler-user-share"},roles:["admin"]},{title:"Finances",to:{name:"finances"},icon:{icon:"tabler-user-dollar"},roles:["admin"]},{title:"Banners",to:{name:"banners"},icon:{icon:"tabler-photo"},roles:["admin","markter"]},{title:"Vouchers",to:{name:"vouchers"},icon:{icon:"tabler-gift"},roles:["admin","markter"]},{title:"Reporting",icon:{icon:"tabler-chart-histogram"},roles:["admin","restaurant","operation","finance","logistic","agent"],children:[{title:"Customize Reports",to:{name:"customize-report"},roles:["admin","operation","finance","logistic","agent"]},{title:"Product & Category",to:{name:"product-category-report"},roles:["admin","operation","finance","logistic","agent"]},{title:"Branches & Areas",to:{name:"branches-areas-report"},roles:["admin","restaurant","operation","finance","logistic","agent"]},{title:"Sales Rate",to:{name:"sales-rate-report"},roles:["admin","restaurant","agent"]},{title:"Statistics Analysis",to:{name:"statistics-analysis-report"},roles:["admin"]}]}],K={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},pe={__name:"DefaultLayoutWithHorizontalNav",setup(d){const{appRouteTransition:i}=V();return(l,u)=>{const o=v("RouterLink"),c=v("RouterView");return n(),f(e(G),{"nav-items":e(J)},{navbar:s(()=>[t(o,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:s(()=>[t(e(L),{nodes:e(h).app.logo},null,8,["nodes"]),a("h1",K,N(e(h).app.title),1)]),_:1}),t(P),t(I,{class:"me-2"}),t(E,{class:"me-2"}),t(F),t(D)]),footer:s(()=>[t(A)]),default:s(()=>[t(c,null,{default:s(({Component:_})=>[t(x,{name:e(i),mode:"out-in"},{default:s(()=>[(n(),f(y(_)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{pe as default};
