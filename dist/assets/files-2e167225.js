const t=r=>new Promise((o,a)=>{const e=new FileReader;e.readAsDataURL(r),e.onload=()=>o(e.result),e.onerror=s=>a(s)});export{t};
