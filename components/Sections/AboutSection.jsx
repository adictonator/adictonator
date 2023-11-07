import React from 'react'

export default function AboutSection() {
	return (
		<section className="bg-linen py-20">
			<div className="container mx-auto max-w-5xl">
				<h2 className="mb-10 text-center font-lovelo text-7xl text-indigo-dye underline decoration-wavy decoration-2 underline-offset-8 drop-shadow-md">
					Who am I?
				</h2>

				<p className="font-checker text-2xl text-maroon">
					Hi, I am <abbr title="Aditya Bhaskar Sharma">Aditya</abbr>.
					I am from a small city located in Himachal Pradesh, India. I
					have always been fascinated by technology. Especially
					computers since I was a kid. When I learned about HTML in
					8th standard, I got intrigued by it, and everything changed
					for me.
				</p>
				<p className="mt-5 font-checker text-2xl text-maroon">
					I always wanted to create stuff. I started with creating a
					custom football kit for my custom football club in{' '}
					<abbr title="Pro Evolution Soccer 2006">PES 06</abbr> to my
					own operating system. But I soon realized that an operating
					system can't be coded with just HTML and VBScript knowledge.
					So, I transitioned to creating my own website(s).
				</p>
				<p className="mt-5 font-checker text-2xl text-maroon">
					I have done B.E in Civil Engineering from Chandigarh
					University, Punjab. However, web dev was my calling, and I
					have been freelancing professionally as a developer since
					2013. <br />I work as a full-time, full-stack web dev now
					and am currently available for hire. You can also check out
					my{' '}
					<a
						href="https://www.upwork.com/freelancers/~010a966ef818c7894a"
						target={'_blank'}
						rel={'noreferrer'}
						className="border-b-2 border-indigo-dye/30 text-indigo-dye/90 duration-300 hover:border-indigo-dye hover:text-indigo-dye"
					>
						Upwork profile
					</a>
					.
				</p>

				<div className="mt-20">
					<h4 className="font-lovelo text-4xl text-indigo-dye drop-shadow">
						{`Some things I'm experimenting with`}
					</h4>
					<p className="mt-3 font-checker text-2xl text-maroon">
						Whenever I get some free time, I spend it learning game
						dev with Godot and GDScript. I also edit videos for
						LazyCodeLab YouTube channel using Adobe Premier Pro. And
						you can see that frontend design is not really my forte
						so I spend some time fiddling around in Figma as well.
					</p>
				</div>
			</div>
		</section>
	)
}
