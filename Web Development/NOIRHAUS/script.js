// CURSOR — hide on touch devices
const isTouchDevice = window.matchMedia('(hover: none)').matches;
if (isTouchDevice) {
  document.getElementById('cursor').style.display = 'none';
  document.getElementById('cursorRing').style.display = 'none';
}

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
function animRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animRing); }
animRing();

// CANVAS HELPERS
function hex2rgb(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return [r,g,b];
}
function lighten(hex, t) {
  const [r,g,b] = hex2rgb(hex);
  return `rgb(${Math.round(r+(255-r)*t)},${Math.round(g+(255-g)*t)},${Math.round(b+(255-b)*t)})`;
}

// HERO CANVAS — dramatic city-view room
function drawHero(canvas) {
  const w = canvas.width = canvas.offsetWidth;
  const h = canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext('2d');

  // deep dark background
  ctx.fillStyle = '#0A0908';
  ctx.fillRect(0, 0, w, h);

  // city lights through window
  const winX = w * 0.15, winY = h * 0.1, winW = w * 0.7, winH = h * 0.6;

  // night sky gradient
  const skyGrad = ctx.createLinearGradient(winX, winY, winX, winY + winH);
  skyGrad.addColorStop(0, '#0D0F1A');
  skyGrad.addColorStop(0.6, '#1A1510');
  skyGrad.addColorStop(1, '#2A1F0A');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(winX, winY, winW, winH);

  // city building silhouettes
  ctx.fillStyle = '#080808';
  const buildings = [
    [0.15,0.5,0.08,0.5],[0.22,0.4,0.06,0.6],[0.27,0.55,0.05,0.45],
    [0.32,0.35,0.09,0.65],[0.4,0.45,0.07,0.55],[0.46,0.3,0.06,0.7],
    [0.51,0.5,0.08,0.5],[0.58,0.38,0.07,0.62],[0.64,0.52,0.05,0.48],
    [0.68,0.42,0.09,0.58],[0.76,0.36,0.06,0.64],[0.82,0.48,0.03,0.52],
  ];
  buildings.forEach(([bx,by,bw,bh])=>{
    const x = winX + winW * (bx - 0.15) / 0.7;
    ctx.fillRect(x, winY + winH * by, winW * bw, winH * bh);
  });

  // city lights (dots)
  for(let i = 0; i < 200; i++) {
    const x = winX + Math.random() * winW;
    const y = winY + winH * 0.3 + Math.random() * winH * 0.65;
    const brightness = Math.random();
    const colors = ['rgba(255,220,120,', 'rgba(200,220,255,', 'rgba(255,180,80,'];
    ctx.fillStyle = colors[Math.floor(Math.random()*3)] + (brightness * 0.8 + 0.1) + ')';
    ctx.fillRect(x, y, 1.5, 1.5);
  }

  // window frame
  ctx.strokeStyle = '#2A2520';
  ctx.lineWidth = 20;
  ctx.strokeRect(winX, winY, winW, winH);
  // window cross
  ctx.lineWidth = 8;
  ctx.strokeStyle = '#1E1A16';
  ctx.beginPath(); ctx.moveTo(winX + winW/2, winY); ctx.lineTo(winX + winW/2, winY + winH); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(winX, winY + winH/2); ctx.lineTo(winX + winW, winY + winH/2); ctx.stroke();

  // warm ambient glow from window
  const glow = ctx.createRadialGradient(w*0.5, h*0.4, 10, w*0.5, h*0.4, w*0.5);
  glow.addColorStop(0, 'rgba(180,150,80,0.05)');
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0,0,w,h);

  // floor reflection
  const floorGrad = ctx.createLinearGradient(0, h*0.72, 0, h);
  floorGrad.addColorStop(0, '#1A1510');
  floorGrad.addColorStop(1, '#0A0908');
  ctx.fillStyle = floorGrad;
  ctx.fillRect(0, h*0.72, w, h*0.28);

  // floor glow reflection
  const flGlow = ctx.createRadialGradient(w*0.5, h*0.75, 5, w*0.5, h*0.75, w*0.4);
  flGlow.addColorStop(0, 'rgba(184,150,90,0.08)');
  flGlow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = flGlow;
  ctx.fillRect(0, h*0.7, w, h*0.3);

  // minimal furniture silhouettes
  // bed
  ctx.fillStyle = '#1C1714';
  ctx.beginPath(); ctx.roundRect(w*0.2, h*0.58, w*0.6, h*0.16, 4); ctx.fill();
  ctx.fillStyle = '#221E1A';
  ctx.beginPath(); ctx.roundRect(w*0.24, h*0.55, w*0.52, h*0.06, 3); ctx.fill();
  // pillows
  ctx.fillStyle = '#E8E2D9';
  ctx.globalAlpha = 0.15;
  ctx.beginPath(); ctx.roundRect(w*0.28, h*0.56, w*0.14, h*0.04, 3); ctx.fill();
  ctx.beginPath(); ctx.roundRect(w*0.46, h*0.56, w*0.14, h*0.04, 3); ctx.fill();
  ctx.globalAlpha = 1;

  // side lamp glow
  const lampGlow = ctx.createRadialGradient(w*0.15, h*0.52, 2, w*0.15, h*0.52, w*0.15);
  lampGlow.addColorStop(0, 'rgba(255,180,60,0.3)');
  lampGlow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = lampGlow;
  ctx.fillRect(0, h*0.35, w*0.35, h*0.4);

  // vignette
  const vig = ctx.createRadialGradient(w*0.5, h*0.5, h*0.2, w*0.5, h*0.5, h*0.8);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.7)');
  ctx.fillStyle = vig;
  ctx.fillRect(0,0,w,h);
}

