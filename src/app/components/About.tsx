'use client';
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

const aboutData = [
  'I am a Software Developer who weaves code and dreams into tangible realities.',
  'With a diverse background, I bring a unique perspective and an adaptable, fast-learning approach to every project. I am passionate about creating elegant and expressive digital experiences, delivering creative, high-quality solutions with a strong emphasis on scalability and maintainability.',
  'To me, coding is an art form where every line has the potential to blend creativity and technology into something impactful. I value visual appeal, attention to detail, and the power of innovative design to craft memorable user experiences.',
  'Beyond the code, I am an artist at heart, expressing myself through digital mediums. I also enjoy connecting with nature, spending quality time with my dog and partner, and immersing myself in the worlds of video games to recharge and find inspiration.',
];

const slideVariants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const About: FC = () => {
  return (
    <motion.section
      className="relative border-l border-orange pl-6"
      variants={slideVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
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

      <div className="flex flex-col gap-6 mt-4">
        {aboutData.map((p, idx) => (
          <p key={idx} className="text-2xl">
            {p}
          </p>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
