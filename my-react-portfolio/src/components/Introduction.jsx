import profilePicture from "/profile-picture.jpeg";
import arrow from "/arrow.svg";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-box">
        <img
          className="profile-picture"
          src={profilePicture}
          alt="Frida Svensson"
        />
        <h2>Hi, I’m Frida Svensson</h2>
        <h1>Frontend Developer</h1>
        <p className="introduction-text">
          Frida is an exceptional developer known for her innovative solutions
          and exceptional coding abilities. She creates user-friendly
          applications and solves complex issues with ease. Her drive for
          excellence makes her a valuable asset to any project and a standout in
          the technology field.
        </p>
      </div>
      <img className="arrow" src={arrow} alt="Arrow" />
    </section>
  );
};

export default Introduction;
