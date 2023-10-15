import React, { useState } from 'react';
import './Button.css';
import githubSVG from './assets/github.svg';
import githubHoverSVG from './assets/github-hover.svg';
import netlifySVG from './assets/netlify.svg';
import netlifyHoverSVG from './assets/netlify-hover.svg';
import mediumSVG from './assets/medium.svg';
import mediumHoverSVG from './assets/medium-hover.svg';

export const Button = ({ label, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const determineSVG = () => {
        if (label === 'GitHub') {
            return isHovered ? githubHoverSVG : githubSVG;
        } 
        if (label === 'Netlify') {
            return isHovered ? netlifyHoverSVG : netlifySVG;
        }
        if (label === 'Medium') {
            return isHovered ? mediumHoverSVG : mediumSVG;
        }
        return '';
    };

    const svgSrc = determineSVG();

    return (
        <button className={`btn ${label.toLowerCase()}`} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}>
            <img src={svgSrc} alt={`${label} Logo`} className="btn-icon" />
        </button>
    );
};
