//DOM Selectors
const menuIcon = document.getElementById('menu-icon')
const menuContainer = document.getElementById('menu-container')
const featuredProjects = document.getElementById('featured-projects')
const AnotherProjects = document.getElementById('another-projects')

//Global Variables
const bestProjects = [
  {
    title: 'Online Game Guess Who?',
    img: 'https://d33wubrfki0l68.cloudfront.net/60298aa13d362f0008ff8384/screenshot.png',
    projectBrief: 'Responsive board game Guess Who- Superhero Edition',
    buildIn: 'HTML5| CSS| JavaScript',
    link: 'https://super-guess-who.netlify.app/'
  },
  {
    title: 'Weather-App',
    img: 'https://d33wubrfki0l68.cloudfront.net/603044d6dd4f780007b30f44/screenshot.png',
    projectBrief: 'Resposive app built it with JavaScript fetching data from OpenWeatherMap API',
    buildIn: 'HTML5| CSS| JavaScript',
    link: 'https://weather-app-mm.netlify.app/'
  },
  {
    title: 'Chat Bot',
    img: 'https://d33wubrfki0l68.cloudfront.net/602062c549428c29166021fe/screenshot.png',
    projectBrief: 'Resposive Chat Bot built it with JavaScript to book Covid Vaccine',
    buildIn:'HTML5| CSS| JavaScript',
    link: 'https://covid-chatbot.netlify.app/'
  },
  {
    title: 'WoodMood Business Site',
    img: 'https://d33wubrfki0l68.cloudfront.net/6023cb63f0c25f0007b050ba/screenshot.png',
    projectBrief: 'Responsive business website with registration form and FAQ section',
    buildIn: 'HTML5| CSS| JavaScript',
    link: 'https://woodmood-project.netlify.app/'
  },
]

const otherProjects = [
  {
    title: 'News site',
    img: './in-contruction-img.PNG',
    projectBrief: 'Responsive News website about video game',
    buildIn:'HTML5| CSS',
    link: 'https://games-news-rubmaigut.netlify.app/'
  },
  {
    title: 'Recipes site',
    img: './in-contruction-img.PNG',
    projectBrief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    buildIn: 'HTML5| CSS| JavaScript',
    link: ''
  },
  {
    title: 'News site',
    img: './in-contruction-img.PNG',
    projectBrief: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    buildIn:'HTML5| CSS',
    link: ''
  },
  {
    title: 'Recipes site',
    img: './in-contruction-img.PNG',
    projectBrief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    buildIn: 'HTML5| CSS| JavaScript',
    link: ''
  },
]

// Featured Projects.
const renderBestProject = () => {
  bestProjects.forEach((project) => {
    featuredProjects.innerHTML +=
      `<a class="project" href="${project.link}">
    <div class="project-image">
      <img src="${project.img}">
    </div>
    <div class="project-content">
      <div class="project-brief">
        <p>${project.projectBrief}</p>
      </div>
      <div class="project-tags">
      <p>${project.buildIn}
      </div>
    </div>
  </a> `
})
}

//Another Projects
const renderOtherProject = () => {
  otherProjects.forEach((project) => {
    AnotherProjects.innerHTML +=
        `<a class="project" href="${project.link}">
    <div class="project-image">
      <img src="${project.img}">
    </div>
    <div class="project-content">
      <div class="project-brief">
        <p>${project.projectBrief}</p>
      </div>
      <div class="project-tags">
      <p>${project.buildIn}
      </div>
    </div>
  </a> `
})
}

 /** Start eventListener**/
  // Hamburger menu-status 
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-body-open')
    menuContainer.classList.toggle('menu-body-open')
  })
  renderBestProject();
  renderOtherProject();

