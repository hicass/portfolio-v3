'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const aboutData = [
  'Creativity is at the heart of everything I do. I view coding as an art form, where every line of code has the potential to be elegant and expressive. I value the importance of visual appeal, attention to detail, and believe in the power that blending creativity and technology has.',
  'As a coding bootcamp graduate, I have developed a strong aptitude for fast learning, enabling me to quickly grasp new concepts and technologies. I thrive on the excitement of exploring and mastering cutting-edge tools and frameworks, continuously expanding my skill set.',
  'Beyond the code, I am an artist who loves expressing myself through digital mediums. I also enjoy getting out into nature, spending quality time with my dog and partner, and diving into the immersive worlds of video games when it’s time to unwind.',
];

const About: FC = () => {
  return (
    <motion.section
      className="relative border-l border-orange pl-6"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once:true, amount: 0.1 }}
    >
      <span
        id="about"
        className="absolute -top-20 opacity-0"
        aria-hidden="true"
      >
        Invisible Nav Anchor
      </span>
      <h2 className="font-[family-name:var(--font-universal-expansion)]">
        about me
      </h2>

      <div className="flex flex-col gap-6 mt-10">
        {aboutData.map((p, idx) => (
          <p
            key={idx}
            className="text-2xl"
          >
            {p}
          </p>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
