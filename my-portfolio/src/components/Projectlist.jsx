import PropTypes from "prop-types";
import { Project } from "./Project";
import "./projectlist.css";

export const Projectlist = ({ repos } ) => {
  console.log("Projectlist: ", repos);

  return (
    <div className="projectlist">
      <h2>Featured Projects</h2>
      <Project />
      <div>
        {repos.map((project, id) => (
          <Project key={id} project={project} />
        ))}
      </div>
    </div>
  );
};

Projectlist.propTypes = {
  repos: PropTypes.array,
};