'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';

const techData = [
  { name: 'React', icon: FaReact, link: 'https://react.dev/' },
  { name: 'Next.js', icon: TbBrandNextjs, link: 'https://nextjs.org/' },
  { name: 'Git', icon: FaGitAlt, link: 'https://git-scm.com/' },
  { name: 'Node.js', icon: BiLogoNodejs, link: 'https://nodejs.org/en' },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    link: 'https://tailwindcss.com/',
  },
];

const Tech: FC = () => {
  return (
    <section className="flex flex-col relative">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full font-[family-name:var(--font-universal-expansion)]"
      >
        tech
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full mt-4 body-txt"
      >
        Here are some of the technologies I have had the pleasure to work with.
      </motion.p>

      <div className="flex flex-row flex-wrap justify-center xl:justify-start gap-12 md:gap-20 mt-10">
        {techData.map((tech, idx) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-2 text-5xl"
            href={tech.link}
            target="_blank"
            key={idx}
          >
            <tech.icon />
            <p className="body-txt-sm">{tech.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Tech;
