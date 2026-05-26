/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    required('@tailwindcss/forms')
  ],
}
