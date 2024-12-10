'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import ContactForm from './ContactForm';

const Contact: FC = () => {
  return (
    <section className="flex flex-col items-center relative mb-24">
      <span
        id="contact"
        className="absolute -top-20 opacity-0"
        aria-hidden="true"
      >
        Invisible Nav Anchor
      </span>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full font-[family-name:var(--font-universal-expansion)]"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 w-full mt-10 "
      >
        <p className="text-xl">
          Thank you for taking the time to explore my corner of the internet. I
          genuinely appreciate your interest in my work. If you have any
          questions, or just want to connect, feel free to reach out.
        </p>

        <a
          href="mailto:hicass.dev@gmail.com"
          className="w-fit text-lg text-orange hover:cursor-pointer"
        >
          hicass.dev@gmail.com
        </a>
      </motion.div>

      <ContactForm />
    </section>
  );
};

export default Contact;
