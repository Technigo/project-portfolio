import React from 'react';

export const Buttons = ({ project }) => {
    return (
        <div className="project-wrapper">
            <div className="button-wrapper">

                <a href={project.github}>
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={project.githubBtn} alt="Description of the image" />
                    </button>
                </a>
                <a href={project.liveDemo}>
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={project.liveDemoBtn} alt="Description of the image" />
                    </button>
                </a>

            </div>
        </div>
    );
};
