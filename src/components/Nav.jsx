import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.querySelector('.nav')?.offsetHeight ?? 80;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH - 24, behavior: 'smooth' });
}

const links = [
  { id: 'work',   label: 'Work'   },
  { id: 'reels',  label: 'Reels'  },
  { id: 'events', label: 'Events' },
  { id: 'about',  label: 'About'  },
];

export default function Nav({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">

        <a
          href="#"
          className="nav-logo"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className="logo-first">K</span>
          <span className="logo-dot">·</span>
          <span className="logo-last">M</span>
        </a>

        <div className="nav-links">
          {links.map(({ id, label }) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</button>
          ))}

          {/* Theme toggle — desktop */}
          <ThemeToggle />

          <button className="nav-link nav-link--cta" onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="nav-mobile-actions">
          <ThemeToggle compact />
          <button className="nav-toggle" onClick={onMenuOpen} aria-label="Open menu">
            <span /><span />
          </button>
        </div>

      </div>
    </nav>
  );
}
