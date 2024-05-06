import pinkWave from "./divider.png"
import "./pinkDivider.css"

export const PinkDivider = () => {
  return (
    <div className="waveDiv">
      <img
        src={pinkWave}
        alt="a pink wavey line as the divider"
        className="pinkLine"
      />
    </div>
  );
};