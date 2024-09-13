import { FC } from 'react';
import Hero from './components/Hero/Hero';

const LandingPage: FC = () => {
  return (
    <main>
      <div className='overflow-y-visible overflow-x-hidden h-screen relative parallax-wrapper'>
        <Hero />
      </div>
    </main>
  );
};

export default LandingPage;
