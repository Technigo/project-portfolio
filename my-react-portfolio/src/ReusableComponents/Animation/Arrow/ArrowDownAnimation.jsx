// ArrowDownAnimation.jsx
// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
//import { useGSAP } from "../useGSAP.js"; // Adjust the import path as necessary
import ArrowDown from "./ArrowDown.jsx"; // Adjust the import path as necessary

export const ArrowDownAnimation = () => {
  const arrowRef = useRef(null);

  return <ArrowDown ref={arrowRef} />;
};

export default ArrowDownAnimation; // Add this line to export the component

/*


useGSAP(
    arrowRef,
    {
      y: 20, // Animation options
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "Power1.easeInOut",
    },
    {
      // ScrollTrigger options
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
      // markers: true, // Uncomment for debugging
    }
  );



ArrowDownAnimation.jsx
import React, { useRef } from 'react';
import { useGSAP } from '../useGSAP'; 
import { ArrowDown } from './ArrowDown'; 

export const ArrowDownAnimation = () => {
    const arrowRef = useRef(null);

    useGSAP(arrowRef, {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'Power1.easeInOut',
    }, {
      
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
        
    });

    return <ArrowDown ref={arrowRef} />;
};*/
