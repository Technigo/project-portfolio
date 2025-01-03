import { useState, useEffect } from "react";
import { H2 } from "../../ui/Typography/Typography";
import { Card } from "../Cards/Card.jsx";
import { Grid } from "../../ui/GridLayout/Grid.jsx";
import { images } from "../../ui/Images/Images.jsx";
import { Button } from "../../ui/Buttons/Button.jsx";
import { Tag } from "../../ui/Tags/Tags.jsx";
import projectsData from "../../../data/projects.json";
import iconArrow from "../../../assets/iconArrow.svg";
import "./FeaturedProjects.css";

export const FeaturedProjects = () => {
  // display every other card in reversed row on desktop
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid background="white">
      <div className="projects-container">
        <H2>Featured Projects</H2>
        <div className="project-wrapper">
          {projectsData.projects.map((project, index) => (
            <Card
              key={project.name}
              imageSource={images[project.image] || project.image}
              cardTag={project.tags}
              cardTitle={project.name}
              cardDescription={project.description}
              sectionType="project"
              netlify={project.netlify}
              github={project.github}
              isReversed={isDesktop && index % 2 === 1}
            >
              <div className="tag-container">
                {project.tags.map((tag, index) => (
                  <Tag key={index} sectionType="project" text={tag} />
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="view-more-container">
          <Button
            text="View More Projects"
            isViewMore={true}
            sectionType="project"
            icon={iconArrow}
            href="https://github.com/Fannyhenriques?tab=repositories"
            target="_blank"
          />
        </div>
      </div>
    </Grid>
  );
};