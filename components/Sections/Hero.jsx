import React, { useState } from 'react'
import anime from 'animejs'

export default function Hero() {
	const [fullNameDisplayed, setFullNameDisplayed] = useState(false)

	const dummy = e => {
		anime({
			targets: e.target,
			easing: 'easeOutCubic',
			color: 'red',
			elasticity: 250,
			zIndex: 51,
			opacity: 1,
			translateX: {
				value: 250,
				duration: 800,
			},
			rotate: {
				value: 360,
				duration: 1800,
				easing: 'easeInOutSine',
			},
			scale: {
				value: 2,
				duration: 1600,
				delay: 800,
				easing: 'easeInOutQuart',
			},
			delay: 250, // All properties except 'scale' inherit 250ms delay
		})
		//document.getElementById('skills')?.classList.remove('opacity-0')
		//document.getElementById('skills')?.classList.add('z-50')
	}

	const showFullName = e => {
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
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	return (
		<section className="z-50 flex h-screen min-h-full flex-col justify-center p-10 text-center">
			<h1 className="font-lovelo text-9xl text-maroon drop-shadow-xl">
				Hey! I am
				<br />
				<span
					className="cursor-pointer font-lovelo-lb transition-all duration-300"
					title="Want to click it?"
					onClick={showFullName}>
					Aditya
				</span>
			</h1>
			<h3 className="mt-10 font-checker text-4xl text-linen">
				Full stack dev, semi-pro gamer, keen learner.
			</h3>
			{/* show my full name on hover or a click maybe? for desktop only i guess */}
			{/*add some easter eggs maybe? I like them.*/}
			{/* A link to the next section */}
			<a className="" onClick={e => dummy(e)}>
				See What I Can Do
			</a>
		</section>
	)
}
