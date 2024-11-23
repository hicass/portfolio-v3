'use client';
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const slideInLVars: Variants = {
  offscreen: {
    x: -10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3.5,
    },
  },
};

const slideUpVars: Variants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3.5,
    },
  },
};

const navData = {
  socialLinks: [
    { icon: AiFillGithub, href: 'https://github.com/hicass' },
    { icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/cass-walters/' },
  ],
  pageLinks: [
    { text: 'about me', view: 'about' },
    { text: 'tech', view: 'tech' },
    { text: 'projects', view: 'projects' },
    { text: 'playground', view: 'playground' },
    { text: 'contact', view: 'contact' },
  ],
};

interface NavProps {
  activeView: string;
  setActiveView: (data: string) => void;
}

const Nav: FC<NavProps> = ({ activeView, setActiveView }) => {
  return (
    <>
      <motion.nav
        variants={slideInLVars}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="mt-12 flex flex-row w-full lg:w-fit pr-6 text-xl"
      >
        <ul className="flex w-full justify-between flex-col">
          {navData.pageLinks.map((link, idx) => (
            <li key={idx}>
              <button
                onClick={() => setActiveView(link.view)}
                className={`${activeView === link.view ? 'text-white text-2xl': 'text-beige'} hover:text-2xl hover:text-white`}
              >
                {link.text}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      <motion.aside
        variants={slideUpVars}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="flex-row w-fit absolute bottom-0"
      >
        <ul className="flex gap-4">
          {navData.socialLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                target="_blank"
                className="text-beige hover:text-white text-3xl"
              >
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
      </motion.aside>
    </>
  );
};

export default Nav;
