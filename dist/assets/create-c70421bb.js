import{_ as ia}from"./AppTextarea-b9a2511e.js";import{_ as pa}from"./OrderProducts-bb8821c0.js";import{_ as ca}from"./AppDateTimePicker-ca12c496.js";import{_ as ma}from"./DialogCloseBtn-500092e9.js";import{ba as va,C as fa,l as i,aV as _a,O as ne,R as ba,aB as ya,o as v,c as J,q as s,w as d,I as ie,F as Ne,a as Pe,s as l,b as h,aX as Q,az as A,H as O,y as _,G as B,n as b,aY as ga,z as Ie,U as c,W as f,A as $,a$ as Be,b0 as Ue,b1 as x,b2 as Ae,bc as Oe,t as Te,bd as ha,aZ as je,aW as Va,a_ as wa,a8 as ka,a9 as $a}from"./index-cd6e397c.js";import{t as xa}from"./files-2e167225.js";import{g as Da}from"./areas-9bf63453.js";import{a as Ca,g as Fa}from"./branches-5c10204b.js";import{c as Sa,b as Na,d as Pa}from"./orders-f1e8c9c1.js";import{g as Ia}from"./products-45f70334.js";import{V as be}from"./VDialog-78575564.js";import{V as ye}from"./VSelect-f0c451b8.js";import{V as Ee}from"./VCombobox-033212fb.js";import{V as Ba}from"./VChip-58bc3ef0.js";import{V as Ua}from"./VSwitch-bf5ef992.js";import{V as Aa}from"./VCheckbox-9f5ab861.js";import{V as ge}from"./VDivider-63776dff.js";import"./VDataTable-bbbb18cc.js";import"./VCheckboxBtn-20254eaf.js";import"./VSelectionControl-3dc26c63.js";import"./VList-e6671050.js";import"./ssrBoot-bac75ad6.js";import"./filter-741b2b8e.js";import"./VTable-1adc11da.js";import"./VOverlay-2dff3dc3.js";import"./lazy-bcffb8ac.js";import"./dialog-transition-381e65bd.js";import"./VMenu-281a5abf.js";function Oa(M){return va.post("agent/employee/check",M)}const Ta=M=>(ka("data-v-33865e11"),M=M(),$a(),M),ja=["disabled"],Ea={style:{width:"120px",height:"120px",border:"2px solid lightgrey"},class:"product_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},qa={class:"w-100 h-100",style:{overflow:"hidden"}},Ma=["src"],Ha={class:"text-h4 pt-3 pb-2"},Wa={class:"text-h4 pt-3"},Ka={class:"text-h4 pt-3 mb-5"},za={class:"text-h4 pt-3 mb-5"},La={key:0,class:"w-100 flex-grow-1 d-flex"},Ra={key:1,class:"w-100 flex-grow-1 d-flex"},Ya={class:"text-h4 pt-3 mb-0"},Ga={class:"text-h4 pt-3 mb-4"},Ja={class:"text-h4 pt-3 mb-1"},Qa={class:"text-h4 pt-3 mb-5"},Xa={class:"mb-2"},Za={class:"mb-2"},el=Ta(()=>b("p",{class:"mb-2"},"Total",-1)),al={class:"mb-2"},ll={class:"mb-2"},tl={class:"mb-2"},sl={class:"mb-0"},rl={class:"mb-0"},qe={__name:"create",setup(M){var Ce;const Me=(Ce=JSON.parse(localStorage.getItem("userData")))==null?void 0:Ce.type,H=i(""),he=i(),Ve=i(),D=_a(),le=i(!1),X=i([]),S=i([]),we=i([]),te=i(!1),pe=i(!1),ce=i(!1),me=i(!1);i(!1);const ve=i(!1),P=i([]),y=i(1),W=i(),N=i([]),k=i(0),Z=i(new Date().toISOString()),se=i(!1),ee=i(0),ke=i(!1),$e=i([]);i(0);const U=i(""),K=i(""),T=i(!1),z=i(""),fe=i(0),L=i(!1),ae=i(!1),w=i([]),j=i(""),E=i(!1),I=i(null),R=i(null),Y=i(!1),re=i(null),G=i(!1),de=i(1),a=i({is_pickup:!0,products:[],email:"",name:"",note:"",address_city:1,delivery_date:"",delivery_time:"",address_building_no:"",block_no:"",address_floor:"",address_phone:"",address_apartment:"",address_address_area:null,address_street_name:"",delivery_man_id:"",branch_id:null,v_code:"",employee_code:"",extra:null,flavor:null}),He=()=>{Ca().then(({data:e,meta:t})=>{a.value.delivery_cost=e.data.delivery_cost})},We=()=>{me.value=!0,Da().then(({data:e,meta:t})=>{we.value=e.data,me.value=!1})},xe=e=>{ce.value=!0,Ia(e).then(({data:t,meta:o})=>{P.value=t.data,ce.value=!1})},Ke=()=>{var e;(e=he.value)==null||e.validate().then(async({valid:t})=>{t&&(te.value=!0,Sa({phone:`${H.value}`}).then(o=>{D.success("Customer found!"),$e.value=o.data.data.length?o.data.data[0]:[],a.value.email=o.data.email,a.value.name=o.data.name,ke.value=!0,te.value=!1,Je()}).catch(o=>{D.error(o.response.data.message),te.value=!1}))})},ze=()=>{pe.value=!0,Fa().then(({data:e})=>{X.value=e.data.filter(t=>t.is_active===1),S.value=e.data.filter(t=>t.id===2),I.value=S.value[0].start,re.value=I.value,R.value=S.value[0].end,ee.value+=1,pe.value=!1})},Le=()=>{se.value=!0,Na({v_code:U.value,total:k.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};a.value.v_code=U.value,U.value="",K.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],z.value=e.data.discount_type,D.success(e.data.message),se.value=!1}).catch(e=>{D.error(e.response.data.message),se.value=!1})},Re=ne(()=>(z.value=="fixed"?fe.value=parseInt(k.value-parseInt(K.value)):z.value=="percentage"?fe.value=parseInt(k.value)-parseInt(k.value)*parseInt(K.value)/100:z.value=="free_delivery",fe.value+(a.value.delivery_cost??.5))),Ye=()=>{const e=W.value;if(N.value.includes(e)){a.value.products.find(o=>o.product_id===e.id).quantity=parseInt(a.value.products.find(o=>o.product_id===e.id).quantity)+parseInt(y.value);let t=N.value.find(o=>o==e);t.quantity=parseInt(t.quantity)+parseInt(y.value),t.total=t.total+y.value*e.price,k.value+=y.value*e.price,e.has_note==1&&a.value.products.find(o=>o.product_id==e.id).notes.push("")}else{if(e.has_image==1&&e.has_note==1){a.value.products.push({product_id:e.id,quantity:parseInt(y.value),images:[],notes:[]});for(let t=0;t<y.value;t++)a.value.products.find(o=>o.product_id==e.id).notes[t]="";e.images=0,w.value.push({product_id:e.id})}else if(e.has_image==1&&e.has_note==0)a.value.products.push({product_id:e.id,quantity:parseInt(y.value),images:[]}),e.images=0,w.value.push({product_id:e.id});else if(e.has_image==0&&e.has_note==1){a.value.products.push({product_id:e.id,quantity:parseInt(y.value),notes:[]});for(let t=0;t<y.value;t++)a.value.products.find(o=>o.product_id==e.id).notes[t]=""}else a.value.products.push({product_id:e.id,quantity:parseInt(y.value)});e.quantity=y.value,k.value+=e.price*y.value,e.total=e.price*y.value,N.value.push(e)}W.value=null,y.value=1},De=()=>{const e=new Date;if(a.value.delivery_time=null,T.value=!1,a.value.is_pickup===!1&&(a.value.delivery_date=null,a.value.delivery_time=null),a.value.is_pickup===!0&&(a.value.address_address_area==null||a.value.address_address_area==""))S.value=X.value.filter(t=>t.id===2);else if(a.value.delivery_date!==_e(e)&&a.value.is_pickup===!0)S.value=X.value.filter(t=>t.id===2),a.value.branch_id=2;else if(a.value.delivery_date==_e(e)){const t=X.value.filter(o=>o.areas.find(u=>u.name===a.value.address_address_area)!==void 0);t.find(o=>o.id==a.value.branch_id)||(a.value.branch_id=null),S.value=t}else if(a.value.is_pickup===!1&&a.value.address_address_area!==null&&a.value.address_address_area!==""){const t=X.value.filter(o=>o.areas.find(u=>u.name===a.value.address_address_area)!==void 0);t.find(o=>o.id==a.value.branch_id)||(a.value.branch_id=null),S.value=t}},_e=e=>{const t=String(e.getDate()).padStart(2,"0"),o=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${o}-${t}`},oe=()=>{S.value.find(e=>e.id===a.value.branch_id),ee.value+=1,Ge()},Ge=()=>{var t,o,n,u;const e=new Date;if(e.toISOString(),De(),S.value.find(m=>m.id==a.value.branch_id),a.value.delivery_date==_e(e)){const m=e.getHours(),g=e.getMinutes(),[r,V]=(t=I.value.split(":"))==null?void 0:t.map(Number),[C,F]=(o=R.value.split(":"))==null?void 0:o.map(Number);if(m>C||m===C&&g>=F)Y.value=!0,T.value=!1;else if(m<r||m===r&&g<V)I.value=re.value;else{const q=new Date(new Date().setMinutes(new Date().getMinutes()+46)),Fe=q.getHours(),ua=q.getMinutes();(n=I.value.split(":"))==null||n.map(Number);const[Se,na]=(u=R.value.split(":"))==null?void 0:u.map(Number);Fe>Se||Fe===Se&&ua>=na?(Y.value=!0,T.value=!1):(T.value=!1,I.value=new Date(new Date().setMinutes(new Date().getMinutes()+46)).toTimeString().slice(0,5))}}else{Y.value=!1,I.value=re.value,T.value=!1;let m,g=new Date(ue.value),r=new Date(g);r.setHours(0,0,0,0);let V=new Date(g);if(V.setHours(4,55,0,0),a.value.delivery_date==""||a.value.delivery_date==null)return;(new Date(a.value.delivery_date).getDate()!==new Date(ue.value).getDate()||g>=r&&g<=V)&&(m="menuType=pre-order",T.value=!0,xe(m))}ee.value+=1,a.value.delivery_time=null},Je=()=>{const e=$e.value;a.value.address_apartment=e==null?void 0:e.apartment,a.value.block_no=e==null?void 0:e.block_no,a.value.address_building_no=e==null?void 0:e.building_num,a.value.address_floor=e==null?void 0:e.floor,a.value.address_street_name=e==null?void 0:e.street_name,a.value.address_address_area=e.area_name,a.value.address_phone=H.value,ke.value=!1},Qe=e=>{let t=0;if(e.hasOwnProperty("extras")){const o=a.value.products.find(u=>u.product_id==e.id);P.value.find(u=>u.id==e.id).extras.forEach(u=>{o.extra.includes(u.id)&&(t+=Number(u.price))})}k.value=k.value-t-e.price*e.quantity,N.value.splice(N.value.indexOf(e),1),a.value.products.splice(a.value.products.indexOf(a.value.products.find(o=>o.product_id==e.id)),1),e.has_image==1&&w.value.splice(w.value.indexOf(w.value.find(o=>o.product_id==e.id)),1)},Xe=async()=>{var t,o,n;if(a.value.is_pickup===!1){const u=new Date().getHours(),m=new Date().getMinutes(),[g,r]=(t=re.value.split(":"))==null?void 0:t.map(Number),[V,C]=(o=R.value.split(":"))==null?void 0:o.map(Number);if(u>V||u===V&&m>=C||u<g||u===g&&m<r)return D.error("The Branch is currently closed.")}let e=new FormData;e.append("branch_id",a.value.branch_id),e.append("is_pickup",a.value.is_pickup),e.append("email",a.value.email),e.append("name",a.value.name),e.append("agent_note",a.value.agent),e.append("address_city",a.value.address_city),a.value.delivery_date!==null&&e.append("delivery_date",a.value.delivery_date+" "+a.value.delivery_time+":00"),e.append("address_building_no",a.value.address_building_no),e.append("block_no",a.value.block_no),e.append("address_floor",a.value.address_floor),e.append("address_phone",a.value.address_phone),e.append("address_apartment",a.value.address_apartment),e.append("address_address_area",a.value.address_address_area),e.append("address_street_name",a.value.address_street_name),e.append("v_code",a.value.v_code),e.append("employee_code",a.value.employee_code),a.value.products.forEach((u,m)=>{var r,V,C;e.append(`products[${m}][product_id]`,u.product_id),e.append(`products[${m}][quantity]`,u.quantity),(r=u.images)==null||r.forEach((F,q)=>{e.append(`products[${m}][images][${q}]`,F.file)}),(V=u.notes)==null||V.forEach((F,q)=>{e.append(`products[${m}][notes][${q}]`,F)}),console.log(u);let g=0;u.hasOwnProperty("extra")&&((C=u==null?void 0:u.extra)==null||C.filter(F=>F!=="").forEach((F,q)=>{e.append(`products[${m}][extra_flavors][${g}]`,F),g++})),u.hasOwnProperty("flavor")&&e.append(`products[${m}][extra_flavors][${g}]`,u.flavor)}),(n=Ve.value)==null||n.validate().then(async({valid:u})=>{if(u){if(w.value.length>0)return D.error("You must pick at least the min number of Images for each Product");if(a.value.products.length==0)return D.error("You need to select at least 1 product");if(k.value<5)return D.error("The Total Cost Without The Delivery Cost Must Be More Than 5 KWD");le.value=!0;try{await Pa(e),D.success("Order created successfully"),Va.push({name:"my-orders"}),le.value=!1}catch(m){D.error(m.response.data.message),le.value=!1}}})},Ze=()=>{ve.value=!0,Oa({employee_code:j.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};D.success(e.meesage),K.value=parseInt(e.discount_rate)+t[e.discount_type],z.value=e.discount_type,a.value.employee_code=j.value}).catch(({response:e})=>{D.error(e.data.message)}).finally(()=>{ve.value=!1})},ea=()=>{K.value="",z.value="",j.value="",U.value="",a.value.v_code="",a.value.employee_code=""},p=i(),aa=e=>{L.value=!0,p.value=e.id},la=e=>{ae.value=!0,p.value=e},ta=e=>{var o,n;p.value=e.id;const t=a.value.products.find(u=>u.product_id==p.value);t.hasOwnProperty("flavor")&&(a.value.flavor=(o=a.value.products.find(u=>u.product_id==p.value))==null?void 0:o.flavor),t.hasOwnProperty("extra")&&(a.value.extra=(n=a.value.products.find(u=>u.product_id==p.value))==null?void 0:n.extra),G.value=!0},sa=async e=>{let t=N.value.find(u=>u.id==p.value),o=a.value.products.find(u=>u.product_id==p.value);const n={file:e.target.files[0],id:o.images.length,binary:""};await xa(n.file).then(u=>{n.binary=u}),o.images.push(n),t.images+=1,t.images==t.quantity&&w.value.splice(w.value.indexOf(w.value.find(u=>u.product_id==p.value.product_id))),e.target.value=""},ra=e=>{let t=a.value.products.find(n=>n.product_id==p.value),o=N.value.find(n=>n.id==p.value);o.images-=1,o.images==o.quantity?w.value.splice(w.value.indexOf(w.value.find(n=>n.product_id==p.value))):w.value.map(n=>n.product_id).includes(o.id)||w.value.push({product_id:o.id}),t.images.splice(t.images.indexOf(e),1)};ne(()=>P.value.find(e=>e.id==p.value).extras),ne(()=>P.value.find(e=>e.id==p.value).flavors);const da=()=>{let e=a.value.products.find(n=>n.product_id==p.value),t=N.value.find(n=>n.id==p.value);P.value.find(n=>n.id==p.value).extras.forEach(n=>{e.hasOwnProperty("extra")&&e.extra.includes(n.id)&&(k.value-=n.price,t.total-=n.price)}),e.extra=a.value.extra,e.flavor=a.value.flavor;let o=0;P.value.find(n=>n.id==p.value).extras.forEach(n=>{e.extra.includes(n.id)&&(o+=Number(n.price)*Number(e.quantity),t.total+=Number(n.price)*Number(e.quantity))}),k.value=k.value+o,G.value=!1,a.value.extra=[],a.value.flavor=""},ue=i(new Date().toISOString());ba(()=>{Me=="agent"&&(ze(),xe(),We(),He());let e=setInterval(()=>{Z.value=new Date().toISOString(),new Date(ue.value).getDate()!==new Date(Z.value).getDate()&&(ue.value=Z.value,de.value=de.value*2)},1e3);ya(()=>{clearInterval(e)})});const oa=ne(()=>a.value.branch_id!==null);return(e,t)=>{const o=wa,n=ma,u=ca,m=pa,g=ia;return v(),J("div",null,[s(be,{modelValue:l(ae),"onUpdate:modelValue":t[1]||(t[1]=r=>B(ae)?ae.value=r:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[s(ie,{title:e.$t("Products Notes")},{default:d(()=>[(v(!0),J(Ne,null,Pe(l(a).products.find(r=>r.product_id==l(p).id).notes,(r,V)=>(v(),h(Q,{class:"pt-2"},{default:d(()=>[s(o,{label:`Note #${V+1}`,class:"flex-grow-1",modelValue:l(a).products.find(C=>C.product_id==l(p).id).notes[V],"onUpdate:modelValue":C=>l(a).products.find(F=>F.product_id==l(p).id).notes[V]=C},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024))),256)),s(Q,{class:"d-flex justify-end gap-3 flex-wrap"},{default:d(()=>[s(A,{onClick:t[0]||(t[0]=r=>ae.value=!1)},{default:d(()=>[O(_(e.$t("Save")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),s(be,{modelValue:l(L),"onUpdate:modelValue":t[3]||(t[3]=r=>B(L)?L.value=r:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[s(n,{onClick:t[2]||(t[2]=r=>L.value=!l(L))}),s(ie,{title:"Product Images"},{default:d(()=>[s(Q,{class:"d-flex flex-row align-center px-0 pb-5 pt-0 flex-wrap px-5"},{default:d(()=>[b("div",{style:ga([l(a).products.find(r=>r.product_id==l(p)).images.length==l(a).products.find(r=>r.product_id==l(p)).quantity*10?"pointer-events: none;":"",{width:"120px",height:"120px",border:"2px solid lightgrey"}]),class:"add_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},[s(Ie,{class:"position-absolute",icon:"tabler-plus"}),b("input",{onChange:sa,type:"file",name:"file",style:{opacity:"0",height:"100%"},class:"h-100",multiple:"",accept:"image/png, image/gif, image/jpeg",disabled:l(a).products.find(r=>r.product_id==l(p)).images.length==l(a).products.find(r=>r.product_id==l(p)).quantity*10},null,40,ja)],4),(v(!0),J(Ne,null,Pe(l(a).products.find(r=>r.product_id==l(p)).images,r=>(v(),J("div",Ea,[s(A,{size:"33",color:"error",class:"delete_btn position-absolute px-1 py-1"},{default:d(()=>[s(Ie,{icon:"tabler-trash",size:"22",onClick:V=>ra(r)},null,8,["onClick"])]),_:2},1024),b("div",qa,[b("img",{src:r.binary,style:{"object-fit":"cover"},class:"w-100 h-100",alt:"product_image"},null,8,Ma)])]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(be,{modelValue:l(G),"onUpdate:modelValue":t[8]||(t[8]=r=>B(G)?G.value=r:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[s(n,{onClick:t[4]||(t[4]=r=>G.value=!1)}),s(ie,{title:"Additional Options"},{default:d(()=>[s(Q,null,{default:d(()=>[l(p)?(v(),h(c,{key:0},{default:d(()=>[s(f,{cols:"6"},{default:d(()=>[s(ye,{"prepend-inner-icon":"tabler-building-store",placeholder:"Flavor",label:e.$t("Flavor"),modelValue:l(a).flavor,"onUpdate:modelValue":t[5]||(t[5]=r=>l(a).flavor=r),items:l(P).find(r=>r.id==l(p)).flavors,"item-value":"id","item-title":"name",variant:"outlined","return-object":!1,class:"flex-grow-1 my-1 mx-2"},null,8,["label","modelValue","items"])]),_:1}),s(f,{cols:"6"},{default:d(()=>[s(ye,{"prepend-inner-icon":"tabler-package",modelValue:l(a).extra,"onUpdate:modelValue":t[6]||(t[6]=r=>l(a).extra=r),"item-title":"name",items:l(P).find(r=>r.id==l(p)).extras,"item-value":"id",variant:"outlined",label:e.$t("Extra"),"return-object":!1,class:"flex-grow-1 my-1 mx-2",multiple:""},null,8,["modelValue","items","label"])]),_:1})]),_:1})):$("",!0)]),_:1}),s(Q,{class:"d-flex justify-end gap-3 flex-wrap"},{default:d(()=>[s(A,{onClick:t[7]||(t[7]=r=>da())},{default:d(()=>[O(" Confirm ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(c,{class:"mt-4 px-2",justify:"space-around"},{default:d(()=>[s(l(Be),{ref_key:"refVForm",ref:Ve,onSubmit:Ue(Xe,["prevent"]),class:"w-100 d-flex"},{default:d(()=>[s(f,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:8},{default:d(()=>[b("p",Ha,_(e.$t("Create Order")),1),s(l(Be),{ref_key:"phoneForm",ref:he,onSubmit:Ue(Ke,["prevent"])},{default:d(()=>[s(f,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Wa,_(e.$t("Search by Phone Number")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"start"},{default:d(()=>[s(o,{rules:[l(x),l(Ae),l(Oe)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:l(H),"onUpdate:modelValue":t[9]||(t[9]=r=>B(H)?H.value=r:null),placeholder:e.$t("Phone Number")},null,8,["rules","modelValue","placeholder"]),s(A,{type:"submit",disabled:!l(H),loading:l(te)},{default:d(()=>[O(_(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[s(f,null,{default:d(()=>[s(c,null,{default:d(()=>[s(f,null,{default:d(()=>[s(c,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:d(()=>[b("p",Ka,_(e.$t("Area & Branch")),1)]),_:1}),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"center",class:Te(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:d(()=>[s(f,{cols:"6",class:"ma-0 py-0 pe-0 pe-2"},{default:d(()=>[s(Ee,{clearable:"","prepend-inner-icon":"tabler-building-community",loading:l(me),modelValue:l(a).address_address_area,"onUpdate:modelValue":[t[10]||(t[10]=r=>l(a).address_address_area=r),t[11]||(t[11]=r=>oe())],items:l(we),"item-value":"name","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",rules:[l(x)],label:e.$t("Area"),class:"flex-grow-1 my-1 w-100"},null,8,["loading","modelValue","items","rules","label"])]),_:1}),s(f,{cols:"6",class:"ma-0 py-0 pe-0 pe-2"},{default:d(()=>[s(ye,{clearable:"","prepend-inner-icon":"tabler-building-store",placeholder:e.$t("Select a Branch"),rules:[l(x)],label:e.$t("Branch"),loading:l(pe),modelValue:l(a).branch_id,"onUpdate:modelValue":[t[12]||(t[12]=r=>l(a).branch_id=r),oe],items:l(S),"item-value":"id","item-title":"name_en",style:{width:"100%"},variant:"outlined",disabled:!l(a).address_address_area||l(a).address_address_area=="",class:"flex-grow-1 my-1 w-100"},null,8,["placeholder","rules","label","loading","modelValue","items","disabled"])]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}),s(c,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:d(()=>[b("p",za,_(e.$t("Order Scheduling")),1),l(Y)&&l(a).is_pickup?(v(),h(Ba,{key:0,size:"large",label:"",color:"error",class:"text-h6",height:"200","prepend-icon":"tabler-info-circle"},{default:d(()=>[O("The Branch is currently Closed")]),_:1})):$("",!0)]),_:1}),s(c,{justify:"space-between",align:"center",class:Te(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:d(()=>[l(a).is_pickup?(v(),J("div",La,[(v(),h(u,{rules:[l(x)],disabled:!l(a).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:l(a).delivery_date,"onUpdate:modelValue":[t[13]||(t[13]=r=>l(a).delivery_date=r),oe],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:l(Z)},key:l(de)},null,8,["rules","disabled","modelValue","placeholder","config"])),(v(),h(u,{rules:[l(x)],disabled:!l(a).is_pickup||l(Y)||!l(oa),"prepend-inner-icon":"tabler-clock",modelValue:l(a).delivery_time,"onUpdate:modelValue":t[14]||(t[14]=r=>l(a).delivery_time=r),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:l(ee),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:l(I),maxTime:l(R)}},null,8,["rules","disabled","modelValue","placeholder","config"]))])):$("",!0),l(a).is_pickup?$("",!0):(v(),J("div",Ra,[(v(),h(u,{disabled:!l(a).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:l(a).delivery_date,"onUpdate:modelValue":[t[15]||(t[15]=r=>l(a).delivery_date=r),oe],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:l(Z)},key:l(de)},null,8,["disabled","modelValue","placeholder","config"])),(v(),h(u,{disabled:!l(a).is_pickup||l(Y),"prepend-inner-icon":"tabler-clock",modelValue:l(a).delivery_time,"onUpdate:modelValue":t[16]||(t[16]=r=>l(a).delivery_time=r),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:l(ee),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:l(I),maxTime:l(R)}},null,8,["disabled","modelValue","placeholder","config"]))])),s(c,{class:"w-50 mx-2 my-0",justify:e.$vuetify.display.smAndDown?"center":"start"},{default:d(()=>[s(Ua,{modelValue:l(a).is_pickup,"onUpdate:modelValue":[t[17]||(t[17]=r=>l(a).is_pickup=r),De],"false-value":!1,"true-value":!0,inset:!1,label:e.$t("Schedule Order")},null,8,["modelValue","label"])]),_:1},8,["justify"])]),_:1},8,["class"])]),_:1})]),_:1}),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Ya,_(e.$t("Products")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"end"},{default:d(()=>[s(Ee,{disabled:!l(a).branch_id||!l(a).delivery_date&&l(a).is_pickup,"prepend-inner-icon":"tabler-package",loading:l(ce),modelValue:l(W),"onUpdate:modelValue":t[18]||(t[18]=r=>B(W)?W.value=r:null),items:l(P),"item-title":"name_en","item-value":"id",style:{width:"100%"},variant:"outlined",label:e.$t("Products"),class:"flex-grow-1 my-1 w-50 mx-2"},null,8,["disabled","loading","modelValue","items","label"]),s(o,{label:e.$t("Quantity"),type:"number",disabled:!l(a).branch_id||!String(l(a).delivery_date).length&&l(a).is_pickup,class:"flex-grow-1 mx-2 my-1 w-25",modelValue:l(y),"onUpdate:modelValue":t[19]||(t[19]=r=>B(y)?y.value=r:null)},null,8,["label","disabled","modelValue"]),s(A,{"prepend-icon":"tabler-plus",class:"flex-grow-1 mx-2 my-1",disabled:l(y)<=0||!l(W),onClick:Ye},{default:d(()=>[O("Add")]),_:1},8,["disabled"])]),_:1}),s(c,{align:"center"},{default:d(()=>[l(N).length?(v(),h(m,{key:0,items:l(N),onDelete:Qe,onAddImage:aa,onAddNote:la,onAddExtraFlavors:ta,isPreValid:l(T)},null,8,["items","isPreValid"])):$("",!0)]),_:1})]),_:1})]),_:1}),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Ga,_(e.$t("User Details")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"end"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-user",label:e.$t("Name"),rules:[l(x)],placeholder:e.$t("Customer Name"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).name,"onUpdate:modelValue":t[20]||(t[20]=r=>l(a).name=r)},null,8,["label","rules","placeholder","modelValue"]),s(o,{"prepend-inner-icon":"tabler-at",label:e.$t("Email"),placeholder:e.$t("Customer Email"),rules:[l(ha),l(x)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).email,"onUpdate:modelValue":t[21]||(t[21]=r=>l(a).email=r)},null,8,["label","placeholder","rules","modelValue"])]),_:1}),s(c,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-phone",placeholder:e.$t("Customer Phone Number"),label:e.$t("Phone Number"),rules:[l(Ae),l(x),l(Oe)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_phone,"onUpdate:modelValue":t[22]||(t[22]=r=>l(a).address_phone=r)},null,8,["placeholder","label","rules","modelValue"])]),_:1})]),_:1})]),_:1}),s(f,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Ja,_(e.$t("User Address")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"end"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-container",label:e.$t("Building Number"),rules:[l(x)],placeholder:e.$t("Building Number"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_building_no,"onUpdate:modelValue":t[23]||(t[23]=r=>l(a).address_building_no=r)},null,8,["label","rules","placeholder","modelValue"]),s(o,{"prepend-inner-icon":"tabler-stairs",placeholder:e.$t("Floor"),label:e.$t("Floor"),rules:[l(x)],class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_floor,"onUpdate:modelValue":t[24]||(t[24]=r=>l(a).address_floor=r)},null,8,["placeholder","label","rules","modelValue"])]),_:1}),s(c,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-window",label:e.$t("Apartment"),rules:[l(x)],placeholder:e.$t("Apartment"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_apartment,"onUpdate:modelValue":t[25]||(t[25]=r=>l(a).address_apartment=r)},null,8,["label","rules","placeholder","modelValue"]),s(o,{"prepend-inner-icon":"tabler-road",placeholder:e.$t("Street Name"),rules:[l(x)],label:e.$t("Street Name"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).address_street_name,"onUpdate:modelValue":t[26]||(t[26]=r=>l(a).address_street_name=r)},null,8,["placeholder","rules","label","modelValue"])]),_:1}),s(c,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[s(o,{"prepend-inner-icon":"tabler-number",rules:[l(x)],label:e.$t("Block Number"),placeholder:e.$t("Block Number"),class:"flex-grow-1 mx-2 my-1",modelValue:l(a).block_no,"onUpdate:modelValue":t[27]||(t[27]=r=>l(a).block_no=r)},null,8,["rules","label","placeholder","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"]),s(f,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:4},{default:d(()=>[s(f,{class:"mt-16 px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",Qa,_(e.$t("Order Summary")),1),s(f,null,{default:d(()=>[s(c,{justify:"space-between",align:"center",class:"pt-0"},{default:d(()=>[s(g,{"v-model":l(a).note,label:e.$t("Note"),class:"w-100 mt-0"},null,8,["v-model","label"])]),_:1}),s(c,{class:"mt-4"},{default:d(()=>[s(f,{class:"w-100 px-0"},{default:d(()=>[l(E)?(v(),h(o,{key:0,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-user-star",placeholder:e.$t("Enter Employee code"),modelValue:l(j),"onUpdate:modelValue":t[28]||(t[28]=r=>B(j)?j.value=r:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])):$("",!0),l(E)?$("",!0):(v(),h(o,{key:1,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-gift",placeholder:e.$t("Have a Voucher?"),modelValue:l(U),"onUpdate:modelValue":t[29]||(t[29]=r=>B(U)?U.value=r:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])),s(Aa,{onClick:ea,label:e.$t("Is An Employee"),modelValue:l(E),"onUpdate:modelValue":t[30]||(t[30]=r=>B(E)?E.value=r:null),class:"mt-2"},null,8,["label","modelValue"]),l(E)?$("",!0):(v(),h(A,{key:2,class:"mt-3",disabled:!l(U),block:"",loading:l(se),onClick:Le},{default:d(()=>[O(_(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])),l(E)?(v(),h(A,{key:3,class:"mt-3",disabled:!l(j),block:"",loading:l(ve),onClick:Ze},{default:d(()=>[O(_(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):$("",!0)]),_:1})]),_:1}),s(c,{class:"mt-5"},{default:d(()=>[s(ie,{class:"w-100 px-2 py-2",variant:"tonal",color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:d(()=>[s(Q,null,{default:d(()=>[s(c,{align:"center",justify:"space-between"},{default:d(()=>[b("p",Xa,_(e.$t("Deliver Cost")),1),b("p",Za,_(l(a).delivery_cost??.5)+" KWD",1)]),_:1}),s(c,null,{default:d(()=>[s(ge,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),s(c,{align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[el,b("p",al,_(Number(l(k)+(l(a).delivery_cost??.5)).toFixed(1))+" KWD",1)]),_:1}),l(a).v_code?(v(),h(c,{key:0},{default:d(()=>[s(ge,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):$("",!0),l(a).v_code||l(a).employee_code?(v(),h(c,{key:1,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[b("p",ll,_(e.$t("Discount rate")),1),b("p",tl,_(l(K)),1)]),_:1})):$("",!0),l(a).v_code||l(a).employee_code?(v(),h(c,{key:2},{default:d(()=>[s(ge,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):$("",!0),l(a).v_code||l(a).employee_code?(v(),h(c,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[b("p",sl,_(e.$t("New Total")),1),b("p",rl,_(Number(l(Re)).toFixed(2))+" KWD",1)]),_:1})):$("",!0)]),_:1})]),_:1},8,["color"])]),_:1}),s(c,{class:"mt-8"},{default:d(()=>[s(A,{type:"submit",loading:l(le),block:""},{default:d(()=>[O(_(e.$t("Create Order")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"])]),_:1},8,["onSubmit"])]),_:1})])}}};typeof je=="function"&&je(qe);const Ul=fa(qe,[["__scopeId","data-v-33865e11"]]);export{Ul as default};
