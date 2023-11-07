import Image from 'next/image'
import React from 'react'

const PROJECTS = [
	{
		name: 'HypeFlags',
		url: 'https://hypeflags.com',
		type: 'website',
		software: 'Shopify',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam!',
	},
	{
		name: 'Troly',
		url: 'https://hypeflags.com',
		type: 'plugin',
		software: 'WordPress',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam!',
	},
	{
		name: 'CJT',
		url: 'https://hypeflags.com',
		type: 'plugin',
		software: 'WordPress',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laboriosam!',
	},
]

export default function Portfolio() {
	const CaseStudyItem = ({ data, index }) => {
		return (
			<div className="flex items-center">
				{index % 2 == 0 ? (
					<>
						<div className="group flex overflow-hidden rounded-md bg-white/50">
							<Image
								src="/images/portfolio/hypeflags/hype-hero.png"
								alt="some"
								height={400}
								width={750}
								className="duration-300 group-hover:rotate-1 group-hover:scale-105"
							/>
						</div>
						<div className="flex h-60 flex-col justify-center rounded-tr-md rounded-br-md bg-white/40 p-5 text-right duration-300 hover:h-64">
							<h4 className="font-lovelo text-3xl">
								{data.name}
							</h4>
							<p>{data.description}</p>
						</div>
					</>
				) : (
					<>
						<div className="flex h-60 flex-col justify-center rounded-tr-md rounded-br-md bg-white/40 p-5 text-right duration-300 hover:h-64">
							<h4 className="font-lovelo text-3xl">
								{data.name}
							</h4>
							<p>{data.description}</p>
						</div>
						<Image
							src="/images/portfolio/hypeflags/hype-hero.png"
							alt="some"
							height={400}
							width={750}
							className="rounded-md shadow-md duration-300 hover:rotate-3 hover:scale-110"
						/>
					</>
				)}
			</div>
		)
	}

	return (
		<section className="bg-maroon py-20">
			<div className="container mx-auto">
				<h2 className="mb-10 text-center font-lovelo text-7xl text-linen underline decoration-wavy decoration-2 underline-offset-8 drop-shadow-md">
					Hall of Fame
				</h2>
				<div className="mt-20 space-y-20">
					{PROJECTS.map((project, idx) => (
						<CaseStudyItem key={idx} index={idx} data={project} />
					))}
				</div>
			</div>
		</section>
	)
}
