function drawRoom(canvas){
  const w=canvas.width,h=canvas.height,ctx=canvas.getContext('2d');
  ctx.fillStyle='#EDE5D8';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#D4C8B5';ctx.fillRect(0,h*0.65,w,h*0.35);
  ctx.fillStyle='#C4B8A5';ctx.fillRect(0,h*0.63,w,4);
  // wall texture lines
  ctx.strokeStyle='rgba(180,165,145,0.3)';ctx.lineWidth=0.5;
  for(let i=0;i<h;i+=30){ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(w,i);ctx.stroke()}
  // sofa
  ctx.fillStyle='#A89070';ctx.beginPath();ctx.roundRect(w*0.05,h*0.52,w*0.9,h*0.2,6);ctx.fill();
  ctx.fillStyle='#B8A080';ctx.beginPath();ctx.roundRect(w*0.05,h*0.42,w*0.18,h*0.22,4);ctx.fill();
  ctx.fillStyle='#B8A080';ctx.beginPath();ctx.roundRect(w*0.77,h*0.42,w*0.18,h*0.22,4);ctx.fill();
  // cushions
  ctx.fillStyle='#F0E8DC';ctx.beginPath();ctx.roundRect(w*0.25,h*0.46,w*0.2,h*0.14,6);ctx.fill();
  ctx.fillStyle='#C8B898';ctx.beginPath();ctx.roundRect(w*0.52,h*0.46,w*0.2,h*0.14,6);ctx.fill();
  // coffee table
  ctx.fillStyle='#6B5C48';ctx.beginPath();ctx.roundRect(w*0.2,h*0.72,w*0.6,h*0.1,3);ctx.fill();
  ctx.fillStyle='#8B7560';ctx.fillRect(w*0.25,h*0.82,w*0.05,h*0.08);
  ctx.fillRect(w*0.7,h*0.82,w*0.05,h*0.08);
  // vase
  ctx.fillStyle='#D4C4A8';ctx.beginPath();ctx.ellipse(w*0.5,h*0.68,w*0.06,h*0.08,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#8B9B78';ctx.fillRect(w*0.48,h*0.52,w*0.04,h*0.16);
  ctx.fillRect(w*0.49,h*0.48,w*0.02,h*0.05);
  // plant
  ctx.fillStyle='#8B7B68';ctx.beginPath();ctx.roundRect(w*0.78,h*0.55,w*0.1,h*0.15,2);ctx.fill();
  ctx.fillStyle='#6B8B5A';
  for(let i=0;i<5;i++){ctx.beginPath();ctx.ellipse(w*(0.75+i*0.04),h*(0.5-i*0.04),w*0.05,h*0.07,Math.random()*0.8-0.4,0,Math.PI*2);ctx.fill()}
  // lamp
  ctx.fillStyle='#E8D8C0';ctx.beginPath();ctx.moveTo(w*0.08,h*0.3);ctx.lineTo(w*0.16,h*0.3);ctx.lineTo(w*0.14,h*0.5);ctx.lineTo(w*0.1,h*0.5);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#8B7B68';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(w*0.12,h*0.5);ctx.lineTo(w*0.12,h*0.72);ctx.stroke();
  ctx.fillStyle='#6B5C48';ctx.beginPath();ctx.ellipse(w*0.12,h*0.72,w*0.05,h*0.02,0,0,Math.PI*2);ctx.fill();
  // warm light overlay
  const grad=ctx.createRadialGradient(w*0.12,h*0.35,5,w*0.12,h*0.35,w*0.5);
  grad.addColorStop(0,'rgba(255,220,150,0.15)');grad.addColorStop(1,'rgba(255,220,150,0)');
  ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
}

function drawPillows(canvas){
  const w=canvas.width,h=canvas.height,ctx=canvas.getContext('2d');
  ctx.fillStyle='#E8DDD0';ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#D8CEC0';
  for(let i=0;i<h;i+=20){ctx.fillRect(0,i,w,10)}
  // bed
  ctx.fillStyle='#F5F0E8';ctx.fillRect(w*0.05,h*0.4,w*0.9,h*0.5);
  ctx.fillStyle='#EDE5DC';ctx.fillRect(w*0.05,h*0.4,w*0.9,h*0.12);
  // pillows
  const pcolors=['#F7F2EC','#DDD0C0','#C8B8A0','#E8DDD0'];
  pcolors.forEach((c,i)=>{
    ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(w*(0.08+i*0.22),h*0.44,w*0.2,h*0.14,8);ctx.fill();
    ctx.strokeStyle='rgba(150,130,110,0.2)';ctx.lineWidth=0.5;ctx.stroke();
  });
  // throw
  ctx.fillStyle='#B8A888';ctx.beginPath();ctx.roundRect(w*0.1,h*0.6,w*0.5,h*0.22,4);ctx.fill();
  ctx.strokeStyle='rgba(100,85,65,0.15)';ctx.lineWidth=4;
  for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(w*0.1+i*w*0.1,h*0.6);ctx.lineTo(w*0.1+i*w*0.1,h*0.82);ctx.stroke()}
  // side table
  ctx.fillStyle='#8B7058';ctx.fillRect(w*0.72,h*0.6,w*0.22,h*0.3);
  ctx.fillStyle='#A09060';ctx.beginPath();ctx.ellipse(w*0.65,h*0.55,w*0.04,h*0.06,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#D4C8B0';ctx.beginPath();ctx.ellipse(w*0.65,h*0.5,w*0.07,h*0.1,-0.3,0,Math.PI*2);ctx.fill();
  const g2=ctx.createRadialGradient(w*0.5,h*0.2,10,w*0.5,h*0.2,h*0.5);
  g2.addColorStop(0,'rgba(255,240,200,0.2)');g2.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g2;ctx.fillRect(0,0,w,h);
}

function drawLamp(canvas){
  const w=canvas.width,h=canvas.height,ctx=canvas.getContext('2d');
  ctx.fillStyle='#1C1916';ctx.fillRect(0,0,w,h);
  // ceiling
  ctx.fillStyle='#252220';ctx.fillRect(0,0,w,h*0.08);
  // glow
  const g=ctx.createRadialGradient(w/2,h*0.15,5,w/2,h*0.15,w*0.7);
  g.addColorStop(0,'rgba(255,200,100,0.35)');g.addColorStop(0.4,'rgba(255,180,80,0.12)');g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  // cord
  ctx.strokeStyle='#8B7B68';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(w/2,0);ctx.lineTo(w/2,h*0.12);ctx.stroke();
  // shade
  ctx.fillStyle='#E8D5B0';ctx.beginPath();ctx.moveTo(w*0.2,h*0.32);ctx.lineTo(w*0.8,h*0.32);ctx.lineTo(w*0.65,h*0.12);ctx.lineTo(w*0.35,h*0.12);ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(0,0,0,0.15)';ctx.beginPath();ctx.moveTo(w*0.5,h*0.12);ctx.lineTo(w*0.8,h*0.32);ctx.lineTo(w*0.65,h*0.32);ctx.closePath();ctx.fill();
  // bulb
  ctx.fillStyle='#FFF5D0';ctx.beginPath();ctx.ellipse(w/2,h*0.14,w*0.04,h*0.04,0,0,Math.PI*2);ctx.fill();
  // floor
  ctx.fillStyle='#2C2620';ctx.fillRect(0,h*0.9,w,h*0.1);
  // stem + base
  ctx.strokeStyle='#6B5C48';ctx.lineWidth=4;
  ctx.beginPath();ctx.moveTo(w/2,h*0.32);ctx.bezierCurveTo(w*0.55,h*0.55,w*0.45,h*0.7,w*0.5,h*0.9);ctx.stroke();
  ctx.fillStyle='#4A3D30';ctx.beginPath();ctx.ellipse(w/2,h*0.9,w*0.15,h*0.03,0,0,Math.PI*2);ctx.fill();
  // warm floor glow
  const fg=ctx.createRadialGradient(w/2,h*0.9,5,w/2,h*0.9,w*0.4);
  fg.addColorStop(0,'rgba(255,180,80,0.2)');fg.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=fg;ctx.fillRect(0,h*0.7,w,h*0.3);
}

window.addEventListener('load',()=>{
  const hero=document.getElementById('heroCanvas');
  hero.width=hero.offsetWidth||600;hero.height=hero.offsetHeight||520;
  drawRoom(hero);
  drawPillows(document.getElementById('c1'));
  drawPillows(document.getElementById('c2'));
  drawLamp(document.getElementById('c3'));
});