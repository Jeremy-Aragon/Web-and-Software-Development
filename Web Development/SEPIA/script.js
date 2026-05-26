/* ── UTILS ── */
function drawBean(ctx,x,y,r,angle){
  ctx.save();ctx.translate(x,y);ctx.rotate(angle);
  ctx.fillStyle='#3D1F0A';ctx.beginPath();ctx.ellipse(0,0,r,r*0.58,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#2A1205';ctx.lineWidth=0.8;
  ctx.beginPath();ctx.moveTo(0,-r*0.52);ctx.lineTo(0,r*0.52);ctx.stroke();
  ctx.restore();
}

/* ── NAV SCROLL ── */
const nav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60));

/* ── SCROLL REVEAL ── */
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

/* ── HERO ── */
function drawHero(cv){
  const w=cv.offsetWidth,h=cv.offsetHeight;cv.width=w;cv.height=h;
  const ctx=cv.getContext('2d');
  ctx.fillStyle='#1A0F07';ctx.fillRect(0,0,w,h);
  const wood=ctx.createLinearGradient(0,h*0.6,0,h);
  wood.addColorStop(0,'#2E1A0E');wood.addColorStop(1,'#18100A');
  ctx.fillStyle=wood;ctx.fillRect(0,h*0.6,w,h*0.4);
  ctx.strokeStyle='rgba(55,30,12,0.5)';ctx.lineWidth=0.8;
  for(let i=0;i<18;i++){ctx.beginPath();const y=h*0.63+i*(h*0.022);ctx.moveTo(0,y);ctx.bezierCurveTo(w*0.3,y+3,w*0.7,y-2,w,y+2);ctx.stroke();}
  const glow=ctx.createRadialGradient(w*0.72,h*0.22,20,w*0.72,h*0.22,w*0.55);
  glow.addColorStop(0,'rgba(200,140,55,0.24)');glow.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
  ctx.save();ctx.globalAlpha=0.07;ctx.fillStyle='#F6EDD9';
  ctx.beginPath();ctx.moveTo(w*0.63,0);ctx.lineTo(w*0.79,0);ctx.lineTo(w*0.69,h*0.6);ctx.lineTo(w*0.53,h*0.6);ctx.closePath();ctx.fill();ctx.restore();
  drawCupScene(ctx,w*0.7,h*0.52,Math.min(w,h)*0.21);
  [[w*0.15,h*0.73],[w*0.21,h*0.79],[w*0.11,h*0.82],[w*0.29,h*0.76],[w*0.82,h*0.74],[w*0.88,h*0.8]].forEach(([bx,by])=>drawBean(ctx,bx,by,13,Math.random()*1.2-0.6));
  ctx.fillStyle='#2A1A0C';ctx.beginPath();ctx.roundRect(w*0.4,h*0.72,w*0.12,w*0.085,2);ctx.fill();
  ctx.fillStyle='#C8A96A';ctx.fillRect(w*0.4,h*0.72,1.5,w*0.085);
  const fade=ctx.createLinearGradient(0,0,w*0.52,0);
  fade.addColorStop(0,'rgba(12,9,7,0.92)');fade.addColorStop(1,'rgba(12,9,7,0)');
  ctx.fillStyle=fade;ctx.fillRect(0,0,w,h);
  const bot=ctx.createLinearGradient(0,h*0.72,0,h);
  bot.addColorStop(0,'rgba(12,9,7,0)');bot.addColorStop(1,'rgba(12,9,7,0.8)');
  ctx.fillStyle=bot;ctx.fillRect(0,h*0.72,w,h*0.28);
}

