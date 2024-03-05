/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'azul_yura': '#15458E',
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
        },
      },
    },
  },
};
