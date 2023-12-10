<<<<<<<< HEAD:dist/assets/OrdersTable-ddcc9939.js
import{g as C}from"./deliveries-d5bb4aa3.js";import{g as I}from"./deliveries-7041a825.js";import{D as O,l as h,O as P,aP as S,R as B,r as $,o as w,b,w as a,q as d,s as m,G as R,H as i,y as l,t as A,z as N,n as U,U as E,A as F,I as j}from"./index-f1c459eb.js";import{V as z}from"./VDataTable-890775ee.js";import{V as M}from"./VChip-d3e3dc93.js";import{V as W}from"./VPagination-419c1198.js";const Q={__name:"OrdersTable",props:{filters:{type:Object,default:{}},orders:{type:Array,default:[]},meta:{type:Object,default:{}},gettingOrders:{type:Boolean,default:!1}},setup(y,{emit:g}){var f;const n=y,t=O().t,p=(f=JSON.parse(localStorage.getItem("userData")))==null?void 0:f.type,_=h([]),D=P(()=>{let r=[];return r.push({title:t("Order Number"),key:"id"}),S().fullPath.includes("/performance")?r.push({title:t("Total"),key:"total"},{title:t("Total"),key:"total"},{title:t("City"),key:"address_city"},{title:t("Created Date"),key:"created_date",align:"center"},{title:t("Delivery Date"),key:"delivery_date",align:"center"},{title:t("Pending"),key:"created",align:"center"},{title:t("In Progress"),key:"in_progress",align:"center"},{title:t("Ready For Delivery"),key:"ready_to_delivery",align:"center"},{title:t("On The Way"),key:"on_the_way",align:"center"},{title:t("Delivered"),key:"delivered",align:"center"},{title:t("Actions"),align:"center",sortable:!1,key:"actions"}):r.push({title:"SalesID AX",key:"salesId_ax"},{title:t("Total"),key:"total"},{title:t("Branch"),key:"branch_name"},{title:t("Paid Date"),key:"paid_at.day",align:"center"},{title:t("Paid Time"),key:"paid_at.time",align:"center"},{title:t("Delivery Date"),key:"delivery_date",align:"center"},{title:t("Delivery Time"),key:"delivery_time",align:"center"},{title:t("Estimated Time"),key:"est_time.time",align:"center"},{title:t("Estimated Date"),key:"est_time.day",align:"center"},{title:t("Agent"),key:"agent"},{title:t("Status"),key:"status",sortable:!1,align:"center"},{title:t("Refund"),key:"refund"},{title:t("Order Type"),key:"order_type",align:"center",sortable:!1},{title:t("User Type"),key:"user_type",align:"center",sortable:!1},{title:t("Actions"),align:"center",sortable:!1,key:"actions"}),r}),V=()=>{p=="admin"?C().then(({data:r})=>{_.value=r.data}):p=="agent"&&I().then(({data:r})=>{_.value=r.data})},o=(r,s)=>r.filter(e=>e.status==s).length>0?r.filter(e=>e.status==s)[0].time:0,u=r=>{if(r=="created")return{color:"warning",text:t("Created")};if(r=="ready_for_delivery")return{color:"#2FE9D0",text:t("Ready For Delivery")};if(r=="in_progress")return{color:"#E9982F",text:t("In Progress")};if(r=="cancelled")return{color:"danger",text:t("Cancelled")};if(r=="on_the_way")return{color:"grey lighten-3 black--text",text:t("On The Way")};if(r=="paid")return{color:"success",text:t("Paid")};if(r=="delivered")return{color:"blue-lighten-1",text:t("Delivered")}},c=h(),x=()=>{g("update-sort-by",c.value)},T=r=>{g("update-page-n",r)};return B(()=>{V()}),(r,s)=>{const v=$("IconBtn");return w(),b(j,{rounded:"0",elevation:"0",class:"px-0 mb-0 pb-5 mt-6 pt-5",loading:y.gettingOrders},{default:a(()=>[d(m(z),{"sort-by":m(c),"onUpdate:sortBy":[s[1]||(s[1]=e=>R(c)?c.value=e:null),x],items:y.orders,headers:m(D),"items-per-page":15},{"item.created_date":a(({item:e})=>[i(l(e.raw.created_at.day),1)]),"item.created_time":a(({item:e})=>[i(l(e.raw.created_at.time),1)]),"item.delivery_date":a(({item:e})=>[i(l(e.raw.delivery_date.day),1)]),"item.delivery_time":a(({item:e})=>[i(l(e.raw.delivery_date.time),1)]),"item.created":a(({item:e})=>[i(l(o(e.raw.order_statuses,"created")),1)]),"item.in_progress":a(({item:e})=>[i(l(o(e.raw.order_statuses,"in_progress")),1)]),"item.ready_to_delivery":a(({item:e})=>[i(l(o(e.raw.order_statuses,"ready_to_delivery")),1)]),"item.on_the_way":a(({item:e})=>[i(l(o(e.raw.order_statuses,"on_the_way")),1)]),"item.delivered":a(({item:e})=>[i(l(o(e.raw.order_statuses,"delivered")),1)]),"item.status":a(({item:e})=>[d(M,{color:u(e.raw.status).color,class:A([`text-${u(e.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:a(()=>[i(l(u(e.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":a(({item:e})=>[d(v,{onClick:k=>r.$router.currentRoute.value.fullPath.includes("performance")?r.$router.push(`/performance/details/${e.raw.id}`):r.$router.push(`orders/${e.raw.id}`)},{default:a(()=>[d(N,{icon:"mdi-eye"})]),_:2},1032,["onClick"])]),"item.user_type":a(({item:e})=>[i(l(String(e.raw.user_type).replace(/^\w/,k=>k.toUpperCase()))+" ",1),U("small",null,l(e.raw.creator),1)]),bottom:a(()=>[d(E,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:a(()=>[n.meta.total?(w(),b(W,{key:0,"total-visible":"5",modelValue:n.meta.current_page,"onUpdate:modelValue":[s[0]||(s[0]=e=>n.meta.current_page=e),T],length:Math.ceil(n.meta.total/n.meta.per_page),disabled:n.gettingOrders},null,8,["modelValue","length","disabled"])):F("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"])}}};export{Q as _};
========
import{g as C}from"./deliveries-8822c364.js";import{g as I}from"./deliveries-2d85bf8b.js";import{D as O,l as h,O as P,aP as S,R as B,r as $,o as w,b,w as a,q as d,s as m,G as R,H as i,y as l,t as A,z as N,n as U,U as E,A as F,I as j}from"./index-ad06e79a.js";import{V as z}from"./VDataTable-c727e2d1.js";import{V as M}from"./VChip-5e82d9df.js";import{V as W}from"./VPagination-d112c5cb.js";const Q={__name:"OrdersTable",props:{filters:{type:Object,default:{}},orders:{type:Array,default:[]},meta:{type:Object,default:{}},gettingOrders:{type:Boolean,default:!1}},setup(y,{emit:g}){var f;const n=y,t=O().t,p=(f=JSON.parse(localStorage.getItem("userData")))==null?void 0:f.type,_=h([]),D=P(()=>{let r=[];return r.push({title:t("Order Number"),key:"id"}),S().fullPath.includes("/performance")?r.push({title:t("Total"),key:"total"},{title:t("Total"),key:"total"},{title:t("City"),key:"address_city"},{title:t("Created Date"),key:"created_date",align:"center"},{title:t("Delivery Date"),key:"delivery_date",align:"center"},{title:t("Pending"),key:"created",align:"center"},{title:t("In Progress"),key:"in_progress",align:"center"},{title:t("Ready For Delivery"),key:"ready_to_delivery",align:"center"},{title:t("On The Way"),key:"on_the_way",align:"center"},{title:t("Delivered"),key:"delivered",align:"center"},{title:t("Actions"),align:"center",sortable:!1,key:"actions"}):r.push({title:"SalesID AX",key:"salesId_ax"},{title:t("Total"),key:"total"},{title:t("Branch"),key:"branch_name"},{title:t("Paid Date"),key:"paid_at.day",align:"center"},{title:t("Paid Time"),key:"paid_at.time",align:"center"},{title:t("Delivery Date"),key:"delivery_date",align:"center"},{title:t("Delivery Time"),key:"delivery_time",align:"center"},{title:t("Estimated Time"),key:"est_time.time",align:"center"},{title:t("Estimated Date"),key:"est_time.day",align:"center"},{title:t("Agent"),key:"agent"},{title:t("Status"),key:"status",sortable:!1,align:"center"},{title:t("Refund"),key:"refund"},{title:t("Order Type"),key:"order_type",align:"center",sortable:!1},{title:t("User Type"),key:"user_type",align:"center",sortable:!1},{title:t("Actions"),align:"center",sortable:!1,key:"actions"}),r}),V=()=>{p=="admin"?C().then(({data:r})=>{_.value=r.data}):p=="agent"&&I().then(({data:r})=>{_.value=r.data})},o=(r,s)=>r.filter(e=>e.status==s).length>0?r.filter(e=>e.status==s)[0].time:0,u=r=>{if(r=="created")return{color:"warning",text:t("Created")};if(r=="ready_for_delivery")return{color:"#2FE9D0",text:t("Ready For Delivery")};if(r=="in_progress")return{color:"#E9982F",text:t("In Progress")};if(r=="cancelled")return{color:"danger",text:t("Cancelled")};if(r=="on_the_way")return{color:"grey lighten-3 black--text",text:t("On The Way")};if(r=="paid")return{color:"success",text:t("Paid")};if(r=="delivered")return{color:"blue-lighten-1",text:t("Delivered")}},c=h(),x=()=>{g("update-sort-by",c.value)},T=r=>{g("update-page-n",r)};return B(()=>{V()}),(r,s)=>{const v=$("IconBtn");return w(),b(j,{rounded:"0",elevation:"0",class:"px-0 mb-0 pb-5 mt-6 pt-5",loading:y.gettingOrders},{default:a(()=>[d(m(z),{"sort-by":m(c),"onUpdate:sortBy":[s[1]||(s[1]=e=>R(c)?c.value=e:null),x],items:y.orders,headers:m(D),"items-per-page":15},{"item.created_date":a(({item:e})=>[i(l(e.raw.created_at.day),1)]),"item.created_time":a(({item:e})=>[i(l(e.raw.created_at.time),1)]),"item.delivery_date":a(({item:e})=>[i(l(e.raw.delivery_date.day),1)]),"item.delivery_time":a(({item:e})=>[i(l(e.raw.delivery_date.time),1)]),"item.created":a(({item:e})=>[i(l(o(e.raw.order_statuses,"created")),1)]),"item.in_progress":a(({item:e})=>[i(l(o(e.raw.order_statuses,"in_progress")),1)]),"item.ready_to_delivery":a(({item:e})=>[i(l(o(e.raw.order_statuses,"ready_to_delivery")),1)]),"item.on_the_way":a(({item:e})=>[i(l(o(e.raw.order_statuses,"on_the_way")),1)]),"item.delivered":a(({item:e})=>[i(l(o(e.raw.order_statuses,"delivered")),1)]),"item.status":a(({item:e})=>[d(M,{color:u(e.raw.status).color,class:A([`text-${u(e.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:a(()=>[i(l(u(e.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":a(({item:e})=>[d(v,{onClick:k=>r.$router.currentRoute.value.fullPath.includes("performance")?r.$router.push(`/performance/details/${e.raw.id}`):r.$router.push(`orders/${e.raw.id}`)},{default:a(()=>[d(N,{icon:"mdi-eye"})]),_:2},1032,["onClick"])]),"item.user_type":a(({item:e})=>[i(l(String(e.raw.user_type).replace(/^\w/,k=>k.toUpperCase()))+" ",1),U("small",null,l(e.raw.creator),1)]),bottom:a(()=>[d(E,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:a(()=>[n.meta.total?(w(),b(W,{key:0,"total-visible":"5",modelValue:n.meta.current_page,"onUpdate:modelValue":[s[0]||(s[0]=e=>n.meta.current_page=e),T],length:Math.ceil(n.meta.total/n.meta.per_page),disabled:n.gettingOrders},null,8,["modelValue","length","disabled"])):F("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"])}}};export{Q as _};
>>>>>>>> master:dist/assets/OrdersTable-83bd1d27.js
