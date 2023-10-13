import { Heading } from '../reusables/Heading'
import { ProjectBox } from '../reusables/ProjectBox.jsx'
import './Projects.css'

export const Projects = () => {
    return (
        <article className="projects">
            <section className="projects-wrapper">
                <Heading
                    heading="Featured projects"
                    className="projects-heading" />
                <ProjectBox />
            </section>
        </article>
    )
}