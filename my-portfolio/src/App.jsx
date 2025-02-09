import React from "react";
import "./App.css";

import { Introduction } from "./Components/Introduction";
import { Tech } from "./Components/Tech";
import { Skills } from "./Components/Skills";
import { Marquee } from "./Components/Marquee";
import { LetsTalk } from "./Components/LetsTalk";
import theWeatherApp from "./assets/the-weather-app.jpeg";
import { FeaturedProjects } from "./Components/FeaturedProjects";
import { MyWords } from "./Components/MyWords";





function App() {
  return (
    <div>
      <Introduction />
      <Tech />
      <FeaturedProjects
        // this is an array. the square brackets are the array. the curly braces are the object.
        projects={[
          {
            title: "The Weather App Project",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description: "This is a weather app that I created using external API.",
            demoUrl: "",
            codeUrl: "",
            tech: ["HTML", "CSS", "JavaScript"],
          },
        ]}
      />

      <div className="waves" />


      <MyWords
        posts={[
          {
            title: "How to stop being scared: Learning to love code",
            date: "2025-02-09",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description:
              "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
            url: "",
          },
          {
            title: "How to stop being scared: Learning to love code",
            date: "2025-02-09",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description:
              "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
            url: "",
          },
          {
            title: "How to stop being scared: Learning to love code",
            date: "2025-02-09",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description:
              "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
            url: "",
          },
          {
            title: "How to stop being scared: Learning to love code",
            date: "2025-02-09",
            image: theWeatherApp,
            alt: "picture of the weather app project",
            description:
              "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
            url: "",
          },
        ]}
      />



      <Skills />
      <LetsTalk />
      <Marquee />



    </div>
  );
}

export default App;

