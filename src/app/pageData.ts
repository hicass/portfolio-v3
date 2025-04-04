import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiTypescript, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';

export const navData = {
  socialLinks: [
    { icon: AiFillGithub, href: 'https://github.com/hicass' },
    { icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/cass-walters/' },
  ],
  pageLinks: [
    { text: 'about me', href: '#about' },
    { text: 'tech', href: '#tech' },
    { text: 'projects', href: '#projects' },
    { text: 'playground', href: '#playground' },
    { text: 'contact', href: '#contact' },
  ],
};

export const aboutData = [
  'With a diverse background, I bring a unique perspective and an adaptable, fast-learning approach to every project. I am passionate about creating elegant and expressive digital experiences, delivering creative, high-quality solutions with a strong emphasis on scalability and maintainability.',
  'To me, coding is an art form where every line has the potential to blend creativity and technology into something impactful. I value visual appeal, attention to detail, and the power of innovative design to craft memorable user experiences.',
  'Beyond the code, I am an artist at heart, expressing myself through digital mediums. I also enjoy connecting with nature, spending quality time with my dog and partner, and immersing myself in the worlds of video games to recharge and find inspiration.',
];

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

export const projectData = [
  {
    title: 'Tag Operations',
    description:
      "Solely designed and developed a modern, user-friendly website for Tag Ops, a company specializing in operational support. I created a responsive and engaging design that aligns with the company's personality.",
    date: 'December 2023 - Present',
    imagePath: '/images/tagops.png',
    imageAlt: 'Tag Operations Landing Page',
    techList: [
      { title: 'Next.js' },
      { title: 'Tailwind CSS' },
      { title: 'Email.js' },
      { title: 'Framer Motion' },
      { title: 'Vercel' },
    ],
    liveLink: 'https://www.tagoperations.com/',
    repoLink: 'https://github.com/hicass/tag-ops-v3',
  },
  {
    title: 'RAMResume',
    description:
      'As a founding engineer, I collaborate closely with designers, other engineers and stakeholders to bring RAMResume, an AI-powered career toolbox for Fordham University students—from concept to reality (Currently in development—email me for login access!)',
    date: 'July 2024 - Present',
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
        link: 'https://platform.openai.com/docs/overview',
      },
    ],
    liveLink: 'https://www.ramresume.com/',
  },
  {
    title: 'Custom CMS for a Private Blog',
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

export const playgroundData = [
  {
    title: 'Ask Away',
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
  {
    title: 'Whiskered Grapes Co.',
    description:
      'Whiskered Grapes Co. is a digital space for a whimsical wine venture, managed by the fictional "Pepperoni family." Who stand out for their quirky ingredients of beards and oregano. I conceived this project to delve deeper into the world of React, simultaneously honing my frontend skills.',
    date: 'October 2023',
    imagePath: '/images/wgc.png',
    imageAlt: 'Whiskered Grapes Co Landing Page',
    techList: [
      { title: 'React' },
      { title: 'Node.js' },
      { title: 'Express.js' },
      { title: 'MongoDB' },
      { title: 'Mongoose' },
      {
        title: 'CSS',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      { title: 'Heroku', link: 'https://www.heroku.com/' },
    ],
    liveLink: 'https://whiskered-grapes-co-9786d5309a36.herokuapp.com/',
    repoLink: 'https://github.com/hicass/whiskered-grapes-co',
  },
  {
    title: 'Chirp',
    description:
      'Chirp is a Twitter mock app specifically for complaining. It uses an emotion analysis API to accept or reject posts based on complaint-like sentiments. I developed and designed this project during my coding bootcamp, conquering the challenge of building it in just five days.',
    date: 'May 2023',
    imagePath: '/images/chirp.png',
    imageAlt: 'Chirp Landing Page',
    techList: [
      {
        title: 'JavaScript',
      },
      {
        title: 'CSS',
      },
      { title: 'Heroku' },
      { title: 'MongoDB' },
      { title: 'Express.js' },
      { title: 'Node.js' },
      {
        title: 'Twinword API',
        link: 'https://www.twinword.com/api/sentiment-analysis.php',
      },
    ],
    liveLink: 'https://chirpcw.herokuapp.com/',
    repoLink: 'https://github.com/hicass/chirp',
  },
];
