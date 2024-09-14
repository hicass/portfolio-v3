import { FC } from 'react';

const aboutData = [
  'Creativity is at the heart of everything I do. I view coding as an art form, where every line of code has the potential to be elegant and expressive. I value the importance of visual appeal, attention to detail, and believe in the power that blending creativity and technology has.',
  'As a coding bootcamp graduate, I have developed a strong aptitude for fast learning, enabling me to quickly grasp new concepts and technologies. I thrive on the excitement of exploring and mastering cutting-edge tools and frameworks, continuously expanding my skill set.',
  'Beyond the code, I am an artist who loves expressing myself through digital mediums. I also enjoy getting out into nature, spending quality time with my dog and partner, and diving into the immersive worlds of video games when it’s time to unwind.',
];

const About: FC = () => {
  return (
    <section>
      <h2 className="font-[family-name:var(--font-universal-expansion)]">about me</h2>

      <div className='flex flex-col gap-6 mt-10'>
        {aboutData.map((p, idx) => (
          <p key={idx} className='text-2xl'>{p}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
