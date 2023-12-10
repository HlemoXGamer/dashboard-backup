import{_ as L}from"./AppDateTimePicker-8aeb56f6.js";import{_ as O}from"./AppCombobox-2c8b6564.js";import{_ as W}from"./AppTextarea-39cec30e.js";import{C as Y,aV as Z,l as v,aP as K,R as Q,o as X,b as ee,w as r,q as s,W as C,n as ae,y as S,s as t,a$ as te,b0 as le,U as n,b1 as m,b2 as se,t as b,aY as N,az as I,z as M,H as R,aZ as z,a_ as oe}from"./index-d2581156.js";import{g as re}from"./discounts-4cc48822.js";import{s as ie,f as ne,u as de,a as ue}from"./vouchers-924a90d5.js";import{g as me}from"./discounts-400a9aaf.js";import{V as pe}from"./VSwitch-442011fb.js";import"./VCombobox-66ef1a06.js";import"./VSelect-801d8977.js";import"./VList-3c9a1f65.js";import"./ssrBoot-91f799f7.js";import"./VDivider-72799677.js";import"./dialog-transition-ed0dbcb2.js";import"./VMenu-5e1a829e.js";import"./VOverlay-a01ea84e.js";import"./lazy-5e287f74.js";import"./VCheckboxBtn-68cb53d5.js";import"./VSelectionControl-2699808d.js";import"./VChip-2c42ae55.js";import"./filter-06ec5503.js";const _e={class:"text-h4 pt-3 pb-2"},B={__name:"[id]",setup(ve){var F;const f=(F=JSON.parse(localStorage.getItem("userData")))==null?void 0:F.type,V=Z(),c=v(!1),y=K().params.id,e=v({}),A=v(),D=v([]),_=v(!1),q=async()=>{f=="admin"?await ie(y).then(l=>{let{v_name:a,v_code:i,v_prefix:d,v_description_ar:p,v_description_en:u,v_limit:o,v_min_total:w,v_amount:g,v_type:$,v_type_name:x,v_time_period_start:j,v_time_period_end:U,v_date_period_start:k,v_date_period_end:T,v_is_active:h}=l.data.data;e.value={v_name:a,v_code:i,v_prefix:d,v_description_ar:p,v_description_en:u,v_limit:o,v_min_total:w,v_amount:g,v_type:$,v_type_name:x,v_time_period_start:j,v_time_period_end:U,v_date_period_start:k,v_date_period_end:T,v_is_active:h},e.value.v_type_name=="free_delivevery"&&(e.value.v_amount=0,_.value=!0)}):f=="markter"&&await ne(y).then(l=>{let{v_name:a,v_code:i,v_prefix:d,v_description_ar:p,v_description_en:u,v_limit:o,v_min_total:w,v_amount:g,v_type:$,v_type_name:x,v_time_period_start:j,v_time_period_end:U,v_date_period_start:k,v_date_period_end:T,v_is_active:h}=l.data.data;e.value={v_name:a,v_code:i,v_prefix:d,v_description_ar:p,v_description_en:u,v_limit:o,v_min_total:w,v_amount:g,v_type:$,v_type_name:x,v_time_period_start:j,v_time_period_end:U,v_date_period_start:k,v_date_period_end:T,v_is_active:h},e.value.v_type_name=="free_delivevery"&&(e.value.v_amount=0,_.value=!0)})},H=l=>{const a="0123456789";let i="";for(let d=0;d<l;d++){const p=Math.floor(Math.random()*a.length);i+=a.charAt(p)}return i},P=()=>{const l=H(4);let a=e.value.v_prefix==null?"":e.value.v_prefix;e.value.v_code=a+`${l}`},E=async()=>{try{const{data:l}=f=="admin"?await re():await me();D.value=l.data.map(a=>a.name)}catch(l){V.error(l)}},G=async()=>{var l;(l=A.value)==null||l.validate().then(async({valid:a})=>{if(a){c.value=!0;try{f=="admin"?await de(y,e.value):await ue(y,e.value),c.value=!1,V.success("Voucher updated successfully")}catch(i){V.error(i.response.data.message),c.value=!1}}})},J=()=>{setTimeout(()=>{e.value.v_type_name=="free_delivevery"?(_.value=!0,e.value.v_amount=0,e.value.v_type=3):e.value.v_type_name=="fixed"?(_.value=!1,e.value.v_amount="",e.value.v_type=2):e.value.v_type_name=="percentage"&&(_.value=!1,e.value.v_amount="",e.value.v_type=1)},500)};return Q(()=>{q(),E()}),(l,a)=>{const i=oe,d=W,p=O,u=L;return X(),ee(n,{class:"mt-4 px-4",justify:"space-around"},{default:r(()=>[s(C,{class:"pt-0"},{default:r(()=>[s(C,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:r(()=>[ae("p",_e,S(l.$t("Update Voucher")),1),s(t(te),{ref_key:"refVForm",ref:A,onSubmit:le(G,["prevent"]),class:"w-100"},{default:r(()=>[s(C,null,{default:r(()=>[s(n,{justify:"space-between",align:"start"},{default:r(()=>[s(i,{"prepend-inner-icon":"tabler-writing",rules:[t(m)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(e).v_name,"onUpdate:modelValue":a[0]||(a[0]=o=>t(e).v_name=o),label:l.$t("Name")},null,8,["rules","modelValue","label"]),s(i,{"prepend-inner-icon":"tabler-coins",rules:[t(m)],disabled:t(_),style:{width:"100%"},class:"ps-3 w-50",modelValue:t(e).v_amount,"onUpdate:modelValue":a[1]||(a[1]=o=>t(e).v_amount=o),label:l.$t("Amount")},null,8,["rules","disabled","modelValue","label"])]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(d,{rules:[t(m)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(e).v_description_en,"onUpdate:modelValue":a[2]||(a[2]=o=>t(e).v_description_en=o),label:"Description"},null,8,["rules","modelValue"]),s(d,{rules:[t(m)],style:{width:"100%"},class:"ps-3 w-50 text-right",dir:"rtl",modelValue:t(e).v_description_ar,"onUpdate:modelValue":a[3]||(a[3]=o=>t(e).v_description_ar=o),label:"الوصف"},null,8,["rules","modelValue"])]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(p,{"prepend-inner-icon":"tabler-discount-2","onUpdate:modelValue":[J,a[4]||(a[4]=o=>t(e).v_type_name=o)],rules:[t(m)],style:{width:"100%"},class:"pe-3 w-50",modelValue:t(e).v_type_name,label:l.$t("Select Type"),items:t(D)},null,8,["rules","modelValue","label","items"]),s(i,{"prepend-inner-icon":"tabler-coins",rules:[t(m)],style:{width:"100%"},class:"ps-3 w-50",modelValue:t(e).v_min_total,"onUpdate:modelValue":a[5]||(a[5]=o=>t(e).v_min_total=o),label:l.$t("Minimum Total")},null,8,["rules","modelValue","label"])]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(n,{style:{width:"50%","max-width":"50%"},class:"w-50 pe-3 ms-0 my-0",align:"center",justify:"center"},{default:r(()=>[s(i,{"prepend-inner-icon":"tabler-forbid",rules:[t(m),t(se)],class:"w-100",style:{width:"100%"},modelValue:t(e).v_limit,"onUpdate:modelValue":a[6]||(a[6]=o=>t(e).v_limit=o),label:l.$t("Limit")},null,8,["rules","modelValue","label"])]),_:1}),s(n,{style:{width:"50%","max-width":"50%"},class:"me-0 ps-3 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(u,{"prepend-inner-icon":"tabler-calendar",modelValue:t(e).v_date_period_start,"onUpdate:modelValue":a[7]||(a[7]=o=>t(e).v_date_period_start=o),label:l.$t("Start Date")},null,8,["modelValue","label"])]),_:1})]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(n,{class:"me-3 ms-0 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(u,{"prepend-inner-icon":"tabler-calendar",modelValue:t(e).v_date_period_end,"onUpdate:modelValue":a[8]||(a[8]=o=>t(e).v_date_period_end=o),label:l.$t("End Date")},null,8,["modelValue","label"])]),_:1}),s(n,{class:"me-0 ms-3 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(u,{"prepend-inner-icon":"tabler-clock",modelValue:t(e).v_time_period_start,"onUpdate:modelValue":a[9]||(a[9]=o=>t(e).v_time_period_start=o),label:l.$t("Start Time"),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue","label"])]),_:1})]),_:1}),s(n,{class:"mt-10",justify:"space-between",align:"start"},{default:r(()=>[s(n,{class:"me-3 ms-0 my-0 flex-grow-1",align:"center",justify:"center"},{default:r(()=>[s(u,{"prepend-inner-icon":"tabler-clock",modelValue:t(e).v_time_period_end,"onUpdate:modelValue":a[10]||(a[10]=o=>t(e).v_time_period_end=o),label:l.$t("End Time"),class:"w-50 pe-3",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue","label"])]),_:1})]),_:1}),s(n,{class:"mt-10",justify:"start",align:"end"},{default:r(()=>[s(i,{"prepend-inner-icon":"tabler-key",class:b(l.$vuetify.display.xs?"w-100 me-0":"flex-grow-0 me-2"),style:N(l.$vuetify.display.xs?"width: 100%":"width: 140px"),modelValue:t(e).v_prefix,"onUpdate:modelValue":a[11]||(a[11]=o=>t(e).v_prefix=o),label:l.$t("Prefix")},null,8,["class","style","modelValue","label"]),s(i,{rules:[t(m)],readonly:"",class:b(l.$vuetify.display.xs?"w-100 mt-2":"flex-grow-0"),style:N(l.$vuetify.display.xs?"width: 100%":"width: 140px"),modelValue:t(e).v_code,"onUpdate:modelValue":a[12]||(a[12]=o=>t(e).v_code=o),label:l.$t("Voucher Code")},null,8,["rules","class","style","modelValue","label"]),s(n,{align:"center",class:"mx-0 my-0",justify:"center","justify-lg":"start","justify-md":"start","justify-sm":"center"},{default:r(()=>[s(I,{block:l.$vuetify.display.xs,class:b([l.$vuetify.display.xs?"mt-2":"mx-2 mt-0",l.$vuetify.display.sm?"mt-2":""]),onClick:a[13]||(a[13]=o=>P())},{default:r(()=>[s(M,{start:"",icon:"tabler-reload"}),R(S(l.$t("Generate")),1)]),_:1},8,["block","class"]),s(pe,{class:b(["ml-7",l.$vuetify.display.xs?"mt-3":""]),modelValue:t(e).v_is_active,"onUpdate:modelValue":a[14]||(a[14]=o=>t(e).v_is_active=o),"false-value":0,"true-value":1,inset:!1,label:l.$t("Active")},null,8,["modelValue","label","class"])]),_:1})]),_:1})]),_:1}),s(n,{class:"pb-6 mt-8 px-3",align:"center",justify:"center"},{default:r(()=>[s(I,{block:l.$vuetify.display.xs,color:"primary",class:"px-12",loading:t(c),type:"submit"},{default:r(()=>[s(M,{start:"",icon:"tabler-check"}),R(S(l.$t("Update")),1)]),_:1},8,["block","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}}};typeof z=="function"&&z(B);const Me=Y(B,[["__scopeId","data-v-6841c72a"]]);export{Me as default};
