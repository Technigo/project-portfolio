import './Projects.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { ListProjectCards } from './ListProjectCards.jsx';

export const Projects = () => {

    return (
        <section className="projects-container">
            <section className='projects-wrapper'>
                <Heading level={1} text="Featured Projects" className="projects-heading" />
                <ListProjectCards />
            </section>
        </section>
    );
};