import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiTypescript, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoNodejs } from 'react-icons/bi';
import { SiJest } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { BiSolidFileCss } from 'react-icons/bi';

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
  {
    name: 'CSS',
    icon: BiSolidFileCss,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  { name: 'React', icon: FaReact, link: 'https://react.dev/' },
  { name: 'Next.js', icon: TbBrandNextjs, link: 'https://nextjs.org/' },
  {
    name: 'Tailwind CSS',
    icon: RiTailwindCssFill,
    link: 'https://tailwindcss.com/',
  },
  { name: 'Jest', icon: SiJest, link: 'https://jestjs.io/' },
  { name: 'Node.js', icon: BiLogoNodejs, link: 'https://nodejs.org/en/' },
  { name: 'Prisma', icon: SiPrisma, link: 'https://www.prisma.io/' },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    link: 'https://www.postgresql.org/',
  },
  { name: 'Express', icon: SiExpress, link: 'https://expressjs.com/' },
];