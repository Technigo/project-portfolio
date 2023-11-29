import { LinkButton } from "./LinkButton";
import projects from "../../projects.json";
import view from "../assets/githubbtn.svg";
import viewHover from "../assets/githubbtn-hover.svg";
import livedemo from "../assets/livedemo.svg";
import liveDemoHover from "../assets/livedemo-hover.svg";

import "./Links.css";

export const Links = ({ netlify, github }) => {
  return (
    <div className="project-links">
      {netlify && (
        <LinkButton
          buttonText=""
          url={netlify}
          icon={livedemo}
          hoverIcon={liveDemoHover}
        />
      )}
      {github && (
        <LinkButton
          buttonText=""
          url={github}
          icon={view}
          hoverIcon={viewHover}
        />
      )}
    </div>
  );
};
