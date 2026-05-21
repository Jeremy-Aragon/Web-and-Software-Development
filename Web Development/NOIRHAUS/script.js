// ─── PAGE LOADER ───────────────────────────────────────────────────────────
const loader = document.getElementById('pageLoader');
const loaderFill = document.getElementById('loaderFill');

let loadProgress = 0;
const loadInterval = setInterval(() => {
  loadProgress += Math.random() * 18;
  if (loadProgress >= 100) {
    loadProgress = 100;
    clearInterval(loadInterval);
    setTimeout(() => loader.classList.add('done'), 300);
  }
  loaderFill.style.width = loadProgress + '%';
}, 60);

// ─── DEVICE DETECTION ─────────────────────────────────────────────────────
const isTouchDevice = window.matchMedia('(hover: none)').matches;
if (isTouchDevice) {
  document.getElementById('cursor').style.display = 'none';
  document.getElementById('cursorRing').style.display = 'none';
}

// ─── CUSTOM CURSOR ─────────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

if (!isTouchDevice) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  const expandTargets = 'a, button, .room-card, .dining-card, .exp-card, .gallery-cell, .test-d-item, .exp-item';
  document.querySelectorAll(expandTargets).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
  });

  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();
}

// ─── NAV SCROLL BEHAVIOUR ──────────────────────────────────────────────────
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// ─── HAMBURGER MENU ────────────────────────────────────────────────────────
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

// ─── SCROLL TO BOOKING ─────────────────────────────────────────────────────
function scrollToBooking() {
  const bar = document.getElementById('bookingBar');
  if (bar) bar.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── SCROLL REVEAL ─────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-on-scroll').forEach((el, i) => {
  // Stagger siblings in the same parent
  const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal-on-scroll'));
  const idx = siblings.indexOf(el);
  el.style.transitionDelay = (idx * 0.12) + 's';
  revealObserver.observe(el);
});

// ─── BOOKING DATE PICKER ───────────────────────────────────────────────────
const checkIn = document.getElementById('checkIn');
const checkOut = document.getElementById('checkOut');

