import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiTypescript, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { Project } from './components/Projects/ProjectCard';

export const navData = {
  socialLinks: [
    { icon: AiFillGithub, href: 'https://github.com/hicass' },
    { icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/cass-walters/' },
  ],
  pageLinks: [
    { text: 'about me', href: '#about' },
    { text: 'tech', href: '#tech' },
    { text: 'projects', href: '#projects' },
    { text: 'blog', href: '#blog' },
    { text: 'playground', href: '#playground' },
    { text: 'contact', href: '#contact' },
  ],
};

// TODO: Move to Sanity
export const techData = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    link: 'https://www.typescriptlang.org/',
  },
  { name: 'React', icon: FaReact, link: 'https://react.dev/' },
  { name: 'Next.js', icon: TbBrandNextjs, link: 'https://nextjs.org/' },
  { name: 'Node.js', icon: BiLogoNodejs, link: 'https://nodejs.org/en' },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    link: 'https://www.postgresql.org/',
  },
  { name: 'Git', icon: FaGitAlt, link: 'https://git-scm.com/' },
];

// TODO: Move to Sanity
export const projectData: Project[] = [
  {
    title: 'Tag Operations',
    _type: 'project',
    description:
      'Solely designed and developed a modern, responsive website for Tag Operations, aligning with the company’s brand and personality. I implemented an atomic design system to build consistent, reusable components and streamline both development and future scalability.',
    date: 'August 2023 - Present',
    imagePath: '/images/tagops.png',
    imageAlt: 'Tag Operations Landing Page',
    techList: [
      { title: 'Next.js' },
      { title: 'React' },
      { title: 'TypeScript' },
      { title: 'CSS' },
      { title: 'Google Analytics' },
      { title: 'Pipedrive' },
      { title: 'Sanity' },
      { title: 'Vercel' },
    ],
    liveLink: 'https://www.tagoperations.com/',
  },
  {
    title: 'RAMResume',
    _type: 'project',
    description:
      'As a founding engineer, I collaborated closely with designers, other engineers and stakeholders to bring RAMResume, an AI-powered career toolbox for Fordham University students—from concept to reality (Currently in development—email me for login access!)',
    date: 'July 2024 - Feb 2025',
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
      },
    ],
    liveLink: 'https://www.ramresume.com/',
  },
  {
    title: 'Custom CMS for a Private Blog',
    _type: 'project',
    description:
      'I built a custom CMS for a client seeking a secure and private online blog. To maintain the client’s privacy, the live version linked here is a demo with completely different styling. Explore the demo using the credentials: username = test, password = test123 to experience its functionality firsthand!',
    date: 'August 2024',
    imagePath: '/images/private-blog.png',
    imageAlt: 'Tag Operations Landing Page',
    techList: [
      { title: 'Next.js' },
      { title: 'Tailwind CSS' },
      { title: 'Jest' },
      { title: 'Framer Motion' },
      { title: 'Next Auth' },
      { title: 'Prisma' },
      { title: 'PostgreSQL' },
      { title: 'TinyMCE' },
      { title: 'MUI Component Library' },
    ],
    liveLink: 'https://private-blog-demo.vercel.app/admin',
  },
];

// TODO: Move to Sanity
export const playgroundData: Project[] = [
  {
    title: 'Ask Away',
    _type: 'project',
    description:
      'Ask Away is a demo Q&A page I built to explore creating animations with pure CSS versus using animation libraries. It’s a playful, non-functional site designed to test motion, layout, and user experience—all while keeping things accessible and kid-friendly.',
    date: 'November 2024',
    imagePath: '/images/ask-away.png',
    imageAlt: 'Ask Away Landing Page',
    techList: [
      { title: 'React' },
      { title: 'Next.js' },
      { title: 'Sanity' },
      { title: 'TypeScript' },
      { title: 'Tailwind CSS' },
      { title: 'CSS' },
    ],
    liveLink: 'https://ask-away-one.vercel.app/',
  },
];

// TODO: Move to Sanity
export const blogData = [
  {
    title:
      'How Building the Same Website Three Times Made Me a Better Developer',
    description:
      'I rebuilt the same website three times, each version reflecting my growth as a developer. In this article, I share what I learned and how the project helped me grow, covering everything from React basics to optimizing design, performance, discoverability, accessibility, and maintainability.',
    imagePath: '/images/blog-1.png',
    imageAlt:
      'An image of the title of the article with a before and after of the website',
    liveLink:
      'https://www.linkedin.com/pulse/how-building-same-website-three-times-made-me-better-cass-walters-uhv3c/?trackingId=JdJSG0tiSMecUZOAVHZL5g%3D%3D',
  },
];
