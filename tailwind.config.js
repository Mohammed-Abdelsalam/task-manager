/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nord: {
          0: "#2E3440",
          1: "#3B4252",
          2: "#434C5E",
          3: "#4C566A",
          4: "#D8DEE9",
          5: "#E5E9F0",
          6: "#ECEFF4",
          7: "#8FBCBB",
          8: "#88C0D0",
          9: "#81A1C1",
          10: "#5E81AC",
          11: "#BF616A",
          12: "#D08770",
          13: "#EBCB8B",
          14: "#A3BE8C",
          15: "#B48EAD",
        },
        theme: {
          surface: "var(--theme-surface, #ECEFF4)",
          "surface-light": "var(--theme-surface-light, #E5E9F0)",
          text: "var(--theme-text, #2E3440)",
          "text-light": "var(--theme-text-light, #4C566A)",
          primary: "var(--theme-primary, #5E81AC)",
          secondary: "var(--theme-secondary, #81A1C1)",
          accent: "var(--theme-accent, #88C0D0)",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      backgroundSize: {
        "gradient-move": "200% 200%",
      },
    },
  },
  plugins: [],
};
