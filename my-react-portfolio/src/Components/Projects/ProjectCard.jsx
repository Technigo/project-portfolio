
import { Description } from "../../ReusableComponents/Description.jsx"
import { CardHeading } from "../../ReusableComponents/CardHeading.jsx"
import { SectionHeading } from "../../ReusableComponents/SectionHeading.jsx"
import { Tag } from "../../ReusableComponents/Tag.jsx"
import { Button } from "../../ReusableComponents/Button.jsx"



export const ProjectCard = ( props ) => {
  
  let imgProject = props.projects.image
  let nameProject = props.projects.name
  let descriptionProject = props.projects.description
  let techniquesProject = props.projects.techniques
  let netlifyProject = props.projects.netlify
  let githubProject = props.projects.github

  return (
   <>
       <CardHeading className="blue-heading" text="Frontend Developer" />
   <div className="card-wrapper">
        <div className="image-wrapper">
          <img src={imgProject} alt={nameProject} />
          <div className="details-wrapper">
            <SectionHeading text={nameProject} />
            <Description text={descriptionProject} />
            <Tag tagItem={techniquesProject} />
            <Button label="Netlify" path={netlifyProject} className="button-netlify" />
            <Button label="GitHub" path={githubProject} className="button-github" />
          </div>
        </div>
      </div>
      </>
  );
}