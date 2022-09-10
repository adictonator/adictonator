module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			checker: ["'Josefin Sans', sans-serif"],
			lovelo: ['LoveloBlack, sans-serif'],
			'lovelo-lb': ['LoveloLB, sans-serif'],
			'lovelo-ll': ['LoveloLL, sans-serif'],
			'fira-code': ['Fira Code Retina, monospace'],
		},
		extend: {
			animation: {
				'spin-slow': 'spin 30s linear infinite',
			},
			colors: {
				maroon: '#AC3B61',
				linen: '#EEE2DC',
				'indigo-dye': '#123C69',
			},
			backgroundImage: {
				primary: "url('/images/bg.svg')",
				me: "url('/images/me.jpg')",
			},
		},
	},
	plugins: [],
}
