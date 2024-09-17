import { FC } from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Tag Operations',
    description:
      "Solely designed and developed a modern, user-friendly website for Tag Ops, a company specializing in operational support. I created a responsive and engaging design that aligns with the company's personality.",
    date: 'May 2024',
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
      <h2 className="w-full font-[family-name:var(--font-universal-expansion)]">
        projects
      </h2>

      <p className="w-full mt-10 text-2xl">
        Take a look at some of the projects I've been involved in.
      </p>

      <div id="projects" className="flex flex-col items-center gap-16 mt-10">
        {projectData.map((p, idx) => (
          <ProjectCard project={p} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
