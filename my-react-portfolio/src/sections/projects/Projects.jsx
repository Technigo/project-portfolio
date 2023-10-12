import './Projects.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { ListProjectCards } from './ListProjectCards.jsx';

export const Projects = () => {

    return (
        <div className="projects-container">
            <Heading level={1} text="Featured Projects" className="featured-projects" />
            <ListProjectCards />
        </div>
    );
};