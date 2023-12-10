import{D as te,O as B,l as c,R as ae,o as Q,b as H,w as n,q as o,s as l,G as J,t as h,H as D,y as w,n as ee,U as T,A as de,I as ue,C as $e,c as xe,az as X,W as G,aY as x,aZ as re,a6 as ke}from"./index-d2581156.js";import{V as pe}from"./VDataTable-94bcafd9.js";import{V as Ve}from"./VChip-2c42ae55.js";import{V as me}from"./VPagination-9e4206b7.js";import{_ as _e}from"./AppDateTimePicker-8aeb56f6.js";import{a as Pe}from"./branches-c1092a6c.js";import{g as Re}from"./deliveries-1b91572f.js";import{g as je}from"./areas-e649741f.js";import{g as Ce}from"./agents-df5940bb.js";import{a as F}from"./stats-734024f3.js";import{g as De,a as Oe}from"./deliveries-a9e0fe46.js";import{g as Se,a as Ue,b as Be,c as Te,d as Ie,e as Ae,f as Ee,h as ze,i as Ne}from"./agents-2f10224d.js";import{g as L,d as q,e as M,f as W}from"./stats-137b61ab.js";import{g as Fe}from"./branches-a7b32877.js";import{g as Le}from"./deliveries-bf2a758f.js";import{g as qe}from"./branches-ec1b98b9.js";import{g as Me}from"./deliveries-cceff379.js";import{g as We}from"./areas-47294781.js";import{V as Qe,a as ie}from"./VTabs-d6dc5f91.js";import{V as Ge}from"./VSpacer-0d4baf29.js";import{V as ne,a as He}from"./VWindowItem-fd017b32.js";import{V as C}from"./VCombobox-66ef1a06.js";import"./VCheckboxBtn-68cb53d5.js";import"./VSelectionControl-2699808d.js";import"./VSelect-801d8977.js";import"./VList-3c9a1f65.js";import"./ssrBoot-91f799f7.js";import"./VDivider-72799677.js";import"./dialog-transition-ed0dbcb2.js";import"./VMenu-5e1a829e.js";import"./VOverlay-a01ea84e.js";import"./lazy-5e287f74.js";import"./filter-06ec5503.js";import"./VTable-25121804.js";const Je={__name:"LayoutsReportsTable",props:{filters:{type:Object,default:{}},reports:{type:Array,default:[]},meta:{type:Object,default:{}},gettingReports:{type:Boolean,default:!1},hasProducts:{type:Boolean,default:!1}},setup(k,{emit:$}){const u=k,a=te().t,O=B(()=>u.hasProducts===!1?[{title:a("Order ID"),key:"id",width:"200px"},{title:a("Branch"),sortable:!1,key:"branch",width:"200px"},{title:a("Product"),sortable:!1,key:"first_product",width:"200px"},{title:a("Total Amount"),sortable:!1,key:"total_amount",width:"200px"},{title:a("Status"),sortable:!1,key:"status",width:"200px"},{title:a("Delivery Name"),sortable:!1,key:"delivery_name",width:"200px"},{title:a("Agent"),sortable:!1,key:"agent_name",width:"200px"},{title:a("Area"),sortable:!1,key:"area",width:"200px"},{title:a("Paid Date"),sortable:!1,key:"paid_at",width:"200px"},{title:a("In Progress"),sortable:!1,key:"in_progress",width:"200px"},{title:a("Ready For Delivery"),sortable:!1,key:"ready_for_delivery",width:"200px"},{title:a("On The Way"),sortable:!1,key:"on_the_way",width:"200px"},{title:a("Estimated Time"),sortable:!1,key:"est_time",width:"200px"},{title:a("Delivered"),sortable:!1,key:"delivered_at",width:"200px"},{title:a("Payment Method"),sortable:!1,key:"payment_method",width:"200px"},{title:a("Customer Name"),sortable:!1,key:"customer_name",width:"200px"},{title:a("Phone Number"),sortable:!1,key:"customer_phone",width:"200px"},{title:a("Customer Email"),sortable:!1,key:"customer_email",width:"200px"},{title:a("User Type"),key:"user_type",align:"center",sortable:!1},{title:a("Order Type"),key:"order_type",align:"center",sortable:!1}]:[{title:a("Order ID"),key:"id",width:"200px"},{title:a("Branch"),sortable:!1,key:"branch",width:"200px"},{title:a("Area"),sortable:!1,key:"area",width:"200px"},{title:a("Product"),sortable:!1,key:"first_product",width:"200px"},{title:a("Price"),sortable:!1,key:"price",width:"200px"},{title:a("Quantity"),sortable:!1,key:"quantity",width:"200px"},{title:a("Total Amount"),sortable:!1,key:"total_amount",width:"200px"}]),v=y=>{if(y=="created")return{color:"warning",text:a("Created")};if(y=="ready_for_delivery")return{color:"#2FE9D0",text:a("Ready For Delivery")};if(y=="in_progress")return{color:"#E9982F",text:a("In Progress")};if(y=="cancelled")return{color:"danger",text:a("Cancelled")};if(y=="on_the_way")return{color:"grey lighten-3 black--text",text:a("On The Way")};if(y=="paid")return{color:"success",text:a("Paid")};if(y=="delivered")return{color:"blue-lighten-1",text:a("Delivered")}},V=c(),R=()=>{$("update-sort-by",V.value)},j=y=>{$("update-page-n",y)};return ae(()=>{}),(y,b)=>(Q(),H(ue,{elevation:"0",class:"px-0 mb-0 pb-0 mt-5 pt-3",loading:k.gettingReports},{default:n(()=>[o(l(pe),{"sort-by":l(V),"onUpdate:sortBy":[b[1]||(b[1]=p=>J(V)?V.value=p:null),R],items:k.reports,headers:l(O),"items-per-page":15},{"item.status":n(({item:p})=>[o(Ve,{color:v(p.raw.status).color,class:h([`text-${v(p.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:n(()=>[D(w(v(p.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.user_type":n(({item:p})=>[D(w(String(p.raw.user_type).replace(/^\w/,_=>_.toUpperCase()))+" ",1),ee("small",null,w(p.raw.creator),1)]),bottom:n(()=>[o(T,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:n(()=>[u.meta.total?(Q(),H(me,{key:0,"total-visible":"5",modelValue:u.meta.current_page,"onUpdate:modelValue":[b[0]||(b[0]=p=>u.meta.current_page=p),j],length:Math.ceil(u.meta.total/u.meta.per_page),disabled:u.gettingReports,size:35},null,8,["modelValue","length","disabled"])):de("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"]))}},Ke={__name:"CustomizedReportsTable",props:{filters:{type:Object,default:{}},reports:{type:Array,default:[]},meta:{type:Object,default:{}},gettingReports:{type:Boolean,default:!1},hasProducts:{type:Boolean,default:!1}},setup(k,{emit:$}){const u=k,a=te().t,O=B(()=>u.hasProducts===!1?[{title:a("Order ID"),key:"id"},{title:a("Date"),sortable:!1,key:"date"},{title:a("Time"),sortable:!1,key:"time"},{title:a("Branch"),sortable:!1,key:"branch"},{title:a("Product"),sortable:!1,key:"first_product"},{title:a("Delivery Type"),sortable:!1,key:"delivery_type",width:"200px"}]:[{title:a("Order ID"),key:"id",width:"200px"},{title:a("Branch"),sortable:!1,key:"branch",width:"200px"},{title:a("Area"),sortable:!1,key:"area",width:"200px"},{title:a("Product"),sortable:!1,key:"first_product",width:"200px"},{title:a("Price"),sortable:!1,key:"price",width:"200px"},{title:a("Quantity"),sortable:!1,key:"quantity",width:"200px"},{title:a("Total Amount"),sortable:!1,key:"total_amount",width:"200px"},{title:a("Delivery Date"),sortable:!1,key:"delivery_date",width:"200px"},{title:a("Created By"),sortable:!1,key:"created_by",width:"200px"},{title:a("Delivery Type"),sortable:!1,key:"delivery_type",width:"200px"}]),v=c(),V=()=>{$("update-sort-by",v.value)},R=j=>{$("update-page-n",j)};return ae(()=>{}),(j,y)=>(Q(),H(ue,{elevation:"0",class:"px-0 mb-0 pb-0 mt-5 pt-3",loading:k.gettingReports},{default:n(()=>[o(l(pe),{"sort-by":l(v),"onUpdate:sortBy":[y[1]||(y[1]=b=>J(v)?v.value=b:null),V],items:k.reports,headers:l(O),"items-per-page":15},{bottom:n(()=>[o(T,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:n(()=>[u.meta.total?(Q(),H(me,{key:0,"total-visible":"5",modelValue:u.meta.current_page,"onUpdate:modelValue":[y[0]||(y[0]=b=>u.meta.current_page=b),R],length:Math.ceil(u.meta.total/u.meta.per_page),disabled:u.gettingReports,size:35},null,8,["modelValue","length","disabled"])):de("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"]))}};const Ye={class:"text-h4 pt-3 pb-0 mb-3 px-3"},Ze={class:"text-h4 pt-3 pb-0 mb-3 px-3"},ce={__name:"index",setup(k){const $=te(),u=$.t,r=JSON.parse(localStorage.getItem("userData")).type,a=B(()=>{if($.locale.value==="en")return"name_en";if($.locale.value==="ar")return"name_ar"}),O=c([]);c([]);const v=c([]),V=c([]),R=c([]),j=c([]),y=c([]),b=c(),p=c(!1),_=c(!1),K=c(!1),S=c("reports"),ye=c([{title:"Pickup",value:1},{title:"Delivery",value:0}]),m=c({branch:[],status:[],delivery:[],from:[],to:[],agent:[],area:[],payment:[],category:[],product:[],orderId:"",delivery_type:""}),Y=B(()=>m.value.product.length==V.value.length),fe=c([{name:u("Created"),value:"created"},{name:u("Paid"),value:"paid"},{name:u("In Progress"),value:"in_progress"},{name:u("Ready For Delivery"),value:"ready_for_delivery"},{name:u("On The Way"),value:"on_the_way"},{name:u("Delivered"),value:"delivered"},{name:u("Cancelled"),value:"cancelled"}]),ge=c([{name:"Knet",value:"knet"},{name:"Bookey",value:"bookey"},{name:"Credit Card",value:"credit_card"}]),U=c(),le=e=>{if(p.value=!0,_.value===!0){const t=new FormData,s=P().filters;Object.keys(s).includes("status")&&(Object.keys(s).includes("from")||Object.keys(s).includes("to"))&&(s.status.forEach(g=>{let i=Z(g);s.from&&t.append(`${i}From`,s.from),s.to&&t.append(`${i}To`,s.to)}),s==null||delete s.status,s==null||delete s.from,s==null||delete s.to),Y.value==!0&&(delete s.product,t.append("allProducts","")),Object.entries(s).forEach(([g,i])=>{t.append(g,i)}),t.append("page",e),t.append("limit",15);const f=new URLSearchParams(t).toString();p.value=!0,_.value=!0,r=="admin"?d(F,f):r=="agent"?d(L,f):r=="finance"?d(q,f):r=="logistic"?d(M,f):r=="operation"&&d(W,f)}else{const t=new URLSearchParams({page:e,limit:15,sortBy:U.value??""}).toString();r=="admin"?d(F,t):r=="agent"?d(L,t):r=="finance"?d(q,t):r=="logistic"?d(M,t):r=="operation"&&d(W,t)}},se=e=>{U.value=e},I=e=>{e().then(({data:t})=>{O.value=t.data})},A=e=>{e().then(({data:t})=>{y.value=t.data})},E=e=>{e().then(({data:t})=>{j.value=t.data})},d=(e,t="")=>{p.value=!0,e(t).then(({data:s})=>{b.value=s.meta,R.value=s.data}).finally(()=>{p.value=!1})},z=e=>{e().then(({data:t})=>{v.value=t.data})},P=()=>{let e={};return Object.entries(m.value).forEach(([t,s])=>{s!==null&&s.length&&(e[t]=s)}),{filters:e}},Z=e=>e.replace(/_([a-z])/g,function(t,s){return s.toUpperCase()}),be=e=>{const t=new FormData;t.append("page",1),t.append("limit",15),Object.keys(e).includes("status")&&(Object.keys(e).includes("from")||Object.keys(e).includes("to"))&&(e.status.forEach(f=>{let g=Z(f);e.from&&t.append(`${g}From`,e.from),e.to&&t.append(`${g}To`,e.to)}),e==null||delete e.status,e==null||delete e.from,e==null||delete e.to),Y.value==!0&&(delete e.product,t.append("allProducts","")),Object.entries(e).forEach(([f,g])=>{t.append(f,g)});const s=new URLSearchParams(t).toString();p.value=!0,_.value=!0,r=="admin"?d(F,s):r=="agent"?d(L,s):r=="finance"?d(q,s):r=="logistic"?d(M,s):r=="operation"&&d(W,s)},ve=()=>{_.value=!1,m.value={branch:[],status:[],delivery:[],from:[],to:[],agent:[],area:[],payment:[],category:[],product:[],delivery_type:""},r=="admin"?d(F):r=="agent"?d(L):r=="finance"?d(q):r=="logistic"?d(M):r=="operation"&&d(W)},he=()=>{let e={};U.value!==void 0&&U.value.length>0&&(e["sortBy[]"]=`${U.value[0].order}-${U.value[0].key}`);const t=P().filters;Object.entries(t).forEach(([f,g])=>{e[f]=g}),Object.keys(e).includes("status")&&(Object.keys(e).includes("from")||Object.keys(e).includes("to"))&&(e.status.forEach(f=>{let g=Z(f);e.from&&(e[`${g}From`]=e.from),e.to&&(e[`${g}To`]=e.to)}),e==null||delete e.status,e==null||delete e.from,e==null||delete e.to),Y.value==!0&&(delete e.product,e.allProducts=""),K.value=!0;const s=new URLSearchParams(e).toString();ke.get(`${r!=="admin"?`/${r}`:""}/stats/custom?export${s.length?"&"+s:s}`,{responseType:"arraybuffer"}).then(f=>{const g=new Blob([f.data],{type:"application/vnd.ms-excel"}),i=window.URL.createObjectURL(g),N=document.createElement("a");N.href=i,N.setAttribute("download","custom-report.xlsx"),document.body.appendChild(N),N.click(),document.body.removeChild(N)}).finally(()=>{K.value=!1})},we=B(()=>Object.keys(P().filters)),oe=B(()=>(Object.keys(P().filters).includes("product")||Object.keys(P().filters).includes("category"))&&_.value===!0&&p.value===!1);return ae(()=>{r=="admin"?(d(F),A(je),z(Pe),I(Re),E(Ce)):r=="finance"?(d(q),A(Se),z(Ue),I(Be),E(Te)):r=="operation"?(d(W),A(Ie),z(De),I(Oe),E(Ae)):r=="logistic"?(d(M),A(Ee),z(Fe),I(Le),E(ze)):r=="agent"&&(d(L),A(We),z(qe),I(Me),E(Ne))}),(e,t)=>{const s=_e,f=Ke,g=Je;return Q(),xe("div",null,[o(T,{class:"mx-0 my-0"},{default:n(()=>[o(Qe,{modelValue:l(S),"onUpdate:modelValue":t[0]||(t[0]=i=>J(S)?S.value=i:null),class:"mx-auto v-tabs-pill"},{default:n(()=>[o(ie,{value:"customized"},{default:n(()=>[D(w(e.$t("cutomized")),1)]),_:1}),o(ie,{value:"layouts"},{default:n(()=>[D(w(e.$t("layouts")),1)]),_:1})]),_:1},8,["modelValue"]),o(Ge),o(X,{"prepend-icon":"tabler-upload",color:"success",class:"mr-3",onClick:he,loading:l(K)},{default:n(()=>[D(w(e.$t("Export Excel")),1)]),_:1},8,["loading"])]),_:1}),o(He,{modelValue:l(S),"onUpdate:modelValue":t[11]||(t[11]=i=>J(S)?S.value=i:null)},{default:n(()=>[o(ne,{value:"customized",class:"py-7"},{default:n(()=>[o(G,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-5"},{default:n(()=>[ee("p",Ye,w(e.$t("Customized Reports")),1),o(T,{class:h({"flex-column":e.$vuetify.display.xs})},{default:n(()=>[o(G,{cols:"12",class:"pe-0 v-col-sm-12 v-col-md-10 v-col-lg-10"},{default:n(()=>[o(T,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-0 pe-0",align:"center",justify:"space-between"},{default:n(()=>[o(C,{"prepend-inner-icon":"tabler-building-store",modelValue:l(m).delivery_type,"onUpdate:modelValue":t[1]||(t[1]=i=>l(m).delivery_type=i),items:l(ye),"item-title":"title","return-object":!1,"item-value":"id",placeholder:"Select a Delivery Type",class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","class","style"]),o(C,{"prepend-inner-icon":"tabler-building-store",multiple:"",modelValue:l(m).branch,"onUpdate:modelValue":t[2]||(t[2]=i=>l(m).branch=i),items:l(v),"item-title":l(a),"return-object":!1,"item-value":"id",placeholder:e.$t("Select a Branch"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","item-title","placeholder","class","style"]),o(C,{"prepend-inner-icon":"tabler-building-store",multiple:"",modelValue:l(m).area,"onUpdate:modelValue":t[3]||(t[3]=i=>l(m).area=i),items:l(y),"item-title":"name_en","return-object":!1,"item-value":"name_en",placeholder:e.$t("Select an Area"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(C,{"prepend-inner-icon":"tabler-activity-heartbeat",multiple:"",modelValue:l(m).status,"onUpdate:modelValue":t[4]||(t[4]=i=>l(m).status=i),items:l(fe),"item-title":"name","item-value":"value","return-object":!1,placeholder:e.$t("Select a Status"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(C,{"prepend-inner-icon":"tabler-activity-heartbeat","return-object":!1,multiple:"",modelValue:l(m).payment,"onUpdate:modelValue":t[5]||(t[5]=i=>l(m).payment=i),items:l(ge),"item-title":"name","item-value":"value",placeholder:e.$t("Select a Payment Method"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"])]),_:1}),o(T,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-3 pe-0",align:"center",justify:"space-between"},{default:n(()=>[o(C,{"prepend-inner-icon":"tabler-user",modelValue:l(m).agent,"onUpdate:modelValue":t[6]||(t[6]=i=>l(m).agent=i),multiple:"",items:l(j),"item-value":"id","item-title":"name","return-object":!1,placeholder:e.$t("Select an Agent"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(C,{"prepend-inner-icon":"tabler-truck-delivery",multiple:"",modelValue:l(m).delivery,"onUpdate:modelValue":t[7]||(t[7]=i=>l(m).delivery=i),items:l(O),"item-value":"id","item-title":"name","return-object":!1,placeholder:e.$t("Select a Delivery"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(s,{modelValue:l(m).from,"onUpdate:modelValue":t[8]||(t[8]=i=>l(m).from=i),placeholder:e.$t("From"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"]),o(s,{modelValue:l(m).to,"onUpdate:modelValue":t[9]||(t[9]=i=>l(m).to=i),placeholder:e.$t("To"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"])]),_:1})]),_:1}),o(G,{cols:"12",class:"mt-2 v-col-sm-12 v-col-md-2 v-col-lg-2"},{default:n(()=>[o(X,{class:"mx-0",block:"",variant:"tonal",color:"warning","prepend-icon":"tabler-x",onClick:ve,disabled:l(p)||!l(_)},{default:n(()=>[D(w(e.$t("Reset")),1)]),_:1},8,["disabled"]),o(X,{class:"mx-0 mt-5",block:"",variant:"tonal",color:"success","prepend-icon":"tabler-search",onClick:t[10]||(t[10]=i=>be(P().filters)),disabled:!l(we).length||l(p)},{default:n(()=>[D(w(e.$t("Search")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["class"]),o(f,{hasProducts:l(oe),gettingReports:l(p),meta:l(b),reports:l(R),filters:P(),onUpdateSortBy:se,onUpdatePageN:le},null,8,["hasProducts","gettingReports","meta","reports","filters"])]),_:1})]),_:1}),o(ne,{value:"layouts",class:"py-7"},{default:n(()=>[o(G,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-5"},{default:n(()=>[ee("p",Ze,w(e.$t("layouts_reports")),1),o(g,{hasProducts:l(oe),gettingReports:l(p),meta:l(b),reports:l(R),filters:P(),onUpdateSortBy:se,onUpdatePageN:le},null,8,["hasProducts","gettingReports","meta","reports","filters"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};typeof re=="function"&&re(ce);const Ut=$e(ce,[["__scopeId","data-v-eab091dc"]]);export{Ut as default};