// useGSAP.js
import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useGSAP = (ref, animationOptions) => {
    useEffect(() => {
        if (ref.current) {
            gsap.to(ref.current, animationOptions);
        }
    }, [ref, animationOptions]); // Dependencies array ensures effect runs when ref or animationOptions change
};

