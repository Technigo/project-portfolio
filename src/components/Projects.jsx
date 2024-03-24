import { ProjectElement } from "./ProjectElement.jsx"
import "../styling/projects.css"
// import projects from "projects.json"

export const Projects = () => {
	return (
		<div className='project-wrapper'>
			<h2>Featured Projects</h2>
			<div className='single-project-container'>
				<ProjectElement />
			</div>
		</div>
	)
}
