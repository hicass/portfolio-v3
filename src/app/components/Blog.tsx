'use client';
import { motion } from 'framer-motion';
import ProjectCard from './Projects/ProjectCard';
import { BlogSectionProps } from '@/types';

// Function to render the Blog section on the main page
export default function Blog({ blogData }: BlogSectionProps) {
  const projectCardElements = blogData.map((blog, idx) => (
    <ProjectCard item={blog} key={idx} />
  ));

  return (
    <section
      id="blog"
      className="flex flex-col items-center relative border-b border-orange pb-6 scroll-m-36"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full font-[family-name:var(--font-universal-expansion)]"
      >
        blog
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mt-10 text-2xl"
      >
        Check out my reflections, thoughts, and insights.
      </motion.p>

      <div className="flex flex-col items-center gap-16 mt-10">
        {projectCardElements}
      </div>
    </section>
  );
}
