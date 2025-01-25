'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { slideUpFast } from '@/app/utils/animations';

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

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const techListElements = project.techList.map((tech, idx) => (
    <li key={idx} className="py-1 px-2 rounded h-fit text-sm bg-slate-50/[5%]">
      {tech.title}
    </li>
  ));

  return (
    <a
      href={project.liveLink}
      target="_blank"
      className="group transition hover:cursor-pointer"
    >
      <motion.article
        variants={slideUpFast}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.01,
        }}
        className="flex flex-col w-full gap-4 p-4 rounded-lg border-t-[1px] md:border-t-transparent border-t-slate-50/10 bg-slate-50/[3%] md:hover:border-t-slate-50/10 md:bg-transparent md:hover:bg-slate-50/[3%] z-40"
      >
        {/* Top Section */}
        <div className="flex flex-col w-full lg:flex-row gap-6">
          <figure className="w-full lg:w-1/2">
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
          <div className="flex flex-col gap-4 lg:w-1/2">
            <header className="flex justify-between">
              <h4 className="text-2xl">{project.title}</h4>
              <MdOutlineArrowOutward className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-orange" />
            </header>

            <p className="text-lg">{project.description}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-end gap-6">
          <div className="w-full lg:w-1/2">
            <ul className="flex flex-wrap gap-2">{techListElements}</ul>
          </div>

          <div className="flex md:justify-end gap-4 w-full lg:w-1/2">
            <p className="text-lg">{project.date}</p>
          </div>
        </div>
      </motion.article>
    </a>
  );
};

export default ProjectCard;
