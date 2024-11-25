import { FC } from 'react';
import Image from 'next/image';

import boops from '../../../../public/assets/boops.png';
import tendrils1 from '../../../../public/assets/wave-tendrils.png';
import tendrils2 from '../../../../public/assets/tendrils.png';

const DrawnBackground: FC = () => {
  return (
    <>
      <Image
        src={boops}
        placeholder="blur"
        className="absolute top-0 opacity-0 lg:opacity-70 floating-fast"
        alt="Little dots floating whimsically"
        priority={true}
      />
      <Image
        src={tendrils1}
        placeholder="blur"
        className="absolute top-0 opacity-0 lg:opacity-30 floating-slow"
        alt="Smoke like lines appear behind the floating dots in a wavy pattern"
        priority={true}
      />
      <Image
        src={tendrils2}
        placeholder="blur"
        className="absolute top-0 opacity-0 lg:opacity-20"
        alt="Smoke like lines appear behind the wavy lines in a more steady fashion"
        priority={true}
      />
    </>
  );
};

export default DrawnBackground;
