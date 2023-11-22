import{_ as j}from"./DialogCloseBtn-e4a05e3b.js";import{r as z,g as L}from"./finances-782ac358.js";import{D as O,l as f,aV as R,O as J,r as U,o as D,c as q,q as e,w as a,s as r,I as w,aX as b,H as v,az as x,G as B,t as E,y as h,n as I,z as $,F as G,R as H,b as M,a2 as P,a1 as C,aZ as F,a_ as X}from"./index-c869d194.js";import{V as Z}from"./VDialog-fe8fab6f.js";import{V as K}from"./VDataTable-5f8f63bf.js";import{V as Q}from"./VChip-27e400a7.js";import"./VOverlay-5749ee97.js";import"./lazy-1ec28e08.js";import"./dialog-transition-cba1c577.js";import"./VCheckboxBtn-afc87216.js";import"./VSelectionControl-43a717d4.js";import"./VSelect-a0dad563.js";import"./VList-cd8262bf.js";import"./ssrBoot-655fc28d.js";import"./VDivider-9f6a7662.js";import"./VMenu-a34876aa.js";import"./filter-1ae2559c.js";import"./VTable-ec73e090.js";const W={class:"d-flex gap-1"},Y={__name:"FinancesTable",props:{finances:{type:Array,default:[]},search:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(m){const p=m,i=O().t,u=f([]),t=f(!1),c=R(),l=f(!1),y=J(()=>[{title:i("Name"),key:"name"},{title:i("Phone Number"),key:"phone"},{title:i("Created Date"),key:"created_at"},{title:i("Actions"),key:"actions"}]),d=o=>{if(parseInt(o)!==0)return{color:"success",text:"Active"};if(parseInt(o)===0)return{color:"secondary",text:"Disabled"}},T=(o,s,_,V)=>_.raw.name.toLowerCase().includes(s.toLowerCase())?_.raw.name.toLowerCase().includes(s.toLowerCase()):!1;let k={};const N=o=>{k=o,u.value=JSON.stringify(o),u.value=JSON.parse(u.value),l.value=!0},A=async()=>{t.value=!0;try{await z(u.value),p.finances.splice(p.finances.indexOf(k),1),c.success("Finance deleted successfully"),t.value=!1,l.value=!1}catch(o){c.error(o.response.data.message)}};return(o,s)=>{const _=j,V=U("IconBtn");return D(),q(G,null,[e(Z,{modelValue:r(l),"onUpdate:modelValue":s[3]||(s[3]=n=>B(l)?l.value=n:null),persistent:"",class:"v-dialog-sm"},{default:a(()=>[e(_,{onClick:s[0]||(s[0]=n=>l.value=!r(l))}),e(w,{title:"Delete Finance"},{default:a(()=>[e(b,null,{default:a(()=>[v(" Are you sure that you want to delete this Finance? ")]),_:1}),e(b,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(x,{color:"secondary",variant:"tonal",onClick:s[1]||(s[1]=n=>l.value=!1),disabled:r(t)},{default:a(()=>[v(" Cancel ")]),_:1},8,["disabled"]),e(x,{onClick:s[2]||(s[2]=n=>A()),loading:r(t)},{default:a(()=>[v(" Delete ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(w,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:m.loading},{default:a(()=>[e(r(K),{items:m.finances,headers:r(y),search:m.search,"items-per-page":15,"custom-filter":T},{"item.status":a(({item:n})=>[e(Q,{color:d(n.status).color,class:E([`text-${d(n.status).color}`,"font-weight-medium"]),size:"small"},{default:a(()=>[v(h(d(n.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":a(({item:n})=>[I("div",W,[e(V,{onClick:S=>o.$router.push(`finances/edit/${n.raw.id}`)},{default:a(()=>[e($,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(V,null,{default:a(()=>[e($,{icon:"mdi-delete-outline",onClick:S=>N(n.value)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["items","headers","search"])]),_:1},8,["loading"])],64)}}},ee={class:"text-h4 pt-3 pb-2 px-3"},ae={__name:"index",setup(m){const p=f([]),g=f(""),i=f(!1),u=()=>{i.value=!0,L().then(({data:t,meta:c})=>{p.value=t.data}).finally(()=>{i.value=!1})};return H(()=>{u()}),(t,c)=>{const l=X,y=Y;return D(),M(C,{class:"mt-4 px-4"},{default:a(()=>[e(P,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:a(()=>[I("p",ee,h(t.$t("Finances")),1),e(C,{class:"px-7",align:"center",justify:"space-between"},{default:a(()=>[e(C,{align:"center",justify:"center","justify-lg":"start"},{default:a(()=>[e(l,{modelValue:r(g),"onUpdate:modelValue":c[0]||(c[0]=d=>B(g)?g.value=d:null),placeholder:t.$t("Search for a Finance"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])]),_:1}),e(x,{onClick:c[1]||(c[1]=d=>t.$router.push("finances/add/"))},{default:a(()=>[e($,{start:"",icon:"tabler-plus"}),v(h(t.$t("Add Finance")),1)]),_:1})]),_:1}),e(y,{loading:r(i),finances:r(p),search:r(g)},null,8,["loading","finances","search"])]),_:1})]),_:1})}}};typeof F=="function"&&F(ae);export{ae as default};
