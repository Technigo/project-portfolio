// src/components/projectCard.jsx

import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubUrl}>GitHub</a>
            <a href={project.liveUrl}>Live</a>
        </div>
    );
};

// Validación de las propiedades
ProjectCard.propTypes = {
    project: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        githubUrl: PropTypes.string.isRequired,
        liveUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;
