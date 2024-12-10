import { FC } from 'react';

const AnimatedBackground: FC = () => {
  return (
    <div id="background" className="border">
      <div id="orb-container">
        <div id="orb-left" className="orb orb-outer"></div>
        <div id="orb-left-inner" className="orb orb-inner"></div>
        <div id="orb-left-center" className="orb orb-center"></div>
        <div id="orb-right" className="orb orb-outer"></div>
        <div id="orb-right-inner" className="orb orb-inner"></div>
        <div id="orb-right-center" className="orb orb-center"></div>
      </div>

      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
