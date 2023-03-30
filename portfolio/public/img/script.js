const featuredWrapper = document.getElementById("featuredWrapper")

const projects = [
    {
        name: 'Happy thoughts',
        img: 'happythoughts.png',
        alt: 'the site shown on mobile',
        description: 'A twitter-like site, but with happy thoughts only. Practicing API fetches and following a design.',
        tags: ['React', 'CSS'],
        demo: 'https://enchanting-halva-88064a.netlify.app/',
        code: 'https://github.com/code-and-cats/project-happy-thoughts',
    },
    {
        name: 'Pet shrimp order form',
        img: 'shrimporder.png',
        alt: 'the site shown on mobile',
        description: 'A small order form to practice React states. Order your shrimp and get a confirmation!',
        tags: ['React', 'CSS'],
        demo: 'https://astounding-starship-c864d5.netlify.app/',
        code: 'https://github.com/code-and-cats/project-survey',
    },
    {
        name: 'Music releases',
        img: 'musicreleases.png',
        alt: 'the site shown on tablet',
        description: 'Spotify clone fetching music releases from an open API. The 50 latest music releases... from then.',
        tags: ['React', 'CSS', 'pair-programming'],
        demo: 'https://vio-and-fridas-music-release-project.netlify.app/',
        code: 'https://github.com/Technigo/project-music-releases/pull/251',
    },
    {
        name: 'Business site - Dynamic Duo',
        img: 'dd.png',
        alt: 'the site shown on desktop and mobile',
        description: 'Content consulting and styling of a Wordpress site for an experienced event company in Sweden.',
        tags: ['Wordpress'],
        demo: 'http://dynamicduo.se/',
        code: 'http://dynamicduo.se/',
    },
    {
        name: 'Weather app',
        img: 'weatherapp.png',
        alt: 'hand holding a mobile phone with the app on it',
        description: 'The weather app fetches weather data from whichever city the user chooses (but will always start in Reykjavik).',
        tags: ['HTML', 'JavaScript', 'CSS'],
        demo: 'https://comfy-weatherapp-ea57d9.netlify.app/',
        code: 'https://github.com/code-and-cats/project-weather-app',
    },
    {
        name: 'Guess who - the game',
        img: 'guesswoof.png',
        alt: 'plant bot on a laptop with a leaf of a plant in a glass of water next to it',
        description: 'A take on the board game "guess who" - but with dogs. Wearing hats.',
        tags: ['HTML', 'JavaScript', 'CSS'],
        demo: 'https://chipper-nasturtium-c0cb39.netlify.app/',
        code: 'https://github.com/code-and-cats/project-guess-who',
    },
    {
        name: 'Chatbot built in JavaScript',
        img: 'plantbot.png',
        alt: 'the game shown on desktop and mobile',
        description: 'A conversational tool to help the user choose the perfect plant.',
        tags: ['HTML', 'JavaScript', 'CSS'],
        demo: 'https://vermillion-kashata-dd952d.netlify.app/',
        code: 'https://github.com/code-and-cats/project-chatbot',
    },
    {
        name: 'News site',
        img: 'dailymews.png',
        alt: 'the site shown on desktop, mobile and tablet',
        description: 'My first project working with responsive cards, flexbox and grid.',
        tags: ['HTML', 'CSS'],
        demo: 'https://earnest-sorbet-0d6a88.netlify.app/',
        code: 'https://github.com/code-and-cats/project-news-site',
    }
   
]
const showProjects = () => {

projects.map((project) => { 
    featuredWrapper.innerHTML +=
        `<article class="featured-article">
        <div class="article-image-wrapper">
        <img src=${project.img} class="article-image" alt="${project.alt}">
          </div>
          <div class="article-text">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          </div>
          <div class="tag-list">${project.tags.map(el => `<p>${el}</p>`).join('')}
          </div>
          <div class="project-links-wrapper">
          <form action=${project.demo} method="get" target="_blank">
              <button type="submit" class="view-demo-link">
                <img src="Live-demo.svg" class="icon" alt="">Live demo</button>
            </form>
            <form action=${project.code} method="get" target="_blank">
              <button type="submit" class="view-code-link">
                <img src="github-bl.svg" class="icon" alt="">View the code
              </button>
            </form>
          </div>
        </article>`
})
}

showProjects()