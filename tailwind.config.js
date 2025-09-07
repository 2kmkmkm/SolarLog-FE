/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FFA300",
        sub: "#FF770F",
        yellow: "#FFC326",
        darkgray: "#636363",
        gray: "#989898",
        lightgray: "#C5C5C5",
        lightlightgray: "#EFEFEF",
        blue: "#007DF2",
        skyblue: "#3FB6FF",
        green: "#72BC29",
        lightgreen: "#F0F6CE",
        red: "#FF3135",
        pink: "#FF5C5E",
        black: "#363636",
        white: "#FAFAFA",
        bg: "#EDEDED",
      },
      boxShadow: {
        input: "0px 2px 10px 0px rgba(0,0,0,0.05)",
        navigation: "0px -2px 20px 0px rgba(0,0,0,0.05)",
        header: "0px 2px 20px 0px rgba(0,0,0,0.0.05)",
        box: "0px 2px 50px 0px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
