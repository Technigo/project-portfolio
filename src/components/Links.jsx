import { LinkButton } from "./LinkButton";
import projects from "../../projects.json";
import view from "../assets/githubbtn.svg";
import viewHover from "../assets/githubbtn-hover.svg";
import livedemo from "../assets/livedemo.svg";
import liveDemoHover from "../assets/livedemo-hover.svg";

import "./Links.css";

export const Links = () => {
  return (
    <div className="links">
      <div className="project-links">
        <LinkButton
          buttonText=""
          url={projects.projects[0].netlify}
          icon={livedemo}
          hoverIcon={liveDemoHover}
        />
        <LinkButton
          buttonText=""
          url={projects.projects[0].github}
          icon={view}
          hoverIcon={viewHover}
        />
      </div>
    </div>
  );
};
