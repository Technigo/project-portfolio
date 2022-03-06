const featuredProjectsElement = document.getElementById("featured-projects")
const otherProjectsElement = document.getElementById("other-projects")
const otherProjectsData = [
    {
        id: "project-guess-who",
        heading: "Guess Who Game",
        description: "A Javascript Web application of the popular Guess Who minigame. The game starts immediately when one random character is selected and the user can ask various questions to identify them.",
        tags: ["javascript es6", "html5", "css3", "DOM", "JS array methods"],
        url: "https://github.com/faypi/project-guess-who"
    },
    {
        id: "project-chatbot",
        heading: "TaxiTomorrow Chatbot",
        description: "A simple chatbot JS application that communicates with the user to schedule a taxi pickup for the next day. Various options are presented to the user in the form of questions (text) or select options.",
        tags: ["javascript es6", "DOM", "form handling", "event listeners"],
        url: "https://github.com/faypi/project-chatbot"
    },
    {
        id: "project-business-site",
        heading: "Art Gallery Reservation",
        description: "A reservation form with a Javascript FAQ accordion.",
        tags: ["javascript es6", "DOM", "form handling", "event listeners"],
        url: "https://github.com/faypi/project-business-site"
    },
    {
        id: "project-news-site",
        heading: "Travel Destination Blog",
        description: "An HTML page of a travel blog with multiple structured flexbox layout.",
        tags: ["html5", "css3", "flexbox"],
        url: "https://github.com/faypi/project-news-site"
    },
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
        id: "project-github-tracker",
        projectTitle: "Github Tracker",
        projectImage: "assets/github-tracker.png",
        projectAlt: "github tracker application screenshot",
        heading: "A page tracking my github projects in JS",
        description: "A web application that displays all github repositories related to the bootcamp that can be found on my Github Profile. The application is using Github's API to fetch repositories, pull requests and comments and displays the info in a structured way.",
        tags: ["api", "github", "json", "html5", "css3", "javascript es6", "chartjs"],
        url: "https://github.com/faypi/project-github-tracker"
    },
    {
        id: "project-weather-app",
        projectTitle: "Weather App",
        projectImage: "assets/weather-app.png",
        projectAlt: "project weather app application screenshot",
        heading: "A weather app built in JS",
        description: "A web application that displays a 5 day weather forecast for a location and current weather for multiple other locations, using OpenWeatherMap's API.",
        tags: ["api", "json", "html5", "css3", "javascript es6"],
        url: "https://github.com/faypi/project-weather-app"
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
                    <div class="project-heading">${featured.heading.toUpperCase()}</div>
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
