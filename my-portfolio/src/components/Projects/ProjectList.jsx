import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../../../projects.json'; // Adjust the import path as necessary

const ProjectList = () => {
    return (
        <div className="project-list">
            <h2>Featured Projects</h2>
            {projectsData.projects.map((project, index) => (
                <ProjectCard 
                    key={project.name}
                    project={project}
                    layout={index % 2 === 0 ? 'left' : 'right'} // This should toggle left and right classes
                />
            ))}
        </div>
    );
};

export default ProjectList;
