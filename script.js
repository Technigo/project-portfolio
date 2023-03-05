const myName = document.getElementById("my-name");
const title = document.getElementById("title");
const also = document.getElementById("also");
const heroText = document.getElementById("hero-text");
const cardContainer = document.getElementById("card-container");

const aboutMe = {
  myName: "Daniel Brobäck",
  title: "Frontend developer",
  also: "+ Educator",
  text: "I'm a frontend developer with a strong interest in web development and education. As a former firefighter and teacher, believe in collaboration and problem solutions. I'm also quite excited about the tech industry, where you frequently collaborate with others to find answers. My ultimate objective is to become fullstack, and I won't give up until I achieve it.",
};

heroText.innerHTML = aboutMe.text;
myName.innerHTML = aboutMe.myName;
title.innerHTML = aboutMe.title;
also.innerHTML = aboutMe.also;

const projects = [
  {
    id: 1,
    project: "Fantasy Chatbot",
    img: "https://user-images.githubusercontent.com/65211641/218280389-2c0f8a40-23c7-429b-9ea0-49fdbf1e7671.png",
    alt: "A fantasy inspired chatbot",
    about:
      "A fantasy chatbot app that takes you, the brave adventurer, on a quest for glory and riches. With funny dialogue and multiple endings (who doesn't like that, right?).",
    tech: ["HTML", "CSS", "Javascript", "Responsive"],
  },
  {
    id: 2,
    project: "Weather App",
    img: "https://user-images.githubusercontent.com/65211641/218280389-2c0f8a40-23c7-429b-9ea0-49fdbf1e7671.png",
    alt: "Weather App",
    about:
      "A clean weather app that uses OpenWeathers API to fetch data and display it. This was made as a pair programing task.",
    tech: ["HTML", "CSS", "Javascript", "API", "Responsive"],
  },
];
