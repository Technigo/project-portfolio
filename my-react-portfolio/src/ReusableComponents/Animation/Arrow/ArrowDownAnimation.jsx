// ArrowDownAnimation.jsx
import React, { useRef } from 'react';
import { useGSAP } from '../useGSAP'; // Adjust the import path as necessary
import { ArrowDown } from './ArrowDown'; // Adjust the import path as necessary

export const ArrowDownAnimation = () => {
    const arrowRef = useRef(null);

    useGSAP(arrowRef, {
        y: 20, // Animation options
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'Power1.easeInOut',
    }, {
        // ScrollTrigger options
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true, // Uncomment for debugging
    });

    return <ArrowDown ref={arrowRef} />;
};

