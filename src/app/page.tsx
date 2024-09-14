import { FC } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About';

const LandingPage: FC = () => {
  return (
    <main>
      <div className='flex flex-col items-center overflow-y-visible overflow-x-hidden h-screen relative font-[family-name:var(--font-satoshi)] parallax-wrapper'>
        <Hero />

        <div className='flex flex-col gap-10 w-2/3 mt-10'>
          <About />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
