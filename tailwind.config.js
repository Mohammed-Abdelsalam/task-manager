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
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "bounce-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.02)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        checkIconAnimation: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        colorShift: {
          "0%, 100%": {
            "background-image":
              "linear-gradient(to bottom right, var(--tw-gradient-from-nord-7), var(--tw-gradient-to-nord-8))",
          },
          "25%": {
            "background-image":
              "linear-gradient(to bottom right, var(--tw-gradient-from-nord-8), var(--tw-gradient-to-nord-9))",
          },
          "50%": {
            "background-image":
              "linear-gradient(to bottom right, var(--tw-gradient-from-nord-9), var(--tw-gradient-to-nord-10))",
          },
          "75%": {
            "background-image":
              "linear-gradient(to bottom right, var(--tw-gradient-from-nord-10), var(--tw-gradient-to-nord-7))",
          },
        },
        iconColorShift: {
          "0%, 100%": {
            "background-image":
              "linear-gradient(to right, var(--tw-gradient-from-nord-7), var(--tw-gradient-to-nord-8))",
          },
          "25%": {
            "background-image":
              "linear-gradient(to right, var(--tw-gradient-from-nord-8), var(--tw-gradient-to-nord-9))",
          },
          "50%": {
            "background-image":
              "linear-gradient(to right, var(--tw-gradient-from-nord-9), var(--tw-gradient-to-nord-10))",
          },
          "75%": {
            "background-image":
              "linear-gradient(to right, var(--tw-gradient-from-nord-10), var(--tw-gradient-to-nord-7))",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        gradientMove: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.3s ease-out",
        "bounce-in": "bounce-in 0.4s ease-out",
        "check-icon": "checkIconAnimation 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "color-shift": "colorShift 10s linear infinite",
        "icon-color": "iconColorShift 10s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "gradient-move": "gradientMove 8s ease infinite",
        ripple: "ripple 1s ease-out infinite",
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
