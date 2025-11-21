import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Cursor />
      <Navigation scrollY={scrollY} />
      <main className="bg-stone-50">
        <Hero scrollY={scrollY} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop scrollY={scrollY} />
    </>
  );
}

export default App;
