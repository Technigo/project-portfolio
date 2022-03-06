const featuredProjectsElement = document.getElementById("featured-projects")
const otherProjectsElement = document.getElementById("other-projects")
const otherProjectsData = [
    {
        id: "project-guess-who",
        heading: "Guess Who Game",
        description: "A Javascript Web application of the popular Guess Who minigame. The game starts immediately when one random character is selected and the user can ask various questions to identify them.",
        tags: ["javascript es6", "html5", "css3", "DOM", "JS array methods"],
        github_url: "https://github.com/faypi/project-guess-who",
        url: "https://fay-guess-who.netlify.app/"
    },
    {
        id: "project-chatbot",
        heading: "TaxiTomorrow Chatbot",
        description: "A simple chatbot JS application that communicates with the user to schedule a taxi pickup for the next day. Various options are presented to the user in the form of questions (text) or select options.",
        tags: ["javascript es6", "DOM", "form handling", "event listeners"],
        github_url: "https://github.com/faypi/project-chatbot",
        url: "https://camilla-fay-chatbot.netlify.app/"
    },
    {
        id: "project-business-site",
        heading: "Art Gallery Reservation",
        description: "A reservation form with a Javascript FAQ accordion.",
        tags: ["javascript es6", "DOM", "form handling", "event listeners"],
        github_url: "https://github.com/faypi/project-business-site",
        url: "https://pedantic-lamarr-2f06e0.netlify.app/"
    },
    {
        id: "project-news-site",
        heading: "Travel Destination Blog",
        description: "An HTML page of a travel blog with multiple structured flexbox layout.",
        tags: ["html5", "css3", "flexbox"],
        github_url: "https://github.com/faypi/project-news-site",
        url: "https://nostalgic-einstein-5dd2b4.netlify.app/"
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
                    <a href=${project.github_url} target="_blank"><div class="project-heading">${project.heading.toUpperCase()}.</div></a>
                    <div class="project-description">${project.description} <a class="project-github-url" href=${project.github_url} target="_blank">>></a></div>
                    <div class="project-url"><a href=${project.url} target="_blank">View it live</a></div>
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
        github_url: "https://github.com/faypi/project-github-tracker",
        url: "https://fay-github-tracker.netlify.app/"
    },
    {
        id: "project-weather-app",
        projectTitle: "Weather App",
        projectImage: "assets/weather-app.png",
        projectAlt: "project weather app application screenshot",
        heading: "A weather app built in JS",
        description: "A web application that displays a 5 day weather forecast for a location and current weather for multiple other locations, using OpenWeatherMap's API.",
        tags: ["api", "json", "html5", "css3", "javascript es6"],
        github_url: "https://github.com/faypi/project-weather-app",
        url: "https://weather-app-foxes-2-2022.netlify.app/"
    }
]

const createFeaturedProjects = (featuredProjectsArr) => {
    featuredProjectsArr.forEach(featured =>
        featuredProjectsElement.innerHTML += `
            <article class="project" id=${featured.id}>
                <a href=${featured.github_url} target="_blank">
                    <div class="project-image-group">
                        <div class="project-overlay"></div>
                        <div class="project-overlay-title">${featured.projectTitle.toUpperCase()}</div>
                        <img class="project-image" src=${featured.projectImage} alt="${featured.projectAlt}" />
                    </div>
                </a>
                <div class="project-text-group">
                    <a href=${featured.github_url} target="_blank">
                        <div class="project-heading">${featured.heading.toUpperCase()}</div>
                    </a>
                    <span class="project-description">${featured.description}</span>
                    <div class="project-url"><a href=${featured.url} target="_blank">View it live</a></div>
                    <div class="project-tags">${tagsToHtml(featured.tags)}
                    </div>
                </div>
            </article>
        `
    )
}

createOtherProjects(otherProjectsData);
createFeaturedProjects(featuredProjectsData);
