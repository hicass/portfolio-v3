'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';

const techData = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: TbBrandNextjs },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Node.js', icon: BiLogoNodejs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const Tech: FC = () => {
  return (
    <section className="flex flex-col items-center relative">
      <span
        id="tech"
        className="absolute -top-20 opacity-0"
        aria-hidden="true"
      >
        Invisible Nav Anchor
      </span>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full font-[family-name:var(--font-universal-expansion)]"
      >
        tech
      </motion.h2>

      <div className="flex flex-row flex-wrap md:justify-center md:w-2/3 gap-6 md:gap-24 mt-10">
        {techData.map((tech, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 text-7xl"
            key={idx}
          >
            <tech.icon />
            <p className="text-xl">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
