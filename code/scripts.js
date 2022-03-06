const featuredProjectsElement = document.getElementById("featured-projects")
const otherProjectsElement = document.getElementById("other-projects")
const otherProjectsData = [
    {
        id: "guess-who",
        heading: "Guess Who Game",
        description: "Web application built in Javscript with external API",
        tags: ["html5", "css3", "javascript es6"]
    },
    {
        id: "guess-who",
        heading: "Guess Who Game",
        description: "Web application built in Javscript with external API",
        tags: ["html5", "css3", "javascript es6"]
    },
    {
        id: "guess-who",
        heading: "Guess Who Game",
        description: "Web application built in Javscript with external API",
        tags: ["html5", "css3", "javascript es6"]
    }
]

const tagsToHtml = (tagsArr) => {
    let tagsHtml = '';
    tagsArr.forEach(tag =>
        tagsHtml += `
        <div class="tag">${tag.toUpperCase()}</div>
    `);
    return tagsHtml;
}

const createOtherProjects = (otherProjectsArr) => {
    otherProjectsArr.forEach(
        (project) => {
            otherProjectsElement.innerHTML += `
                <div class="other-project" id=${project.id} >
                    <div class="project-heading">${project.heading.toUpperCase()}.</div>
                    <div class="project-description">${project.description}</div>
                    <div class="project-tags">${tagsToHtml(project.tags)}</div>
                </div>
            `
        }
    )
}

const featuredProjectsData = [
    {
        id: "guess-who",
        projectTitle: "test title",
        projectImage: "assets/project.png",
        projectAlt: "design screenshot",
        heading: "CHAT BOT BUILT IN JAVASCRIPT",
        description: "Responsive web site using HTML, CSS and JavaScript ES6 for pizza orders.",
        tags: ["html5", "css3", "javascript es6"]
    },
    {
        id: "guess-who",
        projectTitle: "test title",
        projectImage: "assets/project.png",
        projectAlt: "design screenshot",
        heading: "CHAT BOT BUILT IN JAVASCRIPT",
        description: "Responsive web site using HTML, CSS and JavaScript ES6 for pizza orders.",
        tags: ["html5", "css3", "javascript es6"]
    },
    {
        id: "guess-who",
        projectTitle: "test title",
        projectImage: "assets/project.png",
        projectAlt: "design screenshot",
        heading: "CHAT BOT BUILT IN JAVASCRIPT",
        description: "Responsive web site using HTML, CSS and JavaScript ES6 for pizza orders.",
        tags: ["html5", "css3", "javascript es6"]
    }
]

const createFeaturedProjects = (featuredProjectsArr) => {
    featuredProjectsArr.forEach(featured =>
        featuredProjectsElement.innerHTML += `
            <article class="project" id=${featured.id}>
                <div class="project-image-group">
                    <div class="project-overlay"></div>
                    <div class="project-overlay-title">${featured.projectTitle.toUpperCase()}</div>
                    <img class="project-image" src=${featured.projectImage} alt="${featured.projectAlt}" />
                </div>
                <div class="project-text-group">
                    <div class="project-heading">${featured.heading}</div>
                    <span class="project-description">${featured.description}                    </span>
                    <div class="project-tags">${tagsToHtml(featured.tags)}
                    </div>
                </div>
            </article>
        `
    )
}

createOtherProjects(otherProjectsData);
createFeaturedProjects(featuredProjectsData);
