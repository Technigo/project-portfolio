// ProjectImage.jsx

export const ProjectImage = ({ project }) => {
  return (
    <div>
      <img src={project.image} alt={project.name} className="project-image" />
    </div>
  )
}
