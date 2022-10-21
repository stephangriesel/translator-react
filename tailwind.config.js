/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'black': '0px -3px 400px -4px rgba(219,214,214,0.23)',
      }
    },
  },
  plugins: [],
}