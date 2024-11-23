'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const aboutData = [
  'I am a Software Developer who weaves code and dreams into tangible realities.',
  'Creativity is at the heart of everything I do. I view coding as an art form, where every line of code has the potential to be elegant and expressive. I value the importance of visual appeal, attention to detail, and believe in the power that blending creativity and technology has.',
  'I thrive on the excitement of exploring and mastering cutting-edge tools and frameworks, continuously expanding my skill set. I have developed a strong aptitude for fast learning, enabling me to quickly grasp new concepts and technologies.',
  'Beyond the code, I am an artist who loves expressing myself through digital mediums. I also enjoy getting out into nature, spending quality time with my dog and partner, and diving into the immersive worlds of video games when it’s time to unwind.',
];

const About: FC = () => {
  return (
    <section className="">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-[family-name:var(--font-universal-expansion)]"
      >
        hi im cass
      </motion.h2>

      <div className="flex flex-col gap-6 mt-4">
        {aboutData.map((p, idx) => (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            key={idx}
            className="body-txt"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
