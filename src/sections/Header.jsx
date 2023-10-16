import caroLImage from "../assets/CaroL.jpg";
import arrowImage from "../assets/Arrow.svg";
import "./Header.css";
import "../App.css";

export const Header = () => {
  return (
    <div className="header grid-parent">
      <div className="wrapper">
        <img
          className="my-image"
          src={caroLImage}
          alt="A picture of CaroLuna"
        />
        <h1>Hi! I&apos;m Carolina Luna</h1>
        <h2>Graphic Designer/ Frontend Developer</h2>
        <p>
          Caro is an exceptional developer known for her innovative solutions
          and exceptional coding abilities. She creates user-friendly
          applications and solves complex issues with ease. Her drive for
          excellence makes her a valuable asset to any project and a standout in
          the technology field.
        </p>
        <img src={arrowImage} alt="arrow icon" className="arrow-icon"></img>
      </div>
    </div>
  );
};
