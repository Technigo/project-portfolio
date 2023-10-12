import React from 'react';
import './ProjectCard.css';
import { Button } from '../button/Button';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.name} className="project-image" />
      </div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="link-container">
        <Button label="Netlify" link={project.netlify} />
        <Button label="GitHub" link={project.github} />
      </div>
    </div>
  );
}
