'use client'
import ContactMe from '../components/Sections/ContactMe'
import Hero from '../components/Sections/Hero'
import Portfolio from '../components/Sections/Portfolio'
import SkillsSection from '../components/Sections/SkillsSection'
import AboutSection from '../components/Sections/AboutSection'
import Footer from '../components/Footer'

//export const metadata = {
//	title: 'Heyo',
//}
export default () => {
	return (
		<>
			{/*<SectionsNav />*/}
			<Hero />
			<SkillsSection />
			<Portfolio />
			<AboutSection />
			<ContactMe />
			<Footer />

			<div
				className="type pointer-events-none absolute z-0"
				data-type-transition
				aria-hidden="true">
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
		</>
	)
}
