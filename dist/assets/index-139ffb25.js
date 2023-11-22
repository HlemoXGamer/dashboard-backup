import{_ as U}from"./DialogCloseBtn-35cd036e.js";import{r as j,g as M}from"./deliveries-70ea7bb7.js";import{r as q,g as E}from"./deliveries-66f7db10.js";import{D as G,O,l as p,aV as H,r as P,o as D,c as W,q as e,w as a,s as t,I as R,aX as z,H as w,az as $,G as A,b7 as X,t as K,y as x,n as J,z as T,F as Q,R as Y,b as I,W as Z,U as N,A as F,a_ as ee}from"./index-5f1e036d.js";import{V as ae}from"./VDialog-c2a8b0a4.js";import{V as te}from"./VDataTable-abff0085.js";import{V as le}from"./VChip-c99b15f1.js";import{_ as se}from"./AppCombobox-f5bccaf1.js";import{a as oe}from"./branches-a15c6e52.js";import{g as re}from"./deliveries-de63bbd8.js";import"./VOverlay-315386a7.js";import"./lazy-9d6f5b63.js";import"./dialog-transition-c18f9302.js";import"./VCheckboxBtn-0b3e4e8e.js";import"./VSelectionControl-82ad58b5.js";import"./VSelect-38820d74.js";import"./VList-99b9fa4c.js";import"./ssrBoot-dcc7d968.js";import"./VDivider-ca899a5a.js";import"./VMenu-9df5e73f.js";import"./filter-4e25312c.js";import"./VTable-0f962fff.js";import"./VCombobox-2917f1fb.js";const ne={class:"d-flex gap-1"},ie={__name:"DeliveriesTable",props:{deliveries:{type:Array,default:[]},search:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(k){var y;const i=k,u=(y=JSON.parse(localStorage.getItem("userData")))==null?void 0:y.type,f=G(),o=f.t,b=O(()=>{if(f.locale.value==="en")return"branch.name_en";if(f.locale.value==="ar")return"branch.name_ar"}),_=p([]),m=p(!1),C=H(),c=p(!1),V=O(()=>[{title:o("Name"),key:"name",sortable:!1},u!=="restaurant"?{title:o("Branch"),key:b,sortable:!1}:"",{title:o("Phone Number"),key:"phone",sortable:!1},{title:o("Created At"),key:"created_at",sortable:!1},{title:o("Status"),key:"is_active",align:"center",sortable:!1},{title:o("Actions"),sortable:!1,key:"actions"}]),l=d=>{if(parseInt(d)!==0)return{color:"success",text:o("Active")};if(parseInt(d)===0)return{color:"secondary",text:o("Disabled")}};let r={};const h=d=>{r=d,_.value=JSON.stringify(d),_.value=JSON.parse(_.value),c.value=!0},B=async()=>{m.value=!0;try{u=="admin"?await j(_.value):u=="logistic"&&await q(_.value),i.deliveries.splice(i.deliveries.indexOf(r),1),C.success("Delivery man deleted successfully"),m.value=!1,c.value=!1}catch(d){C.error(d.response.data.message)}},L=(d,n,v,S)=>{n=n.split(",");const s=n[0],g=n[1];return v.raw.name.toLowerCase().includes(s.toLowerCase())&&(g=="undefined"||g=="null")?v.raw.name.toLowerCase().includes(s.toLowerCase()):v.raw.name.toLowerCase().includes(s.toLowerCase())&&g!=="undefined"&&g!=="null"&&v.raw.branch.name_en.toLowerCase().includes(g.toLowerCase())?v.raw.name.toLowerCase().includes(s.toLowerCase())&&v.raw.branch.name_en.toLowerCase().includes(g.toLowerCase()):!1};return(d,n)=>{const v=U,S=P("IconBtn");return D(),W(Q,null,[e(ae,{modelValue:t(c),"onUpdate:modelValue":n[3]||(n[3]=s=>A(c)?c.value=s:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[e(v,{onClick:n[0]||(n[0]=s=>c.value=!t(c))}),e(R,{title:"Delete Delivery man"},{default:a(()=>[e(z,null,{default:a(()=>[w(" Are you sure that you want to delete this Delivery man? ")]),_:1}),e(z,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e($,{color:"secondary",variant:"tonal",onClick:n[1]||(n[1]=s=>c.value=!1),disabled:t(m)},{default:a(()=>[w(" Cancel ")]),_:1},8,["disabled"]),e($,{onClick:n[2]||(n[2]=s=>B()),loading:t(m)},{default:a(()=>[w(" Delete ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(R,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:k.loading},{default:a(()=>[e(t(te),{items:i.deliveries,headers:t(V),search:i.search,"custom-filter":L,"items-per-page":15},X({"item.is_active":a(({item:s})=>[e(le,{color:l(s.raw.is_active).color,class:K([`text-${l(s.raw.is_active).color}`,"font-weight-medium"]),size:"small"},{default:a(()=>[w(x(l(s.raw.is_active).text),1)]),_:2},1032,["color","class"])]),_:2},[t(u)=="admin"||t(u)=="logistic"?{name:"item.actions",fn:a(({item:s})=>[J("div",ne,[e(S,{onClick:g=>d.$router.push(`deliveries/edit/${s.raw.id}`)},{default:a(()=>[e(T,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(S,null,{default:a(()=>[e(T,{icon:"mdi-delete-outline",onClick:g=>h(s.value)},null,8,["onClick"])]),_:2},1024)])]),key:"0"}:t(u)=="restaurant"?{name:"item.actions",fn:a(({item:s})=>[e($,{variant:"flat",to:`/deliveries/${s.raw.id}`},{default:a(()=>[w(x(d.$t("View Details")),1)]),_:2},1032,["to"])]),key:"1"}:void 0]),1032,["items","headers","search"])]),_:1},8,["loading"])],64)}}},de={class:"text-h4"},Ae={__name:"index",setup(k){var V;const i=(V=JSON.parse(localStorage.getItem("userData")))==null?void 0:V.type,u=p(!1),f=p([]),o=p(""),b=p([]),_=p([]),m=p(),C=()=>{oe().then(({data:l,meta:r})=>{b.value=l.data.map(h=>h.name_en),_.value=l.data})},c=async()=>{u.value=!0,i=="admin"?await M().then(({data:l,meta:r})=>{f.value=l.data}):i=="restaurant"?await re().then(({data:l,meta:r})=>{f.value=l.data}):i=="logistic"&&await E().then(({data:l,meta:r})=>{f.value=l.data}),u.value=!1};return Y(()=>{i=="admin"&&C(),c()}),(l,r)=>{const h=ee,B=se,L=ie;return D(),I(N,{class:"mt-4 px-4"},{default:a(()=>[e(Z,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:a(()=>[e(N,{class:"pt-5 pb-2 px-5",align:"center",justify:"space-between"},{default:a(()=>[J("p",de,x(l.$t("Deliveries")),1),t(i)=="admin"||t(i)=="logistic"?(D(),I($,{key:0,onClick:r[0]||(r[0]=y=>l.$router.push("deliveries/add/"))},{default:a(()=>[e(T,{start:"",icon:"tabler-plus"}),w(x(l.$t("Add Delivery")),1)]),_:1})):F("",!0)]),_:1}),e(N,{class:"px-7",align:"center",justify:"start"},{default:a(()=>[e(h,{modelValue:t(o),"onUpdate:modelValue":r[1]||(r[1]=y=>A(o)?o.value=y:null),placeholder:l.$t("Search for a Delivery"),class:"mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"]),t(i)=="admin"?(D(),I(B,{key:0,modelValue:t(m),"onUpdate:modelValue":r[2]||(r[2]=y=>A(m)?m.value=y:null),items:t(b),variant:"outlined",clearable:"",placeholder:l.$t("Branches"),class:"flex-grow-0 mx-2 my-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","items","placeholder"])):F("",!0)]),_:1}),e(L,{loading:t(u),deliveries:t(f),search:t(o)+","+t(m)},null,8,["loading","deliveries","search"])]),_:1})]),_:1})}}};export{Ae as default};
