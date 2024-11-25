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
  {
    title: 'Mancala',
    description:
      'This project was my second endeavor in web development, demonstrating my growing expertise and passion for crafting interactive experiences. Two players take turns strategically distributing the number of pebbles contained inside each of the pits counter-clockwise around the board, until there is a winner.',
    date: 'April 2023',
    imagePath: '/images/mancala.png',
    imageAlt: 'Mancala Landing Page',
    techList: [
      { title: 'JavaScript' },
      { title: 'HTML' },
      { title: 'CSS' },
      { title: 'Github Pages' },
    ],
    liveLink: 'https://hicass.github.io/mancala/',
    repoLink: 'https://github.com/hicass/mancala',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'This was my inaugural project, a Tic Tac Toe game that marked the beginning of my web development journey. A modern electronic rendition of the classic board game, the objective is to be the first to form a horizontal, vertical, or diagonal line of three of your markers, thereby securing victory.',
    date: 'April 2023',
    imagePath: '/images/tictactoe.png',
    imageAlt: 'Tic Tac Toe Landing Page',
    techList: [
      { title: 'JavaScript' },
      { title: 'HTML' },
      { title: 'CSS' },
      { title: 'Github Pages' },
    ],
    liveLink: 'https://hicass.github.io/Tic-Tac-Toe/',
    repoLink: 'https://github.com/hicass/Tic-Tac-Toe',
  },
];

const Projects: FC = () => {
  return (
    <section className="flex flex-col mr-12 pt-20 pb-12 items-center relative">
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
        className="w-full mt-4 body-txt"
      >
        My little corner for trying out new tech and building fun projects :)
      </motion.p>

      <div className="flex flex-col items-center gap-10 mt-6">
        {playgroundData.map((p, idx) => (
          <ProjectCard project={p} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
