import {
	EB_Garamond,
	Fira_Code,
	Josefin_Sans,
	Source_Sans_3,
} from 'next/font/google'
import 'tailwindcss/tailwind.css'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
	title: {
		default: 'Home',
		template: '%s | LazyCodeLab',
	},
	description:
		'Get top-notch web design, development, SEO, and digital marketing services at affordable prices. Contact our expert team now for unbeatable web solutions.',
	icons: {
		icon: '/favicon/favicon-32x32.png',
		shortcut: '/favicon/favicon-16x16.png',
		apple: '/favicon/apple-touch-icon.png',
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'cyan' },
		{ media: '(prefers-color-scheme: dark)', color: 'pink' },
	],
}

const josefin = Josefin_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	variable: '--font-josefin',
})

const firaCode = Fira_Code({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-fira',
})

export default ({ children }) => {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin={'crossOrigin'}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;1,400&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/fira_code.min.css"
					integrity="sha512-MbysAYimH1hH2xYzkkMHB6MqxBqfP0megxsCLknbYqHVwXTCg9IqHbk+ZP/vnhO8UEW6PaXAkKe2vQ+SWACxxA=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body
				className={`${josefin.variable} ${firaCode.variable} relative`}>
				<main>{children}</main>
				<Analytics />
			</body>
		</html>
	)
}
