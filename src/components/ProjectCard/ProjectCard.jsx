import React from 'react';
import './ProjectCard.css';
import { Button } from '../Button/Button';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.name} className="project-image" />
      </div>
      <div className="project-details">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list">
          {project.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="link-container">
          <Button label="Netlify" link={project.netlify} />
          <Button label="GitHub" link={project.github} />
        </div>
      </div>
    </div>
  );
};
