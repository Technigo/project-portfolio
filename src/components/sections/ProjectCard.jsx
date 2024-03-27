import projects from "../../json/projects.json"
import { IoGlobeOutline } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"
import { Tags } from "../reusable/Tags"
import { Button } from "../reusable/Buttons"

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
                <Button
                  url={netlify_url}
                  className="link-button-project"
                  icon={<IoGlobeOutline className="button-icon" />}
                  text="Live demo"
                />
                <Button
                  url={github_url}
                  className="link-button-project"
                  icon={<FaGithub className="button-icon" />}
                  text="View the code"
                />
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
