//import { useState } from 'react'
import { Card } from './components/Card'
import { projects } from "../projects.json"
import { Introduction } from './components/Introduction'
import { TechSection } from './components/Tech'
import { MySkills } from './components/Skills'
import { ContactMe } from './components/Contact'
import { Footer } from './components/Footer'

//import H from '@nicodes/react-heading'

export const App = () => {
	console.log(projects)
	

	return (
		<>
				<Introduction />
				<TechSection />
				<div className="card-h1">
					<h1>Featured Projects</h1>
				</div>
				{projects.map((project, index) => (
					<Card key={index} project={project} />
				))}
				<MySkills />
				<ContactMe />
			<Footer />
		</>
	)
}
