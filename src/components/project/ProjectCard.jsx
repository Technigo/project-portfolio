import './ProjectCard.css';

export const ProjectCard = ({ title, body, buttonText1, buttonText2, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={`${title}`} className="project-image" />
            <h2 className="project-title">{title}</h2>
            <p className="project-body">{body}</p>
            <div className="project-icons">
            </div>
            <div className="project-buttons">
                <button className="project-button">{buttonText1}</button>
                <button className="project-button">{buttonText2}</button>
            </div>
        </div>
    );
};