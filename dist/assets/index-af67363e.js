import{_ as y}from"./BranchesTable-1d4b3186.js";import{l as t,R as B,o as C,b as k,w as p,q as l,W as A,U as d,s as e,G as u,aZ as _,n as U,a_ as $}from"./index-ac936590.js";import{g as j}from"./areas-40dbb4b4.js";import{a as R}from"./branches-47cf28b9.js";import{g as T}from"./cities-35835f50.js";import{V as b}from"./VCombobox-c5a63a4a.js";import"./VDialog-3de4470d.js";import"./VOverlay-1fae6a8e.js";import"./lazy-aa82fd8a.js";import"./dialog-transition-6705f530.js";import"./DialogCloseBtn-daa37d39.js";import"./VDataTable-d373769b.js";import"./VCheckboxBtn-7562a87f.js";import"./VSelectionControl-11f51824.js";import"./VSelect-c9139207.js";import"./VList-5152a632.js";import"./ssrBoot-79ca1775.js";import"./VDivider-3c3519ef.js";import"./VMenu-e1413c8a.js";import"./VChip-cbd976a1.js";import"./filter-d266787d.js";import"./VTable-6a45863e.js";const N=U("p",{class:"text-h4"},"Branches Performance",-1),q={__name:"index",setup(F){const f=t([]),x=t([]),h=t([]),m=t(""),i=t([]),s=t([]),c=t(!1),g=()=>{c.value=!0,R().then(({data:o,meta:a})=>{f.value=o.data}).finally(()=>{c.value=!1})},V=()=>{j().then(({data:o,meta:a})=>{h.value=o.data.map(r=>r.name)})},w=()=>{T().then(({data:o,meta:a})=>{x.value=o.data.map(r=>r.name)})};return B(()=>{g(),w(),V()}),(o,a)=>{const r=$,v=y;return C(),k(d,{class:"mt-4 px-4"},{default:p(()=>[l(A,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:p(()=>[l(d,{class:"pt-5 pb-2 px-5",align:"center",justify:"space-between"},{default:p(()=>[N]),_:1}),l(d,{class:"px-7",align:"center",justify:"space-between"},{default:p(()=>[l(r,{modelValue:e(m),"onUpdate:modelValue":a[0]||(a[0]=n=>u(m)?m.value=n:null),placeholder:"Search for a Branch",class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue"]),l(b,{modelValue:e(s),"onUpdate:modelValue":a[1]||(a[1]=n=>u(s)?s.value=n:null),multiple:"",items:e(x),variant:"outlined",label:"Cities",clearable:"",class:"flex-grow-0 mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","items"]),l(b,{modelValue:e(i),"onUpdate:modelValue":a[2]||(a[2]=n=>u(i)?i.value=n:null),multiple:"",disabled:!e(s).length,items:e(h),variant:"outlined",label:"Areas",class:"flex-grow-0 mx-2 my-2",clearable:"",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","disabled","items"])]),_:1}),l(v,{loading:e(c),performance:!0,branches:e(f),search:e(m)+","+e(i).join("-")+","+e(s)},null,8,["loading","branches","search"])]),_:1})]),_:1})}}};typeof _=="function"&&_(q);export{q as default};