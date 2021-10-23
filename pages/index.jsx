import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'

export default function Home() {
	const [ initialScroll, setInitialScroll ] = useState( 0 )
	const [ startFlag, setStartFlag ] = useState( true )
	const [ sectionsQty, setSectionsQty ] = useState( 0 )
	const [ qty, setQty ] = useState( 1 )

	useEffect( () => {
		const sectionsQtyz = document.querySelectorAll( 'section' ).length

		setSectionsQty( sectionsQtyz )
		const sectionStick = document.querySelector( '.section-stick' )

		// Add child elements in .section-stick as number of sections exist
		Array( sectionsQty )
			.fill()
			.forEach( () => {
				sectionStick.innerHTML = sectionStick.innerHTML + '<div class="stick w-12 cursor-pointer hover:w-14 h-2 rounded-lg hover:bg-red-50"></div>'
			} )

		//return sectionStick.innerHTML = ''
	}, [ sectionsQty ] )

	// @todo: Fix this entire logic.
	useEffect( () => {
		const TIME_OUT = 600 // It should be the same transition time of the sections
		const body = document.querySelector( 'body' )

		let mainn = null,
			nextn = null

		// Listening to scroll event
		window.onscroll = () => {
			if ( startFlag ) {
				const scrollDown = window.scrollY >= initialScroll
				const scrollLimit = qty >= 1 && qty <= sectionsQty

				// Verify that the scroll does not exceed the number of sections
				if ( scrollLimit ) {
					body.style.overflowY = 'hidden' // Lock el scroll

					if ( scrollDown && qty < sectionsQty ) {
						mainn = document.querySelector( `section.s${qty}` )
						nextn = document.querySelector( `section.s${qty + 1}` )

						mainn.style.transform = 'translateY(-100vh)'
						nextn.style.transform = 'translateY(0)'

						setQty( qty => qty + 1 )
					} else if ( !scrollDown && qty > 1 ) {
						mainn = document.querySelector( `section.s${qty - 1}` )
						nextn = document.querySelector( `section.s${qty}` )

						mainn.style.transform = 'translateY(0)'
						nextn.style.transform = 'translateY(100vh)'

						setQty( qty => qty - 1 )
					}

					// Scroll progressbar
					const active = document.querySelector( '.section-stick .stick.active' )
					active.style.top = ( 62 + 30 ) * ( qty - 1 ) + 'px'
				}

				// Wait for the scrolling to finish to reset the values
				setTimeout( () => {
					setInitialScroll( window.scrollY )
					setStartFlag( true )
					body.style.overflowY = 'scroll' // Unlock scroll
				}, TIME_OUT )

				setStartFlag( false )
			}

			// Keep scrollbar in the middle of the viewport
			window.scroll( 0, window.screen.height )
		}
	}, [ initialScroll, startFlag, qty ] )

	return (
		<Layout>
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/cwg6wqv.css" />
				<title>Good to see you! - adictonator</title>
			</Head>

			<main className="w-full">
				<div className="type absolute z-[100]" data-type-transition aria-hidden="true">
					<div className="type__line">welcome welcome welcome</div>
					<div className="type__line">debug debug debug</div>
					<div className="type__line">full stack developer</div>
					<div className="type__line">php js node php js node</div>
					<div className="type__line">error error error</div>
					<div className="type__line">welcome welcome welcome</div>
					<div className="type__line">debug debug debug</div>
					<div className="type__line">full stack developer</div>
					<div className="type__line">php js node php js node</div>
					<div className="type__line">error error error</div>
				</div>

				<div className="section-stick
					fixed
					top-5
					left-5
					flex
					gap-6
					flex-col
					justify-center
					z-[1000]
				">
					<div className="stick w-3 h-1 rounded-lg active"></div>
				</div>

				<section className="bg-blue-500 fixed w-full h-screen p-10 flex flex-col justify-center z-50 text-right s1">
					<h1 className="text-black text-8xl font-display">Hey! I am Aditya</h1>
					{/*add some easter eggs maybe? I like them.*/}

					<h3 className="text-4xl">Full stack dev, semi-pro gamer, keen learner.</h3>

				</section>

				<section className="bg-pink-50 s2 z-40">
					<h2 className="text-7xl">Stacks I use section</h2>
					<p>I work with JavaScript, PHP, HTML, CSS, PUG, Liquid, Twig, MySQL, NoSQL, MongoDB, Adobe Photoshop, Adobe Illustrator, jQuery, React, Laravel, Vue, WordPress, Figma, Shopify, NextJS, ExpressJS, Node</p>

					Show just the main stack/strong suits first and then more will show all these other techs.

					<p>Experimenting with <br />
						some things I am Experimenting with like C++, Unreal Engine etc, Godot
					</p>
				</section>

				<section className="bg-yellow-50 s3 z-30">
					<h2 className="text-7xl">Social section</h2>

					I can be found Tweeting, posting some stuff on Instagram and writing some blogs.

					twitter mine and lazycodelab too,
					instagram mine, lazycodelab too,
					gitub mine
					youtube lazycodelab
					maybe linkedin mine, lazycodelab too
				</section>

				<section className="s4 z-20">
					<h2 className="text-7xl">Portfolio Section</h2>
					<p>mentione some upwork work and what not. some apps to maybe?</p>
				</section>

				<section className="s5 z-10">
					<h2 className="text-7xl">About Section</h2>
					About Me
					I like to code. I work. Some 2-3 liners and then a CTA with more info about me I guess
				</section>

				<section className="s6 z-0">
					<h2 className="text-7xl">Contact Section</h2>
					<p>contct me brosome</p>
				</section>

				<section className="s7 z-auto">
					<h2 className="text-7xl">Upcoming projects section maybe</h2>
					<p>maybe a glimpse of whats coming</p>
				</section>

				<footer>
					&copy; 2021
				</footer>
			</main>
		</Layout>
	)
}
