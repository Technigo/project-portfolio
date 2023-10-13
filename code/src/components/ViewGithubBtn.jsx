// ViewGithubBtn.jsx

import React, { useState } from 'react';
import './ViewGithubBtn.css';

const ViewGithubBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`github-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={isHovered ? 'github2.png' : 'github1.png'}
                alt="GitHub Icon"
            />
            <span>View the code</span>
        </div>
    );
};

export default ViewGithubBtn;
