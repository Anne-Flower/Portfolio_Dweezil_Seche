import type { Config } from "tailwindcss";
import { colors } from "./public/colors/colors";

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   yellowdark: '#5c572d',
    //   yellow: '#ebd515',

    // },
    extend: {
      colors: {
        greyNew: '#B6B6B6',
        black: '#222222',
        beige: '#F7F4EF',
        yellowdark: '#8f3270',
        yellow: '#ebd515',
        white2: '#F8F7F0',
        greyRingCursor: '#D9D9D9',
        greyLink: '#C5C5C5'
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
