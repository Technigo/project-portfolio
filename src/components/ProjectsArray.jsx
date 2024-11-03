// ProjectsArray.jsx
import happii from "../assets/Happii.jpg";
import franzy from "../assets/Franzy.jpg";
import survey from "../assets/Survey.jpg";

export const projects = [
  {
    id: 1,
    title: "Chatbot Built in JavaScript",
    description: "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    tags: ["HTML5", "CSS3", "React", "Node"],
    liveLink: "https://google.com",
    codeLink: "https://github.com/",
    image: happii, // Lägg till bildreferensen här
  },
  {
    id: 2,
    title: "Another Project Title",
    description: "Description for the second project.",
    tags: ["JavaScript", "CSS", "HTML"],
    liveLink: "https://facebook.com",
    codeLink: "https://elle.se/",
    image: franzy, // Lägg till bildreferensen här
  },
  {
    id: 3,
    title: "Third Project Title",
    description: "Description for the third project.",
    tags: ["React", "Node", "API"],
    liveLink: "https://malmo.se",
    codeLink: "https://sydsvenskan.se/",
    image: survey, // Lägg till bildreferensen här
  },
];
