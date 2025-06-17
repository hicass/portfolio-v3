'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { slideInFastFL } from '../utils/animations';
import { SiTypescript, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoNodejs } from 'react-icons/bi';
import { SiJest } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiStorybook } from 'react-icons/si';

const techData = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Storybook',
    icon: SiStorybook,
    link: 'https://storybook.js.org/',
  },
  { name: 'React', icon: FaReact, link: 'https://react.dev/' },
  { name: 'Next.js', icon: TbBrandNextjs, link: 'https://nextjs.org/' },
  {
    name: 'Tailwind CSS',
    icon: RiTailwindCssFill,
    link: 'https://tailwindcss.com/',
  },
  { name: 'Jest', icon: SiJest, link: 'https://jestjs.io/' },
  { name: 'Node.js', icon: BiLogoNodejs, link: 'https://nodejs.org/en/' },
  { name: 'Prisma', icon: SiPrisma, link: 'https://www.prisma.io/' },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    link: 'https://www.postgresql.org/',
  },
  { name: 'Express', icon: SiExpress, link: 'https://expressjs.com/' },
];

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

      <div className="flex flex-row flex-wrap md:justify-center gap-6 md:gap-x-20 md:gap-y-10 mt-10">
        {techIconElements}
      </div>
    </motion.section>
  );
};

export default Tech;
