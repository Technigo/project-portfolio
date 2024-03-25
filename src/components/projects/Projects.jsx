import { ProjectElement } from "./ProjectElement.jsx"
import "../styling/projects.css"
// use github API https://api.github.com/users/ohitsnathalie/repos

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
