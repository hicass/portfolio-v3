'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Tag Operations',
    description:
      "Solely designed and developed a modern, user-friendly website for Tag Ops, a company specializing in operational support. I created a responsive and engaging design that aligns with the company's personality.",
    date: 'December 2023 - Present',
    imagePath: '/images/tagops.png',
    imageAlt: 'Tag Operations Landing Page',
    techList: [
      { title: 'Next.js', link: 'https://nextjs.org/' },
      { title: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
      { title: 'Email.js', link: 'https://www.emailjs.com/' },
      { title: 'Framer Motion', link: 'https://www.framer.com/motion/' },
      { title: 'Vercel', link: 'https://vercel.com/' },
    ],
    liveLink: 'https://www.tagoperations.com/',
    repoLink: 'https://github.com/hicass/tag-ops-v3',
  },
  {
    title: 'RAMResume',
    description:
      "As a founding engineer, I collaborated closely with designers and stakeholders to bring RAMResume, an AI-powered career toolbox for Fordham University students—from concept to reality. Starting from scratch, I contributed to the app's design by creating responsive wireframes in Figma to ensure a seamless user experience. (Currently in development—email me for login access!)",
    date: 'July 2024 - Present',
    imagePath: '/images/ramresume.png',
    imageAlt: 'RAMResume Landing Page',
    techList: [
      { title: 'Next.js', link: 'https://nextjs.org/' },
      { title: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
      { title: 'Sanity', link: 'https://www.sanity.io/' },
      { title: 'Mongoose', link: 'https://mongoosejs.com/docs/' },
      { title: 'Express', link: 'https://expressjs.com/' },
      {
        title: 'OpenAI API',
        link: 'https://platform.openai.com/docs/overview',
      },
    ],
    liveLink: 'https://www.ramresume.com/',
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
        Take a look at some of the projects I&apos;ve been involved in.
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
