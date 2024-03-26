import PropTypes from "prop-types";
import "./Card.css"
import World from "../assets/world_icon.svg"
import GitHub from "../assets/github_icon.svg"

export const Card = ({project}) => {
	return (
		<div className="card">
			<img src={project.image}></img>
      <p>{ project.name }</p>
      <p>{project.description}</p>
      <div className="tags">
      {project.tags.map((tag, index) => (<p className="tag" key={index}>{tag}</p>))}
      </div>
			<a href={project.netlify} className="button"><img src={World} alt="world icon"></img>Live demo</a>
      <a href={project.github} className="button"><img src={GitHub} alt="github icon"></img>View the code</a>
		</div>
	)
}