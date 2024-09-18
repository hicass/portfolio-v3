'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Tag Operations',
    description:
      "Solely designed and developed a modern, user-friendly website for Tag Ops, a company specializing in operational support. I created a responsive and engaging design that aligns with the company's personality.",
    date: 'December 2023 to Present',
    imagePath: '/images/tagops.png',
    imageAlt: 'Tag Operations Landing Page',
    techList: [
      'Next.js',
      'Tailwind CSS',
      'Email.js',
      'Framer Motion',
      'Vercel',
    ],
    liveLink: 'https://www.tagoperations.com/',
    repoLink: 'https://github.com/hicass/tag-ops-v3',
  },
];

const Projects: FC = () => {
  return (
    <section className="flex flex-col items-center relative">
      <span
        id="projects"
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
        projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full mt-10 text-2xl"
      >
        Take a look at some of the projects I've been involved in.
      </motion.p>

      <div id="projects" className="flex flex-col items-center gap-16 mt-10">
        {projectData.map((p, idx) => (
          <ProjectCard project={p} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
