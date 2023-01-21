const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ],
};
