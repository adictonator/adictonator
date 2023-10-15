import React from 'react'

export default function Layout({ children }) {
	return (
		<>
			<main className="flex min-h-screen w-full flex-col overflow-hidden">
				{children}
			</main>
		</>
	)
}
