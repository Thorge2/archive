const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: ["./index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
