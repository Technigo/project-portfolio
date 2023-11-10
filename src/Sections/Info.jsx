import { Headline } from "./Headline";
import jag from "../assets/jag5.png";
import "./Info.css";
import { IconLinks } from "../components/IconLinks";

export const Info = () => {
  return (
    <div className="info-container">
      <Headline text="Let's talk" level={1} className="info" />
      <img src={jag} alt="Image" className="centered" />
      <div className="info-content">
        <Headline text="Frida Lindskog" level={2} className="my-name" />
        <Headline text="+46(0)704 65 93 95" level={2} className="number" />
        <Headline text="fridus.lindskog@gmail.com" level={2} className="mail" />

        <IconLinks className="bottom-links" />
      </div>
    </div>
  );
};
