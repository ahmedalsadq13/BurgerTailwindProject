/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1366px",
      },
      colors: {
        yellow: "#ffbe00",

        sand_dollar: "#efcfa0",

        paragraphColor: "#c0c0c0",
        whiteColor: "#f2f2f2",
        blackColor: "#1a1919",
        blackColor2: "#232323",
        grayColor: "#E8E9E9",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
