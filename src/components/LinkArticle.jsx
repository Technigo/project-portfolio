import { LinkButton } from "./LinkButton";
import articles from "../../articles.json";
import "./Links.css";
import read from "../assets/read.svg";
import readhover from "../assets/read-hover.svg";

export const ArticlesLinks = ({ link }) => {
  return (
    <div className="article-links">
      <LinkButton buttonText="" url={link} icon={read} hoverIcon={readhover} />
    </div>
  );
};
