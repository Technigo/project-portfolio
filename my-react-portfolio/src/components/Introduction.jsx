import arrow from "/arrow.svg";
import "./Introduction.css";
import ProfilePicture from "./ProfilePicture";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-box">
        <ProfilePicture />
        <h2>Hi, I’m Frida Svensson</h2>
        <h1>Frontend Developer</h1>
        <p className="introduction-text">
          With a background in graphic design as well as horticultural engineering, Frida brings a keen eye for detail and a creative flair to the table. She is a driven problem solver who creates elegant solutions and intuitive web experiences. 
        </p>
      </div>
      <img className="arrow" src={arrow} alt="Arrow" />
    </section>
  );
};

export default Introduction;
