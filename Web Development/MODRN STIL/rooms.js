function lh(hex,a){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `rgb(${Math.min(255,r+(255-r)*a)},${Math.min(255,g+(255-g)*a)},${Math.min(255,b+(255-b)*a)})`;
}

function initCanvas(el){
  const w=el.offsetWidth||400,h=el.offsetHeight||300;
  el.width=w;
  el.height=h;
  return el.getContext('2d');
}

function drawLiving(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#DDD5C8';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#C8BFB0';ctx.fillRect(0,h*0.7,w,h*0.3);
  ctx.strokeStyle='rgba(150,130,110,0.2)';ctx.lineWidth=0.5;
  for(let i=0;i<h;i+=25){ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(w,i);ctx.stroke();}
  ctx.fillStyle='rgba(200,220,240,0.35)';ctx.fillRect(w*0.55,h*0.05,w*0.38,h*0.55);
  ctx.strokeStyle='rgba(100,85,65,0.4)';ctx.lineWidth=2;
  ctx.strokeRect(w*0.55,h*0.05,w*0.38,h*0.55);
  ctx.beginPath();ctx.moveTo(w*0.74,h*0.05);ctx.lineTo(w*0.74,h*0.6);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.55,h*0.32);ctx.lineTo(w*0.93,h*0.32);ctx.stroke();
  const lb=ctx.createLinearGradient(w*0.55,0,w*0.2,h);
  lb.addColorStop(0,'rgba(255,240,200,0.18)');lb.addColorStop(1,'rgba(255,240,200,0)');
  ctx.fillStyle=lb;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#A89478';ctx.beginPath();ctx.roundRect(w*0.04,h*0.58,w*0.48,h*0.18,6);ctx.fill();
  ctx.fillStyle='#B8A488';ctx.beginPath();ctx.roundRect(w*0.04,h*0.48,w*0.13,h*0.18,4);ctx.fill();
  ctx.fillStyle='#B8A488';ctx.beginPath();ctx.roundRect(w*0.39,h*0.48,w*0.13,h*0.18,4);ctx.fill();
  ctx.fillStyle='#E8DDD0';ctx.beginPath();ctx.roundRect(w*0.13,h*0.52,w*0.12,h*0.12,5);ctx.fill();
  ctx.fillStyle='#C8B898';ctx.beginPath();ctx.roundRect(w*0.29,h*0.54,w*0.1,h*0.1,5);ctx.fill();
  ctx.fillStyle='#5C4A38';ctx.beginPath();ctx.roundRect(w*0.14,h*0.76,w*0.25,h*0.08,2);ctx.fill();
  ctx.fillStyle='#4C3A28';ctx.fillRect(w*0.16,h*0.84,w*0.03,h*0.06);ctx.fillRect(w*0.35,h*0.84,w*0.03,h*0.06);
  ctx.fillStyle='#7B6C58';ctx.beginPath();ctx.roundRect(w*0.88,h*0.72,w*0.07,h*0.18,2);ctx.fill();
  for(let i=0;i<6;i++){
    ctx.fillStyle='#6B8B5A';
    ctx.beginPath();ctx.ellipse(w*(0.84+i*0.03),h*(0.68-i*0.04),w*0.04,h*0.07,(i-3)*0.3,0,Math.PI*2);ctx.fill();
  }
  ctx.fillStyle='#E8D8B8';ctx.beginPath();ctx.moveTo(w*0.06,h*0.38);ctx.lineTo(w*0.14,h*0.38);ctx.lineTo(w*0.12,h*0.5);ctx.lineTo(w*0.08,h*0.5);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#7B6858';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(w*0.1,h*0.5);ctx.lineTo(w*0.1,h*0.7);ctx.stroke();
  const lg=ctx.createRadialGradient(w*0.1,h*0.44,3,w*0.1,h*0.44,w*0.25);
  lg.addColorStop(0,'rgba(255,220,150,0.2)');lg.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=lg;ctx.fillRect(0,0,w,h);
}

