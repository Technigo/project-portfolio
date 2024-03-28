import "./Projects.css";
import happy from "./assets/happythoughts.png"
import survey from "./assets/survey.png"
import music from "./assets/musicreleases.png"
import weather from "./assets/weather.png"
import library from "./assets/library.png"
import chatbot from "./assets/chatbot.png"


export const Projects = () => {
  return (
    <div className="projects-div" style={{ backgroundColor: "#f5f0f2"}}>
      <h1>Projects</h1>
      <div className="projects">
      <div><img id="screenshot" className="happy" src={happy} width="500px"></img>
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
      <img id="screenshot" className="survey" src={survey} width="500px"></img>
      <img id="screenshot" className="music" src={music} width="500px"></img>
      <img id="screenshot" className="weather" src={weather} width="500px"></img>
      <img id="screenshot" className="library" src={library} width="500px"></img>
      <img id="screenshot" className="chatbot" src={chatbot} width="500px"></img>
      </div>
    </div>
  );
};