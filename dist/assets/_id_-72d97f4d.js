import{D as ae,O as E,o as S,b as L,w as t,q as e,aX as $,s as u,I as j,l as V,R as W,n as h,y as I,U as y,W as m,G as N,a_ as le,C as te,aP as ne,c as de,az as p,H as v,aZ as P}from"./index-8020c556.js";import{V as oe}from"./VDataTable-3ee0c217.js";import{g as se}from"./cities-be3c1cd4.js";import{V as T}from"./VCombobox-41511664.js";import{_ as ue}from"./AppDateTimePicker-fd150c0b.js";import{_ as ie}from"./DialogCloseBtn-9970cfa3.js";import{b as me,d as R}from"./branches-f84a9cea.js";import{a as re}from"./areas-f167dcb6.js";import{V as fe}from"./VDialog-3fd1efdd.js";import"./VCheckboxBtn-a50bc64e.js";import"./VSelectionControl-953e5684.js";import"./VSelect-e6fbb6f8.js";import"./VList-82debb1c.js";import"./ssrBoot-e30dcb21.js";import"./VDivider-6944b310.js";import"./dialog-transition-0d625075.js";import"./VMenu-1bad06f2.js";import"./VOverlay-1fb1e8c5.js";import"./lazy-28908172.js";import"./VChip-2c96522a.js";import"./filter-691b2f1b.js";import"./VTable-2bb82334.js";const be={__name:"BranchesViewTable",props:{data:{type:Array,default:[]},loading:{type:Boolean,default:!1}},setup(n){const b=ae().t,d=E(()=>[{title:b("Day"),key:"day"},{title:b("Time"),sortable:!1,key:"time"},{title:b("Item Name"),sortable:!1,key:"item_name"},{title:b("Action"),sortable:!1,key:"action"},{title:b("Details"),sortable:!1,key:"details"}]);return(a,s)=>(S(),L(j,{rounded:"lg",class:"pb-0 px-0",variant:"flat",loading:n.loading},{default:t(()=>[e($,{class:"pa-0"},{default:t(()=>[e(u(oe),{items:n.data,headers:u(d),"items-per-page":15,class:"pb-5 mt-0",title:"Branches Log"},null,8,["items","headers"])]),_:1})]),_:1},8,["loading"]))}},Ve={class:"text-h4 py-1 mb-3"},ce={__name:"BranchesViewSummary",props:{data:{type:Object,default:{}}},setup(n){const r=V([]),b=()=>{se().then(({data:d,meta:a})=>{r.value=d.data,console.log(r.value)})};return W(()=>{b()}),(d,a)=>{const s=le;return S(),L(j,{rounded:"lg",class:"pb-6 px-0",variant:"flat"},{default:t(()=>[e($,null,{default:t(()=>[h("p",Ve,I(d.$t("Branches Details")),1),e(y,{class:"px-2 mt-3"},{default:t(()=>[e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Name"),class:"mx-4 flex-grow-1",modelValue:n.data.name_en,"onUpdate:modelValue":a[0]||(a[0]=l=>n.data.name_en=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Phone Number"),class:"mx-4 flex-grow-1",modelValue:n.data.phone_no,"onUpdate:modelValue":a[1]||(a[1]=l=>n.data.phone_no=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Email"),class:"mx-4 flex-grow-1",modelValue:n.data.email,"onUpdate:modelValue":a[2]||(a[2]=l=>n.data.email=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(T,{readonly:"",class:"mx-4 flex-grow-1",modelValue:n.data.days,"onUpdate:modelValue":a[3]||(a[3]=l=>n.data.days=l),label:d.$t("Working Days"),"return-object":!1,items:n.data.days,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Start Working Hours"),class:"mx-4 flex-grow-1",modelValue:n.data.start,"onUpdate:modelValue":a[4]||(a[4]=l=>n.data.start=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("End Working Hours"),class:"mx-4 flex-grow-1",modelValue:n.data.end,"onUpdate:modelValue":a[5]||(a[5]=l=>n.data.end=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Estimate Time"),class:"mx-4 flex-grow-1",modelValue:n.data.est_time,"onUpdate:modelValue":a[6]||(a[6]=l=>n.data.est_time=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Branch Code"),class:"mx-4 flex-grow-1",modelValue:n.data.code,"onUpdate:modelValue":a[7]||(a[7]=l=>n.data.code=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(T,{readonly:"",class:"mx-4 flex-grow-1",modelValue:u(r),"onUpdate:modelValue":a[8]||(a[8]=l=>N(r)?r.value=l:null),label:d.$t("Cities"),"return-object":!1,items:u(r),multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(T,{readonly:"",class:"mx-4 flex-grow-1",modelValue:n.data.areas,"onUpdate:modelValue":a[9]||(a[9]=l=>n.data.areas=l),label:d.$t("Areas"),"return-object":!1,items:n.data.areas,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Street Name"),class:"mx-4 flex-grow-1",modelValue:n.data.street_name,"onUpdate:modelValue":a[10]||(a[10]=l=>n.data.street_name=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(s,{readonly:"",label:d.$t("Building Number"),class:"mx-4 flex-grow-1",modelValue:n.data.building_no,"onUpdate:modelValue":a[11]||(a[11]=l=>n.data.building_no=l)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}};const ye={class:"text-h4 pt-3 pb-0"},H={__name:"[id]",setup(n){var A;const r=(A=JSON.parse(localStorage.getItem("userData")))==null?void 0:A.type,b=V([]),d=V([]),a=V(!1),s=V(null),l=V(!1),x=V({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:0}),c=V("today"),w=E(()=>i=>c.value===i?"elevated":"tonal"),k=ne().params.id,O=async()=>{await me(k).then(i=>{let{start:o,end:B,name_en:C,name_ar:D,phone_no:U,areas:f,city_id:z,street_name:F,building_no:G,email:J,password:M,est_time:X,delivery_fee:Y,code:Z,days:K,is_active:Q}=i.data.data;x.value={start:o,end:B,name_en:C,name_ar:D,phone_no:U,areas:f,days:K,city_id:z,street_name:F,building_no:G,email:J,password:M,est_time:X,delivery_fee:Y,code:Z,is_active:Q},x.value.email=i.data.data.user.email,re().then(({data:ee,meta:ge})=>{b.value=ee.data})})},g=i=>{l.value=!0,i===!0?(a.value=!1,r=="admin"&&R(`${c.value}&branchId=${k}${s.value!==null?"&day="+s.value:""}`).then(({data:o})=>{d.value=o.data}).finally(()=>{l.value=!1})):r=="admin"&&R(`${c.value}&branchId=${k}`).then(({data:o})=>{d.value=o.data}).finally(()=>{l.value=!1})},q=()=>{a.value=!1,c.value="today",s.value=null,g(!0)},_=i=>{i==c.value&&i!=="custom"||(c.value=i,setTimeout(()=>{i=="custom"?a.value=!0:g(!1)},100))};return W(()=>{r==="admin"&&(O(),g("today"))}),(i,o)=>{const B=ie,C=ue,D=ce,U=be;return S(),de("div",null,[e(fe,{modelValue:u(a),"onUpdate:modelValue":o[3]||(o[3]=f=>N(a)?a.value=f:null),persistent:"",class:"v-dialog-sm"},{default:t(()=>[e(B,{onClick:o[0]||(o[0]=f=>q())}),e(j,{title:i.$t("Pick a custom Date")},{default:t(()=>[e($,{class:"d-flex"},{default:t(()=>[e(C,{class:"ms-1","prepend-inner-icon":"tabler-calendar",modelValue:u(s),"onUpdate:modelValue":o[1]||(o[1]=f=>N(s)?s.value=f:null)},null,8,["modelValue"])]),_:1}),e($,{class:"d-flex justify-end gap-3 flex-wrap"},{default:t(()=>[e(p,{onClick:o[2]||(o[2]=f=>g(!0)),loading:u(l),disabled:!u(s)},{default:t(()=>[v(I(i.$t("Pick")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),e(y,{class:"mt-4 px-4",justify:"space-around"},{default:t(()=>[e(m,{class:"pt-0"},{default:t(()=>[e(D,{data:u(x),cities:i.cities},null,8,["data","cities"]),e(y,{class:"gap-5 pt-16 pl-3 pb-0"},{default:t(()=>[e(p,{disabled:u(l),variant:u(w)("today"),onClick:o[4]||(o[4]=f=>_("today"))},{default:t(()=>[v("Today")]),_:1},8,["disabled","variant"]),e(p,{disabled:u(l),variant:u(w)("yesterday"),onClick:o[5]||(o[5]=f=>_("yesterday"))},{default:t(()=>[v("Yesterday")]),_:1},8,["disabled","variant"]),e(p,{disabled:u(l),variant:u(w)("custom"),onClick:o[6]||(o[6]=f=>_("custom"))},{default:t(()=>[v("Custom")]),_:1},8,["disabled","variant"])]),_:1}),e(m,{class:"px-5 rounded mt-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[h("p",ye,I(i.$t("Branches Log")),1),e(U,{data:u(d),loading:u(l)},null,8,["data","loading"])]),_:1})]),_:1})]),_:1})])}}};typeof P=="function"&&P(H);const he=te(H,[["__scopeId","data-v-836450e3"]]);export{he as default};
