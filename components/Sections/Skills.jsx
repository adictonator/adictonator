import anime from 'animejs'
import React, { useCallback } from 'react'
import ReactIcon from '../Icons/ReactIcon'
import JQueryIcon from '../Icons/JQueryIcon'
import PHPIcon from '../Icons/PHPIcon'
import Blob from '../Icons/Blob'

export default function Skills() {
	const SKILLS = {
		React: {
			level: 80,
			icon: <ReactIcon />,
		},
		jQuery: {
			level: 90,
			icon: <JQueryIcon />,
		},
		PHP: {
			level: 97,
			icon: <PHPIcon />,
		},
		JavaScript: {
			level: 95,
			icon: '',
		},
		SQL: {
			level: 74,
			icon: '',
		},
		CSS: {
			level: 98,
			icon: '',
		},
		HTML: {
			level: 99,
			icon: '',
		},
		Liquid: {
			Level: 88,
			icon: '',
		},
	}

	const closeOK = () => {
		console.log('sdsds')
		anime({
			targets: 'section#skills',
			scale: 0,
			easing: 'easeOutCubic',
			elasticity: 250,
			zIndex: -1,
			opacity: 0,
			complete: function (anim) {
				anim.animatables[0].target.classList.add('hidden')
			},
		})
	}

	const jamal = useCallback((el) => {
		console.log('222', el.target)
		el.target.querySelector('#koko').beginElement()
		//$('#from_pause_to_play')[0].beginElement()
	}, [])

	return (
		<section
			id="skills"
			className="hidden!ss absolutesd inset-x-0 z-50 min-h-screen bg-[#EDC7B7]"
		>
			<div className="container mx-auto">
				<h2 className="my-16 text-center font-display text-7xl text-lol">
					Technology I Work With
				</h2>
				<button onClick={closeOK}>CLOSE</button>
				<section className="article__container">
					<h1 className="article__title">Moving blob</h1>
					<p>
						Just checking how blob path morphing works with
						anime.js.
					</p>
					<p>Conclusion: Works cool!</p>
				</section>
				<div className="grid grid-cols-4 gap-10">
					{Object.keys(SKILLS).map((skill) => {
						return (
							<div
								key={skill}
								className="w-40s group relative flex cursor-pointer flex-col items-center
								rounded-lg
								font-lovelo
								"
							>
								<div className="flex w-40 items-center justify-center px-5">
									<Blob onMouseEnter={jamal} />
									{SKILLS[skill].icon}
								</div>
								<span className="text-3xl uppercase">
									{skill}
								</span>
								<span className="absolute top-0 -right-10 text-2xl group-hover:inline-block">
									{SKILLS[skill].level}%
								</span>
							</div>
						)
					})}
				</div>
				<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
					<g transform="translate(161.71542739868164, 26.52040672302246)">
						<path
							fill="#a29bfe"
							data-anim-blob
							d="M397,296.5Q361,343,322.5,394.5Q284,446,232.5,407.5Q181,369,119.5,344.5Q58,320,58.5,250Q59,180,92.5,107.5Q126,35,209,24.5Q292,14,337,76.5Q382,139,407.5,194.5Q433,250,397,296.5Z"
						></path>
					</g>
				</svg>
				<div className="flex justify-around"></div>
				<p>
					I work with JavaScript, PHP, HTML, CSS, PUG, Liquid, Twig,
					MySQL, NoSQL, MongoDB, Adobe Photoshop, Adobe Illustrator,
					jQuery, React, Laravel, Vue, WordPress, Figma, Shopify,
					NextJS, ExpressJS, Node
				</p>
				Show just the main stack/strong suits first and then more will
				show all these other techs.
				<p>
					Experimenting with <br />
					some things I am Experimenting with like C++, Unreal Engine
					etc, Godot
				</p>
			</div>
		</section>
	)
}
