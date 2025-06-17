'use client';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

// Function to render the contact section on the main page
export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center relative mb-24 scroll-m-36">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full font-[family-name:var(--font-universal-expansion)]"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
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
