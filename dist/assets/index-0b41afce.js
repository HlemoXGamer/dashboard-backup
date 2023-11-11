import{D as re,O as E,l as y,R as ne,o as B,b as N,w as n,q as s,s as a,G as te,t as $,H as R,y as b,n as oe,U as O,A as ae,I as fe,bc as g,C as xe,c as _e,az as J,W as ee,aY as k,aZ as me,a6 as Ce,a_ as Re}from"./index-ae436fe7.js";import{V as ye}from"./VDataTable-ea7817f5.js";import{V as Ue}from"./VChip-4bd7dba5.js";import{V as ge}from"./VPagination-dd0040e5.js";import{_ as je}from"./AppDateTimePicker-107eadfd.js";import{a as Se}from"./branches-1e9a9e3f.js";import{g as Pe}from"./deliveries-0d81e529.js";import{g as Oe}from"./areas-6a15abaa.js";import{g as Be}from"./agents-6c2d6fbe.js";import{g as Te}from"./products-1699b9e0.js";import{g as De}from"./categories-eb58dd57.js";import{f as K}from"./stats-a2e3d52b.js";import{a as Ie,g as Ae}from"./branches-1432fa1b.js";import{g as Y,d as Z,e as Q,f as X}from"./stats-6d7c4bef.js";import{g as Ee}from"./branches-4d71b6ee.js";import{g as Ne}from"./deliveries-fb6129d1.js";import{g as ze}from"./branches-52c9f7c3.js";import{g as Fe}from"./deliveries-64a0cfcc.js";import{g as Le}from"./areas-2eb8d5b9.js";import{a as qe}from"./products-1a189f0c.js";import{V as Me,a as pe}from"./VTabs-cf7d85cf.js";import{V as We}from"./VSpacer-59782682.js";import{V as ce,a as Ge}from"./VWindowItem-c8cde14b.js";import{V as P}from"./VCombobox-00c6c73c.js";import"./VCheckboxBtn-b63b227c.js";import"./VSelectionControl-36f39ce1.js";import"./VSelect-37a65f33.js";import"./VList-5353bc34.js";import"./ssrBoot-23d40ca5.js";import"./VDivider-b42cad0f.js";import"./dialog-transition-568cfe1a.js";import"./VMenu-2753b03a.js";import"./VOverlay-b7c1cab0.js";import"./lazy-98a42def.js";import"./filter-c9d71b19.js";import"./VTable-367a6ea3.js";const He={__name:"LayoutsReportsTable",props:{filters:{type:Object,default:{}},reports:{type:Array,default:[]},meta:{type:Object,default:{}},gettingReports:{type:Boolean,default:!1}},setup(U,{emit:x}){const m=U,o=re().t,T=E(()=>[{title:o("Order ID"),key:"id",width:"200px"},{title:o("Branch"),sortable:!1,key:"branch",width:"200px"},{title:o("Product"),sortable:!1,key:"first_product",width:"200px"},{title:o("Total Amount"),sortable:!1,key:"total_amount",width:"200px"},{title:o("Status"),sortable:!1,key:"status",width:"200px"},{title:o("Delivery Name"),sortable:!1,key:"delivery_name",width:"200px"},{title:o("Agent"),sortable:!1,key:"agent_name",width:"200px"},{title:o("Area"),sortable:!1,key:"area",width:"200px"},{title:o("Paid Date"),sortable:!1,key:"paid_at",width:"200px"},{title:o("In Progress"),sortable:!1,key:"in_progress",width:"200px"},{title:o("Ready For Delivery"),sortable:!1,key:"ready_for_delivery",width:"200px"},{title:o("On The Way"),sortable:!1,key:"on_the_way",width:"200px"},{title:o("Estimated Time"),sortable:!1,key:"est_time",width:"200px"},{title:o("Delivered"),sortable:!1,key:"delivered_at",width:"200px"},{title:o("Payment Method"),sortable:!1,key:"payment_method",width:"200px"},{title:o("Customer Name"),sortable:!1,key:"customer_name",width:"200px"},{title:o("Phone Number"),sortable:!1,key:"customer_phone",width:"200px"},{title:o("Customer Email"),sortable:!1,key:"customer_email",width:"200px"},{title:o("User Type"),key:"user_type",align:"center",sortable:!1},{title:o("Order Type"),key:"order_type",align:"center",sortable:!1}]),h=p=>{if(p=="created")return{color:"warning",text:o("Created")};if(p=="ready_for_delivery")return{color:"#2FE9D0",text:o("Ready For Delivery")};if(p=="in_progress")return{color:"#E9982F",text:o("In Progress")};if(p=="cancelled")return{color:"danger",text:o("Cancelled")};if(p=="on_the_way")return{color:"grey lighten-3 black--text",text:o("On The Way")};if(p=="paid")return{color:"success",text:o("Paid")};if(p=="delivered")return{color:"blue-lighten-1",text:o("Delivered")}},_=y(),C=()=>{x("update-sort-by",_.value)},j=p=>{x("update-page-n",p)};return ne(()=>{}),(p,w)=>(B(),N(fe,{elevation:"0",class:"px-0 mb-0 pb-0 mt-5 pt-3",loading:U.gettingReports},{default:n(()=>[s(a(ye),{"sort-by":a(_),"onUpdate:sortBy":[w[1]||(w[1]=v=>te(_)?_.value=v:null),C],items:U.reports,headers:a(T),"items-per-page":15},{"item.status":n(({item:v})=>[s(Ue,{color:h(v.raw.status).color,class:$([`text-${h(v.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:n(()=>[R(b(h(v.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.user_type":n(({item:v})=>[R(b(String(v.raw.user_type).replace(/^\w/,V=>V.toUpperCase()))+" ",1),oe("small",null,b(v.raw.creator),1)]),bottom:n(()=>[s(O,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:n(()=>[m.meta.total?(B(),N(ge,{key:0,"total-visible":"5",modelValue:m.meta.current_page,"onUpdate:modelValue":[w[0]||(w[0]=v=>m.meta.current_page=v),j],length:Math.ceil(m.meta.total/m.meta.per_page),disabled:m.gettingReports,size:35},null,8,["modelValue","length","disabled"])):ae("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"]))}},Je={__name:"CustomizedReportsTable",props:{filters:{type:Object,default:{}},reports:{type:Array,default:[]},meta:{type:Object,default:{}},gettingReports:{type:Boolean,default:!1}},setup(U,{emit:x}){const m=U,o=re().t,T=E(()=>[{title:o("Order ID"),key:"id"},{title:o("Date"),sortable:!1,key:"date"},{title:o("Time"),sortable:!1,key:"time"},{title:o("Branch"),sortable:!1,key:"branch"},{title:o("Product"),sortable:!1,key:"first_product"}]),h=y(),_=()=>{x("update-sort-by",h.value)},C=j=>{x("update-page-n",j)};return ne(()=>{}),(j,p)=>(B(),N(fe,{elevation:"0",class:"px-0 mb-0 pb-0 mt-5 pt-3",loading:U.gettingReports},{default:n(()=>[s(a(ye),{"sort-by":a(h),"onUpdate:sortBy":[p[1]||(p[1]=w=>te(h)?h.value=w:null),_],items:U.reports,headers:a(T),"items-per-page":15},{bottom:n(()=>[s(O,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:n(()=>[m.meta.total?(B(),N(ge,{key:0,"total-visible":"5",modelValue:m.meta.current_page,"onUpdate:modelValue":[p[0]||(p[0]=w=>m.meta.current_page=w),C],length:Math.ceil(m.meta.total/m.meta.per_page),disabled:m.gettingReports,size:35},null,8,["modelValue","length","disabled"])):ae("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"]))}};let{get:Ke,show:Kt,update:Yt,create:Zt,remove:Qt}=g("/areas"),{get:Ye,show:Xt,update:ea,create:ta,remove:aa}=g("/operation/agent"),{get:Ze,show:la,update:sa,create:oa,remove:ra}=g("/operation/products"),{get:Qe,show:na,update:ia,create:da,remove:ua}=g("/operation/categories"),{get:Xe,show:ma,update:pa,create:ca,remove:fa}=g("/areas"),{get:et,show:ya,update:ga,create:va,remove:$a}=g("/logistic/agent"),{get:tt,show:ba,update:ha,create:wa,remove:Va}=g("/logistic/products"),{get:at,show:ka,update:xa,create:_a,remove:Ca}=g("/logistic/categories"),{get:lt,show:Ra,update:Ua,create:ja,remove:Sa}=g("/finance/branches"),{get:st,show:Pa,update:Oa,create:Ba,remove:Ta}=g("/finance/deliverymen"),{get:ot,show:Da,update:Ia,create:Aa,remove:Ea}=g("/areas"),{get:rt,show:Na,update:za,create:Fa,remove:La}=g("/finance/agent"),{get:nt,show:qa,update:Ma,create:Wa,remove:Ga}=g("/finance/products"),{get:it,show:Ha,update:Ja,create:Ka,remove:Ya}=g("/finance/categories"),{get:dt,show:Za,update:Qa,create:Xa,remove:el}=g("/agent/agent"),{get:ut,show:tl,update:al,create:ll,remove:sl}=g("/agent/categories");const mt={class:"text-h4 pt-3 pb-0 mb-3 px-3"},pt={class:"text-h4 pt-3 pb-0 mb-3 px-3"},ve={__name:"index",setup(U){const x=re(),m=x.t,i=JSON.parse(localStorage.getItem("userData")).type,o=E(()=>{if(x.locale.value==="en")return"name_en";if(x.locale.value==="ar")return"name_ar"}),T=y([]),h=y([]),_=y([]),C=y([]),j=y([]),p=y([]),w=y([]),v=y(),V=y(!1),z=y(!1),le=y(!1),D=y("reports"),d=y({branch:[],status:[],delivery:[],from:[],to:[],agent:[],area:[],payment:[],category:[],product:[],orderId:""}),F=E(()=>d.value.product.length==C.value.length),$e=E(()=>[{name:m("Created"),value:"created"},{name:m("Paid"),value:"paid"},{name:m("In Progress"),value:"in_progress"},{name:m("Ready For Delivery"),value:"ready_for_delivery"},{name:m("On The Way"),value:"on_the_way"},{name:m("Delivered"),value:"delivered"},{name:m("Cancelled"),value:"cancelled"}]),be=y([{name:"Knet",value:"knet"},{name:"Bookey",value:"bookey"},{name:"Credit Card",value:"credit_card"}]),I=y(),ie=e=>{if(V.value=!0,z.value===!0){const t=new FormData,l=A().filters;Object.keys(l).includes("status")&&(Object.keys(l).includes("from")||Object.keys(l).includes("to"))&&(l.status.forEach(f=>{let S=se(f);l.from&&t.append(`${S}From`,l.from),l.to&&t.append(`${S}To`,l.to)}),l==null||delete l.status,l==null||delete l.from,l==null||delete l.to),F.value==!0&&(delete l.product,t.append("allProducts","")),Object.entries(l).forEach(([f,S])=>{t.append(f,S)}),t.append("page",e),t.append("limit",15);const c=new URLSearchParams(t).toString();V.value=!0,z.value=!0,i=="admin"?u(K,c):i=="agent"?u(Y,c):i=="finance"?u(Z,c):i=="logistic"?u(Q,c):i=="operation"&&u(X,c)}else{const t=new URLSearchParams({page:e,limit:15,sortBy:I.value??""}).toString();i=="admin"?u(K,t):i=="agent"?u(Y,t):i=="finance"?u(Z,t):i=="logistic"?u(Q,t):i=="operation"&&u(X,t)}},de=e=>{I.value=e},L=e=>{e().then(({data:t})=>{T.value=t.data})},q=e=>{e().then(({data:t})=>{w.value=t.data})},M=e=>{e().then(({data:t})=>{p.value=t.data})},u=(e,t="")=>{V.value=!0,e(t).then(({data:l})=>{v.value=l.meta,j.value=l.data}).finally(()=>{V.value=!1})},W=e=>{e().then(({data:t})=>{_.value=t.data})},G=e=>{e().then(({data:t})=>{h.value=t.data})},H=e=>{e().then(({data:t})=>{C.value=t.data})},A=()=>{let e={};return Object.entries(d.value).forEach(([t,l])=>{l!==null&&l.length&&(e[t]=l)}),{filters:e}},ue=()=>{if(d.value.product.length==C.value.length)d.value.product=[];else{let e=C.value.map(t=>t.id).filter(t=>!d.value.product.includes(t));d.value.product.push(...e)}},se=e=>e.replace(/_([a-z])/g,function(t,l){return l.toUpperCase()}),he=e=>{const t=new FormData;t.append("page",1),t.append("limit",15),Object.keys(e).includes("status")&&(Object.keys(e).includes("from")||Object.keys(e).includes("to"))&&(e.status.forEach(c=>{let f=se(c);e.from&&t.append(`${f}From`,e.from),e.to&&t.append(`${f}To`,e.to)}),e==null||delete e.status,e==null||delete e.from,e==null||delete e.to),F.value==!0&&(delete e.product,t.append("allProducts","")),Object.entries(e).forEach(([c,f])=>{t.append(c,f)});const l=new URLSearchParams(t).toString();V.value=!0,z.value=!0,i=="admin"?u(K,l):i=="agent"?u(Y,l):i=="finance"?u(Z,l):i=="logistic"?u(Q,l):i=="operation"&&u(X,l)},we=()=>{z.value=!1,d.value={branch:[],status:[],delivery:[],from:[],to:[],agent:[],area:[],payment:[],category:[],product:[]},i=="admin"?u(K):i=="agent"?u(Y):i=="finance"?u(Z):i=="logistic"?u(Q):i=="operation"&&u(X)},Ve=()=>{let e={};I.value!==void 0&&I.value.length>0&&(e["sortBy[]"]=`${I.value[0].order}-${I.value[0].key}`);const t=A().filters;Object.entries(t).forEach(([c,f])=>{e[c]=f}),Object.keys(e).includes("status")&&(Object.keys(e).includes("from")||Object.keys(e).includes("to"))&&(e.status.forEach(c=>{let f=se(c);e.from&&(e[`${f}From`]=e.from),e.to&&(e[`${f}To`]=e.to)}),e==null||delete e.status,e==null||delete e.from,e==null||delete e.to),F.value==!0&&(delete e.product,e.allProducts=""),le.value=!0;const l=new URLSearchParams(e).toString();Ce.get(`${i!=="admin"?`/${i}`:""}/stats/custom?export${l.length?"&"+l:l}`,{responseType:"arraybuffer"}).then(c=>{const f=new Blob([c.data],{type:"application/vnd.ms-excel"}),S=window.URL.createObjectURL(f),r=document.createElement("a");r.href=S,r.setAttribute("download","reports-report.xlsx"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}).finally(()=>{le.value=!1})},ke=E(()=>Object.keys(A().filters));return ne(()=>{i=="admin"?(u(K),q(Oe),W(Se),L(Pe),M(Be),H(Te),G(De)):i=="finance"?(u(Z),q(ot),W(lt),L(st),M(rt),H(nt),G(it)):i=="operation"?(u(X),q(Ke),W(Ie),L(Ae),M(Ye),H(Ze),G(Qe)):i=="logistic"?(u(Q),q(Xe),W(Ee),L(Ne),M(et),H(tt),G(at)):i=="agent"&&(u(Y),q(Le),W(ze),L(Fe),M(dt),H(qe),G(ut))}),(e,t)=>{const l=je,c=Re,f=Je,S=He;return B(),_e("div",null,[s(O,{class:"mx-0 my-0"},{default:n(()=>[s(Me,{modelValue:a(D),"onUpdate:modelValue":t[0]||(t[0]=r=>te(D)?D.value=r:null),class:"mx-auto v-tabs-pill"},{default:n(()=>[s(pe,{value:"customized"},{default:n(()=>[R(b(e.$t("cutomized")),1)]),_:1}),s(pe,{value:"layouts"},{default:n(()=>[R(b(e.$t("layouts")),1)]),_:1})]),_:1},8,["modelValue"]),s(We),s(J,{"prepend-icon":"tabler-upload",color:"success",class:"mr-3",onClick:Ve,loading:a(le)},{default:n(()=>[R(b(e.$t("Export Excel")),1)]),_:1},8,["loading"])]),_:1}),s(Ge,{modelValue:a(D),"onUpdate:modelValue":t[13]||(t[13]=r=>te(D)?D.value=r:null)},{default:n(()=>[s(ce,{value:"customized",class:"py-7"},{default:n(()=>[s(ee,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-5"},{default:n(()=>[oe("p",mt,b(e.$t("Customized Reports")),1),s(O,{class:$({"flex-column":e.$vuetify.display.xs})},{default:n(()=>[s(ee,{cols:"12",class:"pe-0 v-col-sm-12 v-col-md-10 v-col-lg-10"},{default:n(()=>[s(O,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-0 pe-0",align:"center",justify:"space-between"},{default:n(()=>[s(P,{"prepend-inner-icon":"tabler-building-store",multiple:"",modelValue:a(d).branch,"onUpdate:modelValue":t[1]||(t[1]=r=>a(d).branch=r),items:a(_),"item-title":a(o),"return-object":!1,"item-value":"id",placeholder:e.$t("Select a Branch"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","item-title","placeholder","class","style"]),s(P,{"prepend-inner-icon":"tabler-building-store",multiple:"",modelValue:a(d).area,"onUpdate:modelValue":t[2]||(t[2]=r=>a(d).area=r),items:a(w),"item-title":"name_en","return-object":!1,"item-value":"name_en",placeholder:e.$t("Select an Area"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(P,{"prepend-inner-icon":"tabler-activity-heartbeat",multiple:"",modelValue:a(d).status,"onUpdate:modelValue":t[3]||(t[3]=r=>a(d).status=r),items:a($e),"item-title":"name","item-value":"value","return-object":!1,placeholder:e.$t("Select a Status"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(P,{"prepend-inner-icon":"tabler-activity-heartbeat","return-object":!1,multiple:"",modelValue:a(d).payment,"onUpdate:modelValue":t[4]||(t[4]=r=>a(d).payment=r),items:a(be),"item-title":"name","item-value":"value",placeholder:e.$t("Select a Payment Method"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"])]),_:1}),s(O,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-3 pe-0",align:"center",justify:"space-between"},{default:n(()=>[s(P,{"prepend-inner-icon":"tabler-user",modelValue:a(d).agent,"onUpdate:modelValue":t[5]||(t[5]=r=>a(d).agent=r),multiple:"",items:a(p),"item-value":"id","item-title":"name","return-object":!1,placeholder:e.$t("Select an Agent"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(P,{"prepend-inner-icon":"tabler-truck-delivery",multiple:"",modelValue:a(d).delivery,"onUpdate:modelValue":t[6]||(t[6]=r=>a(d).delivery=r),items:a(T),"item-value":"id","item-title":"name","return-object":!1,placeholder:e.$t("Select a Delivery"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(l,{modelValue:a(d).from,"onUpdate:modelValue":t[7]||(t[7]=r=>a(d).from=r),placeholder:e.$t("From"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"]),s(l,{modelValue:a(d).to,"onUpdate:modelValue":t[8]||(t[8]=r=>a(d).to=r),placeholder:e.$t("To"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"])]),_:1}),s(O,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-3 pe-0",align:"center",justify:"space-between"},{default:n(()=>[s(P,{"prepend-inner-icon":"tabler-package",modelValue:a(d).product,"onUpdate:modelValue":t[9]||(t[9]=r=>a(d).product=r),multiple:"",items:a(C),"item-value":"id","item-title":"name_en","return-object":!1,placeholder:e.$t("Select a Product"),class:$(["mx-2 flex-grow-1 products",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},{"prepend-item":n(()=>[a(F)?ae("",!0):(B(),N(J,{key:0,block:"",elevation:"0",text:"",color:"transparent",onClick:ue},{default:n(()=>[R(b(e.$t("Select All")),1)]),_:1})),a(F)?(B(),N(J,{key:1,block:"",elevation:"0",text:"",color:"transparent",onClick:ue},{default:n(()=>[R(b(e.$t("Unselect All")),1)]),_:1})):ae("",!0)]),_:1},8,["modelValue","items","placeholder","class","style"]),s(P,{"prepend-inner-icon":"tabler-bookmark",multiple:"",modelValue:a(d).category,"onUpdate:modelValue":t[10]||(t[10]=r=>a(d).category=r),items:a(h),"item-value":"id","item-title":"name_en","return-object":!1,placeholder:e.$t("Select a Category"),class:$(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:k(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(c,{placeholder:"Order Number","prepend-inner-icon":"tabler-number",class:"flex-grow-1",modelValue:a(d).orderId,"onUpdate:modelValue":t[11]||(t[11]=r=>a(d).orderId=r)},null,8,["modelValue"])]),_:1})]),_:1}),s(ee,{cols:"12",class:"mt-2 v-col-sm-12 v-col-md-2 v-col-lg-2"},{default:n(()=>[s(J,{class:"mx-0",block:"",variant:"tonal",color:"warning","prepend-icon":"tabler-x",onClick:we,disabled:a(V)||!a(z)},{default:n(()=>[R(b(e.$t("Reset")),1)]),_:1},8,["disabled"]),s(J,{class:"mx-0 mt-5",block:"",variant:"tonal",color:"success","prepend-icon":"tabler-search",onClick:t[12]||(t[12]=r=>he(A().filters)),disabled:!a(ke).length||a(V)},{default:n(()=>[R(b(e.$t("Search")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["class"]),s(f,{gettingReports:a(V),meta:a(v),reports:a(j),filters:A(),onUpdateSortBy:de,onUpdatePageN:ie},null,8,["gettingReports","meta","reports","filters"])]),_:1})]),_:1}),s(ce,{value:"layouts",class:"py-7"},{default:n(()=>[s(ee,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-5"},{default:n(()=>[oe("p",pt,b(e.$t("layouts_reports")),1),s(S,{gettingReports:a(V),meta:a(v),reports:a(j),filters:A(),onUpdateSortBy:de,onUpdatePageN:ie},null,8,["gettingReports","meta","reports","filters"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};typeof me=="function"&&me(ve);const ol=xe(ve,[["__scopeId","data-v-9cab63c6"]]);export{ol as default};
