
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import bannerSVG from "/src/assets/icon/banner.svg"; // Adjust the import path to your SVG file

export const FooterBanner = () => {
    const bannerRef = useRef(null);

    useEffect(() => {
        // Ensure GSAP animation only initializes once the component is mounted
        const banner = bannerRef.current;
        const bannerWidth = banner.offsetWidth;

        gsap.to(banner, {
            x: -bannerWidth, // Move the banner to the left by its own width
            ease: "none",
            // repeat: -1, // Infinite loop
            duration: 20, // Duration to complete one loop, adjust as needed for speed
        });
    }, []);

    return (
        <div ref={bannerRef} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            <img src={bannerSVG} alt="Fullstack Developer · Evelyn Del Carmen · Fullstack Developer · Evelyn Del Carmen · Fullstack Developer · Evelyn Del Carmen · Fullstack Developer · Evelyn Del Carmen · " />
        </div>
    );
};
