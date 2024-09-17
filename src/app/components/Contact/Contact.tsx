import { FC } from 'react';
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
      <h2 className="w-full font-[family-name:var(--font-universal-expansion)]">
        Contact
      </h2>

      <div className="flex flex-col gap-4 w-full mt-10 ">
        <p className="text-2xl">
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
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;
