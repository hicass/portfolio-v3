'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { slideInFastFR } from '../utils/animations';
import { aboutData } from '@/app/pageData';

const About: FC = () => {
  const aboutParagraphElements = aboutData.map((p, idx) => (
    <p key={idx} className="text-2xl">
      {p}
    </p>
  ));

  return (
    <motion.section
      id="about"
      variants={slideInFastFR}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className="relative border-l border-orange pl-6 scroll-m-40"
    >
      <h2 className="font-[family-name:var(--font-universal-expansion)]">
        about me
      </h2>

      <div className="flex flex-col gap-6 mt-4">{aboutParagraphElements}</div>
    </motion.section>
  );
};

export default About;
