import { ProjectText } from "./ProjectText.jsx"
import { ProjectImage } from "./ProjectImage.jsx"
import { ProjectButton } from "./ProjectButtons"
import { Tags } from "./Tags.jsx"

export const ProjectElement = ({ name, description, topics }) => {
	console.log(typeof html_url)
	return (
		<>
			<article>
				<ProjectImage repo={name} />
				<ProjectText title={name} description={description} />
				<ul className='tags'>
					<Tags topics={topics} />
				</ul>
				<ProjectButton />
			</article>
		</>
	)
}

// key={repo.id}
// name={repo.name}
// description={repo.description}
// homepage={repo.homepage}
// github={repo.svn_url}
// topics={repo.tpoics}
