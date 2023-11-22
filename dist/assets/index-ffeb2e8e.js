import{_ as ee}from"./DialogCloseBtn-35cd036e.js";import{r as te,g as le}from"./products-4a5f8c5d.js";import{r as ae,g as re}from"./products-6235db25.js";import{D as Q,O as G,l as d,aV as oe,r as se,o as C,c as Y,q as t,w as r,s as e,I as X,aX as Z,H as h,y as p,az as F,G as w,t as L,n as J,z as H,b as I,A as U,F as ne,R as ue,U as j,W,aZ as K,a6 as de,a_ as ie}from"./index-5f1e036d.js";import{V as ce}from"./VDialog-c2a8b0a4.js";import{V as me}from"./VDataTable-abff0085.js";import{V as pe}from"./VChip-c99b15f1.js";import{g as fe}from"./categories-32cfbed8.js";import{g as ge}from"./categories-708191be.js";import{V as ve,a as q}from"./VTabs-1f4911e2.js";import{V as ye}from"./VSpacer-2f9f9117.js";import{V as E,a as Ve}from"./VWindowItem-65421b32.js";import{V as z}from"./VCombobox-2917f1fb.js";import"./VOverlay-315386a7.js";import"./lazy-9d6f5b63.js";import"./dialog-transition-c18f9302.js";import"./VCheckboxBtn-0b3e4e8e.js";import"./VSelectionControl-82ad58b5.js";import"./VSelect-38820d74.js";import"./VList-99b9fa4c.js";import"./ssrBoot-dcc7d968.js";import"./VDivider-ca899a5a.js";import"./VMenu-9df5e73f.js";import"./filter-4e25312c.js";import"./VTable-0f962fff.js";const he={__name:"ProductsTable",props:{products:{type:Array,default:[]},searchTerm:{type:Object,default:{term:"",category:""}},loading:{type:Boolean,default:!1},closed:{type:Boolean,default:!1}},setup(D){var O;const b=D,y=Q(),c=y.t,$=G(()=>{if(y.locale.value==="en")return"name_en";if(y.locale.value==="ar")return"name_ar"}),R=(O=JSON.parse(localStorage.getItem("userData")))==null?void 0:O.type,P=d([]),m=d(!1),f=oe(),n=d(!1),x=G(()=>[{title:c("Product Code"),key:"code"},{title:c("Product Name"),key:$},{title:c("Price"),key:"price"},{title:c("Status"),key:"is_active"},{title:c("Created Date"),key:"created_at"},{title:c("Actions"),key:"actions",sortable:!1,align:"center"},{title:c("id"),key:"id",align:" d-none"}]),V=s=>{if(parseInt(s)!==0)return{color:"success",text:"Active"};if(parseInt(s)===0)return{color:"secondary",text:"Disabled"}};let k={};const T=s=>{console.log(s),k=s,P.value=JSON.stringify(s),P.value=JSON.parse(P.value),n.value=!0},N=async()=>{var s,u;m.value=!0;try{R=="admin"?await te(P.value.id):await ae(P.value.id),b.products.splice(b.products.indexOf(k),1),f.success("Product deleted successfully"),m.value=!1,n.value=!1}catch(g){f.error((u=(s=g==null?void 0:g.response)==null?void 0:s.data)==null?void 0:u.message)}},v=()=>{let s=b.products,u=b.searchTerm.category,g=b.searchTerm.term;return String(g).length>0&&g!==null&&(s=s.filter(S=>String(S.name_en).toLowerCase().includes(g.toLowerCase()))),String(u).length>0&&u!==null&&(s=s.filter(S=>u.some(i=>S.categories.map(A=>A.id).includes(i)))),s};return(s,u)=>{const g=ee,S=se("IconBtn");return C(),Y(ne,null,[t(ce,{modelValue:e(n),"onUpdate:modelValue":u[3]||(u[3]=i=>w(n)?n.value=i:null),persistent:"",class:"v-dialog-sm"},{default:r(()=>[t(g,{onClick:u[0]||(u[0]=i=>n.value=!e(n))}),t(X,{title:"Delete Product"},{default:r(()=>[t(Z,null,{default:r(()=>[h(p(s.$t("Are you sure that you want to delete this Product?")),1)]),_:1}),t(Z,{class:"d-flex justify-end gap-3 flex-wrap"},{default:r(()=>[t(F,{color:"secondary",variant:"tonal",onClick:u[1]||(u[1]=i=>n.value=!1),disabled:e(m)},{default:r(()=>[h(p(s.$t("Cancel")),1)]),_:1},8,["disabled"]),t(F,{onClick:u[2]||(u[2]=i=>N()),loading:e(m)},{default:r(()=>[h(p(s.$t("Delete")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(X,{elevation:"0",rounded:"0",class:L(["px-0 mb-0 pb-5 pt-2",{"mt-6":D.closed,"mt-10":!D.closed}]),loading:D.loading},{default:r(()=>[t(e(me),{items:v(),headers:e(x),"items-per-page":15},{"item.is_active":r(({item:i})=>[t(pe,{color:V(i.raw.is_active).color,class:L([`text-${V(i.raw.is_active).color}`,"font-weight-medium"]),size:"small"},{default:r(()=>[h(p(V(i.raw.is_active).text),1)]),_:2},1032,["color","class"])]),"item.actions":r(({item:i})=>[J("div",{class:L({"d-flex gap-1":!D.closed})},[t(S,{onClick:A=>s.$router.push(`/products/edit/${i.raw.id}`)},{default:r(()=>[t(H,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),D.closed?U("",!0):(C(),I(S,{key:0},{default:r(()=>[t(H,{icon:"mdi-delete-outline",onClick:A=>T(i.raw)},null,8,["onClick"])]),_:2},1024))],2)]),_:1},8,["items","headers"])]),_:1},8,["class","loading"])],64)}}},be={class:"text-h4 pt-3 pb-5 px-3"},xe={class:"text-h4 pt-3 pb-0 px-3"},ke={class:"text-h4 pt-3 pb-0 px-3"},we={__name:"index",setup(D){var M;const b=Q().t,y=d("products"),c=d([]),$=d([]),R=d([]),P=d([]),m=d([]),f=d(""),n=(M=JSON.parse(localStorage.getItem("userData")))==null?void 0:M.type,x=d(!1),V=d([]),k=d(""),T=d(!1),N=d(!1),v=d({searchTerm:"",selectedCategory:[]}),O=async()=>{T.value=!0,x.value=!0,n=="admin"?await le().then(({data:a,meta:l})=>{$.value=a.data}):n=="markter"&&await re().then(({data:a,meta:l})=>{$.value=a.data}),R.value=$.value.filter(a=>a.is_active===0),P.value=$.value.filter(a=>a.is_pre===1),x.value=!1,T.value=!1},s=()=>{n=="admin"?fe().then(({data:a,meta:l})=>{c.value=a.data}):n=="markter"&&ge().then(({data:a,meta:l})=>{c.value=a.data})},u=(a=!1)=>{let l={term:"",category:""};return a?(f.value!==""&&f.value!==null&&(l.term=f.value),m.value!==""&&m.value!==null&&(l.category=m.value)):(k.value!==""&&k.value!==null&&(l.term=k.value),V.value!==""&&V.value!==null&&(l.category=V.value)),l},g=()=>{let a={};return v.value.searchTerm!==""&&(a.name=v.value.searchTerm),v.value.selectedCategory.length>0&&(a.category=v.value.selectedCategory),{filters:a}},S=a=>{N.value=!0;const l=new FormData;Object.entries(a).forEach(([_,o])=>{l.append(_,o)});const B=new URLSearchParams(l).toString();x.value=!0,T.value=!0,de.get(`/products?${B}`).then(({data:_})=>{$.value=_.data,meta.value=_.meta}).finally(()=>{x.value=!1,T.value=!1})},i=G(()=>Object.keys(g().filters)),A=()=>{N.value=!1,v.value={searchTerm:"",selectedCategory:[]},O()};return ue(()=>{O(),s()}),(a,l)=>{const B=ie,_=he;return C(),Y("div",null,[t(j,{class:"mx-0 my-0"},{default:r(()=>[t(ve,{modelValue:e(y),"onUpdate:modelValue":l[0]||(l[0]=o=>w(y)?y.value=o:null),class:"mx-auto v-tabs-pill"},{default:r(()=>[t(q,{value:"products"},{default:r(()=>[h(p(a.$t("Products")),1)]),_:1}),t(q,{value:"closed_products"},{default:r(()=>[h(p(a.$t("Closed Products")),1)]),_:1}),e(n)==="admin"?(C(),I(q,{key:0,value:"pre_products"},{default:r(()=>[h(p(a.$t("Pre Products")),1)]),_:1})):U("",!0)]),_:1},8,["modelValue"]),t(ye)]),_:1}),t(Ve,{modelValue:e(y),"onUpdate:modelValue":l[11]||(l[11]=o=>w(y)?y.value=o:null)},{default:r(()=>[t(E,{value:"products"},{default:r(()=>[t(j,{class:"mt-4 px-4"},{default:r(()=>[t(W,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:r(()=>[t(j,{"no-gutters":"",align:"start",justify:"space-between"},{default:r(()=>[J("p",be,p(e(b)("Products")),1),t(F,{class:"mb-5 mt-3 me-3",onClick:l[1]||(l[1]=o=>a.$router.push("/products/add/"))},{default:r(()=>[t(H,{start:"",icon:"tabler-plus"}),h(p(a.$t("Add Product")),1)]),_:1})]),_:1}),t(j,{class:"px-7",align:"center",justify:"space-between"},{default:r(()=>[t(j,{align:"center",justify:"center","justify-lg":"start"},{default:r(()=>[e(n)=="markter"?(C(),I(B,{key:0,"prepend-inner-icon":"tabler-search",modelValue:e(k),"onUpdate:modelValue":l[2]||(l[2]=o=>w(k)?k.value=o:null),placeholder:a.$t("Search for a Product"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])):U("",!0),e(n)=="admin"?(C(),I(B,{key:1,"prepend-inner-icon":"tabler-search",modelValue:e(v).searchTerm,"onUpdate:modelValue":l[3]||(l[3]=o=>e(v).searchTerm=o),placeholder:a.$t("Search for a Product"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])):U("",!0),e(n)=="markter"?(C(),I(z,{key:2,"prepend-inner-icon":"tabler-bookmark",multiple:"",placeholder:a.$t("Select a Category"),modelValue:e(V),"onUpdate:modelValue":l[4]||(l[4]=o=>w(V)?V.value=o:null),class:"flex-grow-0 mx-2 mt-2 mt-lg-0 mt-md-0 mt-sm-0",items:e(c),"item-title":"name_en","item-value":"id",style:{width:"300px"},"return-object":!1},null,8,["placeholder","modelValue","items"])):U("",!0),e(n)=="admin"?(C(),I(z,{key:3,"prepend-inner-icon":"tabler-bookmark",multiple:"",placeholder:a.$t("Select a Category"),modelValue:e(v).selectedCategory,"onUpdate:modelValue":l[5]||(l[5]=o=>e(v).selectedCategory=o),class:"flex-grow-0 mx-2 mt-2 mt-lg-0 mt-md-0 mt-sm-0",items:e(c),"item-title":"name_en","item-value":"id",style:{width:"300px"},"return-object":!1},null,8,["placeholder","modelValue","items"])):U("",!0),e(n)=="admin"?(C(),I(F,{key:4,class:"mx-0 mt-0",variant:"tonal",color:"success","prepend-icon":"tabler-search",onClick:l[6]||(l[6]=o=>S(g().filters)),disabled:!e(i).length||e(T)},{default:r(()=>[h(p(a.$t("Search")),1)]),_:1},8,["disabled"])):U("",!0),t(F,{class:"mx-2",variant:"tonal",color:"warning","prepend-icon":"tabler-x",onClick:A,disabled:e(T)||!e(N)},{default:r(()=>[h(p(a.$t("Reset")),1)]),_:1},8,["disabled"])]),_:1})]),_:1}),t(_,{loading:e(x),products:e($),searchTerm:u()},null,8,["loading","products","searchTerm"])]),_:1})]),_:1})]),_:1}),t(E,{value:"closed_products"},{default:r(()=>[t(W,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded mt-4"},{default:r(()=>[J("p",xe,p(e(b)("Closed Products")),1),t(j,{align:"center",justify:"center","justify-lg":"start",class:"mx-0 my-0 px-0 py-0"},{default:r(()=>[t(B,{"prepend-inner-icon":"tabler-search",modelValue:e(f),"onUpdate:modelValue":l[7]||(l[7]=o=>w(f)?f.value=o:null),placeholder:a.$t("Search for a Product"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"]),t(z,{"prepend-inner-icon":"tabler-bookmark",multiple:"",placeholder:a.$t("Select a Category"),modelValue:e(m),"onUpdate:modelValue":l[8]||(l[8]=o=>w(m)?m.value=o:null),class:"flex-grow-0 mx-2 mt-2 mt-lg-0 mt-md-0 mt-sm-0",items:e(c),"item-title":"name_en","item-value":"id",style:{width:"300px"},"return-object":!1},null,8,["placeholder","modelValue","items"])]),_:1}),t(_,{closed:"",loading:e(x),products:e(R),searchTerm:u(!0)},null,8,["loading","products","searchTerm"])]),_:1})]),_:1}),t(E,{value:"pre_products"},{default:r(()=>[t(W,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded mt-4"},{default:r(()=>[J("p",ke,p(e(b)("Pre Products")),1),t(j,{align:"center",justify:"center","justify-lg":"start",class:"mx-0 my-0 px-0 py-0"},{default:r(()=>[t(B,{"prepend-inner-icon":"tabler-search",modelValue:e(f),"onUpdate:modelValue":l[9]||(l[9]=o=>w(f)?f.value=o:null),placeholder:a.$t("Search for a Product"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"]),t(z,{"prepend-inner-icon":"tabler-bookmark",multiple:"",placeholder:a.$t("Select a Category"),modelValue:e(m),"onUpdate:modelValue":l[10]||(l[10]=o=>w(m)?m.value=o:null),class:"flex-grow-0 mx-2 mt-2 mt-lg-0 mt-md-0 mt-sm-0",items:e(c),"item-title":"name_en","item-value":"id",style:{width:"300px"},"return-object":!1},null,8,["placeholder","modelValue","items"])]),_:1}),t(_,{closed:"",loading:e(x),products:e(P),searchTerm:u(!0)},null,8,["loading","products","searchTerm"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};typeof K=="function"&&K(we);export{we as default};
