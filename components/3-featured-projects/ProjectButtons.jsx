// ProjectButtons.jsx
export const ProjectButtons = ({ netlifyLink, githubLink }) => {
  return (
    <div className="project-buttons">
      <a 
        href={netlifyLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn netlify"
      >
        Live demo
      </a>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn github"
      >
        View Code
      </a>
    </div>
  )
}
