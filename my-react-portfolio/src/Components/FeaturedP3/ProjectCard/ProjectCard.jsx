import React from 'react'


//fler imports här om reusable components?

export const ProjectCard = ({ projects }) => {
    const allProjectsArray = projects
    console.log(allProjectsArray)

    const namesToFilter = ["project-chatbot", "project-guess-who", "project-happy-thoughts-vite", "project-music-releases-vite", "project-pizza"]
    const filteredProjects = projects.filter((project) => namesToFilter.includes(project.name)) //filtering projects I want to show
    console.log(filteredProjects)

    return (
        <section className="project-card-wrapper">
            {filteredProjects.map((project) => (
                <div key={project.name}>
                    <div>{project.name}</div>
                    <div>{project.description}</div>
                    <div>{project.topics}</div>
                    <div>{project.homepage}</div>
                    <div>{project.html_url}</div>
                </div>))}
        </section>
    )
}