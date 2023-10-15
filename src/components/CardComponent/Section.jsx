import React from 'react';
import { ProjectCard } from './ProjectCard';
import { HeaderText } from '../HeaderComponents/HeaderText';

export const Section = ({ projects }) => {
    return (
        <section aria-label="Featured Projects">
            <div className="card-header-wrapper">
                <HeaderText h1Text="Featured Projects" />
            </div>

            {projects.map((project, index) => (
                <div key={index} aria-label={`Project ${index + 1}`}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </section>
    );
};
