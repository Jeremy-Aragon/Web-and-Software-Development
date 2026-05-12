const products=[
  {name:'Arko Lounge Chair',cat:'Living Room',price:'₱18,500',badge:'New',color:'#A89070'},
  {name:'Hinoki Side Table',cat:'Living Room',price:'₱12,200',badge:'',color:'#8B7058'},
  {name:'Wabi Pendant Lamp',cat:'Lighting',price:'₱9,800',badge:'',color:'#1C1916'},
  {name:'Linen Throw Set',cat:'Bedroom',price:'₱3,200',badge:'New',color:'#D8CEC0'},
  {name:'Ceramic Vase Trio',cat:'Decor',price:'₱5,500',badge:'',color:'#C4B8A5'},
  {name:'Rattan Basket Shelf',cat:'Living Room',price:'₱7,800',badge:'Sale',color:'#B8936A'},
  {name:'Tatami Floor Cushion',cat:'Living Room',price:'₱4,200',badge:'',color:'#D4C4A8'},
  {name:'Handwoven Wool Rug',cat:'Living Room',price:'₱22,000',badge:'New',color:'#B8A888'},
  {name:'Shou Sugi Ban Tray',cat:'Decor',price:'₱2,800',badge:'',color:'#3C2E20'},
];

function drawProduct(canvas,color,name){
  const w=canvas.width||300,h=canvas.height||400;
  canvas.width=w;canvas.height=h;
  const ctx=canvas.getContext('2d');
  const bg=lightenHex(color,0.85);
  ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
  const g=ctx.createRadialGradient(w*0.3,h*0.25,10,w*0.3,h*0.25,w*0.7);
  g.addColorStop(0,'rgba(255,240,220,0.3)');g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  // draw based on category feel
  const n=name.toLowerCase();
  if(n.includes('chair')){drawChair(ctx,w,h,color)}
  else if(n.includes('lamp')||n.includes('pendant')){drawLampScene(ctx,w,h,color)}
  else if(n.includes('table')){drawTable(ctx,w,h,color)}
  else if(n.includes('rug')){drawRug(ctx,w,h,color)}
  else if(n.includes('vase')){drawVases(ctx,w,h,color)}
  else if(n.includes('basket')||n.includes('shelf')){drawShelf(ctx,w,h,color)}
  else if(n.includes('cushion')||n.includes('linen')||n.includes('throw')){drawPillow(ctx,w,h,color)}
  else if(n.includes('tray')){drawTray(ctx,w,h,color)}
  else{drawGeneric(ctx,w,h,color)}
}

