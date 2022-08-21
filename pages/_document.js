import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body
					className="
					font-text
					text-almond-white
					overflow-x-hidden
					bg-indigo-dye
					antialiased
					selection:bg-indigo-400
					selection:text-purple-900"
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
