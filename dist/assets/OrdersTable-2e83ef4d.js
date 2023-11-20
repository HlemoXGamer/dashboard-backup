import{g as C}from"./deliveries-f501184f.js";import{g as I}from"./deliveries-eaec4b1e.js";import{D as O,l as h,O as P,aP as S,R as B,r as $,o as w,b,w as r,q as d,s as m,G as R,H as i,y as l,t as A,z as N,n as E,a1 as F,A as U,I as j}from"./index-1dd32ede.js";import{V as z}from"./VDataTable-a523acba.js";import{V as M}from"./VChip-ce0ef404.js";import{V as W}from"./VPagination-15630d82.js";const Q={__name:"OrdersTable",props:{filters:{type:Object,default:{}},orders:{type:Array,default:[]},meta:{type:Object,default:{}},gettingOrders:{type:Boolean,default:!1}},setup(y,{emit:g}){var f;const n=y,t=O().t,p=(f=JSON.parse(localStorage.getItem("userData")))==null?void 0:f.type,_=h([]),D=P(()=>{let a=[];return a.push({title:t("Order Number"),key:"id"}),S().fullPath.includes("/performance")?a.push({title:t("Total"),key:"total"},{title:t("Total"),key:"total"},{title:t("City"),key:"address_city"},{title:t("Created Date"),key:"created_date",align:"center"},{title:t("Delivery Date"),key:"delivery_date",align:"center"},{title:t("Pending"),key:"created",align:"center"},{title:t("In Progress"),key:"in_progress",align:"center"},{title:t("Ready For Delivery"),key:"ready_to_delivery",align:"center"},{title:t("On The Way"),key:"on_the_way",align:"center"},{title:t("Delivered"),key:"delivered",align:"center"},{title:t("Actions"),align:"center",sortable:!1,key:"actions"}):a.push({title:"SalesID AX",key:"salesId_ax"},{title:t("Total"),key:"total"},{title:t("Branch"),key:"branch_name"},{title:t("Paid Date"),key:"paid_at.day",align:"center"},{title:t("Paid Time"),key:"paid_at.time",align:"center"},{title:t("Delivery Date"),key:"delivery_date",align:"center"},{title:t("Delivery Time"),key:"delivery_time",align:"center"},{title:t("Estimated Time"),key:"est_time.time",align:"center"},{title:t("Estimated Date"),key:"est_time.day",align:"center"},{title:t("Agent"),key:"agent"},{title:t("Status"),key:"status",sortable:!1,align:"center"},{title:t("Refund"),key:"refund"},{title:t("Order Type"),key:"order_type",align:"center",sortable:!1},{title:t("User Type"),key:"user_type",align:"center",sortable:!1},{title:t("Actions"),align:"center",sortable:!1,key:"actions"}),a}),V=()=>{p=="admin"?C().then(({data:a})=>{_.value=a.data}):p=="agent"&&I().then(({data:a})=>{_.value=a.data})},o=(a,s)=>a.filter(e=>e.status==s).length>0?a.filter(e=>e.status==s)[0].time:0,u=a=>{if(a=="created")return{color:"warning",text:t("Created")};if(a=="ready_for_delivery")return{color:"#2FE9D0",text:t("Ready For Delivery")};if(a=="in_progress")return{color:"#E9982F",text:t("In Progress")};if(a=="cancelled")return{color:"danger",text:t("Cancelled")};if(a=="on_the_way")return{color:"grey lighten-3 black--text",text:t("On The Way")};if(a=="paid")return{color:"success",text:t("Paid")};if(a=="delivered")return{color:"blue-lighten-1",text:t("Delivered")}},c=h(),x=()=>{g("update-sort-by",c.value)},T=a=>{g("update-page-n",a)};return B(()=>{V()}),(a,s)=>{const v=$("IconBtn");return w(),b(j,{rounded:"0",elevation:"0",class:"px-0 mb-0 pb-5 mt-6 pt-5",loading:y.gettingOrders},{default:r(()=>[d(m(z),{"sort-by":m(c),"onUpdate:sortBy":[s[1]||(s[1]=e=>R(c)?c.value=e:null),x],items:y.orders,headers:m(D),"items-per-page":15},{"item.created_date":r(({item:e})=>[i(l(e.raw.created_at.day),1)]),"item.created_time":r(({item:e})=>[i(l(e.raw.created_at.time),1)]),"item.delivery_date":r(({item:e})=>[i(l(e.raw.delivery_date.day),1)]),"item.delivery_time":r(({item:e})=>[i(l(e.raw.delivery_date.time),1)]),"item.created":r(({item:e})=>[i(l(o(e.raw.order_statuses,"created")),1)]),"item.in_progress":r(({item:e})=>[i(l(o(e.raw.order_statuses,"in_progress")),1)]),"item.ready_to_delivery":r(({item:e})=>[i(l(o(e.raw.order_statuses,"ready_to_delivery")),1)]),"item.on_the_way":r(({item:e})=>[i(l(o(e.raw.order_statuses,"on_the_way")),1)]),"item.delivered":r(({item:e})=>[i(l(o(e.raw.order_statuses,"delivered")),1)]),"item.status":r(({item:e})=>[d(M,{color:u(e.raw.status).color,class:A([`text-${u(e.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:r(()=>[i(l(u(e.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":r(({item:e})=>[d(v,{onClick:k=>a.$router.currentRoute.value.fullPath.includes("performance")?a.$router.push(`/performance/details/${e.raw.id}`):a.$router.push(`orders/${e.raw.id}`)},{default:r(()=>[d(N,{icon:"mdi-eye"})]),_:2},1032,["onClick"])]),"item.user_type":r(({item:e})=>[i(l(String(e.raw.user_type).replace(/^\w/,k=>k.toUpperCase()))+" ",1),E("small",null,l(e.raw.creator),1)]),bottom:r(()=>[d(F,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:r(()=>[n.meta.total?(w(),b(W,{key:0,"total-visible":"5",modelValue:n.meta.current_page,"onUpdate:modelValue":[s[0]||(s[0]=e=>n.meta.current_page=e),T],length:Math.ceil(n.meta.total/n.meta.per_page),disabled:n.gettingOrders},null,8,["modelValue","length","disabled"])):U("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"])}}};export{Q as _};
