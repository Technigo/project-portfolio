import React, { useState } from 'react';
import './LinkedBtn.css';

const LinkedBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`linked-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={isHovered ? 'linkedin2.png' : 'linkedin1.png'}
                alt="Live Demo Icon"
            />
            <span>Linked in</span>
        </div>
    );
};

export default LinkedBtn;
