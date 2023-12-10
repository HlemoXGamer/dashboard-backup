<<<<<<<< HEAD:dist/assets/AgentOrdersTable-f08e89c2.js
import{g as x}from"./deliveries-7041a825.js";import{l as p,D,O as w,R as I,r as C,o as f,b as g,w as r,q as o,s as c,G as O,t as B,H as $,y as S,z as P,U as R,A,I as N}from"./index-f1c459eb.js";import{V as T}from"./VDataTable-890775ee.js";import{V as z}from"./VChip-d3e3dc93.js";import{V as j}from"./VPagination-419c1198.js";const J={__name:"AgentOrdersTable",props:{filters:{type:Object,default:{}},orders:{type:Array,default:[]},meta:{type:Object,default:{}},gettingOrders:{type:Boolean,default:!1}},setup(i,{emit:u}){var m;const l=i,y=(m=JSON.parse(localStorage.getItem("userData")))==null?void 0:m.type,b=p([]),e=D().t,v=w(()=>[{title:e("Order Number"),key:"id"},{title:e("SalesID AX"),sortable:!1,key:"salesId_ax"},{title:e("Total"),sortable:!1,key:"total"},{title:e("Branch"),sortable:!1,key:"branch_name"},{title:e("Paid Date"),sortable:!1,key:"paid_at",align:"center"},{title:e("Delivery Date"),sortable:!1,key:"delivery_date",align:"center"},{title:e("Status"),key:"status",sortable:!1,align:"center"},{title:e("Actions"),align:"center",sortable:!1,key:"actions"}]),h=()=>{x().then(({data:t})=>{b.value=t.data})},d=t=>{if(t=="created")return{color:"warning",text:e("Created")};if(t=="ready_for_delivery")return{color:"#2FE9D0",text:e("Ready For Delivery")};if(t=="in_progress")return{color:"#E9982F",text:e("In Progress")};if(t=="cancelled")return{color:"danger",text:e("Cancelled")};if(t=="on_the_way")return{color:"grey lighten-3 black--text",text:e("On The Way")};if(t=="paid")return{color:"success",text:e("Paid")};if(t=="delivered")return{color:"blue-lighten-1",text:e("Delivered")}},s=p(),V=()=>{u("update-sort-by",s.value)},_=t=>{u("update-page-n",t)};return I(()=>{y=="agent"&&h()}),(t,n)=>{const k=C("IconBtn");return f(),g(N,{elevation:"0",class:"px-0 mb-0 pb-5 mt-6 pt-5",loading:i.gettingOrders},{default:r(()=>[o(c(T),{"sort-by":c(s),"onUpdate:sortBy":[n[1]||(n[1]=a=>O(s)?s.value=a:null),V],items:i.orders,headers:c(v),"items-per-page":15},{"item.status":r(({item:a})=>[o(z,{color:d(a.raw.status).color,class:B([`text-${d(a.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:r(()=>[$(S(d(a.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":r(({item:a})=>[o(k,{onClick:U=>t.$router.currentRoute.value.fullPath.includes("my-orders")?t.$router.push(`/my-orders/${a.raw.id}`):t.$router.push(`/orders/${a.raw.id}`)},{default:r(()=>[o(P,{icon:"mdi-eye"})]),_:2},1032,["onClick"])]),bottom:r(()=>[o(R,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:r(()=>[l.meta.total?(f(),g(j,{key:0,"total-visible":"5",modelValue:l.meta.current_page,"onUpdate:modelValue":[n[0]||(n[0]=a=>l.meta.current_page=a),_],length:Math.ceil(l.meta.total/l.meta.per_page),disabled:l.gettingOrders,size:35},null,8,["modelValue","length","disabled"])):A("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"])}}};export{J as _};
========
import{g as x}from"./deliveries-2d85bf8b.js";import{l as p,D,O as w,R as I,r as C,o as f,b as g,w as r,q as o,s as c,G as O,t as B,H as $,y as S,z as P,U as R,A,I as N}from"./index-ad06e79a.js";import{V as T}from"./VDataTable-c727e2d1.js";import{V as z}from"./VChip-5e82d9df.js";import{V as j}from"./VPagination-d112c5cb.js";const J={__name:"AgentOrdersTable",props:{filters:{type:Object,default:{}},orders:{type:Array,default:[]},meta:{type:Object,default:{}},gettingOrders:{type:Boolean,default:!1}},setup(i,{emit:u}){var m;const l=i,y=(m=JSON.parse(localStorage.getItem("userData")))==null?void 0:m.type,b=p([]),e=D().t,v=w(()=>[{title:e("Order Number"),key:"id"},{title:e("SalesID AX"),sortable:!1,key:"salesId_ax"},{title:e("Total"),sortable:!1,key:"total"},{title:e("Branch"),sortable:!1,key:"branch_name"},{title:e("Paid Date"),sortable:!1,key:"paid_at",align:"center"},{title:e("Delivery Date"),sortable:!1,key:"delivery_date",align:"center"},{title:e("Status"),key:"status",sortable:!1,align:"center"},{title:e("Actions"),align:"center",sortable:!1,key:"actions"}]),h=()=>{x().then(({data:t})=>{b.value=t.data})},d=t=>{if(t=="created")return{color:"warning",text:e("Created")};if(t=="ready_for_delivery")return{color:"#2FE9D0",text:e("Ready For Delivery")};if(t=="in_progress")return{color:"#E9982F",text:e("In Progress")};if(t=="cancelled")return{color:"danger",text:e("Cancelled")};if(t=="on_the_way")return{color:"grey lighten-3 black--text",text:e("On The Way")};if(t=="paid")return{color:"success",text:e("Paid")};if(t=="delivered")return{color:"blue-lighten-1",text:e("Delivered")}},s=p(),V=()=>{u("update-sort-by",s.value)},_=t=>{u("update-page-n",t)};return I(()=>{y=="agent"&&h()}),(t,n)=>{const k=C("IconBtn");return f(),g(N,{elevation:"0",class:"px-0 mb-0 pb-5 mt-6 pt-5",loading:i.gettingOrders},{default:r(()=>[o(c(T),{"sort-by":c(s),"onUpdate:sortBy":[n[1]||(n[1]=a=>O(s)?s.value=a:null),V],items:i.orders,headers:c(v),"items-per-page":15},{"item.status":r(({item:a})=>[o(z,{color:d(a.raw.status).color,class:B([`text-${d(a.raw.status).color}`,"font-weight-medium"]),size:"small"},{default:r(()=>[$(S(d(a.raw.status).text),1)]),_:2},1032,["color","class"])]),"item.actions":r(({item:a})=>[o(k,{onClick:U=>t.$router.currentRoute.value.fullPath.includes("my-orders")?t.$router.push(`/my-orders/${a.raw.id}`):t.$router.push(`/orders/${a.raw.id}`)},{default:r(()=>[o(P,{icon:"mdi-eye"})]),_:2},1032,["onClick"])]),bottom:r(()=>[o(R,{class:"mt-3 mb-0 pb-0 mx-0",align:"center",justify:"end"},{default:r(()=>[l.meta.total?(f(),g(j,{key:0,"total-visible":"5",modelValue:l.meta.current_page,"onUpdate:modelValue":[n[0]||(n[0]=a=>l.meta.current_page=a),_],length:Math.ceil(l.meta.total/l.meta.per_page),disabled:l.gettingOrders,size:35},null,8,["modelValue","length","disabled"])):A("",!0)]),_:1})]),_:1},8,["sort-by","items","headers"])]),_:1},8,["loading"])}}};export{J as _};
>>>>>>>> master:dist/assets/AgentOrdersTable-0593d422.js
