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
      animation:{
        "loop-scroll-left":"loop-scroll-left 60s infinite linear",
        "loop-scroll-right":"loop-scroll-right 60s infinite linear"
      },
      keyframes:{
        "loop-scroll-left": {
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"}
        },
        "loop-scroll-right": {
          from:{transform:"translateX(-100%)"},
          to:{transform:"translateX(0)"}
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cmr-gradient": "linear-gradient(90deg, #000000 0%, #575757 43%, #808080 48.62%, #941530 63.68%)",
        "cmr-bluegreen": "linear-gradient(90deg, #1075BF 0%, #01F16C 100%)",
      },
      colors: {
        "cmr-red" : {
          400: '#B12F3F',
          500 : '#941530'
        },
        "cmr-gray":{
          500 : "#808080",
          700: "#bfbfbf",
          900: "#ebebeb"
        },
        "cmr-blue": {
          400: '#1075BF',
          500: '#0066CC'
        },
        "cmr-green": {
          400: '#01F16C',
          500: '#00CC5A'
        },
        "cmr-background": {
          light: '#F6F6F6',
          section: '#EDEDF9'
        }
      },
      boxShadow: {
        'cmr': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cmr-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'cmr-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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
  darkMode: "class",
  plugins: [
    nextui(),
  ]
};
export default config;