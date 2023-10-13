import React from 'react'
import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import { ProjectCard } from './ProjectCard'

export const Projects = ({ projectlist }) => {
    const titleprojects = 'Featured projects'
    return (
        <div>
            <SectionTitle sectionTitletext={titleprojects} />
            <div className="project-name">
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
                ))};
            </div>
        </div>
    )
}
