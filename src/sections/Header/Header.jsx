import caroLImage from "../../assets/CaroL.jpg";
import arrowImage from "../../assets/Arrow.svg";
import "./Header.css";
import "animate.css";

export const Header = () => {
  const scrollTo = () =>
    document.getElementById("scrollTo").scrollIntoView({ behavior: "smooth" });

  return (
    <div className="header grid-parent">
      <div className="wrapper">
        <img
          className="my-image"
          src={caroLImage}
          alt="A picture of CaroLuna"
        />

        <div className="name-and-title">
          <h1>Hi! I&apos;m Carolina Luna</h1>
          <h2>Frontend Developer</h2>
        </div>
        <p>
          Caro is a newly graduated web developer with a comprehensive skill set
          acquired through an intensive web development bootcamp. Experienced in
          frontend and backend development, including JavaScript, React, AI
          integration, and database management. Skilled in pair programming and
          problem-solving, combining technical expertise with creativity. Fluent
          in English, Swedish, and Spanish, passionate about coding and
          continuously learning within the technology industry.
        </p>
      </div>
      <button className="next-section-arrow" onClick={scrollTo}>
        <img
          className="arrow-down"
          src={arrowImage}
          alt="arrow-pointing-down"
        />
      </button>
    </div>
  );
};
