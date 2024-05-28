/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'selemeni-section': "url('./src/assets/images/bg1.jpg')",
      },
    },
  },
  plugins: [],
}
