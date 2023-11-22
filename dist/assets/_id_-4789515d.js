import{_ as fe}from"./AppDateTimePicker-a5e2f7c6.js";import{_ as ve,a as _e}from"./OrderDetails-64e6379c.js";import{ba as be,C as ye,D as ge,aV as he,l as o,aP as Ve,O as we,R as $e,o as R,c as J,q as l,w as t,I as ke,aX as K,H as _,y as d,az as C,s as e,G as B,W as m,U as p,n as b,A as xe,a$ as De,b0 as Se,b1 as $,bc as Ce,b3 as Be,z as Te,t as X,b as Ne,aZ as Z,a_ as Ue}from"./index-5f1e036d.js";import{g as je}from"./branches-75c730bf.js";import{g as Ae}from"./deliveries-22598667.js";import{g as Oe}from"./areas-3a13c662.js";import{s as Ie,u as Q,e as Re,f as Fe}from"./orders-9ecf0b1d.js";import{V as Pe}from"./VDialog-c2a8b0a4.js";import{V as Me}from"./VSpacer-2f9f9117.js";import{V as ee}from"./VChip-c99b15f1.js";import{V as F}from"./VSelect-38820d74.js";import"./VDivider-ca899a5a.js";import"./DialogCloseBtn-35cd036e.js";import"./VOverlay-315386a7.js";import"./lazy-9d6f5b63.js";import"./dialog-transition-c18f9302.js";import"./VList-99b9fa4c.js";import"./ssrBoot-dcc7d968.js";import"./VMenu-9df5e73f.js";import"./VCheckboxBtn-0b3e4e8e.js";import"./VSelectionControl-82ad58b5.js";async function ze(P){return be.post("/agent/sendSmS",P)}const Le={class:"text-h3 pt-3 pb-0 mb-3 text-left"},qe={key:0,class:"text-h5 pt-3 pb-0 mb-3 text-right"},He={class:"text-h4 pt-3 mb-4"},We={class:"text-h4 pt-3 mb-1"},Ye={class:"text-h4 pt-3 mb-1"},Ee={class:"text-h4 pt-3 mb-3"},Ge={class:"text-h4 pt-3 mb-3"},ae={__name:"[id]",setup(P){var Y;const y=ge().t,f=he(),T=o(!1),g=o(!1),N=o(!1),U=o(!1),k=o(!1),V=Ve().params.id,r=o([]),A=o([]),w=o(null),c=o(null),M=o([]),x=o(null),j=o(null),D=o(null),z=o(null),L=o(null),q=o(0),H=o(),i=o({address_apartment:"",address_building_no:"",address_phone:"",address_street_name:"",address_floor:"",block_no:""}),le=async()=>{await Ie(V).then(a=>{var S;r.value=a.data.data,w.value=a.data.data.branch_id,c.value=a.data.data.status,j.value=a.data.data.status,x.value=a.data.data.delivery_man_id,D.value=(S=new Date(a.data.data.est_time))==null?void 0:S.getTime();let{address_apartment:s,address_building_no:u,address_phone:v,address_street_name:O,address_floor:I,block_no:n}=a.data.data;i.value={address_apartment:s,address_building_no:u,address_phone:v,address_street_name:O,address_floor:I,block_no:n}})},te=we(()=>{let a=[{name:y("Created"),value:"created",disabled:!0},{name:y("Paid"),value:"paid",disabled:!0},{name:y("In Progress"),value:"in_progress"},{name:y("Ready For Delivery"),value:"ready_for_delivery",disabled:!0},{name:y("On The Way"),value:"on_the_way",disabled:!0},{name:y("Delivered"),value:"delivered",disabled:!0},{name:y("Cancelled"),value:"cancelled",disabled:!0}],s=a.map(u=>u.value).indexOf(j.value);for(let u=0;u<=s;u++)a[u].disabled=!0;return a}),se=async()=>{await je().then(({data:a})=>{A.value=a.data.filter(u=>u.is_active===1);const s=A.value.find(u=>u.id===w.value);z.value=new Date().toTimeString().slice(0,5),L.value=s.end,q.value+=1})},re=async()=>{await Ae().then(a=>{M.value=a.data.data})},ne=()=>{c.value!=="created"&&c.value!=="delivered"&&(g.value=!0)},oe=async()=>{var a;(a=H.value)==null||a.validate().then(async({valid:s})=>{if(s){T.value=!0;try{await Q(V,i.value),f.success("Order updated successfully"),T.value=!1}catch(u){f.error(u.response.data.message),T.value=!1}}})},W=async()=>{k.value=!0;try{await Q(V,{status:c.value,est_time:D.value}),f.success("Order updated successfully"),j.value=c.value,c.value==="in_progress"&&(await ze({status:c.value,phones:[r.address_phone],order_id:V}),f.success("SMS sent successfully")),k.value=!1,g.value=!1}catch(a){f.error(a.response.data.message),k.value=!1,g.value=!1}},de=async()=>{N.value=!0;try{setTimeout(async()=>{await Re({delivery_man_id:x.value,order_id:V}),f.success("Delivery man updated successfully"),N.value=!1},500)}catch(a){f.error(a.response.data.message),N.value=!1}},ue=async()=>{U.value=!0;try{await Fe({order_id:V,branch_id:w.value}),f.success("Order Branch updated successfully"),U.value=!1}catch(a){f.error(a.response.data.message),U.value=!1}},ie=o([]),me=(Y=JSON.parse(localStorage.getItem("userData")))==null?void 0:Y.type,ce=async()=>{try{const{data:a}=await Oe();ie.value=a.data}catch(a){console.log(a)}},pe=()=>{g.value=!1,c.value=j.value};return $e(()=>{me=="agent"&&(ce(),le(),se(),re())}),(a,s)=>{const u=ve,v=Ue,O=_e,I=fe;return R(),J("div",null,[l(Pe,{modelValue:e(g),"onUpdate:modelValue":s[1]||(s[1]=n=>B(g)?g.value=n:null),persistent:"",class:"v-dialog-sm"},{default:t(()=>[l(ke,{title:"Delivery Time"},{default:t(()=>[l(K,null,{default:t(()=>[_(d(a.$t("Are you sure that you want to change the status")),1)]),_:1}),l(K,{class:"d-flex justify-end gap-3 flex-wrap"},{default:t(()=>[l(C,{color:"secondary",variant:"tonal",onClick:s[0]||(s[0]=n=>pe())},{default:t(()=>[_(d(a.$t("Cancel")),1)]),_:1}),l(C,{onClick:W,loading:e(k)},{default:t(()=>[_(d(a.$t("Confirm")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{class:"mt-4 px-2",justify:"space-around"},{default:t(()=>[l(m,{class:"pt-0",cols:"12"},{default:t(()=>[l(p,{align:"center",justify:"space-between",class:"mx-0 my-0"},{default:t(()=>[b("p",Le,"#"+d(e(r).id),1),e(r).delivery_date?(R(),J("strong",qe,d(a.$t("Delivery Date"))+": "+d(e(r).delivery_date),1)):xe("",!0)]),_:1})]),_:1}),l(m,{class:"pt-0",cols:a.$vuetify.display.smAndDown?12:8},{default:t(()=>[l(u,{products:e(r).products},null,8,["products"]),l(m,{class:"mt-7 px-2 rounded pb-2",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[l(p,{class:"px-6 pt-3",align:"center",justify:"space-between"},{default:t(()=>[b("p",He,d(a.$t("Address Details")),1),l(Me),l(ee,{size:"default",label:"",class:"mr-3",color:"success"},{default:t(()=>[_(d(e(r).address_area),1)]),_:1}),l(ee,{size:"default",label:"",color:"primary"},{default:t(()=>[_(d(e(r).branch_name),1)]),_:1})]),_:1}),l(m,null,{default:t(()=>[l(m,null,{default:t(()=>[l(De,{ref_key:"addressForm",ref:H,onSubmit:Se(oe,["prevent"])},{default:t(()=>[l(p,{justify:"space-between",align:"start"},{default:t(()=>[l(v,{"prepend-inner-icon":"tabler-phone",label:a.$t("Phone Number"),rules:[e($),e(Ce),e(Be)],placeholder:"Phone Number",class:"flex-grow-1 mx-2 my-1",modelValue:e(i).address_phone,"onUpdate:modelValue":s[2]||(s[2]=n=>e(i).address_phone=n)},null,8,["label","rules","modelValue"]),l(v,{"prepend-inner-icon":"tabler-container",label:a.$t("Building Number"),rules:[e($)],placeholder:"Building Number",class:"flex-grow-1 mx-2 my-1",modelValue:e(i).address_building_no,"onUpdate:modelValue":s[3]||(s[3]=n=>e(i).address_building_no=n)},null,8,["label","rules","modelValue"])]),_:1}),l(p,{justify:"space-between",align:"start",class:"mt-6"},{default:t(()=>[l(v,{"prepend-inner-icon":"tabler-stairs",placeholder:"Floor",label:a.$t("Floor"),rules:[e($)],class:"flex-grow-1 mx-2 my-1",modelValue:e(i).address_floor,"onUpdate:modelValue":s[4]||(s[4]=n=>e(i).address_floor=n)},null,8,["label","rules","modelValue"]),l(v,{"prepend-inner-icon":"tabler-window",label:a.$t("Apartment"),rules:[e($)],placeholder:"Apartment",class:"flex-grow-1 mx-2 my-1",modelValue:e(i).address_apartment,"onUpdate:modelValue":s[5]||(s[5]=n=>e(i).address_apartment=n)},null,8,["label","rules","modelValue"])]),_:1}),l(p,{justify:"space-between",align:"start",class:"mt-6"},{default:t(()=>[l(v,{"prepend-inner-icon":"tabler-road",placeholder:"Street Name",rules:[e($)],label:a.$t("Street Name"),class:"flex-grow-1 mx-2 my-1",modelValue:e(i).address_street_name,"onUpdate:modelValue":s[6]||(s[6]=n=>e(i).address_street_name=n)},null,8,["rules","label","modelValue"]),l(v,{"prepend-inner-icon":"tabler-number",rules:[e($)],label:a.$t("Block Number"),placeholder:"Block Number",class:"flex-grow-1 mx-2 my-1",modelValue:e(i).block_no,"onUpdate:modelValue":s[7]||(s[7]=n=>e(i).block_no=n)},null,8,["rules","label","modelValue"])]),_:1}),l(C,{class:"mt-7",block:"",type:"submit",loading:e(T)},{default:t(()=>[l(Te,{icon:"tabler-check"}),_(" "+d(a.$t("Update")),1)]),_:1},8,["loading"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1}),l(m,{class:"mt-7 px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[b("p",We,d(a.$t("Customer Review")),1),l(m,null,{default:t(()=>[b("p",{class:X(["text-h5 pt-0 mb-0",e(r).review!==null?"text-left":"text-center"])},d(e(r).complain!==null?e(r).complain:"No Reviews Yet!"),3)]),_:1})]),_:1}),l(m,{class:"mt-7 px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[b("p",Ye,d(a.$t("Customer Complaint")),1),l(m,null,{default:t(()=>[b("p",{class:X(["text-h5 pt-0 mb-0",e(r).complain!==null?"text-left":"text-center"])},d(e(r).complain!==null?e(r).complain:"No Complains Yet!"),3)]),_:1})]),_:1})]),_:1},8,["cols"]),l(m,{class:"pt-0 mt-0",cols:a.$vuetify.display.smAndDown?12:4},{default:t(()=>{var n,S,E,G;return[l(O,{total:e(r).total,paymentMethod:e(r).payment_method,subtotal:e(r).sub_total,newtotal:(n=e(r))==null?void 0:n.new_total,discountType:(S=e(r))==null?void 0:S.discount_type,discountRate:(E=e(r))==null?void 0:E.discount_rate,deliveryCost:(G=e(r))==null?void 0:G.delivery_cost},null,8,["total","paymentMethod","subtotal","newtotal","discountType","discountRate","deliveryCost"]),l(m,{class:"mt-6 px-5 rounded pb-8 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[b("p",Ee,d(a.$t("Branch")),1),l(m,null,{default:t(()=>[l(p,{justify:"space-between",align:"center"},{default:t(()=>[l(F,{items:e(A),"item-value":"id","item-title":"name_en",modelValue:e(w),"onUpdate:modelValue":s[8]||(s[8]=h=>B(w)?w.value=h:null),"prepend-inner-icon":"tabler-building-store",placeholder:"Select a Branch",label:a.$t("Branch"),style:{width:"100%"},variant:"outlined"},null,8,["items","modelValue","label"]),l(C,{class:"mt-3",loading:e(U),block:"",onClick:ue},{default:t(()=>[_(d(a.$t("Update")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}),l(m,{class:"mt-6 px-5 rounded pb-8 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[b("p",Ge,d(a.$t("Status")),1),l(m,null,{default:t(()=>[l(p,{justify:"space-between",align:"center"},{default:t(()=>[l(F,{"onUpdate:modelValue":[ne,s[9]||(s[9]=h=>B(c)?c.value=h:null)],items:e(te),"item-value":"value","item-title":"name","item-props":!0,modelValue:e(c),"prepend-inner-icon":"tabler-activity-heartbeat",placeholder:a.$t("Status"),label:a.$t("Status"),style:{width:"100%"},variant:"outlined"},null,8,["items","modelValue","placeholder","label"])]),_:1}),l(p,{justify:"space-between",align:"center",class:"mt-7"},{default:t(()=>[l(F,{disabled:"",loading:e(N),"onUpdate:modelValue":[de,s[10]||(s[10]=h=>B(x)?x.value=h:null)],items:e(M),"item-value":"id","item-title":"name",modelValue:e(x),"prepend-inner-icon":"tabler-truck-delivery",placeholder:"Delivery",label:"Delivery",style:{width:"100%"},variant:"outlined"},null,8,["loading","items","modelValue"])]),_:1}),l(p,{justify:"space-between",align:"center",class:"mt-7"},{default:t(()=>[(R(),Ne(I,{disabled:"",key:e(q),modelValue:e(D),"onUpdate:modelValue":s[11]||(s[11]=h=>B(D)?D.value=h:null),"prepend-inner-icon":"tabler-calendar",placeholder:"Delivery Time",class:"flex-grow-1",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:e(z),maxTime:e(L)}},null,8,["modelValue","config"])),l(C,{class:"mt-4",block:"",onClick:W,loading:e(k),disabled:e(c)=="delivered"||e(c)=="paid"},{default:t(()=>[_(d(a.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]}),_:1},8,["cols"])]),_:1})])}}};typeof Z=="function"&&Z(ae);const ba=ye(ae,[["__scopeId","data-v-40c5e8a2"]]);export{ba as default};
