import { useEffect, useRef } from 'react';
import Reveal from './Reveal';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const CameraIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="32" r="14" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 62c0-14.359 11.641-26 26-26s26 11.641 26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="58" y="12" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M74 16l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  const visualRef = useRef(null);

  // Subtle parallax on scroll
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
    let ticking = false;
    const heroEl = document.querySelector('.hero');

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (visualRef.current && heroEl) {
            const scrollY = window.scrollY;
            if (scrollY < heroEl.offsetHeight) {
              visualRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">

        {/* ── Left column ── */}
        <Reveal direction="left">
          <p className="hero-eyebrow">
            <span className="eyebrow-line" />
            Reel Creator &amp; Event Photographer
          </p>
          <h1 className="hero-title">
            <span className="hero-title-first">Khaled</span>
            <span className="hero-title-last"><em>Mohsen</em></span>
          </h1>
          <p className="hero-intro">
            I craft cinematic stories through light, motion, and stillness.
            From the charged energy of live events to the quiet poetry of a
            single frame — every project is a visual conversation.
          </p>
          <div className="hero-ctas">
            <button className="btn btn--primary" onClick={() => scrollTo('reels')}>View Portfolio</button>
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>Let's Collaborate</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">150<sup>+</sup></span>
              <span className="stat-label">Events Covered</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">80<sup>+</sup></span>
              <span className="stat-label">Reels Produced</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">5<sup>+</sup></span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </Reveal>

        {/* ── Right column ── */}
        <Reveal direction="right">
          <div className="hero-visual" ref={visualRef}>
            <div className="hero-image-wrap">
              <div className="hero-image-frame">
                <img src="/khaled-photo.jpg" alt="Khaled Mohsen" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
