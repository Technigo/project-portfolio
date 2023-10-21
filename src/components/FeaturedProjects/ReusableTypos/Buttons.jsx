import React, { useState } from 'react';
import "./buttons.css";

export const Button = ({ link, normalImage, hoverImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const imageSrc = isHovered ? hoverImage : normalImage;

    return (
        <div className="button-container">
            <a
                href={link}
                className="button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={imageSrc} alt={isHovered ? 'Hover' : 'Normal'} />
               
            </a>
        </div>
    );
};
