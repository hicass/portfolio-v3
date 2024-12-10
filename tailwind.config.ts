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
        'orange': 'var(--orange)',
        'blue': 'var(--blue)',
        'dark-blue-1': 'var(--dark-blue-1)',
        'dark-blue-2': 'var(--dark-blue-2)',
      },
    },
  },
  plugins: [],
};
export default config;
