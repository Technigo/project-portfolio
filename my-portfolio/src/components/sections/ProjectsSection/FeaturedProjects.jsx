import { H2 } from "../../ui/Typography/Typography";
import { Card } from "../Cards/Card.jsx";
import { Grid } from "../../ui/GridLayout/Grid.jsx";
import { images } from "../../ui/Images/Images.jsx";
import { Button } from "../../ui/Buttons/Button.jsx";
import { Tag } from "../../ui/Tags/Tags.jsx";
import projectsData from "../../../data/projects.json";
import iconArrow from "../../../assets/iconArrow.svg"; 
import "./FeaturedProjects.css"

export const FeaturedProjects = () => {
  return (
    <Grid background="white">
      <div className="projects-container">
       <H2>Featured Projects</H2>   
      {projectsData.projects.map((project) => (
        <Card
          key={project.name}
          imageSource={images[project.image] || project.image}
          cardTag={project.tags}
          cardTitle={project.name}
          cardDescription={project.description}
          sectionType="project"
          // button={project.button}
          netlify={project.netlify} // Pass the netlify link here
          github={project.github} 
        >
          <div className="tag-container">
          {project.tags.map((tag, index) => (
          <Tag key={index} sectionType="project" text={tag} />  
         ))}  
          </div>
        
      </Card>
    ))}
      <Button
        text="View More Projects"
        isViewMore={true}
        sectionType="project"
        icon={iconArrow}
        onClick={() => {}}
      />
      </div>
    </Grid>
  )
};