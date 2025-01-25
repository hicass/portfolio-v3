'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { slideInFastFL } from '../utils/animations';
import { techData } from '@/app/pageData';

const Tech: FC = () => {
  const techIconElements = techData.map((tech, idx) => (
    <a
      className="flex flex-col items-center gap-4 text-5xl hover:text-orange"
      href={tech.link}
      target="_blank"
      key={idx}
    >
      <tech.icon />
      <p className="text-xl">{tech.name}</p>
    </a>
  ));

  return (
    <motion.section
      id="tech"
      variants={slideInFastFL}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col items-center relative border-r border-orange scroll-m-40"
    >
      <h2 className="w-full font-[family-name:var(--font-universal-expansion)]">
        tech
      </h2>

      <div className="flex flex-row flex-wrap md:justify-center gap-6 md:gap-20 mt-10">
        {techIconElements}
      </div>
    </motion.section>
  );
};

export default Tech;
