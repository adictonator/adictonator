import React from 'react'

export default function Footer() {
	return (
		<footer className="relative mx-auto max-w-xs py-3 text-sm text-linen/40 duration-300">
			&copy; {new Date().getFullYear()}
		</footer>
	)
}
