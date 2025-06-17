'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectSectionProps } from '@/types';

// Function to render the projects section on the main page
export default function Projects({ projectData }: ProjectSectionProps) {
  const projectCardElements = projectData.map((project, idx) => (
    <ProjectCard item={project} key={idx} />
  ));

  return (
    <section
      id="projects"
      className="flex flex-col items-center relative border-b border-orange pb-6 scroll-m-36"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full font-[family-name:var(--font-universal-expansion)]"
      >
        projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mt-10 text-2xl"
      >
        Take a look at some of the projects I&apos;ve been involved in.
      </motion.p>

      <div id="projects" className="flex flex-col items-center gap-16 mt-10">
        {projectCardElements}
      </div>
    </section>
  );
}
