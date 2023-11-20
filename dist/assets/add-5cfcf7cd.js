import{_ as N}from"./AppDateTimePicker-155aaebe.js";import{C as T,l as n,aV as F,R as I,o as $,b as H,w as o,q as t,a2 as m,s as e,a$ as D,b0 as W,a1 as i,b1 as d,b2 as q,bd as E,be as P,bf as R,b3 as z,az as M,z as J,H as O,aZ as x,aW as Z,a_ as G,$ as K,a0 as L,n as k}from"./index-1dd32ede.js";import{a as Q}from"./areas-6524282f.js";import{c as X}from"./branches-58961dc4.js";import{g as Y}from"./cities-c950e1c8.js";import{g as ee}from"./days-e9ac282a.js";import{V as c}from"./VCombobox-176931e8.js";import{V as le}from"./VSwitch-9b497ade.js";import"./VSelect-f8a112ce.js";import"./VList-e7465de7.js";import"./ssrBoot-8f54b7f9.js";import"./VDivider-97372cc6.js";import"./dialog-transition-5ac630ee.js";import"./VMenu-59c814f3.js";import"./VOverlay-5a3e7225.js";import"./lazy-469ad044.js";import"./VCheckboxBtn-34ce8752.js";import"./VSelectionControl-02c1120d.js";import"./VChip-ce0ef404.js";import"./filter-b4ea8019.js";const U=p=>(K("data-v-50b67613"),p=p(),L(),p),ae=U(()=>k("p",{class:"text-h4 pt-3 pb-2"},"Add Branch",-1)),te=U(()=>k("p",{class:"text-h4 pt-3 pb-2"},"Address",-1)),j={__name:"add",setup(p){var g;const h=(g=JSON.parse(localStorage.getItem("userData")))==null?void 0:g.type,V=n(),b=F(),f=n(!1),_=n([]),w=n([]),y=n([]),a=n({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:1}),S=async()=>{var u;(u=V.value)==null||u.validate().then(async({valid:l})=>{if(l){f.value=!0;try{await X(a.value),b.success("Branch added successfully"),f.value=!1,Z.back()}catch(r){b.error(r.response.data.message),f.value=!1}}})},B=()=>{Q().then(({data:u,meta:l})=>{w.value=u.data})},C=()=>{Y().then(({data:u,meta:l})=>{y.value=u.data})},A=()=>{ee().then(({data:u,meta:l})=>{_.value=u.data})};return I(()=>{h=="admin"&&(C(),B(),A())}),(u,l)=>{const r=G,v=N;return $(),H(i,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[t(m,{class:"pt-0"},{default:o(()=>[t(e(D),{ref_key:"refVForm",ref:V,onSubmit:W(S,["prevent"])},{default:o(()=>[t(m,{class:"px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[ae,t(m,null,{default:o(()=>[t(i,{justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(a).name_en,"onUpdate:modelValue":l[0]||(l[0]=s=>e(a).name_en=s),label:"Name"},null,8,["rules","modelValue"]),t(r,{rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50 text-right",dir:"rtl",modelValue:e(a).name_ar,"onUpdate:modelValue":l[1]||(l[1]=s=>e(a).name_ar=s),label:"الاسم"},null,8,["rules","modelValue"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d),e(q),e(E)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(a).phone_no,"onUpdate:modelValue":l[2]||(l[2]=s=>e(a).phone_no=s),label:"Phone Number"},null,8,["rules","modelValue"]),t(r,{rules:[e(d),e(P)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(a).email,"onUpdate:modelValue":l[3]||(l[3]=s=>e(a).email=s),label:"Email"},null,8,["rules","modelValue"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"end"},{default:o(()=>[t(r,{rules:[e(d),e(R)(e(a).password.length,4,8)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(a).password,"onUpdate:modelValue":l[4]||(l[4]=s=>e(a).password=s),label:"Password"},null,8,["rules","modelValue"]),t(c,{modelValue:e(a).working_days,"onUpdate:modelValue":l[5]||(l[5]=s=>e(a).working_days=s),multiple:"",rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50",items:e(_),"return-object":!1,"item-value":"id","item-title":"name",variant:"outlined",label:"Working Days"},null,8,["modelValue","rules","items"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(v,{modelValue:e(a).start,"onUpdate:modelValue":l[6]||(l[6]=s=>e(a).start=s),label:"Start Working Hours",class:"pe-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"]),t(v,{modelValue:e(a).end,"onUpdate:modelValue":l[7]||(l[7]=s=>e(a).end=s),label:"End Working Hours",class:"ps-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d),e(z)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(a).est_time,"onUpdate:modelValue":l[8]||(l[8]=s=>e(a).est_time=s),label:"Estimate Time"},null,8,["rules","modelValue"]),t(r,{rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(a).code,"onUpdate:modelValue":l[9]||(l[9]=s=>e(a).code=s),label:"Branch Code"},null,8,["rules","modelValue"])]),_:1})]),_:1})]),_:1}),t(m,{class:"mt-10 px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[te,t(m,null,{default:o(()=>[t(i,{justify:"space-between",align:"start"},{default:o(()=>[t(c,{modelValue:e(a).city_id,"onUpdate:modelValue":l[10]||(l[10]=s=>e(a).city_id=s),rules:[e(d)],items:e(y),"item-value":"id","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",label:"Cities",class:"flex-grow-1 pe-3 my-2 w-50"},null,8,["modelValue","rules","items"]),t(c,{modelValue:e(a).areas,"onUpdate:modelValue":l[11]||(l[11]=s=>e(a).areas=s),multiple:"",rules:[e(d)],disabled:!e(a).city_id,items:e(w),"item-value":"id","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",label:"Areas",class:"flex-grow-1 my-2 ps-3 w-50"},null,8,["modelValue","rules","disabled","items"])]),_:1}),t(i,{class:"mt-10",justify:"space-between",align:"start"},{default:o(()=>[t(r,{rules:[e(d)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(a).street_name,"onUpdate:modelValue":l[12]||(l[12]=s=>e(a).street_name=s),label:"Street Name"},null,8,["rules","modelValue"]),t(r,{rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(a).building_no,"onUpdate:modelValue":l[13]||(l[13]=s=>e(a).building_no=s),label:"Building Number"},null,8,["rules","modelValue"])]),_:1})]),_:1}),t(i,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:o(()=>[t(M,{block:u.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(f),type:"submit"},{default:o(()=>[t(J,{start:"",icon:"tabler-check"}),O("Add ")]),_:1},8,["block","loading"]),t(le,{class:"ml-7",modelValue:e(a).is_active,"onUpdate:modelValue":l[14]||(l[14]=s=>e(a).is_active=s),"false-value":0,"true-value":1,inset:!1,label:"Active"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}}};typeof x=="function"&&x(j);const Ue=T(j,[["__scopeId","data-v-50b67613"]]);export{Ue as default};
