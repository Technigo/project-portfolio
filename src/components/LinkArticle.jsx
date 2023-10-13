import { LinkButton } from "./LinkButton";
import articles from "../../articles.json";
import "./Links.css";
import read from "../assets/read.png";

export const ArticlesLinks = () => {
  return (
    <div className="project-links">
      <LinkButton buttonText="" url={articles.articles[0].link} icon={read} />
    </div>
  );
};
