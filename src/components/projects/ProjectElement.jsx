import { Tags } from "../miscellaneous/Tags.jsx"
import { ProjectButton } from "../miscellaneous/ProjectButtons.jsx"
import { ProjectImage } from "./ProjectImage.jsx"

export const ProjectElement = ({ name, description, topics }) => {
	const projectTitle = name.replaceAll("-", " ")

	return (
		<article className='project-element'>
			<ProjectImage repo={name} />
			<div>
				<h3>{projectTitle}</h3>
				<p>{description}</p>
				<ul>
					{topics.map(
						(topics) =>
							topics !== "portfolio" && <Tags key={topics} topics={topics} />
					)}
				</ul>
			</div>
			<ProjectButton />
		</article>
	)
}

//"svn_url" for github url
//"homepage" for deployed url
