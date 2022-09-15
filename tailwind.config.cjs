/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: '#293462',
        buttonHover: '#394989',
        secondaryColor: '#394989',
      }
    },
  },
  plugins: [],
}
