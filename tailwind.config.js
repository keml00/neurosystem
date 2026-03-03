/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ral-grey': '#121212',
        'neon-cyan': '#00f2ff',
        'neon-orange': '#ff6b35',
      },
      boxShadow: {
        'neon-orange': '0 0 20px rgba(255, 107, 53, 0.4)',
        'neon-orange-hover': '0 0 30px rgba(255, 107, 53, 0.6)',
        'neon-cyan': '0 0 15px rgba(0, 242, 255, 0.1)',
        'neon-cyan-hover': '0 0 25px rgba(0, 242, 255, 0.3)',
      }
    },
  },
  plugins: [],
}

