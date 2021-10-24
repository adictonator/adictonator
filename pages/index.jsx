import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import Layout from '../components/layout'

export default function Home() {
	const [ initialScroll, setInitialScroll ] = useState( 0 )
	const [ startFlag, setStartFlag ] = useState( true )
	const [ sectionsQty, setSectionsQty ] = useState( 0 )
	const [ qty, setQty ] = useState( 1 )
	const [ sectionsStick, setSectionsStick ] = useState( [] )

	useEffect( () => {
		const sectionsQtyz = document.querySelectorAll( 'section' )

		setSectionsQty( sectionsQtyz.length )

		const f = [ ...sectionsQtyz ].forEach( ( el, i ) => {
			sectionsStick.push( <StickElm id={ i } /> )
		} )

		console.log('ddd', f);

		setSectionsStick( sectionsStick )

	}, [] )

	const SectionsNav = () => <div className="fixed bottom-5 left-5 flex gap-3 flex-col justify-center z-[1000] section-stick">
		{/*{ console.log( 'xzc', sectionsStick ) }*/}
		{ sectionsStick.map( stick => stick ) }

		{/*{
					[...totalSections].forEach( () => {
						//console.log( 'xx' );
						<StickElm />
					} )
				}*/}

		{/*{ sectionsStick.map( stick => stick ) }*/ }
		{/*<StickElm />*/ }
	</div>

	const StickElm = id => <span className="w-20 h-1 rounded-lg hover:w-28 bg-white bg-opacity-40 hover:bg-red-50 transition-all duration-200 cursor-pointer" onClick={ ( id ) => lol( id ) }></span>

	const lol = some => {
		console.log(
			'asdsad', some
		)
	}

	const [ fullNameDisplayed, setFullNameDisplayed ] = useState( false )
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
					const active = document.querySelector( '.section-stick span:nth-child(' + qty + ')' )
					active.classList.add( 'bg-red-500' )
					//active.style.top = ( 62 + 30 ) * ( qty - 1 ) + 'px'
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

	const showFullName = e => {
		if ( !fullNameDisplayed ) {
			typeSentence( ' Bhaskar Sharma', e.target )

			setFullNameDisplayed( true )

			// maybe change the title tag text too?
		}
	}

	function waitForMs( ms ) {
		return new Promise( resolve => setTimeout( resolve, ms ) )
	}

	async function typeSentence( sentence, eleRef, delay = 100 ) {
		const letters = sentence.split( "" )
		let i = 0
		while ( i < letters.length ) {
			await waitForMs( delay )
			eleRef.innerHTML += letters[ i ]
			i++
		}
		return
	}

	return (
		<Layout>
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/cwg6wqv.css" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
				<title>Good to see you! - adictonator</title>
			</Head>

			<main>
				<SectionsNav />

				<section className="bg-pb fixed w-full h-screen z-50 s1 translate-y-0">
					<div className="h-full flex flex-col justify-center p-10 text-center">
						<h1 className="text-9xl text-brand-red font-lovelo">Hey! I am <br /> <span className="font-lovelo-ll hover:font-lovelo-lb transition-all duration-300 cursor-pointer" title="Want to click it?" onClick={ showFullName }>Aditya</span></h1>
						<h3 className="mt-10 text-4xl text-powder-blue font-checker">Full stack dev, semi-pro gamer, keen learner.</h3>
					</div>
					{/* show my full name on hover or a click maybe? for desktop only i guess */ }
					{/*add some easter eggs maybe? I like them.*/ }
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

				<div className="type absolute z-[100] pointer-events-none" data-type-transition aria-hidden="true">
					<div className="type__line">welcome welcome welcome</div>
					<div className="type__line">full stack developer</div>
					<div className="type__line">php js node php js node</div>
					<div className="type__line">konnichiwa konnichiwa konnichiwa</div>
					<div className="type__line">welcome welcome welcome</div>
					<div className="type__line">full stack developer</div>
					<div className="type__line">php js node php js node</div>
					<div className="type__line">konnichiwa konnichiwa konnichiwa</div>
				</div>

				<footer>
					&copy; 2021
				</footer>
			</main>
		</Layout>
	)
}
