// tailwind.config.js

module.exports = {
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
      },
      spacing: {
        '15p': '15%',
        '10p': '10%',
        '5p': '5%',
        '35p': '35%',
        '25p': '25%',
        '28p': '28%',
        '40p': '40%',
        '80p': '80%',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
    },
  },
  plugins: [],
};
