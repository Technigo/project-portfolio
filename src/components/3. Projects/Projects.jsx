import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-div" style={{ backgroundColor: "#f5f0f2"}}>
      <h1>Projects</h1>
      <div className="projects">
      <div><img id="screenshot" className="happy" src="src\assets\happythoughts.png" width="500px"></img>
      <h4>Title of project</h4>
      <h5>Information text about project</h5>
     <div className="tools">
     <p className="tool">HTML5</p>
     <p className="tool">CSS3</p>
     <p className="tool">React</p>
     </div>
      <button><img src="src\assets\linkedin.png" /> Live demo</button>
      <button><img src="src\assets\linkedin.png" /> View the code</button>
      </div>
      <img id="screenshot" className="survey" src="src\assets\survey.png" width="500px"></img>
      <img id="screenshot" className="music" src="src\assets\musicreleases.png" width="500px"></img>
      <img id="screenshot" className="weather" src="src\assets\weather.png" width="500px"></img>
      <img id="screenshot" className="library" src="src\assets\library.png" width="500px"></img>
      <img id="screenshot" className="chatbot" src="src\assets\chatbot.png" width="500px"></img>
      </div>
    </div>
  );
};