function drawBedroom(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#EAE4DC';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#D5CDBD';ctx.fillRect(0,h*0.68,w,h*0.32);
  ctx.strokeStyle='rgba(150,130,110,0.15)';ctx.lineWidth=0.5;
  for(let i=0;i<h;i+=20){ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(w,i);ctx.stroke();}
  ctx.fillStyle='#D8CEC0';ctx.fillRect(w*0.08,h*0.4,w*0.84,h*0.42);
  ctx.fillStyle='#C8BCAC';ctx.fillRect(w*0.08,h*0.4,w*0.84,h*0.1);
  ctx.fillStyle='#6B5040';ctx.fillRect(w*0.08,h*0.28,w*0.84,h*0.14);
  ['#F5F0E8','#E8DDD0','#F0E8DC','#DDD0C0'].forEach((c,i)=>{
    ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*(0.12+i*0.21),h*0.44,w*0.18,h*0.1,6);ctx.fill();
    ctx.strokeStyle='rgba(100,80,60,0.12)';ctx.lineWidth=0.5;ctx.stroke();
  });
  ctx.fillStyle='#B8A888';ctx.beginPath();ctx.roundRect(w*0.1,h*0.6,w*0.45,h*0.15,3);ctx.fill();
  ctx.fillStyle='#7B6858';ctx.fillRect(w*0.82,h*0.56,w*0.12,h*0.2);
  ctx.fillStyle='#DDD0B8';ctx.beginPath();ctx.ellipse(w*0.88,h*0.52,w*0.04,h*0.06,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#E8D0A0';ctx.beginPath();ctx.ellipse(w*0.88,h*0.47,w*0.06,h*0.08,-0.2,0,Math.PI*2);ctx.fill();
  const bg=ctx.createRadialGradient(w*0.88,h*0.5,3,w*0.88,h*0.5,w*0.3);
  bg.addColorStop(0,'rgba(255,220,150,0.18)');bg.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
}

function drawDining(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#E0D8CC';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#C8BFB0';ctx.fillRect(0,h*0.72,w,h*0.28);
  ctx.fillStyle='#6B5040';ctx.beginPath();ctx.roundRect(w*0.1,h*0.45,w*0.8,h*0.08,3);ctx.fill();
  ctx.fillStyle='#5C4030';ctx.fillRect(w*0.18,h*0.53,w*0.04,h*0.22);ctx.fillRect(w*0.78,h*0.53,w*0.04,h*0.22);
  [[0.04,0.42,'#A89070'],[0.82,0.42,'#A89070'],[0.22,0.38,'#A89070'],[0.55,0.38,'#A89070']].forEach(([x,y,c])=>{
    ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*x,h*y,w*0.14,h*0.14,3);ctx.fill();
  });
  ctx.fillStyle='#F5F0E8';ctx.beginPath();ctx.ellipse(w*0.3,h*0.47,w*0.06,h*0.03,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#F5F0E8';ctx.beginPath();ctx.ellipse(w*0.65,h*0.47,w*0.06,h*0.03,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#C4B8A5';ctx.beginPath();ctx.ellipse(w*0.5,h*0.43,w*0.04,h*0.06,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.fillRect(w*0.48,h*0.32,w*0.03,h*0.11);
  const pg=ctx.createRadialGradient(w/2,h*0.12,3,w/2,h*0.18,w*0.35);
  pg.addColorStop(0,'rgba(255,220,150,0.35)');pg.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=pg;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#3C2E20';ctx.beginPath();ctx.moveTo(w*0.38,h*0.22);ctx.lineTo(w*0.62,h*0.22);ctx.lineTo(w*0.57,h*0.08);ctx.lineTo(w*0.43,h*0.08);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#7B6858';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(w/2,0);ctx.lineTo(w/2,h*0.08);ctx.stroke();
}

