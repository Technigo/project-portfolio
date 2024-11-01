import { Heading } from '../reusables/Heading'
import { ProjectBox } from '../reusables/ProjectBox.jsx'
import './Projects.css'

export const Projects = () => {
    return (
        <div className="projects-container">
            <Heading
                heading="Featured projects"
                className="projects-heading" />
            <ProjectBox />
        </div>
    )
}