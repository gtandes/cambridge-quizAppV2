import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },

  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightslategray: {
          "100": "#8692a6",
          "200": "rgba(134, 146, 166, 0.5)",
        },
        dimgray: "#696f79",
        forestgreen: "#08ad36",
        orangered: "#f24e1e",
        coral: "#de6944",
        black: "#000",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#eeeef0",
        },
        gray: "rgba(0, 0, 0, 0.52)",
        gainsboro: "#dadada",
        snow: "#fbf9f9",
        darkturquoise: "#00daf7",
        silver: "#bababa",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        gayathri: "Gayathri",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      lgi: "1.19rem",
      "11xl": "1.88rem",
      "3xl": "1.38rem",
      "4xl": "1.44rem",
      lg: "1.13rem",
      "14xl": "2.06rem",
      base: "1rem",
      mid: "1.06rem",
      "10xl": "1.81rem",
      sm: "0.88rem",
      "6xl": "1.56rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },

  darkMode: "class",
  plugins: [nextui()],
};
export default config;
