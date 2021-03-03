const projectWrapper = document.getElementById('project-wrapper')

const PROJECTS = [
  {
    title: 'GUESS WHO',
    img: './assets/guesswho.png',
    alt: 'Picture of a gameboard with animals',
    description: 'The assignment was to create a digital version of the 90s game Guess Who. I created a version with cute baby animals, beause - why not?',
    livelink: 'https://competent-newton-827cc6.netlify.app/',
    gitlink: 'https://github.com/sirimatsdotter/project-guess-who/',
  },
  {
    title: 'BUSINESS SITE',
    img: './assets/businesssite.png',
    alt: 'Picture of a business site',
    description: 'Description description, description. Description!',
    livelink: '#',
    gitlink: '#',
  },
  {
    title: 'NEWS SITE',
    img: './assets/newssite.png',
    alt: 'Picture of a colourful news site',
    description: 'Description description, description. Description!',
    livelink: '#',
    gitlink: '#',
  },
  {
    title: 'CHAT BOT',
    img: './assets/chatbot.png',
    alt: 'Picture a chat window with purple background',
    description: 'Description description, description. Description!',
    livelink: '#',
    gitlink: '#',
  },
  {
    title: 'WEATHER APP',
    img: './assets/weatherapp.png',
    alt: 'Picture of a weather app with text',
    description: 'Description description, description. Description!',
    livelink: '#',
    gitlink: '#',
  },
]


PROJECTS.forEach((project) => {
  projectWrapper.innerHTML += `
  <div class="project-item">
    <h3 class="project-header">${project.title}</h3>
    <img class="project-img" src="${project.img}" alt="${project.alt}">
    <div class="project-description">
      <p>${project.description}</p>
      <span class="project-links">
        <a href="${project.gitlink}"><i class="fab fa-github"></i></a> | <a href="${project.livelink}"><small>LIVE PAGE</small></a>
      </span>
    </div>
  </div>
  `
})


