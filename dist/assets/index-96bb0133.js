import{D as re,O as z,l as c,R as ie,o as D,b as N,w as i,q as o,s as a,G as te,t as h,H as C,y as $,n as oe,U as B,A as ae,I as ge,bb as v,ba as ne,C as _e,c as Ce,az as H,W as ee,aY as x,aZ as ce,a6 as Re,a_ as je}from"./index-5994cda1.js";import{V as ve}from"./VDataTable-1bbe7e7f.js";import{V as Ue}from"./VChip-0f5f7375.js";import{V as be}from"./VPagination-93e9dfcf.js";import{_ as Se}from"./AppDateTimePicker-98752bfa.js";import{a as Oe}from"./branches-b327388a.js";import{g as Be}from"./deliveries-72e1360d.js";import{g as De}from"./areas-79d8e810.js";import{g as Te}from"./agents-57c46a54.js";import{b as Ie}from"./products-9cb694da.js";import{g as Ae}from"./categories-a361809d.js";import{f as J}from"./stats-cfdb29cc.js";import{a as Ee,g as ze}from"./branches-2ed424e9.js";import{g as K,d as Y,e as Z,f as X}from"./stats-164d9ba2.js";import{g as Ne}from"./branches-f567975f.js";import{g as Fe}from"./deliveries-8b112286.js";import{g as Le}from"./branches-917703fd.js";import{g as qe}from"./deliveries-b9ff9cfb.js";import{g as Me}from"./areas-f278e519.js";import{a as We}from"./products-d8e5a051.js";import{V as Qe,a as fe}from"./VTabs-3dd635e9.js";import{V as Ge}from"./VSpacer-879976e9.js";import{V as ye,a as He}from"./VWindowItem-98393e61.js";import{V as O}from"./VCombobox-cc03d4f2.js";import"./VCheckboxBtn-afa74ad1.js";import"./VSelectionControl-810dbd2b.js";import"./VSelect-d1bcc129.js";import"./VList-49578144.js";import"./ssrBoot-cbc4bacc.js";import"./VDivider-eb58c212.js";import"./dialog-transition-6565ba1d.js";import"./VMenu-01dd66e8.js";import"./VOverlay-1645a9c8.js";import"./lazy-bf10cb6b.js";import"./filter-9dfa3550.js";import"./VTable-da7c2248.js";const Je={__name:"LayoutsReportsTable",props:{filters:{type:Object,default:{}},reports:{type:Array,default:[]},meta:{type:Object,default:{}},gettingReports:{type:Boolean,default:!1},hasProducts:{type:Boolean,default:!1}},setup(R,{emit:V}){const p=R,l=re().t,T=z(()=>p.hasProducts===!1?[{title:l("Order ID"),key:"id",width:"200px"},{title:l("Branch"),sortable:!1,key:"branch",width:"200px"},{title:l("Product"),sortable:!1,key:"first_product",width:"200px"},{title:l("Total Amount"),sortable:!1,key:"total_amount",width:"200px"},{title:l("Status"),sortable:!1,key:"status",width:"200px"},{title:l("Delivery Name"),sortable:!1,key:"delivery_name",width:"200px"},{title:l("Agent"),sortable:!1,key:"agent_name",width:"200px"},{title:l("Area"),sortable:!1,key:"area",width:"200px"},{title:l("Paid Date"),sortable:!1,key:"paid_at",width:"200px"},{title:l("In Progress"),sortable:!1,key:"in_progress",width:"200px"},{title:l("Ready For Delivery"),sortable:!1,key:"ready_for_delivery",width:"200px"},{title:l("On The Way"),sortable:!1,key:"on_the_way",width:"200px"},{title:l("Estimated Time"),sortable:!1,key:"est_time",width:"200px"},{title:l("Delivered"),sortable:!1,key:"delivered_at",width:"200px"},{title:l("Payment Method"),sortable:!1,key:"payment_method",width:"200px"},{title:l("Customer Name"),sortable:!1,key:"customer_name",width:"200px"},{title:l("Phone Number"),sortable:!1,key:"customer_phone",width:"200px"},{title:l("Customer Email"),sortable:!1,key:"customer_email",width:"200px"},{title:l("User Type"),key:"user_type",align:"center",sortable:!1},{title:l("Order Type"),key:"order_type",align:"center",sortable:!1}]:[{title:l("Order ID"),key:"id",width:"200px"},{title:l("Branch"),sortable:!1,key:"branch",width:"200px"},{title:l("Area"),sortable:!1,key:"area",width:"200px"},{title:l("Product"),sortable:!1,key:"first_product",width:"200px"},{title:l("Price"),sortable:!1,key:"price",width:"200px"},{title:l("Quantity"),sortable:!1,key:"quantity",width:"200px"},{title:l("Total Amount"),sortable:!1,key:"total_amount",width:"200px"}]),w=m=>{if(m=="created")return{color:"warning",text:l("Created")};if(m=="ready_for_delivery")return{color:"#2FE9D0",text:l("Ready For Delivery")};if(m=="in_progress")return{color:"#E9982F",text:l("In Progress")};if(m=="cancelled")return{color:"danger",text:l("Cancelled")};if(m=="on_the_way")return{color:"grey lighten-3 black--text",text:l("On The Way")};if(m=="paid")return{color:"success",text:l("Paid")};if(m=="delivered")return{color:"blue-lighten-1",text:l("Delivered")}},P=c(),_=()=>{V("update-sort-by",P.value)},j=m=>{V("update-page-n",m)};return ie(()=>{}),(m,k)=>(D(),N(ge,{elevation:"0",class:"px-0 mb-0 pb-0 mt-5 pt-3",loading:R.gettingReports},{default:i(()=>[o(a(ve),{"sort-by":a(P),"onUpdate:sortBy":[k[1]||(k[1]=g=>te(P)?P.value=g:null),_],items:R.reports,headers:a(T),"items-per-page":15},{"item.status":i(({item:g})=>[o(Ue,{color:w(g.raw.status).color,class:h([`text-${w(g.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:i(()=>[C($(w(g.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.user_type":i(({item:g})=>[C($(String(g.raw.user_type).replace(/^\w/,b=>b.toUpperCase()))+" ",1),oe("small",null,$(g.raw.creator),1)]),bottom:i(()=>[o(B,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:i(()=>[p.meta.total?(D(),N(be,{key:0,"total-visible":"5",modelValue:p.meta.current_page,"onUpdate:modelValue":[k[0]||(k[0]=g=>p.meta.current_page=g),j],length:Math.ceil(p.meta.total/p.meta.per_page),disabled:p.gettingReports,size:35},null,8,["modelValue","length","disabled"])):ae("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"]))}},Ke={__name:"CustomizedReportsTable",props:{filters:{type:Object,default:{}},reports:{type:Array,default:[]},meta:{type:Object,default:{}},gettingReports:{type:Boolean,default:!1},hasProducts:{type:Boolean,default:!1}},setup(R,{emit:V}){const p=R,l=re().t,T=z(()=>p.hasProducts===!1?[{title:l("Order ID"),key:"id"},{title:l("Date"),sortable:!1,key:"date"},{title:l("Time"),sortable:!1,key:"time"},{title:l("Branch"),sortable:!1,key:"branch"},{title:l("Product"),sortable:!1,key:"first_product"}]:[{title:l("Order ID"),key:"id",width:"200px"},{title:l("Branch"),sortable:!1,key:"branch",width:"200px"},{title:l("Area"),sortable:!1,key:"area",width:"200px"},{title:l("Product"),sortable:!1,key:"first_product",width:"200px"},{title:l("Price"),sortable:!1,key:"price",width:"200px"},{title:l("Quantity"),sortable:!1,key:"quantity",width:"200px"},{title:l("Total Amount"),sortable:!1,key:"total_amount",width:"200px"},{title:l("Delivery Date"),sortable:!1,key:"delivery_date",width:"200px"},{title:l("Created By"),sortable:!1,key:"created_by",width:"200px"}]),w=c(),P=()=>{V("update-sort-by",w.value)},_=j=>{V("update-page-n",j)};return ie(()=>{}),(j,m)=>(D(),N(ge,{elevation:"0",class:"px-0 mb-0 pb-0 mt-5 pt-3",loading:R.gettingReports},{default:i(()=>[o(a(ve),{"sort-by":a(w),"onUpdate:sortBy":[m[1]||(m[1]=k=>te(w)?w.value=k:null),P],items:R.reports,headers:a(T),"items-per-page":15},{bottom:i(()=>[o(B,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:i(()=>[p.meta.total?(D(),N(be,{key:0,"total-visible":"5",modelValue:p.meta.current_page,"onUpdate:modelValue":[m[0]||(m[0]=k=>p.meta.current_page=k),_],length:Math.ceil(p.meta.total/p.meta.per_page),disabled:p.gettingReports,size:35},null,8,["modelValue","length","disabled"])):ae("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"]))}};let{get:Ye,show:Yt,update:Zt,create:Xt,remove:ea}=v("/areas"),{get:Ze,show:ta,update:aa,create:la,remove:sa}=v("/operation/agent");function Xe(){return ne.get("/operation/products?hasExtra")}let{get:et,show:oa,update:ra,create:ia,remove:na}=v("/operation/categories"),{get:tt,show:da,update:ua,create:pa,remove:ma}=v("/areas"),{get:at,show:ca,update:fa,create:ya,remove:ga}=v("/logistic/agent");function lt(){return ne.get("/logistic/products?hasExtra")}let{get:st,show:va,update:ba,create:ha,remove:$a}=v("/logistic/categories"),{get:ot,show:wa,update:ka,create:xa,remove:Va}=v("/finance/branches"),{get:rt,show:Pa,update:_a,create:Ca,remove:Ra}=v("/finance/deliverymen"),{get:it,show:ja,update:Ua,create:Sa,remove:Oa}=v("/areas"),{get:nt,show:Ba,update:Da,create:Ta,remove:Ia}=v("/finance/agent");function dt(){return ne.get("/finance/products?hasExtra")}let{get:ut,show:Aa,update:Ea,create:za,remove:Na}=v("/finance/categories"),{get:pt,show:Fa,update:La,create:qa,remove:Ma}=v("/agent/agent"),{get:mt,show:Wa,update:Qa,create:Ga,remove:Ha}=v("/agent/categories");const ct={class:"text-h4 pt-3 pb-0 mb-3 px-3"},ft={class:"text-h4 pt-3 pb-0 mb-3 px-3"},he={__name:"index",setup(R){const V=re(),p=V.t,n=JSON.parse(localStorage.getItem("userData")).type,l=z(()=>{if(V.locale.value==="en")return"name_en";if(V.locale.value==="ar")return"name_ar"}),T=c([]),w=c([]),P=c([]),_=c([]),j=c([]),m=c([]),k=c([]),g=c(),b=c(!1),I=c(!1),le=c(!1),A=c("reports"),d=c({branch:[],status:[],delivery:[],from:[],to:[],agent:[],area:[],payment:[],category:[],product:[],orderId:""}),F=z(()=>d.value.product.length==_.value.length),$e=c([{name:p("Created"),value:"created"},{name:p("Paid"),value:"paid"},{name:p("In Progress"),value:"in_progress"},{name:p("Ready For Delivery"),value:"ready_for_delivery"},{name:p("On The Way"),value:"on_the_way"},{name:p("Delivered"),value:"delivered"},{name:p("Cancelled"),value:"cancelled"}]),we=c([{name:"Knet",value:"knet"},{name:"Bookey",value:"bookey"},{name:"Credit Card",value:"credit_card"}]),E=c(),de=e=>{if(b.value=!0,I.value===!0){const t=new FormData,s=U().filters;Object.keys(s).includes("status")&&(Object.keys(s).includes("from")||Object.keys(s).includes("to"))&&(s.status.forEach(y=>{let S=se(y);s.from&&t.append(`${S}From`,s.from),s.to&&t.append(`${S}To`,s.to)}),s==null||delete s.status,s==null||delete s.from,s==null||delete s.to),F.value==!0&&(delete s.product,t.append("allProducts","")),Object.entries(s).forEach(([y,S])=>{t.append(y,S)}),t.append("page",e),t.append("limit",15);const f=new URLSearchParams(t).toString();b.value=!0,I.value=!0,n=="admin"?u(J,f):n=="agent"?u(K,f):n=="finance"?u(Y,f):n=="logistic"?u(Z,f):n=="operation"&&u(X,f)}else{const t=new URLSearchParams({page:e,limit:15,sortBy:E.value??""}).toString();n=="admin"?u(J,t):n=="agent"?u(K,t):n=="finance"?u(Y,t):n=="logistic"?u(Z,t):n=="operation"&&u(X,t)}},ue=e=>{E.value=e},L=e=>{e().then(({data:t})=>{T.value=t.data})},q=e=>{e().then(({data:t})=>{k.value=t.data})},M=e=>{e().then(({data:t})=>{m.value=t.data})},u=(e,t="")=>{b.value=!0,e(t).then(({data:s})=>{g.value=s.meta,j.value=s.data}).finally(()=>{b.value=!1})},W=e=>{e().then(({data:t})=>{P.value=t.data})},Q=e=>{e().then(({data:t})=>{w.value=t.data})},G=e=>{e().then(({data:t})=>{_.value=t.data})},U=()=>{let e={};return Object.entries(d.value).forEach(([t,s])=>{s!==null&&s.length&&(e[t]=s)}),{filters:e}},pe=()=>{if(d.value.product.length==_.value.length)d.value.product=[];else{let e=_.value.map(t=>t.id).filter(t=>!d.value.product.includes(t));d.value.product.push(...e)}},se=e=>e.replace(/_([a-z])/g,function(t,s){return s.toUpperCase()}),ke=e=>{const t=new FormData;t.append("page",1),t.append("limit",15),Object.keys(e).includes("status")&&(Object.keys(e).includes("from")||Object.keys(e).includes("to"))&&(e.status.forEach(f=>{let y=se(f);e.from&&t.append(`${y}From`,e.from),e.to&&t.append(`${y}To`,e.to)}),e==null||delete e.status,e==null||delete e.from,e==null||delete e.to),F.value==!0&&(delete e.product,t.append("allProducts","")),Object.entries(e).forEach(([f,y])=>{t.append(f,y)});const s=new URLSearchParams(t).toString();b.value=!0,I.value=!0,n=="admin"?u(J,s):n=="agent"?u(K,s):n=="finance"?u(Y,s):n=="logistic"?u(Z,s):n=="operation"&&u(X,s)},xe=()=>{I.value=!1,d.value={branch:[],status:[],delivery:[],from:[],to:[],agent:[],area:[],payment:[],category:[],product:[]},n=="admin"?u(J):n=="agent"?u(K):n=="finance"?u(Y):n=="logistic"?u(Z):n=="operation"&&u(X)},Ve=()=>{let e={};E.value!==void 0&&E.value.length>0&&(e["sortBy[]"]=`${E.value[0].order}-${E.value[0].key}`);const t=U().filters;Object.entries(t).forEach(([f,y])=>{e[f]=y}),Object.keys(e).includes("status")&&(Object.keys(e).includes("from")||Object.keys(e).includes("to"))&&(e.status.forEach(f=>{let y=se(f);e.from&&(e[`${y}From`]=e.from),e.to&&(e[`${y}To`]=e.to)}),e==null||delete e.status,e==null||delete e.from,e==null||delete e.to),F.value==!0&&(delete e.product,e.allProducts=""),le.value=!0;const s=new URLSearchParams(e).toString();Re.get(`${n!=="admin"?`/${n}`:""}/stats/custom?export${s.length?"&"+s:s}`,{responseType:"arraybuffer"}).then(f=>{const y=new Blob([f.data],{type:"application/vnd.ms-excel"}),S=window.URL.createObjectURL(y),r=document.createElement("a");r.href=S,r.setAttribute("download","custom-report.xlsx"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}).finally(()=>{le.value=!1})},Pe=z(()=>Object.keys(U().filters)),me=z(()=>(Object.keys(U().filters).includes("product")||Object.keys(U().filters).includes("category"))&&I.value===!0&&b.value===!1);return ie(()=>{n=="admin"?(u(J),q(De),W(Oe),L(Be),M(Te),G(Ie),Q(Ae)):n=="finance"?(u(Y),q(it),W(ot),L(rt),M(nt),G(dt),Q(ut)):n=="operation"?(u(X),q(Ye),W(Ee),L(ze),M(Ze),G(Xe),Q(et)):n=="logistic"?(u(Z),q(tt),W(Ne),L(Fe),M(at),G(lt),Q(st)):n=="agent"&&(u(K),q(Me),W(Le),L(qe),M(pt),G(We),Q(mt))}),(e,t)=>{const s=Se,f=je,y=Ke,S=Je;return D(),Ce("div",null,[o(B,{class:"mx-0 my-0"},{default:i(()=>[o(Qe,{modelValue:a(A),"onUpdate:modelValue":t[0]||(t[0]=r=>te(A)?A.value=r:null),class:"mx-auto v-tabs-pill"},{default:i(()=>[o(fe,{value:"customized"},{default:i(()=>[C($(e.$t("cutomized")),1)]),_:1}),o(fe,{value:"layouts"},{default:i(()=>[C($(e.$t("layouts")),1)]),_:1})]),_:1},8,["modelValue"]),o(Ge),o(H,{"prepend-icon":"tabler-upload",color:"success",class:"mr-3",onClick:Ve,loading:a(le)},{default:i(()=>[C($(e.$t("Export Excel")),1)]),_:1},8,["loading"])]),_:1}),o(He,{modelValue:a(A),"onUpdate:modelValue":t[13]||(t[13]=r=>te(A)?A.value=r:null)},{default:i(()=>[o(ye,{value:"customized",class:"py-7"},{default:i(()=>[o(ee,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-5"},{default:i(()=>[oe("p",ct,$(e.$t("Customized Reports")),1),o(B,{class:h({"flex-column":e.$vuetify.display.xs})},{default:i(()=>[o(ee,{cols:"12",class:"pe-0 v-col-sm-12 v-col-md-10 v-col-lg-10"},{default:i(()=>[o(B,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-0 pe-0",align:"center",justify:"space-between"},{default:i(()=>[o(O,{"prepend-inner-icon":"tabler-building-store",multiple:"",modelValue:a(d).branch,"onUpdate:modelValue":t[1]||(t[1]=r=>a(d).branch=r),items:a(P),"item-title":a(l),"return-object":!1,"item-value":"id",placeholder:e.$t("Select a Branch"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","item-title","placeholder","class","style"]),o(O,{"prepend-inner-icon":"tabler-building-store",multiple:"",modelValue:a(d).area,"onUpdate:modelValue":t[2]||(t[2]=r=>a(d).area=r),items:a(k),"item-title":"name_en","return-object":!1,"item-value":"name_en",placeholder:e.$t("Select an Area"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(O,{"prepend-inner-icon":"tabler-activity-heartbeat",multiple:"",modelValue:a(d).status,"onUpdate:modelValue":t[3]||(t[3]=r=>a(d).status=r),items:a($e),"item-title":"name","item-value":"value","return-object":!1,placeholder:e.$t("Select a Status"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(O,{"prepend-inner-icon":"tabler-activity-heartbeat","return-object":!1,multiple:"",modelValue:a(d).payment,"onUpdate:modelValue":t[4]||(t[4]=r=>a(d).payment=r),items:a(we),"item-title":"name","item-value":"value",placeholder:e.$t("Select a Payment Method"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"])]),_:1}),o(B,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-3 pe-0",align:"center",justify:"space-between"},{default:i(()=>[o(O,{"prepend-inner-icon":"tabler-user",modelValue:a(d).agent,"onUpdate:modelValue":t[5]||(t[5]=r=>a(d).agent=r),multiple:"",items:a(m),"item-value":"id","item-title":"name","return-object":!1,placeholder:e.$t("Select an Agent"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(O,{"prepend-inner-icon":"tabler-truck-delivery",multiple:"",modelValue:a(d).delivery,"onUpdate:modelValue":t[6]||(t[6]=r=>a(d).delivery=r),items:a(T),"item-value":"id","item-title":"name","return-object":!1,placeholder:e.$t("Select a Delivery"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(s,{modelValue:a(d).from,"onUpdate:modelValue":t[7]||(t[7]=r=>a(d).from=r),placeholder:e.$t("From"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"]),o(s,{modelValue:a(d).to,"onUpdate:modelValue":t[8]||(t[8]=r=>a(d).to=r),placeholder:e.$t("To"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"])]),_:1}),o(B,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-3 pe-0",align:"center",justify:"space-between"},{default:i(()=>[o(O,{"prepend-inner-icon":"tabler-package",modelValue:a(d).product,"onUpdate:modelValue":t[9]||(t[9]=r=>a(d).product=r),multiple:"",items:a(_),"item-value":"id","item-title":"name_en","return-object":!1,placeholder:e.$t("Select a Product"),class:h(["mx-2 flex-grow-1 products",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},{"prepend-item":i(()=>[a(F)?ae("",!0):(D(),N(H,{key:0,block:"",elevation:"0",text:"",color:"transparent",onClick:pe},{default:i(()=>[C($(e.$t("Select All")),1)]),_:1})),a(F)?(D(),N(H,{key:1,block:"",elevation:"0",text:"",color:"transparent",onClick:pe},{default:i(()=>[C($(e.$t("Unselect All")),1)]),_:1})):ae("",!0)]),_:1},8,["modelValue","items","placeholder","class","style"]),o(O,{"prepend-inner-icon":"tabler-bookmark",multiple:"",modelValue:a(d).category,"onUpdate:modelValue":t[10]||(t[10]=r=>a(d).category=r),items:a(w),"item-value":"id","item-title":"name_en","return-object":!1,placeholder:e.$t("Select a Category"),class:h(["mx-2 flex-grow-1",{"w-100 mt-3":e.$vuetify.display.xs,"my-2":!e.$vuetify.display.xs}]),style:x(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),o(f,{placeholder:"Order Number","prepend-inner-icon":"tabler-number",class:"flex-grow-1",modelValue:a(d).orderId,"onUpdate:modelValue":t[11]||(t[11]=r=>a(d).orderId=r)},null,8,["modelValue"])]),_:1})]),_:1}),o(ee,{cols:"12",class:"mt-2 v-col-sm-12 v-col-md-2 v-col-lg-2"},{default:i(()=>[o(H,{class:"mx-0",block:"",variant:"tonal",color:"warning","prepend-icon":"tabler-x",onClick:xe,disabled:a(b)||!a(I)},{default:i(()=>[C($(e.$t("Reset")),1)]),_:1},8,["disabled"]),o(H,{class:"mx-0 mt-5",block:"",variant:"tonal",color:"success","prepend-icon":"tabler-search",onClick:t[12]||(t[12]=r=>ke(U().filters)),disabled:!a(Pe).length||a(b)},{default:i(()=>[C($(e.$t("Search")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["class"]),o(y,{hasProducts:a(me),gettingReports:a(b),meta:a(g),reports:a(j),filters:U(),onUpdateSortBy:ue,onUpdatePageN:de},null,8,["hasProducts","gettingReports","meta","reports","filters"])]),_:1})]),_:1}),o(ye,{value:"layouts",class:"py-7"},{default:i(()=>[o(ee,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded pb-5"},{default:i(()=>[oe("p",ft,$(e.$t("layouts_reports")),1),o(S,{hasProducts:a(me),gettingReports:a(b),meta:a(g),reports:a(j),filters:U(),onUpdateSortBy:ue,onUpdatePageN:de},null,8,["hasProducts","gettingReports","meta","reports","filters"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};typeof ce=="function"&&ce(he);const Ja=_e(he,[["__scopeId","data-v-8e8ec848"]]);export{Ja as default};