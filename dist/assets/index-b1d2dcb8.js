import{_ as A}from"./DialogCloseBtn-513e4898.js";import{r as z,g as F}from"./employees-12337b4c.js";import{D as L,l as u,aV as O,O as R,r as j,o as D,c as J,q as e,w as a,s as n,I as V,aX as h,H as v,az as k,G as B,n as S,z as C,F as P,R as U,b as q,a2 as G,y as w,a1 as x,t as H,aY as M,aZ as E,a_ as X}from"./index-581c2083.js";import{V as Y}from"./VDialog-9c77a5f1.js";import{V as Z}from"./VDataTable-06e6a8ff.js";import"./VOverlay-b3d70df2.js";import"./lazy-e0bc52de.js";import"./dialog-transition-e2ab3ff7.js";import"./VCheckboxBtn-36803dae.js";import"./VSelectionControl-6e42f01a.js";import"./VSelect-91e75b33.js";import"./VList-800b0139.js";import"./ssrBoot-f2e19377.js";import"./VDivider-007f86e5.js";import"./VMenu-568d971d.js";import"./VChip-2cd4c1fb.js";import"./filter-887944dd.js";import"./VTable-db7fafcb.js";const K={class:"d-flex gap-1"},Q={__name:"EmployeesTable",props:{search:{type:String,default:""},employees:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(f){const p=f,s=L().t,d=u([]),l=u(!1),r=O(),o=u(!1),_=R(()=>[{title:s("Employee Code"),sortable:!1,key:"employee_code"},{title:s("Name"),sortable:!1,key:"employee_name"},{title:s("Phone Number"),sortable:!1,key:"employee_phone"},{title:s("Email"),sortable:!1,key:"employee_email"},{title:s("Position"),sortable:!1,key:"employee_position"},{title:s("Actions"),key:"actions",sortable:!1,align:"center"}]),y=(i,t,g,b)=>String(g.raw.employee_name).toLowerCase().includes(t.toLowerCase())?String(g.raw.employee_name).toLowerCase().includes(t.toLowerCase()):!1;let $={};const T=i=>{$=i,d.value=JSON.stringify(i),d.value=JSON.parse(d.value),o.value=!0},I=async()=>{l.value=!0;try{await z(d.value.v_id),p.employees.splice(p.employees.indexOf($),1),r.success("Employee deleted successfully"),l.value=!1,o.value=!1}catch(i){r.error(i.response.data.message)}};return(i,t)=>{const g=A,b=j("IconBtn");return D(),J(P,null,[e(Y,{modelValue:n(o),"onUpdate:modelValue":t[3]||(t[3]=m=>B(o)?o.value=m:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[e(g,{onClick:t[0]||(t[0]=m=>o.value=!n(o))}),e(V,{title:"Delete Employee"},{default:a(()=>[e(h,null,{default:a(()=>[v(" Are you sure that you want to delete this Employee? ")]),_:1}),e(h,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(k,{color:"secondary",variant:"tonal",onClick:t[1]||(t[1]=m=>o.value=!1),disabled:n(l)},{default:a(()=>[v(" Cancel ")]),_:1},8,["disabled"]),e(k,{onClick:t[2]||(t[2]=m=>I()),loading:n(l)},{default:a(()=>[v(" Delete ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(V,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:f.loading},{default:a(()=>[e(n(Z),{search:f.search,items:p.employees,headers:n(_),"items-per-page":15,"custom-filter":y},{"item.actions":a(({item:m})=>[S("div",K,[e(b,{onClick:N=>i.$router.push(`employees/edit/${m.raw.employee_id}`)},{default:a(()=>[e(C,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(b,{onClick:N=>T(m.value)},{default:a(()=>[e(C,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"])])]),_:1},8,["search","items","headers"])]),_:1},8,["loading"])],64)}}},W={class:"text-h4 pt-3 pb-2 px-3"},ee={__name:"index",setup(f){const p=u([]),c=u(""),s=u(!1),d=()=>{s.value=!0,F().then(({data:l,meta:r})=>{p.value=l.data}).finally(()=>{s.value=!1})};return U(()=>{d()}),(l,r)=>{const o=X,_=Q;return D(),q(x,{class:"mt-4 px-4"},{default:a(()=>[e(G,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:a(()=>[S("p",W,w(l.$t("Employees")),1),e(x,{class:"ps-lg-1 pe-lg-5 ps-md-1 pe-md-5 ps-sm-1 pe-sm-5 mx-0 w-100",align:"center",justify:"space-between"},{default:a(()=>[e(o,{"prepend-inner-icon":"tabler-search",modelValue:n(c),"onUpdate:modelValue":r[0]||(r[0]=y=>B(c)?c.value=y:null),placeholder:l.$t("Search for an Employee"),class:H(["mx-lg-2",l.$vuetify.display.xs?"w-100":""]),style:M(l.$vuetify.display.xs?"width: 100%;":"width: 300px;")},null,8,["modelValue","placeholder","class","style"]),e(k,{block:l.$vuetify.display.xs,class:"mt-lg-0 mt-md-0 mt-sm-0 mt-3",onClick:r[1]||(r[1]=y=>l.$router.push("employees/add/"))},{default:a(()=>[e(C,{start:"",icon:"tabler-plus"}),v(w(l.$t("Add Employee")),1)]),_:1},8,["block"])]),_:1}),e(_,{loading:n(s),employees:n(p),search:n(c)},null,8,["loading","employees","search"])]),_:1})]),_:1})}}};typeof E=="function"&&E(ee);export{ee as default};