// ROOM CANVASES
function drawRoom(canvas, type) {
  const w = canvas.width = canvas.offsetWidth || 600;
  const h = canvas.height = canvas.offsetHeight || 400;
  const ctx = canvas.getContext('2d');

  const palettes = {
    penthouse: { bg: '#0D0B09', mid: '#1A1512', acc: '#B8965A' },
    deluxe:    { bg: '#0E0C0A', mid: '#181412', acc: '#8B6B3A' },
    standard:  { bg: '#0F0D0B', mid: '#1C1916', acc: '#7A5E35' },
    black:     { bg: '#080608', mid: '#120F0D', acc: '#C8A060' },
  };
  const p = palettes[type] || palettes.deluxe;

  // bg
  const bg = ctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0, p.bg);
  bg.addColorStop(1, p.mid);
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,w,h);

  // window
  const wx = w*0.1, wy = h*0.05, ww = w*0.8, wh = h*0.55;
  ctx.fillStyle = '#0D0F1A';
  ctx.fillRect(wx, wy, ww, wh);

  // city lights
  for(let i = 0; i < 120; i++) {
    const x = wx + Math.random() * ww;
    const y = wy + Math.random() * wh * 0.9;
    ctx.fillStyle = `rgba(${200+Math.random()*55},${160+Math.random()*80},${80+Math.random()*60},${0.3+Math.random()*0.6})`;
    ctx.fillRect(x, y, 1, 1);
  }

  // window frame
  ctx.strokeStyle = '#1E1A14';
  ctx.lineWidth = 12;
  ctx.strokeRect(wx, wy, ww, wh);

  // floor
  const fl = ctx.createLinearGradient(0, h*0.6, 0, h);
  fl.addColorStop(0, p.mid);
  fl.addColorStop(1, p.bg);
  ctx.fillStyle = fl;
  ctx.fillRect(0, h*0.6, w, h*0.4);

  // bed/chair silhouette
  ctx.fillStyle = '#1A1512';
  if(type === 'penthouse' || type === 'black') {
    ctx.beginPath(); ctx.roundRect(w*0.15, h*0.65, w*0.7, h*0.22, 3); ctx.fill();
    ctx.fillStyle = '#222018';
    ctx.beginPath(); ctx.roundRect(w*0.18, h*0.62, w*0.64, h*0.07, 2); ctx.fill();
  } else {
    ctx.beginPath(); ctx.roundRect(w*0.2, h*0.66, w*0.6, h*0.2, 3); ctx.fill();
  }

  // accent glow
  const ag = ctx.createRadialGradient(w*0.5, h*0.4, 5, w*0.5, h*0.4, w*0.5);
  ag.addColorStop(0, `rgba(${hex2rgb(p.acc).join(',')},0.06)`);
  ag.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = ag;
  ctx.fillRect(0,0,w,h);

  // vignette
  const vig = ctx.createRadialGradient(w/2, h/2, h*0.1, w/2, h/2, h*0.7);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.65)');
  ctx.fillStyle = vig;
  ctx.fillRect(0,0,w,h);
}

