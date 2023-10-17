import React, { useState } from 'react';
import './ReadArticleBtn.css';

const ReadArticleBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`article-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src="Doc.svg"
                alt="Document Icon"
            />
            <span>Read Article</span>
        </div>
    );
};

export default ReadArticleBtn;
