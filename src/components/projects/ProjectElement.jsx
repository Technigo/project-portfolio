import { ProjectText } from "./ProjectText.jsx"
import { ProjectImage } from "./ProjectImage.jsx"
import { ProjectButton } from "./ProjectButtons"
import { Tags } from "./Tags.jsx"

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
				<ProjectText title={name} description={description} />
				<Tags tags={topics} />
				<ProjectButton githubURL1={githubURL} homepage={homepage} />
			</article>
		</>
	)
}
