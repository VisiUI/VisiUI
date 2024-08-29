import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],

  theme: {
    extend: {
      fontFamily: {
        colvetica: ["var(--font-colvetica)", "sans-serif"],
      },
      screens: {
        'custom-874': '874px',
        'larger': '1257px',
        'medium-large': {'max': '975px'},
        'medium': {'min': '674px'}
      },
      width: {
        'large': '1030px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #DB00FF, #0D00FF)',
      },
      gap: {
        'small': '-80px',
      },
    },
  },
  plugins: [],
};

export default config;
