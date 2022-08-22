import React, { useState } from 'react'

export default function Hero() {
	const [fullNameDisplayed, setFullNameDisplayed] = useState(false)

	const showFullName = (e) => {
		if (!fullNameDisplayed) {
			typeSentence(' Bhaskar Sharma', e.target)

			setFullNameDisplayed(true)

			// maybe change the title tag text too?
		}
	}

	async function typeSentence(sentence, eleRef, delay = 100) {
		const letters = sentence.split('')
		let i = 0
		while (i < letters.length) {
			await waitForMs(delay)
			eleRef.innerHTML += letters[i]
			i++
		}
		return
	}

	function waitForMs(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	return (
		<section className="z-50 flex h-screen min-h-full flex-col justify-center p-10 text-center">
			<h1 className="font-lovelo text-9xl text-maroon drop-shadow-xl">
				Oh, no! <br /> You caught me.
			</h1>
			<span className="text-2xl text-biege">
				I am still working on some stuff currently.
				<br />
				Maybe come back later and I might just have something ready to
				showoff.
			</span>
			<span className="mt-3 text-lg italic text-biege">
				I am not being{' '}
				<a
					href="https://lazycodelab.com"
					className="text-powder-blue underline duration-300 hover:underline-offset-4"
				>
					Lazy
				</a>
			</span>

			<div className="mx-auto mt-3 flex max-w-xs justify-between">
				<a href="https://twitter.com/adictonator">
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 fill-current text-biege duration-300 hover:fill-[#1DA1F2]"
					>
						<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
					</svg>
				</a>
			</div>
		</section>
	)
}
