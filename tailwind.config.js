/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7d33ff',
        'primary-dark': '#6a2bd9',
      },
    },
  },
  plugins: [],
}
