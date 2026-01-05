/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        secondary: "#22c55e", // Green
        danger: "#ef4444",
        surfaceDark: "#0f172a",
        cardDark: "#020617",
      },
    },
  },
  plugins: [],
};
