import { FC } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Playground from './components/Playground';

const LandingPage: FC = () => {
  return (
    <main>
      <div className="flex flex-col items-start overflow-y-visible overflow-x-hidden h-screen w-screen relative text-white font-[family-name:var(--font-satoshi)] parallax-wrapper">
        <Hero />
        <Nav />

        <div className="w-full flex flex-col items-center mt-10">
          <div className="w-2/3 flex flex-col gap-48">
            <About />
            <Tech />
            <Projects />
            <Playground />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
