const projectContainer = document.getElementById("project-section-div")
const otherProjectContainer = document.getElementById("other-project-section-div")
const langList = document.getElementById("lang-list")

const projectArray = {
  projects: [
    {
      img: "./pictures/project-todos-new.png",
      projectTitle: 'TODO APP',
      projectDescription: 'A todo application built with React, Redux, REST API and Styled components.',
      lang: [
        'HTML', 'CSS', 'React', 'Redux', 'REST API'
      ],
      url: 'https://github.com/sandra-wallen/project-todos',
      className: '', 
      id: 7
    },
    {
      img: "./pictures/react-survey-2.png",
      projectTitle: 'REACT SURVEY',
      projectDescription: 'A multi-step survey built in React, created with reusable input components.',
      lang: [
        'HTML', 'CSS', 'React'
      ],
      url: 'https://github.com/sandra-wallen/project-survey',
      className: '', 
      id: 1
    },
    {
      img: "./pictures/react-movies.png",
      projectTitle: 'MOVIE LIST',
      projectDescription: 'A Netflix look-alike, fetching movies from an API. Built together with Isabella Markskog.',
      lang: [
        'HTML', 'CSS', 'React'
      ],
      url: 'https://github.com/IsabellaM5/project-movies',
      className: '',
      id: 2
    },
    {
      img: "./pictures/happy-thoughts.png",
      projectTitle: 'HAPPY THOUGHTS',
      projectDescription: 'A twitter-ish project built in React. Getting and posting happy thoughts.',
      lang: [
        'HTML', 'CSS', 'React'
      ],
      url: 'https://github.com/sandra-wallen/project-happy-thoughts',
      className: '',
      id: 3
    },
    {
      img: "./pictures/react-musicreleases.png",
      projectTitle: 'MUSIC RELEASES',
      projectDescription: 'First project built using React, displaying new music releases. Built together with Siri Hemsley.',
      lang: [
        'HTML', 'CSS', 'React'
      ],
      url: 'https://github.com/sandra-wallen/project-music-releases',
      className: '',
      id: 4
    },
    {
      img: "./pictures/guess-who.png",
      projectTitle: 'GUESS WHO?',
      projectDescription: 'Recreation of the game "Guess who?" built with HTML, CSS and JavaScript.',
      lang: [
        'HTML', 'CSS', 'JavaScript'
      ],
      url: 'https://github.com/sandra-wallen/project-guess-who',
      className: '',
      id: 5
    },
    {
      img: "./pictures/news-site.png",
      projectTitle: 'NEWS SITE',
      projectDescription: 'First project in the boot camp, using only HTML5 and CSS3 to build a news site.',
      lang: [
        'HTML', 'CSS'
      ],
      url: 'https://github.com/sandra-wallen/project-news-site',
      className: '',
      id: 6
    }
  ]
}

const printProjects = () => {

  let slicedArray

  if (screen.width <= 767 ) {
    slicedArray = projectArray.projects.slice(0, 2)
  } else if (screen.width >= 768) {
    slicedArray = projectArray.projects.slice(0, 4)
  }

  slicedArray.map((project) => {
    projectContainer.innerHTML += `
      <div class="project-container">
        <a href=${project.url} class="project-container-link">
          <img src=${project.img} alt="picture of guess who game"/>
          <h4>${project.projectTitle}</h4>
          <p>${project.projectDescription}</p>
          <ul>
            ${project.lang.map(el => 
              '<li>' + el + '</li>'
            ).join('')}
          </ul>
        </a>
      </div>
      `
  })
}

const printOtherProjects = () => {

  let slicedArray

  if (screen.width <= 767) {
    slicedArray = projectArray.projects.slice(2, 4)
  } else if (screen.width >= 768) {
    slicedArray = projectArray.projects.slice(4, 6)
  }
  

  slicedArray.map((project) => {
    otherProjectContainer.innerHTML += `
      <div class="project-container">
        <a href=${project.url} class="project-container-link">
          <h4>${project.projectTitle}</h4>
          <p>${project.projectDescription}</p>
          <ul>
            ${project.lang.map(el => 
            '<li>' + el + '</li>'
            ).join('')}
          </ul>
        </a>
      </div>
    `
  })
}

printProjects()
printOtherProjects()