function lightenHex(hex,amt){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgb(${Math.min(255,r+(255-r)*amt)},${Math.min(255,g+(255-g)*amt)},${Math.min(255,b+(255-b)*amt)})`;
}

function drawChair(ctx,w,h,c){
  ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*0.15,h*0.4,w*0.7,h*0.25,8);ctx.fill();
  ctx.fillStyle=lightenHex(c,0.2);ctx.beginPath();ctx.roundRect(w*0.15,h*0.25,w*0.12,h*0.25,4);ctx.fill();
  ctx.fillStyle=lightenHex(c,0.2);ctx.beginPath();ctx.roundRect(w*0.73,h*0.25,w*0.12,h*0.25,4);ctx.fill();
  ctx.fillStyle=lightenHex(c,0.1);ctx.beginPath();ctx.roundRect(w*0.25,h*0.42,w*0.5,h*0.18,6);ctx.fill();
  ctx.strokeStyle=lightenHex(c,-0.3);ctx.lineWidth=3;
  ctx.beginPath();ctx.moveTo(w*0.22,h*0.65);ctx.lineTo(w*0.22,h*0.82);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.78,h*0.65);ctx.lineTo(w*0.78,h*0.82);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.35,h*0.65);ctx.lineTo(w*0.3,h*0.82);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.65,h*0.65);ctx.lineTo(w*0.7,h*0.82);ctx.stroke();
}
function drawLampScene(ctx,w,h,c){
  ctx.fillStyle='rgba(0,0,0,0.6)';ctx.fillRect(0,0,w,h);
  const g2=ctx.createRadialGradient(w/2,h*0.18,5,w/2,h*0.2,w*0.6);
  g2.addColorStop(0,'rgba(255,210,120,0.5)');g2.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g2;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#E8D5B0';ctx.beginPath();ctx.moveTo(w*0.22,h*0.3);ctx.lineTo(w*0.78,h*0.3);ctx.lineTo(w*0.62,h*0.12);ctx.lineTo(w*0.38,h*0.12);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#8B7B68';ctx.lineWidth=3;
  ctx.beginPath();ctx.moveTo(w/2,0);ctx.lineTo(w/2,h*0.12);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w/2,h*0.3);ctx.bezierCurveTo(w*0.55,h*0.55,w*0.46,h*0.7,w/2,h*0.88);ctx.stroke();
  ctx.fillStyle='#3C2E20';ctx.beginPath();ctx.ellipse(w/2,h*0.88,w*0.12,h*0.025,0,0,Math.PI*2);ctx.fill();
  const fg=ctx.createRadialGradient(w/2,h*0.88,5,w/2,h*0.88,w*0.4);
  fg.addColorStop(0,'rgba(255,180,80,0.25)');fg.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=fg;ctx.fillRect(0,h*0.7,w,h*0.3);
}
function drawTable(ctx,w,h,c){
  ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*0.1,h*0.42,w*0.8,h*0.06,3);ctx.fill();
  ctx.strokeStyle=lightenHex(c,-0.25);ctx.lineWidth=3;
  ctx.beginPath();ctx.moveTo(w*0.2,h*0.48);ctx.lineTo(w*0.2,h*0.78);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.8,h*0.48);ctx.lineTo(w*0.8,h*0.78);ctx.stroke();
  ctx.fillStyle='#D4C8B0';ctx.beginPath();ctx.ellipse(w*0.5,h*0.38,w*0.1,h*0.13,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.fillRect(w*0.48,h*0.22,w*0.04,h*0.16);
  ctx.fillStyle=lightenHex(c,0.3);ctx.beginPath();ctx.roundRect(w*0.28,h*0.32,w*0.12,w*0.12,2);ctx.fill();
}
function drawRug(ctx,w,h,c){
  ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*0.1,h*0.3,w*0.8,h*0.45,4);ctx.fill();
  const lighter=lightenHex(c,0.25);
  ctx.strokeStyle=lighter;ctx.lineWidth=2;
  for(let i=0;i<5;i++){ctx.beginPath();ctx.roundRect(w*(0.1+i*0.06),h*(0.3+i*0.04),w*(0.8-i*0.12),h*(0.45-i*0.08),3);ctx.stroke()}
  ctx.strokeStyle='rgba(255,255,255,0.15)';ctx.lineWidth=1;
  for(let i=0;i<8;i++){ctx.beginPath();ctx.moveTo(w*(0.15+i*0.09),h*0.32);ctx.lineTo(w*(0.15+i*0.09),h*0.72);ctx.stroke()}
}
function drawVases(ctx,w,h,c){
  [[0.22,0.5,0.08,0.22],[0.5,0.45,0.1,0.28],[0.76,0.55,0.07,0.18]].forEach(([x,y,rx,ry],i)=>{
    const cols=['#C4B8A5','#8B7058','#D4915A'];
    ctx.fillStyle=cols[i];
    ctx.beginPath();ctx.ellipse(w*x,h*y,w*rx,h*ry,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=lightenHex(cols[i],-0.1);ctx.beginPath();ctx.ellipse(w*x,h*(y-ry),w*rx*0.7,h*0.03,0,0,Math.PI*2);ctx.fill();
    if(i===0){ctx.fillStyle='#8B9B78';ctx.fillRect(w*(x-0.01),h*(y-ry-0.12),w*0.02,h*0.12)}
  });
}
function drawShelf(ctx,w,h,c){
  ctx.strokeStyle=c;ctx.lineWidth=3;
  ctx.fillStyle=lightenHex(c,0.15);
  ctx.beginPath();ctx.roundRect(w*0.1,h*0.2,w*0.8,h*0.55,3);ctx.fill();
  ctx.strokeStyle=c;ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(w*0.1,h*0.42);ctx.lineTo(w*0.9,h*0.42);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.1,h*0.58);ctx.lineTo(w*0.9,h*0.58);ctx.stroke();
  const wc=lightenHex(c,-0.3);
  ctx.fillStyle=wc;ctx.beginPath();ctx.roundRect(w*0.18,h*0.24,w*0.14,h*0.16,2);ctx.fill();
  ctx.fillStyle=wc;ctx.beginPath();ctx.roundRect(w*0.38,h*0.26,w*0.1,h*0.14,2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.beginPath();ctx.ellipse(w*0.7,h*0.32,w*0.07,h*0.1,0,0,Math.PI*2);ctx.fill();
}
function drawPillow(ctx,w,h,c){
  const colors=[c,lightenHex(c,0.2),lightenHex(c,-0.1),'#F5F0E8'];
  [[0.12,0.3,0.35,0.22],[0.52,0.32,0.35,0.2],[0.12,0.56,0.5,0.18],[0.66,0.54,0.28,0.2]].forEach(([x,y,rw,rh],i)=>{
    ctx.fillStyle=colors[i%colors.length];ctx.beginPath();ctx.roundRect(w*x,h*y,w*rw,h*rh,8);ctx.fill();
    ctx.strokeStyle='rgba(100,80,60,0.1)';ctx.lineWidth=0.5;ctx.stroke();
  });
}
function drawTray(ctx,w,h,c){
  ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*0.1,h*0.42,w*0.8,h*0.2,4);ctx.fill();
  ctx.fillStyle=lightenHex(c,0.3);ctx.beginPath();ctx.roundRect(w*0.16,h*0.44,w*0.68,h*0.16,3);ctx.fill();
  ctx.fillStyle='#D4C8B0';ctx.beginPath();ctx.ellipse(w*0.38,h*0.5,w*0.07,h*0.09,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=lightenHex(c,-0.1);ctx.beginPath();ctx.ellipse(w*0.62,h*0.5,w*0.05,h*0.07,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.fillRect(w*0.6,h*0.38,w*0.02,h*0.12);
}
function drawGeneric(ctx,w,h,c){
  ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*0.2,h*0.3,w*0.6,h*0.4,6);ctx.fill();
}

function drawFeatured(canvas){
  const w=canvas.offsetWidth||300,h=canvas.offsetHeight||200;
  canvas.width=w;canvas.height=h;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#2C2420';ctx.fillRect(0,0,w,h);
  // warm glow top left
  const g=ctx.createRadialGradient(w*0.2,h*0.3,5,w*0.2,h*0.3,w*0.6);
  g.addColorStop(0,'rgba(180,140,80,0.3)');g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  // sofa silhouette
  ctx.fillStyle='#6B5040';ctx.beginPath();ctx.roundRect(w*0.05,h*0.5,w*0.9,h*0.3,6);ctx.fill();
  ctx.fillStyle='#7B6050';ctx.beginPath();ctx.roundRect(w*0.05,h*0.38,w*0.2,h*0.24,4);ctx.fill();
  ctx.fillStyle='#7B6050';ctx.beginPath();ctx.roundRect(w*0.75,h*0.38,w*0.2,h*0.24,4);ctx.fill();
  ctx.fillStyle='#F0E8D8';ctx.beginPath();ctx.roundRect(w*0.25,h*0.42,w*0.2,h*0.16,6);ctx.fill();
  ctx.fillStyle='#B8A888';ctx.beginPath();ctx.roundRect(w*0.52,h*0.44,w*0.2,h*0.14,6);ctx.fill();
  ctx.fillStyle='#C8B898';ctx.beginPath();ctx.ellipse(w*0.5,h*0.75,w*0.08,h*0.1,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.fillRect(w*0.48,h*0.58,w*0.04,h*0.17);
  const fl=ctx.createLinearGradient(0,h*0.8,0,h);
  fl.addColorStop(0,'rgba(0,0,0,0)');fl.addColorStop(1,'rgba(0,0,0,0.5)');
  ctx.fillStyle=fl;ctx.fillRect(0,h*0.7,w,h*0.3);
}

function setFilter(el){
  document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

document.querySelectorAll('.swatch').forEach(s=>{
  s.addEventListener('click',function(){
    document.querySelectorAll('.swatch').forEach(sw=>sw.classList.remove('active'));
    this.classList.add('active');
  });
});

window.addEventListener('load',()=>{
  const fc=document.getElementById('featCanvas');
  drawFeatured(fc);

  const grid=document.getElementById('productsGrid');
  products.forEach((p,i)=>{
    const div=document.createElement('div');
    div.className='product-card';
    div.innerHTML=`<div class="pc-img">
      <canvas id="pc${i}" width="300" height="400"></canvas>
      ${p.badge?`<div class="pc-badge ${p.badge==='New'?'new':''}">${p.badge}</div>`:''}
      <div class="pc-wish"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
    </div>
    <div class="pc-body">
      <div class="pc-cat">${p.cat}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-bottom">
        <div class="pc-price">${p.price}</div>
        <button class="pc-add">+ Add to cart</button>
      </div>
    </div>`;
    grid.appendChild(div);
    setTimeout(()=>drawProduct(document.getElementById('pc'+i),p.color,p.name),50);
  });
});