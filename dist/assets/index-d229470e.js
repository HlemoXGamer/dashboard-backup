import{_ as L}from"./AgentOrdersTable-7fb5d5b1.js";import{_ as W}from"./AppDateTimePicker-a5e2f7c6.js";import{D as H,l as i,O as k,R as J,o as Y,b as Z,w as n,q as s,W as D,U as y,n as G,y as w,az as V,z as K,H as S,t as u,s as t,aY as m,aZ as P,a6 as U,a_ as Q}from"./index-5f1e036d.js";import{g as X}from"./branches-75c730bf.js";import{g as _}from"./deliveries-22598667.js";import{a as O}from"./orders-9ecf0b1d.js";import{V as ee}from"./VSpacer-2f9f9117.js";import{V as x}from"./VSelect-38820d74.js";import"./VDataTable-abff0085.js";import"./VCheckboxBtn-0b3e4e8e.js";import"./VSelectionControl-82ad58b5.js";import"./VList-99b9fa4c.js";import"./ssrBoot-dcc7d968.js";import"./VDivider-ca899a5a.js";import"./filter-4e25312c.js";import"./VTable-0f962fff.js";import"./VChip-c99b15f1.js";import"./VPagination-dbecc13a.js";import"./dialog-transition-c18f9302.js";import"./VMenu-9df5e73f.js";import"./VOverlay-315386a7.js";import"./lazy-9d6f5b63.js";const le={class:"text-h4 pt-3 pb-2 px-3"},ae={__name:"index",setup(te){var F;const c=H().t,T=i([]),B=i([]),v=i(),o=i(!1),g=i(!0),f=i([]);i(!1);const l=i({searchTerm:"",selectedBranch:[],selectedStatus:"paid",selectedOrder:[],selectedPhone:[],selectedDelivery:[],selectedDateFrom:[],selectedDateTo:[]}),j=k(()=>[{name:c("Created"),value:"created"},{name:c("Paid"),value:"paid"},{name:c("In Progress"),value:"in_progress"},{name:c("Ready For Delivery"),value:"ready_for_delivery"},{name:c("On The Way"),value:"on_the_way"},{name:c("Delivered"),value:"delivered"},{name:c("Cancelled"),value:"cancelled"}]),C=(F=JSON.parse(localStorage.getItem("userData")))==null?void 0:F.type,b=i(),I=e=>{if(o.value=!0,g.value===!0){const a=new FormData;Object.entries($().filters).forEach(([d,h])=>{a.append(d,h)}),a.append("page",e),a.append("limit",15);const p=new URLSearchParams(a).toString();o.value=!0,g.value=!0,U.get(`/agent/my-orders?${p}`).then(({data:d})=>{f.value=d.data,v.value=d.meta}).finally(()=>{o.value=!1})}else O({page:e,limit:15,sortBy:b.value}).then(({data:a})=>{f.value=a.data,v.value=a.meta}).finally(()=>{o.value=!1})},N=e=>{b.value=e},R=()=>{_().then(({data:e,meta:a})=>{T.value=e.data})},z=()=>{o.value=!0,O({page:1,limit:15,sortBy:b.value,status:l.value.selectedStatus}).then(({data:e})=>{f.value=e.data,v.value=e.meta}).finally(()=>{o.value=!1})},q=()=>{X().then(({data:e,meta:a})=>{B.value=e.data})},$=()=>{let e={};return l.value.searchTerm!==""&&(e.productName=l.value.searchTerm),l.value.selectedBranch!==""&&l.value.selectedBranch.length==null&&(e.branch=l.value.selectedBranch),l.value.selectedStatus!==""&&l.value.selectedStatus.length&&(e.status=l.value.selectedStatus),l.value.selectedOrder!==""&&l.value.selectedOrder.length&&(e.orderId=l.value.selectedOrder),l.value.selectedPhone!==""&&l.value.selectedPhone.length&&(e.phone=l.value.selectedPhone),l.value.selectedDelivery!==""&&l.value.selectedDelivery.length==null&&(e.delivery=l.value.selectedDelivery),l.value.selectedDateFrom!==""&&l.value.selectedDateFrom!==null&&l.value.selectedDateFrom.length>0&&(e.from=l.value.selectedDateFrom),l.value.selectedDateTo!==""&&l.value.selectedDateTo!==null&&l.value.selectedDateTo.length>0&&(e.to=l.value.selectedDateTo),{filters:e}},A=e=>{const a=new FormData;Object.entries(e).forEach(([d,h])=>{a.append(d,h)}),a.append("page",1),a.append("limit",15);const p=new URLSearchParams(a).toString();o.value=!0,g.value=!0,U.get(`/agent/my-orders?${p}`).then(({data:d})=>{f.value=d.data,v.value=d.meta}).finally(()=>{o.value=!1})},M=()=>{g.value=!1,l.value={searchTerm:"",selectedBranch:[],selectedStatus:[],selectedOrder:[],selectedPhone:[],selectedDelivery:[],selectedDateFrom:[],selectedDateTo:[]},o.value=!0,O({page:1,limit:15,sortBy:b.value}).then(({data:e})=>{f.value=e.data,v.value=e.meta}).finally(()=>{o.value=!1})},E=k(()=>Object.keys($().filters));return J(()=>{C=="agent"&&(R(),z(),q())}),(e,a)=>{const p=Q,d=W,h=L;return Y(),Z(y,{class:"mt-4 px-4"},{default:n(()=>[s(D,{style:{"background-color":"rgb(var(--v-theme-surface))"},class:"rounded"},{default:n(()=>[s(y,{class:"pe-4 pt-3 ps-4",align:"center",justify:"space-between"},{default:n(()=>[G("p",le,w(e.$t("My Orders")),1),s(ee),s(y,{align:"center",justify:"end",class:"mx-0 my-0"},{default:n(()=>[s(V,{block:e.$vuetify.display.xs,class:"mt-lg-0 mt-md-0 mt-sm-0 mt-3",onClick:a[0]||(a[0]=r=>e.$router.push("my-orders/create/"))},{default:n(()=>[s(K,{start:"",icon:"tabler-plus"}),S(w(e.$t("Create Order")),1)]),_:1},8,["block"])]),_:1})]),_:1}),s(y,{class:u(e.$vuetify.display.xs?"flex-column":"")},{default:n(()=>[s(D,{cols:"12",class:"pe-0 v-col-sm-12 v-col-md-10 v-col-lg-10"},{default:n(()=>[s(y,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-5 pe-0",align:"center",justify:"space-between"},{default:n(()=>[s(p,{"prepend-inner-icon":"tabler-package",modelValue:t(l).searchTerm,"onUpdate:modelValue":a[1]||(a[1]=r=>t(l).searchTerm=r),placeholder:e.$t("Search by Name"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"]),s(x,{"prepend-inner-icon":"tabler-building-store",modelValue:t(l).selectedBranch,"onUpdate:modelValue":a[2]||(a[2]=r=>t(l).selectedBranch=r),items:t(B),"item-title":"name_en","return-object":!1,"item-value":"id",placeholder:e.$t("Select a Branch"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(x,{"prepend-inner-icon":"tabler-activity-heartbeat",modelValue:t(l).selectedStatus,"onUpdate:modelValue":a[3]||(a[3]=r=>t(l).selectedStatus=r),items:t(j),"item-title":"name","item-value":"value",placeholder:e.$t("Select a Status"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(p,{"prepend-inner-icon":"tabler-number",modelValue:t(l).selectedOrder,"onUpdate:modelValue":a[4]||(a[4]=r=>t(l).selectedOrder=r),placeholder:e.$t("Search by Order Number"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"])]),_:1}),s(y,{class:"ps-lg-1 pe-lg-0 ps-md-1 pe-md-0 ps-sm-1 pe-sm-0 mx-0 w-100 mt-8 pe-0",align:"center",justify:"space-between"},{default:n(()=>[s(p,{"prepend-inner-icon":"tabler-phone",modelValue:t(l).selectedPhone,"onUpdate:modelValue":a[5]||(a[5]=r=>t(l).selectedPhone=r),placeholder:e.$t("Search by Phone"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"]),s(x,{"prepend-inner-icon":"tabler-truck-delivery",modelValue:t(l).selectedDelivery,"onUpdate:modelValue":a[6]||(a[6]=r=>t(l).selectedDelivery=r),items:t(T),"item-value":"id","item-title":"name","return-object":!1,placeholder:e.$t("Select a Delivery"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","items","placeholder","class","style"]),s(d,{"prepend-inner-icon":"tabler-calendar",modelValue:t(l).selectedDateFrom,"onUpdate:modelValue":a[7]||(a[7]=r=>t(l).selectedDateFrom=r),placeholder:e.$t("From"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"]),s(d,{"prepend-inner-icon":"tabler-calendar",modelValue:t(l).selectedDateTo,"onUpdate:modelValue":a[8]||(a[8]=r=>t(l).selectedDateTo=r),placeholder:e.$t("To"),class:u(["mx-2 flex-grow-1",e.$vuetify.display.xs?"w-100":""]),style:m(e.$vuetify.display.xs?"width: 100%;":"")},null,8,["modelValue","placeholder","class","style"])]),_:1})]),_:1}),s(D,{cols:"12",class:"mt-5 v-col-sm-12 v-col-md-2 v-col-lg-2"},{default:n(()=>[s(V,{class:"mx-0",block:"",variant:"tonal",color:"warning","prepend-icon":"tabler-x",onClick:M,disabled:t(o)||!t(g)},{default:n(()=>[S(w(e.$t("Reset")),1)]),_:1},8,["disabled"]),s(V,{class:"mx-0 mt-5",block:"",variant:"tonal",color:"success","prepend-icon":"tabler-search",onClick:a[9]||(a[9]=r=>A($().filters)),disabled:!t(E).length||t(o)},{default:n(()=>[S(w(e.$t("Search")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["class"]),s(h,{gettingOrders:t(o),meta:t(v),orders:t(f),filters:$(),onUpdateSortBy:N,onUpdatePageN:I},null,8,["gettingOrders","meta","orders","filters"])]),_:1})]),_:1})}}};typeof P=="function"&&P(ae);export{ae as default};
