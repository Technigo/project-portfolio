import "../styling/Intro.css";
import myImage from "../assets/myImage.jpg";

const Intro = () => {
  return (
    <div className="introContainer">
      <img src={myImage} alt="My picture" className="myImage" />
      <h2 className="introPhrase">Hi, I'm Paula Jungåker</h2>
      <h1 className="jobTitle">Frontend Developer</h1>
      <p className="introDescription">
        Paula is a frontend developer who possesses a genuine passion for
        crafting user-friendly websites. With a strong emphasis on user
        experience, she dedicates herself to designing interfaces that
        seamlessly blend aesthetics with functionality. Leveraging her expertise
        in frontend technologies, Paula consistently delivers captivating
        websites that engage and delight users, ensuring an optimal experience
        at every interaction.
      </p>
    </div>
  );
};

export default Intro;
