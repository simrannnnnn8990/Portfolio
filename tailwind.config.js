/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#1A1A1A',
          200: '#2A2A2A',
          300: '#3A3A3A',
        },
        gold: {
          DEFAULT: '#C5A267',
          light: '#D4B87A',
          dark: '#A8884F',
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}