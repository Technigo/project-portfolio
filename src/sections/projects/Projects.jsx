import './projects.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { ProjectList } from './ProjectList.jsx';

export const Projects = () => {

    return (
        <section className="projects-container">
            <section className='projects-wrapper'>
                <Heading level={1} text="Featured Projects" className="projects-heading" />
                <ProjectList />
            </section>
        </section>
    );
};