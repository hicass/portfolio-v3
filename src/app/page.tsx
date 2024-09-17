import { FC } from 'react';

import Hero from './components/Hero/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Nav from './components/Nav';
import Projects from './components/Projects/Projects';
import Playground from './components/Projects/Playground';
import Contact from './components/Contact/Contact';

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
            <Contact />
          </div>

          <p className="p-2 px-4 text-md text-beige-2">
            Built and designed by yours truly, using Next.js and a handful of
            other technologies. Check out the{' '}
            <a
              href="https://github.com/hicass/portfolio-v3"
              target="_blank"
              className="text-beige hover:text-white hover:cursor-pointer"
            >
              source code
            </a>{' '}
            to learn more.
          </p>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
