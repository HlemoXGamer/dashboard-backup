import{C as b,O as h,r as v,o as a,b as l,w as t,n as C,c as f,q as o,z as c,A as n,y as B,s as k}from"./index-5994cda1.js";import{V}from"./VDataTable-1bbe7e7f.js";const $={class:"d-flex flex-wrap justify-center"},q={key:0,style:{width:"fit-content"}},x={key:0,class:"badge position-absolute bg-error"},P={__name:"OrderProducts",props:{imageError:{type:Boolean,default:!0},isPreValid:{type:Boolean,default:!1}},setup(w){const g=h(()=>[{title:"Product Name",sortable:!1,align:"center",key:"name_en"},{title:"Quantity",sortable:!1,align:"center",key:"quantity"},{title:"Price",sortable:!1,align:"center",key:"price"},{title:"Total",sortable:!1,align:"center",key:"total"},{title:"Actions",sortable:!1,align:"center",key:"actions"}]);return(s,I)=>{const r=v("IconBtn");return a(),l(k(V),{headers:k(g),class:"pb-5 mt-8"},{"item.actions":t(({item:e})=>{var i,_,u,p,y;return[C("div",$,[((i=e==null?void 0:e.raw)==null?void 0:i.is_pre)===1&&w.isPreValid?(a(),f("div",q,[(u=(_=e==null?void 0:e.raw)==null?void 0:_.extras)!=null&&u.length||(y=(p=e==null?void 0:e.raw)==null?void 0:p.flavors)!=null&&y.length?(a(),l(r,{key:0,class:"position-relative",onClick:d=>s.$emit("add-extra-flavors",e.raw)},{default:t(()=>[o(c,{icon:"tabler-candy"})]),_:2},1032,["onClick"])):n("",!0)])):n("",!0),e.raw.has_image==1?(a(),l(r,{key:1,class:"position-relative",onClick:d=>s.$emit("add-image",e.raw)},{default:t(()=>[o(c,{icon:"tabler-photo-plus"}),e.raw.quantity!==e.raw.images&&e.raw.quantity>=e.raw.images&&e.raw.quantity-e.raw.images!==0?(a(),f("span",x,B(e.raw.quantity-e.raw.images),1)):n("",!0)]),_:2},1032,["onClick"])):n("",!0),e.raw.has_note==1?(a(),l(r,{key:2,onClick:d=>s.$emit("add-note",e.raw)},{default:t(()=>[o(c,{icon:"tabler-clipboard-text"})]),_:2},1032,["onClick"])):n("",!0),o(r,null,{default:t(()=>[o(c,{icon:"mdi-delete-outline",onClick:d=>s.$emit("delete",e.raw)},null,8,["onClick"])]),_:2},1024)])]}),_:1},8,["headers"])}}},A=b(P,[["__scopeId","data-v-d6d1e52d"]]);export{A as _};