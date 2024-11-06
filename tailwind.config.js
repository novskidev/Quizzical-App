/** @type {import('tailwindcss').Config} */

import config from "./src/tailwindconfig/index";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: config.colorConfig,
      fontFamily: config.colorConfig,
    },
  },
  plugins: [],
};
