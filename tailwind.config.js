/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px ",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        danger: "#ff453a",
        success: "#00ff00",
      },
      fontFamily: {
        dancing:
          ['Dancing Script', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}