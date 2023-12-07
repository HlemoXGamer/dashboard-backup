import{D as me,O as ee,o as b,b as B,w as a,q as e,aX as C,s as u,I as T,l as y,R as ae,n as D,y as I,U as v,W as o,G as U,a_ as le,az as w,H as _,C as fe,aV as ce,aP as pe,E as X,c as N,F as L,a as R,aZ as Y,a8 as ye,a9 as ve}from"./index-682f2e6a.js";import{_ as te}from"./AppDateTimePicker-14c2d2c6.js";import{V as Ve}from"./VDataTable-67defd0e.js";import{g as be}from"./cities-3dd281b9.js";import{V as q}from"./VCombobox-c6183851.js";import{_ as ge}from"./DialogCloseBtn-df765faa.js";import{V as _e}from"./VDialog-5f724bb2.js";import{b as xe,d as Z,u as we}from"./branches-e8e8397c.js";import{a as De}from"./areas-987deb91.js";import{V as $e,a as K}from"./VTabs-e5eff2b4.js";import{a as Se,V as Q}from"./VWindowItem-50dc88fa.js";import{V as z}from"./VSwitch-a81da798.js";import"./VCheckboxBtn-691616ae.js";import"./VSelectionControl-112402b4.js";import"./VSelect-8789e440.js";import"./VList-3d2bc339.js";import"./ssrBoot-3ed9260a.js";import"./VDivider-30c85da5.js";import"./dialog-transition-21a01739.js";import"./VMenu-992f9162.js";import"./VOverlay-dba30eee.js";import"./lazy-adf178f7.js";import"./VChip-83fe915e.js";import"./filter-db90137a.js";import"./VTable-c0cceedf.js";const ke={__name:"BranchesViewTable",props:{data:{type:Array,default:[]},loading:{type:Boolean,default:!1}},setup(l){const p=me().t,i=ee(()=>[{title:p("Day"),key:"day"},{title:p("Time"),sortable:!1,key:"time"},{title:p("Item Name"),sortable:!1,key:"item_name"},{title:p("Action"),sortable:!1,key:"action"},{title:p("Details"),sortable:!1,key:"details"}]);return(t,m)=>(b(),B(T,{rounded:"lg",class:"pb-0 px-0",variant:"flat",loading:l.loading},{default:a(()=>[e(C,{class:"pa-0"},{default:a(()=>[e(u(Ve),{items:l.data,headers:u(i),"items-per-page":15,class:"pb-5 mt-0",title:"Branches Log"},null,8,["items","headers"])]),_:1})]),_:1},8,["loading"]))}},Ue={class:"text-h4 py-1 mb-3"},Be={__name:"BranchesViewSummary",props:{data:{type:Object,default:{}}},setup(l){const V=y([]),p=()=>{be().then(({data:i,meta:t})=>{V.value=i.data,console.log(V.value)})};return ae(()=>{p()}),(i,t)=>{const m=le;return b(),B(T,{rounded:"lg",class:"pb-6 px-0",variant:"flat"},{default:a(()=>[e(C,null,{default:a(()=>[D("p",Ue,I(i.$t("Branches Details")),1),e(v,{class:"px-2 mt-3"},{default:a(()=>[e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Name"),class:"mx-4 flex-grow-1",modelValue:l.data.name_en,"onUpdate:modelValue":t[0]||(t[0]=s=>l.data.name_en=s)},null,8,["label","modelValue"])]),_:1}),e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Phone Number"),class:"mx-4 flex-grow-1",modelValue:l.data.phone_no,"onUpdate:modelValue":t[1]||(t[1]=s=>l.data.phone_no=s)},null,8,["label","modelValue"])]),_:1}),e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Email"),class:"mx-4 flex-grow-1",modelValue:l.data.email,"onUpdate:modelValue":t[2]||(t[2]=s=>l.data.email=s)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(v,{class:"px-2 mt-7"},{default:a(()=>[e(o,null,{default:a(()=>[e(q,{readonly:"",class:"mx-4 flex-grow-1",modelValue:l.data.days,"onUpdate:modelValue":t[3]||(t[3]=s=>l.data.days=s),label:i.$t("Working Days"),"return-object":!1,items:l.data.days,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Start Working Hours"),class:"mx-4 flex-grow-1",modelValue:l.data.start,"onUpdate:modelValue":t[4]||(t[4]=s=>l.data.start=s)},null,8,["label","modelValue"])]),_:1}),e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("End Working Hours"),class:"mx-4 flex-grow-1",modelValue:l.data.end,"onUpdate:modelValue":t[5]||(t[5]=s=>l.data.end=s)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(v,{class:"px-2 mt-7"},{default:a(()=>[e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Estimate Time"),class:"mx-4 flex-grow-1",modelValue:l.data.est_time,"onUpdate:modelValue":t[6]||(t[6]=s=>l.data.est_time=s)},null,8,["label","modelValue"])]),_:1}),e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Branch Code"),class:"mx-4 flex-grow-1",modelValue:l.data.code,"onUpdate:modelValue":t[7]||(t[7]=s=>l.data.code=s)},null,8,["label","modelValue"])]),_:1}),e(o,null,{default:a(()=>[e(q,{readonly:"",class:"mx-4 flex-grow-1",modelValue:u(V),"onUpdate:modelValue":t[8]||(t[8]=s=>U(V)?V.value=s:null),label:i.$t("Cities"),"return-object":!1,items:u(V),multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1})]),_:1}),e(v,{class:"px-2 mt-7"},{default:a(()=>[e(o,null,{default:a(()=>[e(q,{readonly:"",class:"mx-4 flex-grow-1",modelValue:l.data.areas,"onUpdate:modelValue":t[9]||(t[9]=s=>l.data.areas=s),label:i.$t("Areas"),"return-object":!1,items:l.data.areas,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Street Name"),class:"mx-4 flex-grow-1",modelValue:l.data.street_name,"onUpdate:modelValue":t[10]||(t[10]=s=>l.data.street_name=s)},null,8,["label","modelValue"])]),_:1}),e(o,null,{default:a(()=>[e(m,{readonly:"",label:i.$t("Building Number"),class:"mx-4 flex-grow-1",modelValue:l.data.building_no,"onUpdate:modelValue":t[11]||(t[11]=s=>l.data.building_no=s)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}},Ce={__name:"BranchesViewDialog",emits:["exit"],setup(l,{emit:V}){const p=y(null),i=()=>{V("exit",!0,p.value),p.value=null};return(t,m)=>{const s=ge,O=te;return b(),B(_e,{persistent:"",class:"v-dialog-sm"},{default:a(()=>[e(s,{onClick:m[0]||(m[0]=x=>t.$emit("close"))}),e(T,{title:t.$t("Pick a custom Date")},{default:a(()=>[e(C,{class:"d-flex"},{default:a(()=>[e(O,{class:"ms-1","prepend-inner-icon":"tabler-calendar",modelValue:u(p),"onUpdate:modelValue":m[1]||(m[1]=x=>U(p)?p.value=x:null)},null,8,["modelValue"])]),_:1}),e(C,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(w,{onClick:m[2]||(m[2]=x=>i()),loading:t.loading,disabled:!u(p)},{default:a(()=>[_(I(t.$t("Pick")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["title"])]),_:1})}}};const F=l=>(ye("data-v-d890d99e"),l=l(),ve(),l),he={class:"text-h4 pt-3 pb-0"},Ie=F(()=>D("p",{class:"text-h3 py-1 mb-3"},"Order Type",-1)),Te=F(()=>D("p",{class:"text-h3 py-1 mb-3"},"Branch Slots",-1)),Fe=F(()=>D("p",{class:"text-h4 py-1 mb-3"},"Size",-1)),je=F(()=>D("p",{class:"text-h4 py-1 mb-3"},"Time",-1)),Ae=F(()=>D("p",{class:"text-h4 py-1 mb-3"},"Status",-1)),se={__name:"[id]",setup(l){var J;const V=ce(),p=(J=JSON.parse(localStorage.getItem("userData")))==null?void 0:J.type,i=y(!1),t=y(!1),m=y(!1),s=y(new Date().toISOString().substr(0,10)),O=y([]),x=y([]),$=y(!1),ne=y(null),g=y(!1),S=y("view"),f=y({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:0,time_slots:[],order_types:[],delivery_types:[],slotsForSelectedDay:[]}),k=y("today"),W=ee(()=>r=>k.value===r?"elevated":"tonal"),G=()=>{f.value.time_slots&&f.value.time_slots.length>0&&(f.value.slotsForSelectedDay=f.value.time_slots.filter(r=>r.day===s.value))},j=pe().params.id,de=async()=>{const d=(await xe(j)).data.data;f.value={...d,working_days:d.days,deliveryNowActive:i,laterTodayActive:t,preOrderActive:m,code:"Wassup",email:d.user.email},De().then(({data:c,meta:M})=>{O.value=c.data})},A=(r,d)=>{g.value=!0,r===!0?($.value=!1,p=="admin"&&Z(`${k.value}&branchId=${j}${d!==null?"&day="+d:""}`).then(({data:c})=>{x.value=c.data}).finally(()=>{g.value=!1})):p=="admin"&&Z(`${k.value}&branchId=${j}`).then(({data:c})=>{x.value=c.data}).finally(()=>{g.value=!1})},oe=async()=>{var r,d;try{await we(j,{...f.value,areas:f.value.areas.map(c=>c.id.toString()),working_days:f.value.working_days.map(c=>c.id.toString()),days:f.value.days.map(c=>c.id.toString()),user:f.value.user.id}),V.success("Branch updated successfully"),g.value=!1}catch(c){V.error((d=(r=c==null?void 0:c.response)==null?void 0:r.data)==null?void 0:d.message),g.value=!1}},ue=()=>{$.value=!1,k.value="today",ne.value=null,A(!0)},E=r=>{r==k.value&&r!=="custom"||(k.value=r,setTimeout(()=>{r=="custom"?$.value=!0:A(!1)},100))};return X(s,r=>{const d=f.value.time_slots.filter(c=>c.day===r)||[];f.value.slotsForSelectedDay=d}),X(()=>[f.value.time_slots,s.value],()=>{G()},{immediate:!0}),ae(()=>{if(p==="admin"){de().then(()=>{G()}),A(!1);const r=f.value.time_slots.filter(d=>d.day===s)||[];f.value.slotsForSelectedDay=r}}),(r,d)=>{const c=Ce,M=Be,ie=ke,P=te,re=le;return b(),N("div",null,[e(c,{onExit:A,modelValue:u($),"onUpdate:modelValue":d[0]||(d[0]=n=>U($)?$.value=n:null),onClose:ue},null,8,["modelValue"]),e(v,{class:"mt-4 px-4",justify:"space-around"},{default:a(()=>[e(o,{class:"pt-0"},{default:a(()=>[e(o,{class:"py-5"},{default:a(()=>[e($e,{modelValue:u(S),"onUpdate:modelValue":d[1]||(d[1]=n=>U(S)?S.value=n:null),class:"v-tabs-pill"},{default:a(()=>[e(K,{value:"view"},{default:a(()=>[_("Update Branch")]),_:1}),e(K,{value:"slots"},{default:a(()=>[_("Update Slots")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(Se,{modelValue:u(S),"onUpdate:modelValue":d[6]||(d[6]=n=>U(S)?S.value=n:null)},{default:a(()=>[e(Q,{value:"view"},{default:a(()=>[e(M,{data:u(f),cities:r.cities},null,8,["data","cities"]),e(v,{class:"gap-5 pt-16 pl-3 pb-0"},{default:a(()=>[e(w,{disabled:u(g),variant:u(W)("today"),onClick:d[2]||(d[2]=n=>E("today"))},{default:a(()=>[_("Today")]),_:1},8,["disabled","variant"]),e(w,{disabled:u(g),variant:u(W)("yesterday"),onClick:d[3]||(d[3]=n=>E("yesterday"))},{default:a(()=>[_("Yesterday ")]),_:1},8,["disabled","variant"]),e(w,{disabled:u(g),variant:u(W)("custom"),onClick:d[4]||(d[4]=n=>E("custom"))},{default:a(()=>[_("Custom")]),_:1},8,["disabled","variant"])]),_:1}),e(o,{class:"px-5 rounded mt-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:a(()=>[D("p",he,I(r.$t("Branches Log")),1),e(ie,{data:u(x),loading:u(g)},null,8,["data","loading"])]),_:1})]),_:1}),e(Q,{value:"slots"},{default:a(()=>[e(T,{rounded:"lg",class:"pb-6 px-0 mb-10",variant:"flat"},{default:a(()=>[e(C,null,{default:a(()=>[e(v,null,{default:a(()=>[e(o,null,{default:a(()=>[Ie]),_:1})]),_:1}),e(v,{class:"order-types"},{default:a(()=>[(b(!0),N(L,null,R(u(f).order_types,n=>(b(),B(o,{key:n.id,class:"d-flex",style:{"justify-content":"center","align-items":"center",gap:"20px"}},{default:a(()=>[e(w,{disabled:!n.status},{default:a(()=>[_(I(n.name),1)]),_:2},1032,["disabled"]),e(z,{modelValue:n.status,"onUpdate:modelValue":h=>n.status=h,inset:!1,"true-value":1,"false-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(T,{rounded:"lg",class:"pb-6 px-0",variant:"flat"},{default:a(()=>[e(C,null,{default:a(()=>[e(v,{style:{display:"flex","justify-content":"space-between","align-items":"center"}},{default:a(()=>[e(o,null,{default:a(()=>[Te]),_:1}),e(o,null,{default:a(()=>[e(P,{modelValue:u(s),"onUpdate:modelValue":d[5]||(d[5]=n=>U(s)?s.value=n:null),config:{minDate:new Date().toISOString().substr(0,10),maxDate:new Date(new Date().setDate(new Date().getDate()+6)).toISOString().substr(0,10)}},null,8,["modelValue","config"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(o,{class:"text-center"},{default:a(()=>[Fe]),_:1}),e(o,{class:"text-center"},{default:a(()=>[je]),_:1}),e(o,{class:"text-center"},{default:a(()=>[Ae]),_:1})]),_:1}),(b(!0),N(L,null,R(u(f).slotsForSelectedDay,(n,h)=>(b(),B(v,{key:h,class:"mb-2"},{default:a(()=>[e(o,{class:"text-center"},{default:a(()=>[e(re,{modelValue:n.capacity,"onUpdate:modelValue":H=>n.capacity=H},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{class:"text-center d-flex",style:{}},{default:a(()=>[e(P,{config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"},value:n.from,"prepend-inner-icon":"tabler-calendar",class:"flex-grow-1 mx-2 my-1",disabled:!0},null,8,["value"]),e(P,{config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"},value:n.to,"prepend-inner-icon":"tabler-calendar",class:"flex-grow-1 mx-2 my-1",disabled:!0},null,8,["value"])]),_:2},1024),e(o,{class:"text-center d-flex",style:{"justify-content":"center","align-items":"center"}},{default:a(()=>[e(z,{modelValue:n.status,"onUpdate:modelValue":H=>n.status=H,inset:!1,"false-value":0,"true-value":1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128)),e(v,{class:"delivery-types"},{default:a(()=>[(b(!0),N(L,null,R(u(f).delivery_types,n=>(b(),B(o,{key:n.id,class:"d-flex",style:{"justify-content":"center","align-items":"center",gap:"20px"}},{default:a(()=>[e(w,{disabled:!n.status},{default:a(()=>[_(I(n.name),1)]),_:2},1032,["disabled"]),e(z,{modelValue:n.status,"onUpdate:modelValue":h=>n.status=h,inset:!1,"true-value":1,"false-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(o,{class:"mr-10",style:{display:"flex","justify-content":"flex-end","align-items":"center"}},{default:a(()=>[e(w,{onClick:oe},{default:a(()=>[_("Save Changes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}};typeof Y=="function"&&Y(se);const oa=fe(se,[["__scopeId","data-v-d890d99e"]]);export{oa as default};
