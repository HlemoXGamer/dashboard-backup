import{D as J,O as h,o as $,b as _,w as o,q as e,t as M,H as g,y as B,s as m,l as V,R as D,aX as X,n as S,a1 as c,a2 as d,I as Y,a_ as Z,C as G,aP as C,az as x,aZ as U}from"./index-581c2083.js";import{V as K}from"./VChip-2cd4c1fb.js";import{V as Q}from"./VDataTable-06e6a8ff.js";import{g as ee}from"./cities-c2f6992a.js";import{V as ae}from"./VCombobox-6fdf6a72.js";import{b as te,d as le}from"./branches-209a58fb.js";import{a as oe}from"./areas-286d9eed.js";import"./VCheckboxBtn-36803dae.js";import"./VSelectionControl-6e42f01a.js";import"./VSelect-91e75b33.js";import"./VList-800b0139.js";import"./ssrBoot-f2e19377.js";import"./VDivider-007f86e5.js";import"./dialog-transition-e2ab3ff7.js";import"./VMenu-568d971d.js";import"./VOverlay-b3d70df2.js";import"./lazy-e0bc52de.js";import"./filter-887944dd.js";import"./VTable-db7fafcb.js";const ne={__name:"BranchesViewTable",props:{items:{type:Array,default:[]}},setup(t){const r=J().t,n=s=>{if(s==="activate")return{color:"success",text:r("Activate")};if(s==="deactivate")return{color:"secondary",text:r("Deactivate")}},a=h(()=>[{title:r("Branch"),key:"branch_id"},{title:r("Description"),sortable:!1,key:"details"},{title:r("Changed At"),sortable:!1,key:"updated_at"},{title:r("Status"),sortable:!1,key:"action"}]);return(s,l)=>($(),_(m(Q),{items:t.items,headers:m(a),"items-per-page":15,class:"pb-5 mt-0",title:"Branches Log"},{"item.action":o(({item:b})=>[e(K,{color:n(b.raw.action).color,class:M([`text-${n(b.raw.action).color}`,"font-weight-medium"]),size:"small"},{default:o(()=>[g(B(n(b.raw.action).text),1)]),_:2},1032,["color","class"])]),_:1},8,["items","headers"]))}},se={class:"text-h4 py-1 mb-3"},de={__name:"BranchesViewSummary",props:{data:{type:Object,default:{}}},setup(t){const f=V([]),r=()=>{ee().then(({data:n,meta:a})=>{f.value=n.data,console.log(f.value)})};return D(()=>{r()}),(n,a)=>{const s=Z;return $(),_(Y,{rounded:"lg",class:"pb-6 px-0",variant:"flat"},{default:o(()=>[e(X,null,{default:o(()=>[S("p",se,B(n.$t("Branches Details")),1),e(c,{class:"px-2 mt-3"},{default:o(()=>[e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Name"),class:"mx-4 flex-grow-1",modelValue:t.data.name_en,"onUpdate:modelValue":a[0]||(a[0]=l=>t.data.name_en=l)},null,8,["label","modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Phone Number"),class:"mx-4 flex-grow-1",modelValue:t.data.phone_no,"onUpdate:modelValue":a[1]||(a[1]=l=>t.data.phone_no=l)},null,8,["label","modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Email"),class:"mx-4 flex-grow-1",modelValue:t.data.email,"onUpdate:modelValue":a[2]||(a[2]=l=>t.data.email=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(c,{class:"px-2 mt-7"},{default:o(()=>[e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Working Days"),class:"mx-4 flex-grow-1",modelValue:t.data.working_days,"onUpdate:modelValue":a[3]||(a[3]=l=>t.data.working_days=l)},null,8,["label","modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Start Working Hours"),class:"mx-4 flex-grow-1",modelValue:t.data.start,"onUpdate:modelValue":a[4]||(a[4]=l=>t.data.start=l)},null,8,["label","modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("End Working Hours"),class:"mx-4 flex-grow-1",modelValue:t.data.end,"onUpdate:modelValue":a[5]||(a[5]=l=>t.data.end=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(c,{class:"px-2 mt-7"},{default:o(()=>[e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Estimate Time"),class:"mx-4 flex-grow-1",modelValue:t.data.est_time,"onUpdate:modelValue":a[6]||(a[6]=l=>t.data.est_time=l)},null,8,["label","modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Branch Code"),class:"mx-4 flex-grow-1",modelValue:t.data.code,"onUpdate:modelValue":a[7]||(a[7]=l=>t.data.code=l)},null,8,["label","modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("cities"),items:m(f),class:"mx-4 flex-grow-1",modelValue:t.data.city_id,"onUpdate:modelValue":a[8]||(a[8]=l=>t.data.city_id=l),"item-value":"id","item-title":"name","return-object":!1},null,8,["label","items","modelValue"])]),_:1})]),_:1}),e(c,{class:"px-2 mt-7"},{default:o(()=>[e(d,null,{default:o(()=>[e(ae,{readonly:"",class:"mx-4 flex-grow-1",modelValue:t.data.areas,"onUpdate:modelValue":a[9]||(a[9]=l=>t.data.areas=l),label:n.$t("Areas"),"return-object":!1,items:t.data.areas,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Street Name"),class:"mx-4 flex-grow-1",modelValue:t.data.street_name,"onUpdate:modelValue":a[10]||(a[10]=l=>t.data.street_name=l)},null,8,["label","modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(s,{readonly:"",label:n.$t("Building Number"),class:"mx-4 flex-grow-1",modelValue:t.data.building_no,"onUpdate:modelValue":a[11]||(a[11]=l=>t.data.building_no=l)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}};const re={class:"text-h4 pt-3 pb-2"},N={__name:"[id]",setup(t){var k;const f=(k=JSON.parse(localStorage.getItem("userData")))==null?void 0:k.type;C().params.id;const r=V([]),n=V([]),a=V({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:0}),s=V("today"),l=h(()=>u=>s.value===u?"elevated":"tonal"),b=C().params.id,T=async()=>{await te(b).then(u=>{let{start:i,end:p,name_en:v,name_ar:y,phone_no:A,areas:L,city_id:j,street_name:R,building_no:z,email:E,password:H,est_time:O,delivery_fee:W,code:q,days:P,is_active:F}=u.data.data;a.value={start:i,end:p,name_en:v,name_ar:y,phone_no:A,areas:L,city_id:j,street_name:R,building_no:z,email:E,password:H,est_time:O,delivery_fee:W,code:q,is_active:F},a.value.working_days=P.map(w=>w.id),a.value.email=u.data.data.user.email,oe().then(({data:w,meta:ue})=>{r.value=w.data})})},I=()=>{le().then(({data:u,meta:i})=>{n.value=u.data})};return D(()=>{f==="admin"&&(T(),I())}),(u,i)=>{const p=de,v=ne;return $(),_(c,{class:"mt-4 px-4",justify:"space-around"},{default:o(()=>[e(d,{class:"pt-0"},{default:o(()=>[e(p,{data:m(a),cities:u.cities},null,8,["data","cities"]),e(c,{class:"gap-5 pt-16 pl-3 pb-0"},{default:o(()=>[e(x,{variant:m(l)("today"),onClick:i[0]||(i[0]=y=>s.value="today")},{default:o(()=>[g("Today")]),_:1},8,["variant"]),e(x,{variant:m(l)("yesterday"),onClick:i[1]||(i[1]=y=>s.value="yesterday")},{default:o(()=>[g("Yesterday")]),_:1},8,["variant"]),e(x,{variant:m(l)("custom"),onClick:i[2]||(i[2]=y=>s.value="custom")},{default:o(()=>[g("Custom")]),_:1},8,["variant"])]),_:1}),e(d,{class:"px-5 rounded mt-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[S("p",re,B(u.$t("Branches Log")),1),e(v,{items:m(n)},null,8,["items"])]),_:1})]),_:1})]),_:1})}}};typeof U=="function"&&U(N);const De=G(N,[["__scopeId","data-v-ef84b4de"]]);export{De as default};
