import React from 'react';


//Gets the buttons and links from project.json
export const Buttons = ({ project }) => {
    return (
        <div className="project-wrapper">
            <div className="button-wrapper">

                <a href={project.github}>
                    <button role="button" tabIndex="0" onClick={() => window.location = project.github}>
                        <img src={project.githubBtn} alt="Github Link to project" aria-label="View on GitHub" />
                    </button>
                </a>
                <a href={project.netlify}>
                    <button role="button" tabIndex="0" onClick={() => window.location = project.netlify}>
                        <img src={project.liveDemoBtn} alt="Netlify Link to project" aria-label="View live demo on Netlify" />
                    </button>
                </a>

            </div>
        </div>
    );
};
