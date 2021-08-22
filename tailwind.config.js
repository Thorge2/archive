const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        waves: 'url("/background.svg")',
      }),

      colors: {
        sky: colors.sky,
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
