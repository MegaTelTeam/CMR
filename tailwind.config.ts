import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
import { PluginAPI } from "tailwindcss/types/config";

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
        "cmr-red" : {
          500 : '#941530'
        },
<<<<<<< HEAD
        "cmr-gray":{
          500 : "#808080",
          700: "#bfbfbf",
          900: "#ebebeb"
=======
        screens:{
          sm: '576px',
          md: '768px',
          lg:"992px",
          xl:"1200px",
          '2xl': '1400px',
>>>>>>> b4a19d36de5c1eeb1acd13487e0a3fe2a9150076
        }
      }

    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ]
};
export default config;