function drawCupScene(ctx,cx,cy,s){
  ctx.fillStyle='rgba(0,0,0,0.25)';ctx.beginPath();ctx.ellipse(cx,cy+s*0.62,s*0.72,s*0.1,0,0,Math.PI*2);ctx.fill();
  const cpG=ctx.createLinearGradient(cx-s*0.38,cy,cx+s*0.38,cy);
  cpG.addColorStop(0,'#C8AE88');cpG.addColorStop(0.45,'#E8D5B2');cpG.addColorStop(1,'#B89870');
  ctx.fillStyle=cpG;
  ctx.beginPath();ctx.moveTo(cx-s*0.38,cy-s*0.24);
  ctx.bezierCurveTo(cx-s*0.41,cy+s*0.32,cx-s*0.32,cy+s*0.46,cx,cy+s*0.5);
  ctx.bezierCurveTo(cx+s*0.32,cy+s*0.46,cx+s*0.41,cy+s*0.32,cx+s*0.38,cy-s*0.24);
  ctx.closePath();ctx.fill();
  ctx.fillStyle='#EAD9BE';ctx.beginPath();ctx.ellipse(cx,cy-s*0.24,s*0.38,s*0.072,0,0,Math.PI*2);ctx.fill();
  const cof=ctx.createRadialGradient(cx,cy-s*0.2,2,cx,cy-s*0.24,s*0.32);
  cof.addColorStop(0,'#6B3A1F');cof.addColorStop(0.55,'#3D1F0A');cof.addColorStop(1,'#28120A');
  ctx.fillStyle=cof;ctx.beginPath();ctx.ellipse(cx,cy-s*0.24,s*0.35,s*0.066,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(225,190,130,0.55)';ctx.lineWidth=1.4;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(cx,cy-s*0.24);ctx.bezierCurveTo(cx+s*0.1,cy-s*0.3,cx+s*0.2,cy-s*0.18,cx+s*0.05,cy-s*0.24);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx-s*0.04,cy-s*0.24);ctx.bezierCurveTo(cx-s*0.18,cy-s*0.3,cx-s*0.22,cy-s*0.15,cx-s*0.06,cy-s*0.24);ctx.stroke();
  ctx.strokeStyle='#CEAD86';ctx.lineWidth=s*0.062;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(cx+s*0.37,cy+s*0.04);ctx.bezierCurveTo(cx+s*0.63,cy+s*0.04,cx+s*0.63,cy+s*0.38,cx+s*0.37,cy+s*0.38);ctx.stroke();
  [[cx-s*0.1,cy-s*0.3],[cx+s*0.01,cy-s*0.32],[cx+s*0.12,cy-s*0.29]].forEach(([sx,sy])=>{
    ctx.save();ctx.globalAlpha=0.32;ctx.strokeStyle='#F6EDD9';ctx.lineWidth=1.4;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(sx,sy);ctx.bezierCurveTo(sx+s*0.06,sy-s*0.09,sx-s*0.06,sy-s*0.17,sx,sy-s*0.25);ctx.stroke();ctx.restore();
  });
}

/* ── PHILOSOPHY ── */
function drawPhil(cv){
  const w=cv.offsetWidth,h=cv.offsetHeight;cv.width=w;cv.height=h;
  const ctx=cv.getContext('2d');
  ctx.fillStyle='#2E1A0E';ctx.fillRect(0,0,w,h);
  const g=ctx.createRadialGradient(w*0.3,h*0.22,10,w*0.3,h*0.26,w*0.7);
  g.addColorStop(0,'rgba(200,140,55,0.28)');g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  const tbl=ctx.createLinearGradient(0,h*0.56,0,h);
  tbl.addColorStop(0,'#3A2010');tbl.addColorStop(1,'#1D1108');
  ctx.fillStyle=tbl;ctx.fillRect(0,h*0.56,w,h*0.44);
  drawPourOver(ctx,w*0.5,h*0.5,Math.min(w*0.33,120));
  [[w*0.16,h*0.73],[w*0.24,h*0.79],[w*0.72,h*0.75],[w*0.82,h*0.71],[w*0.78,h*0.81]].forEach(([bx,by])=>drawBean(ctx,bx,by,10,Math.random()*1.2-0.6));
  ctx.strokeStyle='#C8A96A';ctx.lineWidth=2.4;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(w*0.72,h*0.6);ctx.lineTo(w*0.68,h*0.78);ctx.stroke();
  ctx.fillStyle='#C8A96A';ctx.beginPath();ctx.ellipse(w*0.718,h*0.595,5.5,3.5,-0.3,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#1A0F07';ctx.beginPath();ctx.roundRect(w*0.1,h*0.6,w*0.22,h*0.28,3);ctx.fill();
  ctx.fillStyle='#C8A96A';ctx.fillRect(w*0.1,h*0.6,1.5,h*0.28);
  ctx.strokeStyle='rgba(200,169,106,0.18)';ctx.lineWidth=0.8;
  for(let i=1;i<5;i++){ctx.beginPath();ctx.moveTo(w*0.13,h*(0.63+i*0.05));ctx.lineTo(w*0.3,h*(0.63+i*0.05));ctx.stroke();}
  const vig=ctx.createLinearGradient(0,h*0.82,0,h);
  vig.addColorStop(0,'rgba(29,17,8,0)');vig.addColorStop(1,'rgba(29,17,8,0.72)');
  ctx.fillStyle=vig;ctx.fillRect(0,h*0.82,w,h*0.18);
}

function drawPourOver(ctx,cx,cy,s){
  ctx.fillStyle='rgba(180,200,215,0.1)';ctx.strokeStyle='rgba(180,200,215,0.28)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.roundRect(cx-s*0.3,cy+s*0.33,s*0.6,s*0.62,4);ctx.fill();ctx.stroke();
  const cf=ctx.createLinearGradient(0,cy+s*0.7,0,cy+s*0.95);
  cf.addColorStop(0,'rgba(61,31,10,0.82)');cf.addColorStop(1,'rgba(38,18,6,0.92)');
  ctx.fillStyle=cf;ctx.beginPath();ctx.roundRect(cx-s*0.28,cy+s*0.72,s*0.56,s*0.21,2);ctx.fill();
  ctx.strokeStyle='rgba(180,200,215,0.28)';ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(cx+s*0.4,cy+s*0.57,s*0.14,Math.PI*1.5,Math.PI*0.5);ctx.stroke();
  const coneG=ctx.createLinearGradient(cx-s*0.5,cy,cx+s*0.5,cy);
  coneG.addColorStop(0,'#7A4E25');coneG.addColorStop(0.5,'#9B6838');coneG.addColorStop(1,'#6A4020');
  ctx.fillStyle=coneG;ctx.beginPath();ctx.moveTo(cx-s*0.5,cy-s*0.4);ctx.lineTo(cx+s*0.5,cy-s*0.4);ctx.lineTo(cx,cy+s*0.3);ctx.closePath();ctx.fill();
  ctx.fillStyle='#A87840';ctx.beginPath();ctx.roundRect(cx-s*0.52,cy-s*0.44,s*1.04,s*0.1,4);ctx.fill();
  ctx.fillStyle='#F0E4CC';ctx.beginPath();ctx.moveTo(cx-s*0.44,cy-s*0.36);ctx.lineTo(cx+s*0.44,cy-s*0.36);ctx.lineTo(cx,cy+s*0.22);ctx.closePath();ctx.fill();
  const grd=ctx.createRadialGradient(cx,cy-s*0.08,2,cx,cy-s*0.04,s*0.3);
  grd.addColorStop(0,'#2A1205');grd.addColorStop(0.7,'rgba(61,31,10,0.6)');grd.addColorStop(1,'rgba(61,31,10,0)');
  ctx.fillStyle=grd;ctx.beginPath();ctx.moveTo(cx-s*0.36,cy-s*0.08);ctx.lineTo(cx+s*0.36,cy-s*0.08);ctx.lineTo(cx,cy+s*0.22);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(61,31,10,0.65)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(cx,cy+s*0.3);ctx.lineTo(cx,cy+s*0.35);ctx.stroke();
}

/* ── MENU CARDS ── */
function drawMenuCards(){
  (function(cv){
    const w=cv.offsetWidth||400,h=cv.offsetHeight||300;cv.width=w;cv.height=h;
    const ctx=cv.getContext('2d');
    ctx.fillStyle='#1A1005';ctx.fillRect(0,0,w,h);
    const dawn=ctx.createRadialGradient(w*0.5,0,10,w*0.5,0,w*0.85);
    dawn.addColorStop(0,'rgba(220,155,55,0.38)');dawn.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=dawn;ctx.fillRect(0,0,w,h);
    ctx.fillStyle='#2E1A0E';ctx.fillRect(0,h*0.54,w,h*0.46);
    const tl=ctx.createLinearGradient(0,h*0.54,0,h*0.58);
    tl.addColorStop(0,'rgba(200,169,106,0.28)');tl.addColorStop(1,'rgba(200,169,106,0)');
    ctx.fillStyle=tl;ctx.fillRect(0,h*0.54,w,h*0.04);
    const rx=w*0.5,ry=h*0.64;
    ctx.fillStyle='#E8D5B2';ctx.beginPath();ctx.ellipse(rx,ry,w*0.21,w*0.21,0,0,Math.PI*2);ctx.fill();
    const sf=ctx.createRadialGradient(rx,ry,2,rx,ry,w*0.19);
    sf.addColorStop(0,'#5A2D0E');sf.addColorStop(0.6,'#3A1A08');sf.addColorStop(1,'#281205');
    ctx.fillStyle=sf;ctx.beginPath();ctx.ellipse(rx,ry,w*0.18,w*0.18,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(215,180,120,0.55)';ctx.lineWidth=1.6;ctx.lineCap='round';
    for(let i=0;i<6;i++){const a=(i/6)*Math.PI*2;ctx.beginPath();ctx.moveTo(rx,ry);ctx.lineTo(rx+Math.cos(a)*w*0.09,ry+Math.sin(a)*w*0.09);ctx.stroke();}
    ctx.fillStyle='rgba(215,180,120,0.4)';ctx.beginPath();ctx.ellipse(rx,ry,w*0.038,w*0.038,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(0,0,0,0.18)';ctx.beginPath();ctx.ellipse(rx,ry+w*0.24,w*0.24,w*0.06,0,0,Math.PI*2);ctx.fill();
    [[w*0.2,h*0.73],[w*0.75,h*0.68],[w*0.84,h*0.79]].forEach(([bx,by])=>drawBean(ctx,bx,by,9,Math.random()));
  })(document.getElementById('mc0'));

  (function(cv){
    const w=cv.offsetWidth||400,h=cv.offsetHeight||300;cv.width=w;cv.height=h;
    const ctx=cv.getContext('2d');
    ctx.fillStyle='#0F0A06';ctx.fillRect(0,0,w,h);
    const glow=ctx.createRadialGradient(w*0.5,h*0.3,5,w*0.5,h*0.3,w*0.65);
    glow.addColorStop(0,'rgba(160,98,35,0.32)');glow.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    ctx.fillStyle='#2A1608';ctx.fillRect(0,h*0.52,w,h*0.48);
    const gx=w*0.5,gy=h*0.52,gH=h*0.39;
    ctx.strokeStyle='rgba(200,215,225,0.32)';ctx.lineWidth=2;ctx.fillStyle='rgba(200,215,225,0.05)';
    ctx.beginPath();ctx.roundRect(gx-w*0.12,gy-gH,w*0.24,gH,3);ctx.fill();ctx.stroke();
    ctx.fillStyle='rgba(40,18,5,0.95)';ctx.beginPath();ctx.roundRect(gx-w*0.105,gy-gH*0.5,w*0.21,gH*0.5,2);ctx.fill();
    const mlk=ctx.createLinearGradient(0,gy-gH,0,gy-gH*0.5);
    mlk.addColorStop(0,'rgba(240,220,188,0.9)');mlk.addColorStop(1,'rgba(198,155,96,0.72)');
    ctx.fillStyle=mlk;ctx.beginPath();ctx.roundRect(gx-w*0.105,gy-gH,w*0.21,gH*0.52,2);ctx.fill();
    ctx.strokeStyle='rgba(80,38,12,0.55)';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.ellipse(gx,gy-gH*0.84,w*0.058,w*0.028,0,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle='rgba(200,215,225,0.18)';
    [[gx-w*0.09,gy-gH*0.62],[gx+w*0.08,gy-gH*0.4],[gx-w*0.07,gy-gH*0.25]].forEach(([dx,dy])=>{ctx.beginPath();ctx.ellipse(dx,dy,2,3,0,0,Math.PI*2);ctx.fill();});
    ctx.fillStyle='#E8DDD0';ctx.beginPath();ctx.roundRect(gx-w*0.18,gy,w*0.36,h*0.07,3);ctx.fill();
    ctx.strokeStyle='rgba(145,125,105,0.28)';ctx.lineWidth=0.7;
    ctx.beginPath();ctx.moveTo(gx-w*0.12,gy);ctx.bezierCurveTo(gx,gy+h*0.025,gx+w*0.08,gy+h*0.012,gx+w*0.14,gy+h*0.065);ctx.stroke();
  })(document.getElementById('mc1'));

  (function(cv){
    const w=cv.offsetWidth||400,h=cv.offsetHeight||300;cv.width=w;cv.height=h;
    const ctx=cv.getContext('2d');
    ctx.fillStyle='#060D12';ctx.fillRect(0,0,w,h);
    const b1=ctx.createRadialGradient(w*0.38,h*0.2,10,w*0.38,h*0.2,w*0.75);
    b1.addColorStop(0,'rgba(35,75,100,0.42)');b1.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=b1;ctx.fillRect(0,0,w,h);
    const b2=ctx.createRadialGradient(w*0.62,h*0.72,5,w*0.62,h*0.72,w*0.5);
    b2.addColorStop(0,'rgba(140,76,18,0.26)');b2.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=b2;ctx.fillRect(0,0,w,h);
    const tx=w*0.48,ty=h*0.76,tH=h*0.62;
    ctx.strokeStyle='rgba(178,210,232,0.28)';ctx.lineWidth=2;ctx.fillStyle='rgba(178,210,232,0.04)';
    ctx.beginPath();ctx.roundRect(tx-w*0.1,ty-tH,w*0.2,tH,4);ctx.fill();ctx.stroke();
    [[tx-w*0.06,ty-tH*0.18],[tx+w*0.02,ty-tH*0.3],[tx-w*0.03,ty-tH*0.44]].forEach(([ix,iy])=>{ctx.fillStyle='rgba(200,228,245,0.2)';ctx.strokeStyle='rgba(200,228,245,0.12)';ctx.lineWidth=0.8;ctx.beginPath();ctx.roundRect(ix,iy,w*0.07,w*0.055,2);ctx.fill();ctx.stroke();});
    const brew=ctx.createLinearGradient(0,ty-tH*0.57,0,ty);
    brew.addColorStop(0,'rgba(88,42,10,0.9)');brew.addColorStop(1,'rgba(28,14,4,0.96)');
    ctx.fillStyle=brew;ctx.beginPath();ctx.roundRect(tx-w*0.088,ty-tH*0.57,w*0.176,tH*0.57,2);ctx.fill();
    ctx.fillStyle='rgba(118,62,14,0.5)';ctx.beginPath();ctx.ellipse(tx,ty-tH*0.57,w*0.083,w*0.017,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(200,228,245,0.13)';
    for(let i=0;i<8;i++){ctx.beginPath();ctx.ellipse(tx+(-w*0.07+Math.random()*w*0.14),ty-tH*0.18+Math.random()*tH*0.52,1.5,2,0,0,Math.PI*2);ctx.fill();}
    ctx.strokeStyle='rgba(200,169,106,0.68)';ctx.lineWidth=3;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(tx+w*0.06,ty);ctx.lineTo(tx+w*0.09,ty-tH*0.66);ctx.stroke();
  })(document.getElementById('mc2'));
}

/* ── EXPERIENCE ── */
function drawExp(cv){
  const w=cv.offsetWidth,h=cv.offsetHeight;cv.width=w;cv.height=h;
  const ctx=cv.getContext('2d');
  ctx.fillStyle='#0D0806';ctx.fillRect(0,0,w,h);
  const win=ctx.createRadialGradient(w*0.85,h*0.1,18,w*0.85,h*0.15,w*0.62);
  win.addColorStop(0,'rgba(195,145,55,0.42)');win.addColorStop(0.5,'rgba(175,115,38,0.16)');win.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=win;ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='rgba(200,169,106,0.11)';ctx.lineWidth=3;
  ctx.strokeRect(w*0.68,h*0.05,w*0.27,h*0.5);
  ctx.beginPath();ctx.moveTo(w*0.815,h*0.05);ctx.lineTo(w*0.815,h*0.55);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.68,h*0.28);ctx.lineTo(w*0.95,h*0.28);ctx.stroke();
  ctx.fillStyle='#1A0E06';ctx.fillRect(0,h*0.7,w,h*0.3);
  ctx.strokeStyle='rgba(58,33,12,0.5)';ctx.lineWidth=0.8;
  for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(0,h*(0.73+i*0.05));ctx.lineTo(w,h*(0.73+i*0.05));ctx.stroke();}
  ctx.fillStyle='#3A2010';ctx.fillRect(0,h*0.68,w,h*0.04);
  ctx.fillStyle='#221408';
  [[w*0.22,h*0.62],[w*0.56,h*0.64],[w*0.82,h*0.6]].forEach(([cx,cy])=>{
    ctx.beginPath();ctx.roundRect(cx-24,cy,48,h*0.24,4);ctx.fill();
    ctx.beginPath();ctx.roundRect(cx-21,cy-h*0.1,42,h*0.14,3);ctx.fill();
  });
  ctx.fillStyle='rgba(50,28,12,0.55)';ctx.fillRect(0,h*0.64,w,h*0.06);
  [[w*0.23,h*0.645],[w*0.49,h*0.66],[w*0.73,h*0.635]].forEach(([ccx,ccy])=>{
    ctx.fillStyle='#D4C0A0';ctx.beginPath();ctx.ellipse(ccx,ccy,14,5.5,0,0,Math.PI*2);ctx.fill();
    const cg=ctx.createRadialGradient(ccx,ccy-3,1,ccx,ccy-3,12);
    cg.addColorStop(0,'#3D1F0A');cg.addColorStop(1,'#2A1205');
    ctx.fillStyle=cg;ctx.beginPath();ctx.ellipse(ccx,ccy-3,11,4.5,0,0,Math.PI*2);ctx.fill();
  });
}

/* ── ORIGIN IMAGES ── */
function drawOrigins(){
  (function(cv){
    const w=cv.offsetWidth||300,h=cv.offsetHeight||400;cv.width=w;cv.height=h;
    const ctx=cv.getContext('2d');
    const sky=ctx.createLinearGradient(0,0,0,h*0.52);
    sky.addColorStop(0,'#182418');sky.addColorStop(1,'#283A1E');
    ctx.fillStyle=sky;ctx.fillRect(0,0,w,h);
    ctx.fillStyle='#1E3015';
    ctx.beginPath();ctx.moveTo(0,h*0.58);ctx.bezierCurveTo(w*0.3,h*0.2,w*0.7,h*0.35,w,h*0.38);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fill();
    ctx.fillStyle='#253D18';
    ctx.beginPath();ctx.moveTo(0,h*0.74);ctx.bezierCurveTo(w*0.25,h*0.5,w*0.6,h*0.62,w,h*0.56);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fill();
    ctx.fillStyle='#3A5A25';
    for(let r=0;r<4;r++)for(let c=0;c<6;c++){const px=c*(w*0.18)+w*0.04,py=h*0.62+r*(h*0.1);ctx.beginPath();ctx.ellipse(px,py,w*0.06,h*0.04,0,0,Math.PI*2);ctx.fill();}
    const mist=ctx.createLinearGradient(0,h*0.3,0,h*0.54);
    mist.addColorStop(0,'rgba(200,225,180,0)');mist.addColorStop(0.5,'rgba(200,225,180,0.07)');mist.addColorStop(1,'rgba(200,225,180,0)');
    ctx.fillStyle=mist;ctx.fillRect(0,h*0.3,w,h*0.24);
    const ov=ctx.createLinearGradient(0,0,0,h);ov.addColorStop(0,'rgba(14,20,10,0.4)');ov.addColorStop(1,'rgba(14,20,10,0)');
    ctx.fillStyle=ov;ctx.fillRect(0,0,w,h);
  })(document.getElementById('og0'));

  (function(cv){
    const w=cv.offsetWidth||300,h=cv.offsetHeight||200;cv.width=w;cv.height=h;
    const ctx=cv.getContext('2d');
    ctx.fillStyle='#100A06';ctx.fillRect(0,0,w,h);
    const heat=ctx.createRadialGradient(w*0.5,h*0.65,8,w*0.5,h*0.65,w*0.72);
    heat.addColorStop(0,'rgba(200,75,8,0.32)');heat.addColorStop(0.5,'rgba(155,55,4,0.12)');heat.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=heat;ctx.fillRect(0,0,w,h);
    ctx.fillStyle='#3A3020';ctx.beginPath();ctx.roundRect(w*0.12,h*0.2,w*0.76,h*0.38,8);ctx.fill();
    ctx.fillStyle='#504030';ctx.beginPath();ctx.ellipse(w*0.5,h*0.39,w*0.28,h*0.16,0,0,Math.PI*2);ctx.fill();
    const sight=ctx.createRadialGradient(w*0.5,h*0.39,2,w*0.5,h*0.39,w*0.12);
    sight.addColorStop(0,'rgba(255,115,18,0.82)');sight.addColorStop(0.5,'rgba(198,55,5,0.42)');sight.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=sight;ctx.beginPath();ctx.ellipse(w*0.5,h*0.39,w*0.1,h*0.095,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(200,169,106,0.38)';ctx.lineWidth=1.8;ctx.beginPath();ctx.ellipse(w*0.5,h*0.39,w*0.1,h*0.095,0,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle='rgba(200,148,55,0.22)';
    for(let i=0;i<7;i++){ctx.beginPath();ctx.ellipse(w*(0.28+i*0.07),h*(0.17-i*0.02),2,4,-0.4+Math.random()*0.8,0,Math.PI*2);ctx.fill();}
    ctx.fillStyle='#2A1A08';ctx.beginPath();ctx.roundRect(w*0.08,h*0.6,w*0.84,h*0.2,4);ctx.fill();
    for(let i=0;i<10;i++)drawBean(ctx,w*(0.14+i*0.075),h*(0.66+Math.random()*0.09),7,Math.random()*2);
  })(document.getElementById('og1'));

  (function(cv){
    const w=cv.offsetWidth||300,h=cv.offsetHeight||200;cv.width=w;cv.height=h;
    const ctx=cv.getContext('2d');
    ctx.fillStyle='#0E0B08';ctx.fillRect(0,0,w,h);
    const g=ctx.createRadialGradient(w*0.5,h*0.3,5,w*0.5,h*0.3,w*0.65);
    g.addColorStop(0,'rgba(200,158,72,0.22)');g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
    ctx.fillStyle='#2A1A0A';ctx.fillRect(0,h*0.38,w,h*0.62);
    [{x:w*0.25,y:h*0.68,r:w*0.16},{x:w*0.75,y:h*0.68,r:w*0.16},{x:w*0.5,y:h*0.84,r:w*0.14}].forEach(b=>{
      ctx.fillStyle='#D4C0A0';ctx.beginPath();ctx.ellipse(b.x,b.y,b.r,b.r*0.42,0,0,Math.PI*2);ctx.fill();
      const bs=ctx.createRadialGradient(b.x,b.y,2,b.x,b.y,b.r*0.92);
      bs.addColorStop(0,'#5A2D0E');bs.addColorStop(0.7,'#3A1A08');bs.addColorStop(1,'#2A1205');
      ctx.fillStyle=bs;ctx.beginPath();ctx.ellipse(b.x,b.y,b.r*0.88,b.r*0.38,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(100,58,18,0.5)';ctx.beginPath();ctx.ellipse(b.x,b.y,b.r*0.5,b.r*0.2,0,0,Math.PI*2);ctx.fill();
    });
    ctx.strokeStyle='rgba(200,169,106,0.58)';ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(w*0.5,h*0.44);ctx.lineTo(w*0.5,h*0.6);ctx.stroke();
    ctx.fillStyle='rgba(200,169,106,0.48)';ctx.beginPath();ctx.ellipse(w*0.5,h*0.6,w*0.038,w*0.018,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#F0E4CC';[{x:w*0.1,y:h*0.48},{x:w*0.62,y:h*0.48}].forEach(l=>{ctx.beginPath();ctx.roundRect(l.x,l.y,w*0.17,h*0.07,2);ctx.fill();});
  })(document.getElementById('og2'));
}

/* ── INIT ── */
window.addEventListener('load',()=>{
  const hc=document.getElementById('heroCanvas');
  if(hc){hc.width=hc.offsetWidth;hc.height=hc.offsetHeight;drawHero(hc);}
  const pc=document.getElementById('philCanvas');
  if(pc){pc.width=pc.offsetWidth;pc.height=pc.offsetHeight;drawPhil(pc);}
  drawMenuCards();
  const ec=document.getElementById('expCanvas');
  if(ec){ec.width=ec.offsetWidth;ec.height=ec.offsetHeight;drawExp(ec);}
  drawOrigins();

  let t;window.addEventListener('resize',()=>{
    clearTimeout(t);t=setTimeout(()=>{
      if(hc){hc.width=hc.offsetWidth;hc.height=hc.offsetHeight;drawHero(hc);}
      if(pc){pc.width=pc.offsetWidth;pc.height=pc.offsetHeight;drawPhil(pc);}
      if(ec){ec.width=ec.offsetWidth;ec.height=ec.offsetHeight;drawExp(ec);}
      drawMenuCards();drawOrigins();
    },180);
  });
});
