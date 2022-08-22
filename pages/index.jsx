import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Sections/Hero'

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Good to see you! - adictonator</title>
			</Head>
			<Hero />
		</Layout>
	)
}
