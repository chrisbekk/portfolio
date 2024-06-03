/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        custom_green: '#A7C07F',
      },
    },
  },
  plugins: [],
};
