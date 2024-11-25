'use client';
import { FC, useState, useEffect } from 'react';

import Hero from './components/Hero/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Nav from './components/Nav';
import Projects from './components/Projects/Projects';
import Playground from './components/Projects/Playground';
import Contact from './components/Contact/Contact';
import DrawnBackground from './components/Hero/DrawnBackground';

const LandingPage: FC = () => {
  const [activeView, setActiveView] = useState('about');
  const [isMobileScreen, setIsMobileScreen] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 770);
    };

    // Set initial screen size only on the client
    setIsMobileScreen(window.innerWidth < 770);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function renderView() {
    switch (activeView) {
      case 'about':
        return <About />;
      case 'tech':
        return <Tech />;
      case 'projects':
        return <Projects />;
      case 'playground':
        return <Playground />;
      case 'contact':
        return <Contact />;
      default:
        return <p>Not Found...</p>;
    }
  }

  if (!isMobileScreen) {
    return (
      <main className="relative">
        <DrawnBackground />
        <div className="flex flex-row justify-between h-screen 2xl:justify-around overflow-y-hidden overflow-x-hidden md:gap-16 text-white font-[family-name:var(--font-satoshi)]">
          <div className="min-w-fit mx-12 mt-20 justify-start h-full relative">
            <Hero />
            <Nav activeView={activeView} setActiveView={setActiveView} />
          </div>

          <div className="w-full max-w-4xl overflow-y-scroll z-10">
            {renderView()}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="flex flex-col p-6 gap-16 text-white font-[family-name:var(--font-satoshi)]">
        <Hero />

        <About />
        <Tech />
        <Projects />
        <Playground />
        <Contact />
      </div>
    </main>
  );
};

export default LandingPage;
