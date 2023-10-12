import React from 'react';
import { ProjectCard } from './ProjectCard';
import { HeaderText } from './HeaderComponents/HeaderText';

export const Section = ({ projects }) => {
    return (
        <section>
            <HeaderText
                h1Text="Projects"

            />
            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </section>
    );
};
