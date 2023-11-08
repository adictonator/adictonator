import { Analytics } from '@vercel/analytics/react'
import { Fira_Code, Josefin_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import 'tailwindcss/tailwind.css'

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
}

const loveloLine = localFont({
	src: '../public/fonts/lovelo-line-bold.woff2',
	display: 'swap',
	variable: '--font-lovelo-line',
})

const lovelo = localFont({
	src: '../public/fonts/lovelo.woff2',
	display: 'swap',
	variable: '--font-lovelo',
})

const pixel = localFont({
	src: '../public/fonts/pixer.woff2',
	display: 'swap',
	variable: '--font-pixel',
})

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
			<body
				className={`${josefin.variable} ${firaCode.variable} ${loveloLine.variable} ${lovelo.variable} ${pixel.variable} relative`}>
				<main>{children}</main>
				<Analytics />
			</body>
		</html>
	)
}
