import{_ as ma}from"./AppDateTimePicker-9f3b3ecb.js";import{_ as va}from"./OrderProducts-244ce05e.js";import{_ as fa}from"./DialogCloseBtn-544004f3.js";import{ba as De,bb as Oe,C as _a,l as u,D as ga,O as Be,aV as ba,R as ya,aB as ha,o as p,c as X,q as r,w as o,I as ce,F as Ne,a as je,s as a,b as v,aX as Z,az as S,H as F,y as m,G as j,n as _,aY as Va,z as Pe,a1 as c,a2 as g,a$ as Ve,b0 as ke,b1 as w,b2 as we,bc as $e,A as f,bd as ka,t as wa,aZ as Te,aW as $a,a_ as xa,$ as Ca,a0 as Da}from"./index-358c466b.js";import{g as Sa}from"./areas-51e3e9f0.js";import{a as Fa,g as Ia}from"./branches-dad0420d.js";import{c as Ua}from"./employees-6766666b.js";import{c as Aa,a as Ba,b as Na}from"./orders-0cd0cc72.js";import{c as ja,a as Pa,b as Ta}from"./orders-bb8fc830.js";import{a as Ea}from"./products-2ee3de83.js";import{t as Oa}from"./files-2e167225.js";import{V as xe}from"./VDialog-09c6c5a5.js";import{V as Ee}from"./VSelect-5e4f7ae5.js";import{V as me}from"./VCombobox-4f8968e1.js";import{V as qa}from"./VChip-01fa3c4b.js";import{V as Ma}from"./VSwitch-cb13388f.js";import{V as Ha}from"./VCheckbox-ab3f7b59.js";import{V as Ce}from"./VDivider-a7998058.js";import"./VDataTable-bbf485fa.js";import"./VCheckboxBtn-9bbd9eb4.js";import"./VSelectionControl-32ddc2e6.js";import"./VList-8b7c6abf.js";import"./ssrBoot-404c9b1f.js";import"./filter-4c18135b.js";import"./VTable-70707c6b.js";import"./VOverlay-2dca64b1.js";import"./lazy-0a540379.js";import"./dialog-transition-d456e6da.js";import"./VMenu-317b780d.js";function Ra(){return De.get("/areas")}let{get:Ka,show:zl,update:Ll,create:Yl,remove:Gl}=Oe("/restaurant-apis/branches");function Wa(){return De.get("/restaurant-apis/branch/service-cost")}function za(K){return De.post("/restaurant-apis/employee/check",K)}let{get:La,show:Jl,update:Ql,create:Xl,remove:Zl}=Oe("/restaurant-apis/products");const Ya=K=>(Ca("data-v-592614b8"),K=K(),Da(),K),Ga=["disabled"],Ja={style:{width:"120px",height:"120px",border:"2px solid lightgrey"},class:"product_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},Qa={class:"w-100 h-100",style:{overflow:"hidden"}},Xa=["src"],Za={class:"text-h4 pt-3 pb-2"},el={class:"text-h4 pt-3"},al={class:"text-h4 pt-3"},ll={class:"text-h4 pt-3 mb-0"},tl={class:"text-h4 pt-3 mb-4"},sl={class:"text-h4 pt-3 mb-1"},rl={class:"text-h4 pt-3 mb-5"},ol={key:0,class:"w-100 flex-grow-1 d-flex"},dl={key:1,class:"w-100 flex-grow-1 d-flex"},nl={class:"text-h4 pt-3 mb-5"},ul={class:"mb-2"},il={class:"mb-2"},pl=Ya(()=>_("p",{class:"mb-2"},"Total",-1)),cl={class:"mb-2"},ml={class:"mb-2"},vl={class:"mb-2"},fl={class:"mb-0"},_l={class:"mb-0"},qe={__name:"create",setup(K){var Ae;const ee=u(new Date().toISOString()),ve=ga(),ae=ve.t,Me=Be(()=>{if(ve.locale.value==="en")return"name_en";if(ve.locale.value==="ar")return"name_ar"}),k=(Ae=JSON.parse(localStorage.getItem("userData")))==null?void 0:Ae.type,I=u(""),ne=u(),Se=u(),y=ba(),ue=u(!1),R=u([]),x=u([]),ie=u([]),E=u(!1),W=u(!1),le=u(!1),z=u(!1),L=u(!1),O=u(!1),te=u(!1),Y=u(!1),fe=u([]),b=u(1),G=u(),P=u([]),U=u(0),q=u(!1),J=u(0),_e=u(!1),ge=u([]),D=u(""),M=u(""),H=u(""),be=u(0),A=u(""),T=u(!1),B=u(null),Q=u(null),se=u(!1),re=u(null),pe=u(1),l=u({is_pickup:!0,products:[],email:"",name:"",agent:"",address_city:1,delivery_date:"",delivery_time:"",delivery_cost:"",address_building_no:"",block_no:"",address_floor:"",address_phone:"",address_apartment:"",address_address_area:null,address_street_name:"",branch_id:null,v_code:"",employee_code:"",extra:"",flavor:""}),$=u([]),He=()=>{z.value=!0,Sa().then(({data:e,meta:t})=>{ie.value=e.data,z.value=!1})},Re=()=>{z.value=!0,Ra().then(({data:e})=>{ie.value=e.data,z.value=!1})},Ke=()=>{W.value=!0,Ka().then(({data:e})=>{R.value=e.data,W.value=!0,R.value=e.data.filter(t=>t.is_active===1),x.value=e.data.filter(t=>t.id===2),B.value=x.value[0].start,re.value=B.value,Q.value=x.value[0].end,J.value+=1,W.value=!1})},We=()=>{le.value=!0,Ea().then(({data:e,meta:t})=>{fe.value=e.data,le.value=!1})},ze=()=>{le.value=!0,La().then(({data:e,meta:t})=>{fe.value=e.data,le.value=!1})},Le=()=>{var e;(e=ne.value)==null||e.validate().then(async({valid:t})=>{t&&(E.value=!0,Aa({phone:`${I.value}`}).then(d=>{y.success("Customer found!"),ge.value=d.data.data.length?d.data.data[0]:[],l.value.email=d.data.email,l.value.name=d.data.name,_e.value=!0,E.value=!1,Ie()}).catch(d=>{y.error(d.response.data.message),E.value=!1}))})},Ye=()=>{var e;(e=ne.value)==null||e.validate().then(async({valid:t})=>{t&&(E.value=!0,ja({phone:`${I.value}`}).then(d=>{y.success("Customer found!"),ge.value=d.data.data.length?d.data.data[0]:[],l.value.email=d.data.email,l.value.name=d.data.name,_e.value=!0,E.value=!1,Ie()}).catch(d=>{y.error(d.response.data.message),E.value=!1}))})},Ge=()=>{W.value=!0,Fa().then(({data:e})=>{R.value=e.data.filter(t=>t.is_active===1),x.value=e.data.filter(t=>t.id===2),B.value=x.value[0].start,re.value=B.value,Q.value=x.value[0].end,J.value+=1,W.value=!1})},Je=()=>{Ia().then(({data:e,meta:t})=>{l.value.delivery_cost=e.data.delivery_cost})},Qe=()=>{Wa().then(({data:e,meta:t})=>{l.value.delivery_cost=e.data.delivery_cost})},Xe=()=>{q.value=!0,Ba({v_code:D.value,total:U.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};l.value.v_code=D.value,D.value="",M.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],H.value=e.data.discount_type,y.success(e.data.message),q.value=!1}).catch(e=>{y.error(e.response.data.message),q.value=!1})},Ze=()=>{q.value=!0,Pa({v_code:D.value,total:U.value}).then(e=>{const t={fixed:" KWD",percentage:"%"};l.value.v_code=D.value,D.value="",M.value=parseInt(e.data.discount_rate)+t[e.data.discount_type],H.value=e.data.discount_type,y.success(e.data.message),q.value=!1}).catch(e=>{y.error(e.response.data.message),q.value=!1})},ea=Be(()=>(H.value=="fixed"?be.value=parseInt(U.value-parseInt(M.value)):H.value=="percentage"?be.value=parseInt(U.value)-parseInt(U.value)*parseInt(M.value)/100:H.value=="free_delivery",be.value+(l.value.delivery_cost??0))),aa=()=>{const e=G.value;if(P.value.includes(e)){l.value.products.find(d=>d.product_id===e.id).quantity=parseInt(l.value.products.find(d=>d.product_id===e.id).quantity)+parseInt(b.value);let t=P.value.find(d=>d==e);t.quantity=parseInt(t.quantity)+parseInt(b.value),t.total=t.total+b.value*e.price,U.value+=b.value*e.price,e.has_note==1&&l.value.products.find(d=>d.product_id==e.id).notes.push("")}else{if(e.has_image==1&&e.has_note==1){l.value.products.push({product_id:e.id,quantity:parseInt(b.value),images:[],notes:[]});for(let t=0;t<b.value;t++)l.value.products.find(d=>d.product_id==e.id).notes[t]="";e.images=0,$.value.push({product_id:e.id})}else if(e.has_image==1&&e.has_note==0)l.value.products.push({product_id:e.id,quantity:parseInt(b.value),images:[]}),e.images=0,$.value.push({product_id:e.id});else if(e.has_image==0&&e.has_note==1){l.value.products.push({product_id:e.id,quantity:parseInt(b.value),notes:[]});for(let t=0;t<b.value;t++)l.value.products.find(d=>d.product_id==e.id).notes[t]=""}else l.value.products.push({product_id:e.id,quantity:parseInt(b.value)});e.quantity=b.value,U.value+=e.price*b.value,e.total=e.price*b.value,P.value.push(e)}G.value=null,b.value=1},Fe=()=>{const e=new Date;if(l.value.delivery_time=null,l.value.is_pickup===!1&&(l.value.delivery_date=null,l.value.delivery_time=null),l.value.is_pickup===!0&&(l.value.address_address_area==null||l.value.address_address_area==""))x.value=R.value.filter(t=>t.id===2);else if(l.value.delivery_date!==ye(e)&&l.value.is_pickup===!0)x.value=R.value.filter(t=>t.id===2),l.value.branch_id=2;else if(l.value.delivery_date==ye(e)){const t=R.value.filter(d=>d.areas.find(n=>n.name===l.value.address_address_area)!==void 0);t.find(d=>d.id==l.value.branch_id)||(l.value.branch_id=null),x.value=t}else if(l.value.is_pickup===!1&&l.value.address_address_area!==null&&l.value.address_address_area!==""){const t=R.value.filter(d=>d.areas.find(n=>n.name===l.value.address_address_area)!==void 0);t.find(d=>d.id==l.value.branch_id)||(l.value.branch_id=null),x.value=t}},oe=()=>{x.value.find(e=>e.id===l.value.branch_id),J.value+=1,la()},ye=e=>{const t=String(e.getDate()).padStart(2,"0"),d=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${d}-${t}`},la=()=>{var t,d;const e=new Date;if(e.toISOString(),Fe(),x.value.find(i=>i.id==l.value.branch_id),l.value.delivery_date==ye(e)){const i=e.getHours(),n=e.getMinutes(),[V,s]=(t=B.value.split(":"))==null?void 0:t.map(Number),[C,N]=(d=Q.value.split(":"))==null?void 0:d.map(Number);i>C||i===C&&n>=N?se.value=!0:i<V||i===V&&n<s?B.value=re.value:B.value=new Date().toTimeString().slice(0,5)}else se.value=!1,B.value=re.value;J.value+=1,l.value.delivery_time=null},Ie=()=>{const e=ge.value;l.value.address_apartment=e==null?void 0:e.apartment,l.value.block_no=e==null?void 0:e.block_no,l.value.address_building_no=e==null?void 0:e.building_num,l.value.address_floor=e==null?void 0:e.floor,l.value.address_street_name=e==null?void 0:e.street_name,l.value.address_address_area=e==null?void 0:e.area_name,l.value.address_phone=I.value,_e.value=!1},ta=e=>{U.value=U.value-e.price*e.quantity,P.value.splice(P.value.indexOf(e),1),l.value.products.splice(l.value.products.indexOf(l.value.products.find(t=>t.product_id==e.id)),1),e.has_image==1&&$.value.splice($.value.indexOf($.value.find(t=>t.product_id==e.id)),1)},sa=async()=>{var e,t,d;if(l.value.is_pickup===!1){const i=new Date().getHours(),n=new Date().getMinutes(),[V,s]=(e=re.value.split(":"))==null?void 0:e.map(Number),[C,N]=(t=Q.value.split(":"))==null?void 0:t.map(Number);if(i>C||i===C&&n>=N||i<V||i===V&&n<s)return y.error("The Branch is currently closed.")}(d=Se.value)==null||d.validate().then(async({valid:i})=>{if(i){let n=new FormData;if(n.append("branch_id",l.value.branch_id),n.append("is_pickup",l.value.is_pickup),n.append("email",l.value.email),n.append("name",l.value.name),n.append("agent",l.value.agent),n.append("address_city",l.value.address_city),l.value.delivery_date!==null&&n.append("delivery_date",l.value.delivery_date+" "+l.value.delivery_time+":00"),l.value.delivery_time!==null&&n.append("delivery_time",l.value.delivery_time),n.append("delivery_cost",l.value.delivery_cost),n.append("address_building_no",l.value.address_building_no),n.append("block_no",l.value.block_no),n.append("address_floor",l.value.address_floor),n.append("address_phone",l.value.address_phone),n.append("address_apartment",l.value.address_apartment),n.append("address_address_area",l.value.address_address_area),n.append("address_street_name",l.value.address_street_name),n.append("v_code",l.value.v_code),n.append("employee_code",l.value.employee_code),n.append("extra",l.value.extra),n.append("flavor",l.value.flavor),l.value.products.forEach((V,s)=>{var C,N;n.append(`products[${s}][product_id]`,V.product_id),n.append(`products[${s}][quantity]`,V.quantity),(C=V.images)==null||C.forEach((de,he)=>{n.append(`products[${s}][images][${he}]`,de.file)}),(N=V.notes)==null||N.forEach((de,he)=>{n.append(`products[${s}][notes][${he}]`,de)})}),$.value.length>0)return y.error("You must pick at least the min. number of Images for each Product");if(l.value.products.length==0)return y.error("You need to select at least 1 product");if(U.value<5)return y.error("The Total Cost Without The Delivery Cost Must Be More Than 5 KWD");ue.value=!0;try{k=="admin"?await Na(n):k=="restaurant"&&await Ta(n),y.success("Order created successfully"),$a.back(),ue.value=!1}catch(V){console.log(V),ue.value=!1}}})},ra=()=>{Y.value=!0,Ua({employee_code:A.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};y.success(e.meesage),M.value=parseInt(e.discount_rate)+t[e.discount_type],H.value=e.discount_type,l.value.employee_code=A.value}).catch(({response:e})=>{y.error(e.data.message)}).finally(()=>{Y.value=!1})},oa=()=>{Y.value=!0,za({employee_code:A.value}).then(({data:e})=>{const t={fixed:" KWD",percentage:"%"};y.success(e.meesage),M.value=parseInt(e.discount_rate)+t[e.discount_type],H.value=e.discount_type,l.value.employee_code=A.value}).catch(({response:e})=>{y.error(e.data.message)}).finally(()=>{Y.value=!1})},da=()=>{M.value="",H.value="",A.value="",D.value="",l.value.v_code="",l.value.employee_code=""},h=u(),na=e=>{L.value=!0,h.value=e.id},ua=e=>{O.value=!0,h.value=e.id},ia=e=>{te.value=!0,h.value=e},pa=async e=>{let t=P.value.find(n=>n.id==h.value),d=l.value.products.find(n=>n.product_id==h.value);const i={file:e.target.files[0],id:d.images.length,binary:""};await Oa(i.file).then(n=>{i.binary=n}),d.images.push(i),t.images+=1,t.images==t.quantity&&$.value.splice($.value.indexOf($.value.find(n=>n.product_id==h.value.product_id))),e.target.value=""},ca=e=>{let t=l.value.products.find(i=>i.product_id==h.value),d=P.value.find(i=>i.id==h.value);d.images-=1,d.images==d.quantity?$.value.splice($.value.indexOf($.value.find(i=>i.product_id==h.value))):$.value.map(i=>i.product_id).includes(d.id)||$.value.push({product_id:d.id}),t.images.splice(t.images.indexOf(e),1)},Ue=u(new Date().toISOString());return ya(()=>{k=="admin"?(Ge(),We(),He(),Je()):k=="restaurant"&&(ze(),Re(),Ke(),Qe());let e=setInterval(()=>{ee.value=new Date().toISOString(),new Date(Ue.value).getDate()!==new Date(ee.value).getDate()&&(Ue.value=ee.value,pe.value=pe.value*2)},1e3);ha(()=>{clearInterval(e)})}),(e,t)=>{const d=xa,i=fa,n=va,V=ma;return p(),X("div",null,[r(xe,{modelValue:a(te),"onUpdate:modelValue":t[1]||(t[1]=s=>j(te)?te.value=s:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[r(ce,{title:e.$t("Products Notes")},{default:o(()=>[(p(!0),X(Ne,null,je(a(l).products.find(s=>s.product_id==a(h).id).notes,(s,C)=>(p(),v(Z,{class:"pt-2"},{default:o(()=>[r(d,{label:`Note #${C+1}`,class:"flex-grow-1",modelValue:a(l).products.find(N=>N.product_id==a(h).id).notes[C],"onUpdate:modelValue":N=>a(l).products.find(de=>de.product_id==a(h).id).notes[C]=N},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024))),256)),r(Z,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[r(S,{onClick:t[0]||(t[0]=s=>te.value=!1)},{default:o(()=>[F(m(e.$t("Save")),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]),r(xe,{modelValue:a(L),"onUpdate:modelValue":t[3]||(t[3]=s=>j(L)?L.value=s:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[r(i,{onClick:t[2]||(t[2]=s=>L.value=!a(L))}),r(ce,{title:"Product Images"},{default:o(()=>[r(Z,{class:"d-flex flex-row align-center px-0 pb-5 pt-0 flex-wrap px-5"},{default:o(()=>[_("div",{style:Va([a(l).products.find(s=>s.product_id==a(h)).images.length==a(l).products.find(s=>s.product_id==a(h)).quantity*10?"pointer-events: none;":"",{width:"120px",height:"120px",border:"2px solid lightgrey"}]),class:"add_image px-0 py-0 rounded mx-1 mt-4 position-relative d-flex align-center justify-center"},[r(Pe,{class:"position-absolute",icon:"tabler-plus"}),_("input",{onChange:pa,type:"file",name:"file",style:{opacity:"0",height:"100%"},class:"h-100",multiple:"",accept:"image/png, image/gif, image/jpeg",disabled:a(l).products.find(s=>s.product_id==a(h)).images.length==a(l).products.find(s=>s.product_id==a(h)).quantity*10},null,40,Ga)],4),(p(!0),X(Ne,null,je(a(l).products.find(s=>s.product_id==a(h)).images,s=>(p(),X("div",Ja,[r(S,{size:"33",color:"error",class:"delete_btn position-absolute px-1 py-1"},{default:o(()=>[r(Pe,{icon:"tabler-trash",size:"22",onClick:C=>ca(s)},null,8,["onClick"])]),_:2},1024),_("div",Qa,[_("img",{src:s.binary,style:{"object-fit":"cover"},class:"w-100 h-100",alt:"product_image"},null,8,Xa)])]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(xe,{modelValue:a(O),"onUpdate:modelValue":t[9]||(t[9]=s=>j(O)?O.value=s:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[r(i,{onClick:t[4]||(t[4]=s=>O.value=!a(O))}),r(ce,{title:"Additional Options"},{default:o(()=>[r(Z,null,{default:o(()=>[r(c,null,{default:o(()=>[r(g,null,{default:o(()=>[r(Ee,{"prepend-inner-icon":"tabler-building-store",placeholder:"Flavor",label:e.$t("Flavor"),modelValue:a(l).flavor,"onUpdate:modelValue":t[5]||(t[5]=s=>a(l).flavor=s),items:[],"item-value":"id","item-title":"name",variant:"outlined","return-object":!1,class:"flex-grow-1 my-1 mx-2"},null,8,["label","modelValue"])]),_:1}),r(g,null,{default:o(()=>[r(me,{"prepend-inner-icon":"tabler-package",modelValue:a(l).extra,"onUpdate:modelValue":t[6]||(t[6]=s=>a(l).extra=s),items:[],"item-title":"name","item-value":"id",variant:"outlined",label:e.$t("Extra"),class:"flex-grow-1 my-1 mx-2",multiple:""},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),r(Z,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[r(S,{color:"secondary",variant:"tonal",onClick:t[7]||(t[7]=s=>O.value=!1),disabled:e.loadingDialog},{default:o(()=>[F(" Cancel ")]),_:1},8,["disabled"]),r(S,{onClick:t[8]||(t[8]=s=>O.value=!1),loading:e.loadingDialog},{default:o(()=>[F(" OK ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(c,{class:"mt-4 px-2",justify:"space-around"},{default:o(()=>[r(a(Ve),{ref_key:"refVForm",ref:Se,onSubmit:ke(sa,["prevent"]),class:"w-100 d-flex"},{default:o(()=>[r(g,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:8},{default:o(()=>[_("p",Za,m(e.$t("Create Order")),1),a(k)=="admin"?(p(),v(a(Ve),{key:0,ref_key:"phoneForm",ref:ne,onSubmit:ke(Le,["prevent"])},{default:o(()=>[r(g,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[_("p",el,m(e.$t("Search by Phone Number")),1),r(g,null,{default:o(()=>[r(c,{justify:"space-between",align:"start"},{default:o(()=>[r(d,{rules:[a(w),a(we),a($e)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:a(I),"onUpdate:modelValue":t[10]||(t[10]=s=>j(I)?I.value=s:null),placeholder:a(ae)("Phone Number")},null,8,["rules","modelValue","placeholder"]),r(S,{type:"submit",disabled:!a(I),loading:a(E)},{default:o(()=>[F(m(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])):f("",!0),a(k)=="restaurant"?(p(),v(a(Ve),{key:1,ref_key:"phoneForm",ref:ne,onSubmit:ke(Ye,["prevent"])},{default:o(()=>[r(g,{class:"px-5 rounded pb-7",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[_("p",al,m(e.$t("Search by Phone Number")),1),r(g,null,{default:o(()=>[r(c,{justify:"space-between",align:"start"},{default:o(()=>[r(d,{rules:[a(w),a(we),a($e)],min:1,"prepend-inner-icon":"tabler-phone",style:{width:"100%"},class:"pe-3 flex-grow-1",modelValue:a(I),"onUpdate:modelValue":t[11]||(t[11]=s=>j(I)?I.value=s:null),placeholder:a(ae)("Phone Number")},null,8,["rules","modelValue","placeholder"]),r(S,{type:"submit",disabled:!a(I),loading:a(E)},{default:o(()=>[F(m(e.$t("Search")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])):f("",!0),r(g,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[_("p",ll,m(e.$t("Products")),1),r(g,null,{default:o(()=>[r(c,{justify:"space-between",align:"end"},{default:o(()=>[r(me,{"prepend-inner-icon":"tabler-package",loading:a(le),modelValue:a(G),"onUpdate:modelValue":t[12]||(t[12]=s=>j(G)?G.value=s:null),items:a(fe),"item-title":"name_en","item-value":"id",style:{width:"100%"},variant:"outlined",label:e.$t("Products"),class:"flex-grow-1 my-1 w-50 mx-2"},null,8,["loading","modelValue","items","label"]),r(d,{label:e.$t("Quantity"),type:"number",class:"flex-grow-1 mx-2 my-1 w-25",modelValue:a(b),"onUpdate:modelValue":t[13]||(t[13]=s=>j(b)?b.value=s:null)},null,8,["label","modelValue"]),r(S,{"prepend-icon":"tabler-plus",class:"flex-grow-1 mx-2 my-1",disabled:a(b)<=0||!a(G),onClick:aa},{default:o(()=>[F(m(e.$t("Add")),1)]),_:1},8,["disabled"])]),_:1}),r(c,{align:"center"},{default:o(()=>[a(P).length?(p(),v(n,{key:0,items:a(P),onDelete:ta,onAddImage:na,onAddNote:ia,onAddExtraFlavors:ua},null,8,["items"])):f("",!0)]),_:1})]),_:1})]),_:1}),r(g,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[_("p",tl,m(e.$t("User Details")),1),r(g,null,{default:o(()=>[r(c,{justify:"space-between",align:"end"},{default:o(()=>[r(d,{"prepend-inner-icon":"tabler-user",label:e.$t("Name"),rules:[a(w)],placeholder:e.$t("Customer Name"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).name,"onUpdate:modelValue":t[14]||(t[14]=s=>a(l).name=s)},null,8,["label","rules","placeholder","modelValue"]),r(d,{"prepend-inner-icon":"tabler-at",label:e.$t("Email"),placeholder:e.$t("Customer Email"),rules:[a(ka),a(w)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).email,"onUpdate:modelValue":t[15]||(t[15]=s=>a(l).email=s)},null,8,["label","placeholder","rules","modelValue"])]),_:1}),r(c,{justify:"space-between",align:"end",class:"mt-6"},{default:o(()=>[r(d,{"prepend-inner-icon":"tabler-phone",placeholder:e.$t("Customer Phone Number"),label:e.$t("Phone Number"),rules:[a(we),a(w),a($e)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_phone,"onUpdate:modelValue":t[16]||(t[16]=s=>a(l).address_phone=s)},null,8,["placeholder","label","rules","modelValue"]),a(k)=="admin"?(p(),v(d,{key:0,"prepend-inner-icon":"tabler-user-check",label:e.$t("Agent"),placeholder:e.$t("Agent"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).agent,"onUpdate:modelValue":t[17]||(t[17]=s=>a(l).agent=s)},null,8,["label","placeholder","modelValue"])):f("",!0)]),_:1})]),_:1})]),_:1}),r(g,{class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[_("p",sl,m(e.$t("User Address")),1),r(g,null,{default:o(()=>[r(c,{justify:"space-between",align:"end"},{default:o(()=>[a(k)=="admin"?(p(),v(me,{key:0,clearable:"","prepend-inner-icon":"tabler-building-community",loading:a(z),modelValue:a(l).address_address_area,"onUpdate:modelValue":[t[18]||(t[18]=s=>a(l).address_address_area=s),t[19]||(t[19]=s=>oe())],"return-object":!1,items:a(ie),"item-value":"name","item-title":"name",style:{width:"100%"},variant:"outlined",rules:[a(w)],label:e.$t("Area"),class:"flex-grow-0 my-1 w-50 mx-2"},null,8,["loading","modelValue","items","rules","label"])):f("",!0),a(k)=="restaurant"?(p(),v(me,{key:1,clearable:"","prepend-inner-icon":"tabler-building-community",loading:a(z),modelValue:a(l).address_address_area,"onUpdate:modelValue":[t[20]||(t[20]=s=>a(l).address_address_area=s),t[21]||(t[21]=s=>oe())],items:a(ie),"item-value":"name","item-title":"name","return-object":!1,style:{width:"100%"},variant:"outlined",rules:[a(w)],label:e.$t("Area"),class:"flex-grow-0 my-1 w-50 mx-2"},null,8,["loading","modelValue","items","rules","label"])):f("",!0),r(d,{"prepend-inner-icon":"tabler-container",label:e.$t("Building Number"),rules:[a(w)],placeholder:e.$t("Building Number"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_building_no,"onUpdate:modelValue":t[22]||(t[22]=s=>a(l).address_building_no=s)},null,8,["label","rules","placeholder","modelValue"])]),_:1}),r(c,{justify:"space-between",align:"end",class:"mt-6"},{default:o(()=>[r(d,{"prepend-inner-icon":"tabler-stairs",placeholder:e.$t("Floor"),label:e.$t("Floor"),rules:[a(w)],class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_floor,"onUpdate:modelValue":t[23]||(t[23]=s=>a(l).address_floor=s)},null,8,["placeholder","label","rules","modelValue"]),r(d,{"prepend-inner-icon":"tabler-window",label:e.$t("Apartment"),rules:[a(w)],placeholder:e.$t("Apartment"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_apartment,"onUpdate:modelValue":t[24]||(t[24]=s=>a(l).address_apartment=s)},null,8,["label","rules","placeholder","modelValue"])]),_:1}),r(c,{justify:"space-between",align:"end",class:"mt-6"},{default:o(()=>[r(d,{"prepend-inner-icon":"tabler-road",placeholder:e.$t("Street Name"),rules:[a(w)],label:e.$t("Street Name"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).address_street_name,"onUpdate:modelValue":t[25]||(t[25]=s=>a(l).address_street_name=s)},null,8,["placeholder","rules","label","modelValue"]),r(d,{"prepend-inner-icon":"tabler-number",rules:[a(w)],label:e.$t("Block Number"),placeholder:e.$t("Block Number"),class:"flex-grow-1 mx-2 my-1",modelValue:a(l).block_no,"onUpdate:modelValue":t[26]||(t[26]=s=>a(l).block_no=s)},null,8,["rules","label","placeholder","modelValue"])]),_:1})]),_:1})]),_:1}),a(k)=="admin"||a(k)=="restaurant"?(p(),v(g,{key:2,class:"mt-7 px-5 rounded pb-10",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[r(c,{class:"mx-0 my-0 py-0 px-0",align:"center",justify:"space-between"},{default:o(()=>[_("p",rl,m(e.$t("Order Scheduling")),1),a(se)&&a(l).is_pickup?(p(),v(qa,{key:0,size:"large",label:"",color:"error",class:"text-h6",height:"200","prepend-icon":"tabler-info-circle"},{default:o(()=>[F("The Branch is currently Closed")]),_:1})):f("",!0)]),_:1}),r(g,null,{default:o(()=>[r(c,{justify:"space-between",align:"center",class:wa(e.$vuetify.display.smAndDown?"":"flex-nowrap")},{default:o(()=>[a(l).is_pickup?(p(),X("div",ol,[(p(),v(V,{rules:[a(w)],disabled:!a(l).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:a(l).delivery_date,"onUpdate:modelValue":[t[27]||(t[27]=s=>a(l).delivery_date=s),oe],placeholder:e.$t("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:a(ee)},key:a(pe)},null,8,["rules","disabled","modelValue","placeholder","config"])),(p(),v(V,{rules:[a(w)],disabled:!a(l).is_pickup||a(se),"prepend-inner-icon":"tabler-clock",modelValue:a(l).delivery_time,"onUpdate:modelValue":t[28]||(t[28]=s=>a(l).delivery_time=s),placeholder:e.$t("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:a(J),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:a(B),maxTime:a(Q)}},null,8,["rules","disabled","modelValue","placeholder","config"]))])):f("",!0),a(l).is_pickup?f("",!0):(p(),X("div",dl,[(p(),v(V,{disabled:!a(l).is_pickup,"prepend-inner-icon":"tabler-calendar",modelValue:a(l).delivery_date,"onUpdate:modelValue":[t[29]||(t[29]=s=>a(l).delivery_date=s),oe],placeholder:a(ae)("Choose Date"),class:"flex-grow-1 mx-2 my-1",config:{minDate:a(ee)},key:a(pe)},null,8,["disabled","modelValue","placeholder","config"])),(p(),v(V,{disabled:!a(l).is_pickup||a(se),"prepend-inner-icon":"tabler-clock",modelValue:a(l).delivery_time,"onUpdate:modelValue":t[30]||(t[30]=s=>a(l).delivery_time=s),placeholder:a(ae)("Enter your time"),class:"flex-grow-1 mx-2 my-1",key:a(J),config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:a(B),maxTime:a(Q)}},null,8,["disabled","modelValue","placeholder","config"]))])),r(c,{class:"w-50 mx-2 my-0",justify:e.$vuetify.display.smAndDown?"center":"start"},{default:o(()=>[r(Ma,{modelValue:a(l).is_pickup,"onUpdate:modelValue":[t[31]||(t[31]=s=>a(l).is_pickup=s),Fe],"false-value":!1,"true-value":!0,inset:!1,label:a(ae)("Schedule Order")},null,8,["modelValue","label"])]),_:1},8,["justify"])]),_:1},8,["class"])]),_:1})]),_:1})):f("",!0)]),_:1},8,["cols"]),r(g,{class:"pt-0",cols:e.$vuetify.display.smAndDown?12:4},{default:o(()=>[r(g,{class:"mt-16 px-5 rounded pb-10 w-100 mx-auto",style:{"background-color":"rgb(var(--v-theme-surface))"}},{default:o(()=>[_("p",nl,m(e.$t("Order Summary")),1),r(g,null,{default:o(()=>[r(c,{justify:"space-between",align:"center"},{default:o(()=>[r(Ee,{clearable:"","prepend-inner-icon":"tabler-building-store",placeholder:"Select a Branch",rules:[a(w)],label:e.$t("Branch"),loading:a(W),modelValue:a(l).branch_id,"onUpdate:modelValue":[t[32]||(t[32]=s=>a(l).branch_id=s),oe],items:a(x),"item-value":"id","item-title":a(Me),style:{width:"100%"},variant:"outlined","return-object":!1},null,8,["rules","label","loading","modelValue","items","item-title"])]),_:1}),r(c,{class:"mt-4"},{default:o(()=>[r(g,{class:"w-100 px-0"},{default:o(()=>[a(T)?(p(),v(d,{key:0,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-user-star",placeholder:e.$t("Enter Employee code"),modelValue:a(A),"onUpdate:modelValue":t[33]||(t[33]=s=>j(A)?A.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])):f("",!0),a(T)?f("",!0):(p(),v(d,{key:1,class:"w-100 flex-grow-1","prepend-inner-icon":"tabler-gift",placeholder:e.$t("Have a Voucher?"),modelValue:a(D),"onUpdate:modelValue":t[34]||(t[34]=s=>j(D)?D.value=s:null),style:{width:"100%"},variant:"outlined"},null,8,["placeholder","modelValue"])),r(Ha,{onClick:da,label:e.$t("Is An Employee"),modelValue:a(T),"onUpdate:modelValue":t[35]||(t[35]=s=>j(T)?T.value=s:null),class:"mt-2"},null,8,["label","modelValue"]),!a(T)&&a(k)=="admin"?(p(),v(S,{key:2,class:"mt-3",disabled:!a(D),block:"",loading:a(q),onClick:Xe},{default:o(()=>[F(m(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])):f("",!0),!a(T)&&a(k)=="restaurant"?(p(),v(S,{key:3,class:"mt-3",disabled:!a(D),block:"",loading:a(q),onClick:Ze},{default:o(()=>[F(m(e.$t("Apply Voucher")),1)]),_:1},8,["disabled","loading"])):f("",!0),a(T)&&a(k)=="admin"?(p(),v(S,{key:4,class:"mt-3",disabled:!a(A),block:"",loading:a(Y),onClick:ra},{default:o(()=>[F(m(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):f("",!0),a(T)&&a(k)=="restaurant"?(p(),v(S,{key:5,class:"mt-3",disabled:!a(A),block:"",loading:a(Y),onClick:oa},{default:o(()=>[F(m(e.$t("Check Employee")),1)]),_:1},8,["disabled","loading"])):f("",!0)]),_:1})]),_:1}),r(c,{class:"mt-5"},{default:o(()=>[r(ce,{class:"w-100 px-2 py-2",variant:"tonal",color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},{default:o(()=>[r(Z,null,{default:o(()=>[r(c,{align:"center",justify:"space-between"},{default:o(()=>[_("p",ul,m(e.$t("Deliver Cost")),1),_("p",il,m(a(l).delivery_cost)+" KWD",1)]),_:1}),r(c,null,{default:o(()=>[r(Ce,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1}),r(c,{align:"center",justify:"space-between",class:"mt-5"},{default:o(()=>[pl,_("p",cl,m(Number(a(U)+a(l).delivery_cost).toFixed(2))+" KWD",1)]),_:1}),a(l).v_code?(p(),v(c,{key:0},{default:o(()=>[r(Ce,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):f("",!0),a(l).v_code||a(l).employee_code?(p(),v(c,{key:1,align:"center",justify:"space-between",class:"mt-5"},{default:o(()=>[_("p",ml,m(e.$t("Discount rate")),1),_("p",vl,m(a(M)),1)]),_:1})):f("",!0),a(l).v_code||a(l).employee_code?(p(),v(c,{key:2},{default:o(()=>[r(Ce,{color:e.$vuetify.theme.current.dark?"#B3BFFFFF":"primary"},null,8,["color"])]),_:1})):f("",!0),a(l).v_code||a(l).employee_code?(p(),v(c,{key:3,align:"center",justify:"space-between",class:"mt-5"},{default:o(()=>[_("p",fl,m(e.$t("New Total")),1),_("p",_l,m(Number(a(ea)).toFixed(1))+" KWD",1)]),_:1})):f("",!0)]),_:1})]),_:1},8,["color"])]),_:1}),r(c,{class:"mt-8"},{default:o(()=>[r(S,{type:"submit",loading:a(ue),block:""},{default:o(()=>[F(m(e.$t("Create Order")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"])]),_:1},8,["onSubmit"])]),_:1})])}}};typeof Te=="function"&&Te(qe);const et=_a(qe,[["__scopeId","data-v-592614b8"]]);export{et as default};
