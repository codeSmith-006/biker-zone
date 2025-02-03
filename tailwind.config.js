/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            pops: ["Poppins", "sans-serif"],
        },
        colors: {
            btn: "#e76f51",
            dark: "#383838",
        },
    },
    },
    plugins: [],
  }