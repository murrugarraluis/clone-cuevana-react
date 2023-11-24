/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '130': '36rem',
        '132': '40rem',
      },
      fontSize: {
        '2xs': ['0.65rem', {
          lineHeight: '0.75rem',
        }]
      }
    }
  },
  plugins: [],
}

