import anime from 'animejs'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ContactMe from '../components/Sections/ContactMe'
import Hero from '../components/Sections/Hero'
import Portfolio from '../components/Sections/Portfolio'
import Skills from '../components/Sections/Skills'

export default function Home() {
	const showCard = (e) => {
		document.getElementById(
			'skills'
		).style.transform = `translateX(500px) translateY(100%)`

		anime({
			targets: 'section#skills',
			easing: 'easeOutElastic',
			elasticity: 250,
			duration: 800,
			zIndex: 51,
			translateY: 0,
			translateX: 0,
			//opacity: 1,
			begin: function (anim) {
				anim.animatables[0].target.classList.remove('hidden')
				//anim.animatables[0].target.classList.add('absolute')
			},
		})
	}

	return (
		<Layout>
			<Head>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/cwg6wqv.css"
				/>
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
				<title>Good to see you! - adictonator</title>
			</Head>
			{/*<SectionsNav />*/}
			<Hero />
			<h2
				className="absolute bottom-28 z-50"
				onClick={(e) => showCard(e)}
			>
				Maybe chcek heresss
			</h2>
			<Skills />
			{/*<Portfolio />
			<ContactMe />*/}

			<div
				className="type pointer-events-none absolute z-0"
				data-type-transition
				aria-hidden="true"
			>
				<div className="type__line">welcome welcome welcome</div>
				<div className="type__line">full stack developer</div>
				<div className="type__line">php js node php js node</div>
				<div className="type__line">
					konnichiwa konnichiwa konnichiwa
				</div>
				<div className="type__line">welcome welcome welcome</div>
				<div className="type__line">full stack developer</div>
				<div className="type__line">php js node php js node</div>
				<div className="type__line">
					konnichiwa konnichiwa konnichiwa
				</div>
			</div>
		</Layout>
	)
}
