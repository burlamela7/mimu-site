/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mimu_bg: '#f5f5f0',
        mimu_gold: '#d4af37',
        mimu_dark: '#222222'
      }
    },
  },
  plugins: [],
};
