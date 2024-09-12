import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        "custom-874": "874px",
        "mobile-large": { max: '444px' },
        larger: "1257px",
        "medium-large": { max: "975px" },
        "medium-ls": { max: "779px" },
        medium: { min: "674px" },
      },
      width: {
        large: "1030px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #DB00FF, #0D00FF)",
      },
      gap: {
        small: "-80px",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
    function ({ addComponents }:any) {
      const addComponentsType = addComponents as (components: Record<string, any>) => void;
      addComponentsType({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', /* Hide scrollbar in Firefox */
          '-ms-overflow-style': 'none', /* Hide scrollbar in Edge */
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none', /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
        },
      });
    },

    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
