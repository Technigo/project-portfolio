import PropTypes from "prop-types"

import "./Projects.css"
import { Tags } from "./Tags"
import { WebIcon } from "./Icons/WebIcon"
import { GithubIcon } from "./Icons/GithubIcon"

export const Projects = ({
  name,
  description,
  image,
  tags,
  netlify,
  github,
}) => {
  return (
    <div className="card" id="project-card">
      <img className="project-image" src={image} alt="Screenshot of website" />
      <div className="project-box">
        <div className="project-info">
          <h2 className="project-title">{name}</h2>
          <p>{description}</p>
          <Tags tags={tags} />
        </div>
        <div className="button-box">
          <a className="button view-live" href={netlify} target="_blank">
            <WebIcon />
            Live demo
          </a>
          <a className="button view-code" href={github} target="_blank">
            <GithubIcon />
            View the code
          </a>
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  netlify: PropTypes.string,
  github: PropTypes.string,
}
