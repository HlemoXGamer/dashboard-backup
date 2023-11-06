import{l as i,aV as y,D as b,O as k,r as w,o as h,b as g,w as o,q as t,s as l,z as x,I as V,R as C,a2 as v,n as $,y as I,a1 as d,G as B,aZ as _,a_ as T}from"./index-358c466b.js";import{V as U}from"./VDataTable-bbf485fa.js";import{g as D}from"./users-3d119303.js";import"./VCheckboxBtn-9bbd9eb4.js";import"./VSelectionControl-32ddc2e6.js";import"./VSelect-5e4f7ae5.js";import"./VList-8b7c6abf.js";import"./ssrBoot-404c9b1f.js";import"./VDivider-a7998058.js";import"./dialog-transition-d456e6da.js";import"./VMenu-317b780d.js";import"./VOverlay-2dca64b1.js";import"./lazy-0a540379.js";import"./VChip-01fa3c4b.js";import"./filter-4c18135b.js";import"./VTable-70707c6b.js";const L={__name:"UsersTable",props:{users:{type:Array,default:[]},search:{type:String,default:""},loading:{type:Boolean,default:!1}},setup(c){i([]),i(!1),y();const e=b().t,r=k(()=>[{title:e("Name"),key:"name"},{title:e("Email"),key:"email"},{title:e("Phone Number"),key:"phone"},{title:e("Created Date"),key:"created_at"},{title:e("Actions"),sortable:!1,align:"center",key:"actions"}]),p=(a,s,n,m)=>n.raw.name.toLowerCase().includes(s.toLowerCase())?n.raw.name.toLowerCase().includes(s.toLowerCase()):!1;return(a,s)=>{const n=w("IconBtn");return h(),g(V,{elevation:"0",rounded:"0",class:"px-0 mb-0 pb-5 mt-10 pt-2",loading:c.loading},{default:o(()=>[t(l(U),{items:c.users,headers:l(r),search:c.search,"items-per-page":15,"custom-filter":p},{"item.actions":o(({item:m})=>[t(n,{onClick:f=>a.$router.push(`users/edit/${m.raw.id}`)},{default:o(()=>[t(x,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"])]),_:1},8,["items","headers","search"])]),_:1},8,["loading"])}}},N={class:"text-h4 pt-3 pb-2 px-3"},j={__name:"index",setup(c){const u=i(!1),e=i([]),r=i(""),p=()=>{u.value=!0,D().then(({data:a,meta:s})=>{e.value=a.data}).finally(()=>{u.value=!1})};return C(()=>{p()}),(a,s)=>{const n=T,m=L;return h(),g(d,{class:"mt-4 px-4"},{default:o(()=>[t(v,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:o(()=>[$("p",N,I(a.$t("Users")),1),t(d,{class:"px-7 mt-3",align:"center",justify:"start"},{default:o(()=>[t(d,{align:"center",justify:"center","justify-lg":"start"},{default:o(()=>[t(n,{modelValue:l(r),"onUpdate:modelValue":s[0]||(s[0]=f=>B(r)?r.value=f:null),placeholder:a.$t("Search for a User"),class:"mx-2",style:{width:"300px","max-width":"300px"}},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),t(m,{loading:l(u),users:l(e),search:l(r)},null,8,["loading","users","search"])]),_:1})]),_:1})}}};typeof _=="function"&&_(j);export{j as default};
