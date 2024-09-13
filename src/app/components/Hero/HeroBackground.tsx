import { FC } from 'react';
import Image from 'next/image';

import boops from '../../../../public/assets/boops.png';
import tendrils1 from '../../../../public/assets/wave-tendrils.png';
import tendrils2 from '../../../../public/assets/tendrils.png';

const HeroBackground: FC = () => {
  return (
    <>
      <Image
        src={boops}
        placeholder="blur"
        className="parallax-boops"
        id="parallax-top-boops"
        alt="Little dots floating whimsically"
        priority={true}
      />
      <Image
        src={tendrils1}
        placeholder="blur"
        className="parallax-boops"
        id="parallax-top-tendrils1"
        alt="Smoke like lines appear behind the floating dots in a wavy pattern"
        priority={true}
      />
      <Image
        src={tendrils2}
        placeholder="blur"
        className="parallax-boops"
        id="parallax-top-tendrils2"
        alt="Smoke like lines appear behind the wavy lines in a more steady fashion"
        priority={true}
      />
    </>
  );
};

export default HeroBackground;
