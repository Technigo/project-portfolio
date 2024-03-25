import globe from "../../assets/globe-black.svg"
import github from "../../assets/github-black.svg"

export const ProjectButton = ({ svn_url, homepage }) => {
	return (
		<>
			<div className='globe'>
				<a href={homepage} target='_blank'>
					<button className='globe-btn'>
						<img src={globe} alt='Globe icon' />
						<p>Live Demo</p>
					</button>
				</a>
			</div>
			<div className='github'>
				<a href={svn_url} target='_blank'>
					<button className='github-btn'>
						<img src={github} alt='Github icon' />
						<p>View the code</p>
					</button>
				</a>
			</div>
		</>
	)
}
