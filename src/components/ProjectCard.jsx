import React from 'react';

export const ProjectCard = ({ project }) => {
  return (

    <div className="projectWrapper">

      <div className='projectContainer'>
        <img src={project.image} height={200} alt="Project Image" />
        <div className="projectDescription">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
          <h2 className="project-title">{project.name}</h2>

          <div className="readmeContent">
            <p>{project.description}</p>
          </div>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="project-buttons">
            <button>test</button>
            <button>test</button>
            <button>test</button>
          </div>
        </div>
      </div>
    </div>
  );
};
