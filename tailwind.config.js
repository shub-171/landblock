/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/*.{html,js}","pages/dashboard/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

