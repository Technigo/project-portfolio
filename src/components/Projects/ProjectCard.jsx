import './ProjectCard.css'; 
import webIcon from '../../assets/web.svg'; 
import githubIcon from '../../assets/github2.svg'; 

const ProjectCard = ({ project, layout }) => {
    return (
        <div className={`project-card-container ${layout}`}>
            <img src={project.image} alt={project.name} className="project-card-image" />
            <div className="project-card-content">
                <div className="project-card-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="project-card-tag">{tag}</span>
                    ))}
                </div>
                <h3 className="project-card-title">{project.name}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-links">
                    <a href={project.netlify} target="_blank" rel="noopener noreferrer" className="project-card-button">
                        <img src={webIcon} alt="Live demo" className="icon" /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card-button">
                        <img src={githubIcon} alt="View Code" className="icon" /> View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
