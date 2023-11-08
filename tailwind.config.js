module.exports = {
	content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	theme: {
		fontFamily: {
			pixel: ['var(--font-pixel)'],
			lovelo: ['var(--font-lovelo)'],
			'lovelo-line': ['var(--font-lovelo-line)'],
			'fira-code': ['var(--font-fira)'],
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
}
