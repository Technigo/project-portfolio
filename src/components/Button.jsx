import "./Button.css";
import liveDemoImage from "../assets/LiveDemo.svg";
import githubImage from "../assets/github.svg";

export const Button = ({ deployedLink, gitLink }) => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="button">
      <button
        type="button"
        onClick={() => handleClick(deployedLink)}
        className="live-demo-button">
        <img
          className="demo-image"
          src={liveDemoImage}
          alt="An icon of a globe"
        />
        Live demo
      </button>
      <button className="view-code-button" onClick={() => handleClick(gitLink)}>
        <img
          className="view-code-image"
          src={githubImage}
          alt="An icon of a github"
        />
        View the code
      </button>
    </div>
  );
};
