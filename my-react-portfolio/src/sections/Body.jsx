import { Header } from './header/Header';
import { Tech } from './tech/Tech';
import { Projects } from './projects/Projects';
import { Article } from './articles/Article';
import { Skills } from './skills/Skills';
import { Contact } from './contact/Contact';

export const Body = () => {

    // Returning JSX to render the component UI
    return (
        <div className="main-wrapper">
            <Header />
            <Tech />
            <Projects />
            <Article />
            <Skills />
            <Contact />
        </div>
    );
};
