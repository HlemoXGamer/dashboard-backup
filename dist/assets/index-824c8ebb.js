import{_ as y}from"./BranchesTable-da6ef236.js";import{l as t,R as B,o as C,b as k,w as p,q as l,W as A,U as d,s as e,G as u,aZ as _,n as U,a_ as $}from"./index-5994cda1.js";import{g as j}from"./areas-79d8e810.js";import{a as R}from"./branches-b327388a.js";import{g as T}from"./cities-fef3930a.js";import{V as b}from"./VCombobox-cc03d4f2.js";import"./VDialog-12e8d491.js";import"./VOverlay-1645a9c8.js";import"./lazy-bf10cb6b.js";import"./dialog-transition-6565ba1d.js";import"./DialogCloseBtn-c1dd3e48.js";import"./VDataTable-1bbe7e7f.js";import"./VCheckboxBtn-afa74ad1.js";import"./VSelectionControl-810dbd2b.js";import"./VSelect-d1bcc129.js";import"./VList-49578144.js";import"./ssrBoot-cbc4bacc.js";import"./VDivider-eb58c212.js";import"./VMenu-01dd66e8.js";import"./VChip-0f5f7375.js";import"./filter-9dfa3550.js";import"./VTable-da7c2248.js";const N=U("p",{class:"text-h4"},"Branches Performance",-1),q={__name:"index",setup(F){const f=t([]),x=t([]),h=t([]),m=t(""),i=t([]),s=t([]),c=t(!1),g=()=>{c.value=!0,R().then(({data:o,meta:a})=>{f.value=o.data}).finally(()=>{c.value=!1})},V=()=>{j().then(({data:o,meta:a})=>{h.value=o.data.map(r=>r.name)})},w=()=>{T().then(({data:o,meta:a})=>{x.value=o.data.map(r=>r.name)})};return B(()=>{g(),w(),V()}),(o,a)=>{const r=$,v=y;return C(),k(d,{class:"mt-4 px-4"},{default:p(()=>[l(A,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:p(()=>[l(d,{class:"pt-5 pb-2 px-5",align:"center",justify:"space-between"},{default:p(()=>[N]),_:1}),l(d,{class:"px-7",align:"center",justify:"space-between"},{default:p(()=>[l(r,{modelValue:e(m),"onUpdate:modelValue":a[0]||(a[0]=n=>u(m)?m.value=n:null),placeholder:"Search for a Branch",class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue"]),l(b,{modelValue:e(s),"onUpdate:modelValue":a[1]||(a[1]=n=>u(s)?s.value=n:null),multiple:"",items:e(x),variant:"outlined",label:"Cities",clearable:"",class:"flex-grow-0 mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","items"]),l(b,{modelValue:e(i),"onUpdate:modelValue":a[2]||(a[2]=n=>u(i)?i.value=n:null),multiple:"",disabled:!e(s).length,items:e(h),variant:"outlined",label:"Areas",class:"flex-grow-0 mx-2 my-2",clearable:"",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","disabled","items"])]),_:1}),l(v,{loading:e(c),performance:!0,branches:e(f),search:e(m)+","+e(i).join("-")+","+e(s)},null,8,["loading","branches","search"])]),_:1})]),_:1})}}};typeof _=="function"&&_(q);export{q as default};