import{_ as j}from"./AppDateTimePicker-e9bf6a89.js";import{C as B,l as p,aV as C,R as F,o as N,b as T,w as r,q as o,W as g,s as e,a$ as x,b0 as A,n as H,y as v,U as u,b1 as n,b2 as W,bc as E,bd as I,be as P,az as R,z as q,H as z,aZ as k,aW as M,a_ as J}from"./index-a9f57dce.js";import{a as O}from"./branches-2bb8c6f2.js";import{g as Z}from"./days-e5655f23.js";import{c as G}from"./deliveries-63556a16.js";import{g as K}from"./branches-045745e3.js";import{c as L}from"./deliveries-7d69de04.js";import{V as h}from"./VCombobox-60de5628.js";import{V as Q}from"./VSwitch-e7b8a51e.js";import"./VSelect-cb07ff6e.js";import"./VList-850d4acf.js";import"./ssrBoot-f389e3d7.js";import"./VDivider-66377c53.js";import"./dialog-transition-0d97a459.js";import"./VMenu-05edfde9.js";import"./VOverlay-12d65919.js";import"./lazy-2a51b35e.js";import"./VCheckboxBtn-f828d828.js";import"./VSelectionControl-093b1977.js";import"./VChip-0800be74.js";import"./filter-cee856ac.js";const X={class:"text-h4 pt-3 pb-2"},$={__name:"add",setup(Y){var _;const d=(_=JSON.parse(localStorage.getItem("userData")))==null?void 0:_.type,f=p([]),w=p(),U=()=>{d=="admin"?O().then(({data:s,meta:t})=>{f.value=s.data}):d=="logistic"&&K().then(({data:s,meta:t})=>{f.value=s.data})},y=C(),c=p(!1),V=p([]),l=p({start:"",end:"",name:"",phone:"",email:"",password:"",code:"",working_hour:null,working_days:[],is_active:0,branch_id:null}),D=async()=>{var s;(s=w.value)==null||s.validate().then(async({valid:t})=>{if(t){c.value=!0;let i=[];V.value.forEach(a=>{l.value.working_days.forEach(m=>{a.name_en==m&&i.push(a.id)})}),l.value.working_days=i;let b=f.value.filter(a=>a.name_en==l.value.branch_id)[0].id;l.value.branch_id=b;try{d=="admin"?await G(l.value):d=="logistic"&&await L(l.value),y.success("Delivery man added successfully"),c.value=!1,M.back()}catch(a){y.error(a.response.data.message),c.value=!1}}})},S=()=>{Z().then(({data:s,meta:t})=>{V.value=s.data})};return F(()=>{(d=="admin"||d=="logistic")&&(S(),U())}),(s,t)=>{const i=J,b=j;return N(),T(u,{class:"mt-4 px-4",justify:"space-around"},{default:r(()=>[o(g,{class:"pt-0"},{default:r(()=>[o(e(x),{ref_key:"refVForm",ref:w,onSubmit:A(D,["prevent"])},{default:r(()=>[o(g,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:r(()=>[H("p",X,v(s.$t("Add Delivery")),1),o(g,null,{default:r(()=>[o(u,{justify:"space-between",align:"start"},{default:r(()=>[o(i,{rules:[e(n)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).name,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).name=a),label:s.$t("Name")},null,8,["rules","modelValue","label"]),o(i,{rules:[e(n),e(W),e(E)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).phone,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).phone=a),label:s.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),o(u,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>{var a;return[o(i,{rules:[e(n),e(I)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).email,"onUpdate:modelValue":t[2]||(t[2]=m=>e(l).email=m),label:s.$t("Email")},null,8,["rules","modelValue","label"]),o(i,{rules:[e(n),e(P)((a=e(l).password)==null?void 0:a.length,4,8)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).password,"onUpdate:modelValue":t[3]||(t[3]=m=>e(l).password=m),label:s.$t("Password")},null,8,["rules","modelValue","label"])]}),_:1}),o(u,{class:"mt-10",justify:"space-between",align:"end"},{default:r(()=>[o(h,{modelValue:e(l).working_days,"onUpdate:modelValue":t[4]||(t[4]=a=>e(l).working_days=a),multiple:"",rules:[e(n)],style:{width:"100%"},class:"pe-3 w-50",items:e(V).map(a=>a.name_en),variant:"outlined",label:s.$t("Working Days")},null,8,["modelValue","rules","items","label"]),o(b,{rules:[e(n)],modelValue:e(l).start,"onUpdate:modelValue":t[5]||(t[5]=a=>e(l).start=a),label:s.$t("Start Working Hours"),class:"ps-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["rules","modelValue","label"])]),_:1}),o(u,{class:"mt-10",justify:"space-between",align:"end"},{default:r(()=>[o(b,{rules:[e(n)],modelValue:e(l).end,"onUpdate:modelValue":t[6]||(t[6]=a=>e(l).end=a),label:s.$t("End Working Hours"),class:"pe-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["rules","modelValue","label"]),o(h,{modelValue:e(l).branch_id,"onUpdate:modelValue":t[7]||(t[7]=a=>e(l).branch_id=a),rules:[e(n)],style:{width:"100%"},class:"w-50 ps-3 flex-grow-0",items:e(f).map(a=>a.name_en),variant:"outlined",label:s.$t("Branch")},null,8,["modelValue","rules","items","label"])]),_:1}),o(u,{class:"pb-4 mt-8 px-3 mt-10",align:"center",justify:"center"},{default:r(()=>[o(R,{block:s.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(c),type:"submit"},{default:r(()=>[o(q,{start:"",icon:"tabler-check"}),z(v(s.$t("Add")),1)]),_:1},8,["block","loading"]),o(Q,{class:"ml-7",modelValue:e(l).is_active,"onUpdate:modelValue":t[8]||(t[8]=a=>e(l).is_active=a),"false-value":0,"true-value":1,inset:!1,label:s.$t("Active")},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}}};typeof k=="function"&&k($);const ve=B($,[["__scopeId","data-v-ae1f9c03"]]);export{ve as default};