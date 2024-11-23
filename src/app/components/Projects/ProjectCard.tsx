'use client';
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

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
    <a href={project.liveLink} target="_blank" className="hover:cursor-pointer">
      <motion.article
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.05,
        }}
        className="project-card flex flex-col w-full md:w-[24rem] lg:w-[27rem] xl:w-full gap-4 xl:gap-4 p-4 rounded-lg border-t-[1px] md:border-t-transparent border-t-brown bg-dark-brown-1 md:hover:border-t-brown md:bg-transparent md:hover:bg-dark-brown-1 z-40"
      >
        {/* Top Section */}
        <div className="flex flex-col w-full xl:flex-row gap-4 xl:gap-6">
          <figure className="w-full xl:w-1/2">
            {/* Image that showcases the project */}
            <Image
              src={project.imagePath}
              alt={project.imageAlt}
              height={800}
              width={800}
              className="rounded"
            />
          </figure>

          {/* Information about the project */}
          <div className="flex flex-col gap-2 xl:gap-4 xl:w-1/2">
            <header className="flex justify-between">
              <h4 className="body-txt">{project.title}</h4>
              <div className='project-arrow'>
                <MdOutlineArrowOutward />
              </div>
            </header>

            <p className="body-txt-sm">{project.description}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col xl:flex-row items-start gap-4 xl:gap-6">
          <div className="flex gap-4 w-full xl:w-1/2">
            <p className="text-lg">{project.date}</p>
          </div>

          <div className="w-full xl:w-1/2">
            <ul className="flex flex-wrap gap-2">
              {project.techList.map((tech, idx) => (
                // What technologies were used
                <li
                  key={idx}
                  className="py-1 px-2 rounded h-fit text-sm bg-dark-brown-2"
                >
                  {tech.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </a>
  );
};

export default ProjectCard;
