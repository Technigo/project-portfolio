export const projectsData = [
  {
    imagePath: "/images/chatbot.png",
    title: "Chatbot build in JavaScript",
    text: "You can ask for a recommendation for a museum from your preference.",
    skills: ["HTML", "CSS", "JavaScript"],
    gitUrl: "https://github.com/sansan-sakura/project-chatbot",
    demoUrl: "https://helpful-piroshki-45c88f.netlify.app",
  },
  {
    imagePath: "/images/weatherapp.png",
    title: "Weather App",
    text: "This is a vanilla JavaScript weather application. You can add and remove cities. The data is stored locally, so when you come back to the app, you can still see the weather focus from the cities of your choice.",
    skills: ["HTML", "CSS", "JavaScript"],
    gitUrl: "https://github.com/sansan-sakura/project-weather-app",
    demoUrl: "https://sakura-world-weather-app.netlify.app/",
  },
  {
    imagePath: "/images/guesswho.png",
    title: "Cuess Who the Game",
    text: "It is a game where you have to guess who is a secret person. Winning data is saved in local memory, so you can compare results from the past",
    skills: ["HTML", "CSS", "JavaScript"],
    gitUrl: "https://github.com/sansan-sakura/project-guess-who",
    demoUrl: "https://guess-who2222.netlify.app/",
  },
  {
    imagePath: "/images/music.png",
    title: "Music Releases",
    text: "This app is build with React and static data that was gotten from Spotify. You can check music albums.",
    skills: ["HTML", "CSS", "React"],
    gitUrl: "https://github.com/sansan-sakura/project-music-releases-vite",
    demoUrl: "https://music-releases2222.netlify.app/",
  },
  {
    imagePath: "/images/berlin.png",
    title: "Berlin Berlin",
    text: "I made this site out of my love for Berlin. It collects news about Berlin.",
    skills: ["HTML", "CSS"],
    gitUrl: "https://github.com/sansan-sakura/project-news-site",
    demoUrl: "https://tubular-truffle-789263.netlify.app",
  },
  {
    imagePath: "/images/survey.png",
    title: "Pala Customer Survey",
    text: "This is a pet food company survey form. It was a group project that I worked with two others by using Github.",
    skills: ["HTML", "CSS", "React"],
    gitUrl: "https://github.com/elbines/project-survey-vite-EMS",
    demoUrl: "https://pala-customer-survey.netlify.app/",
  },
  {
    imagePath: "/images/happy-thought.png",
    title: "Happy Thoughts",
    text: "This is a Twitter-like APP. You can post your happy thoughts and click the like button to like other people's posts.",
    skills: ["HTML", "CSS", "React"],
    gitUrl: "https://github.com/sansan-sakura/project-happy-thoughts-vite",
    demoUrl: "https://happy-thoughs.netlify.app/",
  },
];

const fetchData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/sansan-sakura/repos");
    const data = await res.json();
    if (!res.ok) throw new Error("something went wrong");

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
