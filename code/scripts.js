const otherProjectsElement = document.getElementById("other-projects")
const otherProjectsData = [
    {
        id: "guess-who",
        heading: "Guess Who Game",
        description:  "Web application built in Javscript with external API",
        tags: ["html5", "css3", "javascript es6"]
    },
    {
        id: "guess-who",
        heading: "Guess Who Game",
        description:  "Web application built in Javscript with external API",
        tags: ["html5", "css3", "javascript es6"]
    },
    {
        id: "guess-who",
        heading: "Guess Who Game",
        description:  "Web application built in Javscript with external API",
        tags: ["html5", "css3", "javascript es6"]
    }
]


const createOtherProjects = (projectsArr) => {
    projectsArr.forEach(
        (project) => {
            let tagsHtml = '';
            project.tags.forEach(tag => 
                tagsHtml += `
                <div class="tag">${tag.toUpperCase()}</div>
            `);
            otherProjectsElement.innerHTML += `
                <div class="other-project" id=${project.id} >
                    <div class="project-heading">${project.heading.toUpperCase()}</div>
                    <div class="project-description">${project.description}</div>
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `
        }
    )
}

createOtherProjects(otherProjectsData);