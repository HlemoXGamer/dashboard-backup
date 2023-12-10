import{_ as ra}from"./AppDateTimePicker-8aeb56f6.js";import{_ as na}from"./DialogCloseBtn-9cfe71b9.js";import{h as D}from"./stats-734024f3.js";import{C as ua,p as oa,a as da,b as ma,B as ca,d as va,c as ia,f as pa,g as w}from"./stats-5d1d4742.js";import{h as L,i as j,j as E,k as W}from"./stats-137b61ab.js";import{d as ba,h as z,l as _,D as fa,O as ha,R as _a,o as T,c as ya,q as d,w as c,I as $a,aX as G,s as o,G as k,az as O,H as x,y,b as R,A as H,U as A,W as P,n as I,aZ as X,a6 as ga}from"./index-d2581156.js";import{V as Va}from"./VDialog-eee115d7.js";import{V as ka,a as Z}from"./VTabs-d6dc5f91.js";import{V as F}from"./VSpacer-0d4baf29.js";import{V as K,a as Ca}from"./VWindowItem-fd017b32.js";import{V as Q}from"./VSelect-801d8977.js";import{V as Y}from"./VDataTable-94bcafd9.js";import"./VOverlay-a01ea84e.js";import"./lazy-5e287f74.js";import"./dialog-transition-ed0dbcb2.js";import"./ssrBoot-91f799f7.js";import"./VList-3c9a1f65.js";import"./VDivider-72799677.js";import"./VMenu-5e1a829e.js";import"./VCheckboxBtn-68cb53d5.js";import"./VSelectionControl-2699808d.js";import"./VChip-2c42ae55.js";import"./filter-06ec5503.js";import"./VTable-25121804.js";ua.register(oa,da,ma,ca,va,ia);const aa=ba({name:"BarChart",props:{chartId:{type:String,default:"bar-chart"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},chartData:{type:Object,default:()=>({})},chartOptions:{type:Object,default:()=>({})}},setup($){return()=>z(z(pa),{data:$.chartData,options:$.chartOptions,chartId:$.chartId,width:$.width,height:$.height,cssClasses:$.cssClasses,styles:$.styles,plugins:$.plugins})}}),xa={class:"text-h4 ps-3 pt-3"},Ba={class:"text-h4 mt-12 ps-1"},Sa={class:"text-h4 ps-3 pt-3"},Ta={class:"text-h4 mt-12 ps-1"},Aa={__name:"index",setup($){var q;const m=(q=JSON.parse(localStorage.getItem("userData")))==null?void 0:q.type,B=JSON.parse(localStorage.getItem("userData")),r=_(0),p=_("today"),i=_(!1),N=_({export:!1}),v=_(0),f=_(0),C=_(!1),g=_(null),V=_(null),a=_({area:[],branch:[]}),h=fa().t,J=ha(()=>[{title:h("Custom"),value:"custom"},{title:h("This Month"),value:"month"},{title:h("This Week"),value:"week"},{title:h("Today"),value:"today"}]),s={labels:[],datasets:[{label:h("Orders"),maxBarThickness:30,backgroundColor:"#ffcf5c",borderColor:"transparent",borderRadius:{topRight:5,topLeft:5},data:[]},{label:h("Sales"),maxBarThickness:30,backgroundColor:"#4169e1",borderColor:"transparent",borderRadius:{topRight:5,topLeft:5},data:[]}]},n={labels:[],datasets:[{label:h("Orders"),maxBarThickness:30,backgroundColor:"#ffcf5c",borderColor:"transparent",borderRadius:{topRight:5,topLeft:5},data:[]},{label:h("Sales"),maxBarThickness:30,backgroundColor:"#4169e1",borderColor:"transparent",borderRadius:{topRight:5,topLeft:5},data:[]}]},ea=[{title:h("Branch"),key:"name.en",sortable:!1},{title:h("Sales Amount"),key:"orders_amount"},{title:h("Number of Orders"),key:"orders_count"}],la=[{title:h("Area"),key:"name.en",sortable:!1},{title:h("Sales Amount"),key:"orders_amount"},{title:h("Number of Orders"),key:"orders_count"}],U=u=>{if(i.value=!0,u===!0){C.value=!1;let e=g.value,t=V.value;m=="admin"?D(`${r.value}${e!==null?"&from="+e:""}${t!==null?"&to="+t:""}`).then(({data:b})=>{a.value[r.value]=b,r.value=="area"?(n.labels=a.value.area.map(l=>l.name.en),n.datasets[0].data=a.value.area.map(l=>l.orders_count),n.datasets[1].data=a.value.area.map(l=>l.orders_amount)):(s.labels=a.value.branch.map(l=>l.name.en),s.datasets[0].data=a.value.branch.map(l=>l.orders_count),s.datasets[1].data=a.value.branch.map(l=>l.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="restaurant"?w(`${r.value}&branch=${B.branch_id}${e!==null?"&from="+e:""}${t!==null?"&to="+t:""}`).then(({data:b})=>{a.value[r.value]=b,r.value=="area"?(n.labels=a.value.area.map(l=>l.name.en),n.datasets[0].data=a.value.area.map(l=>l.orders_count),n.datasets[1].data=a.value.area.map(l=>l.orders_amount)):(s.labels=a.value.branch.map(l=>l.name.en),s.datasets[0].data=a.value.branch.map(l=>l.orders_count),s.datasets[1].data=a.value.branch.map(l=>l.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="operation"?L(`${r.value}${e!==null?"&from="+e:""}${t!==null?"&to="+t:""}`).then(({data:b})=>{a.value[r.value]=b,r.value=="area"?(n.labels=a.value.area.map(l=>l.name.en),n.datasets[0].data=a.value.area.map(l=>l.orders_count),n.datasets[1].data=a.value.area.map(l=>l.orders_amount)):(s.labels=a.value.branch.map(l=>l.name.en),s.datasets[0].data=a.value.branch.map(l=>l.orders_count),s.datasets[1].data=a.value.branch.map(l=>l.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="logistic"?j(`${r.value}${e!==null?"&from="+e:""}${t!==null?"&to="+t:""}`).then(({data:b})=>{a.value[r.value]=b,r.value=="area"?(n.labels=a.value.area.map(l=>l.name.en),n.datasets[0].data=a.value.area.map(l=>l.orders_count),n.datasets[1].data=a.value.area.map(l=>l.orders_amount)):(s.labels=a.value.branch.map(l=>l.name.en),s.datasets[0].data=a.value.branch.map(l=>l.orders_count),s.datasets[1].data=a.value.branch.map(l=>l.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="finance"?E(`${r.value}${e!==null?"&from="+e:""}${t!==null?"&to="+t:""}`).then(({data:b})=>{a.value[r.value]=b,r.value=="area"?(n.labels=a.value.area.map(l=>l.name.en),n.datasets[0].data=a.value.area.map(l=>l.orders_count),n.datasets[1].data=a.value.area.map(l=>l.orders_amount)):(s.labels=a.value.branch.map(l=>l.name.en),s.datasets[0].data=a.value.branch.map(l=>l.orders_count),s.datasets[1].data=a.value.branch.map(l=>l.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="agent"&&W(`${r.value}${e!==null?"&from="+e:""}${t!==null?"&to="+t:""}`).then(({data:b})=>{a.value[r.value]=b,r.value=="area"?(n.labels=a.value.area.map(l=>l.name.en),n.datasets[0].data=a.value.area.map(l=>l.orders_count),n.datasets[1].data=a.value.area.map(l=>l.orders_amount)):(s.labels=a.value.branch.map(l=>l.name.en),s.datasets[0].data=a.value.branch.map(l=>l.orders_count),s.datasets[1].data=a.value.branch.map(l=>l.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1})}else m=="admin"?D(`${r.value}&${p.value}`).then(({data:e})=>{a.value[r.value]=e,r.value=="area"?(n.labels=a.value.area.map(t=>t.name.en),n.datasets[0].data=a.value.area.map(t=>t.orders_count),n.datasets[1].data=a.value.area.map(t=>t.orders_amount)):(s.labels=a.value.branch.map(t=>t.name.en),s.datasets[0].data=a.value.branch.map(t=>t.orders_count),s.datasets[1].data=a.value.branch.map(t=>t.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="restaurant"?w(`${r.value}&${p.value}&branch=${B.branch_id}`).then(({data:e})=>{a.value[r.value]=e,r.value=="area"?(n.labels=a.value.area.map(t=>t.name.en),n.datasets[0].data=a.value.area.map(t=>t.orders_count),n.datasets[1].data=a.value.area.map(t=>t.orders_amount)):(s.labels=a.value.branch.map(t=>t.name.en),s.datasets[0].data=a.value.branch.map(t=>t.orders_count),s.datasets[1].data=a.value.branch.map(t=>t.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="operation"?L(`${r.value}&${p.value}`).then(({data:e})=>{a.value[r.value]=e,r.value=="area"?(n.labels=a.value.area.map(t=>t.name.en),n.datasets[0].data=a.value.area.map(t=>t.orders_count),n.datasets[1].data=a.value.area.map(t=>t.orders_amount)):(s.labels=a.value.branch.map(t=>t.name.en),s.datasets[0].data=a.value.branch.map(t=>t.orders_count),s.datasets[1].data=a.value.branch.map(t=>t.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="logistic"?j(`${r.value}&${p.value}`).then(({data:e})=>{a.value[r.value]=e,r.value=="area"?(n.labels=a.value.area.map(t=>t.name.en),n.datasets[0].data=a.value.area.map(t=>t.orders_count),n.datasets[1].data=a.value.area.map(t=>t.orders_amount)):(s.labels=a.value.branch.map(t=>t.name.en),s.datasets[0].data=a.value.branch.map(t=>t.orders_count),s.datasets[1].data=a.value.branch.map(t=>t.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="finance"?E(`${r.value}&${p.value}`).then(({data:e})=>{a.value[r.value]=e,r.value=="area"?(n.labels=a.value.area.map(t=>t.name.en),n.datasets[0].data=a.value.area.map(t=>t.orders_count),n.datasets[1].data=a.value.area.map(t=>t.orders_amount)):(s.labels=a.value.branch.map(t=>t.name.en),s.datasets[0].data=a.value.branch.map(t=>t.orders_count),s.datasets[1].data=a.value.branch.map(t=>t.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1}):m=="agent"&&W(`${r.value}&${p.value}`).then(({data:e})=>{a.value[r.value]=e,r.value=="area"?(n.labels=a.value.area.map(t=>t.name.en),n.datasets[0].data=a.value.area.map(t=>t.orders_count),n.datasets[1].data=a.value.area.map(t=>t.orders_amount)):(s.labels=a.value.branch.map(t=>t.name.en),s.datasets[0].data=a.value.branch.map(t=>t.orders_count),s.datasets[1].data=a.value.branch.map(t=>t.orders_amount))}).finally(()=>{i.value=!1,v.value+=1,f.value+=1})},ta=()=>{C.value=!1,p.value="today",g.value=_(null),V.value=_(null),U(!0)},M=()=>{setTimeout(()=>{p.value=="custom"?C.value=!0:U(!1)},100)},sa=async()=>{let u=g.value,e=V.value;N.value.export=!0;try{await ga.get(`${m!=="admin"?m=="restaurant"?"restaurant-apis":m:""}/stats/branchArea?type=${r.value}&${p.value}${u!==null?"&from="+u:""}${e!==null?"&to="+e:""}&export${m=="restaurant"?"&branch="+B.branch_id:""}`,{responseType:"arraybuffer"}).then(t=>{const b=new Blob([t.data],{type:"application/vnd.ms-excel"}),l=window.URL.createObjectURL(b),S=document.createElement("a");S.href=l,S.setAttribute("download",`${r.value}-report-${p.value}.xlsx`),document.body.appendChild(S),S.click(),document.body.removeChild(S)})}catch(t){console.log(t)}finally{N.value.export=!1}};return _a(()=>{m=="restaurant"?(w(`branch&today&branch=${B.branch_id}`).then(({data:u})=>{a.value.branch=u,s.labels=a.value.branch.map(e=>e.name.en),s.datasets[0].data=a.value.branch.map(e=>e.orders_count),s.datasets[1].data=a.value.branch.map(e=>e.orders_amount)}).finally(()=>{v.value+=1}),w(`area&today&branch=${B.branch_id}`).then(({data:u})=>{a.value.area=u,n.labels=a.value.area.map(e=>e.name.en),n.datasets[0].data=a.value.area.map(e=>e.orders_count),n.datasets[1].data=a.value.area.map(e=>e.orders_amount)}).finally(()=>{f.value+=1})):m=="admin"?(D("branch&today").then(({data:u})=>{a.value.branch=u,s.labels=a.value.branch.map(e=>e.name.en),s.datasets[0].data=a.value.branch.map(e=>e.orders_count),s.datasets[1].data=a.value.branch.map(e=>e.orders_amount)}).finally(()=>{v.value+=1}),D("area&today").then(({data:u})=>{a.value.area=u,n.labels=a.value.area.map(e=>e.name.en),n.datasets[0].data=a.value.area.map(e=>e.orders_count),n.datasets[1].data=a.value.area.map(e=>e.orders_amount)}).finally(()=>{f.value+=1})):m=="operation"?L("branch&today").then(({data:u})=>{a.value.branch=u,s.labels=a.value.branch.map(e=>e.name.en),s.datasets[0].data=a.value.branch.map(e=>e.orders_count),s.datasets[1].data=a.value.branch.map(e=>e.orders_amount)}).finally(()=>{v.value+=1}):m=="logistic"?j("branch&today").then(({data:u})=>{a.value.branch=u,s.labels=a.value.branch.map(e=>e.name.en),s.datasets[0].data=a.value.branch.map(e=>e.orders_count),s.datasets[1].data=a.value.branch.map(e=>e.orders_amount)}).finally(()=>{v.value+=1}):m=="finance"?E("branch&today").then(({data:u})=>{a.value.branch=u,s.labels=a.value.branch.map(e=>e.name.en),s.datasets[0].data=a.value.branch.map(e=>e.orders_count),s.datasets[1].data=a.value.branch.map(e=>e.orders_amount)}).finally(()=>{v.value+=1}):m=="agent"&&W("branch&today").then(({data:u})=>{a.value.branch=u,s.labels=a.value.branch.map(e=>e.name.en),s.datasets[0].data=a.value.branch.map(e=>e.orders_count),s.datasets[1].data=a.value.branch.map(e=>e.orders_amount)}).finally(()=>{v.value+=1})}),(u,e)=>{const t=na,b=ra;return T(),ya("div",null,[d(Va,{modelValue:o(C),"onUpdate:modelValue":e[4]||(e[4]=l=>k(C)?C.value=l:null),persistent:"",class:"v-dialog-sm"},{default:c(()=>[d(t,{onClick:e[0]||(e[0]=l=>ta())}),d($a,{title:u.$t("Pick a custom Date")},{default:c(()=>[d(G,{class:"d-flex"},{default:c(()=>[d(b,{class:"me-1",placeholder:u.$t("From"),"prepend-inner-icon":"tabler-calendar",modelValue:o(g),"onUpdate:modelValue":e[1]||(e[1]=l=>k(g)?g.value=l:null)},null,8,["placeholder","modelValue"]),d(b,{class:"ms-1",placeholder:u.$t("To"),"prepend-inner-icon":"tabler-calendar",modelValue:o(V),"onUpdate:modelValue":e[2]||(e[2]=l=>k(V)?V.value=l:null)},null,8,["placeholder","modelValue"])]),_:1}),d(G,{class:"d-flex justify-end gap-3 flex-wrap"},{default:c(()=>[d(O,{onClick:e[3]||(e[3]=l=>U(!0)),loading:o(i),disabled:!o(g)&&!o(V)},{default:c(()=>[x(y(u.$t("Pick")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),d(A,{class:"mx-0 my-0"},{default:c(()=>[d(ka,{modelValue:o(r),"onUpdate:modelValue":e[5]||(e[5]=l=>k(r)?r.value=l:null),class:"mx-auto v-tabs-pill"},{default:c(()=>[d(Z,{value:"branch"},{default:c(()=>[x(y(u.$t("Top Branches")),1)]),_:1}),o(m)!=="finance"&&o(m)!=="operation"&&o(m)!=="logistic"?(T(),R(Z,{key:0,value:"area"},{default:c(()=>[x(y(u.$t("Top Areas")),1)]),_:1})):H("",!0)]),_:1},8,["modelValue"]),d(F),d(O,{"prepend-icon":"tabler-upload",color:"success",class:"mr-3",onClick:sa,loading:o(N).export},{default:c(()=>[x(y(u.$t("Export Excel")),1)]),_:1},8,["loading"])]),_:1}),d(Ca,{modelValue:o(r),"onUpdate:modelValue":e[10]||(e[10]=l=>k(r)?r.value=l:null)},{default:c(()=>[d(K,{value:"branch",class:"py-7"},{default:c(()=>[d(P,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-10"},{default:c(()=>[I("p",xa,y(u.$t("Branches Sales/Orders")),1),d(A,{class:"mx-0 py-0 px-4 py-5 mt-1"},{default:c(()=>[d(Q,{items:o(J),"item-value":"value",disabled:o(i),"item-title":"title",modelValue:o(p),"onUpdate:modelValue":e[6]||(e[6]=l=>k(p)?p.value=l:null),label:u.$t("Select a period of time"),"prepend-inner-icon":"tabler-clock"},null,8,["items","disabled","modelValue","label"]),d(O,{class:"ms-2",onClick:e[7]||(e[7]=l=>M()),loading:o(i)},{default:c(()=>[x(y(u.$t("Search")),1)]),_:1},8,["loading"]),d(F)]),_:1}),d(A,{class:"mx-0 my-0 px-4 mt-5"},{default:c(()=>[(T(),R(o(aa),{height:200,"chart-data":s,key:o(v)})),I("p",Ba,y(u.$t("Top Branches")),1),d(o(Y),{headers:ea,items:o(a).branch,class:"mt-1"},null,8,["items"])]),_:1})]),_:1})]),_:1}),o(m)!=="finance"&&o(m)!=="operation"&&o(m)!=="logistic"?(T(),R(K,{key:0,value:"area",class:"py-7"},{default:c(()=>[d(P,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-10"},{default:c(()=>[I("p",Sa,y(u.$t("Areas Sales/Orders")),1),d(A,{class:"mx-0 py-0 px-4 py-5 mt-1"},{default:c(()=>[d(Q,{items:o(J),"item-value":"value",disabled:o(i),"item-title":"title",modelValue:o(p),"onUpdate:modelValue":e[8]||(e[8]=l=>k(p)?p.value=l:null),label:u.$t("Select a period of time"),"prepend-inner-icon":"tabler-clock"},null,8,["items","disabled","modelValue","label"]),d(O,{class:"ms-2",onClick:e[9]||(e[9]=l=>M()),loading:o(i)},{default:c(()=>[x(y(u.$t("Search")),1)]),_:1},8,["loading"]),d(F)]),_:1}),d(A,{class:"mx-0 my-0 px-4 mt-5"},{default:c(()=>[d(P,{class:"mx-0 my-0 py-0 px-0"},{default:c(()=>[(T(),R(o(aa),{height:200,"chart-data":n,key:o(f)})),I("p",Ta,y(u.$t("Top Areas")),1),d(o(Y),{headers:la,items:o(a).area,class:"mt-1"},null,8,["items"])]),_:1})]),_:1})]),_:1})]),_:1})):H("",!0)]),_:1},8,["modelValue"])])}}};typeof X=="function"&&X(Aa);export{Aa as default};