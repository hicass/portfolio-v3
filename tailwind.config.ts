import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        'beige': 'var(--beige)',
        'brown': 'var(--brown)',
        'dark-brown-1': 'var(--dark-brown-1)',
        'dark-brown-2': 'var(--dark-brown-2)',
      },
    },
  },
  plugins: [],
};
export default config;
