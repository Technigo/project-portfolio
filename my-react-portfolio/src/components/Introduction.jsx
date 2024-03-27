import profilePicture from "../assets/profile-picture.jpeg";
import arrow from "../assets/arrow.svg"
import "./Introduction.css"

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="profile-box">
        <h2>Hi, Im Frida Svensson</h2>
        <h1>Frontend Developer</h1>
        <div className="profile-wrapper">
          <img className="profile-picture" src={profilePicture} />
          <p>
            Frida is an exceptional developer known for her innovative solutions
            and exceptional coding abilities. She creates user-friendly
            applications and solves complex issues with ease. Her drive for
            excellence makes her a valuable asset to any project and a standout
            in the technology field.
          </p>
        </div>
      </div>
      <img className="arrow" src={arrow} />
    </section>
  );
};

export default Introduction;
