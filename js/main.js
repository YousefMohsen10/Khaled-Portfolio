/**
 * KHALED MOHSEN — Cinematic Editorial Portfolio
 * Main JavaScript — v1.0
 */

'use strict';

/* ═══════════════════════════════════════════
   1. PAGE LOADER
   ═══════════════════════════════════════════ */
const loader     = document.getElementById('pageLoader');
const loaderFill = loader.querySelector('.loader-fill');

function hideLoader() {
  loader.classList.add('hidden');
  document.body.style.overflow = '';
  initRevealObserver();
}

// Animate the loading bar then hide
document.body.style.overflow = 'hidden';
setTimeout(() => { loaderFill.style.width = '100%'; }, 100);
setTimeout(hideLoader, 1900);


/* ═══════════════════════════════════════════
   2. CUSTOM CURSOR
   ═══════════════════════════════════════════ */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

if (cursor && window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth follower via rAF
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover state on interactive elements
  const interactiveEls = document.querySelectorAll(
    'a, button, .work-item, .reel-placeholder, .mosaic-item, .skill-tag, .btn, select, input, textarea'
  );

  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => cursorFollower.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hovering'));
  });
}


/* ═══════════════════════════════════════════
   3. NAVIGATION — SCROLL BEHAVIOUR
   ═══════════════════════════════════════════ */
const nav = document.getElementById('nav');

function onNavScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', onNavScroll, { passive: true });
onNavScroll();


/* ═══════════════════════════════════════════
   4. MOBILE MENU
   ═══════════════════════════════════════════ */
const navToggle     = document.getElementById('navToggle');
const mobileMenu    = document.getElementById('mobileMenu');
const mobileClose   = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));


/* ═══════════════════════════════════════════
   5. SCROLL REVEAL ANIMATIONS
   ═══════════════════════════════════════════ */
function initRevealObserver() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0, 10);
        setTimeout(() => {
          entry.target.classList.add('in-view');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}


/* ═══════════════════════════════════════════
   6. BACK TO TOP BUTTON
   ═══════════════════════════════════════════ */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ═══════════════════════════════════════════
   7. CONTACT FORM — BASIC VALIDATION & UX
   ═══════════════════════════════════════════ */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // Simple field check
    const name    = contactForm.querySelector('#name').value.trim();
    const email   = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      shakeForm(btn);
      return;
    }

    if (!isValidEmail(email)) {
      shakeForm(btn);
      return;
    }

    // Simulate send success
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = 'var(--olive)';
      btn.style.borderColor = 'var(--olive)';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    }, 1200);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeForm(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake 0.4s var(--ease-in-out)';
  setTimeout(() => { el.style.animation = ''; }, 450);
}

// Inject shake keyframes dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
}`;
document.head.appendChild(shakeStyle);


/* ═══════════════════════════════════════════
   8. SMOOTH SCROLL FOR ANCHOR LINKS
   ═══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    const navHeight = nav.offsetHeight;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;

    window.scrollTo({ top: targetPos, behavior: 'smooth' });
  });
});


/* ═══════════════════════════════════════════
   9. REEL ITEMS — HOVER PLAY PREVIEW (opt)
   ═══════════════════════════════════════════ */
// When real <video> elements are added inside .reel-placeholder,
// this code will auto-play them on hover.
document.querySelectorAll('.reel-placeholder').forEach(reel => {
  const video = reel.querySelector('video');
  if (!video) return;

  reel.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
  });

  reel.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});


/* ═══════════════════════════════════════════
   10. PARALLAX — SUBTLE HERO FLOAT
   ═══════════════════════════════════════════ */
const heroVisual = document.querySelector('.hero-visual');

if (heroVisual && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroH   = document.querySelector('.hero').offsetHeight;
        if (scrollY < heroH) {
          heroVisual.style.transform = `translateY(${scrollY * 0.08}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}


/* ═══════════════════════════════════════════
   11. DYNAMIC YEAR IN FOOTER
   ═══════════════════════════════════════════ */
const yearEl = document.querySelector('.footer-copy p');
if (yearEl) {
  yearEl.textContent = yearEl.textContent.replace('2024', new Date().getFullYear());
}


/* ═══════════════════════════════════════════
   12. WORK ITEM — STAGGER ON LOAD
   ═══════════════════════════════════════════ */
// Extra refinement: work items get a staggered fade once in view
document.querySelectorAll('.work-item').forEach((item, i) => {
  if (!item.dataset.delay) {
    item.dataset.delay = i * 80;
  }
});
