import{_ as y}from"./BranchesTable-f29d5569.js";import{l as t,R as B,o as C,b as k,w as p,q as l,a2 as A,a1 as d,s as e,G as u,aZ as _,n as $,a_ as j}from"./index-1dd32ede.js";import{g as R}from"./areas-6524282f.js";import{a as T}from"./branches-58961dc4.js";import{g as U}from"./cities-c950e1c8.js";import{V as b}from"./VCombobox-176931e8.js";import"./VDialog-08e1152d.js";import"./VOverlay-5a3e7225.js";import"./lazy-469ad044.js";import"./dialog-transition-5ac630ee.js";import"./DialogCloseBtn-39702502.js";import"./VDataTable-a523acba.js";import"./VCheckboxBtn-34ce8752.js";import"./VSelectionControl-02c1120d.js";import"./VSelect-f8a112ce.js";import"./VList-e7465de7.js";import"./ssrBoot-8f54b7f9.js";import"./VDivider-97372cc6.js";import"./VMenu-59c814f3.js";import"./VChip-ce0ef404.js";import"./filter-b4ea8019.js";import"./VTable-80ff895e.js";const N=$("p",{class:"text-h4"},"Branches Performance",-1),q={__name:"index",setup(F){const f=t([]),x=t([]),h=t([]),m=t(""),i=t([]),s=t([]),c=t(!1),g=()=>{c.value=!0,T().then(({data:o,meta:a})=>{f.value=o.data}).finally(()=>{c.value=!1})},V=()=>{R().then(({data:o,meta:a})=>{h.value=o.data.map(r=>r.name)})},w=()=>{U().then(({data:o,meta:a})=>{x.value=o.data.map(r=>r.name)})};return B(()=>{g(),w(),V()}),(o,a)=>{const r=j,v=y;return C(),k(d,{class:"mt-4 px-4"},{default:p(()=>[l(A,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:p(()=>[l(d,{class:"pt-5 pb-2 px-5",align:"center",justify:"space-between"},{default:p(()=>[N]),_:1}),l(d,{class:"px-7",align:"center",justify:"space-between"},{default:p(()=>[l(r,{modelValue:e(m),"onUpdate:modelValue":a[0]||(a[0]=n=>u(m)?m.value=n:null),placeholder:"Search for a Branch",class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue"]),l(b,{modelValue:e(s),"onUpdate:modelValue":a[1]||(a[1]=n=>u(s)?s.value=n:null),multiple:"",items:e(x),variant:"outlined",label:"Cities",clearable:"",class:"flex-grow-0 mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","items"]),l(b,{modelValue:e(i),"onUpdate:modelValue":a[2]||(a[2]=n=>u(i)?i.value=n:null),multiple:"",disabled:!e(s).length,items:e(h),variant:"outlined",label:"Areas",class:"flex-grow-0 mx-2 my-2",clearable:"",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","disabled","items"])]),_:1}),l(v,{loading:e(c),performance:!0,branches:e(f),search:e(m)+","+e(i).join("-")+","+e(s)},null,8,["loading","branches","search"])]),_:1})]),_:1})}}};typeof _=="function"&&_(q);export{q as default};
