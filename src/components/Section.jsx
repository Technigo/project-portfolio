import React from 'react';
import { ProjectCard } from './ProjectCard';
import { HeaderText } from './HeaderText';

export const Section = ({ projects }) => {
    return (
        <section>
            <div className="card-header-wrapper">
                <HeaderText h1Text="Featured Projects" />
            </div>

            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </section>
    );
};

