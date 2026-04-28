/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'future-dusk': '#1a1a2e',
        'transformative-teal': '#00d9b8',
        'amber-haze': '#ffb347',
        'cloud-dancer': '#f5f5f0',
      },
      boxShadow: {
        'amber-glow': '0 0 20px rgba(255, 179, 71, 0.4)',
        'amber-glow-hover': '0 0 30px rgba(255, 179, 71, 0.6)',
        'teal-glow': '0 0 15px rgba(0, 217, 184, 0.1)',
        'teal-glow-hover': '0 0 25px rgba(0, 217, 184, 0.3)',
      }
    },
  },
  plugins: [],
}

