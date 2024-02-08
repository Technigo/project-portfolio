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
          Caro is a dedicated web developer with a foundation in modern web
          technologies, gained from an intensive bootcamp in web development.
          She has developed proficiency in HTML, CSS, JavaScript, React and
          backend fundamentals using Node.js and databases. Caro approaches
          problem-solving with patience and a willingness to tackle challenges,
          striving to contribute effectively to projects with a focus on
          functionality and user experience. Her journey in web development is
          driven by a continuous desire to learn and improve, making her a
          collaborative and adaptable team member in the ever-evolving tech
          landscape.
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
