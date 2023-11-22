import{_ as F}from"./AppDateTimePicker-b3461cc9.js";import{_ as L}from"./DialogCloseBtn-daa37d39.js";import{g as U}from"./stats-eff1c5d8.js";import{l as n,D as M,O as I,R as N,o as V,c as _,q as t,w as s,I as z,aX as j,s as o,G as x,az as k,H as w,y as v,U as $,n as y,F as q,a as G,aY as H,W as X,aZ as B,a6 as Y}from"./index-ac936590.js";import{V as Z}from"./VDialog-3de4470d.js";import{V as E}from"./VSpacer-e5859e48.js";import{V as J}from"./VSelect-c9139207.js";import{V as K}from"./VDataTable-d373769b.js";import"./VOverlay-1fae6a8e.js";import"./lazy-aa82fd8a.js";import"./dialog-transition-6705f530.js";import"./VList-5152a632.js";import"./ssrBoot-79ca1775.js";import"./VDivider-3c3519ef.js";import"./VMenu-e1413c8a.js";import"./VCheckboxBtn-7562a87f.js";import"./VSelectionControl-11f51824.js";import"./VChip-cbd976a1.js";import"./filter-d266787d.js";import"./VTable-6a45863e.js";const Q={class:"text-h4 ps-3"},ee={style:{"min-height":"600px",border:"5px solid rgb(var(--v-theme-primary))"},class:"rounded w-100 px-5 py-5"},te={class:"text-h5 text-center px-0 py-0 mx-0 my-3 font-weight-bold text-uppercase"},ae={class:"text-white py-0 mx-0 my-0 px-0 text-center font-weight-bold"},le={class:"text-h4 mt-12 ps-1"},oe={__name:"index",setup(se){const g=n(!1),m=n(null),p=n(null),u=n("today"),d=n({export:!1,search:!1}),f=M().t,O=I(()=>[{title:f("Custom"),value:"custom"},{title:f("This Month"),value:"month"},{title:f("This Week"),value:"week"},{title:f("Today"),value:"today"}]),P=I(()=>[{title:f("Status"),key:"stats"},{title:f("Clicks"),key:"value"},{title:f("Average Time"),key:"avg_time"}]),h=n([]),S=n([]),C=n({page_view:{value:"Page View",color:"#ff5800"},category_view:{value:"Category View",color:"#f7ab00"},product_view:{value:"Product View",color:"#009912"},add_to_cart:{value:"Add To Cart",color:"#006499"},address_details:{value:"Address Details",color:"#009989"},purchase:{value:"Purchase",color:"#000099"}}),b=a=>{if(d.value.search=!0,a===!0){g.value=!1;let e=m.value,r=p.value;U(`${e!==null?"&from="+e:""}${r!==null?"&to="+r:""}`).then(({data:i})=>{h.value=i,D(i)}).finally(()=>{d.value.search=!1})}else U(`${u.value}`).then(({data:e})=>{h.value=e,D(e)}).finally(()=>{d.value.search=!1})},W=()=>{g.value=!1,u.value="today",m.value=n(),p.value=n(),b(!1)},A=()=>{setTimeout(()=>{u.value=="custom"?g.value=!0:b(!1)},100)},R=async()=>{let a=m.value,e=p.value;d.value.export=!0;try{await Y.get(`/google-analytics/?${u.value}${a!==null?"&from="+a:""}${e!==null?"&to="+e:""}&export`,{responseType:"arraybuffer"}).then(r=>{const i=new Blob([r.data],{type:"application/vnd.ms-excel"}),l=window.URL.createObjectURL(i),c=document.createElement("a");c.href=l,c.setAttribute("download",`statistics-analytics-report-${u.value}.xlsx`),document.body.appendChild(c),c.click(),document.body.removeChild(c)})}catch(r){console.log(r)}finally{d.value.export=!1}},D=a=>{let e=[];Object.entries(a).forEach(([r,i])=>{e.push({stats:r.split("_").join(" ").toUpperCase(),value:i})}),S.value=e};return N(()=>{b()}),(a,e)=>{const r=L,i=F;return V(),_("div",null,[t(Z,{modelValue:o(g),"onUpdate:modelValue":e[4]||(e[4]=l=>x(g)?g.value=l:null),persistent:"",class:"v-dialog-sm"},{default:s(()=>[t(r,{onClick:e[0]||(e[0]=l=>W())}),t(z,{title:"Pick a custom Date"},{default:s(()=>[t(j,{class:"d-flex"},{default:s(()=>[t(i,{class:"me-1",placeholder:a.$t("From"),"prepend-inner-icon":"tabler-calendar",modelValue:o(m),"onUpdate:modelValue":e[1]||(e[1]=l=>x(m)?m.value=l:null),config:{maxDate:new Date().toISOString()}},null,8,["placeholder","modelValue","config"]),t(i,{class:"ms-1",placeholder:a.$t("To"),"prepend-inner-icon":"tabler-calendar",modelValue:o(p),"onUpdate:modelValue":e[2]||(e[2]=l=>x(p)?p.value=l:null),config:{minDate:new Date().toISOString()}},null,8,["placeholder","modelValue","config"])]),_:1}),t(j,{class:"d-flex justify-end gap-3 flex-wrap"},{default:s(()=>[t(k,{onClick:e[3]||(e[3]=l=>b(!0)),loading:o(d).search,disabled:!o(m)&&!o(p)},{default:s(()=>[w(v(a.$t("Pick")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(X,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-10"},{default:s(()=>[t($,{class:"mx-0 my-0 pb-0 px-0 pt-3"},{default:s(()=>[y("p",Q,v(a.$t("Website State")),1),t(E),t(k,{"prepend-icon":"tabler-upload",loading:o(d).export,color:"success",class:"mr-3",onClick:R},{default:s(()=>[w(v(a.$t("Export Excel")),1)]),_:1},8,["loading"])]),_:1}),t($,{class:"mx-0 py-0 px-4 py-5 mt-1"},{default:s(()=>[t(J,{items:o(O),"item-value":"value","item-title":"title","model-value":"today",label:a.$t("Select a period of time"),"prepend-inner-icon":"tabler-clock",modelValue:o(u),"onUpdate:modelValue":e[5]||(e[5]=l=>x(u)?u.value=l:null)},null,8,["items","label","modelValue"]),t(k,{class:"ms-2",loading:o(d).search,onClick:e[6]||(e[6]=l=>A())},{default:s(()=>[w(v(a.$t("Search")),1)]),_:1},8,["loading"]),t(E)]),_:1}),t($,{class:"mx-0 my-0 px-4 mt-5"},{default:s(()=>[y("div",ee,[(V(!0),_(q,null,G(o(h),(l,c)=>{var T;return V(),_("div",{key:a.i},[y("p",te,v(o(C)[c].value),1),y("div",{style:H({"background-color":(T=o(C)[c])==null?void 0:T.color,width:l>100?199:l+"%"}),class:"mt-0 mb-4 rounded-lg py-3 px-3 mx-auto d-flex align-center justify-center"},[y("p",ae,v(l),1)],4)])}),128))]),y("p",le,v(a.$t("Website State")),1),t(o(K),{headers:o(P),items:o(S),class:"mt-1"},null,8,["headers","items"])]),_:1})]),_:1})])}}};typeof B=="function"&&B(oe);export{oe as default};
