import { LinkButton } from "./LinkButton";
import projects from "../../projects.json";

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
          icon="/src/assets/view.png"
        />
      </div>
    </div>
  );
};
