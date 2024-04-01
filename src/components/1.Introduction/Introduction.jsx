import "./Introduction.css";
import arrowImage from "../../assets/arrow.svg";
import profilePicture from "../../assets/profile-picture.png";

export const Introduction = () => {
  return (
    <div className="introduction-container">
      <section className="introduction">
        <img
          src={profilePicture}
          alt="Profile picture"
          className="profile-pic"
        />
        <h1 className="introduction-heading">Hi, I&apos;m Lovisa Åberg</h1>
        <h2 className="introduction-subheading">Frontend Developer</h2>
        <p className="introduction-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur
          debitis, error, tenetur ipsum voluptates doloremque repudiandae
          dignissimos veritatis assumenda officiis reiciendis fugit commodi
          impedit laudantium. Aspernatur ea exercitationem laudantium.
        </p>
      </section>
      <section className="arrow-container">
        <img src={arrowImage} alt="Animated arrow" className="arrow" />
      </section>
    </div>
  );
};
