import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Loader      from './components/Loader';
import Cursor      from './components/Cursor';
import Nav         from './components/Nav';
import MobileMenu  from './components/MobileMenu';
import Hero        from './components/Hero';
import Work        from './components/Work';
import Reels       from './components/Reels';
import Events      from './components/Events';
import Process     from './components/Process';
import About       from './components/About';
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
        <Work />
        <Reels />
        <Events />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
