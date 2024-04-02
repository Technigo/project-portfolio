import "../styling/Intro.css";
import myImage from "../../public/myImage.jpg";

const Intro = () => {
  return (
    <div className="introContainer">
      <div className="introImg">
        <img src={myImage} alt="My picture" className="myImage" />
      </div>
      <div className="intro">
        <h2 className="introPhrase">Hi, I&apos;m Paula Jungåker</h2>
        <h1 className="jobTitle">Frontend Developer</h1>
      </div>
      <div className="introInfo">
        <p className="introDescription">
          Paula is a frontend developer with a genuine passion for crafting
          user-friendly websites. With a strong focus on user experience, she
          designs interfaces that seamlessly blend aesthetics with
          functionality. Leveraging her expertise in frontend technologies,
          Paula delivers captivating websites that engage and delight users,
          ensuring an optimal experience at every turn.
        </p>
      </div>
    </div>
  );
};

export default Intro;
