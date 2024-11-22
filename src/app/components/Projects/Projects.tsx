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
      { title: 'Next.js' },
      { title: 'Tailwind CSS' },
      { title: 'Email.js' },
      { title: 'Framer Motion' },
      { title: 'Vercel' },
    ],
    liveLink: 'https://www.tagoperations.com/',
    repoLink: 'https://github.com/hicass/tag-ops-v3',
  },
  {
    title: 'RAMResume',
    description:
      "As a founding engineer, I collaborate closely with designers, other engineers and stakeholders to bring RAMResume, an AI-powered career toolbox for Fordham University students—from concept to reality. Starting from scratch, I contributed to the app's design by creating responsive wireframes in Figma to ensure a seamless user experience. (Currently in development—email me for login access!)",
    date: 'July 2024 - Present',
    imagePath: '/images/ramresume.png',
    imageAlt: 'RAMResume Landing Page',
    techList: [
      { title: 'Next.js' },
      { title: 'Tailwind CSS' },
      { title: 'Sanity' },
      { title: 'Mongoose' },
      { title: 'Express' },
      {
        title: 'OpenAI API',
        link: 'https://platform.openai.com/docs/overview',
      },
    ],
    liveLink: 'https://www.ramresume.com/',
  },
  // {
  //   title: 'Custom CMS for a Private Blog',
  //   description:
  //     'I built a custom CMS for a client seeking a secure and private online blog. The project prioritized privacy, security, and user-friendly functionality, tailored to their unique needs. To maintain the client’s privacy, the live version linked here is a demo with completely different styling. Explore the demo using the credentials: username = test, password = test123 to experience its functionality firsthand!',
  //   date: 'August 2024',
  //   imagePath: '/images/private-blog.png',
  //   imageAlt: 'Tag Operations Landing Page',
  //   techList: [
  //     { title: 'Next.js' },
  //     { title: 'Tailwind CSS' },
  //     { title: 'Jest' },
  //     { title: 'Framer Motion' },
  //     { title: 'Next Auth' },
  //     { title: 'Prisma' },
  //     { title: 'PostgreSQL' },
  //     { title: 'TinyMCE' },
  //     { title: 'MUI Component Library' },
  //   ],
  //   liveLink: 'https://private-blog-demo.vercel.app/admin',
  // },
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
