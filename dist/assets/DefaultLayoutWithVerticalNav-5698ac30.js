import{v as b,j as f,o as a,b as r,w as o,n as _,s as t,q as e,z as h,A as l,T as v,e as k,B as y,r as c}from"./index-ad06e79a.js";import B from"./Footer-6c48fed1.js";import C from"./NavBarNotifications-95d8fcb3.js";import V from"./NavbarThemeSwitcher-8698e44a.js";import w from"./UserProfile-24bbf5d1.js";import A from"./OrderSideBar-56a8cc8a.js";import R from"./NavBarI18n-e05cc4ab.js";import{V as S}from"./VSpacer-f6bbbddf.js";import"./VMenu-0f9b48c2.js";import"./VOverlay-907c7a82.js";import"./lazy-4cfe01f9.js";import"./dialog-transition-9757e826.js";import"./VDivider-4cc22aef.js";import"./VList-9ab7df99.js";import"./ssrBoot-defe399c.js";import"./VListItemAction-ebac8d0e.js";const $=[{title:"Dashboard",to:{name:"dashboard"},icon:{icon:"tabler-dashboard"},roles:["admin"]},{title:"Branches",icon:{icon:"tabler-building-store"},children:[{title:"Branches",to:{name:"branches"},roles:["admin"]},{title:"Service Cost",to:{name:"service-cost"},roles:["admin"]}],roles:["admin"]},{title:"Areas",to:{name:"areas"},icon:{icon:"tabler-building-community"},roles:["admin"]},{title:"All Orders",to:{name:"orders"},icon:{icon:"tabler-package"},roles:["admin","agent","restaurant","operation","logistic"]},{title:"My Orders",to:{name:"my-orders"},icon:{icon:"tabler-package"},roles:["agent"]},{title:"Products",to:{name:"products"},icon:{icon:"tabler-baguette"},children:[{title:"Products",to:{name:"products"},icon:{icon:"tabler-baguette"},roles:["admin","markter"]},{title:"Extra And Flavors",to:{name:"extra-flavors"},icon:{icon:"tabler-baguette"},roles:["admin"]}],roles:["admin","markter"]},{title:"Categories",to:{name:"categories"},icon:{icon:"tabler-bookmark"},roles:["admin","restaurant","markter"]},{title:"Deliveries",to:{name:"deliveries"},icon:{icon:"tabler-truck-delivery"},roles:["admin","restaurant","logistic"]},{title:"Employees",to:{name:"employees"},icon:{icon:"tabler-user-star"},roles:["admin"]},{title:"Users",to:{name:"users"},icon:{icon:"tabler-users"},roles:["admin"]},{title:"Agents",to:{name:"agents"},icon:{icon:"tabler-user-check"},roles:["admin"]},{title:"Marketers",to:{name:"marketers"},icon:{icon:"tabler-user-edit"},roles:["admin"]},{title:"Operations",to:{name:"operations"},icon:{icon:"tabler-user-code"},roles:["admin"]},{title:"Logistics",to:{name:"logistics"},icon:{icon:"tabler-user-share"},roles:["admin"]},{title:"Finances",to:{name:"finances"},icon:{icon:"tabler-user-dollar"},roles:["admin"]},{title:"Banners",to:{name:"banners"},icon:{icon:"tabler-photo"},roles:["admin","markter"]},{title:"Vouchers",to:{name:"vouchers"},icon:{icon:"tabler-gift"},roles:["admin","markter"]},{title:"Reporting",icon:{icon:"tabler-chart-histogram"},roles:["admin","restaurant","operation","finance","logistic","agent"],children:[{title:"Customize Reports",to:{name:"customize-report"},roles:["admin","operation","finance","logistic","agent"]},{title:"Product & Category",to:{name:"product-category-report"},roles:["admin","operation","finance","logistic","agent"]},{title:"Branches & Areas",to:{name:"branches-areas-report"},roles:["admin","restaurant","operation","finance","logistic","agent"]},{title:"Sales Rate",to:{name:"sales-rate-report"},roles:["admin","restaurant","agent"]},{title:"Statistics Analysis",to:{name:"statistics-analysis-report"},roles:["admin"]}]}],x={class:"d-flex h-100 align-center"},X={__name:"DefaultLayoutWithVerticalNav",setup(N){var s;const{appRouteTransition:m,isLessThanOverlayNavBreakpoint:d}=b(),{width:u}=f(),i=(s=JSON.parse(localStorage.getItem("userData")))==null?void 0:s.type;return(z,D)=>{const p=c("IconBtn"),g=c("RouterView");return a(),r(t(y),{"nav-items":t($)},{navbar:o(({toggleVerticalOverlayNavActive:n})=>[_("div",x,[t(d)(t(u))?(a(),r(p,{key:0,id:"vertical-nav-toggle-btn",class:"ms-n3",onClick:I=>n(!0)},{default:o(()=>[e(h,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"])):l("",!0),e(V),e(S),t(i)=="admin"||t(i)=="restaurant"?(a(),r(C,{key:1,class:"me-2"})):l("",!0),e(R,{class:"me-2"}),e(w)])]),footer:o(()=>[e(B)]),default:o(()=>[e(g,null,{default:o(({Component:n})=>[e(v,{name:t(m),mode:"out-in"},{default:o(()=>[(a(),r(k(n)))]),_:2},1032,["name"])]),_:1}),e(A)]),_:1},8,["nav-items"])}}};export{X as default};
