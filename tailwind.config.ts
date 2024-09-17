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
        'cream': '#F6F2F0',
        'beige': '#a89c90',
        'brown': '#4a3f33',
        'dark-brown-1': '#1d1c1b',
        'dark-brown-2': '#2c2720',
      },
    },
  },
  plugins: [],
};
export default config;