function drawKitchen(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#F0EBE2';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#E0D8CC';ctx.fillRect(0,h*0.75,w,h*0.25);
  ctx.fillStyle='#C8BFB0';ctx.fillRect(0,0,w,h*0.3);
  ctx.strokeStyle='rgba(100,85,65,0.2)';ctx.lineWidth=1;
  [0.25,0.5,0.75].forEach(x=>{ctx.beginPath();ctx.moveTo(w*x,0);ctx.lineTo(w*x,h*0.3);ctx.stroke();});
  ctx.beginPath();ctx.moveTo(0,h*0.3);ctx.lineTo(w,h*0.3);ctx.stroke();
  [0.12,0.37,0.62,0.87].forEach(x=>{
    ctx.fillStyle='#8B7858';ctx.beginPath();ctx.roundRect(w*x-0.015*w,h*0.16,w*0.03,h*0.025,10);ctx.fill();
  });
  ctx.fillStyle='#8B8070';ctx.fillRect(0,h*0.55,w,h*0.08);
  ctx.fillStyle='#A09888';ctx.beginPath();ctx.roundRect(w*0.55,h*0.57,w*0.3,h*0.04,2);ctx.fill();
  ctx.strokeStyle='#7B7060';ctx.lineWidth=1;ctx.strokeRect(w*0.55,h*0.57,w*0.3,h*0.04);
  ctx.strokeStyle='#8B8880';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(w*0.7,h*0.57);ctx.lineTo(w*0.7,h*0.48);ctx.bezierCurveTo(w*0.7,h*0.44,w*0.76,h*0.44,w*0.76,h*0.48);ctx.stroke();
  ctx.fillStyle='#D8CFBF';ctx.fillRect(0,h*0.63,w,h*0.12);
  ctx.strokeStyle='rgba(100,85,65,0.2)';ctx.lineWidth=1;
  [0.33,0.66].forEach(x=>{ctx.beginPath();ctx.moveTo(w*x,h*0.63);ctx.lineTo(w*x,h*0.75);ctx.stroke();});
  ['#6B8B5A','#7B9B6A','#5B7B4A'].forEach((c,i)=>{
    ctx.fillStyle='#8B7858';ctx.beginPath();ctx.roundRect(w*(0.08+i*0.1),h*0.5,w*0.06,h*0.06,2);ctx.fill();
    ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(w*(0.11+i*0.1),h*0.46,w*0.03,h*0.05,(i-1)*0.3,0,Math.PI*2);ctx.fill();
  });
}

function drawOffice(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#E8E0D5';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#D0C8BC';ctx.fillRect(0,h*0.72,w,h*0.28);
  ctx.fillStyle='#C0B8A8';ctx.fillRect(w*0.65,0,w*0.35,h*0.72);
  ctx.strokeStyle='rgba(100,85,65,0.15)';ctx.lineWidth=0.5;
  [h*0.2,h*0.4,h*0.58].forEach(y=>{ctx.beginPath();ctx.moveTo(w*0.65,y);ctx.lineTo(w,y);ctx.stroke();});
  const bkc=['#8B6F47','#6B8B7A','#A87858','#5B7B8B','#8B7858','#C4915A'];
  let bx=w*0.67;
  for(let i=0;i<6;i++){
    ctx.fillStyle=bkc[i];ctx.fillRect(bx,h*0.04,w*0.04,h*0.15);bx+=w*0.045;
  }
  bx=w*0.67;
  for(let i=0;i<5;i++){ctx.fillStyle=bkc[(i+2)%6];ctx.fillRect(bx,h*0.24,w*0.04,h*0.14);bx+=w*0.05;}
  ctx.fillStyle='#6B5040';ctx.beginPath();ctx.roundRect(w*0.04,h*0.5,w*0.58,h*0.06,2);ctx.fill();
  ctx.fillStyle='#5C4030';ctx.fillRect(w*0.06,h*0.56,w*0.03,h*0.18);ctx.fillRect(w*0.57,h*0.56,w*0.03,h*0.18);
  ctx.fillStyle='#2C2420';ctx.beginPath();ctx.roundRect(w*0.15,h*0.28,w*0.28,h*0.22,4);ctx.fill();
  ctx.fillStyle='#3C3020';ctx.beginPath();ctx.roundRect(w*0.16,h*0.29,w*0.26,h*0.19,3);ctx.fill();
  ctx.fillStyle='rgba(200,220,255,0.15)';ctx.fillRect(w*0.16,h*0.29,w*0.26,h*0.19);
  ctx.fillStyle='#4C3C30';ctx.fillRect(w*0.27,h*0.5,w*0.04,h*0.04);
  ctx.fillStyle='#8B7860';ctx.beginPath();ctx.roundRect(w*0.2,h*0.58,w*0.22,h*0.16,4);ctx.fill();
  ctx.fillStyle='#9B8870';ctx.beginPath();ctx.roundRect(w*0.2,h*0.46,w*0.04,h*0.2,3);ctx.fill();
  ctx.fillStyle='#9B8870';ctx.beginPath();ctx.roundRect(w*0.38,h*0.46,w*0.04,h*0.2,3);ctx.fill();
  ctx.fillStyle='#8B7060';ctx.beginPath();ctx.roundRect(w*0.54,h*0.44,w*0.08,h*0.08,2);ctx.fill();
  for(let i=0;i<4;i++){ctx.fillStyle='#6B8B5A';ctx.beginPath();ctx.ellipse(w*(0.52+i*0.03),h*(0.4-i*0.03),w*0.03,h*0.05,(i-2)*0.4,0,Math.PI*2);ctx.fill();}
}

