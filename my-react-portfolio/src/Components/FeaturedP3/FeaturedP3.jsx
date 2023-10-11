import React, { useState, useEffect } from 'react'

import { ProjectCard } from './ProjectCard/ProjectCard.jsx'


export const FeaturedP3 = () => {
    const [projects, setProjects] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [topics, setTopics] = useState("")
    const [homepage, setHomepage] = useState("")
    const [html_url, setHtml_url] = useState("")

    const API = "https://api.github.com/users/IdahCollin/repos"

    const fetchProjects = async () => {
        try {
            const response = await fetch(API)

            if (!response.ok) {
                throw new Error('Error when fetching data')
            }

            const data = await response.json()
            console.log(data)
            setProjects(data)
            console.log(projects)
        }
        catch (error) {
            console.error('Error when fetching data:', error)
        }
    }
    useEffect(() => {
        fetchProjects()
    }, [])



    return (
        <div>
            <ProjectCard projects={projects} />
        </div>
    )
}
