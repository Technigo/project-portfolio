import { H2 } from "../../ui/Typography/Typography";
import { Card } from "../Cards/Card.jsx";
import { Grid } from "../../ui/GridLayout/Grid.jsx";
import { images } from "../../ui/Images/Images.jsx";
import { Button } from "../../ui/Buttons/Button.jsx";
import projectsData from "../../../data/projects.json";
import iconArrow from "../../../assets/iconArrow.svg";

export const FeaturedProjects = () => {
  return (
    <Grid background="white">
      <H2>Featured Projects</H2>
      {projectsData.projects.map((project) => (
        <Card
          key={project.name}
          imageSource={images[project.image] || project.image}
          cardTag={project.tags.join(" ")}
          cardTitle={project.name}
          cardDescription={project.description}
          sectionType="project"
          button={project.button}
        />
      ))}
      <Button
        text="View More Projects"
        isViewMore={true}
        icon={iconArrow}
        onClick={() => {/* Handle the click event, e.g., navigate to projects page */ }}
      />
    </Grid>
  )
};