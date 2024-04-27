import PropTypes from 'prop-types'
import './Card.css'
import { IoGlobeOutline } from 'react-icons/io5'
import { FaGithub } from 'react-icons/fa'

export const Card = ({ project }) => {
	return (
		<body>
		<div className="color-wrapper-card">
			<div className="card">
				<img src={project.image}></img>
				<div className="card-content">
					<h3>{project.name}</h3>
					<p>{project.description}</p>
					<div className="tags">
						{project.tags.map((tag, index) => (
							<p className="tag" key={index}>
								{tag}
							</p>
						))}
					</div>
					<div className="button-wrapper">
						<a href={project.netlify} className="button">
							<button>
								{' '}
								<IoGlobeOutline /> Live demo
							</button>
						</a>
						<a href={project.github} className="button">
							<button className='github-btn'>
								{' '}
								<FaGithub /> View the code
							</button>
						</a>
					</div>
				</div>
			</div>
			</div>
		</body>
	)
}
