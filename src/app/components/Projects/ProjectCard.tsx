import { FC } from 'react';

import Image from 'next/image';

import { BsCodeSlash } from 'react-icons/bs';
import { CgArrowsExpandUpRight } from 'react-icons/cg';

type Project = {
  title: string;
  description: string;
  date: string;
  imagePath: string;
  imageAlt: string;
  techList: string[];
  liveLink: string;
  repoLink: string;
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex flex-col gap-6 p-4 rounded-lg border-t-[1px] border-t-transparent hover:border-t-brown hover:bg-dark-brown-1 z-40">
      {/* Top Section */}
      <div className="flex gap-6">
        <figure className="w-1/2">
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
        <div className="flex flex-col gap-4 w-1/2">
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
      <div className="flex items-end gap-6">
        <div className="w-1/2">
          <ul className="flex flex-wrap gap-2">
            {project.techList.map((tech, idx) => (
              // What technologies were used
              <li
                className="py-1 px-2 rounded-lg h-fit text-sm bg-dark-brown-2"
                key={idx}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between gap-4 w-1/2">
          <p className="text-lg">{project.date}</p>
          <a
            href={project.repoLink}
            className="flex gap-2 items-center text-beige hover:text-white"
            target="_blank"
          >
            <p className="text-lg">view repo</p>
            {/* Code icon */}
            <BsCodeSlash />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
