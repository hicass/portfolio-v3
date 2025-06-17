'use client';
import { motion } from 'framer-motion';
import { slideInFastFR } from '../utils/animations';
import { AboutData } from '@/types';
import { PortableText } from 'next-sanity';

export default function About({ bio }: AboutData) {
  return (
    <motion.section
      id="about"
      variants={slideInFastFR}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className="relative border-l border-orange pl-6 scroll-m-40"
    >
      <h2 className="font-[family-name:var(--font-universal-expansion)]">
        about me
      </h2>

      <div className="flex flex-col gap-6 mt-10 text-2xl">
        <PortableText value={bio} />
      </div>
    </motion.section>
  );
}
