'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <motion.header className="flex flex-col items-center relative w-full hero">
      <motion.div
        className="flex flex-col mx-4 md:max-w-4xl gap-4 md:gap-8 h-screen justify-center -mt-28 md:-mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl md:text-5xl">hi i&apos;m</span>
        <h1 className="text-[5rem] md:text-[7rem] leading-none tracking-wider font-[family-name:var(--font-universal-expansion)]">
          Cass
        </h1>

        <p className="text-3xl md:text-5xl">
          I am a Software Developer who weaves code and dreams into tangible
          realities.
        </p>
      </motion.div>
    </motion.header>
  );
};

export default Hero;
