// About.jsx

import { SocialLinks } from "../../../components/SocialLinks/SocialLinks";
import "./About.css"

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div>
          <h3>
            I am Emelie Nyberg
          </h3>

          <h1>
            Frontend Developer
          </h1>
        </div>
        <p>
          Emelie is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.
        </p>
      </div>
      <SocialLinks />
    </div>
  );
};