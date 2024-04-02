import { GlobeIcon, GithubIcon } from "../miscellaneous/Icons"

import "./ProjectButton.css"

export const ProjectButton = ({ githubURL1, homepage }) => {
	const buttonInfo = {
		githubURL2: githubURL1,
		homepage: homepage,
	}
	return (
		<>
			<div className='btn-container'>
				<div className='globe-wrapper'>
					<a href={buttonInfo.homepage} target='_blank'>
						<button className='globe-btn'>
							<GlobeIcon alt='Globe icon' />
							<p>Live demo</p>
						</button>
					</a>
				</div>
				<div className='github-wrapper'>
					<a href={buttonInfo.githubURL2} role='link' target='_blank'>
						<button className='github-btn'>
							<GithubIcon alt='Github icon' />
							<p>View the code</p>
						</button>
					</a>
				</div>
			</div>
		</>
	)
}
