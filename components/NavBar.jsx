export default function NavBar( { isVisible } ) {
	return <nav className={ `fixed ${ !isVisible && 'hidden' } w-full h-screen bg-pink-600` }>
		<a href="#">Toptal</a>
		<a href="#">Upwork</a>
	</nav>
}