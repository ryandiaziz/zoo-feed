/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans'],
        amatic: ['Amatic SC']
      },
      colors: {
        'z-green': '#019267',
      },
      backgroundImage: {
        'bird': "url('assets/bird.png')",
        'lion': "url('assets/lion.png')",
      }
    },
  },
  plugins: [],
}
