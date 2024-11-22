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

const slideInRVars: Variants = {
  offscreen: {
    x: 10,
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

const navData = {
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

const Nav: FC = () => {
  return (
    <>
      <motion.nav
        variants={slideInRVars}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="hidden md:flex flex-row w-full justify-end sticky top-5 -mt-36 px-8 pb-2 text-xl"
      >
        <ul className="flex flex-col items-end">
          {navData.pageLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="text-beige hover:text-white">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      <motion.aside
        variants={slideInLVars}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="hidden md:flex flex-row w-fit sticky top-6 -mt-24 px-8"
      >
        <ul className="flex flex-col gap-4">
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
