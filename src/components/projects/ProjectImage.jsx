import projectImage from "/project-images.json"
import "./ProjectImage.css"

export const ProjectImage = ({ repo }) => {
	const repoImage = projectImage.find((img) => img.repoName === repo)

	return (
		repoImage && (
			<img
				className='project-image'
				src={repoImage?.imageUrl}
				alt={repo.name}
			/>
		)
	)
}
