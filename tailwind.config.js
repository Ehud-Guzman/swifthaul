/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0A1628',
        'primary-blue': '#1565C0',
        'accent-blue': '#1976D2',
        'bright-blue': '#42A5F5',
        'light-blue': '#E3F2FD',
        'text-dark': '#0D1B2A',
        'text-mid': '#37474F',
        'text-light': '#78909C',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
