/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        status_bar: 'url(/statusbar.png)',
      },
      fontFamily: {
        primary: ['Urbanist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        custom_green: '#A7C07F',
        custom_brown: '#D5C5AB',
        custom_orange: '#E69875',
        custom_red: '#E77E7F',
        custom_mg_orange: '#DD6C24',
      },
    },
  },
  plugins: [],
};
