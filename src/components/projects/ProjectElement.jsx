import { ProjectText } from "./ProjectText.jsx"
import { ProjectImage } from "./ProjectImage.jsx"
import { ProjectButton } from "./ProjectButtons"
import { Tags } from "./Tags.jsx"

export const ProjectElement = ({
	name,
	description,
	topic,
	githubURL,
	homepage,
}) => {
	return (
		<>
			<article>
				<ProjectImage repo={name} />
				<ProjectText title={name} description={description} />
				<ul className='tags'>
					<Tags topics={topic} />
				</ul>
				<ProjectButton githubURL1={githubURL} homepage={homepage} />
			</article>
		</>
	)
}
