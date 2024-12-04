/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Fugaz One"', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgba(255, 255, 255, 0.9)',
            h1: {
              color: 'rgba(255, 255, 255, 1)',
            },
            h2: {
              color: 'rgba(255, 255, 255, 1)',
            },
            h3: {
              color: 'rgba(255, 255, 255, 1)',
            },
            strong: {
              color: 'rgba(255, 255, 255, 1)',
            },
            a: {
              color: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                color: 'rgba(255, 255, 255, 1)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};