import { Image } from "../../components/ImageElements/Image";
import { TagText } from "../../components/TextElements/TagText";
import { Button } from "../../components/FormElements/Button";

export const ProjectCard = ({ project }) => {
  return (
    <div>
      <article className="project-card">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </article>
    </div>
  );
};
