import{_ as wa}from"./OrderProducts-53c80408.js";import{_ as ka}from"./AppDateTimePicker-3f8e0ddf.js";import{_ as $a}from"./DialogCloseBtn-91460259.js";import{b5 as Ae,b6 as xa,C as Da,l as i,D as Ca,O as se,aV as Sa,R as Fa,aB as Ia,E as Pa,o as p,c as re,q as r,w as d,I as ge,F as He,a as Re,s as a,b as _,aX as ue,az as N,H as A,y as f,G as O,n as b,aY as Na,z as We,U as v,W as y,A as g,a$ as xe,b0 as De,b1 as $,b2 as Ce,bc as Se,t as Ke,bd as Aa,aZ as ze,aW as Ba,a_ as Ua,a8 as Ta,a9 as ja}from"./index-0bb0cc22.js";import{g as Oa}from"./areas-cc050dd0.js";import{a as Ea,g as qa}from"./branches-b77eb682.js";import{c as Ma}from"./employees-e3c8a0df.js";import{c as Ha,a as Ra,b as Wa}from"./orders-88403405.js";import{c as Ka,a as za,b as La}from"./orders-f6ca5bf8.js";import{b as Ya}from"./products-368d0ca8.js";import{g as Ga}from"./products-d23be236.js";import{t as Ja}from"./files-2e167225.js";import{V as Fe}from"./VDialog-e64705aa.js";import{V as Ie}from"./VSelect-6fcb57fa.js";import{V as Pe}from"./VCombobox-548e6126.js";import{V as Qa}from"./VChip-e155d780.js";import{V as Xa}from"./VSwitch-dc7ec028.js";import{V as Za}from"./VCheckbox-61c3ee6f.js";import{V as Ne}from"./VDivider-ea64b2d6.js";import"./VDataTable-572aad38.js";import"./VCheckboxBtn-7ff81017.js";import"./VSelectionControl-aba741ed.js";import"./VList-960630c2.js";import"./ssrBoot-e4838fc0.js";import"./filter-654261dc.js";import"./VTable-8db878f5.js";import"./VOverlay-61faf366.js";import"./lazy-765d4dbc.js";import"./dialog-transition-71d07923.js";import"./VMenu-eab6c9ac.js";function el(){return Ae.get("/areas")}let{get:al,show:st,update:rt,create:ut,remove:dt}=xa("/restaurant-apis/branches");function ll(){return Ae.get("/restaurant-apis/branch/service-cost")}function tl(Q){return Ae.post("/restaurant-apis/employee/check",Q)}const sl=Q=>(Ta("data-v-0905fcc1"),Q=Q(),ja(),Q),rl=["disabled"],ul={style:{width:"120px",height:"120px",border:"2px solid lightgrey"},class:"product_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},dl={class:"w-100 h-100",style:{overflow:"hidden"}},nl=["src"],ol={class:"text-h4 pt-3 pb-2"},il={class:"text-h4 pt-3"},cl={class:"text-h4 pt-3"},pl={class:"text-h4 pt-3 mb-5"},ml={class:"text-h4 pt-3 mb-5"},vl={key:0,class:"w-100 flex-grow-1 d-flex"},fl={key:1,class:"w-100 flex-grow-1 d-flex"},_l={class:"text-h4 pt-3 mb-0"},yl={class:"text-h4 pt-3 mb-4"},gl={class:"text-h4 pt-3 mb-1"},bl={class:"text-h4 pt-3 mb-5"},hl={class:"mb-2"},Vl={class:"mb-2"},wl=sl(()=>b("p",{class:"mb-2"},"Total",-1)),kl={class:"mb-2"},$l={class:"mb-2"},xl={class:"mb-2"},Dl={class:"mb-0"},Cl={class:"mb-0"},Le={__name:"create",setup(Q){var qe;const de=i(new Date().toISOString()),be=Ca(),ne=be.t,Ye=se(()=>{if(be.locale.value==="en")return"name_en";if(be.locale.value==="ar")return"name_ar"}),w=(qe=JSON.parse(localStorage.getItem("userData")))==null?void 0:qe.type,I=i(""),ve=i(),Be=i(),h=Sa(),fe=i(!1),K=i([]),C=i([]),_e=i([]),q=i(!1),X=i(!1),oe=i(!1),Z=i(!1),ee=i(!1),z=i(!1),ie=i(!1),ae=i(!1),B=i([]),V=i(1),le=i(),U=i([]),x=i(0),M=i(!1),L=i(0),he=i(!1),Ve=i([]),F=i(""),H=i(""),R=i(""),we=i(0),T=i(""),E=i(!1),P=i(null),Y=i(null),te=i(!1),ce=i(null),pe=i(1),W=i(!1),l=i({is_pickup:!0,products:[],email:"",name:"",agent:"",address_city:1,delivery_date:"",delivery_time:"",delivery_cost:"",address_building_no:"",block_no:"",address_floor:"",address_phone:"",address_apartment:"",address_address_area:null,address_street_name:"",branch_id:null,v_code:"",employee_code:"",extra:null,flavor:null}),Ge=se(()=>l.value.branch_id!==null),D=i([]),Je=()=>{Z.value=!0,Oa().then(({data:e,meta:t})=>{_e.value=e.data,Z.value=!1})},Qe=()=>{Z.value=!0,el().then(({data:e})=>{_e.value=e.data,Z.value=!1})},Xe=()=>{X.value=!0,al().then(({data:e})=>{K.value=e.data,X.value=!0,K.value=e.data.filter(t=>t.is_active===1),C.value=e.data.filter(t=>t.id===2),P.value=C.value[0].start,ce.value=P.value,Y.value=C.value[0].end,L.value+=1,X.value=!1})},Ue=e=>{oe.value=!0,Ya(e).then(({data:t,meta:u})=>{B.value=t.data,oe.value=!1})},Te=e=>{oe.value=!0,Ga(e).then(({data:t,meta:u})=>{B.value=t.data}),oe.value=!1},Ze=()=>{var e;(e=ve.value)==null||e.validate().then(async({valid:t})=>{t&&(q.value=!0,Ha({phone:`${I.value}`}).then(u=>{h.success("Customer found!"),Ve.value=u.data.data.length?u.data.data[0]:[],l.value.email=u.data.email,l.value.name=u.data.name,he.value=!0,q.value=!1,Oe()}).catch(u=>{h.error(u.response.data.message),q.value=!1}))})},ea=()=>{var e;(e=ve.value)==null||e.validate().then(async({valid:t})=>{t&&(q.value=!0,Ka({phone:`${I.value}`}).then(u=>{h.success("Customer found!"),Ve.value=u.data.data.length?u.data.data[0]:[],l.value.email=u.data.email,l.value.name=u.data.name,he.value=!0,q.value=!1,Oe()}).catch(u=>{h.error(u.response.data.message),q.value=!1}))})},aa=()=>{X.value=!0,Ea().then(({data:e})=>{K.value=e.data.filter(t=>t.is_active===1),C.value=e.data.filter(t=>t.id===2),P.value=C.value[0].start,ce.value=P.value,Y.value=C.value[0].end,L.value+=1,X.value=!1})},la=()=>{qa().then(({data:e,meta:t})=>{l.value.delivery_cost=e.data.delivery_cost})},ta=()=>{ll().then(({data:e,meta:t})=>{l.value.delivery_cost=e.data.delivery_cost})},sa=()=>{M.value=!0,Ra({v_code:F.value,total:x.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};l.value.v_code=F.value,F.value="",H.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],R.value=e.data.discount_type,h.success(e.data.message),M.value=!1}).catch(e=>{h.error(e.response.data.message),M.value=!1})},ra=()=>{M.value=!0,za({v_code:F.value,total:x.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};l.value.v_code=F.value,F.value="",H.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],R.value=e.data.discount_type,h.success(e.data.message),M.value=!1}).catch(e=>{h.error(e.response.data.message),M.value=!1})},ua=se(()=>(R.value=="fixed"?we.value=parseInt(x.value-parseInt(H.value)):R.value=="percentage"?we.value=parseInt(x.value)-parseInt(x.value)*parseInt(H.value)/100:R.value=="free_delivery",we.value+(l.value.delivery_cost??0))),da=()=>{const e=le.value;if(U.value.includes(e)){l.value.products.find(u=>u.product_id===e.id).quantity=parseInt(l.value.products.find(u=>u.product_id===e.id).quantity)+parseInt(V.value);let t=U.value.find(u=>u==e);t.quantity=parseInt(t.quantity)+parseInt(V.value),t.total=t.total+V.value*e.price,x.value+=V.value*e.price,e.has_note==1&&l.value.products.find(u=>u.product_id==e.id).notes.push("")}else{if(e.has_image==1&&e.has_note==1){l.value.products.push({product_id:e.id,quantity:parseInt(V.value),images:[],notes:[]});for(let t=0;t<V.value;t++)l.value.products.find(u=>u.product_id==e.id).notes[t]="";e.images=0,D.value.push({product_id:e.id})}else if(e.has_image==1&&e.has_note==0)l.value.products.push({product_id:e.id,quantity:parseInt(V.value),images:[]}),e.images=0,D.value.push({product_id:e.id});else if(e.has_image==0&&e.has_note==1){l.value.products.push({product_id:e.id,quantity:parseInt(V.value),notes:[]});for(let t=0;t<V.value;t++)l.value.products.find(u=>u.product_id==e.id).notes[t]=""}else l.value.products.push({product_id:e.id,quantity:parseInt(V.value)});e.quantity=V.value,x.value+=e.price*V.value,e.total=e.price*V.value,U.value.push(e)}le.value=null,V.value=1},je=()=>{const e=new Date;if(l.value.delivery_time=null,W.value=!1,l.value.is_pickup===!1&&(l.value.delivery_date=null,l.value.delivery_time=null),l.value.is_pickup===!0&&(l.value.address_address_area==null||l.value.address_address_area==""))C.value=K.value.filter(t=>t.id===2);else if(l.value.delivery_date!==ke(e)&&l.value.is_pickup===!0)C.value=K.value.filter(t=>t.id===2),l.value.branch_id=2;else if(l.value.delivery_date==ke(e)){const t=K.value.filter(u=>u.areas.find(n=>n.name===l.value.address_address_area)!==void 0);t.find(u=>u.id==l.value.branch_id)||(l.value.branch_id=null),C.value=t}else if(l.value.is_pickup===!1&&l.value.address_address_area!==null&&l.value.address_address_area!==""){const t=K.value.filter(u=>u.areas.find(n=>n.name===l.value.address_address_area)!==void 0);t.find(u=>u.id==l.value.branch_id)||(l.value.branch_id=null),C.value=t}},me=()=>{C.value.find(n=>n.id===l.value.branch_id),L.value+=1;const e=new Date,t=e.toISOString().split("T")[0];let u=new Date(e);u.setHours(0,0,0,0);let o=new Date(e);o.setHours(4,55,0,0),l.value.delivery_date===t&&e>=u&&e<=o?W.value=!0:W.value=!1,na()},ke=e=>{const t=String(e.getDate()).padStart(2,"0"),u=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${u}-${t}`},na=()=>{var t,u,o,n;const e=new Date;if(e.toISOString(),je(),C.value.find(c=>c.id==l.value.branch_id),l.value.delivery_date==ke(e)){const c=e.getHours(),s=e.getMinutes(),[k,S]=(t=P.value.split(":"))==null?void 0:t.map(Number),[G,ye]=(u=Y.value.split(":"))==null?void 0:u.map(Number);if(c>G||c===G&&s>=ye)W.value=!1,te.value=!0;else if(c<k||c===k&&s<S)P.value=ce.value;else{const j=new Date(new Date().setMinutes(new Date().getMinutes()+46)),J=j.getHours(),ha=j.getMinutes();(o=P.value.split(":"))==null||o.map(Number);const[Me,Va]=(n=Y.value.split(":"))==null?void 0:n.map(Number);J>Me||J===Me&&ha>=Va?te.value=!0:(W.value=!1,P.value=new Date(new Date().setMinutes(new Date().getMinutes()+46)).toTimeString().slice(0,5))}}else{te.value=!1,P.value=ce.value,W.value=!1;let c,s=new Date,k=new Date(s);k.setHours(0,0,0,0);let S=new Date(s);if(S.setHours(4,55,0,0),l.value.delivery_date==""||l.value.delivery_date==null)return;(new Date(l.value.delivery_date).getDate()!==new Date($e.value).getDate()||s>=k&&s<=S)&&(W.value=!0,c="pre-order",w=="admin"?Ue(`menuType=${c}`):w=="restaurant"&&Te({menuType:c}))}L.value+=1,l.value.delivery_time=null},Oe=()=>{const e=Ve.value;l.value.address_apartment=e==null?void 0:e.apartment,l.value.block_no=e==null?void 0:e.block_no,l.value.address_building_no=e==null?void 0:e.building_num,l.value.address_floor=e==null?void 0:e.floor,l.value.address_street_name=e==null?void 0:e.street_name,l.value.address_address_area=e==null?void 0:e.area_name,l.value.address_phone=I.value,he.value=!1},oa=e=>{let t=0;if(e.hasOwnProperty("extras")){const u=l.value.products.find(n=>n.product_id==e.id);B.value.find(n=>n.id==e.id).extras.forEach(n=>{var c;(c=u.extra)!=null&&c.includes(n.id)&&(t+=Number(n.price))})}x.value=x.value-t-e.price*e.quantity,U.value.splice(U.value.indexOf(e),1),l.value.products.splice(l.value.products.indexOf(l.value.products.find(u=>u.product_id==e.id)),1),e.has_image==1&&D.value.splice(D.value.indexOf(D.value.find(u=>u.product_id==e.id)),1)},ia=async()=>{var e,t,u;if(l.value.is_pickup===!1){const o=new Date().getHours(),n=new Date().getMinutes(),[c,s]=(e=ce.value.split(":"))==null?void 0:e.map(Number),[k,S]=(t=Y.value.split(":"))==null?void 0:t.map(Number);if(o>k||o===k&&n>=S||o<c||o===c&&n<s)return h.error("The Branch is currently closed.")}(u=Be.value)==null||u.validate().then(async({valid:o})=>{if(o){let n=new FormData;if(n.append("branch_id",l.value.branch_id),n.append("is_pickup",l.value.is_pickup),n.append("email",l.value.email),n.append("name",l.value.name),n.append("agent",l.value.agent),n.append("address_city",l.value.address_city),l.value.delivery_date!==null&&n.append("delivery_date",l.value.delivery_date+" "+l.value.delivery_time+":00"),l.value.delivery_time!==null&&n.append("delivery_time",l.value.delivery_time),n.append("delivery_cost",l.value.delivery_cost),n.append("address_building_no",l.value.address_building_no),n.append("block_no",l.value.block_no),n.append("address_floor",l.value.address_floor),n.append("address_phone",l.value.address_phone),n.append("address_apartment",l.value.address_apartment),n.append("address_address_area",l.value.address_address_area),n.append("address_street_name",l.value.address_street_name),n.append("v_code",l.value.v_code),n.append("employee_code",l.value.employee_code),l.value.products.forEach((c,s)=>{var S,G,ye;n.append(`products[${s}][product_id]`,c.product_id),n.append(`products[${s}][quantity]`,c.quantity),(S=c.images)==null||S.forEach((j,J)=>{n.append(`products[${s}][images][${J}]`,j.file)}),(G=c.notes)==null||G.forEach((j,J)=>{n.append(`products[${s}][notes][${J}]`,j)});let k=0;c.hasOwnProperty("extra")&&((ye=c==null?void 0:c.extra)==null||ye.filter(j=>j!=="").forEach((j,J)=>{n.append(`products[${s}][extra_flavors][${k}]`,j),k++})),c.hasOwnProperty("flavor")&&n.append(`products[${s}][extra_flavors][${k}]`,c.flavor)}),D.value.length>0)return h.error("You must pick at least the min. number of Images for each Product");if(l.value.products.length==0)return h.error("You need to select at least 1 product");if(x.value<5)return h.error("The Total Cost Without The Delivery Cost Must Be More Than 5 KWD");fe.value=!0;try{w=="admin"?await Wa(n):w=="restaurant"&&await La(n),h.success("Order created successfully"),Ba.push({name:"orders"}),fe.value=!1}catch(c){h.error(c.response.data.message),console.log(c),fe.value=!1}}})},ca=()=>{ae.value=!0,Ma({employee_code:T.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};h.success(e.meesage),H.value=parseInt(e.discount_rate)+t[e.discount_type],R.value=e.discount_type,l.value.employee_code=T.value}).catch(({response:e})=>{h.error(e.data.message)}).finally(()=>{ae.value=!1})},pa=()=>{ae.value=!0,tl({employee_code:T.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};h.success(e.meesage),H.value=parseInt(e.discount_rate)+t[e.discount_type],R.value=e.discount_type,l.value.employee_code=T.value}).catch(({response:e})=>{h.error(e.data.message)}).finally(()=>{ae.value=!1})},ma=()=>{H.value="",R.value="",T.value="",F.value="",l.value.v_code="",l.value.employee_code=""},m=i(),va=e=>{ee.value=!0,m.value=e.id},fa=e=>{var u,o;m.value=e.id;const t=l.value.products.find(n=>n.product_id==m.value);t.hasOwnProperty("flavor")&&(l.value.flavor=(u=l.value.products.find(n=>n.product_id==m.value))==null?void 0:u.flavor),t.hasOwnProperty("extra")&&(l.value.extra=(o=l.value.products.find(n=>n.product_id==m.value))==null?void 0:o.extra),z.value=!0},_a=e=>{ie.value=!0,m.value=e},ya=async e=>{let t=U.value.find(n=>n.id==m.value),u=l.value.products.find(n=>n.product_id==m.value);const o={file:e.target.files[0],id:u.images.length,binary:""};await Ja(o.file).then(n=>{o.binary=n}),u.images.push(o),t.images+=1,t.images==t.quantity&&D.value.splice(D.value.indexOf(D.value.find(n=>n.product_id==m.value.product_id))),e.target.value=""},ga=e=>{let t=l.value.products.find(o=>o.product_id==m.value),u=U.value.find(o=>o.id==m.value);u.images-=1,u.images==u.quantity?D.value.splice(D.value.indexOf(D.value.find(o=>o.product_id==m.value))):D.value.map(o=>o.product_id).includes(u.id)||D.value.push({product_id:u.id}),t.images.splice(t.images.indexOf(e),1)};se(()=>B.value.find(e=>e.id==m.value).extras),se(()=>B.value.find(e=>e.id==m.value).flavors);const ba=()=>{let e=l.value.products.find(o=>o.product_id==m.value),t=U.value.find(o=>o.id==m.value);B.value.find(o=>o.id==m.value).extras.forEach(o=>{e.hasOwnProperty("extra")&&e.extra.includes(o.id)&&(x.value-=o.price,t.total-=o.price)}),e.extra=l.value.extra,e.flavor=l.value.flavor;let u=0;B.value.find(o=>o.id==m.value).extras.forEach(o=>{e.extra.includes(o.id)&&(u+=Number(o.price)*Number(e.quantity),t.total+=Number(o.price)*Number(e.quantity))}),x.value=x.value+u,z.value=!1,l.value.extra=[],l.value.flavor=""},$e=i(new Date().toISOString());Fa(()=>{w=="admin"?(aa(),Ue(),Je(),la()):w=="restaurant"&&(Te(),Qe(),Xe(),ta());let e=setInterval(()=>{de.value=new Date().toISOString(),new Date($e.value).getDate()!==new Date(de.value).getDate()&&($e.value=de.value,pe.value=pe.value*2)},1e3);Ia(()=>{clearInterval(e)})}),Pa(z,(e,t)=>{console.log(`Value changed from ${t} to ${e}`)});const Ee=se(()=>(L.value+=1,pe.value+=1,l.value.address_address_area!=null&&l.value.is_pickup));return(e,t)=>{const u=Ua,o=$a,n=ka,c=wa;return p(),re("div",null,[r(Fe,{modelValue:a(ie),"onUpdate:modelValue":t[1]||(t[1]=s=>O(ie)?ie.value=s:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[r(ge,{title:e.$t("Products Notes")},{default:d(()=>[(p(!0),re(He,null,Re(a(l).products.find(s=>s.product_id==a(m).id).notes,(s,k)=>(p(),_(ue,{class:"pt-2"},{default:d(()=>[r(u,{label:`Note #${k+1}`,class:"flex-grow-1",modelValue:a(l).products.find(S=>S.product_id==a(m).id).notes[k],"onUpdate:modelValue":S=>a(l).products.find(G=>G.product_id==a(m).id).notes[k]=S},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024))),256)),r(ue,{class:"d-flex justify-end gap-3 flex-wrap"},{default:d(()=>[r(N,{onClick:t[0]||(t[0]=s=>ie.value=!1)},{default:d(()=>[A(f(e.$t("Save")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),r(Fe,{modelValue:a(ee),"onUpdate:modelValue":t[3]||(t[3]=s=>O(ee)?ee.value=s:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[r(o,{onClick:t[2]||(t[2]=s=>ee.value=!a(ee))}),r(ge,{title:"Product Images"},{default:d(()=>[r(ue,{class:"d-flex flex-row align-center px-0 pb-5 pt-0 flex-wrap px-5"},{default:d(()=>[b("div",{style:Na([a(l).products.find(s=>s.product_id==a(m)).images.length==a(l).products.find(s=>s.product_id==a(m)).quantity*10?"pointer-events: none;":"",{width:"120px",height:"120px",border:"2px solid lightgrey"}]),class:"add_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},[r(We,{class:"position-absolute",icon:"tabler-plus"}),b("input",{onChange:ya,type:"file",name:"file",style:{opacity:"0",height:"100%"},class:"h-100",multiple:"",accept:"image/png, image/gif, image/jpeg",disabled:a(l).products.find(s=>s.product_id==a(m)).images.length==a(l).products.find(s=>s.product_id==a(m)).quantity*10},null,40,rl)],4),(p(!0),re(He,null,Re(a(l).products.find(s=>s.product_id==a(m)).images,s=>(p(),re("div",ul,[r(N,{size:"33",color:"error",class:"delete_btn position-absolute px-1 py-1"},{default:d(()=>[r(We,{icon:"tabler-trash",size:"22",onClick:k=>ga(s)},null,8,["onClick"])]),_:2},1024),b("div",dl,[b("img",{src:s.binary,style:{"object-fit":"cover"},class:"w-100 h-100",alt:"product_image"},null,8,nl)])]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(Fe,{modelValue:a(z),"onUpdate:modelValue":t[8]||(t[8]=s=>O(z)?z.value=s:null),persistent:"",class:"v-dialog-sm"},{default:d(()=>[r(o,{onClick:t[4]||(t[4]=s=>z.value=!1)}),r(ge,{title:"Additional Options"},{default:d(()=>[r(ue,null,{default:d(()=>[a(m)?(p(),_(v,{key:0},{default:d(()=>[r(y,{cols:"6"},{default:d(()=>[r(Ie,{"prepend-inner-icon":"tabler-building-store",placeholder:"Flavor",label:e.$t("Flavor"),modelValue:a(l).flavor,"onUpdate:modelValue":t[5]||(t[5]=s=>a(l).flavor=s),items:a(B).find(s=>s.id==a(m)).flavors,"item-value":"id","item-title":"name",variant:"outlined","return-object":!1,class:"flex-grow-1 my-1 mx-2"},null,8,["label","modelValue","items"])]),_:1}),r(y,{cols:"6"},{default:d(()=>[r(Ie,{"prepend-inner-icon":"tabler-package",modelValue:a(l).extra,"onUpdate:modelValue":t[6]||(t[6]=s=>a(l).extra=s),"item-title":"name",items:a(B).find(s=>s.id==a(m)).extras,"item-value":"id",variant:"outlined",label:e.$t("Extra"),"return-object":!1,class:"flex-grow-1 my-1 mx-2",multiple:""},null,8,["modelValue","items","label"])]),_:1})]),_:1})):g("",!0)]),_:1}),r(ue,{class:"d-flex justify-end gap-3 flex-wrap"},{default:d(()=>[r(N,{onClick:t[7]||(t[7]=s=>ba())},{default:d(()=>[A(" Confirm ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(v,{class:"mt-4 px-2",justify:"space-around"},{default:d(()=>[r(a(xe),{ref_key:"refVForm",ref:Be,onSubmit:De(ia,["prevent"]),class:"w-100 d-flex"},{default:d(()=>[r(y,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:8},{default:d(()=>[b("p",ol,f(e.$t("Create Order")),1),a(w)=="admin"?(p(),_(a(xe),{key:0,ref_key:"phoneForm",ref:ve,onSubmit:De(Ze,["prevent"])},{default:d(()=>[r(y,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",il,f(e.$t("Search by Phone Number")),1),r(y,null,{default:d(()=>[r(v,{justify:"space-between",align:"start"},{default:d(()=>[r(u,{rules:[a($),a(Ce),a(Se)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:a(I),"onUpdate:modelValue":t[9]||(t[9]=s=>O(I)?I.value=s:null),placeholder:a(ne)("Phone Number")},null,8,["rules","modelValue","placeholder"]),r(N,{type:"submit",disabled:!a(I),loading:a(q)},{default:d(()=>[A(f(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])):g("",!0),a(w)=="restaurant"?(p(),_(a(xe),{key:1,ref_key:"phoneForm",ref:ve,onSubmit:De(ea,["prevent"])},{default:d(()=>[r(y,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",cl,f(e.$t("Search by Phone Number")),1),r(y,null,{default:d(()=>[r(v,{justify:"space-between",align:"start"},{default:d(()=>[r(u,{rules:[a($),a(Ce),a(Se)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:a(I),"onUpdate:modelValue":t[10]||(t[10]=s=>O(I)?I.value=s:null),placeholder:a(ne)("Phone Number")},null,8,["rules","modelValue","placeholder"]),r(N,{type:"submit",disabled:!a(I),loading:a(q)},{default:d(()=>[A(f(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])):g("",!0),a(w)=="admin"||a(w)=="restaurant"?(p(),_(y,{key:2,class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[r(v,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:d(()=>[b("p",pl,f(e.$t("Area & Branch")),1)]),_:1}),r(y,null,{default:d(()=>[r(v,{justify:"space-between",align:"center",class:Ke(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:d(()=>[r(y,{cols:"6",class:"ma-0 py-0 pe-0 pe-2"},{default:d(()=>[a(w)=="admin"?(p(),_(Pe,{key:0,clearable:"","prepend-inner-icon":"tabler-building-community",loading:a(Z),modelValue:a(l).address_address_area,"onUpdate:modelValue":[t[11]||(t[11]=s=>a(l).address_address_area=s),t[12]||(t[12]=s=>me())],"return-object":!1,items:a(_e),"item-value":"name","item-title":"name",style:{width:"100%"},variant:"outlined",rules:[a($)],label:e.$t("Area"),class:"flex-grow-1 my-1 w-100"},null,8,["loading","modelValue","items","rules","label"])):g("",!0),a(w)=="restaurant"?(p(),_(Pe,{key:1,clearable:"","prepend-inner-icon":"tabler-building-community",loading:a(Z),modelValue:a(l).address_address_area,"onUpdate:modelValue":[t[13]||(t[13]=s=>a(l).address_address_area=s),t[14]||(t[14]=s=>me())],items:a(_e),"item-value":"name","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",rules:[a($)],label:e.$t("Area"),class:"flex-grow-1 my-1 w-100"},null,8,["loading","modelValue","items","rules","label"])):g("",!0)]),_:1}),r(y,{cols:"6",class:"ma-0 py-0 pe-0 ps-2"},{default:d(()=>[r(Ie,{clearable:"","prepend-inner-icon":"tabler-building-store",placeholder:"Select a Branch",rules:[a($)],label:e.$t("Branch"),loading:a(X),modelValue:a(l).branch_id,"onUpdate:modelValue":[t[15]||(t[15]=s=>a(l).branch_id=s),me],items:a(C),"item-value":"id","item-title":a(Ye),style:{width:"100%"},variant:"outlined","return-object":!1,disabled:!a(l).address_address_area||a(l).address_address_area=="",class:"w-100 flex-grow-1"},null,8,["rules","label","loading","modelValue","items","item-title","disabled"])]),_:1})]),_:1},8,["class"])]),_:1}),r(v,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:d(()=>[b("p",ml,f(e.$t("Order Scheduling")),1),a(te)&&a(l).is_pickup?(p(),_(Qa,{key:0,size:"large",label:"",color:"error",class:"text-h6",height:"200","prepend-icon":"tabler-info-circle"},{default:d(()=>[A("The Branch is currently Closed")]),_:1})):g("",!0)]),_:1}),r(y,null,{default:d(()=>[r(v,{justify:"space-between",align:"center",class:Ke(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:d(()=>[a(l).is_pickup?(p(),re("div",vl,[(p(),_(n,{rules:[a($)],disabled:!a(Ee),"prepend-inner-icon":"tabler-calendar",modelValue:a(l).delivery_date,"onUpdate:modelValue":[t[16]||(t[16]=s=>a(l).delivery_date=s),me],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:a(de)},key:a(pe)},null,8,["rules","disabled","modelValue","placeholder","config"])),(p(),_(n,{rules:[a($)],disabled:!a(l).is_pickup||a(te)||!a(Ge),"prepend-inner-icon":"tabler-clock",modelValue:a(l).delivery_time,"onUpdate:modelValue":t[17]||(t[17]=s=>a(l).delivery_time=s),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:a(L),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:a(P),maxTime:a(Y)}},null,8,["rules","disabled","modelValue","placeholder","config"]))])):g("",!0),a(l).is_pickup?g("",!0):(p(),re("div",fl,[(p(),_(n,{disabled:!a(Ee),"prepend-inner-icon":"tabler-calendar",modelValue:a(l).delivery_date,"onUpdate:modelValue":[t[18]||(t[18]=s=>a(l).delivery_date=s),me],placeholder:a(ne)("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:a(de)},key:a(pe)},null,8,["disabled","modelValue","placeholder","config"])),(p(),_(n,{disabled:!a(l).is_pickup||a(te),"prepend-inner-icon":"tabler-clock",modelValue:a(l).delivery_time,"onUpdate:modelValue":t[19]||(t[19]=s=>a(l).delivery_time=s),placeholder:a(ne)("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:a(L),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:a(P),maxTime:a(Y)}},null,8,["disabled","modelValue","placeholder","config"]))])),r(v,{class:"w-50 mx-2 my-0",justify:e.$vuetify.display.smAndDown?"center":"start"},{default:d(()=>[r(Xa,{modelValue:a(l).is_pickup,"onUpdate:modelValue":[t[20]||(t[20]=s=>a(l).is_pickup=s),je],"false-value":!1,"true-value":!0,inset:!1,label:a(ne)("Schedule Order")},null,8,["modelValue","label"])]),_:1},8,["justify"])]),_:1},8,["class"])]),_:1})]),_:1})):g("",!0),r(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",_l,f(e.$t("Products")),1),r(y,null,{default:d(()=>[r(v,{justify:"space-between",align:"end"},{default:d(()=>[r(Pe,{disabled:!a(l).branch_id||!a(l).delivery_date&&a(l).is_pickup,"prepend-inner-icon":"tabler-package",loading:a(oe),modelValue:a(le),"onUpdate:modelValue":t[21]||(t[21]=s=>O(le)?le.value=s:null),items:a(B),"item-title":"name_en","item-value":"id",style:{width:"100%"},variant:"outlined",label:e.$t("Products"),class:"flex-grow-1 my-1 w-50 mx-2"},null,8,["disabled","loading","modelValue","items","label"]),r(u,{disabled:!a(l).branch_id||!String(a(l).delivery_date).length&&a(l).is_pickup,label:e.$t("Quantity"),type:"number",class:"flex-grow-1 mx-2 my-1 w-25",modelValue:a(V),"onUpdate:modelValue":t[22]||(t[22]=s=>O(V)?V.value=s:null)},null,8,["disabled","label","modelValue"]),r(N,{"prepend-icon":"tabler-plus",class:"flex-grow-1 mx-2 my-1",disabled:a(V)<=0||!a(le),onClick:da},{default:d(()=>[A(f(e.$t("Add")),1)]),_:1},8,["disabled"])]),_:1}),r(v,{align:"center"},{default:d(()=>[a(U).length?(p(),_(c,{key:0,items:a(U),onDelete:oa,onAddImage:va,onAddNote:_a,onAddExtraFlavors:fa,isPreValid:a(W)},null,8,["items","isPreValid"])):g("",!0)]),_:1})]),_:1})]),_:1}),r(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",yl,f(e.$t("User Details")),1),r(y,null,{default:d(()=>[r(v,{justify:"space-between",align:"end"},{default:d(()=>[r(u,{"prepend-inner-icon":"tabler-user",label:e.$t("Name"),rules:[a($)],placeholder:e.$t("Customer Name"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).name,"onUpdate:modelValue":t[23]||(t[23]=s=>a(l).name=s)},null,8,["label","rules","placeholder","modelValue"]),r(u,{"prepend-inner-icon":"tabler-at",label:e.$t("Email"),placeholder:e.$t("Customer Email"),rules:[a(Aa),a($)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).email,"onUpdate:modelValue":t[24]||(t[24]=s=>a(l).email=s)},null,8,["label","placeholder","rules","modelValue"])]),_:1}),r(v,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[r(u,{"prepend-inner-icon":"tabler-phone",placeholder:e.$t("Customer Phone Number"),label:e.$t("Phone Number"),rules:[a(Ce),a($),a(Se)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_phone,"onUpdate:modelValue":t[25]||(t[25]=s=>a(l).address_phone=s)},null,8,["placeholder","label","rules","modelValue"]),a(w)=="admin"?(p(),_(u,{key:0,"prepend-inner-icon":"tabler-user-check",label:e.$t("Agent"),placeholder:e.$t("Agent"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).agent,"onUpdate:modelValue":t[26]||(t[26]=s=>a(l).agent=s)},null,8,["label","placeholder","modelValue"])):g("",!0)]),_:1})]),_:1})]),_:1}),r(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",gl,f(e.$t("User Address")),1),r(y,null,{default:d(()=>[r(v,{justify:"space-between",align:"end"},{default:d(()=>[r(u,{"prepend-inner-icon":"tabler-container",label:e.$t("Building Number"),rules:[a($)],placeholder:e.$t("Building Number"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_building_no,"onUpdate:modelValue":t[27]||(t[27]=s=>a(l).address_building_no=s)},null,8,["label","rules","placeholder","modelValue"]),r(u,{"prepend-inner-icon":"tabler-stairs",placeholder:e.$t("Floor"),label:e.$t("Floor"),rules:[a($)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_floor,"onUpdate:modelValue":t[28]||(t[28]=s=>a(l).address_floor=s)},null,8,["placeholder","label","rules","modelValue"])]),_:1}),r(v,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[r(u,{"prepend-inner-icon":"tabler-window",label:e.$t("Apartment"),rules:[a($)],placeholder:e.$t("Apartment"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_apartment,"onUpdate:modelValue":t[29]||(t[29]=s=>a(l).address_apartment=s)},null,8,["label","rules","placeholder","modelValue"]),r(u,{"prepend-inner-icon":"tabler-road",placeholder:e.$t("Street Name"),rules:[a($)],label:e.$t("Street Name"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_street_name,"onUpdate:modelValue":t[30]||(t[30]=s=>a(l).address_street_name=s)},null,8,["placeholder","rules","label","modelValue"])]),_:1}),r(v,{justify:"space-between",align:"end",class:"mt-6"},{default:d(()=>[r(u,{"prepend-inner-icon":"tabler-number",rules:[a($)],label:e.$t("Block Number"),placeholder:e.$t("Block Number"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).block_no,"onUpdate:modelValue":t[31]||(t[31]=s=>a(l).block_no=s)},null,8,["rules","label","placeholder","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"]),r(y,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:4},{default:d(()=>[r(y,{class:"mt-16 px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:d(()=>[b("p",bl,f(e.$t("Order Summary")),1),r(y,{class:"pt-0"},{default:d(()=>[r(v,{class:"mt-0"},{default:d(()=>[r(y,{class:"w-100 px-0 pt-0"},{default:d(()=>[a(E)?(p(),_(u,{key:0,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-user-star",placeholder:e.$t("Enter Employee code"),modelValue:a(T),"onUpdate:modelValue":t[32]||(t[32]=s=>O(T)?T.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])):g("",!0),a(E)?g("",!0):(p(),_(u,{key:1,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-gift",placeholder:e.$t("Have a Voucher?"),modelValue:a(F),"onUpdate:modelValue":t[33]||(t[33]=s=>O(F)?F.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])),r(Za,{onClick:ma,label:e.$t("Is An Employee"),modelValue:a(E),"onUpdate:modelValue":t[34]||(t[34]=s=>O(E)?E.value=s:null),class:"mt-2"},null,8,["label","modelValue"]),!a(E)&&a(w)=="admin"?(p(),_(N,{key:2,class:"mt-3",disabled:!a(F),block:"",loading:a(M),onClick:sa},{default:d(()=>[A(f(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])):g("",!0),!a(E)&&a(w)=="restaurant"?(p(),_(N,{key:3,class:"mt-3",disabled:!a(F),block:"",loading:a(M),onClick:ra},{default:d(()=>[A(f(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])):g("",!0),a(E)&&a(w)=="admin"?(p(),_(N,{key:4,class:"mt-3",disabled:!a(T),block:"",loading:a(ae),onClick:ca},{default:d(()=>[A(f(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):g("",!0),a(E)&&a(w)=="restaurant"?(p(),_(N,{key:5,class:"mt-3",disabled:!a(T),block:"",loading:a(ae),onClick:pa},{default:d(()=>[A(f(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):g("",!0)]),_:1})]),_:1}),r(v,{class:"mt-5"},{default:d(()=>[r(ge,{class:"w-100 px-2 py-2",variant:"tonal",color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:d(()=>[r(ue,null,{default:d(()=>[r(v,{align:"center",justify:"space-between"},{default:d(()=>[b("p",hl,f(e.$t("Deliver Cost")),1),b("p",Vl,f(a(l).delivery_cost)+" KWD",1)]),_:1}),r(v,null,{default:d(()=>[r(Ne,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),r(v,{align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[wl,b("p",kl,f(Number(a(x)+a(l).delivery_cost).toFixed(2))+" KWD",1)]),_:1}),a(l).v_code?(p(),_(v,{key:0},{default:d(()=>[r(Ne,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):g("",!0),a(l).v_code||a(l).employee_code?(p(),_(v,{key:1,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[b("p",$l,f(e.$t("Discount rate")),1),b("p",xl,f(a(H)),1)]),_:1})):g("",!0),a(l).v_code||a(l).employee_code?(p(),_(v,{key:2},{default:d(()=>[r(Ne,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):g("",!0),a(l).v_code||a(l).employee_code?(p(),_(v,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:d(()=>[b("p",Dl,f(e.$t("New Total")),1),b("p",Cl,f(Number(a(ua)).toFixed(1))+" KWD",1)]),_:1})):g("",!0)]),_:1})]),_:1},8,["color"])]),_:1}),r(v,{class:"mt-8"},{default:d(()=>[r(N,{type:"submit",loading:a(fe),block:""},{default:d(()=>[A(f(e.$t("Create Order")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"])]),_:1},8,["onSubmit"])]),_:1})])}}};typeof ze=="function"&&ze(Le);const nt=Da(Le,[["__scopeId","data-v-0905fcc1"]]);export{nt as default};
