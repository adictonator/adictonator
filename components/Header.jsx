import { useState } from 'react'
import NavBar from './NavBar'

export default function Header() {
	const [menuVisible, setMenuVisible] = useState(false)

	const handleSideMenu = () => {
		console.log('working')

		setMenuVisible(!menuVisible)
	}

	return (
		<header className="fixed w-full flex justify-between z-[9999]">
			<h1>adictonator logo</h1>
			<svg
				version="1.1"
				className="w-32 h-32 z-[99999] transition hover:scale-105 cursor-pointer"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 430 430"
				onClick={handleSideMenu}>
				<path
					fill="#E63946"
					d="M74.88,220.38c-1.54,0-3.07-0.59-4.24-1.76c-2.34-2.34-2.34-6.14,0-8.48l139.5-139.5
				c2.34-2.34,6.14-2.34,8.48,0c2.34,2.34,2.34,6.14,0,8.49l-139.5,139.5C77.95,219.79,76.42,220.38,74.88,220.38z"
				/>
				<path
					fill="#E63946"
					d="M215.62,361.12c-1.54,0-3.07-0.59-4.24-1.76c-2.34-2.34-2.34-6.14,0-8.48l139.5-139.5
				c2.34-2.34,6.14-2.34,8.48,0c2.34,2.34,2.34,6.14,0,8.48l-139.5,139.5C218.69,360.53,217.16,361.12,215.62,361.12z"
				/>
				<path
					fill="#E63946"
					d="M117.19,317.17c-1.54,0-3.07-0.59-4.24-1.76c-2.34-2.34-2.34-6.14,0-8.48l193.97-193.97 c2.34-2.34,6.14-2.34,8.48,0c2.34,2.34,2.34,6.14,0,8.49L121.44,315.41C120.26,316.58,118.73,317.17,117.19,317.17z"
				/>
			</svg>

			<NavBar isVisible={menuVisible} />
		</header>
	)
}
