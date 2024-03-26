import globe from "../../assets/globe-black.svg"
import github from "../../assets/github-black.svg"

export const ProjectButton = ({ svn_url, homepage }) => {
	const buttonInfo = {
		githubURL: svn_url,
		deplyedURL: homepage,
	}

	return (
		<>
			<div className='globe-btn'>
				<a href={buttonInfo.deployedURL} target='_blank'>
					<button className='globe-btn'>
						<img src={globe} alt='Globe icon' />
						<p>Live Demo</p>
					</button>
				</a>
			</div>
			<div className='github'>
				<a href={buttonInfo.githubURL} target='_blank'>
					<button className='github-btn'>
						<img src={github} alt='Github icon' />
						<p>View the code</p>
					</button>
				</a>
			</div>
		</>
	)
}
