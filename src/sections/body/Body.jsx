import './body.css'
import { useRef } from "react";
import { Header } from '/src/sections/header/Header';
import { Tech } from '/src/sections//tech/Tech';
import { Projects } from '/src/sections//projects/Projects';
import { Articles } from '/src/sections//articles/Articles';
import { Skills } from '/src/sections//skills/Skills';
import { Footer } from '/src/sections//footer/Footer';
import { FooterBanner } from '/src/sections//footer/FooterBanner';
import arrowImage from '/assets/arrow.svg'

export const Body = () => {

    // Sets a useRef default as null and saves it in the variable name techSectionRef
    const techSectionRef = useRef(null);

    // Function to handle the scroll effect on techSectionRef
    const handleScrollToTech = () => {
        techSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="main-wrapper">
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
