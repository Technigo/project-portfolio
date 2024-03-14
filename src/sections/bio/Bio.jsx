import "./bio.css";
import arrow from "../../assets/arrowdown.svg";
import profilePic from "../../assets/Bild.jpg";

export const Bio = () => {
  const scrollTo = () =>
    document.getElementById("scrollTo").scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bio-container">
      <div className="bio">
        <img
          src={profilePic}
          alt="profile-picture"
          className="profile-picture"
        />
        <div className="name-and-title">
          <h1 className="presentation">Hi, I'm Andrej Kavržić</h1>
          <h2 className="profession">Frontend Developer</h2>
        </div>
        <p className="about-me">
          Andrej is a skilled and passionate developer with a foundation in
          communication. Known for his inventive solutions, he specializes in
          crafting user-friendly applications and excels in tackling intricate
          challenges. His commitment to excellence positions him as a valuable
          contributor to any project, setting him apart in the dynamic
          technology sector.
        </p>
      </div>
      <button className="next-section-arrow" onClick={scrollTo}>
        <img className="arrow-down" src={arrow} alt="arrow-pointing-down" />
      </button>
    </div>
  );
};
