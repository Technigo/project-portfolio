import React from "react";
import arrow from "../assets/arrow.svg";

export const Introduction = () => {
    return (
        <section className="intro">
            <h1 className="name">Sherry Isola-Gbenla</h1>
            <p className="role">Frontend Developer</p>
            <img className="avatar" src="/sherry.jpg" alt="picture of Sherry Isola" />
            <p className="bio">
                I work in Talent Acquisition and HR within the iGaming industry, but I've developed a strong interest in coding and technology. I'm passionate about learning new skills and diving into the tech world, constantly challenging myself with new tools and innovations. My background in HR has given me a deep understanding of people and processes, and I'm excited to combine that with my growing knowledge of coding to create impactful and user-friendly digital solutions.
            </p>
            <img className="arrow" src={arrow} alt="arrow to show to scroll down" />
        </section>
    );
};
