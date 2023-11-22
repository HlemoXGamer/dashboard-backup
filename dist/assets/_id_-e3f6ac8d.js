import{_ as q}from"./AppCombobox-8ac55a31.js";import{C as z,aV as B,l as m,aP as D,R as F,o as M,b as A,w as r,q as l,W as y,n as P,y as f,s as t,a$ as W,b0 as G,U as i,b1 as u,b2 as H,bd as J,be as O,bf as Y,t as g,aY as Z,az as v,z as $,H as h,aZ as k,aW as K,a_ as L}from"./index-ac936590.js";import{g as Q}from"./discounts-8c01ad65.js";import{s as X,u as ee}from"./employees-7b8eaadb.js";import"./VCombobox-c5a63a4a.js";import"./VSelect-c9139207.js";import"./VList-5152a632.js";import"./ssrBoot-79ca1775.js";import"./VDivider-3c3519ef.js";import"./dialog-transition-6705f530.js";import"./VMenu-e1413c8a.js";import"./VOverlay-1fae6a8e.js";import"./lazy-aa82fd8a.js";import"./VCheckboxBtn-7562a87f.js";import"./VSelectionControl-11f51824.js";import"./VChip-cbd976a1.js";import"./filter-d266787d.js";const te={class:"text-h4 pt-3 pb-2"},j={__name:"[id]",setup(ae){var w;const U=(w=JSON.parse(localStorage.getItem("userData")))==null?void 0:w.type,c=B(),p=m(!1),_=D().params.id,s=m({employee_name:"",employee_phone:"",employee_email:"",employee_position:"",employee_code:"",discount_rate:"",discount_type:""}),b=m(),V=m(),C=async()=>{await X(_).then(e=>{let{employee_name:a,employee_phone:n,employee_email:d,employee_position:o,employee_code:R,discount_rate:I,discount_type:T}=e.data.data;s.value={employee_name:a,employee_phone:n,employee_email:d,employee_position:o,employee_code:R,discount_rate:I,discount_type:T},s.value.discount_type=s.value.discount_type.id})},N=e=>{const a="0123456789";let n="";for(let d=0;d<e;d++){const o=Math.floor(Math.random()*a.length);n+=a.charAt(o)}return n},x=()=>{const e=N(4);s.value.employee_code=`${e}`},E=async()=>{try{const{data:e}=await Q();V.value=e.data}catch(e){c.error(e)}},S=async()=>{var e;(e=b.value)==null||e.validate().then(async({valid:a})=>{if(a){p.value=!0;try{await ee(_,s.value),p.value=!1,c.success("Employee updated successfully"),K.back()}catch(n){c.error(n.response.data.message),p.value=!1}}})};return F(()=>{U=="admin"&&(C(),E())}),(e,a)=>{const n=L,d=q;return M(),A(i,{class:"mt-4 px-4",justify:"space-around"},{default:r(()=>[l(y,{class:"pt-0"},{default:r(()=>[l(y,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:r(()=>[P("p",te,f(e.$t("Update Employee")),1),l(t(W),{ref_key:"refVForm",ref:b,onSubmit:G(S,["prevent"]),class:"w-100"},{default:r(()=>[l(y,null,{default:r(()=>[l(i,{justify:"space-between",align:"start"},{default:r(()=>[l(n,{"prepend-inner-icon":"tabler-writing",rules:[t(u)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(s).employee_name,"onUpdate:modelValue":a[0]||(a[0]=o=>t(s).employee_name=o),label:e.$t("Name")},null,8,["rules","modelValue","label"]),l(n,{"prepend-inner-icon":"tabler-phone",rules:[t(u),t(H),t(J)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(s).employee_phone,"onUpdate:modelValue":a[1]||(a[1]=o=>t(s).employee_phone=o),label:e.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),l(i,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[l(n,{"prepend-inner-icon":"tabler-user-question",rules:[t(u)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(s).employee_position,"onUpdate:modelValue":a[2]||(a[2]=o=>t(s).employee_position=o),label:e.$t("Employee Position")},null,8,["rules","modelValue","label"]),l(n,{"prepend-inner-icon":"tabler-at",rules:[t(u),t(O)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(s).employee_email,"onUpdate:modelValue":a[3]||(a[3]=o=>t(s).employee_email=o),label:e.$t("Email")},null,8,["rules","modelValue","label"])]),_:1}),l(i,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[l(d,{disabled:"","prepend-inner-icon":"tabler-discount-2",rules:[t(u)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(s).discount_type,"onUpdate:modelValue":a[4]||(a[4]=o=>t(s).discount_type=o),label:e.$t("Select Type"),items:t(V),"item-value":"id","item-title":"name","return-object":!1},null,8,["rules","modelValue","label","items"]),l(n,{"prepend-inner-icon":"tabler-coins",rules:[t(u),t(Y)(t(s).discount_rate,1,50)],style:{width:"100%"},class:"ps-0 w-50",modelValue:t(s).discount_rate,"onUpdate:modelValue":a[5]||(a[5]=o=>t(s).discount_rate=o),label:e.$t("Discount Rate")},null,8,["rules","modelValue","label"])]),_:1}),l(i,{class:"mt-10",justify:"start",align:"end"},{default:r(()=>[l(n,{rules:[t(u)],class:g(e.$vuetify.display.xs?"w-100 mt-2":"flex-grow-0"),style:Z(e.$vuetify.display.xs?"width: 100%":"width: 140px"),modelValue:t(s).employee_code,"onUpdate:modelValue":a[6]||(a[6]=o=>t(s).employee_code=o),label:e.$t("Employee Code")},null,8,["rules","class","style","modelValue","label"]),l(i,{align:"center",class:"mx-0 my-0",justify:"center","justify-lg":"start","justify-md":"start","justify-sm":"center"},{default:r(()=>[l(v,{block:e.$vuetify.display.xs,class:g([e.$vuetify.display.xs?"mt-2":"mx-2 mt-0",e.$vuetify.display.sm?"mt-2":""]),onClick:a[7]||(a[7]=o=>x())},{default:r(()=>[l($,{start:"",icon:"tabler-reload"}),h(f(e.$t("Generate")),1)]),_:1},8,["block","class"])]),_:1})]),_:1})]),_:1}),l(i,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:r(()=>[l(v,{block:e.$vuetify.display.xs,color:"primary",class:"px-12",loading:t(p),type:"submit"},{default:r(()=>[l($,{start:"",icon:"tabler-check"}),h(f(e.$t("Update")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof k=="function"&&k(j);const ge=z(j,[["__scopeId","data-v-7e2cce37"]]);export{ge as default};
