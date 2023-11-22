import{_ as B}from"./AppDateTimePicker-a5e2f7c6.js";import{_ as I}from"./AppCombobox-f5bccaf1.js";import{_ as R}from"./AppTextarea-ec209ad1.js";import{C as q,aV as E,l as m,R as H,o as O,b as P,w as r,q as s,W as b,n as G,y as V,s as e,a$ as J,b0 as L,U as n,b1 as d,b2 as U,t as v,aY as k,az as T,z as A,H as C,aZ as S,a_ as W}from"./index-5f1e036d.js";import{g as Y}from"./discounts-621add08.js";import{d as Z,e as K}from"./vouchers-01ec2e7f.js";import{g as Q}from"./discounts-fb280999.js";import{V as X}from"./VSwitch-0e059f6e.js";import"./VCombobox-2917f1fb.js";import"./VSelect-38820d74.js";import"./VList-99b9fa4c.js";import"./ssrBoot-dcc7d968.js";import"./VDivider-ca899a5a.js";import"./dialog-transition-c18f9302.js";import"./VMenu-9df5e73f.js";import"./VOverlay-315386a7.js";import"./lazy-9d6f5b63.js";import"./VCheckboxBtn-0b3e4e8e.js";import"./VSelectionControl-82ad58b5.js";import"./VChip-c99b15f1.js";import"./filter-4e25312c.js";const ee={class:"text-h4 pt-3 pb-2"},D={__name:"add",setup(le){var x;const w=(x=JSON.parse(localStorage.getItem("userData")))==null?void 0:x.type,c=E(),p=m(!1),l=m({v_name:"",v_code:"",v_prefix:null,v_description_ar:"",v_description_en:"",v_limit:"",v_min_total:"",v_amount:"",v_type:"",v_time_period_start:"",v_time_period_end:"",v_date_period_start:"",v_date_period_end:"",v_is_active:0}),g=m(),$=m([]),j=m([]),f=m(!1),N=t=>{const a="0123456789";let i="";for(let u=0;u<t;u++){const y=Math.floor(Math.random()*a.length);i+=a.charAt(y)}return i},F=()=>{const t=N(4);let a=l.value.v_prefix==null?"":l.value.v_prefix;l.value.v_code=a+`${t}`},h=async()=>{try{const{data:t}=w=="admin"?await Y():await Q();$.value=t.data,j.value=t.data.map(a=>a.name)}catch(t){c.error(t)}},M=async()=>{var t;(t=g.value)==null||t.validate().then(async({valid:a})=>{if(a){p.value=!0;try{l.value.v_type_name=="free_delivevery"&&(l.value.v_amount="",f.value=!0),l.value.v_type=$.value.filter(i=>i.name==l.value.v_type_name)[0].id,w=="admin"?await Z(l.value):await K(l.value),p.value=!1,c.success("Voucher Added successfully")}catch(i){Object.values(i.response.data.errors).forEach(u=>{c.error(u[0].split(" v ").join(" "))}),p.value=!1}}})},z=()=>{setTimeout(()=>{l.value.v_type_name=="free_delivevery"?(f.value=!0,l.value.v_amount=0):(f.value=!1,l.value.v_amount="")},500)};return H(()=>{h()}),(t,a)=>{const i=W,u=R,y=I,_=B;return O(),P(n,{class:"mt-4 px-4",justify:"space-around"},{default:r(()=>[s(b,{class:"pt-0"},{default:r(()=>[s(b,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:r(()=>[G("p",ee,V(t.$t("Add Voucher")),1),s(e(J),{ref_key:"refVForm",ref:g,onSubmit:L(M,["prevent"]),class:"w-100"},{default:r(()=>[s(b,null,{default:r(()=>[s(n,{justify:"space-between",align:"start"},{default:r(()=>[s(i,{"prepend-inner-icon":"tabler-writing",rules:[e(d)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).v_name,"onUpdate:modelValue":a[0]||(a[0]=o=>e(l).v_name=o),label:t.$t("Name")},null,8,["rules","modelValue","label"]),s(i,{"prepend-inner-icon":"tabler-coins",disabled:e(f),rules:[e(d),e(U)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).v_amount,"onUpdate:modelValue":a[1]||(a[1]=o=>e(l).v_amount=o),label:t.$t("Amount")},null,8,["disabled","rules","modelValue","label"])]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(u,{rules:[e(d)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).v_description_en,"onUpdate:modelValue":a[2]||(a[2]=o=>e(l).v_description_en=o),label:t.$t("Description")},null,8,["rules","modelValue","label"]),s(u,{rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50 text-right",dir:"rtl",modelValue:e(l).v_description_ar,"onUpdate:modelValue":a[3]||(a[3]=o=>e(l).v_description_ar=o),label:"الوصف"},null,8,["rules","modelValue"])]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(y,{"prepend-inner-icon":"tabler-discount-2","onUpdate:modelValue":[z,a[4]||(a[4]=o=>e(l).v_type_name=o)],rules:[e(d)],style:{width:"100%"},class:"pe-3 w-50",modelValue:e(l).v_type_name,label:t.$t("Select Type"),items:e(j)},null,8,["rules","modelValue","label","items"]),s(i,{"prepend-inner-icon":"tabler-coins",rules:[e(d)],style:{width:"100%"},class:"ps-3 w-50",modelValue:e(l).v_min_total,"onUpdate:modelValue":a[5]||(a[5]=o=>e(l).v_min_total=o),label:t.$t("Minimum Total")},null,8,["rules","modelValue","label"])]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(n,{style:{width:"50%","max-width":"50%"},class:"w-50 pe-3 ms-0 my-0",align:"center",justify:"center"},{default:r(()=>[s(i,{"prepend-inner-icon":"tabler-forbid",rules:[e(d),e(U)],class:"w-100",style:{width:"100%"},modelValue:e(l).v_limit,"onUpdate:modelValue":a[6]||(a[6]=o=>e(l).v_limit=o),label:t.$t("Limit")},null,8,["rules","modelValue","label"])]),_:1}),s(n,{style:{width:"50%","max-width":"50%"},class:"me-0 ps-3 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(_,{"prepend-inner-icon":"tabler-calendar",modelValue:e(l).v_date_period_start,"onUpdate:modelValue":a[7]||(a[7]=o=>e(l).v_date_period_start=o),label:t.$t("Start Date")},null,8,["modelValue","label"])]),_:1})]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(n,{class:"me-3 ms-0 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(_,{"prepend-inner-icon":"tabler-calendar",modelValue:e(l).v_date_period_end,"onUpdate:modelValue":a[8]||(a[8]=o=>e(l).v_date_period_end=o),label:t.$t("End Date")},null,8,["modelValue","label"])]),_:1}),s(n,{class:"me-0 ms-3 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(_,{"prepend-inner-icon":"tabler-clock",modelValue:e(l).v_time_period_start,"onUpdate:modelValue":a[9]||(a[9]=o=>e(l).v_time_period_start=o),label:t.$t("Start Time"),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue","label"])]),_:1})]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(n,{class:"me-3 ms-0 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(_,{"prepend-inner-icon":"tabler-clock",modelValue:e(l).v_time_period_end,"onUpdate:modelValue":a[10]||(a[10]=o=>e(l).v_time_period_end=o),label:t.$t("End Time"),class:"w-50 pe-3",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue","label"])]),_:1})]),_:1}),s(n,{class:"mt-10",justify:"start",align:"end"},{default:r(()=>[s(i,{"prepend-inner-icon":"tabler-key",class:v(t.$vuetify.display.xs?"w-100 me-0":"flex-grow-0 me-2"),style:k(t.$vuetify.display.xs?"width: 100%":"width: 140px"),modelValue:e(l).v_prefix,"onUpdate:modelValue":a[11]||(a[11]=o=>e(l).v_prefix=o),label:t.$t("Prefix")},null,8,["class","style","modelValue","label"]),s(i,{rules:[e(d)],readonly:"",class:v(t.$vuetify.display.xs?"w-100 mt-2":"flex-grow-0"),style:k(t.$vuetify.display.xs?"width: 100%":"width: 140px"),modelValue:e(l).v_code,"onUpdate:modelValue":a[12]||(a[12]=o=>e(l).v_code=o),label:t.$t("Voucher Code")},null,8,["rules","class","style","modelValue","label"]),s(n,{align:"center",class:"mx-0 my-0",justify:"center","justify-lg":"start","justify-md":"start","justify-sm":"center"},{default:r(()=>[s(T,{block:t.$vuetify.display.xs,class:v([t.$vuetify.display.xs?"mt-2":"mx-2 mt-0",t.$vuetify.display.sm?"mt-2":""]),onClick:a[13]||(a[13]=o=>F())},{default:r(()=>[s(A,{start:"",icon:"tabler-reload"}),C(V(t.$t("Generate")),1)]),_:1},8,["block","class"]),s(X,{class:v(["ml-7",t.$vuetify.display.xs?"mt-3":""]),modelValue:e(l).v_is_active,"onUpdate:modelValue":a[14]||(a[14]=o=>e(l).v_is_active=o),"false-value":0,"true-value":1,inset:!1,label:t.$t("Active")},null,8,["modelValue","label","class"])]),_:1})]),_:1})]),_:1}),s(n,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:r(()=>[s(T,{block:t.$vuetify.display.xs,color:"primary",class:"px-12",loading:e(p),type:"submit"},{default:r(()=>[s(A,{start:"",icon:"tabler-plus"}),C(V(t.$t("Add")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof S=="function"&&S(D);const je=q(D,[["__scopeId","data-v-be4768f8"]]);export{je as default};
