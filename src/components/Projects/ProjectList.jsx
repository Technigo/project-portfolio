import React, { useState } from 'react';
import './ProjectList.css';
import ProjectCard from './ProjectCard';
import projectsData from '../../../../projects.json'; 
import MoreButton from './MoreButton';

const ProjectList = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(prevShowAll => !prevShowAll);

    const displayedProjects = showAll ? projectsData.projects : projectsData.projects.slice(0, 3);

    return (
        <div className="project-list">
            <h2>Featured Projects</h2>
            {displayedProjects.map((project, index) => (
                <ProjectCard 
                    key={project.name}
                    project={project}
                    layout={index % 2 === 0 ? 'left' : 'right'} 
                />
            ))}
            <MoreButton onClick={toggleShowAll} showAll={showAll} />
        </div>
    );
};

export default ProjectList;
