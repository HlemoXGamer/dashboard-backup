import{_ as N}from"./AppDateTimePicker-f5a4219c.js";import{C as T,l as n,aV as F,R as I,o as H,b as W,w as o,q as t,W as m,s as e,a$ as $,b0 as D,U as i,b1 as d,b2 as q,bc as E,bd as P,be as R,b3 as z,az as M,z as J,H as O,aZ as x,aW as Z,a_ as G,a8 as K,a9 as L,n as k}from"./index-36d8cfe3.js";import{a as Q}from"./areas-357dff86.js";import{c as X}from"./branches-554dffa9.js";import{g as Y}from"./cities-d878e1ce.js";import{g as ee}from"./days-662828b2.js";import{V as c}from"./VCombobox-f543e0a9.js";import{V as ae}from"./VSwitch-b0e69358.js";import"./VSelect-67ad1458.js";import"./VList-1544eb7b.js";import"./ssrBoot-9eeea15f.js";import"./VDivider-baaf873e.js";import"./dialog-transition-67149c45.js";import"./VMenu-f17f0b8f.js";import"./VOverlay-ea98bdf6.js";import"./lazy-7047357e.js";import"./VCheckboxBtn-a58c2dae.js";import"./VSelectionControl-0b7649e7.js";import"./VChip-8213b9b6.js";import"./filter-cb535b89.js";const U=p=>(K("data-v-8e8422ae"),p=p(),L(),p),le=U(()=>k("p",{class:"text-h4 pt-3 pb-2"},"Add Branch",-1)),te=U(()=>k("p",{class:"text-h4 pt-3 pb-2"},"Address",-1)),j={__name:"add",setup(p){var g;const h=(g=JSON.parse(localStorage.getItem("userData")))==null?void 0:g.type,V=n(),b=F(),f=n(!1),_=n([]),w=n([]),y=n([]),l=n({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:1}),S=async()=>{var u;(u=V.value)==null||u.validate().then(async({valid:a})=>{if(a){f.value=!0;try{await X(l.value),b.success("Branch added successfully"),f.value=!1,Z.back()}catch(r){b.error(r.response.data.message),f.value=!1}}})},B=()=>{Q().then(({data:u,meta:a})=>{w.value=u.data})},C=()=>{Y().then(({data:u,meta:a})=>{y.value=u.data})},A=()=>{ee().then(({data:u,meta:a})=>{_.value=u.data})};return I(()=>{h=="admin"&&(C(),B(),A())}),(u,a)=>{const r=G,v=N;return H(),W(i,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[t(m,{class:"pt-0"},{default:o(()=>[t(e($),{ref_key:"refVForm",ref:V,onSubmit:D(S,["prevent"])},{default:o(()=>[t(m,{class:"px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[le,t(m,null,{default:o(()=>[t(i,{justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name_en,"onUpdate:modelValue":a[0]||(a[0]=s=>e(l).name_en=s),label:"Name"},null,8,["rules","modelValue"]),t(r,{rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50 text-right",dir:"rtl",modelValue:e(l).name_ar,"onUpdate:modelValue":a[1]||(a[1]=s=>e(l).name_ar=s),label:"الاسم"},null,8,["rules","modelValue"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d),e(q),e(E)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).phone_no,"onUpdate:modelValue":a[2]||(a[2]=s=>e(l).phone_no=s),label:"Phone Number"},null,8,["rules","modelValue"]),t(r,{rules:[e(d),e(P)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":a[3]||(a[3]=s=>e(l).email=s),label:"Email"},null,8,["rules","modelValue"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"end"},{default:o(()=>[t(r,{rules:[e(d),e(R)(e(l).password.length,4,8)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).password,"onUpdate:modelValue":a[4]||(a[4]=s=>e(l).password=s),label:"Password"},null,8,["rules","modelValue"]),t(c,{modelValue:e(l).working_days,"onUpdate:modelValue":a[5]||(a[5]=s=>e(l).working_days=s),multiple:"",rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50",items:e(_),"return-object":!1,"item-value":"id","item-title":"name",variant:"outlined",label:"Working Days"},null,8,["modelValue","rules","items"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(v,{modelValue:e(l).start,"onUpdate:modelValue":a[6]||(a[6]=s=>e(l).start=s),label:"Start Working Hours",class:"pe-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"]),t(v,{modelValue:e(l).end,"onUpdate:modelValue":a[7]||(a[7]=s=>e(l).end=s),label:"End Working Hours",class:"ps-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d),e(z)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).est_time,"onUpdate:modelValue":a[8]||(a[8]=s=>e(l).est_time=s),label:"Estimate Time"},null,8,["rules","modelValue"]),t(r,{rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).code,"onUpdate:modelValue":a[9]||(a[9]=s=>e(l).code=s),label:"Branch Code"},null,8,["rules","modelValue"])]),_:1})]),_:1})]),_:1}),t(m,{class:"mt-10 px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[te,t(m,null,{default:o(()=>[t(i,{justify:"space-between",align:"start"},{default:o(()=>[t(c,{modelValue:e(l).city_id,"onUpdate:modelValue":a[10]||(a[10]=s=>e(l).city_id=s),rules:[e(d)],items:e(y),"item-value":"id","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",label:"Cities",class:"flex-grow-1 pe-3 my-2 w-50"},null,8,["modelValue","rules","items"]),t(c,{modelValue:e(l).areas,"onUpdate:modelValue":a[11]||(a[11]=s=>e(l).areas=s),multiple:"",rules:[e(d)],disabled:!e(l).city_id,items:e(w),"item-value":"id","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",label:"Areas",class:"flex-grow-1 my-2 ps-3 w-50"},null,8,["modelValue","rules","disabled","items"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).street_name,"onUpdate:modelValue":a[12]||(a[12]=s=>e(l).street_name=s),label:"Street Name"},null,8,["rules","modelValue"]),t(r,{rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).building_no,"onUpdate:modelValue":a[13]||(a[13]=s=>e(l).building_no=s),label:"Building Number"},null,8,["rules","modelValue"])]),_:1})]),_:1}),t(i,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:o(()=>[t(M,{block:u.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(f),type:"submit"},{default:o(()=>[t(J,{start:"",icon:"tabler-check"}),O("Add ")]),_:1},8,["block","loading"]),t(ae,{class:"ml-7",modelValue:e(l).is_active,"onUpdate:modelValue":a[14]||(a[14]=s=>e(l).is_active=s),"false-value":0,"true-value":1,inset:!1,label:"Active"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}}};typeof x=="function"&&x(j);const Ue=T(j,[["__scopeId","data-v-8e8422ae"]]);export{Ue as default};
