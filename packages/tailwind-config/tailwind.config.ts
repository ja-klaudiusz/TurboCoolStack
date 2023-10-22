import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInWithUp: 'fadeInWithUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0%' },
          to: { opacity: '100%' },
        },
        fadeInWithUp: {
          from: { transform: 'translateY(10px)', opacity: '0%' },
          to: { transform: 'translateY(0px)', opacity: '100%' },
        },
      },
      colors: {
        dPri: '#726dfe',
        lPri: '#9a97fc',
        dSec: '#808aac',
        mSec: '#4a5162',
        lSec: '#535a6d',
        pink: '#d50ad8',
        'pink-dark': '#98009a',
        purple: '#5356FB',

        'app-dark-1': '#11131F',
        'app-dark-2': '#130f25',
        'app-dark-3': '#100c1e',
        'app-dark-4': '#17132d',
        'app-dark-5': '#2c244f',
        'app-dark-6': '#443f5b',
        'app-dark-7': '#2c2a37',
        'app-dark-8': '#664bc4',
        'app-dark-9': '#5a12ae',
        'app-dark-10': '#837dad',

        'app-light-1': '#FAFAFA',
        'app-light-2': '#ddd9fb',
        'app-light-3': '#e6e3fe',
        'app-light-4': '#eae7ff',
        'app-light-5': '#d1ccfa',
        'app-light-8': '#c2bbf0',
        'app-light-6': '#a298e9',
        'app-light-7': '#6d669f',
        'app-light-9': '#665eab',

        'light-gray': '#E5E5E5',
        'thin-light-purple': '#5b3e7f',
        'thin-light-gray': '#858D98',
        'thin-dark-purple': '#beaad7',
        'dark-gray': '#374557',
        'lighter-gray': '#878F9A',
        'light-disabled-input': '#cdd6dd',
        'light-purple': '#E3E4FE',
        gold: '#F2994A',
        'light-green': '#27AE60',
        'light-red': '#EB5757',
        'white-opacity': '#7B7EFC',
        'dark-white': '#1D1F2F',
        'dark-disabled-input': '#5b5e73',
        'dark-light-purple': '#5356fb29',
        'dark-light-purple-no-transp': '#252850',
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;
