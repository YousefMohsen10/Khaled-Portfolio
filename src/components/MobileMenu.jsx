import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const links = ['reels', 'events', 'contact'];

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = (id) => { onClose(); scrollTo(id); };

  return (
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      <div className="mobile-menu-top">
        <ThemeToggle />
        <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">✕</button>
      </div>

      <nav className="mobile-nav">
        {links.map(id => (
          <button key={id} className="mobile-nav-link" onClick={() => handleLink(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>

      <p className="mobile-menu-tagline">Stories through my lens</p>
    </div>
  );
}