function drawBathroom(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#E8E4E0';ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='rgba(200,195,190,0.6)';ctx.lineWidth=0.5;
  for(let x=0;x<w;x+=25){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=0;y<h;y+=25){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  ctx.fillStyle='#D5D0C8';ctx.fillRect(0,h*0.78,w,h*0.22);
  ctx.strokeStyle='rgba(180,175,168,0.8)';ctx.lineWidth=0.5;
  for(let x=0;x<w;x+=30){ctx.beginPath();ctx.moveTo(x,h*0.78);ctx.lineTo(x,h);ctx.stroke();}
  ctx.fillStyle='#F5F2EE';ctx.beginPath();ctx.roundRect(w*0.06,h*0.45,w*0.58,h*0.3,12);ctx.fill();
  ctx.strokeStyle='rgba(150,140,130,0.3)';ctx.lineWidth=1;ctx.stroke();
  ctx.fillStyle='rgba(200,220,230,0.4)';ctx.beginPath();ctx.roundRect(w*0.08,h*0.5,w*0.54,h*0.22,10);ctx.fill();
  ctx.strokeStyle='#B0A898';ctx.lineWidth=3;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(w*0.35,h*0.45);ctx.lineTo(w*0.35,h*0.35);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.28,h*0.35);ctx.lineTo(w*0.42,h*0.35);ctx.stroke();
  ctx.fillStyle='#A89070';ctx.beginPath();ctx.ellipse(w*0.78,h*0.52,w*0.08,h*0.05,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#8B7858';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(w*0.73,h*0.57);ctx.lineTo(w*0.72,h*0.72);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.83,h*0.57);ctx.lineTo(w*0.84,h*0.72);ctx.stroke();
  ctx.fillStyle='#E8DDD0';ctx.beginPath();ctx.roundRect(w*0.76,h*0.25,w*0.16,h*0.06,2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.beginPath();ctx.ellipse(w*0.84,h*0.18,w*0.05,h*0.08,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#7B8C6A';ctx.beginPath();ctx.ellipse(w*0.84,h*0.14,w*0.03,h*0.05,-0.3,0,Math.PI*2);ctx.fill();
}

function drawEntryway(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#E5DDD2';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#CEC8BC';ctx.fillRect(0,h*0.75,w,h*0.25);
  ctx.fillStyle='#4A3828';ctx.fillRect(w*0.32,h*0.08,w*0.36,h*0.67);
  ctx.fillStyle='#5A4838';ctx.fillRect(w*0.33,h*0.09,w*0.16,h*0.3);
  ctx.fillStyle='#5A4838';ctx.fillRect(w*0.51,h*0.09,w*0.16,h*0.3);
  ctx.fillStyle='#5A4838';ctx.fillRect(w*0.33,h*0.41,w*0.16,h*0.3);
  ctx.fillStyle='#C8B890';ctx.beginPath();ctx.arc(w*0.63,h*0.42,w*0.018,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#8B7858';ctx.lineWidth=3;
  ctx.beginPath();ctx.moveTo(w*0.08,h*0.3);ctx.lineTo(w*0.08,h*0.42);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.16,h*0.3);ctx.lineTo(w*0.16,h*0.44);ctx.stroke();
  ctx.fillStyle='#A89080';ctx.beginPath();ctx.ellipse(w*0.08,h*0.5,w*0.05,h*0.12,0.2,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#6B5848';ctx.beginPath();ctx.ellipse(w*0.16,h*0.54,w*0.05,h*0.12,-0.2,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#8B7058';ctx.beginPath();ctx.roundRect(w*0.72,h*0.6,w*0.22,h*0.08,3);ctx.fill();
  ctx.strokeStyle='#6B5040';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(w*0.75,h*0.68);ctx.lineTo(w*0.75,h*0.78);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.9,h*0.68);ctx.lineTo(w*0.9,h*0.78);ctx.stroke();
  ctx.fillStyle='#6B5040';ctx.beginPath();ctx.ellipse(w*0.76,h*0.8,w*0.04,h*0.02,0.3,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#C4A882';ctx.beginPath();ctx.ellipse(w*0.84,h*0.8,w*0.04,h*0.02,-0.3,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#7B6858';ctx.beginPath();ctx.roundRect(w*0.06,h*0.72,w*0.08,h*0.1,2);ctx.fill();
  for(let i=0;i<5;i++){ctx.fillStyle='#6B8B5A';ctx.beginPath();ctx.ellipse(w*(0.06+i*0.025),h*(0.68-i*0.03),w*0.025,h*0.04,(i-2)*0.5,0,Math.PI*2);ctx.fill();}
}

function drawOutdoor(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  const sky=ctx.createLinearGradient(0,0,0,h*0.5);
  sky.addColorStop(0,'#C8D8E8');sky.addColorStop(1,'#E8EEF5');
  ctx.fillStyle=sky;ctx.fillRect(0,0,w,h*0.5);
  ctx.fillStyle='#8B9B70';ctx.fillRect(0,h*0.5,w,h*0.5);
  ctx.fillStyle='#7B8B60';ctx.fillRect(0,h*0.5,w,h*0.05);
  ctx.fillStyle='#A89070';ctx.fillRect(0,h*0.55,w,h*0.45);
  for(let i=0;i<8;i++){ctx.strokeStyle='rgba(140,110,70,0.3)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(w*i/7,h*0.55);ctx.lineTo(w*i/7,h);ctx.stroke();}
  ctx.fillStyle='#E8E0D0';ctx.beginPath();ctx.roundRect(w*0.08,h*0.55,w*0.5,h*0.2,6);ctx.fill();
  ctx.fillStyle='#F5F0E8';ctx.beginPath();ctx.roundRect(w*0.12,h*0.58,w*0.18,h*0.12,5);ctx.fill();
  ctx.fillStyle='#DDD5C0';ctx.beginPath();ctx.roundRect(w*0.34,h*0.59,w*0.18,h*0.12,5);ctx.fill();
  ctx.fillStyle='#C8C0B0';ctx.beginPath();ctx.roundRect(w*0.08,h*0.55,w*0.08,h*0.2,4);ctx.fill();
  ctx.fillStyle='#C8C0B0';ctx.beginPath();ctx.roundRect(w*0.5,h*0.55,w*0.08,h*0.2,4);ctx.fill();
  ctx.fillStyle='#6B5040';ctx.beginPath();ctx.ellipse(w*0.7,h*0.64,w*0.08,h*0.04,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#5C4030';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(w*0.7,h*0.68);ctx.lineTo(w*0.7,h*0.78);ctx.stroke();
  ctx.fillStyle='rgba(200,230,240,0.7)';ctx.beginPath();ctx.ellipse(w*0.67,h*0.6,w*0.025,h*0.045,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(200,230,240,0.7)';ctx.beginPath();ctx.ellipse(w*0.73,h*0.61,w*0.02,h*0.035,0,0,Math.PI*2);ctx.fill();
  for(let i=0;i<8;i++){ctx.fillStyle=['#5B8B4A','#4A7A3A','#6B9B5A','#3A6A2A'][i%4];ctx.beginPath();ctx.ellipse(w*(0.82+i*0.02),h*(0.45-i*0.04),w*0.04,h*0.08,(i-4)*0.35,0,Math.PI*2);ctx.fill();}
  const sun=ctx.createRadialGradient(w*0.75,h*0.1,5,w*0.75,h*0.1,w*0.4);
  sun.addColorStop(0,'rgba(255,230,180,0.4)');sun.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=sun;ctx.fillRect(0,0,w,h*0.5);
}

function drawHeroRoom(el){
  const w=el.offsetWidth||800,h=el.offsetHeight||320;
  el.width=w;el.height=h;
  const ctx=el.getContext('2d');
  ctx.fillStyle='#2A2520';ctx.fillRect(0,0,w,h);
  const al=ctx.createRadialGradient(w*0.35,h*0.3,10,w*0.35,h*0.3,w*0.5);
  al.addColorStop(0,'rgba(200,170,110,0.25)');al.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=al;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#1E1A16';ctx.fillRect(0,h*0.72,w,h*0.28);
  ctx.fillStyle='rgba(150,180,210,0.15)';ctx.fillRect(w*0.55,0,w*0.45,h*0.72);
  ctx.strokeStyle='rgba(200,180,140,0.2)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(w*0.77,0);ctx.lineTo(w*0.77,h*0.72);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w*0.55,h*0.36);ctx.lineTo(w,h*0.36);ctx.stroke();
  const wg=ctx.createLinearGradient(w*0.55,0,w*0.2,h);
  wg.addColorStop(0,'rgba(180,200,220,0.08)');wg.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=wg;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#5C4E3A';ctx.beginPath();ctx.roundRect(w*0.04,h*0.52,w*0.42,h*0.22,8);ctx.fill();
  ctx.fillStyle='#6C5E4A';ctx.beginPath();ctx.roundRect(w*0.04,h*0.42,w*0.12,h*0.22,5);ctx.fill();
  ctx.fillStyle='#6C5E4A';ctx.beginPath();ctx.roundRect(w*0.34,h*0.42,w*0.12,h*0.22,5);ctx.fill();
  ctx.fillStyle='#E8D8C0';ctx.beginPath();ctx.roundRect(w*0.13,h*0.47,w*0.1,h*0.13,6);ctx.fill();
  ctx.fillStyle='#B8A888';ctx.beginPath();ctx.roundRect(w*0.27,h*0.49,w*0.09,h*0.12,6);ctx.fill();
  ctx.fillStyle='#3C2E20';ctx.beginPath();ctx.roundRect(w*0.13,h*0.74,w*0.22,h*0.1,3);ctx.fill();
  ctx.fillStyle='#2C2018';ctx.fillRect(w*0.15,h*0.84,w*0.03,h*0.08);ctx.fillRect(w*0.3,h*0.84,w*0.03,h*0.08);
  ctx.strokeStyle='#8B7858';ctx.lineWidth=3;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(w*0.5,h*0.3);ctx.bezierCurveTo(w*0.54,h*0.55,w*0.47,h*0.65,w*0.5,h*0.82);ctx.stroke();
  ctx.fillStyle='#E8D5B0';ctx.beginPath();ctx.moveTo(w*0.4,h*0.3);ctx.lineTo(w*0.6,h*0.3);ctx.lineTo(w*0.55,h*0.14);ctx.lineTo(w*0.45,h*0.14);ctx.closePath();ctx.fill();
  const lg2=ctx.createRadialGradient(w*0.5,h*0.22,3,w*0.5,h*0.22,w*0.35);
  lg2.addColorStop(0,'rgba(255,210,120,0.3)');lg2.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=lg2;ctx.fillRect(0,0,w,h);
  for(let i=0;i<7;i++){ctx.fillStyle=['#4B7B3A','#5B8B4A','#3B6B2A'][i%3];ctx.beginPath();ctx.ellipse(w*(0.87+i*0.015),h*(0.6-i*0.05),w*0.03,h*0.08,(i-3)*0.35,0,Math.PI*2);ctx.fill();}
  ctx.fillStyle='#3C2E20';ctx.beginPath();ctx.roundRect(w*0.84,h*0.72,w*0.07,h*0.12,2);ctx.fill();
}

function drawStyleJapandi(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#E8E0D5';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#D8CFBF';ctx.fillRect(0,h*0.72,w,h*0.28);
  ctx.fillStyle='#6B5040';ctx.fillRect(w*0.1,h*0.48,w*0.8,h*0.06);
  ctx.fillStyle='#8B7058';ctx.fillRect(w*0.15,h*0.54,w*0.03,h*0.2);ctx.fillRect(w*0.82,h*0.54,w*0.03,h*0.2);
  ctx.fillStyle='#D4C8B0';ctx.beginPath();ctx.ellipse(w*0.5,h*0.42,w*0.06,h*0.1,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.fillRect(w*0.48,h*0.28,w*0.04,h*0.14);
  ctx.fillStyle='#F5F0E8';ctx.beginPath();ctx.roundRect(w*0.28,h*0.38,w*0.16,w*0.16,100);ctx.fill();
}

function drawStyleWabi(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#DDD5C5';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#CBC3B3';ctx.fillRect(0,h*0.7,w,h*0.3);
  ctx.strokeStyle='rgba(140,120,90,0.2)';ctx.lineWidth=0.5;
  for(let i=0;i<h;i+=18){ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(w,i);ctx.stroke();}
  ctx.fillStyle='#A89070';ctx.beginPath();ctx.roundRect(w*0.15,h*0.5,w*0.7,h*0.25,6);ctx.fill();
  ctx.fillStyle='#B8A080';ctx.beginPath();ctx.roundRect(w*0.15,h*0.38,w*0.12,h*0.22,4);ctx.fill();
  ctx.fillStyle='#B8A080';ctx.beginPath();ctx.roundRect(w*0.73,h*0.38,w*0.12,h*0.22,4);ctx.fill();
  ['#C4B8A5','#8B7058','#D4915A'].forEach((c,i)=>{
    ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(w*(0.28+i*0.2),h*0.42,w*0.05,h*0.08,0,0,Math.PI*2);ctx.fill();
  });
}

function drawStyleBoho(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#C8B898';ctx.fillRect(0,0,w,h);
  const pat=ctx.createLinearGradient(0,0,w,h);
  pat.addColorStop(0,'rgba(180,140,80,0.3)');pat.addColorStop(1,'rgba(120,80,40,0.2)');
  ctx.fillStyle=pat;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#8B6040';ctx.beginPath();ctx.roundRect(w*0.1,h*0.55,w*0.8,h*0.2,6);ctx.fill();
  ['#D4A870','#E8C890','#B88860','#C8A880'].forEach((c,i)=>{
    ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*(0.14+i*0.19),h*0.42,w*0.16,h*0.2,30);ctx.fill();
  });
  ctx.fillStyle='#6B8B5A';for(let i=0;i<6;i++){ctx.beginPath();ctx.ellipse(w*(0.78+i*0.02),h*(0.48-i*0.05),w*0.03,h*0.06,(i-3)*0.4,0,Math.PI*2);ctx.fill();}
  ctx.strokeStyle='rgba(180,150,100,0.5)';ctx.lineWidth=1.5;
  for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(w*(0.05+i*0.03),h*0.05);ctx.lineTo(w*(0.04+i*0.03),h*0.28);ctx.stroke();}
}

function drawStyleMinimal(el){
  const ctx=initCanvas(el),w=el.width,h=el.height;
  ctx.fillStyle='#F2EEE8';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#E2DED8';ctx.fillRect(0,h*0.78,w,h*0.22);
  ctx.fillStyle='#3C3028';ctx.fillRect(w*0.38,h*0.55,w*0.24,h*0.05);
  ctx.fillStyle='#5C4838';ctx.fillRect(w*0.42,h*0.6,w*0.02,h*0.2);ctx.fillRect(w*0.56,h*0.6,w*0.02,h*0.2);
  ctx.fillStyle='#E8E4DE';ctx.beginPath();ctx.ellipse(w*0.5,h*0.48,w*0.04,h*0.08,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(100,85,65,0.3)';ctx.lineWidth=1;ctx.stroke();
  ctx.fillStyle='rgba(100,90,80,0.08)';ctx.fillRect(w*0.18,h*0.12,w*0.22,h*0.55);
  ctx.strokeStyle='rgba(100,85,65,0.2)';ctx.lineWidth=0.5;ctx.strokeRect(w*0.18,h*0.12,w*0.22,h*0.55);
}

function setStyle(el){
  document.querySelectorAll('.style-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

window.addEventListener('load',()=>{
  drawHeroRoom(document.getElementById('heroC'));
  const rooms=[
    {id:'r1',fn:drawLiving},{id:'r2',fn:drawBedroom},{id:'r3',fn:drawDining},
    {id:'r4',fn:drawKitchen},{id:'r5',fn:drawOffice},{id:'r6',fn:drawBathroom},
    {id:'r7',fn:drawEntryway},{id:'r8',fn:drawOutdoor}
  ];
  rooms.forEach(({id,fn})=>fn(document.getElementById(id)));
  drawStyleJapandi(document.getElementById('s1'));
  drawStyleWabi(document.getElementById('s2'));
  drawStyleBoho(document.getElementById('s3'));
  drawStyleMinimal(document.getElementById('s4'));
});