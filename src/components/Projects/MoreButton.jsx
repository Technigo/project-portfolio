import React from 'react';
import './MoreButton.css';
import ArrowDown from '../../assets/ArrowDown.svg'; 

const MoreButton = ({ onClick, showAll }) => {
    return (
        <button className="more-button" onClick={onClick}>
            <img 
                src={ArrowDown} 
                alt="Arrow Icon" 
                className={`icon ${showAll ? 'rotated' : ''}`} 
            />
            See more projects
        </button>
    );
};

export default MoreButton;
