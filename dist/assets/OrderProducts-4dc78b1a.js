import{C as d,O as p,r as y,o as a,b as s,w as t,q as n,z as l,c as g,y as k,A as c,s as _}from"./index-581c2083.js";import{V as m}from"./VDataTable-06e6a8ff.js";const w={key:0,class:"badge position-absolute bg-error"},b={__name:"OrderProducts",props:{imageError:{type:Boolean,default:!0}},setup(f){const u=p(()=>[{title:"Product Name",sortable:!1,align:"center",key:"name_en"},{title:"Quantity",sortable:!1,align:"center",key:"quantity"},{title:"Price",sortable:!1,align:"center",key:"price"},{title:"Total",sortable:!1,align:"center",key:"total"},{title:"Actions",sortable:!1,align:"center",key:"actions"}]);return(o,C)=>{const r=y("IconBtn");return a(),s(_(m),{headers:_(u),class:"pb-5 mt-8"},{"item.actions":t(({item:e})=>[e.raw.has_image==1?(a(),s(r,{key:0,class:"position-relative"},{default:t(()=>[n(l,{icon:"tabler-photo-plus",onClick:i=>o.$emit("add-image",e.raw)},null,8,["onClick"]),e.raw.quantity!==e.raw.images&&e.raw.quantity>=e.raw.images&&e.raw.quantity-e.raw.images!==0?(a(),g("span",w,k(e.raw.quantity-e.raw.images),1)):c("",!0)]),_:2},1024)):c("",!0),e.raw.has_note==1?(a(),s(r,{key:1},{default:t(()=>[n(l,{icon:"tabler-clipboard-text",onClick:i=>o.$emit("add-note",e.raw)},null,8,["onClick"])]),_:2},1024)):c("",!0),n(r,null,{default:t(()=>[n(l,{icon:"mdi-delete-outline",onClick:i=>o.$emit("delete",e.raw)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["headers"])}}},q=d(b,[["__scopeId","data-v-159c033e"]]);export{q as _};