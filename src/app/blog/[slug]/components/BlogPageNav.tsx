'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navData } from '@/app/pageData';
import { slideInSlowFL } from '@/app/utils/animations';
import { HiMiniArrowLeftStartOnRectangle } from 'react-icons/hi2';
import { AiOutlineHome } from 'react-icons/ai';

const BlogPageNav: FC = () => {
  const [fromSameDomain, setFromSameDomain] = useState(false);

  // useEffect to help determine if the user is from the same domain or not
  useEffect(() => {
    const referrer = document.referrer;
    const currentDomain = window.location.hostname;

    try {
      const referrerDomain = new URL(referrer).hostname;
      if (referrer && referrerDomain === currentDomain) {
        setFromSameDomain(true);
      }
    } catch {
      // Fallback in case referrer isn't a valid URL
      setFromSameDomain(false);
    }
  }, []);

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
    <motion.nav
      variants={slideInSlowFL}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: true,
        amount: 0.4,
      }}
      className="hidden w-full md:flex flex-row sticky top-6 -mt-24 px-8"
    >
      <ul className="flex flex-col items-center gap-4">
        {socialLinkElements}

        <li className={`hover:cursor-pointer ${fromSameDomain && '-ml-2'}`}>
          <Link
            href="https://www.hicass.dev/"
            className="text-white hover:text-orange text-3xl"
          >
            {/* // Dynamically display either an arrow back or home icon depending
            // on if the user if from the same domain or not */}
            {fromSameDomain ? (
              <HiMiniArrowLeftStartOnRectangle />
            ) : (
              <AiOutlineHome />
            )}
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default BlogPageNav;
