import { ProjectText } from "./ProjectText.jsx"
import { ProjectImage } from "./ProjectImage.jsx"
import { ProjectButton } from "./ProjectButtons.jsx"
import { Tags } from "./Tags.jsx"
import "./ProjectElement.css"

export const ProjectElement = ({
	name,
	description,
	topics,
	githubURL,
	homepage,
}) => {
	return (
		<>
			<article>
				<ProjectImage repo={name} />
				<div className='project-element-container'>
					<ProjectText title={name} description={description} />
					<Tags tags={topics} />
					<ProjectButton githubURL1={githubURL} homepage={homepage} />
				</div>
			</article>
		</>
	)
}
