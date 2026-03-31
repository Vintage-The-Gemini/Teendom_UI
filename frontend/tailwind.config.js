/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'condensed': ['"Barlow Condensed"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['"Space Grotesk"', 'sans-serif'],
        'round': ['Fredoka', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand': {
          red: '#DC2626',
          lime: '#CCFF00',
          cream: '#FDFCF5',
          silver: '#A8A8A8',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}
