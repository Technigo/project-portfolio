import React, { useState } from 'react';
import "./timetotalk.css";

export const TimeToTalk = () => {
        // Define state variables and their update functions to track hover state.
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

        // Determine the image source based on hover state for LinkedIn icon.
    const imageSrc1 = isHovered1
        ? './src/assets/icons/linkedin=hover.svg'
        : './src/assets/icons/linkedin=default.svg';

            // Determine the image source based on hover state for GitHub icon.
    const imageSrc2 = isHovered2
        ? './src/assets/icons/github=hover.svg'
        : './src/assets/icons/github=default.svg';

    return (
        <section className="timetotalk-wrapper">
            <h1 className="h1-timetotalk">Let's talk</h1>
            <section className="profile-image">
                <img src="./src/assets/images/profilepic.jpg" alt="Profile picture of Jenny" className="profile-img" />
            </section>
            <section className="contact-information">
                <h3 className="contact-name">Jenny Larsen</h3>
                <h3 className="contact-phone">+46(0)727402484</h3>
                <h3 className="contact-email">jennymarikalarsen@gmail.com</h3>
            </section>
            <section className="contact-buttons">
                <a href="https://www.linkedin.com/in/jenny-larsen-b51140219/">
                    {/* Display a LinkedIn icon with hover effect. */}
                    <img
                        src={imageSrc1}
                        alt="Clickable button that goes to Jenny's LinkedIn"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    />
                </a>
                <a href="https://github.com/jennylarsen">
                    {/* Display a GitHub icon with hover effect. */}
                    <img
                        src={imageSrc2}
                        alt="Clickable button that goes to Jenny's Github"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    />
                </a>
            </section>
        </section>
    )
}
