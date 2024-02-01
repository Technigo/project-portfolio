import { LinkButton } from "./LinkButton";
import articles from "../../articles.json";
import "./Links.css";
import read from "../assets/glasses.png";
import readhover from "../assets/read-hover.svg";
import "./LinkArticle.css";

export const ArticlesLinks = ({ link }) => {
  return (
    <div className="article-links">
      {/* <LinkButton
        buttonText="Read"
        url={netlify}
        icon={livedemo}
        // hoverIcon={liveDemoHover}
      /> */}

      <LinkButton
        buttonText="Read post"
        url={link}
        icon={read}
        hoverIcon={readhover}
      />
    </div>
  );
};
