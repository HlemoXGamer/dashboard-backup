<<<<<<<< HEAD:dist/assets/_id_-2babcff6.js
import{_ as E}from"./AppDateTimePicker-d6b678de.js";import{C as P,aP as W,l as d,aV as A,R as q,o as z,b as M,w as i,q as o,W as U,s as a,a$ as G,b0 as J,n as O,y as B,U as c,b1 as m,b2 as Z,bc as K,bd as L,G as C,az as Q,z as X,H as Y,aZ as F,a_ as ee}from"./index-f1c459eb.js";import{g as ae}from"./days-58e0280c.js";import{a as le}from"./branches-19917981.js";import{s as te,u as se}from"./deliveries-d5bb4aa3.js";import{g as oe}from"./branches-28d6f0e2.js";import{s as ne,u as ie}from"./deliveries-2fef611e.js";import{V as N}from"./VCombobox-04c86b21.js";import{V as re}from"./VSwitch-4a3cd25f.js";import"./VSelect-2c8f7944.js";import"./VList-74ffa485.js";import"./ssrBoot-8810db81.js";import"./VDivider-9e565a14.js";import"./dialog-transition-6c2a3b2e.js";import"./VMenu-e3bda89b.js";import"./VOverlay-69ba156e.js";import"./lazy-b1353a91.js";import"./VCheckboxBtn-07cdbf13.js";import"./VSelectionControl-9d7d0faa.js";import"./VChip-d3e3dc93.js";import"./filter-3f9fc9d6.js";const ue={class:"text-h4 pt-3 pb-2"},T={__name:"[id]",setup(de){var j;const u=(j=JSON.parse(localStorage.getItem("userData")))==null?void 0:j.type,v=W().params.id,p=d([]),D=d(),S=A(),w=d(!1),V=d([]),b=d([]),f=d(""),s=d({start:"",end:"",name:"",phone:"",email:"",password:"",code:"",working_hour:null,working_days:[],is_active:0,branch_id:null}),x=async()=>{u=="admin"?await te(v).then(t=>{let{start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}=t.data.data;s.value={start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}}):u=="logistic"&&await ne(v).then(t=>{let{start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}=t.data.data;s.value={start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}})},H=async()=>{var t;(t=D.value)==null||t.validate().then(async({valid:l})=>{if(l){w.value=!0;let n=[];V.value.forEach(e=>{b.value.forEach(_=>{e.name_en==_&&n.push(e.id)})}),s.value.working_days=n;let r=p.value.filter(e=>e.name_en==f.value)[0].id;s.value.branch_id=r;try{const{data:e}=u=="admin"?await se(v,s.value):await ie(v,s.value);S.success("Delivery man updated successfully"),w.value=!1}catch(e){S.error(e.response.data.message),w.value=!1}}})},I=async()=>{u=="admin"?await le().then(({data:t,meta:l})=>{p.value=t.data,f.value=p.value.filter(n=>n.id==s.value.branch_id)[0].name_en}):u=="logistic"&&await oe().then(({data:t,meta:l})=>{p.value=t.data,f.value=p.value.filter(n=>n.id==s.value.branch_id)[0].name_en})},R=async()=>{await ae().then(({data:t,meta:l})=>{V.value=t.data,b.value=t.data.map(n=>n.name_en)})};return q(()=>{(u=="admin"||u=="logistic")&&(x(),R(),I())}),(t,l)=>{const n=ee,r=E;return z(),M(c,{class:"mt-4 px-4",justify:"space-around"},{default:i(()=>[o(U,{class:"pt-0"},{default:i(()=>[o(a(G),{ref_key:"refVForm",ref:D,onSubmit:J(H,["prevent"])},{default:i(()=>[o(U,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:i(()=>[O("p",ue,B(t.$t("Update Delivery")),1),o(U,null,{default:i(()=>[o(c,{justify:"space-between",align:"start"},{default:i(()=>[o(n,{rules:[a(m)],style:{width:"100%"},class:"pe-3 w-50",modelValue:a(s).name,"onUpdate:modelValue":l[0]||(l[0]=e=>a(s).name=e),label:t.$t("Name")},null,8,["rules","modelValue","label"]),o(n,{rules:[a(m),a(Z),a(K)],style:{width:"100%"},class:"ps-3 w-50",modelValue:a(s).phone,"onUpdate:modelValue":l[1]||(l[1]=e=>a(s).phone=e),label:t.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),o(c,{class:"mt-10",justify:"space-between",align:"start"},{default:i(()=>[o(n,{rules:[a(m),a(L)],style:{width:"100%"},class:"pe-3 w-50",modelValue:a(s).email,"onUpdate:modelValue":l[2]||(l[2]=e=>a(s).email=e),label:t.$t("Email")},null,8,["rules","modelValue","label"]),o(n,{style:{width:"100%"},class:"ps-3 w-50",modelValue:a(s).password,"onUpdate:modelValue":l[3]||(l[3]=e=>a(s).password=e),label:t.$t("Password")},null,8,["modelValue","label"])]),_:1}),o(c,{class:"mt-10",justify:"space-between",align:"end"},{default:i(()=>[o(N,{modelValue:a(b),"onUpdate:modelValue":l[4]||(l[4]=e=>C(b)?b.value=e:null),multiple:"",rules:[a(m)],style:{width:"100%"},class:"pe-3 w-50",items:a(V).map(e=>e.name_en),variant:"outlined",label:t.$t("Working Days")},null,8,["modelValue","rules","items","label"]),o(r,{rules:[a(m)],modelValue:a(s).start,"onUpdate:modelValue":l[5]||(l[5]=e=>a(s).start=e),label:t.$t("Start Working Hours"),class:"ps-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["rules","modelValue","label"])]),_:1}),o(c,{class:"mt-10",justify:"space-between",align:"end"},{default:i(()=>[o(r,{rules:[a(m)],modelValue:a(s).end,"onUpdate:modelValue":l[6]||(l[6]=e=>a(s).end=e),label:t.$t("End Working Hours"),class:"pe-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["rules","modelValue","label"]),o(N,{modelValue:a(f),"onUpdate:modelValue":l[7]||(l[7]=e=>C(f)?f.value=e:null),rules:[a(m)],style:{width:"100%"},class:"w-50 ps-3 flex-grow-0",items:a(p).map(e=>e.name_en),variant:"outlined",label:t.$t("Branch")},null,8,["modelValue","rules","items","label"])]),_:1}),o(c,{class:"pb-4 mt-8 px-3 mt-10",align:"center",justify:"center"},{default:i(()=>[o(Q,{block:t.$vuetify.display.xs,color:"primary",class:"px-12",loading:a(w),type:"submit"},{default:i(()=>[o(X,{start:"",icon:"tabler-check"}),Y(B(t.$t("Update")),1)]),_:1},8,["block","loading"]),o(re,{class:"ml-7",modelValue:a(s).is_active,"onUpdate:modelValue":l[8]||(l[8]=e=>a(s).is_active=e),"false-value":0,"true-value":1,inset:!1,label:t.$t("Active")},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}}};typeof F=="function"&&F(T);const Ne=P(T,[["__scopeId","data-v-54df4aa1"]]);export{Ne as default};
========
import{_ as E}from"./AppDateTimePicker-7f0cc36c.js";import{C as P,aP as W,l as d,aV as A,R as q,o as z,b as M,w as i,q as o,W as U,s as a,a$ as G,b0 as J,n as O,y as B,U as c,b1 as m,b2 as Z,bc as K,bd as L,G as C,az as Q,z as X,H as Y,aZ as F,a_ as ee}from"./index-ad06e79a.js";import{g as ae}from"./days-a80e1e7b.js";import{a as le}from"./branches-f687d4e9.js";import{s as te,u as se}from"./deliveries-8822c364.js";import{g as oe}from"./branches-85d95788.js";import{s as ne,u as ie}from"./deliveries-45388138.js";import{V as N}from"./VCombobox-26856a8e.js";import{V as re}from"./VSwitch-cab5ab76.js";import"./VSelect-76fdbbde.js";import"./VList-9ab7df99.js";import"./ssrBoot-defe399c.js";import"./VDivider-4cc22aef.js";import"./dialog-transition-9757e826.js";import"./VMenu-0f9b48c2.js";import"./VOverlay-907c7a82.js";import"./lazy-4cfe01f9.js";import"./VCheckboxBtn-f6dd6c6f.js";import"./VSelectionControl-694a1f9e.js";import"./VChip-5e82d9df.js";import"./filter-1b8aa21b.js";const ue={class:"text-h4 pt-3 pb-2"},T={__name:"[id]",setup(de){var j;const u=(j=JSON.parse(localStorage.getItem("userData")))==null?void 0:j.type,v=W().params.id,p=d([]),D=d(),S=A(),w=d(!1),V=d([]),b=d([]),f=d(""),s=d({start:"",end:"",name:"",phone:"",email:"",password:"",code:"",working_hour:null,working_days:[],is_active:0,branch_id:null}),x=async()=>{u=="admin"?await te(v).then(t=>{let{start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}=t.data.data;s.value={start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}}):u=="logistic"&&await ne(v).then(t=>{let{start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}=t.data.data;s.value={start:l,end:n,name:r,phone:e,email:_,code:y,working_hour:g,working_days:h,branch_id:k,is_active:$}})},H=async()=>{var t;(t=D.value)==null||t.validate().then(async({valid:l})=>{if(l){w.value=!0;let n=[];V.value.forEach(e=>{b.value.forEach(_=>{e.name_en==_&&n.push(e.id)})}),s.value.working_days=n;let r=p.value.filter(e=>e.name_en==f.value)[0].id;s.value.branch_id=r;try{const{data:e}=u=="admin"?await se(v,s.value):await ie(v,s.value);S.success("Delivery man updated successfully"),w.value=!1}catch(e){S.error(e.response.data.message),w.value=!1}}})},I=async()=>{u=="admin"?await le().then(({data:t,meta:l})=>{p.value=t.data,f.value=p.value.filter(n=>n.id==s.value.branch_id)[0].name_en}):u=="logistic"&&await oe().then(({data:t,meta:l})=>{p.value=t.data,f.value=p.value.filter(n=>n.id==s.value.branch_id)[0].name_en})},R=async()=>{await ae().then(({data:t,meta:l})=>{V.value=t.data,b.value=t.data.map(n=>n.name_en)})};return q(()=>{(u=="admin"||u=="logistic")&&(x(),R(),I())}),(t,l)=>{const n=ee,r=E;return z(),M(c,{class:"mt-4 px-4",justify:"space-around"},{default:i(()=>[o(U,{class:"pt-0"},{default:i(()=>[o(a(G),{ref_key:"refVForm",ref:D,onSubmit:J(H,["prevent"])},{default:i(()=>[o(U,{class:"px-5 rounded",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:i(()=>[O("p",ue,B(t.$t("Update Delivery")),1),o(U,null,{default:i(()=>[o(c,{justify:"space-between",align:"start"},{default:i(()=>[o(n,{rules:[a(m)],style:{width:"100%"},class:"pe-3 w-50",modelValue:a(s).name,"onUpdate:modelValue":l[0]||(l[0]=e=>a(s).name=e),label:t.$t("Name")},null,8,["rules","modelValue","label"]),o(n,{rules:[a(m),a(Z),a(K)],style:{width:"100%"},class:"ps-3 w-50",modelValue:a(s).phone,"onUpdate:modelValue":l[1]||(l[1]=e=>a(s).phone=e),label:t.$t("Phone Number")},null,8,["rules","modelValue","label"])]),_:1}),o(c,{class:"mt-10",justify:"space-between",align:"start"},{default:i(()=>[o(n,{rules:[a(m),a(L)],style:{width:"100%"},class:"pe-3 w-50",modelValue:a(s).email,"onUpdate:modelValue":l[2]||(l[2]=e=>a(s).email=e),label:t.$t("Email")},null,8,["rules","modelValue","label"]),o(n,{style:{width:"100%"},class:"ps-3 w-50",modelValue:a(s).password,"onUpdate:modelValue":l[3]||(l[3]=e=>a(s).password=e),label:t.$t("Password")},null,8,["modelValue","label"])]),_:1}),o(c,{class:"mt-10",justify:"space-between",align:"end"},{default:i(()=>[o(N,{modelValue:a(b),"onUpdate:modelValue":l[4]||(l[4]=e=>C(b)?b.value=e:null),multiple:"",rules:[a(m)],style:{width:"100%"},class:"pe-3 w-50",items:a(V).map(e=>e.name_en),variant:"outlined",label:t.$t("Working Days")},null,8,["modelValue","rules","items","label"]),o(r,{rules:[a(m)],modelValue:a(s).start,"onUpdate:modelValue":l[5]||(l[5]=e=>a(s).start=e),label:t.$t("Start Working Hours"),class:"ps-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["rules","modelValue","label"])]),_:1}),o(c,{class:"mt-10",justify:"space-between",align:"end"},{default:i(()=>[o(r,{rules:[a(m)],modelValue:a(s).end,"onUpdate:modelValue":l[6]||(l[6]=e=>a(s).end=e),label:t.$t("End Working Hours"),class:"pe-3 flex-grow-0",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["rules","modelValue","label"]),o(N,{modelValue:a(f),"onUpdate:modelValue":l[7]||(l[7]=e=>C(f)?f.value=e:null),rules:[a(m)],style:{width:"100%"},class:"w-50 ps-3 flex-grow-0",items:a(p).map(e=>e.name_en),variant:"outlined",label:t.$t("Branch")},null,8,["modelValue","rules","items","label"])]),_:1}),o(c,{class:"pb-4 mt-8 px-3 mt-10",align:"center",justify:"center"},{default:i(()=>[o(Q,{block:t.$vuetify.display.xs,color:"primary",class:"px-12",loading:a(w),type:"submit"},{default:i(()=>[o(X,{start:"",icon:"tabler-check"}),Y(B(t.$t("Update")),1)]),_:1},8,["block","loading"]),o(re,{class:"ml-7",modelValue:a(s).is_active,"onUpdate:modelValue":l[8]||(l[8]=e=>a(s).is_active=e),"false-value":0,"true-value":1,inset:!1,label:t.$t("Active")},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})}}};typeof F=="function"&&F(T);const Ne=P(T,[["__scopeId","data-v-54df4aa1"]]);export{Ne as default};
>>>>>>>> master:dist/assets/_id_-0cd5876a.js
