const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0FAEF1",
        secondary: "#EFDAD7",
        night: "#1d2331",
      },
    },
  },
  plugins: [],
};
