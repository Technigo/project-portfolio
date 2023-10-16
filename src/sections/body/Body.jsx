import './body.css'
import { useRef } from "react";
import { Header } from '/src/sections/header/Header';
import { Tech } from '/src/sections//tech/Tech';
import { Projects } from '/src/sections//projects/Projects';
import { Articles } from '/src/sections//articles/Articles';
import { Skills } from '/src/sections//skills/Skills';
import { Footer } from '/src/sections//footer/Footer';
import { Image } from '/src/components/images/Image';

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
                <Image
                    sectionClassName={"arrow-down"}
                    elementClassName={"image"}
                    link={"/assets/arrow.svg"}
                    ImageAltText={"Follow arrow down"}
                    tabIndex="1"
                />
            </a>
            <Tech />
            <Projects />
            <Articles />
            <Skills />
            <Footer />
        </div>
    );
};
