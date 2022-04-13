module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce': 'bounce 3s infinite alternate',
      },
      keyframes: {
        bounce: {
          '0%': { transform: 'translateY(15px)'  },
          '50%': { transform: 'translateY(-7px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      }
    },
  },
  plugins: [

  ]
}
