import PropTypes from "prop-types"
import "./Projects.css"

export const Projects = ( {name, description,
            image,
            tags,
            netlify,
            github}) => {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt="" />
      <div className="project-info">
        <h3 className="project-title">{name}</h3>
        <p>{description}</p>
        <p>{tags}</p>
        <button>
          <img src="..//src/assets/live-demo.svg" alt="Web icon" />
          <a href={netlify}>Live demo</a>
        </button>

        <a href={github}>View the code</a>
      </div>
    </div>
  );
}

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  netlify: PropTypes.string,
  github: PropTypes.string,
}