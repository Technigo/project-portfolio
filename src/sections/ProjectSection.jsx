import { useState } from "react";
import { Card } from "../components/Card/Card";
import { ArrowButton } from "../components/ArrowButton/ArrowButton";
import { Grid } from "../ui/Grid/Grid";
import { SectionTitle } from "../ui/Typography/Typography";
import data from "../../projects.json";
import "./ProjectSection.css";

export const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Start with 4 projects
  const projects = data.projects;

  const handleShowMore = () => {
    setVisibleProjects((prevCount) => prevCount + 2); // Show 2 more on click
  };

  return (
    <Grid background="white">
      <section className="project-section">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="project-cards">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.name}
              description={project.description}
              tags={project.tags}
              netlifyLink={project.netlify}
              githubLink={project.github}
              reverse={index % 2 !== 0} // Reverse for odd index cards
            />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <ArrowButton
            text="See more projects"
            variant="black-on-white"
            onClick={handleShowMore}
          />
        )}
      </section>
    </Grid>
  );
};
