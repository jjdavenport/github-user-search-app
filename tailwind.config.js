/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        blue: "hsl(212, 100%, 50%)",
        white: "hsl(0, 0%, 100%)",
        grayBlue: "hsl(217, 20%, 51%)",
        marine: "hsl(217, 35%, 45%)",
        darkBlue: "hsl(217, 21%, 21%)",
        darkWhite: "hsl(227, 100%, 98%)",
        black: "hsl(220, 40%, 13%)",
        lightBlack: "hsl(222, 41%, 20%)",
      },
      fontFamily: {
        custom: ["space mono", "sans-serif"],
      },
      backgroundImage: {
        search: "url('../src/assets/icon-search.svg')",
      },
      backgroundSize: {
        mobile: "24px",
      },
    },
  },
  plugins: [],
};
