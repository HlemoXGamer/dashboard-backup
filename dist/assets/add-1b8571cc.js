import{_ as M}from"./AppTextarea-66b19233.js";import{l as d,aV as O,R as G,o as c,b,w as n,q as o,a$ as H,b0 as J,a2 as f,n as k,y as $,a1 as m,s as e,b1 as p,b3 as L,A as x,b4 as W,c as C,F as Z,a as K,z as N,b5 as Q,G as X,az as Y,H as ee,aZ as P,aW as ae,a_ as le}from"./index-1dd32ede.js";import{g as te}from"./categories-7c296b59.js";import{c as se}from"./products-1e533205.js";import{g as re,a as oe}from"./extra-flavors-1b890b85.js";import{g as ne}from"./categories-a51dbe1d.js";import{c as ie}from"./products-c556c023.js";import{t as S}from"./files-2e167225.js";import{V as U}from"./VCombobox-176931e8.js";import{V as ue}from"./VFileInput-7767633a.js";import{V as y}from"./VSwitch-9b497ade.js";import"./VSelect-f8a112ce.js";import"./VList-e7465de7.js";import"./ssrBoot-8f54b7f9.js";import"./VDivider-97372cc6.js";import"./dialog-transition-5ac630ee.js";import"./VMenu-59c814f3.js";import"./VOverlay-5a3e7225.js";import"./lazy-469ad044.js";import"./VCheckboxBtn-34ce8752.js";import"./VSelectionControl-02c1120d.js";import"./VChip-ce0ef404.js";import"./filter-b4ea8019.js";const de={class:"text-h4 pt-3 pb-2 px-3"},me={class:"text-h4 pt-3 pb-2 px-3"},pe={class:"position-relative"},ce={__name:"add",setup(fe){var q;const v=d([]),g=d([]),h=O(),V=d(!1),w=d([]),F=d([]),I=d([]),u=(q=JSON.parse(localStorage.getItem("userData")))==null?void 0:q.type,a=d({code:"",created_at:"",categories:[],description_ar:"",description_en:"",has_image:0,has_note:0,images:"",is_active:0,name_ar:"",name_en:"",prep_time:"",price:"",status:0,extras:[],flavors:[],extra_quantity:1,is_pre:0}),j=d(),_=d([]),A=async s=>{if(s instanceof File){let l=await S(s);g.value.push({id:null,url:l}),_.value.push(s)}},E=async()=>{await A(v.value.pop())},B=async()=>{var s;(s=j.value)==null||s.validate().then(async({valid:l})=>{if(l){V.value=!0;let r=new FormData;r.append("code",a.value.code),r.append("categories",a.value.categories),r.append("description_ar",a.value.description_ar),r.append("description_en",a.value.description_en),r.append("has_image",a.value.has_image),r.append("has_note",a.value.has_note),r.append("is_active",a.value.is_active),r.append("name_ar",a.value.name_ar),r.append("name_en",a.value.name_en),r.append("prep_time",a.value.prep_time),r.append("price",a.value.price),r.append("status",a.value.status),r.append("is_pre",a.value.is_pre),a.value.extras.concat(a.value.flavors).forEach((i,t)=>{r.append(`extra_flavors[${t}]`,i)}),r.append("quantity",a.value.extra_quantity),_.value.forEach((i,t)=>{r.append(`images[${t}]`,i)});try{u=="admin"?await se(r):await ie(r),h.success("Product added successfully"),V.value=!1,ae.back()}catch(i){h.error(i.response.data.message),V.value=!1}}})},D=()=>{u=="admin"?te().then(({data:s,meta:l})=>{w.value=s.data}):u=="markter"&&ne().then(({data:s,meta:l})=>{w.value=s.data})},T=()=>{u=="admin"&&re().then(({data:s,meta:l})=>{I.value=s.data})},R=()=>{u=="admin"&&oe().then(({data:s,meta:l})=>{F.value=s.data})},z=async s=>{const l=g.value.indexOf(g.value.filter(r=>r.url==s.url)[0]);l!==-1&&g.value.splice(l,1),_.value.forEach(async r=>{r instanceof File&&await S(r).then(i=>{i==s.url&&_.value.splice(r,1)})})};return G(()=>{D(),T(),R()}),(s,l)=>{const r=le,i=M;return c(),b(m,{class:"mt-4 px-4",justify:"space-around"},{default:n(()=>[o(H,{ref_key:"refVForm",ref:j,onSubmit:J(B,["prevent"]),class:"w-100 d-flex justify-content-between"},{default:n(()=>[o(f,{cols:"8",class:"pt-0"},{default:n(()=>[o(f,{class:"px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:n(()=>[k("p",de,$(s.$t("Add Product")),1),o(f,{class:"px-5"},{default:n(()=>[o(m,{justify:"space-between",align:"start"},{default:n(()=>[o(r,{"prepend-inner-icon":"tabler-package",modelValue:e(a).name_en,"onUpdate:modelValue":l[0]||(l[0]=t=>e(a).name_en=t),rules:[e(p)],class:"flex-grow-1 me-1",label:"Name"},null,8,["modelValue","rules"]),o(r,{"append-inner-icon":"tabler-package",modelValue:e(a).name_ar,"onUpdate:modelValue":l[1]||(l[1]=t=>e(a).name_ar=t),rules:[e(p)],class:"flex-grow-1 ms-1 text-right",dir:"rtl",label:"الاسم"},null,8,["modelValue","rules"])]),_:1}),o(m,{class:"mt-10",justify:"space-between",align:"start"},{default:n(()=>[o(i,{modelValue:e(a).description_en,"onUpdate:modelValue":l[2]||(l[2]=t=>e(a).description_en=t),rules:[e(p)],class:"flex-grow-1 me-1",label:"Description"},null,8,["modelValue","rules"]),o(i,{modelValue:e(a).description_ar,"onUpdate:modelValue":l[3]||(l[3]=t=>e(a).description_ar=t),rules:[e(p)],class:"flex-grow-1 ms-1 text-right",dir:"rtl",label:"الوصف"},null,8,["modelValue","rules"])]),_:1}),e(u)=="admin"?(c(),b(m,{key:0,class:"mt-5",justify:"space-between",align:"center"},{default:n(()=>[o(r,{"prepend-inner-icon":"tabler-coins",modelValue:e(a).price,"onUpdate:modelValue":l[4]||(l[4]=t=>e(a).price=t),rules:[e(p),e(L)],class:"flex-grow-1 me-1",label:s.$t("Product Price")},null,8,["modelValue","rules","label"]),o(U,{"prepend-inner-icon":"tabler-bookmark",multiple:"","return-object":!1,items:e(w),"item-value":"id","item-title":"name_en",rules:[e(p)],modelValue:e(a).categories,"onUpdate:modelValue":l[5]||(l[5]=t=>e(a).categories=t),class:"flex-grow-1 ms-1 mt-6",label:s.$t("Select Category")},null,8,["items","rules","modelValue","label"])]),_:1})):x("",!0),e(u)=="admin"?(c(),b(m,{key:1,class:"mt-10",justify:"space-between",align:"start"},{default:n(()=>[o(r,{"prepend-inner-icon":"tabler-dna-2",modelValue:e(a).code,"onUpdate:modelValue":l[6]||(l[6]=t=>e(a).code=t),rules:[e(p)],class:"flex-grow-1 me-1",label:s.$t("Product Code")},null,8,["modelValue","rules","label"]),o(r,{"prepend-inner-icon":"tabler-clock",modelValue:e(a).prep_time,"onUpdate:modelValue":l[7]||(l[7]=t=>e(a).prep_time=t),rules:[e(p)],class:"flex-grow-1 ms-1",label:s.$t("Preparation Time")},null,8,["modelValue","rules","label"])]),_:1})):x("",!0),e(u)=="admin"?(c(),b(m,{key:2,class:"mt-10",justify:"space-between",align:"center"},{default:n(()=>[o(U,{"prepend-inner-icon":"tabler-package",multiple:"","return-object":!1,items:e(F),"item-value":"id","item-title":"name",modelValue:e(a).extras,"onUpdate:modelValue":l[8]||(l[8]=t=>e(a).extras=t),class:"flex-grow-1 ms-1 mt-3",label:s.$t("Select Extra")},null,8,["items","modelValue","label"]),o(U,{"prepend-inner-icon":"tabler-package","return-object":!1,items:e(I),multiple:"","item-value":"id","item-title":"name",modelValue:e(a).flavor,"onUpdate:modelValue":l[9]||(l[9]=t=>e(a).flavor=t),class:"flex-grow-1 ms-1 mt-3",label:s.$t("Select Flavor")},null,8,["items","modelValue","label"]),o(r,{"prepend-inner-icon":"tabler-number",modelValue:e(a).extra_quantity,"onUpdate:modelValue":l[10]||(l[10]=t=>e(a).extra_quantity=t),rules:[e(W)(e(a).extra_quantity,e(a).is_pre===1)],class:"flex-grow-1 ms-1 mt-3",placeholder:s.$t("extra_quantity")},null,8,["modelValue","rules","placeholder"])]),_:1})):x("",!0)]),_:1})]),_:1})]),_:1}),o(f,{cols:"4",style:{"background-color":"rgb(var(--v-theme-surface))",height:"fit-content"},class:"rounded pb-10"},{default:n(()=>[k("p",me,$(s.$t("Images")),1),o(m,null,{default:n(()=>[o(f,null,{default:n(()=>[o(m,{class:"px-5"},{default:n(()=>[(c(!0),C(Z,null,K(e(g),t=>(c(),C("div",null,[k("div",pe,[o(N,{class:"position-absolute bg-red rounded px-1",style:{width:"30px",height:"30px","background-color":"rgb(199, 0, 0)","z-index":"2",right:"-5px",top:"-7px"},color:"#fff",icon:"tabler-ban",onClick:ge=>z(t)},null,8,["onClick"]),o(Q,{"prepend-icon":"tabler-camera",src:t.url,width:"90px",style:{height:"90px"},cover:"",class:"mx-1 my-2 rounded"},null,8,["src"])])]))),256))]),_:1}),o(ue,{class:"px-2 mt-8",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"tabler-camera",placeholder:"Pick an image",multiple:"",label:s.$t("Upload image"),modelValue:e(v),"onUpdate:modelValue":l[11]||(l[11]=t=>X(v)?v.value=t:null),onChange:E},null,8,["label","modelValue"])]),_:1})]),_:1}),e(u)=="admin"?(c(),b(f,{key:0,class:"mt-2"},{default:n(()=>[o(y,{modelValue:e(a).is_active,"onUpdate:modelValue":l[12]||(l[12]=t=>e(a).is_active=t),inset:!1,"false-value":0,"true-value":1,label:s.$t("Active")},null,8,["modelValue","label"]),o(y,{modelValue:e(a).has_image,"onUpdate:modelValue":l[13]||(l[13]=t=>e(a).has_image=t),inset:!1,"false-value":0,"true-value":1,label:s.$t("Need Image")},null,8,["modelValue","label"]),o(y,{modelValue:e(a).has_note,"onUpdate:modelValue":l[14]||(l[14]=t=>e(a).has_note=t),inset:!1,"false-value":0,"true-value":1,label:s.$t("Need Note")},null,8,["modelValue","label"]),o(y,{modelValue:e(a).is_pre,"onUpdate:modelValue":l[15]||(l[15]=t=>e(a).is_pre=t),inset:!1,"false-value":0,"true-value":1,label:s.$t("Is Pre")},null,8,["modelValue","label"])]),_:1})):x("",!0),o(m,{class:"px-5 mt-2"},{default:n(()=>[o(Y,{color:"primary",loading:e(V),type:"submit",block:""},{default:n(()=>[o(N,{start:"",icon:"tabler-plus"}),ee($(s.$t("Add")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})}}};typeof P=="function"&&P(ce);export{ce as default};
