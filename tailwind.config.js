module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "swipe-up": {
          "0%": {
            opacity: "0",
            // transform: "translateY(0)",
          },
          "100%": {
            opacity: "1",
            // transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "swipe-up": "swipe-up 0.3s ease-in-out",
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
