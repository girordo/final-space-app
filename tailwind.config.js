const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.purple,
      },
    },
  },
  plugins: [],
};
