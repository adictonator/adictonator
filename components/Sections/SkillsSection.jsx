import React from 'react'
import { Skills } from '../../data/skills'

export default function SkillsSection() {
	const SkillCard = ({ skill }) => (
		<div className="group flex max-h-64 flex-col justify-between rounded-md bg-indigo-dye shadow-md duration-300 hover:shadow-lg">
			<div className="flex items-center gap-x-3 p-5">
				<span className="font-fira-code text-4xl text-linen">
					{skill.name}
				</span>
				<span className="w-16 text-linen duration-300 group-hover:rotate-6 group-hover:scale-110">
					{skill.icon != '' ? skill.icon : ''}
				</span>
			</div>
			<div className="relative px-5">
				<div className="absolute inset-x-0 z-10 h-full w-full rounded-md bg-slate-300/30"></div>
				<div className="flex flex-col gap-y-1 pt-3">
					<span className="font-fira-code text-sm text-linen">
						{'//skillLevel'}
					</span>
					<div className="relative h-3.5 overflow-hidden rounded bg-linen">
						<div
							className="absolute inset-0 w-5 bg-maroon"
							style={{ width: skill.level + '%' }}
						></div>
					</div>
				</div>
				<span className="z-0 mt-5 flex items-start font-fira-code text-6xl text-linen/30 duration-300 group-hover:text-linen/50">
					{skill.level}
					<span className="text-2xl">%</span>
				</span>
			</div>
		</div>
	)

	const SkillComp = ({ skillList, cats }) => (
		<div>
			<h4 className="mb-4 font-lovelo-ll text-5xl text-indigo-dye underline decoration-double decoration-1 underline-offset-8 drop-shadow-md">
				{cats}
			</h4>
			<div className="grid grid-cols-4 gap-3">
				{skillList.map((skill, idx) => {
					return <SkillCard key={idx} skill={skill} />
				})}
			</div>
		</div>
	)

	return (
		<section id="skills" className="bg-linen py-10">
			<div className="container mx-auto">
				<h2 className="mt-16 mb-10 text-center font-lovelo text-7xl text-maroon underline decoration-wavy decoration-2 underline-offset-8 drop-shadow-md">
					My Tech Expertise
				</h2>

				<p className="mx-auto max-w-5xl text-center font-checker text-2xl">
					I have always been fascinated by the technology. So much so
					that I wanted to try anything that I could. Here are some of
					the technologies/programming languages, and softwares that I
					have worked with.
				</p>

				<div className="divide-powder-blue mt-16 space-y-20">
					{Object.keys(Skills).map((skillCat, idx) => (
						<SkillComp
							skillList={Skills[skillCat]}
							cats={skillCat}
							key={idx}
						/>
					))}
				</div>

				{/*<div className="mt-20">
					<h4 className="text-center font-lovelo text-5xl text-maroon drop-shadow-md">
						What else I am experimenting with?
					</h4>
					<p className="mx-auto mt-8 max-w-5xl font-checker text-2xl">
						Whenever I get some free time, I spend it learning game
						dev with Godot and GDScript. I also edit videos for
						LazyCodeLab YouTube channel using Adobe Primier Pro. And
						you can see that frontend design is not really my forte
						so I spend some time fiddling around in Figma as well.
					</p>
				</div>*/}
			</div>
		</section>
	)
}
