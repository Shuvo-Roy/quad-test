/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgBack' : '#eeeff0',
        'Orange' : '#f99f1c',
        'red' : '#fc6011',
        'white' : '#fff',
      },
    },
  },
  plugins: [],
}

