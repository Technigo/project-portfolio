import "./Button.css";
import liveDemoImage from "../assets/LiveDemo.svg";
import githubImage from "../assets/github.svg";

export const Button = () => {
  return (
    <>
      <div className="button">
        <button type="button" onClick={() => {}} className="live-demo-button">
          <img
            className="demo-image"
            src={liveDemoImage}
            alt="An icon of a globe"
          />
          Live demo
        </button>
        <button className="view-code-button">
          <img
            className="view-code-image"
            src={githubImage}
            alt="An icon of a github"
          />
          View the code
        </button>
      </div>
    </>
  );
};
