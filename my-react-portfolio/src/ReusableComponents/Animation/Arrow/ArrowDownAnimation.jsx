// ArrowDownAnimation.jsx
import React, { useRef } from 'react';
import { useGSAP } from '../useGSAP'; // Adjust the import path as necessary
import { ArrowDown } from './ArrowDown'; // Adjust the import path as necessary

export const ArrowDownAnimation = () => {
    const arrowRef = useRef(null);

    useGSAP(arrowRef, {
        y: 20, // Move the arrow 20 pixels down
        repeat: -1, // Infinite loop
        yoyo: true, // Go back and forth
        duration: 1, // Duration of 1 second for each animation cycle
        ease: 'Power1.easeInOut'
    });

    return <ArrowDown ref={arrowRef} />;
};

