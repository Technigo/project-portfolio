import "./Projects.css";
import projects from "./projects.json";
import netlifyImage from "./assets/netlify-img.png";
import githubImage from "./assets/github-img.png";

export const Projects = () => {
  return (
    <div>
      <h1 className="projects-header">Projects</h1>
      {projects.projects.map((item) => (
        <div className="projects" key={item.id}>
          <img className="screenshot" src={item.image}/>
          <div className="description">
            <h2 className="projects-title">{item.name}</h2>
            <p>{item.description}</p>
            <div className="tags">
              {item.tags.map((tag, index) => (
                <p className="tag" key={index}>
                  {tag}
                </p>
              ))}
            </div>
            <div className="links">
              <a className="link" href={item.netlify} target="_blank">
                <img className="icon" src={netlifyImage} width="25px"></img> Live demo
              </a>
              <a className="link" href={item.github} target="_blank">
                <img className="icon" src={githubImage} width="25px"></img> View the code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* 
return (
    <div className="projects-div" style={{ backgroundColor: "#f5f0f2" }}>
      <h1>Projects</h1>
      <div className="projects">
        <div>
          <img
            id="screenshot"
            className="happy"
            src={happy}
          ></img>
          <h4>Title of project</h4>
          <h5>Information text about project</h5>
          <div className="tools">
            <p className="tool">HTML5</p>
            <p className="tool">CSS3</p>
            <p className="tool">React</p>
          </div>
          <button>Live demo</button>
          <button>View the code</button>
        </div>
        <div>
          <img
            id="screenshot"
            className="survey"
            src={survey}
          ></img>
          <h4>Title of project</h4>
          <h5>Information text about project</h5>
          <div className="tools">
            <p className="tool">HTML5</p>
            <p className="tool">CSS3</p>
            <p className="tool">React</p>
          </div>
          <button>Live demo</button>
          <button>View the code</button>
        </div>
        <div>
          <img
            id="screenshot"
            className="music"
            src={music}
          ></img>
          <h4>Title of project</h4>
          <h5>Information text about project</h5>
          <div className="tools">
            <p className="tool">HTML5</p>
            <p className="tool">CSS3</p>
            <p className="tool">React</p>
          </div>
          <button>Live demo</button>
          <button>View the code</button>
        </div>
        <div>
          <img
            id="screenshot"
            className="weather"
            src={weather}
          ></img>
          <h4>Title of project</h4>
          <h5>Information text about project</h5>
          <div className="tools">
            <p className="tool">HTML5</p>
            <p className="tool">CSS3</p>
            <p className="tool">React</p>
          </div>
          <button>Live demo</button>
          <button>View the code</button>
        </div>
        <div>
          <img
            id="screenshot"
            className="library"
            src={library}
          ></img>
          <h4>Title of project</h4>
          <h5>Information text about project</h5>
          <div className="tools">
            <p className="tool">HTML5</p>
            <p className="tool">CSS3</p>
            <p className="tool">React</p>
          </div>
          <button>Live demo</button>
          <button>View the code</button>
        </div>
        <div>
          <img
            id="screenshot"
            className="chatbot"
            src={chatbot}
          ></img>
          <div>
          </div>
          <h4>Title of project</h4>
          <h5>Information text about project</h5>
          <div className="tools">
            <p className="tool">HTML5</p>
            <p className="tool">CSS3</p>
            <p className="tool">React</p>
          </div>
          <div className="buttons">
          <button className="button">Live demo</button>
          <button className="button">View the code</button>
          </div>
        </div>
      </div>
    </div>
  );*/
