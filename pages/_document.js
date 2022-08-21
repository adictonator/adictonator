import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="stylesheet"
						href="https://use.typekit.net/cwg6wqv.css"
					/>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin={'crossOrigin'}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;1,400&display=swap"
						rel="stylesheet"
					/>
				</Head>
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
