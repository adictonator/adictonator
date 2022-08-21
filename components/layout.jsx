import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
	return (
		<>
			{/*<Header />*/}
			<main className="flex min-h-screen w-full flex-col">
				{children}
			</main>
			{/*<Footer />*/}
		</>
	)
}
