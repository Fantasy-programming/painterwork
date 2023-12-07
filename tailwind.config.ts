import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        colorwork: {
          primary: '#222222',
          secondary: '#00798C',
          accent: '#D67AB1',
          neutral: '#1F1F1F',
          'base-100': '#FBF9FF',
          info: '#00B1CC',
          success: '#C7D9B7',
          warning: '#ab7700',
          error: '#ff4b64',
        },
        darkwork: {
          primary: '#dedede',
          secondary: '#00798C',
          accent: '#D67AB1',
          neutral: '#e0e0e0',
          'base-100': '#2e2e2e',
          info: '#00B1CC',
          success: '#C7D9B7',
          warning: '#ab7700',
          error: '#ff4b64',
        },
      },
    ],
  },
};

export default config;
