/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // 👈 Enables toggling with class
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#1e293b',
        accent: '#facc15',
        muted: '#94a3b8',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        hero: '32rem',
      },
      screens: {
        'xs': '375px', // 👈 Custom breakpoint
        '3xl': '1600px' // 👈 Super wide screens
      },
    },
  },
  plugins: [],
}