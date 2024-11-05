// ProjectInfo.jsx

export const ProjectInfo = ({ project }) => {
  return (
    <div className="project-info">
      <h3 className="project-title">{project.name}</h3>
      <p>This is a description of the project and what the assignment was and also what has been done in the project.</p>
    </div>
  )
}
