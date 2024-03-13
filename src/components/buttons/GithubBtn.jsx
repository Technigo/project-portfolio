import React, { useState } from 'react';
import './GithubBtn.css';

const GithubBtn = () => {
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
                src={isHovered ? 'github1.png' : 'github3.png'}
                alt="Github Icon"
            />

        </div>
    );
};

export default GithubBtn;
