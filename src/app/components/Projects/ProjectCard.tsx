'use client';
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

import Image from 'next/image';

import { BsCodeSlash } from 'react-icons/bs';
import { CgArrowsExpandUpRight } from 'react-icons/cg';

type Project = {
  title: string;
  description: string;
  date: string;
  imagePath: string;
  imageAlt: string;
  techList: ProjectTech[];
  liveLink: string;
  repoLink?: string;
};

type ProjectTech = {
  title: string;
  link: string;
};

interface ProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.article
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="flex flex-col w-full gap-6 p-4 rounded-lg border-t-[1px] md:border-t-transparent border-t-brown bg-dark-brown-1 md:hover:border-t-brown md:bg-transparent md:hover:bg-dark-brown-1 z-40"
    >
      {/* Top Section */}
      <div className="flex flex-col w-full lg:flex-row gap-6">
        <figure className="lg:w-1/2">
          {/* Image that showcases the project */}
          <Image
            src={project.imagePath}
            alt={project.imageAlt}
            height={500}
            width={500}
            className="rounded"
          />
        </figure>

        {/* Information about the project */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <header>
            <a
              href={project.liveLink}
              target="_blank"
              className="w-fit flex gap-2 items-center text-2xl text-beige hover:text-white"
            >
              {project.title}
              <CgArrowsExpandUpRight />
            </a>
          </header>
          <p className="text-xl">{project.description}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-end gap-6">
        <div className="w-full lg:w-1/2">
          <ul className="flex flex-wrap gap-2">
            {project.techList.map((tech, idx) => (
              // What technologies were used
              <a href={tech.link} target="_blank" key={idx}>
                <li className="py-1 px-2 rounded-lg h-fit text-sm bg-dark-brown-2 hover:bg-brown">
                  {tech.title}
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div className={`flex ${project.repoLink ? 'justify-between' : 'justify-end'} gap-4 w-full lg:w-1/2`}>
          {project.repoLink && (
            <a
              href={project.repoLink}
              className="flex gap-2 items-center text-beige hover:text-white"
              target="_blank"
            >
              <p className="text-lg">view repo</p>
              {/* Code icon */}
              <BsCodeSlash />
            </a>
          )}

          <p className="text-lg">{project.date}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
