import{_ as Va}from"./OrderProducts-0ebef264.js";import{_ as wa}from"./AppDateTimePicker-51bb678f.js";import{_ as ka}from"./DialogCloseBtn-f00b7865.js";import{ba as Ae,bb as $a,C as xa,l as i,D as Da,O as pe,aV as Ca,R as Sa,aB as Fa,E as Pa,o as p,c as se,q as r,w as u,I as be,F as Me,a as He,s as a,b as _,aX as re,az as N,H as A,y as f,G as O,n as g,aY as Ia,z as Re,U as v,W as y,A as b,a$ as xe,b0 as De,b1 as $,b2 as Ce,bc as Se,t as We,bd as Na,aZ as Ke,aW as Aa,a_ as Ba,a8 as Ua,a9 as ja}from"./index-990f7886.js";import{g as Ea}from"./areas-8305652f.js";import{a as Oa,g as Ta}from"./branches-f6748524.js";import{c as qa}from"./employees-e0adcd80.js";import{c as Ma,a as Ha,b as Ra}from"./orders-50255467.js";import{c as Wa,a as Ka,b as za}from"./orders-bcac0ad4.js";import{a as La}from"./products-892eff5e.js";import{g as Ya}from"./products-5c5d2c38.js";import{t as Ga}from"./files-2e167225.js";import{V as Fe}from"./VDialog-015eb970.js";import{V as Pe}from"./VSelect-33f47725.js";import{V as Ja}from"./VChip-9d31f138.js";import{V as Qa}from"./VSwitch-10770584.js";import{V as Ie}from"./VCombobox-95e7d287.js";import{V as Xa}from"./VCheckbox-d641a0ac.js";import{V as Ne}from"./VDivider-a9bf4144.js";import"./VDataTable-88cb3483.js";import"./VCheckboxBtn-40a2525b.js";import"./VSelectionControl-bd2220db.js";import"./VList-06811471.js";import"./ssrBoot-d9f1ffa9.js";import"./filter-fbc2a452.js";import"./VTable-bfb8501d.js";import"./VOverlay-3ee04d2a.js";import"./lazy-cb9d3be5.js";import"./dialog-transition-3f063f41.js";import"./VMenu-5b64fcd9.js";function Za(){return Ae.get("/areas")}let{get:el,show:tt,update:st,create:rt,remove:dt}=$a("/restaurant-apis/branches");function al(){return Ae.get("/restaurant-apis/branch/service-cost")}function ll(G){return Ae.post("/restaurant-apis/employee/check",G)}const tl=G=>(Ua("data-v-cdd39ac9"),G=G(),ja(),G),sl=["disabled"],rl={style:{width:"120px",height:"120px",border:"2px solid lightgrey"},class:"product_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},dl={class:"w-100 h-100",style:{overflow:"hidden"}},ul=["src"],nl={class:"text-h4 pt-3 pb-2"},ol={class:"text-h4 pt-3"},il={class:"text-h4 pt-3"},cl={class:"text-h4 pt-3 mb-5"},pl={key:0,class:"w-100 flex-grow-1 d-flex"},ml={key:1,class:"w-100 flex-grow-1 d-flex"},vl={class:"text-h4 pt-3 mb-5"},fl={class:"text-h4 pt-3 mb-0"},_l={class:"text-h4 pt-3 mb-4"},yl={class:"text-h4 pt-3 mb-1"},bl={class:"text-h4 pt-3 mb-5"},gl={class:"mb-2"},hl={class:"mb-2"},Vl=tl(()=>g("p",{class:"mb-2"},"Total",-1)),wl={class:"mb-2"},kl={class:"mb-2"},$l={class:"mb-2"},xl={class:"mb-0"},Dl={class:"mb-0"},ze={__name:"create",setup(G){var Te;const de=i(new Date().toISOString()),ge=Da(),ue=ge.t,Le=pe(()=>{if(ge.locale.value==="en")return"name_en";if(ge.locale.value==="ar")return"name_ar"}),w=(Te=JSON.parse(localStorage.getItem("userData")))==null?void 0:Te.type,P=i(""),me=i(),Be=i(),h=Ca(),ve=i(!1),W=i([]),C=i([]),fe=i([]),q=i(!1),J=i(!1),ne=i(!1),Q=i(!1),X=i(!1),K=i(!1),oe=i(!1),Z=i(!1),B=i([]),V=i(1),ee=i(),U=i([]),x=i(0),M=i(!1),ae=i(0),he=i(!1),Ve=i([]),F=i(""),H=i(""),R=i(""),we=i(0),j=i(""),T=i(!1),I=i(null),z=i(null),le=i(!1),ie=i(null),_e=i(1),te=i(!1),l=i({is_pickup:!0,products:[],email:"",name:"",agent:"",address_city:1,delivery_date:"",delivery_time:"",delivery_cost:"",address_building_no:"",block_no:"",address_floor:"",address_phone:"",address_apartment:"",address_address_area:null,address_street_name:"",branch_id:null,v_code:"",employee_code:"",extra:null,flavor:null}),Ye=pe(()=>l.value.branch_id!==null),D=i([]),Ge=()=>{Q.value=!0,Ea().then(({data:e,meta:t})=>{fe.value=e.data,Q.value=!1})},Je=()=>{Q.value=!0,Za().then(({data:e})=>{fe.value=e.data,Q.value=!1})},Qe=()=>{J.value=!0,el().then(({data:e})=>{W.value=e.data,J.value=!0,W.value=e.data.filter(t=>t.is_active===1),C.value=e.data.filter(t=>t.id===2),I.value=C.value[0].start,ie.value=I.value,z.value=C.value[0].end,ae.value+=1,J.value=!1})},Ue=e=>{ne.value=!0,La(e).then(({data:t,meta:d})=>{B.value=t.data,ne.value=!1})},je=e=>{ne.value=!0,Ya(e).then(({data:t,meta:d})=>{B.value=t.data}),ne.value=!1},Xe=()=>{var e;(e=me.value)==null||e.validate().then(async({valid:t})=>{t&&(q.value=!0,Ma({phone:`${P.value}`}).then(d=>{h.success("Customer found!"),Ve.value=d.data.data.length?d.data.data[0]:[],l.value.email=d.data.email,l.value.name=d.data.name,he.value=!0,q.value=!1,Oe()}).catch(d=>{h.error(d.response.data.message),q.value=!1}))})},Ze=()=>{var e;(e=me.value)==null||e.validate().then(async({valid:t})=>{t&&(q.value=!0,Wa({phone:`${P.value}`}).then(d=>{h.success("Customer found!"),Ve.value=d.data.data.length?d.data.data[0]:[],l.value.email=d.data.email,l.value.name=d.data.name,he.value=!0,q.value=!1,Oe()}).catch(d=>{h.error(d.response.data.message),q.value=!1}))})},ea=()=>{J.value=!0,Oa().then(({data:e})=>{W.value=e.data.filter(t=>t.is_active===1),C.value=e.data.filter(t=>t.id===2),I.value=C.value[0].start,ie.value=I.value,z.value=C.value[0].end,ae.value+=1,J.value=!1})},aa=()=>{Ta().then(({data:e,meta:t})=>{l.value.delivery_cost=e.data.delivery_cost})},la=()=>{al().then(({data:e,meta:t})=>{l.value.delivery_cost=e.data.delivery_cost})},ta=()=>{M.value=!0,Ha({v_code:F.value,total:x.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};l.value.v_code=F.value,F.value="",H.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],R.value=e.data.discount_type,h.success(e.data.message),M.value=!1}).catch(e=>{h.error(e.response.data.message),M.value=!1})},sa=()=>{M.value=!0,Ka({v_code:F.value,total:x.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};l.value.v_code=F.value,F.value="",H.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],R.value=e.data.discount_type,h.success(e.data.message),M.value=!1}).catch(e=>{h.error(e.response.data.message),M.value=!1})},ra=pe(()=>(R.value=="fixed"?we.value=parseInt(x.value-parseInt(H.value)):R.value=="percentage"?we.value=parseInt(x.value)-parseInt(x.value)*parseInt(H.value)/100:R.value=="free_delivery",we.value+(l.value.delivery_cost??0))),da=()=>{const e=ee.value;if(U.value.includes(e)){l.value.products.find(d=>d.product_id===e.id).quantity=parseInt(l.value.products.find(d=>d.product_id===e.id).quantity)+parseInt(V.value);let t=U.value.find(d=>d==e);t.quantity=parseInt(t.quantity)+parseInt(V.value),t.total=t.total+V.value*e.price,x.value+=V.value*e.price,e.has_note==1&&l.value.products.find(d=>d.product_id==e.id).notes.push("")}else{if(e.has_image==1&&e.has_note==1){l.value.products.push({product_id:e.id,quantity:parseInt(V.value),images:[],notes:[]});for(let t=0;t<V.value;t++)l.value.products.find(d=>d.product_id==e.id).notes[t]="";e.images=0,D.value.push({product_id:e.id})}else if(e.has_image==1&&e.has_note==0)l.value.products.push({product_id:e.id,quantity:parseInt(V.value),images:[]}),e.images=0,D.value.push({product_id:e.id});else if(e.has_image==0&&e.has_note==1){l.value.products.push({product_id:e.id,quantity:parseInt(V.value),notes:[]});for(let t=0;t<V.value;t++)l.value.products.find(d=>d.product_id==e.id).notes[t]=""}else l.value.products.push({product_id:e.id,quantity:parseInt(V.value)});e.quantity=V.value,x.value+=e.price*V.value,e.total=e.price*V.value,U.value.push(e)}ee.value=null,V.value=1},Ee=()=>{const e=new Date;if(l.value.delivery_time=null,te.value=!1,l.value.is_pickup===!1&&(l.value.delivery_date=null,l.value.delivery_time=null),l.value.is_pickup===!0&&(l.value.address_address_area==null||l.value.address_address_area==""))C.value=W.value.filter(t=>t.id===2);else if(l.value.delivery_date!==ke(e)&&l.value.is_pickup===!0)C.value=W.value.filter(t=>t.id===2),l.value.branch_id=2;else if(l.value.delivery_date==ke(e)){const t=W.value.filter(d=>d.areas.find(n=>n.name===l.value.address_address_area)!==void 0);t.find(d=>d.id==l.value.branch_id)||(l.value.branch_id=null),C.value=t}else if(l.value.is_pickup===!1&&l.value.address_address_area!==null&&l.value.address_address_area!==""){const t=W.value.filter(d=>d.areas.find(n=>n.name===l.value.address_address_area)!==void 0);t.find(d=>d.id==l.value.branch_id)||(l.value.branch_id=null),C.value=t}},ce=()=>{C.value.find(e=>e.id===l.value.branch_id),ae.value+=1,ua()},ke=e=>{const t=String(e.getDate()).padStart(2,"0"),d=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${d}-${t}`},ua=()=>{var t,d,o,n;const e=new Date;if(e.toISOString(),Ee(),C.value.find(c=>c.id==l.value.branch_id),l.value.delivery_date==ke(e)){const c=e.getHours(),s=e.getMinutes(),[k,S]=(t=I.value.split(":"))==null?void 0:t.map(Number),[L,ye]=(d=z.value.split(":"))==null?void 0:d.map(Number);if(c>L||c===L&&s>=ye)te.value=!1,le.value=!0;else if(c<k||c===k&&s<S)I.value=ie.value;else{const E=new Date(new Date().setMinutes(new Date().getMinutes()+46)),Y=E.getHours(),ga=E.getMinutes();(o=I.value.split(":"))==null||o.map(Number);const[qe,ha]=(n=z.value.split(":"))==null?void 0:n.map(Number);Y>qe||Y===qe&&ga>=ha?le.value=!0:(te.value=!1,I.value=new Date(new Date().setMinutes(new Date().getMinutes()+46)).toTimeString().slice(0,5))}}else{le.value=!1,I.value=ie.value,te.value=!1;let c,s=new Date,k=new Date(s);k.setHours(0,0,0,0);let S=new Date(s);if(S.setHours(4,55,0,0),l.value.delivery_date==""||l.value.delivery_date==null)return;(new Date(l.value.delivery_date).getDate()!==new Date($e.value).getDate()||s>=k&&s<=S)&&(te.value=!0,c="pre-order",w=="admin"?Ue(`menuType=${c}`):w=="restaurant"&&je({menuType:c}))}ae.value+=1,l.value.delivery_time=null},Oe=()=>{const e=Ve.value;l.value.address_apartment=e==null?void 0:e.apartment,l.value.block_no=e==null?void 0:e.block_no,l.value.address_building_no=e==null?void 0:e.building_num,l.value.address_floor=e==null?void 0:e.floor,l.value.address_street_name=e==null?void 0:e.street_name,l.value.address_address_area=e==null?void 0:e.area_name,l.value.address_phone=P.value,he.value=!1},na=e=>{let t=0;if(e.hasOwnProperty("extras")){const d=l.value.products.find(n=>n.product_id==e.id);B.value.find(n=>n.id==e.id).extras.forEach(n=>{var c;(c=d.extra)!=null&&c.includes(n.id)&&(t+=Number(n.price))})}x.value=x.value-t-e.price*e.quantity,U.value.splice(U.value.indexOf(e),1),l.value.products.splice(l.value.products.indexOf(l.value.products.find(d=>d.product_id==e.id)),1),e.has_image==1&&D.value.splice(D.value.indexOf(D.value.find(d=>d.product_id==e.id)),1)},oa=async()=>{var e,t,d;if(l.value.is_pickup===!1){const o=new Date().getHours(),n=new Date().getMinutes(),[c,s]=(e=ie.value.split(":"))==null?void 0:e.map(Number),[k,S]=(t=z.value.split(":"))==null?void 0:t.map(Number);if(o>k||o===k&&n>=S||o<c||o===c&&n<s)return h.error("The Branch is currently closed.")}(d=Be.value)==null||d.validate().then(async({valid:o})=>{if(o){let n=new FormData;if(n.append("branch_id",l.value.branch_id),n.append("is_pickup",l.value.is_pickup),n.append("email",l.value.email),n.append("name",l.value.name),n.append("agent",l.value.agent),n.append("address_city",l.value.address_city),l.value.delivery_date!==null&&n.append("delivery_date",l.value.delivery_date+" "+l.value.delivery_time+":00"),l.value.delivery_time!==null&&n.append("delivery_time",l.value.delivery_time),n.append("delivery_cost",l.value.delivery_cost),n.append("address_building_no",l.value.address_building_no),n.append("block_no",l.value.block_no),n.append("address_floor",l.value.address_floor),n.append("address_phone",l.value.address_phone),n.append("address_apartment",l.value.address_apartment),n.append("address_address_area",l.value.address_address_area),n.append("address_street_name",l.value.address_street_name),n.append("v_code",l.value.v_code),n.append("employee_code",l.value.employee_code),l.value.products.forEach((c,s)=>{var S,L,ye;n.append(`products[${s}][product_id]`,c.product_id),n.append(`products[${s}][quantity]`,c.quantity),(S=c.images)==null||S.forEach((E,Y)=>{n.append(`products[${s}][images][${Y}]`,E.file)}),(L=c.notes)==null||L.forEach((E,Y)=>{n.append(`products[${s}][notes][${Y}]`,E)});let k=0;c.hasOwnProperty("extra")&&((ye=c==null?void 0:c.extra)==null||ye.filter(E=>E!=="").forEach((E,Y)=>{n.append(`products[${s}][extra_flavors][${k}]`,E),k++})),c.hasOwnProperty("flavor")&&n.append(`products[${s}][extra_flavors][${k}]`,c.flavor)}),D.value.length>0)return h.error("You must pick at least the min. number of Images for each Product");if(l.value.products.length==0)return h.error("You need to select at least 1 product");if(x.value<5)return h.error("The Total Cost Without The Delivery Cost Must Be More Than 5 KWD");ve.value=!0;try{w=="admin"?await Ra(n):w=="restaurant"&&await za(n),h.success("Order created successfully"),Aa.push({name:"orders"}),ve.value=!1}catch(c){h.error(c.response.data.message),console.log(c),ve.value=!1}}})},ia=()=>{Z.value=!0,qa({employee_code:j.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};h.success(e.meesage),H.value=parseInt(e.discount_rate)+t[e.discount_type],R.value=e.discount_type,l.value.employee_code=j.value}).catch(({response:e})=>{h.error(e.data.message)}).finally(()=>{Z.value=!1})},ca=()=>{Z.value=!0,ll({employee_code:j.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};h.success(e.meesage),H.value=parseInt(e.discount_rate)+t[e.discount_type],R.value=e.discount_type,l.value.employee_code=j.value}).catch(({response:e})=>{h.error(e.data.message)}).finally(()=>{Z.value=!1})},pa=()=>{H.value="",R.value="",j.value="",F.value="",l.value.v_code="",l.value.employee_code=""},m=i(),ma=e=>{X.value=!0,m.value=e.id},va=e=>{var d,o;m.value=e.id;const t=l.value.products.find(n=>n.product_id==m.value);t.hasOwnProperty("flavor")&&(l.value.flavor=(d=l.value.products.find(n=>n.product_id==m.value))==null?void 0:d.flavor),t.hasOwnProperty("extra")&&(l.value.extra=(o=l.value.products.find(n=>n.product_id==m.value))==null?void 0:o.extra),K.value=!0},fa=e=>{oe.value=!0,m.value=e},_a=async e=>{let t=U.value.find(n=>n.id==m.value),d=l.value.products.find(n=>n.product_id==m.value);const o={file:e.target.files[0],id:d.images.length,binary:""};await Ga(o.file).then(n=>{o.binary=n}),d.images.push(o),t.images+=1,t.images==t.quantity&&D.value.splice(D.value.indexOf(D.value.find(n=>n.product_id==m.value.product_id))),e.target.value=""},ya=e=>{let t=l.value.products.find(o=>o.product_id==m.value),d=U.value.find(o=>o.id==m.value);d.images-=1,d.images==d.quantity?D.value.splice(D.value.indexOf(D.value.find(o=>o.product_id==m.value))):D.value.map(o=>o.product_id).includes(d.id)||D.value.push({product_id:d.id}),t.images.splice(t.images.indexOf(e),1)};pe(()=>B.value.find(e=>e.id==m.value).extras),pe(()=>B.value.find(e=>e.id==m.value).flavors);const ba=()=>{let e=l.value.products.find(o=>o.product_id==m.value),t=U.value.find(o=>o.id==m.value);B.value.find(o=>o.id==m.value).extras.forEach(o=>{e.hasOwnProperty("extra")&&e.extra.includes(o.id)&&(x.value-=o.price,t.total-=o.price)}),e.extra=l.value.extra,e.flavor=l.value.flavor;let d=0;B.value.find(o=>o.id==m.value).extras.forEach(o=>{e.extra.includes(o.id)&&(d+=Number(o.price)*Number(e.quantity),t.total+=Number(o.price)*Number(e.quantity))}),x.value=x.value+d,K.value=!1,l.value.extra=[],l.value.flavor=""},$e=i(new Date().toISOString());return Sa(()=>{w=="admin"?(ea(),Ue(),Ge(),aa()):w=="restaurant"&&(je(),Je(),Qe(),la());let e=setInterval(()=>{de.value=new Date().toISOString(),new Date($e.value).getDate()!==new Date(de.value).getDate()&&($e.value=de.value,_e.value=_e.value*2)},1e3);Fa(()=>{clearInterval(e)})}),Pa(K,(e,t)=>{console.log(`Value changed from ${t} to ${e}`)}),(e,t)=>{const d=Ba,o=ka,n=wa,c=Va;return p(),se("div",null,[r(Fe,{modelValue:a(oe),"onUpdate:modelValue":t[1]||(t[1]=s=>O(oe)?oe.value=s:null),persistent:"",class:"v-dialog-sm"},{default:u(()=>[r(be,{title:e.$t("Products Notes")},{default:u(()=>[(p(!0),se(Me,null,He(a(l).products.find(s=>s.product_id==a(m).id).notes,(s,k)=>(p(),_(re,{class:"pt-2"},{default:u(()=>[r(d,{label:`Note #${k+1}`,class:"flex-grow-1",modelValue:a(l).products.find(S=>S.product_id==a(m).id).notes[k],"onUpdate:modelValue":S=>a(l).products.find(L=>L.product_id==a(m).id).notes[k]=S},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024))),256)),r(re,{class:"d-flex justify-end gap-3 flex-wrap"},{default:u(()=>[r(N,{onClick:t[0]||(t[0]=s=>oe.value=!1)},{default:u(()=>[A(f(e.$t("Save")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),r(Fe,{modelValue:a(X),"onUpdate:modelValue":t[3]||(t[3]=s=>O(X)?X.value=s:null),persistent:"",class:"v-dialog-sm"},{default:u(()=>[r(o,{onClick:t[2]||(t[2]=s=>X.value=!a(X))}),r(be,{title:"Product Images"},{default:u(()=>[r(re,{class:"d-flex flex-row align-center px-0 pb-5 pt-0 flex-wrap px-5"},{default:u(()=>[g("div",{style:Ia([a(l).products.find(s=>s.product_id==a(m)).images.length==a(l).products.find(s=>s.product_id==a(m)).quantity*10?"pointer-events: none;":"",{width:"120px",height:"120px",border:"2px solid lightgrey"}]),class:"add_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},[r(Re,{class:"position-absolute",icon:"tabler-plus"}),g("input",{onChange:_a,type:"file",name:"file",style:{opacity:"0",height:"100%"},class:"h-100",multiple:"",accept:"image/png, image/gif, image/jpeg",disabled:a(l).products.find(s=>s.product_id==a(m)).images.length==a(l).products.find(s=>s.product_id==a(m)).quantity*10},null,40,sl)],4),(p(!0),se(Me,null,He(a(l).products.find(s=>s.product_id==a(m)).images,s=>(p(),se("div",rl,[r(N,{size:"33",color:"error",class:"delete_btn position-absolute px-1 py-1"},{default:u(()=>[r(Re,{icon:"tabler-trash",size:"22",onClick:k=>ya(s)},null,8,["onClick"])]),_:2},1024),g("div",dl,[g("img",{src:s.binary,style:{"object-fit":"cover"},class:"w-100 h-100",alt:"product_image"},null,8,ul)])]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(Fe,{modelValue:a(K),"onUpdate:modelValue":t[8]||(t[8]=s=>O(K)?K.value=s:null),persistent:"",class:"v-dialog-sm"},{default:u(()=>[r(o,{onClick:t[4]||(t[4]=s=>K.value=!1)}),r(be,{title:"Additional Options"},{default:u(()=>[r(re,null,{default:u(()=>[a(m)?(p(),_(v,{key:0},{default:u(()=>[r(y,{cols:"6"},{default:u(()=>[r(Pe,{"prepend-inner-icon":"tabler-building-store",placeholder:"Flavor",label:e.$t("Flavor"),modelValue:a(l).flavor,"onUpdate:modelValue":t[5]||(t[5]=s=>a(l).flavor=s),items:a(B).find(s=>s.id==a(m)).flavors,"item-value":"id","item-title":"name",variant:"outlined","return-object":!1,class:"flex-grow-1 my-1 mx-2"},null,8,["label","modelValue","items"])]),_:1}),r(y,{cols:"6"},{default:u(()=>[r(Pe,{"prepend-inner-icon":"tabler-package",modelValue:a(l).extra,"onUpdate:modelValue":t[6]||(t[6]=s=>a(l).extra=s),"item-title":"name",items:a(B).find(s=>s.id==a(m)).extras,"item-value":"id",variant:"outlined",label:e.$t("Extra"),"return-object":!1,class:"flex-grow-1 my-1 mx-2",multiple:""},null,8,["modelValue","items","label"])]),_:1})]),_:1})):b("",!0)]),_:1}),r(re,{class:"d-flex justify-end gap-3 flex-wrap"},{default:u(()=>[r(N,{onClick:t[7]||(t[7]=s=>ba())},{default:u(()=>[A(" Confirm ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(v,{class:"mt-4 px-2",justify:"space-around"},{default:u(()=>[r(a(xe),{ref_key:"refVForm",ref:Be,onSubmit:De(oa,["prevent"]),class:"w-100 d-flex"},{default:u(()=>[r(y,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:8},{default:u(()=>[g("p",nl,f(e.$t("Create Order")),1),a(w)=="admin"?(p(),_(a(xe),{key:0,ref_key:"phoneForm",ref:me,onSubmit:De(Xe,["prevent"])},{default:u(()=>[r(y,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:u(()=>[g("p",ol,f(e.$t("Search by Phone Number")),1),r(y,null,{default:u(()=>[r(v,{justify:"space-between",align:"start"},{default:u(()=>[r(d,{rules:[a($),a(Ce),a(Se)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:a(P),"onUpdate:modelValue":t[9]||(t[9]=s=>O(P)?P.value=s:null),placeholder:a(ue)("Phone Number")},null,8,["rules","modelValue","placeholder"]),r(N,{type:"submit",disabled:!a(P),loading:a(q)},{default:u(()=>[A(f(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])):b("",!0),a(w)=="restaurant"?(p(),_(a(xe),{key:1,ref_key:"phoneForm",ref:me,onSubmit:De(Ze,["prevent"])},{default:u(()=>[r(y,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:u(()=>[g("p",il,f(e.$t("Search by Phone Number")),1),r(y,null,{default:u(()=>[r(v,{justify:"space-between",align:"start"},{default:u(()=>[r(d,{rules:[a($),a(Ce),a(Se)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:a(P),"onUpdate:modelValue":t[10]||(t[10]=s=>O(P)?P.value=s:null),placeholder:a(ue)("Phone Number")},null,8,["rules","modelValue","placeholder"]),r(N,{type:"submit",disabled:!a(P),loading:a(q)},{default:u(()=>[A(f(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])):b("",!0),a(w)=="admin"||a(w)=="restaurant"?(p(),_(y,{key:2,class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:u(()=>[r(v,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:u(()=>[g("p",cl,f(e.$t("Order Scheduling")),1),a(le)&&a(l).is_pickup?(p(),_(Ja,{key:0,size:"large",label:"",color:"error",class:"text-h6",height:"200","prepend-icon":"tabler-info-circle"},{default:u(()=>[A("The Branch is currently Closed")]),_:1})):b("",!0)]),_:1}),r(y,null,{default:u(()=>[r(v,{justify:"space-between",align:"center",class:We(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:u(()=>[a(l).is_pickup?(p(),se("div",pl,[(p(),_(n,{rules:[a($)],disabled:!a(l).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:a(l).delivery_date,"onUpdate:modelValue":[t[11]||(t[11]=s=>a(l).delivery_date=s),ce],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:a(de)},key:a(_e)},null,8,["rules","disabled","modelValue","placeholder","config"])),(p(),_(n,{rules:[a($)],disabled:!a(l).is_pickup||a(le)||!a(Ye),"prepend-inner-icon":"tabler-clock",modelValue:a(l).delivery_time,"onUpdate:modelValue":t[12]||(t[12]=s=>a(l).delivery_time=s),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:a(ae),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:a(I),maxTime:a(z)}},null,8,["rules","disabled","modelValue","placeholder","config"]))])):b("",!0),a(l).is_pickup?b("",!0):(p(),se("div",ml,[(p(),_(n,{disabled:!a(l).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:a(l).delivery_date,"onUpdate:modelValue":[t[13]||(t[13]=s=>a(l).delivery_date=s),ce],placeholder:a(ue)("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:a(de)},key:a(_e)},null,8,["disabled","modelValue","placeholder","config"])),(p(),_(n,{disabled:!a(l).is_pickup||a(le),"prepend-inner-icon":"tabler-clock",modelValue:a(l).delivery_time,"onUpdate:modelValue":t[14]||(t[14]=s=>a(l).delivery_time=s),placeholder:a(ue)("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:a(ae),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:a(I),maxTime:a(z)}},null,8,["disabled","modelValue","placeholder","config"]))])),r(v,{class:"w-50 mx-2 my-0",justify:e.$vuetify.display.smAndDown?"center":"start"},{default:u(()=>[r(Qa,{modelValue:a(l).is_pickup,"onUpdate:modelValue":[t[15]||(t[15]=s=>a(l).is_pickup=s),Ee],"false-value":!1,"true-value":!0,inset:!1,label:a(ue)("Schedule Order")},null,8,["modelValue","label"])]),_:1},8,["justify"])]),_:1},8,["class"])]),_:1}),r(v,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:u(()=>[g("p",vl,f(e.$t("Area & Branch")),1)]),_:1}),r(y,null,{default:u(()=>[r(v,{justify:"space-between",align:"center",class:We(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:u(()=>[r(y,{cols:"6",class:"ma-0 py-0 pe-0 pe-2"},{default:u(()=>[a(w)=="admin"?(p(),_(Ie,{key:0,clearable:"","prepend-inner-icon":"tabler-building-community",loading:a(Q),modelValue:a(l).address_address_area,"onUpdate:modelValue":[t[16]||(t[16]=s=>a(l).address_address_area=s),t[17]||(t[17]=s=>ce())],"return-object":!1,items:a(fe),"item-value":"name","item-title":"name",style:{width:"100%"},variant:"outlined",rules:[a($)],label:e.$t("Area"),class:"flex-grow-1 my-1 w-100"},null,8,["loading","modelValue","items","rules","label"])):b("",!0),a(w)=="restaurant"?(p(),_(Ie,{key:1,clearable:"","prepend-inner-icon":"tabler-building-community",loading:a(Q),modelValue:a(l).address_address_area,"onUpdate:modelValue":[t[18]||(t[18]=s=>a(l).address_address_area=s),t[19]||(t[19]=s=>ce())],items:a(fe),"item-value":"name","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",rules:[a($)],label:e.$t("Area"),class:"flex-grow-1 my-1 w-100"},null,8,["loading","modelValue","items","rules","label"])):b("",!0)]),_:1}),r(y,{cols:"6",class:"ma-0 py-0 pe-0 ps-2"},{default:u(()=>[r(Pe,{clearable:"","prepend-inner-icon":"tabler-building-store",placeholder:"Select a Branch",rules:[a($)],label:e.$t("Branch"),loading:a(J),modelValue:a(l).branch_id,"onUpdate:modelValue":[t[20]||(t[20]=s=>a(l).branch_id=s),ce],items:a(C),"item-value":"id","item-title":a(Le),style:{width:"100%"},variant:"outlined","return-object":!1,disabled:!a(l).address_address_area||a(l).address_address_area=="",class:"w-100 flex-grow-1"},null,8,["rules","label","loading","modelValue","items","item-title","disabled"])]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})):b("",!0),r(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:u(()=>[g("p",fl,f(e.$t("Products")),1),r(y,null,{default:u(()=>[r(v,{justify:"space-between",align:"end"},{default:u(()=>[r(Ie,{disabled:!a(l).branch_id||!a(l).delivery_date&&a(l).is_pickup,"prepend-inner-icon":"tabler-package",loading:a(ne),modelValue:a(ee),"onUpdate:modelValue":t[21]||(t[21]=s=>O(ee)?ee.value=s:null),items:a(B),"item-title":"name_en","item-value":"id",style:{width:"100%"},variant:"outlined",label:e.$t("Products"),class:"flex-grow-1 my-1 w-50 mx-2"},null,8,["disabled","loading","modelValue","items","label"]),r(d,{disabled:!a(l).branch_id||!String(a(l).delivery_date).length&&a(l).is_pickup,label:e.$t("Quantity"),type:"number",class:"flex-grow-1 mx-2 my-1 w-25",modelValue:a(V),"onUpdate:modelValue":t[22]||(t[22]=s=>O(V)?V.value=s:null)},null,8,["disabled","label","modelValue"]),r(N,{"prepend-icon":"tabler-plus",class:"flex-grow-1 mx-2 my-1",disabled:a(V)<=0||!a(ee),onClick:da},{default:u(()=>[A(f(e.$t("Add")),1)]),_:1},8,["disabled"])]),_:1}),r(v,{align:"center"},{default:u(()=>[a(U).length?(p(),_(c,{key:0,items:a(U),onDelete:na,onAddImage:ma,onAddNote:fa,onAddExtraFlavors:va,isPreValid:a(te)},null,8,["items","isPreValid"])):b("",!0)]),_:1})]),_:1})]),_:1}),r(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:u(()=>[g("p",_l,f(e.$t("User Details")),1),r(y,null,{default:u(()=>[r(v,{justify:"space-between",align:"end"},{default:u(()=>[r(d,{"prepend-inner-icon":"tabler-user",label:e.$t("Name"),rules:[a($)],placeholder:e.$t("Customer Name"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).name,"onUpdate:modelValue":t[23]||(t[23]=s=>a(l).name=s)},null,8,["label","rules","placeholder","modelValue"]),r(d,{"prepend-inner-icon":"tabler-at",label:e.$t("Email"),placeholder:e.$t("Customer Email"),rules:[a(Na),a($)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).email,"onUpdate:modelValue":t[24]||(t[24]=s=>a(l).email=s)},null,8,["label","placeholder","rules","modelValue"])]),_:1}),r(v,{justify:"space-between",align:"end",class:"mt-6"},{default:u(()=>[r(d,{"prepend-inner-icon":"tabler-phone",placeholder:e.$t("Customer Phone Number"),label:e.$t("Phone Number"),rules:[a(Ce),a($),a(Se)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_phone,"onUpdate:modelValue":t[25]||(t[25]=s=>a(l).address_phone=s)},null,8,["placeholder","label","rules","modelValue"]),a(w)=="admin"?(p(),_(d,{key:0,"prepend-inner-icon":"tabler-user-check",label:e.$t("Agent"),placeholder:e.$t("Agent"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).agent,"onUpdate:modelValue":t[26]||(t[26]=s=>a(l).agent=s)},null,8,["label","placeholder","modelValue"])):b("",!0)]),_:1})]),_:1})]),_:1}),r(y,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:u(()=>[g("p",yl,f(e.$t("User Address")),1),r(y,null,{default:u(()=>[r(v,{justify:"space-between",align:"end"},{default:u(()=>[r(d,{"prepend-inner-icon":"tabler-container",label:e.$t("Building Number"),rules:[a($)],placeholder:e.$t("Building Number"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_building_no,"onUpdate:modelValue":t[27]||(t[27]=s=>a(l).address_building_no=s)},null,8,["label","rules","placeholder","modelValue"]),r(d,{"prepend-inner-icon":"tabler-stairs",placeholder:e.$t("Floor"),label:e.$t("Floor"),rules:[a($)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_floor,"onUpdate:modelValue":t[28]||(t[28]=s=>a(l).address_floor=s)},null,8,["placeholder","label","rules","modelValue"])]),_:1}),r(v,{justify:"space-between",align:"end",class:"mt-6"},{default:u(()=>[r(d,{"prepend-inner-icon":"tabler-window",label:e.$t("Apartment"),rules:[a($)],placeholder:e.$t("Apartment"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_apartment,"onUpdate:modelValue":t[29]||(t[29]=s=>a(l).address_apartment=s)},null,8,["label","rules","placeholder","modelValue"]),r(d,{"prepend-inner-icon":"tabler-road",placeholder:e.$t("Street Name"),rules:[a($)],label:e.$t("Street Name"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_street_name,"onUpdate:modelValue":t[30]||(t[30]=s=>a(l).address_street_name=s)},null,8,["placeholder","rules","label","modelValue"])]),_:1}),r(v,{justify:"space-between",align:"end",class:"mt-6"},{default:u(()=>[r(d,{"prepend-inner-icon":"tabler-number",rules:[a($)],label:e.$t("Block Number"),placeholder:e.$t("Block Number"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).block_no,"onUpdate:modelValue":t[31]||(t[31]=s=>a(l).block_no=s)},null,8,["rules","label","placeholder","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"]),r(y,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:4},{default:u(()=>[r(y,{class:"mt-16 px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:u(()=>[g("p",bl,f(e.$t("Order Summary")),1),r(y,{class:"pt-0"},{default:u(()=>[r(v,{class:"mt-0"},{default:u(()=>[r(y,{class:"w-100 px-0 pt-0"},{default:u(()=>[a(T)?(p(),_(d,{key:0,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-user-star",placeholder:e.$t("Enter Employee code"),modelValue:a(j),"onUpdate:modelValue":t[32]||(t[32]=s=>O(j)?j.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])):b("",!0),a(T)?b("",!0):(p(),_(d,{key:1,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-gift",placeholder:e.$t("Have a Voucher?"),modelValue:a(F),"onUpdate:modelValue":t[33]||(t[33]=s=>O(F)?F.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])),r(Xa,{onClick:pa,label:e.$t("Is An Employee"),modelValue:a(T),"onUpdate:modelValue":t[34]||(t[34]=s=>O(T)?T.value=s:null),class:"mt-2"},null,8,["label","modelValue"]),!a(T)&&a(w)=="admin"?(p(),_(N,{key:2,class:"mt-3",disabled:!a(F),block:"",loading:a(M),onClick:ta},{default:u(()=>[A(f(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])):b("",!0),!a(T)&&a(w)=="restaurant"?(p(),_(N,{key:3,class:"mt-3",disabled:!a(F),block:"",loading:a(M),onClick:sa},{default:u(()=>[A(f(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])):b("",!0),a(T)&&a(w)=="admin"?(p(),_(N,{key:4,class:"mt-3",disabled:!a(j),block:"",loading:a(Z),onClick:ia},{default:u(()=>[A(f(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):b("",!0),a(T)&&a(w)=="restaurant"?(p(),_(N,{key:5,class:"mt-3",disabled:!a(j),block:"",loading:a(Z),onClick:ca},{default:u(()=>[A(f(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):b("",!0)]),_:1})]),_:1}),r(v,{class:"mt-5"},{default:u(()=>[r(be,{class:"w-100 px-2 py-2",variant:"tonal",color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:u(()=>[r(re,null,{default:u(()=>[r(v,{align:"center",justify:"space-between"},{default:u(()=>[g("p",gl,f(e.$t("Deliver Cost")),1),g("p",hl,f(a(l).delivery_cost)+" KWD",1)]),_:1}),r(v,null,{default:u(()=>[r(Ne,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),r(v,{align:"center",justify:"space-between",class:"mt-5"},{default:u(()=>[Vl,g("p",wl,f(Number(a(x)+a(l).delivery_cost).toFixed(2))+" KWD",1)]),_:1}),a(l).v_code?(p(),_(v,{key:0},{default:u(()=>[r(Ne,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):b("",!0),a(l).v_code||a(l).employee_code?(p(),_(v,{key:1,align:"center",justify:"space-between",class:"mt-5"},{default:u(()=>[g("p",kl,f(e.$t("Discount rate")),1),g("p",$l,f(a(H)),1)]),_:1})):b("",!0),a(l).v_code||a(l).employee_code?(p(),_(v,{key:2},{default:u(()=>[r(Ne,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):b("",!0),a(l).v_code||a(l).employee_code?(p(),_(v,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:u(()=>[g("p",xl,f(e.$t("New Total")),1),g("p",Dl,f(Number(a(ra)).toFixed(1))+" KWD",1)]),_:1})):b("",!0)]),_:1})]),_:1},8,["color"])]),_:1}),r(v,{class:"mt-8"},{default:u(()=>[r(N,{type:"submit",loading:a(ve),block:""},{default:u(()=>[A(f(e.$t("Create Order")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"])]),_:1},8,["onSubmit"])]),_:1})])}}};typeof Ke=="function"&&Ke(ze);const ut=xa(ze,[["__scopeId","data-v-cdd39ac9"]]);export{ut as default};
