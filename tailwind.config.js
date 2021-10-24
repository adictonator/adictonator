module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': [ "Pixel" ],
      'checker': ["'Josefin Sans', sans-serif"],
      'lovelo': ["LoveloBlack, sans-serif"],
      'lovelo-lb': ["LoveloLB, sans-serif"],
      'lovelo-ll': ["LoveloLL, sans-serif"],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      textColor: {
        'brand-red': '#E63946',
        'powder-blue': '#A8DADC',
      },
      backgroundColor: {
        'pb': '#1d3557'
      },
      backgroundImage: {
        primary: "url('/images/bg.svg')",
        me: "url('/images/me.jpg')",
      }
    },
  },
  variants: {
    extend: {
       fontFamily: ['hover']
    },
  },
  plugins: [],
}
