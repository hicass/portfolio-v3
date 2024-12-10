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
        'green': 'var(--green)',
        'dark-green-1': 'var(--dark-green-1)',
        'dark-green-2': 'var(--dark-green-2)',
      },
    },
  },
  plugins: [],
};
export default config;
