import React, { useState } from 'react';
import './LiveDemoBtn.css';

const LiveDemoBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`livedemo-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={isHovered ? 'livedemo2.png' : 'livedemo1.png'}
                alt="Live Demo Icon"
            />
            <span>Live Demo</span>
        </div>
    );
};

export default LiveDemoBtn;
