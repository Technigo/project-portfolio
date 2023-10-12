import { LinkButton } from "./LinkButton";
import projects from "../../projects.json";
import "./Links.css";

export const Links = () => {
  return (
    <div className="links">
      <div className="project-links">
        <LinkButton
          buttonText=""
          url={projects.projects[0].netlify} // Use the appropriate project index
          icon="/src/assets/Live-Demo-Button.png"
        />
        <LinkButton
          buttonText=""
          url={projects.projects[0].github} // Use the appropriate project index
          icon="/src/assets/View-Code-Button.svg"
        />
      </div>

      {/* Add similar code for other projects if needed */}
    </div>
  );
};
