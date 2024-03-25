import projectImage from "/project-images.json"

export const ProjectImage = ({ repo }) => {
	const repoImage = projectImage.find((img) => img.repoName === repo)
	console.log(projectImage)
	return (
		repoImage && (
			<img className='project-image' src={repoImage?.imageURL} alt={repo} />
		)
	)
}
