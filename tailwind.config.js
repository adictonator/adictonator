module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'display': [ "Pixel" ],
			'checker': [ "'Josefin Sans', sans-serif" ],
			'lovelo': [ "LoveloBlack, sans-serif" ],
			'lovelo-lb': [ "LoveloLB, sans-serif" ],
			'lovelo-ll': [ "LoveloLL, sans-serif" ],
		},
		extend: {
			animation: {
				'spin-slow': 'spin 30s linear infinite',
				'wave': 'wave 6s ease-in-out infinite',
			},
			keyframes: {
				'wave': {
					'0%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'100%': {
						transform: 'translateY(-100%) rotate(400deg)'
					}
				}
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
			display: ['group-hover'],
			fontFamily: [ 'hover' ]
		},
	},
	plugins: [],
}
