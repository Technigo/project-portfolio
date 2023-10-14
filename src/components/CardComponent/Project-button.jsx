import React from 'react';

export const Buttons = ({ project }) => {
    return (
        <div className="project-wrapper">
            <div className="button-wrapper">

                <a href={project.github}>
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={project.githubBtn} alt="Github Link to project" />
                    </button>
                </a>
                <a href={project.netlify}>
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={project.liveDemoBtn} alt="Netlify Link to project" />
                    </button>
                </a>

            </div>
        </div>
    );
};
