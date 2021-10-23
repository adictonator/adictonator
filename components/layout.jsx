import Header from './Header'
import styles from './layout.module.css'

export default function Layout( { children } ) {
	return <div className="w-full">
		<Header />
		{ children }
	</div>
}