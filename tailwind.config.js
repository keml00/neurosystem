/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'future-dusk': '#0C0D1A',
        'transformative-teal': '#30D5C8',
        'amber-haze': '#FFB347',
        'cloud-dancer': '#F5F5F7',
      },
      boxShadow: {
        'amber-glow': '0 0 20px rgba(255, 179, 71, 0.4)',
        'amber-glow-hover': '0 0 30px rgba(255, 179, 71, 0.6)',
        'teal-glow': '0 0 15px rgba(48, 213, 200, 0.1)',
        'teal-glow-hover': '0 0 25px rgba(48, 213, 200, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

