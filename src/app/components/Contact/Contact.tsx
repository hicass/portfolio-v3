'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import ContactForm from './ContactForm';

const Contact: FC = () => {
  return (
    <section className="flex flex-col items-center relative mb-24">
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
        className="flex flex-col gap-4 w-full mt-4"
      >
        <p className="body-txt">
          Thank you for taking the time to explore my corner of the internet. I
          genuinely appreciate your interest in my work. If you have any
          questions, or just want to connect, feel free to reach out.
        </p>

        <a
          href="mailto:hicass.dev@gmail.com"
          className="w-fit text-lg text-beige hover:text-white hover:cursor-pointer"
        >
          hicass.dev@gmail.com
        </a>
      </motion.div>

      <ContactForm />
    </section>
  );
};

export default Contact;
