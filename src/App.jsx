import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import Loader      from './components/Loader';
import Cursor      from './components/Cursor';
import Nav         from './components/Nav';
import MobileMenu  from './components/MobileMenu';
import Hero        from './components/Hero';
import Reels       from './components/Reels';
import Events      from './components/Events';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import BackToTop   from './components/BackToTop';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Loader />
      <Cursor />
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <Reels />
        <Events />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Analytics />
    </ThemeProvider>
  );
}
