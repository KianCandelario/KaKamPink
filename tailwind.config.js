/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-shade-one': '#FEE3EC',
        'pink-shade-two': '#F9C5D5',
        'pink-shade-three': '#F999B7',
        'pink-shade-four': '#F2789F',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
