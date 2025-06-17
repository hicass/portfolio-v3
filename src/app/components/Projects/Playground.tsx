'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectSectionProps } from '@/types';

// Function to render the playground section on the main page
export default function Playground({ projectData }: ProjectSectionProps) {
  const playgroundCardElements = projectData.map((playground, idx) => (
    <ProjectCard item={playground} key={idx} />
  ));

  return (
    <section
      id="playground"
      className="flex flex-col items-center relative border-b border-orange pb-6 scroll-m-36"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full font-[family-name:var(--font-universal-expansion)]"
      >
        playground
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mt-10 text-2xl"
      >
        My little corner for trying out new tech and building fun projects :)
      </motion.p>

      <div className="flex flex-col items-center gap-16 mt-10">
        {playgroundCardElements}
      </div>
    </section>
  );
}
