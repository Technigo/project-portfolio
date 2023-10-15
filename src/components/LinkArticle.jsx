import { LinkButton } from "./LinkButton";
import articles from "../../articles.json";
import "./Links.css";
import read from "../assets/read.svg";
import readhover from "../assets/read-hover.svg";

export const ArticlesLinks = () => {
  return (
    <div className="article-links">
      <LinkButton
        buttonText=""
        url={articles.articles[0].link}
        icon={read}
        hoverIcon={readhover}
      />
    </div>
  );
};
