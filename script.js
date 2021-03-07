const projectWrapper = document.getElementById('project-wrapper')

const PROJECTS = [
  {
    title: 'GUESS WHO',
    img: './assets/guesswho.png',
    alt: 'Gameboard with animals',
    description: 'The assignment was to create a digital version of the 90s game Guess Who. I created a version with cute baby animals, beause - why not?',
    livelink: 'https://competent-newton-827cc6.netlify.app/',
    gitlink: 'https://github.com/sirimatsdotter/project-guess-who/',
    tag: ['JAVASCRIPT','HTML','CSS', '']
  },
  {
    title: 'BUSINESS SITE',
    img: './assets/businesssite.png',
    alt: 'Business site',
    description: 'In this project we learnt how to do accordions and forms on a business site, using JavaScript for the first time!',
    livelink: 'https://gracious-jennings-2cf5eb.netlify.app/',
    gitlink: 'https://github.com/sirimatsdotter/project-business-site',
    tag: ['JAVASCRIPT','HTML','CSS', '']
  },
  {
    title: 'NEWS SITE',
    img: './assets/newssite.png',
    alt: 'Colourful news site',
    description: 'This was one of the first projects were the focus was on making a responsive fictional news site.',
    livelink: 'https://musing-poincare-e4efd4.netlify.app/',
    gitlink: 'https://github.com/sirimatsdotter/project-news-site',
    tag: ['HTML','CSS', '', '']
  },
  {
    title: 'CHAT BOT',
    img: './assets/chatbot.png',
    alt: 'Chat window with purple background',
    description: 'A really fun project were me and Jennie created a chat bot to help you pick an outfit for your night out!',
    livelink: 'https://sleepy-nobel-972874.netlify.app/',
    gitlink: 'https://github.com/sirimatsdotter/project-chatbot',
    tag: ['JAVASCRIPT','HTML','CSS', '']
  },
  {
    title: 'WEATHER APP',
    img: './assets/weatherapp.png',
    alt: 'Weather app with text',
    description: 'In this project we were introduced to API´s and created a weather app using the Open Weather API.',
    livelink: 'https://loving-feynman-2c374e.netlify.app/',
    gitlink: 'https://github.com/sirimatsdotter/project-weather-app',
    tag: ['JAVASCRIPT','APIs','HTML','CSS']
  },
]

const generateProjects = () => {
projectWrapper.innerText = projectWrapper.innerText.replace('undefined', '')
PROJECTS.forEach((project) => {
  projectWrapper.innerHTML += `
  <div class="project-item">
    <h3 class="project-header">${project.title}</h3>
    <img class="project-img" src="${project.img}" alt="${project.alt}">
    <div class="tags">
      <p class="tag">${project.tag[0]}<p>
      <p class="tag">${project.tag[1]}<p>
      <p class="tag">${project.tag[2]}<p>
      <p class="tag">${project.tag[3]}<p>
    </div>
    <div class="project-description">
      <p>${project.description}</p>
      <span class="project-links">
        <a href="${project.gitlink}"><i class="fab fa-github"></i></a> | <a href="${project.livelink}"><i class="fas fa-external-link-square-alt"></i></a>
      </span>
    </div>
  </div>
  `
  })
}
generateProjects()



