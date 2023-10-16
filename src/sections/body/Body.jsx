import './body.css'
import { Header } from '/src/sections/header/Header';
import { Tech } from '/src/sections//tech/Tech';
import { Projects } from '/src/sections//projects/Projects';
import { Articles } from '/src/sections//articles/Articles';
import { Skills } from '/src/sections//skills/Skills';
import { Footer } from '/src/sections//footer/Footer';


export const Body = () => {

    return (
        <div className="main-wrapper">
            <Header />
            <Tech />
            <Projects />
            <Articles />
            <Skills />
            <Footer />
        </div>
    );
};
