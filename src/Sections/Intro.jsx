import "./Intro.css";
//import { Headline } from "./Headline";
import jag from "../assets/jag5.png";
import arrow from "../assets/Position=down.svg";
import { FaArrowDownLong } from "react-icons/fa6";

export const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <img src={jag} alt="Image" className="centered" />
        <h2>Hi, I'm Frida Lindskog</h2>
        <h1>Frontend Developer</h1>
        <p>
          Frida is a frontend developer with a creative background as an Art
          Director and Textile artist. Her focus is to create engaging and
          user-friendly web experiences. She's dedicated to turning ideas into
          visually stunning and responsive websites. Frida work reflects a
          passion for clean code and memorable user interactions.
        </p>
      </div>
      <div className="arrow-icon">
        <a href="">
          <FaArrowDownLong
            className="arrowIcon"
            aria-label="Scroll down to learn more"
          />
        </a>
        {/* <img src={arrow} alt="arrowicon" /> */}
      </div>
    </>
  );
};
