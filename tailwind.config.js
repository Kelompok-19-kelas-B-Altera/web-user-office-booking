/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tiny: "230px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1366px",
    },
    colors: {
      white: "#ffffff",
      grey: "#f1f1f1",
      blue: "#197beb",
      "dark-blue": "#070723",
      black: "#1e1e1e",
      secondary: "rgba(7, 7, 35, 0.5)",
    },
  },
  plugins: [],
};
