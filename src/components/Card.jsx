import "../styling/Card.css"
import { IoGlobeOutline } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"

export const Card = ({ project }) => {
	return (
		<section>
			<div className="color-wrapper-card">
				<div className="card">
					<img src={project.image} alt={project.description}></img>
					<div className="card-content">
						{project.name}
						<p>{project.description}</p>
						<div className="button-wrapper">
							<a href={project.netlify} className="button">
								<button aria-label="Netlify Button">
									{" "}
									<IoGlobeOutline /> Live demo
								</button>
							</a>
							<a href={project.github} className="button">
								<button className="github-btn" aria-label="Github Button">
									{" "}
									<FaGithub /> View the code
								</button>
							</a>
						</div>
						<div className="tags">
							{project.tags.map((tag, index) => (
								<p className="tag" key={index}>
									{tag}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