// GALLERY CANVASES
function drawGallery(canvas, scene) {
  const w = canvas.width = canvas.offsetWidth || 200;
  const h = canvas.height = canvas.offsetHeight || 220;
  const ctx = canvas.getContext('2d');

  const scenes = [
    () => { // bar
      ctx.fillStyle = '#0A0806'; ctx.fillRect(0,0,w,h);
      for(let i=0;i<80;i++){ctx.fillStyle=`rgba(255,${160+Math.random()*60},${40+Math.random()*40},${0.2+Math.random()*0.5})`;ctx.fillRect(Math.random()*w,Math.random()*h,1,1);}
      ctx.fillStyle='#1A1208';ctx.fillRect(0,h*0.65,w,h*0.35);
      const g=ctx.createLinearGradient(0,h*0.3,0,h*0.65);g.addColorStop(0,'rgba(180,140,60,0.1)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
    },
    () => { // pool
      ctx.fillStyle='#060A0E';ctx.fillRect(0,0,w,h);
      const pg=ctx.createLinearGradient(0,h*0.3,0,h);pg.addColorStop(0,'#0A1520');pg.addColorStop(1,'#050810');ctx.fillStyle=pg;ctx.fillRect(0,h*0.3,w,h*0.7);
      ctx.fillStyle='rgba(40,100,180,0.15)';ctx.fillRect(0,h*0.35,w,h*0.6);
      for(let i=0;i<5;i++){const wg=ctx.createLinearGradient(0,h*(0.4+i*0.04),0,h*(0.44+i*0.04));wg.addColorStop(0,'rgba(80,160,220,0.08)');wg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=wg;ctx.fillRect(0,h*(0.4+i*0.04),w,h*0.04);}
    },
    () => { // lobby
      const lg=ctx.createLinearGradient(0,0,0,h);lg.addColorStop(0,'#0E0B08');lg.addColorStop(1,'#1A1410');ctx.fillStyle=lg;ctx.fillRect(0,0,w,h);
      ctx.fillStyle='#141008';ctx.fillRect(0,h*0.7,w,h*0.3);
      const cg=ctx.createRadialGradient(w/2,h*0.2,5,w/2,h*0.2,w*0.4);cg.addColorStop(0,'rgba(220,180,80,0.25)');cg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=cg;ctx.fillRect(0,0,w,h);
      ctx.fillStyle='rgba(180,150,70,0.6)';ctx.beginPath();ctx.ellipse(w/2,h*0.2,4,4,0,0,Math.PI*2);ctx.fill();
    },
    () => { // dining
      ctx.fillStyle='#080806';ctx.fillRect(0,0,w,h);
      ctx.fillStyle='#121008';ctx.fillRect(0,h*0.6,w,h*0.4);
      for(let i=0;i<3;i++){const dg=ctx.createRadialGradient(w*(0.25+i*0.25),h*0.3,2,w*(0.25+i*0.25),h*0.3,w*0.15);dg.addColorStop(0,'rgba(255,200,80,0.3)');dg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=dg;ctx.fillRect(0,0,w,h);}
      ctx.strokeStyle='rgba(180,150,70,0.2)';ctx.lineWidth=1;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(w*(0.25+i*0.25),0);ctx.lineTo(w*(0.25+i*0.25),h*0.3);ctx.stroke();}
    },
    () => { // spa
      const sg=ctx.createLinearGradient(0,0,0,h);sg.addColorStop(0,'#080C0E');sg.addColorStop(1,'#0A0E10');ctx.fillStyle=sg;ctx.fillRect(0,0,w,h);
      const sg2=ctx.createRadialGradient(w*0.3,h*0.4,5,w*0.3,h*0.4,w*0.5);sg2.addColorStop(0,'rgba(80,120,100,0.15)');sg2.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=sg2;ctx.fillRect(0,0,w,h);
      ctx.fillStyle='#0E1210';ctx.fillRect(0,h*0.65,w,h*0.35);
    }
  ];
  scenes[scene]?.();
  // vignette on all
  const v=ctx.createRadialGradient(w/2,h/2,h*0.05,w/2,h/2,h*0.7);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,0.6)');ctx.fillStyle=v;ctx.fillRect(0,0,w,h);
}

// INIT ALL
window.addEventListener('load', () => {
  // Rooms
  const roomTypes = ['penthouse','deluxe','standard','black'];
  roomTypes.forEach((t, i) => {
    const c = document.getElementById('roomCanvas'+i);
    if(c) { c.width = c.offsetWidth || 600; c.height = c.offsetHeight || 400; drawRoom(c, t); }
  });

  // Gallery
  for(let i=0;i<5;i++) {
    const g = document.getElementById('gal'+i);
    if(g) drawGallery(g, i);
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-header, .room-card').forEach(el => observer.observe(el));
});

// Resize room canvases on window resize
window.addEventListener('resize', () => {
  const roomTypes = ['penthouse','deluxe','standard','black'];
  roomTypes.forEach((t, i) => {
    const c = document.getElementById('roomCanvas'+i);
    if(c) drawRoom(c, t);
  });
});