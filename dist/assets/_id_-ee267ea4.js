import{_ as B}from"./OrdersTable-07b41057.js";import{l as s,aP as R,R as $,o as k,b as S,w as m,q as o,W as C,U as c,n as N,y as O,s as r,G as T,aZ as _,a_ as j}from"./index-5f1e036d.js";import{g as A}from"./areas-56cb917a.js";import{a as D}from"./branches-a15c6e52.js";import{g as I}from"./cities-7ebd7d44.js";import{g as P}from"./orders-a35ec2f6.js";import"./deliveries-70ea7bb7.js";import"./deliveries-22598667.js";import"./VDataTable-abff0085.js";import"./VCheckboxBtn-0b3e4e8e.js";import"./VSelectionControl-82ad58b5.js";import"./VSelect-38820d74.js";import"./VList-99b9fa4c.js";import"./ssrBoot-dcc7d968.js";import"./VDivider-ca899a5a.js";import"./dialog-transition-c18f9302.js";import"./VMenu-9df5e73f.js";import"./VOverlay-315386a7.js";import"./lazy-9d6f5b63.js";import"./VChip-c99b15f1.js";import"./filter-4e25312c.js";import"./VTable-0f962fff.js";import"./VPagination-dbecc13a.js";const U={class:"text-h4 pb-0 mb-2"},q={__name:"[id]",setup(F){var d;const i=s([]),f=s([]),h=s([]),n=s(null),l=s(null),p=R().params.id,u=s([]),g=(d=JSON.parse(localStorage.getItem("userData")))==null?void 0:d.type,b=()=>{D().then(({data:t,meta:a})=>{i.value=t.data,l.value=i.value.filter(e=>e.id==p)[0]})},x=()=>{A().then(({data:t,meta:a})=>{h.value=t.data.map(e=>e.name)})},y=()=>{I().then(({data:t,meta:a})=>{f.value=t.data.map(e=>e.name)})},v=()=>{P({branch:p}).then(({data:t,meta:a})=>{u.value=t.data})};return $(()=>{g=="admin"&&(b(),y(),x(),v())}),(t,a)=>{const e=j,V=B;return k(),S(c,{class:"mt-4 px-4"},{default:m(()=>[o(C,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:m(()=>[o(c,{class:"pt-5 pb-0 px-5",align:"center",justify:"space-between"},{default:m(()=>[N("p",U,O(r(l)!==null?r(l).name_en:""),1)]),_:1}),o(c,{class:"px-4",align:"center",justify:"start"},{default:m(()=>[o(e,{modelValue:r(n),"onUpdate:modelValue":a[0]||(a[0]=w=>T(n)?n.value=w:null),placeholder:"Search by Product name",class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue"])]),_:1}),o(V,{items:r(u),search:r(n)},null,8,["items","search"])]),_:1})]),_:1})}}};typeof _=="function"&&_(q);export{q as default};