import { FC } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Tech from './components/Tech';

const LandingPage: FC = () => {
  return (
    <main>
      <div className="flex flex-col items-center overflow-y-visible overflow-x-hidden h-screen relative font-[family-name:var(--font-satoshi)] parallax-wrapper">
        <Hero />

        <div className="flex flex-col gap-48 w-2/3 mt-10">
          <About />
          <Tech />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
