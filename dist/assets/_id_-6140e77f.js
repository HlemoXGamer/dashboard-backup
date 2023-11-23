import{D as ae,O as P,o as _,b as I,w as t,q as e,aX as w,s as d,I as N,l as c,R,n as L,y as S,U as y,W as m,G as h,a_ as le,az as $,H as x,C as te,aP as ne,c as oe,aZ as A}from"./index-e6f6aeba.js";import{V as se}from"./VDataTable-d913a7a6.js";import{g as de}from"./cities-f93fb07c.js";import{V as T}from"./VCombobox-8fa49064.js";import{_ as ue}from"./AppDateTimePicker-6cd26c90.js";import{_ as ie}from"./DialogCloseBtn-605f00a7.js";import{V as me}from"./VDialog-3994feab.js";import{b as re,d as E}from"./branches-4bebef82.js";import{a as fe}from"./areas-83d9b908.js";import"./VCheckboxBtn-9e84afe0.js";import"./VSelectionControl-1cb5a9ac.js";import"./VSelect-f8daaa89.js";import"./VList-dd280060.js";import"./ssrBoot-772a646d.js";import"./VDivider-a37edbec.js";import"./dialog-transition-5e7138ce.js";import"./VMenu-87386f6e.js";import"./VOverlay-dcee295e.js";import"./lazy-d4f2c458.js";import"./VChip-5b9241de.js";import"./filter-3d43f6c4.js";import"./VTable-3b4c3268.js";const ce={__name:"BranchesViewTable",props:{data:{type:Array,default:[]},loading:{type:Boolean,default:!1}},setup(n){const f=ae().t,o=P(()=>[{title:f("Day"),key:"day"},{title:f("Time"),sortable:!1,key:"time"},{title:f("Item Name"),sortable:!1,key:"item_name"},{title:f("Action"),sortable:!1,key:"action"},{title:f("Details"),sortable:!1,key:"details"}]);return(a,u)=>(_(),I(N,{rounded:"lg",class:"pb-0 px-0",variant:"flat",loading:n.loading},{default:t(()=>[e(w,{class:"pa-0"},{default:t(()=>[e(d(se),{items:n.data,headers:d(o),"items-per-page":15,class:"pb-5 mt-0",title:"Branches Log"},null,8,["items","headers"])]),_:1})]),_:1},8,["loading"]))}},be={class:"text-h4 py-1 mb-3"},Ve={__name:"BranchesViewSummary",props:{data:{type:Object,default:{}}},setup(n){const s=c([]),f=()=>{de().then(({data:o,meta:a})=>{s.value=o.data,console.log(s.value)})};return R(()=>{f()}),(o,a)=>{const u=le;return _(),I(N,{rounded:"lg",class:"pb-6 px-0",variant:"flat"},{default:t(()=>[e(w,null,{default:t(()=>[L("p",be,S(o.$t("Branches Details")),1),e(y,{class:"px-2 mt-3"},{default:t(()=>[e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Name"),class:"mx-4 flex-grow-1",modelValue:n.data.name_en,"onUpdate:modelValue":a[0]||(a[0]=l=>n.data.name_en=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Phone Number"),class:"mx-4 flex-grow-1",modelValue:n.data.phone_no,"onUpdate:modelValue":a[1]||(a[1]=l=>n.data.phone_no=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Email"),class:"mx-4 flex-grow-1",modelValue:n.data.email,"onUpdate:modelValue":a[2]||(a[2]=l=>n.data.email=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(T,{readonly:"",class:"mx-4 flex-grow-1",modelValue:n.data.days,"onUpdate:modelValue":a[3]||(a[3]=l=>n.data.days=l),label:o.$t("Working Days"),"return-object":!1,items:n.data.days,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Start Working Hours"),class:"mx-4 flex-grow-1",modelValue:n.data.start,"onUpdate:modelValue":a[4]||(a[4]=l=>n.data.start=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("End Working Hours"),class:"mx-4 flex-grow-1",modelValue:n.data.end,"onUpdate:modelValue":a[5]||(a[5]=l=>n.data.end=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Estimate Time"),class:"mx-4 flex-grow-1",modelValue:n.data.est_time,"onUpdate:modelValue":a[6]||(a[6]=l=>n.data.est_time=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Branch Code"),class:"mx-4 flex-grow-1",modelValue:n.data.code,"onUpdate:modelValue":a[7]||(a[7]=l=>n.data.code=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(T,{readonly:"",class:"mx-4 flex-grow-1",modelValue:d(s),"onUpdate:modelValue":a[8]||(a[8]=l=>h(s)?s.value=l:null),label:o.$t("Cities"),"return-object":!1,items:d(s),multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(T,{readonly:"",class:"mx-4 flex-grow-1",modelValue:n.data.areas,"onUpdate:modelValue":a[9]||(a[9]=l=>n.data.areas=l),label:o.$t("Areas"),"return-object":!1,items:n.data.areas,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Street Name"),class:"mx-4 flex-grow-1",modelValue:n.data.street_name,"onUpdate:modelValue":a[10]||(a[10]=l=>n.data.street_name=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(u,{readonly:"",label:o.$t("Building Number"),class:"mx-4 flex-grow-1",modelValue:n.data.building_no,"onUpdate:modelValue":a[11]||(a[11]=l=>n.data.building_no=l)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}},pe={__name:"BranchesViewDialog",setup(n){const s=c(null),f=()=>{emit("exit",!0,s.value),s.value=null};return(o,a)=>{const u=ie,l=ue;return _(),I(me,{persistent:"",class:"v-dialog-sm"},{default:t(()=>[e(u,{onClick:a[0]||(a[0]=b=>o.$emit("close"))}),e(N,{title:o.$t("Pick a custom Date")},{default:t(()=>[e(w,{class:"d-flex"},{default:t(()=>[e(l,{class:"ms-1","prepend-inner-icon":"tabler-calendar",modelValue:d(s),"onUpdate:modelValue":a[1]||(a[1]=b=>h(s)?s.value=b:null)},null,8,["modelValue"])]),_:1}),e(w,{class:"d-flex justify-end gap-3 flex-wrap"},{default:t(()=>[e($,{onClick:a[2]||(a[2]=b=>f()),loading:o.loading,disabled:!d(s)},{default:t(()=>[x(S(o.$t("Pick")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["title"])]),_:1})}}};const ge={class:"text-h4 pt-3 pb-0"},W={__name:"[id]",setup(n){var j;const s=(j=JSON.parse(localStorage.getItem("userData")))==null?void 0:j.type,f=c([]),o=c([]),a=c(!1),u=c(null),l=c(!1),b=c({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:0}),p=c("today"),k=P(()=>i=>p.value===i?"elevated":"tonal"),B=ne().params.id,H=async()=>{await re(B).then(i=>{let{start:r,end:V,name_en:C,name_ar:U,phone_no:g,areas:q,city_id:z,street_name:F,building_no:G,email:J,password:M,est_time:X,delivery_fee:Y,code:Z,days:K,is_active:Q}=i.data.data;b.value={start:r,end:V,name_en:C,name_ar:U,phone_no:g,areas:q,days:K,city_id:z,street_name:F,building_no:G,email:J,password:M,est_time:X,delivery_fee:Y,code:Z,is_active:Q},b.value.email=i.data.data.user.email,fe().then(({data:ee,meta:ye})=>{f.value=ee.data})})},v=(i,r)=>{l.value=!0,i===!0?(a.value=!1,s=="admin"&&E(`${p.value}&branchId=${B}${r!==null?"&day="+r:""}`).then(({data:V})=>{o.value=V.data}).finally(()=>{l.value=!1})):s=="admin"&&E(`${p.value}&branchId=${B}`).then(({data:V})=>{o.value=V.data}).finally(()=>{l.value=!1})},O=()=>{a.value=!1,p.value="today",u.value=null,v(!0)},D=i=>{i==p.value&&i!=="custom"||(p.value=i,setTimeout(()=>{i=="custom"?a.value=!0:v(!1)},100))};return R(()=>{s==="admin"&&(H(),v(!1))}),(i,r)=>{const V=pe,C=Ve,U=ce;return _(),oe("div",null,[e(V,{onExit:v,modelValue:d(a),"onUpdate:modelValue":r[0]||(r[0]=g=>h(a)?a.value=g:null),onClose:O},null,8,["modelValue"]),e(y,{class:"mt-4 px-4",justify:"space-around"},{default:t(()=>[e(m,{class:"pt-0"},{default:t(()=>[e(C,{data:d(b),cities:i.cities},null,8,["data","cities"]),e(y,{class:"gap-5 pt-16 pl-3 pb-0"},{default:t(()=>[e($,{disabled:d(l),variant:d(k)("today"),onClick:r[1]||(r[1]=g=>D("today"))},{default:t(()=>[x("Today")]),_:1},8,["disabled","variant"]),e($,{disabled:d(l),variant:d(k)("yesterday"),onClick:r[2]||(r[2]=g=>D("yesterday"))},{default:t(()=>[x("Yesterday")]),_:1},8,["disabled","variant"]),e($,{disabled:d(l),variant:d(k)("custom"),onClick:r[3]||(r[3]=g=>D("custom"))},{default:t(()=>[x("Custom")]),_:1},8,["disabled","variant"])]),_:1}),e(m,{class:"px-5 rounded mt-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[L("p",ge,S(i.$t("Branches Log")),1),e(U,{data:d(o),loading:d(l)},null,8,["data","loading"])]),_:1})]),_:1})]),_:1})])}}};typeof A=="function"&&A(W);const He=te(W,[["__scopeId","data-v-46d11351"]]);export{He as default};
