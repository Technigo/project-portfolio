import './body.css'
import { useState, useEffect } from 'react';
import { useRef } from "react";
import { ProgressBar } from '/src/components/progress-bar/ProgressBar';
import { Header } from '/src/sections/header/Header';
import { Tech } from '/src/sections//tech/Tech';
import { Projects } from '/src/sections//projects/Projects';
import { Articles } from '/src/sections//articles/Articles';
import { Skills } from '/src/sections//skills/Skills';
import { Footer } from '/src/sections//footer/Footer';
import { FooterBanner } from '/src/sections//footer/FooterBanner';
import arrowImage from '/assets/arrow.svg'

export const Body = () => {
    //Set state to show where the user is in the user flow of the portfolio
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        setProgress(scrollProgress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sets a useRef default as null and saves it in the variable name techSectionRef
    const techSectionRef = useRef(null);

    // Function to handle the scroll effect on techSectionRef
    const handleScrollToTech = () => {
        techSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="main-wrapper">
            <ProgressBar progress={progress} />
            <Header />
            <a href="#tech-link" onClick={handleScrollToTech} >
                <section className="arrow-container">
                    <img
                        src={arrowImage}
                        alt="Animated Arrow"
                        className="arrow"
                    />
                </section>
            </a>
            <Tech />
            <Projects />
            <Articles />
            <Skills />
            <Footer />
            <FooterBanner />
        </div>
    );
};
