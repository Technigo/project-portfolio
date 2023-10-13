import { LinkButton } from "./LinkButton";
import projects from "../../projects.json";
import view from "../assets/view.png";

import "./Links.css";

export const Links = () => {
  return (
    <div className="links">
      <div className="project-links">
        <LinkButton
          buttonText=""
          url={projects.projects[0].netlify}
          icon="/src/assets/livedemo.png"
        />
        <LinkButton
          buttonText=""
          url={projects.projects[0].github}
          icon={view}
        />
      </div>
    </div>
  );
};
