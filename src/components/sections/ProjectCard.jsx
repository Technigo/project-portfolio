import projects from "../../json/projects.json"
import { Tags } from "../reusable/Tags"

export const ProjectCard = () => {
  return (
    <div className="project-card">
      {projects.projects.map(
        ({ id, name, description, tags, image, netlify_url, github_url }) => {
          return (
            <div className="project-item" key={id}>
              <img
                src={image}
                alt={`image for project ${name}`}
                className="project-photo"
              />
              <div className="project-data">
                <h4 className="project-name">{name}</h4>
                <p className="hind">{description}</p>
                <Tags tags={tags} />
              </div>
              <div className="project-buttons">
                <p className="montserrat">Button1 button2</p>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
