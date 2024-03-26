export const ProjectText = ({ title, description }) => {
	const projectTypography = {
		title: title.replaceAll("-", " ").toUpperCase(),
		description: description,
	}

	return (
		<div className='project-text'>
			<h3>{projectTypography.title}</h3>
			<p>{projectTypography.description}</p>
		</div>
	)
}
