import React from 'react';

export const Buttons = ({ project }) => {
    return (
        <div className="project-wrapper">
            <div className="button-wrapper">
                <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to the GitHub repository"
                >
                    <button type="button">
                        <img src={project.githubBtn} alt="GitHub" />

                    </button>
                </a>
                <a href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button type="button">
                        <img src={project.liveDemoBtn} alt="Live Demo" />

                    </button>
                </a>
            </div>
        </div>
    );
};
