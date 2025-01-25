import { FC } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Nav from './components/Nav';
import Projects from './components/Projects/Projects';
import Playground from './components/Projects/Playground';
import Contact from './components/Contact/Contact';
import './mesh-gradient.css';

const LandingPage: FC = () => {
  return (
    <main>
      <div className="flex flex-col items-start overflow-y-visible overflow-x-hidden h-screen w-screen relative text-white font-[family-name:var(--font-satoshi)]">
        <Hero />
        <Nav />

        <div className="w-full flex flex-col items-center -mt-10 md:mt-14">
          <div className="mx-4 sm:w-3/4 md:w-[60%] lg:max-w-3xl lg:w-full xl:max-w-4xl flex flex-col gap-28 md:gap-52">
            <About />
            <Tech />
            <Projects />
            <Playground />
            <Contact />
          </div>

          <p className="p-2 px-4 text-md text-white text-center">
            Built and designed by yours truly, using Next.js and a handful of
            other technologies. Check out the{' '}
            <a
              href="https://github.com/hicass/portfolio-v3"
              target="_blank"
              className="text-orange hover:cursor-pointer"
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
