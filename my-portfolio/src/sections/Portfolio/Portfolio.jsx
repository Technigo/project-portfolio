import "./Portfolio.css";
import { Introduction } from "../Introduction/Introduction";
import { Tech } from "../Tech/Tech";
import { FeaturedProjects } from "../Featured projects/FeaturedProjects";
import { Article } from "../Articles/Article";
import { Skills } from "../Skills/Skills";
import { Contact } from "../Contact/Contact";

export const Portfolio = () => {
  return (
    <div>
      Portfolio
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <Article />
      <Skills />
      <Contact />
    </div>
  );
};
