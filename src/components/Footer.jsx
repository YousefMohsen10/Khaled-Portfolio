function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const links = ['reels', 'events', 'contact'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">K · M</span>
            <p className="footer-tagline">Reel Creator &amp; Event Photographer</p>
          </div>

          <nav className="footer-nav">
            {links.map(id => (
              <button key={id} onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          <div className="footer-copy">
            <p>© {year} Khaled Mohsen. All rights reserved.</p>
            <p className="footer-made">Crafted with intention.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
