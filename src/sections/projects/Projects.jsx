import React from 'react'
import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export const Projects = ({ projectlist }) => {
    const titleprojects = 'Featured projects'
    return (
        <section className='projects-section'>
            <SectionTitle sectionTitletext={titleprojects} />

            {projectlist.map((singleProject) => (
                <ProjectCard
                    key={singleProject.name}
                    name={singleProject.name}
                    description={singleProject.description}
                    image={singleProject.image}
                    tags={singleProject.tags}
                    netlify={singleProject.netlify}
                    github={singleProject.github}
                />
            ))}

        </section>
    )
}
