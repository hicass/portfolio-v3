import { FC } from 'react';

import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';

const techData = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: TbBrandNextjs },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Node.js', icon: BiLogoNodejs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const Tech: FC = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="w-full font-[family-name:var(--font-universal-expansion)]">
        tech
      </h2>

      <div className="flex flex-row flex-wrap justify-center w-2/3 gap-24 mt-10">
        {techData.map((tech, idx) => (
          <div className="flex flex-col items-center gap-4 text-7xl" key={idx}>
            <tech.icon />
            <p className="text-xl">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
