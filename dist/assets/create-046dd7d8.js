import{_ as ia}from"./AppTextarea-be04a7bc.js";import{_ as pa}from"./OrderProducts-cf7113f2.js";import{_ as ca}from"./AppDateTimePicker-b76d694a.js";import{_ as ma}from"./DialogCloseBtn-96acf277.js";import{b5 as va,C as fa,l as i,aV as _a,O as ne,R as ba,aB as ya,o as v,c as J,q as s,w as d,I as ue,F as Se,a as Ne,s as l,b as g,aX as Q,az as A,H as O,y as _,G as B,n as b,aY as ga,z as Pe,U as c,W as f,A as w,a$ as Ie,b0 as Be,b1 as k,b2 as Ue,bc as Ae,t as Oe,bd as ha,aZ as Te,aW as Va,a_ as wa,a8 as ka,a9 as $a}from"./index-ff119983.js";import{t as xa}from"./files-2e167225.js";import{g as Da}from"./areas-c698ddd9.js";import{a as Ca,g as Fa}from"./branches-2bbdc0c9.js";import{c as Sa,b as Na,d as Pa}from"./orders-7e6e0de8.js";import{a as Ia}from"./products-0160781a.js";import{V as be}from"./VDialog-6e05e026.js";import{V as ye}from"./VSelect-a49af761.js";import{V as je}from"./VCombobox-378f9976.js";import{V as Ba}from"./VChip-b76c50ca.js";import{V as Ua}from"./VSwitch-a1f0c7ff.js";import{V as Aa}from"./VCheckbox-658ebea3.js";import{V as ge}from"./VDivider-856000c4.js";import"./VDataTable-bc707c71.js";import"./VCheckboxBtn-043d95b9.js";import"./VSelectionControl-16166eb0.js";import"./VList-565b818c.js";import"./ssrBoot-05ebc2b2.js";import"./filter-46ce1e41.js";import"./VTable-4b8a39db.js";import"./VOverlay-40fd52dc.js";import"./lazy-bade2ea5.js";import"./dialog-transition-17577805.js";import"./VMenu-acb5fd2d.js";function Oa(q){return va.post("agent/employee/check",q)}const Ta=q=>(ka("data-v-07d5c191"),q=q(),$a(),q),ja=["disabled"],Ea={style:{width:"120px",height:"120px",border:"2px solid lightgrey"},class:"product_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},qa={class:"w-100 h-100",style:{overflow:"hidden"}},Ma=["src"],Ha={class:"text-h4 pt-3 pb-2"},Wa={class:"text-h4 pt-3"},Ka={class:"text-h4 pt-3 mb-5"},za={class:"text-h4 pt-3 mb-5"},La={key:0,class:"w-100 flex-grow-1 d-flex"},Ra={key:1,class:"w-100 flex-grow-1 d-flex"},Ya={class:"text-h4 pt-3 mb-0"},Ga={class:"text-h4 pt-3 mb-4"},Ja={class:"text-h4 pt-3 mb-1"},Qa={class:"text-h4 pt-3 mb-5"},Xa={class:"mb-2"},Za={class:"mb-2"},el=Ta(()=>b("p",{class:"mb-2"},"Total",-1)),al={class:"mb-2"},ll={class:"mb-2"},tl={class:"mb-2"},sl={class:"mb-0"},rl={class:"mb-0"},Ee={__name:"create",setup(q){var De;const qe=(De=JSON.parse(localStorage.getItem("userData")))==null?void 0:De.type,M=i(""),he=i(),Ve=i(),$=_a(),le=i(!1),X=i([]),S=i([]),we=i([]),te=i(!1),ie=i(!1),pe=i(!1),ce=i(!1);i(!1);const me=i(!1),P=i([]),y=i(1),H=i(),N=i([]),V=i(0),Z=i(new Date().toISOString()),se=i(!1),ee=i(0),ke=i(!1),$e=i([]);i(0);const U=i(""),W=i(""),K=i(!1),z=i(""),ve=i(0),L=i(!1),ae=i(!1),h=i([]),T=i(""),j=i(!1),I=i(null),R=i(null),Y=i(!1),re=i(null),G=i(!1),de=i(1),a=i({is_pickup:!0,products:[],email:"",name:"",note:"",address_city:1,delivery_date:"",delivery_time:"",address_building_no:"",block_no:"",address_floor:"",address_phone:"",address_apartment:"",address_address_area:null,address_street_name:"",delivery_man_id:"",branch_id:null,v_code:"",employee_code:"",extra:null,flavor:null}),Me=()=>{Ca().then(({data:e,meta:t})=>{a.value.delivery_cost=e.data.delivery_cost})},He=()=>{ce.value=!0,Da().then(({data:e,meta:t})=>{we.value=e.data,ce.value=!1})},We=e=>{pe.value=!0,Ia(e).then(({data:t,meta:o})=>{P.value=t.data,pe.value=!1})},Ke=()=>{var e;(e=he.value)==null||e.validate().then(async({valid:t})=>{t&&(te.value=!0,Sa({phone:`${M.value}`}).then(o=>{$.success("Customer found!"),$e.value=o.data.data.length?o.data.data[0]:[],a.value.email=o.data.email,a.value.name=o.data.name,ke.value=!0,te.value=!1,Je()}).catch(o=>{$.error(o.response.data.message),te.value=!1}))})},ze=()=>{ie.value=!0,Fa().then(({data:e})=>{X.value=e.data.filter(t=>t.is_active===1),S.value=e.data.filter(t=>t.id===2),I.value=S.value[0].start,re.value=I.value,R.value=S.value[0].end,ee.value+=1,ie.value=!1})},Le=()=>{se.value=!0,Na({v_code:U.value,total:V.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};a.value.v_code=U.value,U.value="",W.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],z.value=e.data.discount_type,$.success(e.data.message),se.value=!1}).catch(e=>{$.error(e.response.data.message),se.value=!1})},Re=ne(()=>(z.value=="fixed"?ve.value=parseInt(V.value-parseInt(W.value)):z.value=="percentage"?ve.value=parseInt(V.value)-parseInt(V.value)*parseInt(W.value)/100:z.value=="free_delivery",ve.value+(a.value.delivery_cost??.5))),Ye=()=>{const e=H.value;if(N.value.includes(e)){a.value.products.find(o=>o.product_id===e.id).quantity=parseInt(a.value.products.find(o=>o.product_id===e.id).quantity)+parseInt(y.value);let t=N.value.find(o=>o==e);t.quantity=parseInt(t.quantity)+parseInt(y.value),t.total=t.total+y.value*e.price,V.value+=y.value*e.price,e.has_note==1&&a.value.products.find(o=>o.product_id==e.id).notes.push("")}else{if(e.has_image==1&&e.has_note==1){a.value.products.push({product_id:e.id,quantity:parseInt(y.value),images:[],notes:[]});for(let t=0;t<y.value;t++)a.value.products.find(o=>o.product_id==e.id).notes[t]="";e.images=0,h.value.push({product_id:e.id})}else if(e.has_image==1&&e.has_note==0)a.value.products.push({product_id:e.id,quantity:parseInt(y.value),images:[]}),e.images=0,h.value.push({product_id:e.id});else if(e.has_image==0&&e.has_note==1){a.value.products.push({product_id:e.id,quantity:parseInt(y.value),notes:[]});for(let t=0;t<y.value;t++)a.value.products.find(o=>o.product_id==e.id).notes[t]=""}else a.value.products.push({product_id:e.id,quantity:parseInt(y.value)});e.quantity=y.value,V.value+=e.price*y.value,e.total=e.price*y.value,N.value.push(e)}H.value=null,y.value=1},xe=()=>{const e=new Date;if(a.value.delivery_time=null,K.value=!1,a.value.is_pickup===!1&&(a.value.delivery_date=null,a.value.delivery_time=null),a.value.is_pickup===!0&&(a.value.address_address_area==null||a.value.address_address_area==""))S.value=X.value.filter(t=>t.id===2);else if(a.value.delivery_date!==fe(e)&&a.value.is_pickup===!0)S.value=X.value.filter(t=>t.id===2),a.value.branch_id=2;else if(a.value.delivery_date==fe(e)){const t=X.value.filter(o=>o.areas.find(n=>n.name===a.value.address_address_area)!==void 0);t.find(o=>o.id==a.value.branch_id)||(a.value.branch_id=null),S.value=t}else if(a.value.is_pickup===!1&&a.value.address_address_area!==null&&a.value.address_address_area!==""){const t=X.value.filter(o=>o.areas.find(n=>n.name===a.value.address_address_area)!==void 0);t.find(o=>o.id==a.value.branch_id)||(a.value.branch_id=null),S.value=t}},fe=e=>{const t=String(e.getDate()).padStart(2,"0"),o=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${o}-${t}`},oe=()=>{S.value.find(e=>e.id===a.value.branch_id),ee.value+=1,Ge()},Ge=()=>{var t,o,u,n;const e=new Date;if(e.toISOString(),xe(),S.value.find(m=>m.id==a.value.branch_id),a.value.delivery_date==fe(e)){const m=e.getHours(),x=e.getMinutes(),[r,D]=(t=I.value.split(":"))==null?void 0:t.map(Number),[C,F]=(o=R.value.split(":"))==null?void 0:o.map(Number);if(m>C||m===C&&x>=F)Y.value=!0,K.value=!1;else if(m<r||m===r&&x<D)I.value=re.value;else{const E=new Date(new Date().setMinutes(new Date().getMinutes()+46)),Ce=E.getHours(),na=E.getMinutes();(u=I.value.split(":"))==null||u.map(Number);const[Fe,ua]=(n=R.value.split(":"))==null?void 0:n.map(Number);Ce>Fe||Ce===Fe&&na>=ua?(Y.value=!0,K.value=!1):(K.value=!1,I.value=new Date(new Date().setMinutes(new Date().getMinutes()+46)).toTimeString().slice(0,5))}}else{Y.value=!1,I.value=re.value,K.value=!1;let m=new Date(_e.value);if(new Date(m).setHours(0,0,0,0),new Date(m).setHours(4,55,0,0),a.value.delivery_date==""||a.value.delivery_date==null)return}ee.value+=1,a.value.delivery_time=null},Je=()=>{const e=$e.value;a.value.address_apartment=e==null?void 0:e.apartment,a.value.block_no=e==null?void 0:e.block_no,a.value.address_building_no=e==null?void 0:e.building_num,a.value.address_floor=e==null?void 0:e.floor,a.value.address_street_name=e==null?void 0:e.street_name,a.value.address_address_area=e.area_name,a.value.address_phone=M.value,ke.value=!1},Qe=e=>{let t=0;if(e.hasOwnProperty("extras")){const o=a.value.products.find(n=>n.product_id==e.id);P.value.find(n=>n.id==e.id).extras.forEach(n=>{var m;(m=o.extra)!=null&&m.includes(n.id)&&(t+=Number(n.price))})}V.value=V.value-t-e.price*e.quantity,N.value.splice(N.value.indexOf(e),1),a.value.products.splice(a.value.products.indexOf(a.value.products.find(o=>o.product_id==e.id)),1),e.has_image==1&&h.value.splice(h.value.indexOf(h.value.find(o=>o.product_id==e.id)),1)},Xe=async()=>{var t,o,u;if(a.value.is_pickup===!1){const n=new Date().getHours(),m=new Date().getMinutes(),[x,r]=(t=re.value.split(":"))==null?void 0:t.map(Number),[D,C]=(o=R.value.split(":"))==null?void 0:o.map(Number);if(n>D||n===D&&m>=C||n<x||n===x&&m<r)return $.error("The Branch is currently closed.")}let e=new FormData;e.append("branch_id",a.value.branch_id),e.append("is_pickup",a.value.is_pickup),e.append("email",a.value.email),e.append("name",a.value.name),e.append("agent_note",a.value.agent),e.append("address_city",a.value.address_city),a.value.delivery_date!==null&&e.append("delivery_date",a.value.delivery_date+" "+a.value.delivery_time+":00"),e.append("address_building_no",a.value.address_building_no),e.append("block_no",a.value.block_no),e.append("address_floor",a.value.address_floor),e.append("address_phone",a.value.address_phone),e.append("address_apartment",a.value.address_apartment),e.append("address_address_area",a.value.address_address_area),e.append("address_street_name",a.value.address_street_name),e.append("v_code",a.value.v_code),e.append("employee_code",a.value.employee_code),a.value.products.forEach((n,m)=>{var r,D,C;e.append(`products[${m}][product_id]`,n.product_id),e.append(`products[${m}][quantity]`,n.quantity),(r=n.images)==null||r.forEach((F,E)=>{e.append(`products[${m}][images][${E}]`,F.file)}),(D=n.notes)==null||D.forEach((F,E)=>{e.append(`products[${m}][notes][${E}]`,F)}),console.log(n);let x=0;n.hasOwnProperty("extra")&&((C=n==null?void 0:n.extra)==null||C.filter(F=>F!=="").forEach((F,E)=>{e.append(`products[${m}][extra_flavors][${x}]`,F),x++})),n.hasOwnProperty("flavor")&&e.append(`products[${m}][extra_flavors][${x}]`,n.flavor)}),(u=Ve.value)==null||u.validate().then(async({valid:n})=>{if(n){if(h.value.length>0)return $.error("You must pick at least the min number of Images for each Product");if(a.value.products.length==0)return $.error("You need to select at least 1 product");if(V.value<5)return $.error("The Total Cost Without The Delivery Cost Must Be More Than 5 KWD");le.value=!0;try{await Pa(e),$.success("Order created successfully"),Va.push({name:"my-orders"}),le.value=!1}catch(m){$.error(m.response.data.message),le.value=!1}}})},Ze=()=>{me.value=!0,Oa({employee_code:T.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};$.success(e.meesage),W.value=parseInt(e.discount_rate)+t[e.discount_type],z.value=e.discount_type,a.value.employee_code=T.value}).catch(({response:e})=>{$.error(e.data.message)}).finally(()=>{me.value=!1})},ea=()=>{W.value="",z.value="",T.value="",U.value="",a.value.v_code="",a.value.employee_code=""},p=i(),aa=e=>{L.value=!0,p.value=e.id},la=e=>{ae.value=!0,p.value=e},ta=e=>{var o,u;p.value=e.id;const t=a.value.products.find(n=>n.product_id==p.value);t.hasOwnProperty("flavor")&&(a.value.flavor=(o=a.value.products.find(n=>n.product_id==p.value))==null?void 0:o.flavor),t.hasOwnProperty("extra")&&(a.value.extra=(u=a.value.products.find(n=>n.product_id==p.value))==null?void 0:u.extra),G.value=!0},sa=async e=>{let t=N.value.find(n=>n.id==p.value),o=a.value.products.find(n=>n.product_id==p.value);const u={file:e.target.files[0],id:o.images.length,binary:""};await xa(u.file).then(n=>{u.binary=n}),o.images.push(u),t.images+=1,t.images==t.quantity&&h.value.splice(h.value.indexOf(h.value.find(n=>n.product_id==p.value.product_id))),e.target.value=""},ra=e=>{let t=a.value.products.find(u=>u.product_id==p.value),o=N.value.find(u=>u.id==p.value);o.images-=1,o.images==o.quantity?h.value.splice(h.value.indexOf(h.value.find(u=>u.product_id==p.value))):h.value.map(u=>u.product_id).includes(o.id)||h.value.push({product_id:o.id}),t.images.splice(t.images.indexOf(e),1)};ne(()=>P.value.find(e=>e.id==p.value).extras),ne(()=>P.value.find(e=>e.id==p.value).flavors);const da=()=>{let e=a.value.products.find(u=>u.product_id==p.value),t=N.value.find(u=>u.id==p.value);P.value.find(u=>u.id==p.value).extras.forEach(u=>{e.hasOwnProperty("extra")&&e.extra.includes(u.id)&&(V.value-=u.price,t.total-=u.price)}),e.extra=a.value.extra,e.flavor=a.value.flavor;let o=0;P.value.find(u=>u.id==p.value).extras.forEach(u=>{e.extra.includes(u.id)&&(o+=Number(u.price)*Number(e.quantity),t.total+=Number(u.price)*Number(e.quantity))}),V.value=V.value+o,G.value=!1,a.value.extra=[],a.value.flavor=""},_e=i(new Date().toISOString());ba(()=>{qe=="agent"&&(ze(),We(),He(),Me());let e=setInterval(()=>{Z.value=new Date().toISOString(),new Date(_e.value).getDate()!==new Date(Z.value).getDate()&&(_e.value=Z.value,de.value=de.value*2)},1e3);ya(()=>{clearInterval(e)})});const oa=ne(()=>a.value.branch_id!==null);return(e,t)=>{const o=wa,u=ma,n=ca,m=pa,x=ia;return v(),J("div",null,[s(be,{modelValue:l(ae),"onUpdate:modelValue":t[1]||(t[1]=r=>B(ae)?ae.value=r:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[s(ue,{title:e.$t("Products Notes")},{default:d(()=>[(v(!0),J(Se,null,Ne(l(a).products.find(r=>r.product_id==l(p).id).notes,(r,D)=>(v(),g(Q,{class:"pt-2"},{default:d(()=>[s(o,{label:`Note #${D+1}`,class:"flex-grow-1",modelValue:l(a).products.find(C=>C.product_id==l(p).id).notes[D],"onUpdate:modelValue":C=>l(a).products.find(F=>F.product_id==l(p).id).notes[D]=C},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024))),256)),s(Q,{class:"d-flex justify-end gap-3 flex-wrap"},{default:d(()=>[s(A,{onClick:t[0]||(t[0]=r=>ae.value=!1)},{default:d(()=>[O(_(e.$t("Save")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),s(be,{modelValue:l(L),"onUpdate:modelValue":t[3]||(t[3]=r=>B(L)?L.value=r:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[s(u,{onClick:t[2]||(t[2]=r=>L.value=!l(L))}),s(ue,{title:"Product Images"},{default:d(()=>[s(Q,{class:"d-flex flex-row align-center px-0 pb-5 pt-0 flex-wrap px-5"},{default:d(()=>[b("div",{style:ga([l(a).products.find(r=>r.product_id==l(p)).images.length==l(a).products.find(r=>r.product_id==l(p)).quantity*10?"pointer-events: none;":"",{width:"120px",height:"120px",border:"2px solid lightgrey"}]),class:"add_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},[s(Pe,{class:"position-absolute",icon:"tabler-plus"}),b("input",{onChange:sa,type:"file",name:"file",style:{opacity:"0",height:"100%"},class:"h-100",multiple:"",accept:"image/png, image/gif, image/jpeg",disabled:l(a).products.find(r=>r.product_id==l(p)).images.length==l(a).products.find(r=>r.product_id==l(p)).quantity*10},null,40,ja)],4),(v(!0),J(Se,null,Ne(l(a).products.find(r=>r.product_id==l(p)).images,r=>(v(),J("div",Ea,[s(A,{size:"33",color:"error",class:"delete_btn position-absolute px-1 py-1"},{default:d(()=>[s(Pe,{icon:"tabler-trash",size:"22",onClick:D=>ra(r)},null,8,["onClick"])]),_:2},1024),b("div",qa,[b("img",{src:r.binary,style:{"object-fit":"cover"},class:"w-100 h-100",alt:"product_image"},null,8,Ma)])]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(be,{modelValue:l(G),"onUpdate:modelValue":t[8]||(t[8]=r=>B(G)?G.value=r:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[s(u,{onClick:t[4]||(t[4]=r=>G.value=!1)}),s(ue,{title:"Additional Options"},{default:d(()=>[s(Q,null,{default:d(()=>[l(p)?(v(),g(c,{key:0},{default:d(()=>[s(f,{cols:"6"},{default:d(()=>[s(ye,{"prepend-inner-icon":"tabler-building-store",placeholder:"Flavor",label:e.$t("Flavor"),modelValue:l(a).flavor,"onUpdate:modelValue":t[5]||(t[5]=r=>l(a).flavor=r),items:l(P).find(r=>r.id==l(p)).flavors,"item-value":"id","item-title":"name",variant:"outlined","return-object":!1,class:"flex-grow-1 my-1 mx-2"},null,8,["label","modelValue","items"])]),_:1}),s(f,{cols:"6"},{default:d(()=>[s(ye,{"prepend-inner-icon":"tabler-package",modelValue:l(a).extra,"onUpdate:modelValue":t[6]||(t[6]=r=>l(a).extra=r),"item-title":"name",items:l(P).find(r=>r.id==l(p)).extras,"item-value":"id",variant:"outlined",label:e.$t("Extra"),"return-object":!1,class:"flex-grow-1 my-1 mx-2",multiple:""},null,8,["modelValue","items","label"])]),_:1})]),_:1})):w("",!0)]),_:1}),s(Q,{class:"d-flex justify-end gap-3 flex-wrap"},{default:d(()=>[s(A,{onClick:t[7]||(t[7]=r=>da())},{default:d(()=>[O(" Confirm ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(c,{class:"mt-4 px-2",justify:"space-around"},{default:d(()=>[s(l(Ie),{ref_key:"refVForm",ref:Ve,onSubmit:Be(Xe,["prevent"]),class:"w-100 d-flex"},{default:d(()=>[s(f,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:8},{default:d(()=>[b("p",Ha,_(e.$t("Create Order")),1),s(l(Ie),{ref_key:"phoneForm",ref:he,onSubmit:Be(Ke,["prevent"])},{default:d(()=>[s(f,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Wa,_(e.$t("Search by Phone Number")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"start"},{default:d(()=>[s(o,{rules:[l(k),l(Ue),l(Ae)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:l(M),"onUpdate:modelValue":t[9]||(t[9]=r=>B(M)?M.value=r:null),placeholder:e.$t("Phone Number")},null,8,["rules","modelValue","placeholder"]),s(A,{type:"submit",disabled:!l(M),loading:l(te)},{default:d(()=>[O(_(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[s(f,null,{default:d(()=>[s(c,null,{default:d(()=>[s(f,null,{default:d(()=>[s(c,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:d(()=>[b("p",Ka,_(e.$t("Area & Branch")),1)]),_:1}),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"center",class:Oe(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:d(()=>[s(f,{cols:"6",class:"ma-0 py-0 pe-0 pe-2"},{default:d(()=>[s(je,{clearable:"","prepend-inner-icon":"tabler-building-community",loading:l(ce),modelValue:l(a).address_address_area,"onUpdate:modelValue":[t[10]||(t[10]=r=>l(a).address_address_area=r),t[11]||(t[11]=r=>oe())],items:l(we),"item-value":"name","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",rules:[l(k)],label:e.$t("Area"),class:"flex-grow-1 my-1 w-100"},null,8,["loading","modelValue","items","rules","label"])]),_:1}),s(f,{cols:"6",class:"ma-0 py-0 pe-0 pe-2"},{default:d(()=>[s(ye,{clearable:"","prepend-inner-icon":"tabler-building-store",placeholder:e.$t("Select a Branch"),rules:[l(k)],label:e.$t("Branch"),loading:l(ie),modelValue:l(a).branch_id,"onUpdate:modelValue":[t[12]||(t[12]=r=>l(a).branch_id=r),oe],items:l(S),"item-value":"id","item-title":"name_en",style:{width:"100%"},variant:"outlined",disabled:!l(a).address_address_area||l(a).address_address_area=="",class:"flex-grow-1 my-1 w-100"},null,8,["placeholder","rules","label","loading","modelValue","items","disabled"])]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}),s(c,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:d(()=>[b("p",za,_(e.$t("Order Scheduling")),1),l(Y)&&l(a).is_pickup?(v(),g(Ba,{key:0,size:"large",label:"",color:"error",class:"text-h6",height:"200","prepend-icon":"tabler-info-circle"},{default:d(()=>[O("The Branch is currently Closed")]),_:1})):w("",!0)]),_:1}),s(c,{justify:"space-between",align:"center",class:Oe(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:d(()=>[l(a).is_pickup?(v(),J("div",La,[(v(),g(n,{rules:[l(k)],disabled:!l(a).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:l(a).delivery_date,"onUpdate:modelValue":[t[13]||(t[13]=r=>l(a).delivery_date=r),oe],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:l(Z)},key:l(de)},null,8,["rules","disabled","modelValue","placeholder","config"])),(v(),g(n,{rules:[l(k)],disabled:!l(a).is_pickup||l(Y)||!l(oa),"prepend-inner-icon":"tabler-clock",modelValue:l(a).delivery_time,"onUpdate:modelValue":t[14]||(t[14]=r=>l(a).delivery_time=r),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:l(ee),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:l(I),maxTime:l(R)}},null,8,["rules","disabled","modelValue","placeholder","config"]))])):w("",!0),l(a).is_pickup?w("",!0):(v(),J("div",Ra,[(v(),g(n,{disabled:!l(a).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:l(a).delivery_date,"onUpdate:modelValue":[t[15]||(t[15]=r=>l(a).delivery_date=r),oe],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:l(Z)},key:l(de)},null,8,["disabled","modelValue","placeholder","config"])),(v(),g(n,{disabled:!l(a).is_pickup||l(Y),"prepend-inner-icon":"tabler-clock",modelValue:l(a).delivery_time,"onUpdate:modelValue":t[16]||(t[16]=r=>l(a).delivery_time=r),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:l(ee),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:l(I),maxTime:l(R)}},null,8,["disabled","modelValue","placeholder","config"]))])),s(c,{class:"w-50 mx-2 my-0",justify:e.$vuetify.display.smAndDown?"center":"start"},{default:d(()=>[s(Ua,{modelValue:l(a).is_pickup,"onUpdate:modelValue":[t[17]||(t[17]=r=>l(a).is_pickup=r),xe],"false-value":!1,"true-value":!0,inset:!1,label:e.$t("Schedule Order")},null,8,["modelValue","label"])]),_:1},8,["justify"])]),_:1},8,["class"])]),_:1})]),_:1}),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Ya,_(e.$t("Products")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"end"},{default:d(()=>[s(je,{disabled:!l(a).branch_id||!l(a).delivery_date&&l(a).is_pickup,"prepend-inner-icon":"tabler-package",loading:l(pe),modelValue:l(H),"onUpdate:modelValue":t[18]||(t[18]=r=>B(H)?H.value=r:null),items:l(P),"item-title":"name_en","item-value":"id",style:{width:"100%"},variant:"outlined",label:e.$t("Products"),class:"flex-grow-1 my-1 w-50 mx-2"},null,8,["disabled","loading","modelValue","items","label"]),s(o,{label:e.$t("Quantity"),type:"number",disabled:!l(a).branch_id||!String(l(a).delivery_date).length&&l(a).is_pickup,class:"flex-grow-1 mx-2 my-1 w-25",modelValue:l(y),"onUpdate:modelValue":t[19]||(t[19]=r=>B(y)?y.value=r:null)},null,8,["label","disabled","modelValue"]),s(A,{"prepend-icon":"tabler-plus",class:"flex-grow-1 mx-2 my-1",disabled:l(y)<=0||!l(H),onClick:Ye},{default:d(()=>[O("Add")]),_:1},8,["disabled"])]),_:1}),s(c,{align:"center"},{default:d(()=>[l(N).length?(v(),g(m,{key:0,items:l(N),onDelete:Qe,onAddImage:aa,onAddNote:la,onAddExtraFlavors:ta,isPreValid:l(K)},null,8,["items","isPreValid"])):w("",!0)]),_:1})]),_:1})]),_:1}),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Ga,_(e.$t("User Details")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"end"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-user",label:e.$t("Name"),rules:[l(k)],placeholder:e.$t("Customer Name"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).name,"onUpdate:modelValue":t[20]||(t[20]=r=>l(a).name=r)},null,8,["label","rules","placeholder","modelValue"]),s(o,{"prepend-inner-icon":"tabler-at",label:e.$t("Email"),placeholder:e.$t("Customer Email"),rules:[l(ha),l(k)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).email,"onUpdate:modelValue":t[21]||(t[21]=r=>l(a).email=r)},null,8,["label","placeholder","rules","modelValue"])]),_:1}),s(c,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-phone",placeholder:e.$t("Customer Phone Number"),label:e.$t("Phone Number"),rules:[l(Ue),l(k),l(Ae)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_phone,"onUpdate:modelValue":t[22]||(t[22]=r=>l(a).address_phone=r)},null,8,["placeholder","label","rules","modelValue"])]),_:1})]),_:1})]),_:1}),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Ja,_(e.$t("User Address")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"end"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-container",label:e.$t("Building Number"),rules:[l(k)],placeholder:e.$t("Building Number"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_building_no,"onUpdate:modelValue":t[23]||(t[23]=r=>l(a).address_building_no=r)},null,8,["label","rules","placeholder","modelValue"]),s(o,{"prepend-inner-icon":"tabler-stairs",placeholder:e.$t("Floor"),label:e.$t("Floor"),rules:[l(k)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_floor,"onUpdate:modelValue":t[24]||(t[24]=r=>l(a).address_floor=r)},null,8,["placeholder","label","rules","modelValue"])]),_:1}),s(c,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-window",label:e.$t("Apartment"),rules:[l(k)],placeholder:e.$t("Apartment"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_apartment,"onUpdate:modelValue":t[25]||(t[25]=r=>l(a).address_apartment=r)},null,8,["label","rules","placeholder","modelValue"]),s(o,{"prepend-inner-icon":"tabler-road",placeholder:e.$t("Street Name"),rules:[l(k)],label:e.$t("Street Name"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_street_name,"onUpdate:modelValue":t[26]||(t[26]=r=>l(a).address_street_name=r)},null,8,["placeholder","rules","label","modelValue"])]),_:1}),s(c,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-number",rules:[l(k)],label:e.$t("Block Number"),placeholder:e.$t("Block Number"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).block_no,"onUpdate:modelValue":t[27]||(t[27]=r=>l(a).block_no=r)},null,8,["rules","label","placeholder","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"]),s(f,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:4},{default:d(()=>[s(f,{class:"mt-16 px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Qa,_(e.$t("Order Summary")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"center",class:"pt-0"},{default:d(()=>[s(x,{"v-model":l(a).note,label:e.$t("Note"),class:"w-100 mt-0"},null,8,["v-model","label"])]),_:1}),s(c,{class:"mt-4"},{default:d(()=>[s(f,{class:"w-100 px-0"},{default:d(()=>[l(j)?(v(),g(o,{key:0,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-user-star",placeholder:e.$t("Enter Employee code"),modelValue:l(T),"onUpdate:modelValue":t[28]||(t[28]=r=>B(T)?T.value=r:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])):w("",!0),l(j)?w("",!0):(v(),g(o,{key:1,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-gift",placeholder:e.$t("Have a Voucher?"),modelValue:l(U),"onUpdate:modelValue":t[29]||(t[29]=r=>B(U)?U.value=r:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])),s(Aa,{onClick:ea,label:e.$t("Is An Employee"),modelValue:l(j),"onUpdate:modelValue":t[30]||(t[30]=r=>B(j)?j.value=r:null),class:"mt-2"},null,8,["label","modelValue"]),l(j)?w("",!0):(v(),g(A,{key:2,class:"mt-3",disabled:!l(U),block:"",loading:l(se),onClick:Le},{default:d(()=>[O(_(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])),l(j)?(v(),g(A,{key:3,class:"mt-3",disabled:!l(T),block:"",loading:l(me),onClick:Ze},{default:d(()=>[O(_(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):w("",!0)]),_:1})]),_:1}),s(c,{class:"mt-5"},{default:d(()=>[s(ue,{class:"w-100 px-2 py-2",variant:"tonal",color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:d(()=>[s(Q,null,{default:d(()=>[s(c,{align:"center",justify:"space-between"},{default:d(()=>[b("p",Xa,_(e.$t("Deliver Cost")),1),b("p",Za,_(l(a).delivery_cost??.5)+" KWD",1)]),_:1}),s(c,null,{default:d(()=>[s(ge,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),s(c,{align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[el,b("p",al,_(Number(l(V)+(l(a).delivery_cost??.5)).toFixed(1))+" KWD",1)]),_:1}),l(a).v_code?(v(),g(c,{key:0},{default:d(()=>[s(ge,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):w("",!0),l(a).v_code||l(a).employee_code?(v(),g(c,{key:1,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[b("p",ll,_(e.$t("Discount rate")),1),b("p",tl,_(l(W)),1)]),_:1})):w("",!0),l(a).v_code||l(a).employee_code?(v(),g(c,{key:2},{default:d(()=>[s(ge,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):w("",!0),l(a).v_code||l(a).employee_code?(v(),g(c,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[b("p",sl,_(e.$t("New Total")),1),b("p",rl,_(Number(l(Re)).toFixed(2))+" KWD",1)]),_:1})):w("",!0)]),_:1})]),_:1},8,["color"])]),_:1}),s(c,{class:"mt-8"},{default:d(()=>[s(A,{type:"submit",loading:l(le),block:""},{default:d(()=>[O(_(e.$t("Create Order")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"])]),_:1},8,["onSubmit"])]),_:1})])}}};typeof Te=="function"&&Te(Ee);const Ul=fa(Ee,[["__scopeId","data-v-07d5c191"]]);export{Ul as default};