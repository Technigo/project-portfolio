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
          Caro is an exceptional developer known for her innovative solutions
          and exceptional coding abilities. She creates user-friendly
          applications and solves complex issues with ease. Her drive for
          excellence makes her a valuable asset to any project and a standout in
          the technology field.
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
