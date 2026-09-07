/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0b081c",
          darker: "#060412",
          purple: "#200b44",
          "purple-deep": "#160733",
          "purple-light": "#36166a",
          cyan: "#00d2ff",
          "cyan-bright": "#00f0ff",
          "cyan-hover": "#00bce6",
          "cyan-soft": "#e1f8ff",
          teal: "#00bcd4",
          "teal-light": "#e0f7fa",
          accent: "#ff007a",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite linear',
        'bounce-subtle': 'bounceSubtle 2s infinite ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 210, 255, 0.4)',
        'glow-purple': '0 0 35px rgba(54, 22, 106, 0.6)',
        'card-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
