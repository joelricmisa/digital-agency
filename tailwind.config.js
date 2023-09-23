/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3839",
        secondary: "#202020",
        neutral: "#F1F1F1",
        light: "#FFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage:{
        hero:'url("/src/assets/images/bgHead.png")'
      },
      width: {},
      screens: {
        xs: "400px",
        sm: "540px",
        md: "868px",
        lg: "1100px",
        xl: "1380px",
        maxWidth: "1440px",
      },
    },
  },
  plugins: [],
};
