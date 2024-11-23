'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <motion.header
      className="flex flex-col gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* <span className="text-3xl">Software Developer</span> */}
      <h1 className="font-[family-name:var(--font-universal-expansion)]">
        Cass Walters
      </h1>

      <p className="body-txt">
        Software Developer
      </p>
      {/* <p className="text-2xl">
        I am a Software Developer who weaves code and dreams into tangible
        realities.
      </p> */}
    </motion.header>
  );
};

export default Hero;
