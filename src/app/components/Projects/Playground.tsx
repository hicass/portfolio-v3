'use client';
import { FC } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const playgroundData = [
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

const Projects: FC = () => {
  return (
    <section className="flex flex-col items-center relative border-b border-orange pb-6">
      <span
        id="playground"
        className="absolute -top-20 opacity-0"
        aria-hidden="true"
      >
        Invisible Nav Anchor
      </span>{' '}
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
        {playgroundData.map((p, idx) => (
          <ProjectCard project={p} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
