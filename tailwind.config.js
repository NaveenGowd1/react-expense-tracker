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
        bgDark: "#0B1120",
        cardDark: "#111827",
        borderDark: "#1F2937",
        textMain: "#E5E7EB",
        textMuted: "#9CA3AF",
        accent: "#6366F1",
        success: "#22C55E",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};

