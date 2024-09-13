import { FC } from 'react';

import HeroBackground from './HeroBackground';

const Hero: FC = () => {
  return (
    <div className="flex flex-col items-center relative hero">
      <HeroBackground />

      <div className="flex flex-col w-2/3 gap-4 h-screen justify-center -mt-10">
        <h2 className="text-5xl">hi i'm</h2>
        <h1 className="text-[10rem] leading-none font-[family-name:var(--font-koolegant)]">
          Cass
        </h1>

        <p className="text-5xl leading-tight">
          I am a Software Developer who weaves code and dreams into tangible
          realities.
        </p>
      </div>
    </div>
  );
};

export default Hero;
