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
      },
      colors: {
        "cmr-red" : {
          500 : '#941530'
        },
        "cmr-gray":{
          500 : "#808080",
          700: "#bfbfbf",
          900: "#ebebeb"
        }
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