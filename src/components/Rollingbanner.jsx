import React, { useEffect, useState } from 'react';

const RollingBanner = () => {
    const initialText = 'Lisa Dahlkar · Front End Developer · ';

    // Use useState to manage the rolling text
    const [rollingText, setRollingText] = useState(initialText);

    useEffect(() => {
        const roll = () => {
            // Rotate the text by moving the last character to the front
            setRollingText((prevText) => prevText.slice(1) + prevText.charAt(0));
        };

        const animationInterval = setInterval(roll, 80); // Adjust the interval for the desired speed

        return () => {
            clearInterval(animationInterval); // Clean up the interval on component unmount
        };
    }, []);

    return (
        <div className="rolling-banner">
            <div className="rolling-text">{rollingText}</div>
        </div>
    );
};

export default RollingBanner;
