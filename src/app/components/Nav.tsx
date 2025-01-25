'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { slideInSlowFL, slideInSlowFR } from '@/app/utils/animations';
import { navData } from '@/app/pageData';

const Nav: FC = () => {
  const pageLinkElements = navData.pageLinks.map((link, idx) => (
    <li key={idx}>
      <a href={link.href} className="text-white hover:text-orange">
        {link.text}
      </a>
    </li>
  ));

  const socialLinkElements = navData.socialLinks.map((link, idx) => (
    <li key={idx}>
      <a
        href={link.href}
        target="_blank"
        className="text-white hover:text-orange text-3xl"
      >
        <link.icon />
      </a>
    </li>
  ));

  return (
    <>
      <motion.nav
        variants={slideInSlowFR}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="hidden md:flex flex-row w-full justify-end sticky top-5 -mt-36 px-8 pb-2 text-xl"
      >
        <ul className="flex flex-col items-end">{pageLinkElements}</ul>
      </motion.nav>

      <motion.aside
        variants={slideInSlowFL}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="hidden md:flex flex-row w-fit sticky top-6 -mt-24 px-8"
      >
        <ul className="flex flex-col gap-4">{socialLinkElements}</ul>
      </motion.aside>
    </>
  );
};

export default Nav;
