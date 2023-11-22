import{_ as Z}from"./AppDateTimePicker-b3461cc9.js";import{_ as K}from"./DialogCloseBtn-daa37d39.js";import{C as Q,p as Y,a as ee,b as te,L as ae,c as le,P as oe,d as se,e as ne,m as H}from"./stats-67c2d57e.js";import{d as re,h as L,D as ie,l as m,O as ue,R as de,o as j,c as ce,q as t,w as s,I as V,aX as $,s as r,G as S,az as I,H as P,y,U as k,n as D,t as pe,z as R,b as me,W as fe,aZ as E,a6 as ve}from"./index-ac936590.js";import{m as N}from"./stats-eff1c5d8.js";import{m as U,a as z,b as W,c as A}from"./stats-1a87dcd6.js";import{V as he}from"./VDialog-3de4470d.js";import{V as M}from"./VSpacer-e5859e48.js";import{V as ye}from"./VSelect-c9139207.js";import"./VOverlay-1fae6a8e.js";import"./lazy-aa82fd8a.js";import"./dialog-transition-6705f530.js";import"./VList-5152a632.js";import"./ssrBoot-79ca1775.js";import"./VDivider-3c3519ef.js";import"./VMenu-e1413c8a.js";import"./VCheckboxBtn-7562a87f.js";import"./VSelectionControl-11f51824.js";import"./VChip-cbd976a1.js";Q.register(Y,ee,te,ae,le,oe,se);const ge=re({name:"LineChart",props:{chartId:{type:String,default:"line-chart"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},chartData:{type:Object,default:()=>({})},chartOptions:{type:Object,default:()=>({})}},setup(f){return()=>L(L(ne),{chartId:f.chartId,width:f.width,height:f.height,cssClasses:f.cssClasses,styles:f.styles,plugins:f.plugins,options:f.chartOptions,data:f.chartData})}}),be={class:"text-h4 ps-3"},$e={class:"text-h4 mt-5 font-weight-bold text-uppsercase"},we={class:"text-h4 mt-5 font-weight-bold text-uppsercase"},xe={class:"text-h4 mt-5 font-weight-bold text-uppsercase"},Ce={__name:"index",setup(f){var T;const w=ie().t,g=m(!1),v=m(null),h=m(null),n=(T=JSON.parse(localStorage.getItem("userData")))==null?void 0:T.type,x=JSON.parse(localStorage.getItem("userData")),d=m("today"),F=m("today"),i=m(!1),B=m({export:!1}),J=ue(()=>[{title:w("Custom"),value:"custom"},{title:w("This Month"),value:"month"},{title:w("This Week"),value:"week"},{title:w("Today"),value:"today"}]),u=m({orders:"",product:"",sales:""}),c=l=>{_.value.labels=l.plot.map(e=>e.date),_.value.datasets[0].data=l.plot.map(e=>e.sales),_.value.datasets[1].data=l.plot.map(e=>e.orders),O.value+=1},C=async l=>{if(i.value=!0,l===!0){g.value=!1;let e=v.value,o=h.value;n=="admin"?await N(`${e!==null?"&from="+e:""}${o!==null?"&to="+o:""}`).then(({data:a})=>{u.value=a,c(a)}).finally(()=>{i.value=!1}):n=="restaurant"?await H(`branch=${x.branch_id}${e!==null?"&from="+e:""}${o!==null?"&to="+o:""}`).then(({data:a})=>{u.value=a,c(a)}).finally(()=>{i.value=!1}):n=="operation"?await U(`${e!==null?"&from="+e:""}${o!==null?"&to="+o:""}`).then(({data:a})=>{u.value=a,c(a)}).finally(()=>{i.value=!1}):n=="logistic"?await z(`${e!==null?"&from="+e:""}${o!==null?"&to="+o:""}`).then(({data:a})=>{u.value=a,c(a)}).finally(()=>{i.value=!1}):n=="finance"?await W(`${e!==null?"&from="+e:""}${o!==null?"&to="+o:""}`).then(({data:a})=>{u.value=a,c(a)}).finally(()=>{i.value=!1}):n=="agent"&&await A(`${e!==null?"&from="+e:""}${o!==null?"&to="+o:""}`).then(({data:a})=>{u.value=a,c(a)}).finally(()=>{i.value=!1})}else n=="admin"?await N(d.value).then(({data:e})=>{u.value=e,c(e)}).finally(()=>{i.value=!1}):n=="restaurant"?await H(`${d.value}&branch=${x.branch_id}`).then(({data:e})=>{u.value=e,c(e)}).finally(()=>{i.value=!1}):n=="operation"?await U(`${d.value}`).then(({data:e})=>{u.value=e,c(e)}).finally(()=>{i.value=!1}):n=="logistic"?await z(`${d.value}`).then(({data:e})=>{u.value=e,c(e)}).finally(()=>{i.value=!1}):n=="finance"?await W(`${d.value}`).then(({data:e})=>{u.value=e,c(e)}).finally(()=>{i.value=!1}):n=="agent"&&await A(`${d.value}`).then(({data:e})=>{u.value=e,c(e)}).finally(()=>{i.value=!1});F.value=d.value},O=m(0),_=m({labels:[],datasets:[{fill:!0,tension:.5,pointRadius:4,label:"Sales",pointHoverRadius:5,pointStyle:"circle",borderColor:"#ffcf5c",backgroundColor:"#ffcf5c",pointHoverBorderWidth:5,pointHoverBorderColor:"white",pointBorderColor:"transparent",pointHoverBackgroundColor:"#ffcf5c",data:[]},{fill:!0,tension:.5,label:"Orders",pointRadius:4,pointHoverRadius:5,pointStyle:"circle",borderColor:"#4169e1",backgroundColor:"#4169e1",pointHoverBorderWidth:15,pointHoverBorderColor:"white",pointBorderColor:"transparent",pointHoverBackgroundColor:"#4169e1",data:[]}]}),q=()=>{g.value=!1,d.value="today",v.value=m(null),h.value=m(null),C(!1)},G=()=>{setTimeout(()=>{d.value=="custom"?g.value=!0:C(!1)},100)},X=async()=>{let l=v.value,e=h.value;B.value.export=!0;try{await ve.get(`${n!=="admin"?n:""}/stats/product?${d.value}${l!==null?"&from="+l:""}${e!==null?"&to="+e:""}&export${n=="restaurant"?"&branch="+x.branch_id:""}`,{responseType:"arraybuffer"}).then(o=>{const a=new Blob([o.data],{type:"application/vnd.ms-excel"}),p=window.URL.createObjectURL(a),b=document.createElement("a");b.href=p,b.setAttribute("download",`sales-report-${d.value}${n=="restaurant"?" - "+x.name:""}.xlsx`),document.body.appendChild(b),b.click(),document.body.removeChild(b)})}catch(o){console.log(o)}finally{B.value.export=!1}};return de(()=>{C()}),(l,e)=>{const o=K,a=Z;return j(),ce("div",null,[t(he,{modelValue:r(g),"onUpdate:modelValue":e[4]||(e[4]=p=>S(g)?g.value=p:null),persistent:"",class:"v-dialog-sm"},{default:s(()=>[t(o,{onClick:e[0]||(e[0]=p=>q())}),t(V,{title:l.$t("Pick a custom Date")},{default:s(()=>[t($,{class:"d-flex"},{default:s(()=>[t(a,{class:"me-1",placeholder:l.$t("From"),"prepend-inner-icon":"tabler-calendar",modelValue:r(v),"onUpdate:modelValue":e[1]||(e[1]=p=>S(v)?v.value=p:null)},null,8,["placeholder","modelValue"]),t(a,{class:"ms-1",placeholder:l.$t("To"),"prepend-inner-icon":"tabler-calendar",modelValue:r(h),"onUpdate:modelValue":e[2]||(e[2]=p=>S(h)?h.value=p:null)},null,8,["placeholder","modelValue"])]),_:1}),t($,{class:"d-flex justify-end gap-3 flex-wrap"},{default:s(()=>[t(I,{onClick:e[3]||(e[3]=p=>C(!0)),loading:r(i),disabled:!r(v)&&!r(h)},{default:s(()=>[P(y(l.$t("Pick")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),t(fe,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-10"},{default:s(()=>[t(k,{class:"mx-0 my-0 pb-0 px-0 pt-3"},{default:s(()=>[D("p",be,y(l.$t("Sales Rate")),1),t(M),t(I,{"prepend-icon":"tabler-upload",color:"success",class:"mr-3",onClick:X,loading:r(B).export},{default:s(()=>[P(y(l.$t("Export Excel")),1)]),_:1},8,["loading"])]),_:1}),t(k,{class:"mx-0 py-0 px-4 py-5 mt-1"},{default:s(()=>[t(ye,{items:r(J),"item-value":"value","item-title":"title",modelValue:r(d),"onUpdate:modelValue":e[5]||(e[5]=p=>S(d)?d.value=p:null),label:l.$t("Select a period of time"),"prepend-inner-icon":"tabler-clock"},null,8,["items","modelValue","label"]),t(I,{class:"ms-2",onClick:e[6]||(e[6]=p=>G()),loading:r(i)},{default:s(()=>[P(y(l.$t("Search")),1)]),_:1},8,["loading"]),t(M)]),_:1}),t(k,{class:pe(["mx-0 my-0 px-4 mt-5",{"flex-nowrap":!l.$vuetify.display.sm}]),align:"center",justify:l.$vuetify.display.sm?"center":"space-between"},{default:s(()=>[t(V,{width:"300","min-width":"210",height:"260",class:"mx-0 mb-0 mt-2 px-0 py-5",color:"primary",variant:"tonal"},{default:s(()=>[t($,{class:"text-center"},{default:s(()=>[t(R,{icon:"tabler-shopping-cart",size:100}),D("p",$e,y(r(u).orders||"--"),1)]),_:1})]),_:1}),t(V,{width:"300","min-width":"210",height:"260",class:"mb-0 px-0 mt-2 py-5 mx-2",color:"primary",variant:"tonal"},{default:s(()=>[t($,{class:"text-center"},{default:s(()=>[t(R,{icon:"tabler-currency-dollar",size:100}),D("p",we,y(r(u).sales||0),1)]),_:1})]),_:1}),t(V,{width:"300","min-width":"210",height:"260",class:"mx-0 mb-0 px-0 py-5 mt-2",color:"primary",variant:"tonal"},{default:s(()=>[t($,{class:"text-center"},{default:s(()=>[t(R,{icon:"tabler-medal",size:100}),D("p",xe,y(r(u).product||"--"),1)]),_:1})]),_:1})]),_:1},8,["class","justify"]),t(k,{class:"mx-0 my-0 px-4 mt-5 position-relative rounded-lg"},{default:s(()=>[(j(),me(r(ge),{height:200,"chart-data":r(_),key:r(O)},null,8,["chart-data"]))]),_:1})]),_:1})])}}};typeof E=="function"&&E(Ce);export{Ce as default};
