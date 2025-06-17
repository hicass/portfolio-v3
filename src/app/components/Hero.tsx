'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Function to render the Hero section on the main page
export default function Hero() {
  return (
    <header className="flex flex-col items-center w-full">
      <motion.div
        className="flex flex-col mx-4 md:max-w-4xl h-screen justify-center -mt-28 md:-mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:gap-8 relative">
          <motion.div
            className="absolute -top-10 sm:-top-20 right-2 md:-top-16 md:right-14"
            animate={{
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/images/smiley.png"
              alt="Smiley face"
              width={100}
              height={100}
            />
          </motion.div>

          <span className="text-3xl md:text-5xl">hi i&apos;m</span>
          <h1 className="text-[5rem] md:text-[7rem] leading-none tracking-wider font-[family-name:var(--font-universal-expansion)]">
            Cass
          </h1>

          <p className="text-3xl md:text-5xl">
            I am a Software Developer who weaves code and dreams into tangible
            realities.
          </p>
        </div>
      </motion.div>
    </header>
  );
};
