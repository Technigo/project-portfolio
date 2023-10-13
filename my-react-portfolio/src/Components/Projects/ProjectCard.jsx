
import { Description } from "../../ReusableComponents/Description.jsx"
import { SectionHeading } from "../../ReusableComponents/SectionHeading.jsx"
import { Tag } from "../../ReusableComponents/Tag.jsx"
import { Button } from "../../ReusableComponents/Button.jsx"
import "./ProjectCard.css"



export const ProjectCard = ( props ) => {
  
  let imgProject = props.projects.image
  let nameProject = props.projects.name
  let descriptionProject = props.projects.description
  let techniquesProject = props.projects.techniques
  let netlifyProject = props.projects.netlify
  let githubProject = props.projects.github

  return (
   <>
    
   <div className="card-wrapper">
        <div className="image-wrapper">
          <img src={imgProject} alt={nameProject} />
        </div>
        <div className="description-wrapper">
          <div className="details-wrapper">
            <SectionHeading  className="project-heading" text={nameProject} />
            <Description   className="project-paragraph" text={descriptionProject} />
          <Tag tagItem={techniquesProject} />
          </div>
          <div className="button-wrapper">
            <Button label="Netlify" path={netlifyProject} className="button-netlify" />
            <Button label="GitHub" path={githubProject} className="button-github" />
            </div>
          </div>
        
      </div>
      </>
  );
}