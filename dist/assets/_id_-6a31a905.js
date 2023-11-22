import{D as te,O as P,o as j,b as R,s as u,l as c,R as E,w as t,q as e,aX as S,n as W,y as h,U as y,W as m,G as k,I as F,a_ as ne,C as oe,aP as de,c as se,az as w,H as x,aZ as L}from"./index-b5d24edb.js";import{V as ue}from"./VDataTable-405911d5.js";import{g as ie}from"./cities-d3c9d3ce.js";import{V as I}from"./VCombobox-8607af61.js";import{_ as me}from"./AppDateTimePicker-c1bb7025.js";import{_ as re}from"./DialogCloseBtn-62871b0b.js";import{b as fe,d as N}from"./branches-4fcb03a3.js";import{a as ce}from"./areas-f9cac259.js";import{V as pe}from"./VDialog-7d28cfe6.js";import"./VCheckboxBtn-f0cfd993.js";import"./VSelectionControl-8c9886a9.js";import"./VSelect-0e70c656.js";import"./VList-837b200a.js";import"./ssrBoot-de7228ad.js";import"./VDivider-d07c9055.js";import"./dialog-transition-bca0bf81.js";import"./VMenu-7ff4824f.js";import"./VOverlay-a7019e8a.js";import"./lazy-bc0e50cc.js";import"./VChip-240a7907.js";import"./filter-72a3eb0c.js";import"./VTable-618c4d45.js";const Ve={__name:"BranchesViewTable",props:{data:{type:Array,default:[]}},setup(n){const p=te().t,d=P(()=>[{title:p("Day"),key:"day"},{title:p("Time"),sortable:!1,key:"time"},{title:p("Item Name"),sortable:!1,key:"item_name"},{title:p("Action"),sortable:!1,key:"action"},{title:p("Details"),sortable:!1,key:"details"}]);return(a,i)=>(j(),R(u(ue),{items:n.data,headers:u(d),"items-per-page":15,class:"pb-5 mt-0",title:"Branches Log"},null,8,["items","headers"]))}},be={class:"text-h4 py-1 mb-3"},ge={__name:"BranchesViewSummary",props:{data:{type:Object,default:{}}},setup(n){const f=c([]),p=()=>{ie().then(({data:d,meta:a})=>{f.value=d.data,console.log(f.value)})};return E(()=>{p()}),(d,a)=>{const i=ne;return j(),R(F,{rounded:"lg",class:"pb-6 px-0",variant:"flat"},{default:t(()=>[e(S,null,{default:t(()=>[W("p",be,h(d.$t("Branches Details")),1),e(y,{class:"px-2 mt-3"},{default:t(()=>[e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Name"),class:"mx-4 flex-grow-1",modelValue:n.data.name_en,"onUpdate:modelValue":a[0]||(a[0]=l=>n.data.name_en=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Phone Number"),class:"mx-4 flex-grow-1",modelValue:n.data.phone_no,"onUpdate:modelValue":a[1]||(a[1]=l=>n.data.phone_no=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Email"),class:"mx-4 flex-grow-1",modelValue:n.data.email,"onUpdate:modelValue":a[2]||(a[2]=l=>n.data.email=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(I,{readonly:"",class:"mx-4 flex-grow-1",modelValue:n.data.days,"onUpdate:modelValue":a[3]||(a[3]=l=>n.data.days=l),label:d.$t("Working Days"),"return-object":!1,items:n.data.days,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Start Working Hours"),class:"mx-4 flex-grow-1",modelValue:n.data.start,"onUpdate:modelValue":a[4]||(a[4]=l=>n.data.start=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("End Working Hours"),class:"mx-4 flex-grow-1",modelValue:n.data.end,"onUpdate:modelValue":a[5]||(a[5]=l=>n.data.end=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Estimate Time"),class:"mx-4 flex-grow-1",modelValue:n.data.est_time,"onUpdate:modelValue":a[6]||(a[6]=l=>n.data.est_time=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Branch Code"),class:"mx-4 flex-grow-1",modelValue:n.data.code,"onUpdate:modelValue":a[7]||(a[7]=l=>n.data.code=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(I,{readonly:"",class:"mx-4 flex-grow-1",modelValue:u(f),"onUpdate:modelValue":a[8]||(a[8]=l=>k(f)?f.value=l:null),label:d.$t("Cities"),"return-object":!1,items:u(f),multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1})]),_:1}),e(y,{class:"px-2 mt-7"},{default:t(()=>[e(m,null,{default:t(()=>[e(I,{readonly:"",class:"mx-4 flex-grow-1",modelValue:n.data.areas,"onUpdate:modelValue":a[9]||(a[9]=l=>n.data.areas=l),label:d.$t("Areas"),"return-object":!1,items:n.data.areas,multiple:"",style:{width:"100%"},variant:"outlined","item-value":"id","item-title":"name"},null,8,["modelValue","label","items"])]),_:1}),e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Street Name"),class:"mx-4 flex-grow-1",modelValue:n.data.street_name,"onUpdate:modelValue":a[10]||(a[10]=l=>n.data.street_name=l)},null,8,["label","modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(i,{readonly:"",label:d.$t("Building Number"),class:"mx-4 flex-grow-1",modelValue:n.data.building_no,"onUpdate:modelValue":a[11]||(a[11]=l=>n.data.building_no=l)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}};const ve={class:"text-h4 pt-3 pb-2"},H={__name:"[id]",setup(n){var A;const f=(A=JSON.parse(localStorage.getItem("userData")))==null?void 0:A.type,p=c([]),d=c([]),a=c(!1),i=c(null),l=c(null),V=c(!1),B=c({start:"",end:"",name_en:"",name_ar:"",phone_no:"",city_id:null,areas:[],street_name:"",building_no:"",email:"",password:"",est_time:"",delivery_fee:.5,code:"",working_days:[],is_active:0}),b=c("today"),D=P(()=>s=>b.value===s?"elevated":"tonal"),$=de().params.id,O=async()=>{await fe($).then(s=>{let{start:o,end:g,name_en:v,name_ar:U,phone_no:T,areas:r,city_id:G,street_name:J,building_no:M,email:X,password:Y,est_time:Z,delivery_fee:K,code:Q,days:ee,is_active:ae}=s.data.data;B.value={start:o,end:g,name_en:v,name_ar:U,phone_no:T,areas:r,days:ee,city_id:G,street_name:J,building_no:M,email:X,password:Y,est_time:Z,delivery_fee:K,code:Q,is_active:ae},B.value.email=s.data.data.user.email,ce().then(({data:le,meta:ye})=>{p.value=le.data})})},q=()=>{N($).then(({data:s,meta:o})=>{d.value=s.data})},_=s=>{if(V.value=!0,s===!0){a.value=!1;let o=i.value,g=l.value;f=="admin"&&N(`${b.value}&branchId${$}${o!==null?"&from="+o:""}${g!==null?"&to="+g:""}`).then(({data:v})=>{d.value=v.data}).finally(()=>{V.value=!1})}else f=="admin"&&N(`${b.value}&branchId${$}`).then(({data:o})=>{d.value=o.data}).finally(()=>{V.value=!1})},z=()=>{a.value=!1,b.value="today",i.value=c(null),l.value=c(null),_(!0)},C=s=>{s==b.value&&s!=="custom"||(b.value=s,setTimeout(()=>{s=="custom"?a.value=!0:_(!1)},100))};return E(()=>{f==="admin"&&(O(),q())}),(s,o)=>{const g=re,v=me,U=ge,T=Ve;return j(),se("div",null,[e(pe,{modelValue:u(a),"onUpdate:modelValue":o[4]||(o[4]=r=>k(a)?a.value=r:null),persistent:"",class:"v-dialog-sm"},{default:t(()=>[e(g,{onClick:o[0]||(o[0]=r=>z())}),e(F,{title:s.$t("Pick a custom Date")},{default:t(()=>[e(S,{class:"d-flex"},{default:t(()=>[e(v,{class:"me-1",placeholder:s.$t("From"),"prepend-inner-icon":"tabler-calendar",modelValue:u(i),"onUpdate:modelValue":o[1]||(o[1]=r=>k(i)?i.value=r:null)},null,8,["placeholder","modelValue"]),e(v,{class:"ms-1",placeholder:s.$t("To"),"prepend-inner-icon":"tabler-calendar",modelValue:u(l),"onUpdate:modelValue":o[2]||(o[2]=r=>k(l)?l.value=r:null)},null,8,["placeholder","modelValue"])]),_:1}),e(S,{class:"d-flex justify-end gap-3 flex-wrap"},{default:t(()=>[e(w,{onClick:o[3]||(o[3]=r=>_(!0)),loading:u(V),disabled:!u(i)&&!u(l)},{default:t(()=>[x(h(s.$t("Pick")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),e(y,{class:"mt-4 px-4",justify:"space-around"},{default:t(()=>[e(m,{class:"pt-0"},{default:t(()=>[e(U,{data:u(B),cities:s.cities},null,8,["data","cities"]),e(y,{class:"gap-5 pt-16 pl-3 pb-0"},{default:t(()=>[e(w,{loading:u(V),variant:u(D)("today"),onClick:o[5]||(o[5]=r=>C("today"))},{default:t(()=>[x("Today")]),_:1},8,["loading","variant"]),e(w,{loading:u(V),variant:u(D)("yesterday"),onClick:o[6]||(o[6]=r=>C("yesterday"))},{default:t(()=>[x("Yesterday")]),_:1},8,["loading","variant"]),e(w,{loading:u(V),variant:u(D)("custom"),onClick:o[7]||(o[7]=r=>C("custom"))},{default:t(()=>[x("Custom")]),_:1},8,["loading","variant"])]),_:1}),e(m,{class:"px-5 rounded mt-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:t(()=>[W("p",ve,h(s.$t("Branches Log")),1),e(T,{data:u(d)},null,8,["data"])]),_:1})]),_:1})]),_:1})])}}};typeof L=="function"&&L(H);const He=oe(H,[["__scopeId","data-v-76604c32"]]);export{He as default};
