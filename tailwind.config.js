/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
       keyframes: {
                flicker: {
                    '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
                        opacity: '1',
                        filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9)) drop-shadow(0 0 30px rgba(255,255,255,0.7))',
                    },
                    '20%, 22%, 24%, 55%': {
                        opacity: '0.3',
                        filter: 'none',
                    },
                },
                glow: {
                    '0%, 100%': {
                        filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8))',
                    },
                    '50%': {
                        filter: 'drop-shadow(0 0 12px rgba(255,255,255,1))',
                    },
                },
                'gradient-wave': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                'rainbow-glow': {
                    '0%, 100%': {
                        filter: 'drop-shadow(0 0 4px #ec4899) drop-shadow(0 0 6px #8b5cf6) drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 10px #3b82f6)',
                    },
                    '50%': {
                        filter: 'drop-shadow(0 0 8px #ec4899) drop-shadow(0 0 12px #8b5cf6) drop-shadow(0 0 14px #ffffff) drop-shadow(0 0 18px #3b82f6)',
                    },
                },
            },
      animation: {
        flicker: 'flicker 2.5s infinite',
        'glow-pulse': 'glow 2s ease-in-out infinite',
        'gradient-wave': 'gradient-wave 5s ease-in-out infinite',
        'rainbow-glow': 'rainbow-glow 2.5s ease-in-out infinite',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};