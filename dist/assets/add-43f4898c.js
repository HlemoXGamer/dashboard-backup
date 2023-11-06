import{D as W,O as q,aV as E,l as u,R as O,o as f,b as G,w as a,q as e,a$ as H,b0 as J,a2 as d,n as x,y as g,s,G as w,H as h,I as L,aX as X,b1 as F,c as k,F as Z,a as K,a1 as b,z as S,b4 as Q,A as Y,az as ee,aZ as T,aW as ae,a_ as te}from"./index-358c466b.js";import{c as le}from"./categories-5b1f35fe.js";import{c as se}from"./categories-025d2c33.js";import{g as oe}from"./products-c54e6430.js";import{g as ne}from"./products-2ee3de83.js";import{t as re}from"./files-2e167225.js";import{V as ue,a as U}from"./VTabs-e70fd454.js";import{a as de,V as B}from"./VWindowItem-f8d39d73.js";import{V as ie}from"./VCheckbox-ab3f7b59.js";import{V as me}from"./VFileInput-7d24b278.js";import{V as ce}from"./VSwitch-cb13388f.js";import"./lazy-0a540379.js";import"./ssrBoot-404c9b1f.js";import"./VCheckboxBtn-9bbd9eb4.js";import"./VSelectionControl-32ddc2e6.js";import"./VChip-01fa3c4b.js";const pe={class:"text-h4 pt-5 pb-2"},fe={class:"text-h4 pt-5 pb-2"},ge={class:"text-h4 pt-3 pb-2 px-3"},be={key:0,class:"position-relative"},ve={__name:"add",setup(Ve){var $;const v=W();v.t;const N=q(()=>{if(v.locale.value==="en")return"name_en";if(v.locale.value==="ar")return"name_ar"}),C=E(),m=u(!1),i=u(0),c=u([]),I=u(),n=u({is_active:0,name_en:"",name_ar:"",products:[],image:""}),V=u([]),p=($=JSON.parse(localStorage.getItem("userData")))==null?void 0:$.type,_=u([]),A=async t=>{if(t instanceof File){let l=await re(t);n.value.image=t,_.value=l}},D=async()=>{await A(c.value.pop())},y=u([]),P=async()=>{await ne().then(({data:t})=>{y.value=t.data})},R=async()=>{await oe().then(({data:t})=>{y.value=t.data})},j=t=>{V.value.push(t)},z=async()=>{var t;(t=I.value)==null||t.validate().then(async({valid:l})=>{if(l){m.value=!0;try{const r=new FormData;r.append("name_en",n.value.name_en),r.append("name_ar",n.value.name_ar),r.append("is_active",n.value.is_active),r.append("products",V.value),r.append("image",n.value.image),p=="admin"?await le(r):p=="markter"&&await se(r),C.success("Category created successfully"),m.value=!1,ae.back()}catch(r){C.error(r.response.data.message),m.value=!1}}})},M=t=>{n.value.image="",_.value=""};return O(()=>{p=="admin"?P():p=="markter"&&R()}),(t,l)=>{const r=te;return f(),G(b,{class:"mt-4 px-1",justify:"space-around"},{default:a(()=>[e(H,{onSubmit:J(z,["prevent"]),ref_key:"refVForm",ref:I,class:"w-100 d-flex justify-content-between"},{default:a(()=>[e(d,{cols:"8",class:"pt-0"},{default:a(()=>[e(d,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded px-7 pt-2"},{default:a(()=>[x("p",pe,g(t.$t("Add Category")),1),e(d,{class:"px-2 pt-0"},{default:a(()=>[e(ue,{modelValue:s(i),"onUpdate:modelValue":l[0]||(l[0]=o=>w(i)?i.value=o:null),class:"v-tabs-pill"},{default:a(()=>[e(U,null,{default:a(()=>[h("English")]),_:1}),e(U,null,{default:a(()=>[h("Arabic")]),_:1})]),_:1},8,["modelValue"]),e(L,{class:"pt-0 mt-0",style:{"background-color":"transparent","box-shadow":"none"}},{default:a(()=>[e(X,null,{default:a(()=>[e(de,{modelValue:s(i),"onUpdate:modelValue":l[3]||(l[3]=o=>w(i)?i.value=o:null)},{default:a(()=>[e(B,null,{default:a(()=>[e(r,{"prepend-inner-icon":"tabler-writing",rules:[s(F)],modelValue:s(n).name_en,"onUpdate:modelValue":l[1]||(l[1]=o=>s(n).name_en=o),class:"flex-grow-1 mr-1",label:"Name"},null,8,["rules","modelValue"])]),_:1}),e(B,null,{default:a(()=>[e(r,{"append-inner-icon":"tabler-writing",rules:[s(F)],modelValue:s(n).name_ar,"onUpdate:modelValue":l[2]||(l[2]=o=>s(n).name_ar=o),class:"flex-grow-1 ml-1 text-right",dir:"rtl",label:"الاسم"},null,8,["rules","modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded px-7 pt-2 mt-5"},{default:a(()=>[x("p",fe,g(t.$t("Products")),1),e(d,{class:"px-2 pt-0"},{default:a(()=>[(f(!0),k(Z,null,K(s(y),o=>(f(),k("div",null,[e(ie,{label:o[s(N)],"v-model":s(V),onChange:_e=>j(o.id)},null,8,["label","v-model","onChange"])]))),256))]),_:1})]),_:1})]),_:1}),e(d,{cols:"4",style:{"background-color":"rgb(var(--v-theme-surface))",height:"fit-content"},class:"rounded pb-10"},{default:a(()=>[x("p",ge,g(t.$t("Images")),1),e(b,null,{default:a(()=>[e(d,null,{default:a(()=>[e(b,{class:"px-5"},{default:a(()=>[s(n).image?(f(),k("div",be,[e(S,{class:"position-absolute bg-red rounded px-1",style:{width:"30px",height:"30px","background-color":"rgb(199, 0, 0)","z-index":"100",right:"-5px",top:"-7px"},color:"#fff",icon:"tabler-ban",onClick:l[4]||(l[4]=o=>M())}),e(Q,{"prepend-icon":"tabler-camera",src:s(_),width:"90px",style:{height:"90px"},cover:"",class:"mx-1 my-2 rounded"},null,8,["src"])])):Y("",!0)]),_:1}),e(me,{class:"px-2 mt-8",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"tabler-camera",placeholder:"Pick an image",label:t.$t("Upload image"),modelValue:s(c),"onUpdate:modelValue":l[5]||(l[5]=o=>w(c)?c.value=o:null),onChange:D},null,8,["label","modelValue"])]),_:1})]),_:1}),e(d,{class:"mt-2"},{default:a(()=>[e(ce,{modelValue:s(n).is_active,"onUpdate:modelValue":l[6]||(l[6]=o=>s(n).is_active=o),"false-value":0,"true-value":1,inset:!1,label:t.$t("Active")},null,8,["modelValue","label"])]),_:1}),e(b,{class:"px-5 mt-2"},{default:a(()=>[e(ee,{type:"submit",color:"primary",loading:s(m),block:""},{default:a(()=>[e(S,{start:"",icon:"tabler-plus"}),h(g(t.$t("Create")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})}}};typeof T=="function"&&T(ve);export{ve as default};
