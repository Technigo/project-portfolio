import "./Button.css";
import liveDemoImage from "../assets/LiveDemo.svg";

export const Button = () => {
  return (
    <>
      <button type="button" onClick="" className="live-demo-button">
        <img
          className="my-image"
          src={liveDemoImage}
          alt="A picture of a globe"
        />
        Live demo
      </button>
      <button className="view-code-button">View the code</button>
    </>
  );
};
