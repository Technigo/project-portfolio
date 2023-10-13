import { Headline } from "./Headline";
import jag from "../assets/jag1.png";
import "./Info.css";

export const Info = () => {
  return (
    <div className="info-container">
      <Headline text="Let's talk" level={1} className="info" />
      <img src={jag} alt="Image" className="centered"></img>
      <div className="info-content">
        <Headline text="Frida Lindskog" level={2} className="My-name" />
        <Headline text="+46(0)704 65 93 95" level={2} className="number" />
        <Headline text="fridus.lindskog@gmail.com" level={2} className="mail" />
      </div>
    </div>
  );
};
