import { FC } from 'react';

import HeroBackground from './HeroBackground';

const Hero: FC = () => {
  return (
    <header className="flex flex-col items-center relative w-full hero">
      <HeroBackground />

      <div className="flex flex-col w-2/3 gap-4 h-screen justify-center -mt-10">
        <span className="text-5xl">hi i'm</span>
        <h1 className="text-[9rem] leading-none tracking-wider font-[family-name:var(--font-koolegant)]">
          Cass
        </h1>

        <p className="text-5xl leading-tight">
          I am a Software Developer who weaves code and dreams into tangible
          realities.
        </p>
      </div>
    </header>
  );
};

export default Hero;
