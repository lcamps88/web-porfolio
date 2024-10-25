const { nextui } = require('@nextui-org/theme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Onest', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        red_card: '#FF6F61',
        blue_card: '#92A8D1',
        green_card: '#88B04B',
        pink_card: '#F7CAC9',
      },
      backgroundImage: {
        about: "url('/images/about_us.webp')",
        custom_gradient:
          'linear-gradient(to bottom, #000000, #302a2a 35%, #4d3d3b 60%, #766246 80%)',
        custom_gradient_up:
          'linear-gradient(to bottom, #766246, #4d3d3b 35%, #302a2a 60%, #000000 80%)',
      },
      screens: {
        xsm: '414px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
