import { Image } from "../../components/ImageElements/Image";
import { TagText } from "../../components/TextElements/TagText";
import { Button } from "../../components/FormElements/Button";
import { Subheading } from "../../components/TextElements/Subheading";
import { NormalText } from "../../components/TextElements/NormalText";
import githubPng from "/icons/github.png";
import liveDemoPng from "/icons/live-demo.png";

export const ProjectCard = ({ project }) => {
  // Define the function to render tags
  const renderTags = () =>
    /* Mapping through topics to display them next to each other */
    project.topics.map((topic, index) => (
      <TagText key={index} tagText={topic} />
    ));

  return (
    <article className="project-card">
      <Subheading className={"card-heading"} text={project.name} />
      {/* Retrieve the description from the API */}
      <NormalText text={project.description} />
      {/* Mapping through tags, to display them next to each other */}
      <div role="tag" aria-label="Tags" className="tags">
        {renderTags()}
      </div>
      <div aria-label="Buttons" className="buttons-section">
        {/* Render a button for the live demo with provided information */}
        <Button
          className={"demo-btn"}
          btnUrl={project.homepage}
          imgAlt={"Web icon"}
          iconUrl={liveDemoPng}
          btnText={"Live demo"}
        />
        {/* Render a button for viewing the code with provided information */}
        <Button
          className={"github-btn"}
          btnUrl={project.htmlUrl}
          imgAlt={"Github icon"}
          iconUrl={githubPng}
          btnText={"View the code"}
        />
      </div>
    </article>
  );
};

{
  /*  <button>{project.topics}</button> */
}
