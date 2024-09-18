'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import HeroBackground from './HeroBackground';

const Hero: FC = () => {
  return (
    <motion.header className="flex flex-col items-center relative w-full hero">
      <HeroBackground />

      <motion.div
        className="flex flex-col mx-4 md:w-3/4 lg:w-2/3 2xl:w-1/2 gap-4 md:gap-8 h-screen justify-center -mt-28 md:-mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl md:text-5xl">hi i'm</span>
        <h1 className="text-[5rem] md:text-[7rem] leading-none tracking-wider font-[family-name:var(--font-universal-expansion)]">
          Cass
        </h1>

        <p className="text-3xl md:text-5xl leading-tight">
          I am a Software Developer who weaves code and dreams into tangible
          realities.
        </p>
      </motion.div>
    </motion.header>
  );
};

export default Hero;
