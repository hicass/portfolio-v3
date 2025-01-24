'use client';
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

import { SiTypescript, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';

const techData = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    link: 'https://www.typescriptlang.org/',
  },
  { name: 'React', icon: FaReact, link: 'https://react.dev/' },
  { name: 'Next.js', icon: TbBrandNextjs, link: 'https://nextjs.org/' },
  { name: 'Node.js', icon: BiLogoNodejs, link: 'https://nodejs.org/en' },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    link: 'https://www.postgresql.org/',
  },
  { name: 'Git', icon: FaGitAlt, link: 'https://git-scm.com/' },
];

const slideVariants: Variants = {
  offscreen: {
    x: -200,
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

const Tech: FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center relative border-r border-orange"
      variants={slideVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <span id="tech" className="absolute -top-20 opacity-0" aria-hidden="true">
        Invisible Nav Anchor
      </span>
      <h2 className="w-full font-[family-name:var(--font-universal-expansion)]">
        tech
      </h2>

      <div className="flex flex-row flex-wrap md:justify-center gap-6 md:gap-20 mt-10">
        {techData.map((tech, idx) => (
          <a
            className="flex flex-col items-center gap-4 text-5xl hover:text-orange"
            href={tech.link}
            target="_blank"
            key={idx}
          >
            <tech.icon />
            <p className="text-xl">{tech.name}</p>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;
