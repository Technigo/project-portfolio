/* import React from 'react';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardButtons from './CardButtons'; */
import "./css/ProjectBox.css"

const ProjectBox = ({ title, description, image, liveDemoUrl, codeUrl }) => {
    return (
        <div className="project-box">
            <CardImage image={image} />
            <CardContent title={title} description={description} />
            <CardButtons liveDemoUrl={liveDemoUrl} codeUrl={codeUrl} />
        </div>
    );
};

export default ProjectBox;