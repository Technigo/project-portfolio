const projectsContainer = document.getElementById("projectsContainer");
const articlesContainer = document.getElementById("articlesContainer");
const otherContainer = document.getElementById("otherContainer");

const projects = [
  {
    image: "img/final-project-pomodoro.png",
    name: "Pomodoro App",
    link: "https://final-project-pomodoro.netlify.app/",
    description:
      " A task-tracker based on the Pomodoro technique, a time management method that helps the user to stay focused while completing tasks.",
    tags: ["React", "Redux", "React Router", "Styled Componenets"],
  },
  {
    image: "img/express_api_project.png",
    name: "Express Api",
    link: "https://dl-shows-api.netlify.app/",
    description:
      " I started my backend journey by creating an API using Express. This API have RESTful endpoints which return either an array ofdata, or a single item.",
    tags: ["API", "Express.js", "Backend"],
  },
  {
    image: "img/todo-app-by-darya.netlify.app_.png",
    name: "Todo App",
    link: "https://todo-app-by-darya.netlify.app/",
    description:
      "This project is about creating a React Redux todo app with the functionality to add, list, and toggle tasks whether a task is done or not.",
    tags: ["React", "Redux", "Styled Components"],
  },
  {
    image: "img/happy_thoughts.png",
    name: "Happy Thoughts",
    link: "https://happy-thoughts-react-project.netlify.app/",
    description:
      "For this project, I've been digging into React, and a deeper understanding of useEffect and useState.",
    tags: ["React", "Redux"],
  },
  {
    image: "img/movie_project.png",
    name: "Movie Project",
    link: "https://the-movie-db-project.netlify.app/",
    description:
      "Pair-programming project using React Router, displaying lists of Top Rated Movies and more details when clicked on.",
    tags: ["React", "React Router", "API"],
  },
];

const otherProjects = [
  {
    name: "Music App",
    link: "https://react-app-music-realeses.netlify.app/",
    description:
      "Pair-programming project which shows new albums and singles releases.",
    tags: ["JSX", "React", "API"],
  },
  {
    name: "Survey App",
    link: "https://react-app-survey.netlify.app/",
    description: "A survey form using React hooks",
    tags: ["JSX", "React", "Hooks"],
  },
  {
    name: "GitHub Tracker",
    link: "https://github-tracker-by-darya.netlify.app/",
    description:
      "A GitHub-like page where you can track all of the projects which I will build at Technigos bootcamp.",
    tags: ["JavaScript", "Responsive Design", "API"],
  },
];

const articles = [
  {
    image: "img/code-article.webp",
    title: "Is programming right for me?",
    link: "https://medium.com/@darya.lapata/is-programming-right-for-me-d17678c198f7",
    description:
      "During a career change, you may come across some thoughts and questions. Is it for me? Am I smart enough for this? Will I ever understand the code?",
  },
  {
    image: "img/my-top-5.jpeg",
    title: "My top 5 resources to learn how to code",
    link: "https://medium.com/@darya.lapata/is-programming-right-for-me-d17678c198f7",
    description:
      "In this article, I wanted to share my top 5 resources to learn how to code...",
  },
  {
    image: "img/third-article.jpg",
    title: "Think like a programmer",
    link: "https://medium.com/@darya.lapata/think-like-a-programmer-4f47aed41433",
    description:
      "Recently I was thinking about what does it mean to be a programmer. After some googling I found a ton of interesting articles and created an image that explains it so clearly...",
  },
  {
    image: "img/forth_article.jpg",
    title: "Git common commands",
    link: "https://medium.com/@darya.lapata/git-common-commands-7d329583f34a",
    description:
      "Git is an important tool to handle when you are a developer. In this article, I wanted to share most common git commands...",
  },
];

projects.forEach((item) => {
  projectsContainer.innerHTML += `
  <a
  class="card"
  href=${item.link}
  target="_blank"
  rel="noopener"
>
  <div class="image-container">
    <img
      class="image"
      src=${item.image}
      alt="${item.name}"
    />
  </div>
  <div class="card-text">
    <h2>${item.name}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
  <div class="tags-container" id="tags">
    ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join("")}
  </div>
</a>
  `;
});

otherProjects.forEach((item) => {
  otherContainer.innerHTML += `
  <a
  href=${item.link}
  target="_blank"
  rel="noopener"
>
  <div class="content-container">
    <h2>${item.name}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
  <div class="tags-container">
  ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join("")}
  </div>
</a>
  `;
});

articles.forEach((item) => {
  articlesContainer.innerHTML += `
  <a
  class="card"
  href=${item.link}
  rel="noopener"
>
  <div class="image-container">
    <img
      class="image"
      src=${item.image}
      alt="code-article"
    />
  </div>
  <div class="card-text">
    <h2>${item.title}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
</a>
  `;
});
