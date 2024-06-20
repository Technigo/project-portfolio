//import { useState } from 'react'
import { Card } from "./components/Card"
import { projects } from "../projects.json"
import { Introduction } from "./components/Introduction"
import { TechSection } from "./components/Tech"
import { MySkills } from "./components/Skills"
import { ContactMe } from "./components/Contact"
import { Footer } from "./components/Footer"
import "./styling/Card.css"

export const App = () => {

	return (
		<>
			<Introduction />
			<TechSection />
			<h1 className="card-h1">Featured Projects</h1>
			{projects.map((project, index) => (
				<Card key={index} project={project} />
			))}
			<MySkills />
			<ContactMe />
			<Footer />
		</>
	)
}
