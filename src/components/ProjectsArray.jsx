// ProjectsArray.jsx
import happii from "../assets/Happii.jpg";
import franzy from "../assets/Franzy.jpg";
import survey from "../assets/Survey.jpg";

export const projects = [
  {
    id: 1,
    title: "Happy Thoughts App",
    description: "This project features an interactive app where users can share and view positive messages. By integrating with an API, the app allows users to submit their own thoughts and read others' posts in real-time. Key functionalities include using React components for a structured design and managing state with useState and useEffect hooks for a smooth user experience.",
    tags: ["HTML5", "CSS3", "React", "API"],
    liveLink: "https://happii.netlify.app/",
    codeLink: "https://github.com/nella-x/project-happy-thoughts-vite",
    image: happii, // Lägg till bildreferensen här
  },
  {
    id: 2,
    title: "Accessible News Site",
    description: "In this project, I created an accessible and user-friendly news site with a focus on dynamic content and responsive design. Using JavaScript, I generated article content from an array of objects, allowing for an organized and efficient content structure. I also added interactive buttons so users can expand and read articles directly on the same page, enhancing navigation and user experience. This project combines accessibility best practices with engaging, streamlined functionality.",
    tags: ["JavaScript", "CSS3", "HTML5"],
    liveLink: "https://franzytimes.netlify.app/",
    codeLink: "https://github.com/nella-x/project-accessibility",
    image: franzy, // Lägg till bildreferensen här
  },
  {
    id: 3,
    title: "Interactive Horoscope Quiz",
    description: "Interactive Quiz App: A React-based survey where users answer questions about their name, birthdate, and areas of interest. Upon submission, they receive a personalized 2025 horoscope prediction. This project demonstrates React state management and controlled forms, delivering a fun and engaging user experience.",
    tags: ["HTML5", "CSS3", "React", "API"],
    liveLink: "https://2025-horoscope.netlify.app/",
    codeLink: "https://github.com/nella-x/project-survey-vite",
    image: survey, // Lägg till bildreferensen här
  },
];
