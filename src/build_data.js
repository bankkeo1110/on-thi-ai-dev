const fs=require('fs');global.L1=[];global.L2=[];
for(const f of ['l1_a','l1_b','l2_a','l2_b','l2_c','patch_d1']) eval.call(global, fs.readFileSync(f+'.js','utf8').replace(/^const /mg,'global.').replace(/^(P[12]) =/mg,'global.$1 ='));
P1.forEach((s,i)=>{if(s.length!==20)throw 'P1 len '+i; s.forEach((t,j)=>{if(j%3!==0)L1[i][j][2][1]=t})});
P2.forEach((s,i)=>{if(s.length!==20)throw 'P2 len '+i; s.forEach((t,j)=>L2[i][j][3][1]=t)});
const stat=(L,k)=>{let c=0,n=0;L.flat().forEach(q=>{const l=q[k].map(o=>o.length);n++;if(l[0]===Math.max(...l))c++});return c+'/'+n};
console.log('sets',L1.length,L2.length,'correct-longest L1',stat(L1,2),'L2',stat(L2,3));
const out={L1:L1.map(s=>s.map(([t,q,o,e])=>({t,w:10,q,o,e}))),L2:L2.map(s=>s.map(([t,w,q,o,e])=>({t,w,q,o,e})))};
fs.writeFileSync('data.json',JSON.stringify(out));console.log('bytes',fs.statSync('data.json').size, 'L2 totals',out.L2.map(s=>s.reduce((a,q)=>a+q.w,0)));
