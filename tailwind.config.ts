import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        CRM_primary: {
          100: '#e8b595',
          200: '#c99879',
          300: '#c49374',
        },
        CRM_accent: {
          100: '#ab3044',
          200: '#ffc5ce',
        },
        CRM_text: {
          100: '#353036',
          200: '#5f5960',
        },
        CRM_bg: {
          100: '#ffffff',
          200: '#f5f5f5',
          300: '#cccccc',
        },
        screens:{
          sm: '576px',
          md: '768px',
          lg:"992px",
          xl:"1200px",
          '2xl': '1400px',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
