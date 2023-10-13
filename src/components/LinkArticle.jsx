import { LinkButton } from "./LinkButton";
import articles from "../../articles.json";
import "./Links.css";

export const ArticlesLinks = () => {
  return (
    <div className="project-links">
      <LinkButton
        buttonText=""
        url={articles.articles[0].link}
        icon="/src/assets/Read.png"
      />
    </div>
  );
};
