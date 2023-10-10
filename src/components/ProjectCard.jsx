
import "./ProjectCard.module.css";

export const ProjectCard = ({ repo }) => {
  return (
    <div className="projectWrapper">
      <div className='projectContainer'>
        <img src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.png?format=png&width=1200" height={200} />
        <div className="projectDescription">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
          <h2 className="project-title">{repo.name}</h2>

          <div className="readmeContent">
            <p>{repo.description}</p>
          </div>
          <div className="project-tags"></div>
          <div className="project-buttons">
            <button>test</button>
            <button>test</button>
            <button>test</button></div>
        </div>
      </div>
    </div>
  );
};
