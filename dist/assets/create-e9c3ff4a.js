import{_ as la}from"./AppTextarea-65db8f1d.js";import{_ as ta}from"./AppDateTimePicker-ea2a4526.js";import{_ as sa}from"./OrderProducts-4dc78b1a.js";import{_ as oa}from"./DialogCloseBtn-513e4898.js";import{ba as ra,C as da,l as n,aV as na,O as ua,R as ia,aB as pa,o as c,c as z,q as o,w as d,I as ie,F as $e,a as De,s as l,b as g,aX as le,az as T,H as j,y as v,G as B,n as f,aY as ca,z as xe,a$ as Ce,b0 as Se,a2 as y,a1 as i,b1 as w,b2 as Fe,bc as Ie,A as $,bd as ma,t as va,aZ as Ne,aW as fa,a_ as _a,$ as ba,a0 as ga}from"./index-581c2083.js";import{t as ya}from"./files-2e167225.js";import{g as ha}from"./areas-4cecaa26.js";import{a as Va,g as wa}from"./branches-b17a206f.js";import{c as ka,b as $a,d as Da}from"./orders-3b094c78.js";import{g as xa}from"./products-5c82959a.js";import{V as Be}from"./VDialog-9c77a5f1.js";import{V as Ue}from"./VCombobox-6fdf6a72.js";import{V as Ca}from"./VChip-2cd4c1fb.js";import{V as Sa}from"./VSwitch-084d9c96.js";import{V as Fa}from"./VSelect-91e75b33.js";import{V as Ia}from"./VCheckbox-d1b59ea7.js";import{V as pe}from"./VDivider-007f86e5.js";import"./VDataTable-06e6a8ff.js";import"./VCheckboxBtn-36803dae.js";import"./VSelectionControl-6e42f01a.js";import"./VList-800b0139.js";import"./ssrBoot-f2e19377.js";import"./filter-887944dd.js";import"./VTable-db7fafcb.js";import"./VOverlay-b3d70df2.js";import"./lazy-e0bc52de.js";import"./dialog-transition-e2ab3ff7.js";import"./VMenu-568d971d.js";function Na(P){return ra.post("agent/employee/check",P)}const Ba=P=>(ba("data-v-4ba9617b"),P=P(),ga(),P),Ua=["disabled"],Aa={style:{width:"120px",height:"120px",border:"2px solid lightgrey"},class:"product_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},Ta={class:"w-100 h-100",style:{overflow:"hidden"}},ja=["src"],Pa={class:"text-h4 pt-3 pb-2"},Oa={class:"text-h4 pt-3"},Ma={class:"text-h4 pt-3 mb-0"},qa={class:"text-h4 pt-3 mb-4"},Ea={class:"text-h4 pt-3 mb-1"},Ha={class:"text-h4 pt-3 mb-5"},Ka={key:0,class:"w-100 flex-grow-1 d-flex"},Wa={key:1,class:"w-100 flex-grow-1 d-flex"},za={class:"text-h4 pt-3 mb-5"},La={class:"mb-2"},Ra={class:"mb-2"},Ya=Ba(()=>f("p",{class:"mb-2"},"Total",-1)),Ga={class:"mb-2"},Ja={class:"mb-2"},Qa={class:"mb-2"},Xa={class:"mb-0"},Za={class:"mb-0"},Ae={__name:"create",setup(P){var he;const Te=(he=JSON.parse(localStorage.getItem("userData")))==null?void 0:he.type,O=n(""),ce=n(),me=n(),D=na(),J=n(!1),L=n([]),x=n([]),ve=n([]),Q=n(!1),te=n(!1),se=n(!1),oe=n(!1);n(!1);const re=n(!1),fe=n([]),_=n(1),M=n(),F=n([]),C=n(0),R=n(new Date().toISOString()),X=n(!1),Y=n(0),_e=n(!1),be=n([]);n(0);const N=n(""),q=n(""),E=n(""),de=n(0),H=n(!1),G=n(!1),h=n([]),U=n(""),A=n(!1),I=n(null),K=n(null),W=n(!1),Z=n(null),ee=n(1),a=n({is_pickup:!0,products:[],email:"",name:"",note:"",address_city:1,delivery_date:"",delivery_time:"",address_building_no:"",block_no:"",address_floor:"",address_phone:"",address_apartment:"",address_address_area:null,address_street_name:"",delivery_man_id:"",branch_id:null,v_code:"",employee_code:""}),je=()=>{Va().then(({data:e,meta:t})=>{a.value.delivery_cost=e.data.delivery_cost})},Pe=()=>{oe.value=!0,ha().then(({data:e,meta:t})=>{ve.value=e.data,oe.value=!1})},Oe=()=>{se.value=!0,xa().then(({data:e,meta:t})=>{fe.value=e.data,se.value=!1})},Me=()=>{var e;(e=ce.value)==null||e.validate().then(async({valid:t})=>{t&&(Q.value=!0,ka({phone:`${O.value}`}).then(r=>{D.success("Customer found!"),be.value=r.data.data.length?r.data.data[0]:[],a.value.email=r.data.email,a.value.name=r.data.name,_e.value=!0,Q.value=!1,ze()}).catch(r=>{D.error(r.response.data.message),Q.value=!1}))})},qe=()=>{te.value=!0,wa().then(({data:e})=>{L.value=e.data.filter(t=>t.is_active===1),x.value=e.data.filter(t=>t.id===2),I.value=x.value[0].start,Z.value=I.value,K.value=x.value[0].end,Y.value+=1,te.value=!1})},Ee=()=>{X.value=!0,$a({v_code:N.value,total:C.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};a.value.v_code=N.value,N.value="",q.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],E.value=e.data.discount_type,D.success(e.data.message),X.value=!1}).catch(e=>{D.error(e.response.data.message),X.value=!1})},He=ua(()=>(E.value=="fixed"?de.value=parseInt(C.value-parseInt(q.value)):E.value=="percentage"?de.value=parseInt(C.value)-parseInt(C.value)*parseInt(q.value)/100:E.value=="free_delivery",de.value+(a.value.delivery_cost??.5))),Ke=()=>{const e=M.value;if(F.value.includes(e)){a.value.products.find(r=>r.product_id===e.id).quantity=parseInt(a.value.products.find(r=>r.product_id===e.id).quantity)+parseInt(_.value);let t=F.value.find(r=>r==e);t.quantity=parseInt(t.quantity)+parseInt(_.value),t.total=t.total+_.value*e.price,C.value+=_.value*e.price,e.has_note==1&&a.value.products.find(r=>r.product_id==e.id).notes.push("")}else{if(e.has_image==1&&e.has_note==1){a.value.products.push({product_id:e.id,quantity:parseInt(_.value),images:[],notes:[]});for(let t=0;t<_.value;t++)a.value.products.find(r=>r.product_id==e.id).notes[t]="";e.images=0,h.value.push({product_id:e.id})}else if(e.has_image==1&&e.has_note==0)a.value.products.push({product_id:e.id,quantity:parseInt(_.value),images:[]}),e.images=0,h.value.push({product_id:e.id});else if(e.has_image==0&&e.has_note==1){a.value.products.push({product_id:e.id,quantity:parseInt(_.value),notes:[]});for(let t=0;t<_.value;t++)a.value.products.find(r=>r.product_id==e.id).notes[t]=""}else a.value.products.push({product_id:e.id,quantity:parseInt(_.value)});e.quantity=_.value,C.value+=e.price*_.value,e.total=e.price*_.value,F.value.push(e)}M.value=null,_.value=1},ge=()=>{const e=new Date;if(a.value.delivery_time=null,a.value.is_pickup===!1&&(a.value.delivery_date=null,a.value.delivery_time=null),a.value.is_pickup===!0&&(a.value.address_address_area==null||a.value.address_address_area==""))x.value=L.value.filter(t=>t.id===2);else if(a.value.delivery_date!==ne(e)&&a.value.is_pickup===!0)x.value=L.value.filter(t=>t.id===2),a.value.branch_id=2;else if(a.value.delivery_date==ne(e)){const t=L.value.filter(r=>r.areas.find(u=>u.name===a.value.address_address_area)!==void 0);t.find(r=>r.id==a.value.branch_id)||(a.value.branch_id=null),x.value=t}else if(a.value.is_pickup===!1&&a.value.address_address_area!==null&&a.value.address_address_area!==""){const t=L.value.filter(r=>r.areas.find(u=>u.name===a.value.address_address_area)!==void 0);t.find(r=>r.id==a.value.branch_id)||(a.value.branch_id=null),x.value=t}},ne=e=>{const t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${r}-${t}`},ae=()=>{x.value.find(e=>e.id===a.value.branch_id),Y.value+=1,We()},We=()=>{var t,r,p,u;const e=new Date;if(e.toISOString(),ge(),x.value.find(m=>m.id==a.value.branch_id),a.value.delivery_date==ne(e)){const m=e.getHours(),S=e.getMinutes(),[s,V]=(t=I.value.split(":"))==null?void 0:t.map(Number),[k,ue]=(r=K.value.split(":"))==null?void 0:r.map(Number);if(m>k||m===k&&S>=ue)W.value=!0;else if(m<s||m===s&&S<V)I.value=Z.value;else{const Ve=new Date(new Date().setMinutes(new Date().getMinutes()+40)),we=Ve.getHours(),ea=Ve.getMinutes();(p=I.value.split(":"))==null||p.map(Number);const[ke,aa]=(u=K.value.split(":"))==null?void 0:u.map(Number);we>ke||we===ke&&ea>=aa?W.value=!0:I.value=new Date(new Date().setMinutes(new Date().getMinutes()+40)).toTimeString().slice(0,5)}}else W.value=!1,I.value=Z.value;Y.value+=1,a.value.delivery_time=null},ze=()=>{const e=be.value;a.value.address_apartment=e==null?void 0:e.apartment,a.value.block_no=e==null?void 0:e.block_no,a.value.address_building_no=e==null?void 0:e.building_num,a.value.address_floor=e==null?void 0:e.floor,a.value.address_street_name=e==null?void 0:e.street_name,a.value.address_address_area=e.area_name,a.value.address_phone=O.value,_e.value=!1},Le=e=>{C.value=C.value-e.price*e.quantity,F.value.splice(F.value.indexOf(e),1),a.value.products.splice(a.value.products.indexOf(a.value.products.find(t=>t.product_id==e.id)),1),e.has_image==1&&h.value.splice(h.value.indexOf(h.value.find(t=>t.product_id==e.id)),1)},Re=async()=>{var t,r,p;if(a.value.is_pickup===!1){const u=new Date().getHours(),m=new Date().getMinutes(),[S,s]=(t=Z.value.split(":"))==null?void 0:t.map(Number),[V,k]=(r=K.value.split(":"))==null?void 0:r.map(Number);if(u>V||u===V&&m>=k||u<S||u===S&&m<s)return D.error("The Branch is currently closed.")}let e=new FormData;e.append("branch_id",a.value.branch_id),e.append("is_pickup",a.value.is_pickup),e.append("email",a.value.email),e.append("name",a.value.name),e.append("agent_note",a.value.agent),e.append("address_city",a.value.address_city),a.value.delivery_date!==null&&e.append("delivery_date",a.value.delivery_date+" "+a.value.delivery_time+":00"),e.append("address_building_no",a.value.address_building_no),e.append("block_no",a.value.block_no),e.append("address_floor",a.value.address_floor),e.append("address_phone",a.value.address_phone),e.append("address_apartment",a.value.address_apartment),e.append("address_address_area",a.value.address_address_area),e.append("address_street_name",a.value.address_street_name),e.append("v_code",a.value.v_code),e.append("employee_code",a.value.employee_code),a.value.products.forEach((u,m)=>{var S,s;e.append(`products[${m}][product_id]`,u.product_id),e.append(`products[${m}][quantity]`,u.quantity),(S=u.images)==null||S.forEach((V,k)=>{e.append(`products[${m}][images][${k}]`,V.file)}),(s=u.notes)==null||s.forEach((V,k)=>{e.append(`products[${m}][notes][${k}]`,V)})}),(p=me.value)==null||p.validate().then(async({valid:u})=>{if(u){if(h.value.length>0)return D.error("You must pick at least the min number of Images for each Product");if(a.value.products.length==0)return D.error("You need to select at least 1 product");if(C.value<5)return D.error("The Total Cost Without The Delivery Cost Must Be More Than 5 KWD");J.value=!0;try{await Da(e),D.success("Order created successfully"),fa.back(),J.value=!1}catch{J.value=!1}}})},Ye=()=>{re.value=!0,Na({employee_code:U.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};D.success(e.meesage),q.value=parseInt(e.discount_rate)+t[e.discount_type],E.value=e.discount_type,a.value.employee_code=U.value}).catch(({response:e})=>{D.error(e.data.message)}).finally(()=>{re.value=!1})},Ge=()=>{q.value="",E.value="",U.value="",N.value="",a.value.v_code="",a.value.employee_code=""},b=n(),Je=e=>{H.value=!0,b.value=e.id},Qe=e=>{G.value=!0,b.value=e},Xe=async e=>{let t=F.value.find(u=>u.id==b.value),r=a.value.products.find(u=>u.product_id==b.value);const p={file:e.target.files[0],id:r.images.length,binary:""};await ya(p.file).then(u=>{p.binary=u}),r.images.push(p),t.images+=1,t.images==t.quantity&&h.value.splice(h.value.indexOf(h.value.find(u=>u.product_id==b.value.product_id))),e.target.value=""},Ze=e=>{let t=a.value.products.find(p=>p.product_id==b.value),r=F.value.find(p=>p.id==b.value);r.images-=1,r.images==r.quantity?h.value.splice(h.value.indexOf(h.value.find(p=>p.product_id==b.value))):h.value.map(p=>p.product_id).includes(r.id)||h.value.push({product_id:r.id}),t.images.splice(t.images.indexOf(e),1)},ye=n(new Date().toISOString());return ia(()=>{Te=="agent"&&(qe(),Oe(),Pe(),je());let e=setInterval(()=>{R.value=new Date().toISOString(),new Date(ye.value).getDate()!==new Date(R.value).getDate()&&(ye.value=R.value,ee.value=ee.value*2)},1e3);pa(()=>{clearInterval(e)})}),(e,t)=>{const r=_a,p=oa,u=sa,m=ta,S=la;return c(),z("div",null,[o(Be,{modelValue:l(G),"onUpdate:modelValue":t[1]||(t[1]=s=>B(G)?G.value=s:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[o(ie,{title:e.$t("Products Notes")},{default:d(()=>[(c(!0),z($e,null,De(l(a).products.find(s=>s.product_id==l(b).id).notes,(s,V)=>(c(),g(le,{class:"pt-2"},{default:d(()=>[o(r,{label:`Note #${V+1}`,class:"flex-grow-1",modelValue:l(a).products.find(k=>k.product_id==l(b).id).notes[V],"onUpdate:modelValue":k=>l(a).products.find(ue=>ue.product_id==l(b).id).notes[V]=k},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024))),256)),o(le,{class:"d-flex justify-end gap-3 flex-wrap"},{default:d(()=>[o(T,{onClick:t[0]||(t[0]=s=>G.value=!1)},{default:d(()=>[j(v(e.$t("Save")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),o(Be,{modelValue:l(H),"onUpdate:modelValue":t[3]||(t[3]=s=>B(H)?H.value=s:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[o(p,{onClick:t[2]||(t[2]=s=>H.value=!l(H))}),o(ie,{title:"Product Images"},{default:d(()=>[o(le,{class:"d-flex flex-row align-center px-0 pb-5 pt-0 flex-wrap px-5"},{default:d(()=>[f("div",{style:ca([l(a).products.find(s=>s.product_id==l(b)).images.length==l(a).products.find(s=>s.product_id==l(b)).quantity*10?"pointer-events: none;":"",{width:"120px",height:"120px",border:"2px solid lightgrey"}]),class:"add_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},[o(xe,{class:"position-absolute",icon:"tabler-plus"}),f("input",{onChange:Xe,type:"file",name:"file",style:{opacity:"0",height:"100%"},class:"h-100",multiple:"",accept:"image/png, image/gif, image/jpeg",disabled:l(a).products.find(s=>s.product_id==l(b)).images.length==l(a).products.find(s=>s.product_id==l(b)).quantity*10},null,40,Ua)],4),(c(!0),z($e,null,De(l(a).products.find(s=>s.product_id==l(b)).images,s=>(c(),z("div",Aa,[o(T,{size:"33",color:"error",class:"delete_btn position-absolute px-1 py-1"},{default:d(()=>[o(xe,{icon:"tabler-trash",size:"22",onClick:V=>Ze(s)},null,8,["onClick"])]),_:2},1024),f("div",Ta,[f("img",{src:s.binary,style:{"object-fit":"cover"},class:"w-100 h-100",alt:"product_image"},null,8,ja)])]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(i,{class:"mt-4 px-2",justify:"space-around"},{default:d(()=>[o(l(Ce),{ref_key:"refVForm",ref:me,onSubmit:Se(Re,["prevent"]),class:"w-100 d-flex"},{default:d(()=>[o(y,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:8},{default:d(()=>[f("p",Pa,v(e.$t("Create Order")),1),o(l(Ce),{ref_key:"phoneForm",ref:ce,onSubmit:Se(Me,["prevent"])},{default:d(()=>[o(y,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[f("p",Oa,v(e.$t("Search by Phone Number")),1),o(y,null,{default:d(()=>[o(i,{justify:"space-between",align:"start"},{default:d(()=>[o(r,{rules:[l(w),l(Fe),l(Ie)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:l(O),"onUpdate:modelValue":t[4]||(t[4]=s=>B(O)?O.value=s:null),placeholder:e.$t("Phone Number")},null,8,["rules","modelValue","placeholder"]),o(T,{type:"submit",disabled:!l(O),loading:l(Q)},{default:d(()=>[j(v(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),o(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[f("p",Ma,v(e.$t("Products")),1),o(y,null,{default:d(()=>[o(i,{justify:"space-between",align:"end"},{default:d(()=>[o(Ue,{"prepend-inner-icon":"tabler-package",loading:l(se),modelValue:l(M),"onUpdate:modelValue":t[5]||(t[5]=s=>B(M)?M.value=s:null),items:l(fe),"item-title":"name_en","item-value":"id",style:{width:"100%"},variant:"outlined",label:e.$t("Products"),class:"flex-grow-1 my-1 w-50 mx-2"},null,8,["loading","modelValue","items","label"]),o(r,{label:e.$t("Quantity"),type:"number",class:"flex-grow-1 mx-2 my-1 w-25",modelValue:l(_),"onUpdate:modelValue":t[6]||(t[6]=s=>B(_)?_.value=s:null)},null,8,["label","modelValue"]),o(T,{"prepend-icon":"tabler-plus",class:"flex-grow-1 mx-2 my-1",disabled:l(_)<=0||!l(M),onClick:Ke},{default:d(()=>[j("Add")]),_:1},8,["disabled"])]),_:1}),o(i,{align:"center"},{default:d(()=>[l(F).length?(c(),g(u,{key:0,items:l(F),onDelete:Le,onAddImage:Je,onAddNote:Qe},null,8,["items"])):$("",!0)]),_:1})]),_:1})]),_:1}),o(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[f("p",qa,v(e.$t("User Details")),1),o(y,null,{default:d(()=>[o(i,{justify:"space-between",align:"end"},{default:d(()=>[o(r,{"prepend-inner-icon":"tabler-user",label:e.$t("Name"),rules:[l(w)],placeholder:e.$t("Customer Name"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).name,"onUpdate:modelValue":t[7]||(t[7]=s=>l(a).name=s)},null,8,["label","rules","placeholder","modelValue"]),o(r,{"prepend-inner-icon":"tabler-at",label:e.$t("Email"),placeholder:e.$t("Customer Email"),rules:[l(ma),l(w)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).email,"onUpdate:modelValue":t[8]||(t[8]=s=>l(a).email=s)},null,8,["label","placeholder","rules","modelValue"])]),_:1}),o(i,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[o(r,{"prepend-inner-icon":"tabler-phone",placeholder:e.$t("Customer Phone Number"),label:e.$t("Phone Number"),rules:[l(Fe),l(w),l(Ie)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_phone,"onUpdate:modelValue":t[9]||(t[9]=s=>l(a).address_phone=s)},null,8,["placeholder","label","rules","modelValue"])]),_:1})]),_:1})]),_:1}),o(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[f("p",Ea,v(e.$t("User Address")),1),o(y,null,{default:d(()=>[o(i,{justify:"space-between",align:"end"},{default:d(()=>[o(Ue,{clearable:"","prepend-inner-icon":"tabler-building-community",loading:l(oe),modelValue:l(a).address_address_area,"onUpdate:modelValue":[t[10]||(t[10]=s=>l(a).address_address_area=s),t[11]||(t[11]=s=>ae())],items:l(ve),"item-value":"name","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",rules:[l(w)],label:e.$t("Area"),class:"flex-grow-0 my-1 w-50 mx-2"},null,8,["loading","modelValue","items","rules","label"]),o(r,{"prepend-inner-icon":"tabler-container",label:e.$t("Building Number"),rules:[l(w)],placeholder:e.$t("Building Number"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_building_no,"onUpdate:modelValue":t[12]||(t[12]=s=>l(a).address_building_no=s)},null,8,["label","rules","placeholder","modelValue"])]),_:1}),o(i,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[o(r,{"prepend-inner-icon":"tabler-stairs",placeholder:e.$t("Floor"),label:e.$t("Floor"),rules:[l(w)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_floor,"onUpdate:modelValue":t[13]||(t[13]=s=>l(a).address_floor=s)},null,8,["placeholder","label","rules","modelValue"]),o(r,{"prepend-inner-icon":"tabler-window",label:e.$t("Apartment"),rules:[l(w)],placeholder:e.$t("Apartment"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_apartment,"onUpdate:modelValue":t[14]||(t[14]=s=>l(a).address_apartment=s)},null,8,["label","rules","placeholder","modelValue"])]),_:1}),o(i,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[o(r,{"prepend-inner-icon":"tabler-road",placeholder:e.$t("Street Name"),rules:[l(w)],label:e.$t("Street Name"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_street_name,"onUpdate:modelValue":t[15]||(t[15]=s=>l(a).address_street_name=s)},null,8,["placeholder","rules","label","modelValue"]),o(r,{"prepend-inner-icon":"tabler-number",rules:[l(w)],label:e.$t("Block Number"),placeholder:e.$t("Block Number"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).block_no,"onUpdate:modelValue":t[16]||(t[16]=s=>l(a).block_no=s)},null,8,["rules","label","placeholder","modelValue"])]),_:1})]),_:1})]),_:1}),o(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[o(i,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:d(()=>[f("p",Ha,v(e.$t("Order Scheduling")),1),l(W)&&l(a).is_pickup?(c(),g(Ca,{key:0,size:"large",label:"",color:"error",class:"text-h6",height:"200","prepend-icon":"tabler-info-circle"},{default:d(()=>[j("The Branch is currently Closed")]),_:1})):$("",!0)]),_:1}),o(y,null,{default:d(()=>[o(i,{justify:"space-between",align:"center",class:va(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:d(()=>[l(a).is_pickup?(c(),z("div",Ka,[(c(),g(m,{rules:[l(w)],disabled:!l(a).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:l(a).delivery_date,"onUpdate:modelValue":[t[17]||(t[17]=s=>l(a).delivery_date=s),ae],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:l(R)},key:l(ee)},null,8,["rules","disabled","modelValue","placeholder","config"])),(c(),g(m,{rules:[l(w)],disabled:!l(a).is_pickup||l(W),"prepend-inner-icon":"tabler-clock",modelValue:l(a).delivery_time,"onUpdate:modelValue":t[18]||(t[18]=s=>l(a).delivery_time=s),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:l(Y),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:l(I),maxTime:l(K)}},null,8,["rules","disabled","modelValue","placeholder","config"]))])):$("",!0),l(a).is_pickup?$("",!0):(c(),z("div",Wa,[(c(),g(m,{disabled:!l(a).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:l(a).delivery_date,"onUpdate:modelValue":[t[19]||(t[19]=s=>l(a).delivery_date=s),ae],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:l(R)},key:l(ee)},null,8,["disabled","modelValue","placeholder","config"])),(c(),g(m,{disabled:!l(a).is_pickup||l(W),"prepend-inner-icon":"tabler-clock",modelValue:l(a).delivery_time,"onUpdate:modelValue":t[20]||(t[20]=s=>l(a).delivery_time=s),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:l(Y),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:l(I),maxTime:l(K)}},null,8,["disabled","modelValue","placeholder","config"]))])),o(i,{class:"w-50 mx-2 my-0",justify:e.$vuetify.display.smAndDown?"center":"start"},{default:d(()=>[o(Sa,{modelValue:l(a).is_pickup,"onUpdate:modelValue":[t[21]||(t[21]=s=>l(a).is_pickup=s),ge],"false-value":!1,"true-value":!0,inset:!1,label:e.$t("Schedule Order")},null,8,["modelValue","label"])]),_:1},8,["justify"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1},8,["cols"]),o(y,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:4},{default:d(()=>[o(y,{class:"mt-16 px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[f("p",za,v(e.$t("Order Summary")),1),o(y,null,{default:d(()=>[o(i,{justify:"space-between",align:"center"},{default:d(()=>[o(Fa,{clearable:"","prepend-inner-icon":"tabler-building-store",placeholder:e.$t("Select a Branch"),rules:[l(w)],label:e.$t("Branch"),loading:l(te),modelValue:l(a).branch_id,"onUpdate:modelValue":[t[22]||(t[22]=s=>l(a).branch_id=s),ae],items:l(x),"item-value":"id","item-title":"name_en",style:{width:"100%"},variant:"outlined"},null,8,["placeholder","rules","label","loading","modelValue","items"]),o(S,{"v-model":l(a).note,label:e.$t("Note"),class:"w-100 mt-2"},null,8,["v-model","label"])]),_:1}),o(i,{class:"mt-4"},{default:d(()=>[o(y,{class:"w-100 px-0"},{default:d(()=>[l(A)?(c(),g(r,{key:0,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-user-star",placeholder:e.$t("Enter Employee code"),modelValue:l(U),"onUpdate:modelValue":t[23]||(t[23]=s=>B(U)?U.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])):$("",!0),l(A)?$("",!0):(c(),g(r,{key:1,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-gift",placeholder:e.$t("Have a Voucher?"),modelValue:l(N),"onUpdate:modelValue":t[24]||(t[24]=s=>B(N)?N.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])),o(Ia,{onClick:Ge,label:e.$t("Is An Employee"),modelValue:l(A),"onUpdate:modelValue":t[25]||(t[25]=s=>B(A)?A.value=s:null),class:"mt-2"},null,8,["label","modelValue"]),l(A)?$("",!0):(c(),g(T,{key:2,class:"mt-3",disabled:!l(N),block:"",loading:l(X),onClick:Ee},{default:d(()=>[j(v(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])),l(A)?(c(),g(T,{key:3,class:"mt-3",disabled:!l(U),block:"",loading:l(re),onClick:Ye},{default:d(()=>[j(v(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):$("",!0)]),_:1})]),_:1}),o(i,{class:"mt-5"},{default:d(()=>[o(ie,{class:"w-100 px-2 py-2",variant:"tonal",color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:d(()=>[o(le,null,{default:d(()=>[o(i,{align:"center",justify:"space-between"},{default:d(()=>[f("p",La,v(e.$t("Deliver Cost")),1),f("p",Ra,v(l(a).delivery_cost??.5)+" KWD",1)]),_:1}),o(i,null,{default:d(()=>[o(pe,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),o(i,{align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[Ya,f("p",Ga,v(Number(l(C)+(l(a).delivery_cost??.5)).toFixed(1))+" KWD",1)]),_:1}),l(a).v_code?(c(),g(i,{key:0},{default:d(()=>[o(pe,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):$("",!0),l(a).v_code||l(a).employee_code?(c(),g(i,{key:1,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[f("p",Ja,v(e.$t("Discount rate")),1),f("p",Qa,v(l(q)),1)]),_:1})):$("",!0),l(a).v_code||l(a).employee_code?(c(),g(i,{key:2},{default:d(()=>[o(pe,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):$("",!0),l(a).v_code||l(a).employee_code?(c(),g(i,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[f("p",Xa,v(e.$t("New Total")),1),f("p",Za,v(Number(l(He)).toFixed(2))+" KWD",1)]),_:1})):$("",!0)]),_:1})]),_:1},8,["color"])]),_:1}),o(i,{class:"mt-8"},{default:d(()=>[o(T,{type:"submit",loading:l(J),block:""},{default:d(()=>[j(v(e.$t("Create Order")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"])]),_:1},8,["onSubmit"])]),_:1})])}}};typeof Ne=="function"&&Ne(Ae);const Sl=da(Ae,[["__scopeId","data-v-4ba9617b"]]);export{Sl as default};