if (checkIn && checkOut) {
  function formatDate(d) {
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, ' / ');
  }

  let pickerOpen = null;
  let selectedIn = null;
  let selectedOut = null;

  function createDatePicker(anchor, onSelect, minDate) {
    // Remove existing
    const existing = document.getElementById('datePicker');
    if (existing) { existing.remove(); pickerOpen = null; return; }

    const today = minDate || new Date();
    today.setHours(0,0,0,0);
    let viewYear = today.getFullYear();
    let viewMonth = today.getMonth();

    const picker = document.createElement('div');
    picker.id = 'datePicker';
    picker.style.cssText = `
      position: absolute;
      background: #161412;
      border: 1px solid rgba(184,150,90,0.18);
      z-index: 1000;
      width: 280px;
      padding: 1.2rem;
      font-family: 'DM Sans', sans-serif;
    `;

    function renderMonth() {
      const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const firstDay = new Date(viewYear, viewMonth, 1).getDay();
      const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

      picker.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
          <button id="prevMonth" style="background:none;border:1px solid rgba(255,255,255,0.06);color:#9E9892;width:28px;height:28px;cursor:pointer;font-size:0.7rem;">‹</button>
          <span style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#E8E2D9;">${monthNames[viewMonth]} ${viewYear}</span>
          <button id="nextMonth" style="background:none;border:1px solid rgba(255,255,255,0.06);color:#9E9892;width:28px;height:28px;cursor:pointer;font-size:0.7rem;">›</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:0.4rem;">
          ${['S','M','T','W','T','F','S'].map(d=>`<div style="text-align:center;font-size:0.58rem;color:#6E6560;padding:0.2rem;">${d}</div>`).join('')}
        </div>
        <div id="calGrid" style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;"></div>
      `;

      const grid = picker.querySelector('#calGrid');
      for (let i = 0; i < firstDay; i++) {
        grid.appendChild(Object.assign(document.createElement('div'), { style: '' }));
      }
      for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(viewYear, viewMonth, d);
        const btn = document.createElement('button');
        const isPast = date < today;
        btn.textContent = d;
        btn.style.cssText = `
          background: none;
          border: none;
          color: ${isPast ? '#3A3530' : '#9E9892'};
          font-size: 0.72rem;
          padding: 0.4rem;
          cursor: ${isPast ? 'default' : 'pointer'};
          text-align: center;
          transition: background 0.2s, color 0.2s;
          font-family: 'DM Sans', sans-serif;
        `;
        if (!isPast) {
          btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(184,150,90,0.15)'; btn.style.color = '#B8965A'; });
          btn.addEventListener('mouseleave', () => { btn.style.background = 'none'; btn.style.color = '#9E9892'; });
          btn.addEventListener('click', () => {
            onSelect(date);
            picker.remove();
            pickerOpen = null;
          });
        }
        grid.appendChild(btn);
      }

      picker.querySelector('#prevMonth').addEventListener('click', () => {
        viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
        renderMonth();
      });
      picker.querySelector('#nextMonth').addEventListener('click', () => {
        viewMonth++; if (viewMonth > 11) { viewMonth = 0; viewYear++; }
        renderMonth();
      });
    }

    renderMonth();

    const rect = anchor.getBoundingClientRect();
    const bookingBar = anchor.closest('.booking-bar') || document.body;
    bookingBar.style.position = 'relative';
    picker.style.top = (anchor.offsetTop + anchor.offsetHeight) + 'px';
    picker.style.left = anchor.offsetLeft + 'px';

    bookingBar.appendChild(picker);
    pickerOpen = picker;
  }

  checkIn.addEventListener('click', () => {
    createDatePicker(checkIn.closest('.book-field'), (date) => {
      selectedIn = date;
      checkIn.value = formatDate(date);
      if (!selectedOut || selectedOut <= date) {
        selectedOut = null;
        checkOut.value = '';
      }
    });
  });

  checkOut.addEventListener('click', () => {
    const min = selectedIn ? new Date(selectedIn.getTime() + 86400000) : new Date();
    createDatePicker(checkOut.closest('.book-field'), (date) => {
      selectedOut = date;
      checkOut.value = formatDate(date);
    }, min);
  });

  document.addEventListener('click', (e) => {
    if (pickerOpen && !pickerOpen.contains(e.target) && !checkIn.contains(e.target) && !checkOut.contains(e.target)) {
      pickerOpen.remove();
      pickerOpen = null;
    }
  });
}

// ─── BOOKING HANDLER ───────────────────────────────────────────────────────
function handleBooking() {
  const ci = document.getElementById('checkIn').value;
  const co = document.getElementById('checkOut').value;
  if (!ci || !co) {
    showToast('Please select your check-in and check-out dates.');
    return;
  }
  showToast('Checking availability — we\'ll be in touch shortly.');
}

// ─── TOAST NOTIFICATION ────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── ROOM MODAL ────────────────────────────────────────────────────────────
const roomData = {
  penthouse: {
    floor: 'Floors 38 — 42',
    title: 'The Penthouse Suite',
    desc: 'Our crown jewel. 3,200 sq ft of curated darkness, a private terrace overlooking the city grid, and a butler on call 24 hours. Floor-to-ceiling glass on three sides. A wet bar stocked from our private cellar. The kind of space that changes how you see the city — and yourself.',
    img: 'The Penthouse Suite.png',
    price: '$2,400 <span>/ night</span>',
    amenities: ['3,200 sq ft', 'Private Terrace', '24h Butler', 'Wet Bar', 'Grand Piano', 'Marble Bath', 'Chef On Request', 'Panoramic Views']
  },
  deluxe: {
    floor: 'Floors 20 — 37',
    title: 'Noir Deluxe',
    desc: 'Dark walnut panelling, burnished brass fixtures, hand-stitched leather headboard. A Noir Deluxe room performs as well as it looks — equipped for work, built for indulgence. Floor-to-ceiling windows frame a city skyline that belongs to you alone.',
    img: 'Noir Deluxe.png',
    price: '$680 <span>/ night</span>',
    amenities: ['King Bed', 'City Views', 'Deep-Soak Tub', 'Espresso Bar', 'Marble Bathroom', 'Bose Sound', 'Blackout Drapes', 'Turndown Service']
  },
  standard: {
    floor: 'Floors 10 — 19',
    title: 'City View Standard',
    desc: 'The city spread beneath you, every night. Floor-to-ceiling glass frames the Manhattan grid in all directions. A deep-soak tub, Italian linens, and a minibar that does not disappoint. The entry point to Noir Haus — and already extraordinary.',
    img: 'City View Standard.png',
    price: '$390 <span>/ night</span>',
    amenities: ['Queen or King', 'City Views', 'Deep-Soak Tub', 'Italian Linens', 'Minibar', 'Rainfall Shower', 'Smart TV', 'Nespresso Machine']
  },
  black: {
    floor: 'Floor 42 only',
    title: 'The Black Label',
    desc: 'By invitation or personal inquiry only. The most private address in New York — a private residence above a hotel, above a city. Spanning the full floor with 360° views, a private entrance, and a staff of three assigned exclusively to your stay. There is no comparable offering in Manhattan.',
    img: 'The Black Label.png',
    price: '$5,800 <span>/ night</span>',
    amenities: ['Full Floor · 4,800 sq ft', 'Private Entrance', 'Dedicated Staff of 3', '360° Manhattan Views', 'Private Dining Room', 'Screening Room', 'Wine Cellar Access', 'By Inquiry Only']
  }
};

const modal = document.getElementById('roomModal');

function openModal(roomKey) {
  const r = roomData[roomKey];
  if (!r) return;
  document.getElementById('modalFloor').textContent = r.floor;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalDesc').textContent = r.desc;
  document.getElementById('modalPrice').innerHTML = r.price;
  document.getElementById('modalImg').src = r.img;
  document.getElementById('modalImg').alt = r.title;
  const amenitiesEl = document.getElementById('modalAmenities');
  amenitiesEl.innerHTML = r.amenities.map(a => `<span class="modal-amenity">${a}</span>`).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === modal) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── TESTIMONIAL ROTATOR ───────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Noir Haus doesn't feel like a hotel. It feels like the city itself handed you the keys to its best-kept secret.",
    attr: '<strong>Margaux D.</strong> — Suite 3901, November 2025'
  },
  {
    quote: "I've stayed at every celebrated hotel in Manhattan. Nothing comes close to the silence, the service, the sense of being exactly where you should be.",
    attr: '<strong>James T.</strong> — Black Label, September 2025'
  },
  {
    quote: "The midnight gallery tour alone was worth the trip. We saw things most New Yorkers will never see. Then came back to the suite and couldn't sleep — in the best way.",
    attr: '<strong>Priya & Arjun M.</strong> — Penthouse, December 2025'
  }
];
let testIdx = 0;
const quoteEl = document.querySelector('.test-quote');
const attrEl = document.querySelector('.test-attr');
const navBtns = document.querySelectorAll('.test-nav-btn');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    testIdx = parseInt(btn.dataset.idx);
    updateTestimonial();
  });
});

function updateTestimonial() {
  if (!quoteEl) return;
  quoteEl.style.opacity = '0';
  attrEl.style.opacity = '0';
  setTimeout(() => {
    quoteEl.textContent = testimonials[testIdx].quote;
    attrEl.innerHTML = testimonials[testIdx].attr;
    quoteEl.style.opacity = '1';
    attrEl.style.opacity = '1';
    navBtns.forEach((b, i) => b.classList.toggle('active', i === testIdx));
  }, 300);
}

if (quoteEl) {
  quoteEl.style.transition = 'opacity 0.35s';
  attrEl.style.transition = 'opacity 0.35s';
  setInterval(() => {
    testIdx = (testIdx + 1) % testimonials.length;
    updateTestimonial();
  }, 6000);
}

// ─── NEWSLETTER ────────────────────────────────────────────────────────────
const nlBtn = document.querySelector('.nl-btn');
const nlInput = document.querySelector('.nl-input');
if (nlBtn && nlInput) {
  nlBtn.addEventListener('click', () => {
    if (nlInput.value && nlInput.value.includes('@')) {
      showToast('Thank you — your invitation to the Noir Haus circle is confirmed.');
      nlInput.value = '';
    } else {
      showToast('Please enter a valid email address.');
    }
  });
  nlInput.addEventListener('keydown', e => { if (e.key === 'Enter') nlBtn.click(); });
}

// ─── DINING / EXP BUTTONS ─────────────────────────────────────────────────
document.querySelectorAll('.dining-btn, .exp-card-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showToast('Request received — our concierge will contact you within the hour.');
  });
});

// ─── MAP GRID ANIMATION ────────────────────────────────────────────────────
function animateMapDots() {
  const locRight = document.querySelector('.loc-map-inner');
  if (!locRight) return;
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    dot.style.cssText = `
      position: absolute;
      left: ${x}%; top: ${y}%;
      width: ${size}px; height: ${size}px;
      background: rgba(184,150,90,${Math.random() * 0.3 + 0.05});
      border-radius: 50%;
      pointer-events: none;
      animation: mapDotPulse ${2 + Math.random() * 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 3}s;
    `;
    locRight.appendChild(dot);
  }

  const style = document.createElement('style');
  style.textContent = `@keyframes mapDotPulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }`;
  document.head.appendChild(style);
}
animateMapDots();

// ─── PARALLAX ON HERO ─────────────────────────────────────────────────────
const heroImg = document.querySelector('.hero-img');
if (heroImg && !isTouchDevice) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroImg.style.transform = `scale(1.06) translateY(${scrolled * 0.15}px)`;
    }
  }, { passive: true });
}

// ─── SMOOTH ANCHOR LINKS ───────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
