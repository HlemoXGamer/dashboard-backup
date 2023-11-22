import{D as J,O as C,o as w,b as $,s as f,l as b,R as h,w as n,q as e,aX as M,n as D,y as N,U as y,W as s,G as X,I as Y,a_ as Z,C as K,aP as k,az as p,H as v,aZ as U}from"./index-2553232c.js";import{V as Q}from"./VDataTable-52dcbb6a.js";import{g as ee}from"./cities-50aab84f.js";import{V as x}from"./VCombobox-b2a8b769.js";import{b as ae,d as le}from"./branches-7f395d3a.js";import{a as te}from"./areas-69584faa.js";import"./VCheckboxBtn-a0afaf60.js";import"./VSelectionControl-f74574c4.js";import"./VSelect-358d744d.js";import"./VList-e1470fe2.js";import"./ssrBoot-f94ced35.js";import"./VDivider-e0392e32.js";import"./dialog-transition-576b2ccf.js";import"./VMenu-7c6276b6.js";import"./VOverlay-846eb30b.js";import"./lazy-48150f4f.js";import"./VChip-626870f8.js";import"./filter-35bc55f6.js";import"./VTable-76f3f818.js";const ne={__name:"BranchesViewTable",props:{data:{type:Array,default:[]}},setup(l){const m=J().t,o=C(()=>[{title:m("Day"),key:"day"},{title:m("Time"),sortable:!1,key:"time"},{title:m("Item Name"),sortable:!1,key:"item_name"},{title:m("Action"),sortable:!1,key:"action"},{title:m("Details"),sortable:!1,key:"details"}]);return(a,d)=>(w(),$(f(Q),{items:l.data,headers:f(o),"items-per-page":15,class:"pb-5 mt-0",title:"Branches Log"},null,8,["items","headers"]))}},oe={class:"text-h4 py-1 mb-3"},de={__name:"BranchesViewSummary",props:{data:{type:Object,default:{}}},setup(l){const u=b([]),m=()=>{ee().then(({data:o,meta:a})=>{u.value=o.data,console.log(u.value)})};return h(()=>{m()}),(o,a)=>{const d=Z;return w(),$(Y,{rounded:"lg",class:"pb-6 px-0",variant:"flat"},{default:n(()=>[e(M,null,{default:n(()=>[D("p",oe,N(o.$t("Branches Details")),1),e(y,{class:"px-2 mt-3"},{default:n(()=>[e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Name"),class:"mx-4 flex-grow-1",modelValue:l.data.name_en,"onUpdate:modelValue":a[0]||(a[0]=t=>l.data.name_en=t)},null,8,["label","modelValue"])]),_:1}),e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Phone Number"),class:"mx-4 flex-grow-1",modelValue:l.data.phone_no,"onUpdate:modelValue":a[1]||(a[1]=t=>l.data.phone_no=t)},null,8,["label","modelValue"])]),_:1}),e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Email"),class:"mx-4 flex-grow-1",modelValue:l.data.email,"onUpdate:modelValue":a[2]||(a[2]=t=>l.data.email=t)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:n(()=>[e(s,null,{default:n(()=>[e(x,{readonly:"",class:"mx-4 flex-grow-1",modelValue:l.data.days,"onUpdate:modelValue":a[3]||(a[3]=t=>l.data.days=t),label:o.$t("Working Days"),"return-object":!1,items:l.data.days,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Start Working Hours"),class:"mx-4 flex-grow-1",modelValue:l.data.start,"onUpdate:modelValue":a[4]||(a[4]=t=>l.data.start=t)},null,8,["label","modelValue"])]),_:1}),e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("End Working Hours"),class:"mx-4 flex-grow-1",modelValue:l.data.end,"onUpdate:modelValue":a[5]||(a[5]=t=>l.data.end=t)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:n(()=>[e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Estimate Time"),class:"mx-4 flex-grow-1",modelValue:l.data.est_time,"onUpdate:modelValue":a[6]||(a[6]=t=>l.data.est_time=t)},null,8,["label","modelValue"])]),_:1}),e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Branch Code"),class:"mx-4 flex-grow-1",modelValue:l.data.code,"onUpdate:modelValue":a[7]||(a[7]=t=>l.data.code=t)},null,8,["label","modelValue"])]),_:1}),e(s,null,{default:n(()=>[e(x,{readonly:"",class:"mx-4 flex-grow-1",modelValue:f(u),"onUpdate:modelValue":a[8]||(a[8]=t=>X(u)?u.value=t:null),label:o.$t("Cities"),"return-object":!1,items:f(u),multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:n(()=>[e(s,null,{default:n(()=>[e(x,{readonly:"",class:"mx-4 flex-grow-1",modelValue:l.data.areas,"onUpdate:modelValue":a[9]||(a[9]=t=>l.data.areas=t),label:o.$t("Areas"),"return-object":!1,items:l.data.areas,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Street Name"),class:"mx-4 flex-grow-1",modelValue:l.data.street_name,"onUpdate:modelValue":a[10]||(a[10]=t=>l.data.street_name=t)},null,8,["label","modelValue"])]),_:1}),e(s,null,{default:n(()=>[e(d,{readonly:"",label:o.$t("Building Number"),class:"mx-4 flex-grow-1",modelValue:l.data.building_no,"onUpdate:modelValue":a[11]||(a[11]=t=>l.data.building_no=t)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}};const se={class:"text-h4 pt-3 pb-2"},T={__name:"[id]",setup(l){var _;const u=(_=JSON.parse(localStorage.getItem("userData")))==null?void 0:_.type;k().params.id;const m=b([]),o=b([]),a=b({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:0}),d=b("today"),t=C(()=>i=>d.value===i?"elevated":"tonal"),B=k().params.id,I=async()=>{await ae(B).then(i=>{let{start:r,end:c,name_en:g,name_ar:V,phone_no:L,areas:j,city_id:R,street_name:A,building_no:W,email:E,password:H,est_time:O,delivery_fee:q,code:P,days:z,is_active:F}=i.data.data;a.value={start:r,end:c,name_en:g,name_ar:V,phone_no:L,areas:j,days:z,city_id:R,street_name:A,building_no:W,email:E,password:H,est_time:O,delivery_fee:q,code:P,is_active:F},a.value.email=i.data.data.user.email,te().then(({data:G,meta:ue})=>{m.value=G.data})})},S=()=>{le(B).then(({data:i,meta:r})=>{o.value=i.data,console.log("BranchesLog",o.value)})};return h(()=>{u==="admin"&&(I(),S())}),(i,r)=>{const c=de,g=ne;return w(),$(y,{class:"mt-4 px-4",justify:"space-around"},{default:n(()=>[e(s,{class:"pt-0"},{default:n(()=>[e(c,{data:f(a),cities:i.cities},null,8,["data","cities"]),e(y,{class:"gap-5 pt-16 pl-3 pb-0"},{default:n(()=>[e(p,{variant:f(t)("today"),onClick:r[0]||(r[0]=V=>d.value="today")},{default:n(()=>[v("Today")]),_:1},8,["variant"]),e(p,{variant:f(t)("yesterday"),onClick:r[1]||(r[1]=V=>d.value="yesterday")},{default:n(()=>[v("Yesterday")]),_:1},8,["variant"]),e(p,{variant:f(t)("custom"),onClick:r[2]||(r[2]=V=>d.value="custom")},{default:n(()=>[v("Custom")]),_:1},8,["variant"])]),_:1}),e(s,{class:"px-5 rounded mt-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:n(()=>[D("p",se,N(i.$t("Branches Log")),1),e(g,{data:f(o)},null,8,["data"])]),_:1})]),_:1})]),_:1})}}};typeof U=="function"&&U(T);const he=K(T,[["__scopeId","data-v-fc8ed571"]]);export{he as default};
