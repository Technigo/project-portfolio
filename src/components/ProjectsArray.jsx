// ProjectsArray.jsx
import Top1 from "../assets/Top1.jpg";
import Top2 from "../assets/Top2.jpg";
import Top3 from "../assets/Top3.jpg";

export const projects = [
  {
    id: 1,
    title: "Chatbot Built in JavaScript",
    description: "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    tags: ["HTML5", "CSS3", "React", "Node"],
    liveLink: "https://google.com",
    codeLink: "https://github.com/",
    image: Top1, // Lägg till bildreferensen här
  },
  {
    id: 2,
    title: "Another Project Title",
    description: "Description for the second project.",
    tags: ["JavaScript", "CSS", "HTML"],
    liveLink: "https://facebook.com",
    codeLink: "https://elle.se/",
    image: Top2, // Lägg till bildreferensen här
  },
  {
    id: 3,
    title: "Third Project Title",
    description: "Description for the third project.",
    tags: ["React", "Node", "API"],
    liveLink: "https://malmo.se",
    codeLink: "https://sydsvenskan.se/",
    image: Top3, // Lägg till bildreferensen här
  },
];
