import "./Intro.css";
//import { Headline } from "./Headline";
import jag from "../assets/jag1.png";
import arrow from "../assets/Position=down.png";

export const Intro = () => {
  return (
    <div className="intro-container">
      <img src={jag} alt="Image" className="centered"></img>
      <h2>Hi, I'm Frida Lindskog</h2>
      <h1>Frontend Developer</h1>
      <p>
        some text bla vla bla bla bla bla bla bla blsome text bla vla bla bla
        bla bla bla bla bsome text bla vla bla bla bla bla bla bla bsome text
        bla vla bla bla bla bla bla bla b
      </p>
      <img src={arrow} alt="arrowicon" className="arrow-icon"></img>
    </div>
  );
};
