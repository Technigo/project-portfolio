/* ========== HERO SECTION ========== */

/* This component contains the Hero header. It contains headings, body text, an image and icons with links. 
- The styling for the headings and body text is imported from the Typography component. 
- The icons and their links are imported from the SocialIcons component. 
*/

import "./Hero.css";
import { H1, H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";
import placeholderImage from "../../../assets/images/placeholder-image.png";
import SocialIcons from "../../ui/icons/SocialIcons"

export const Hero = () => { 
  return (
    <section className="hero-container">
      <div className="text-box">
        <H3 heading="I am Johanna Eriksson" />
        <H1 heading="Frontend Developer" />
        <Body text="Johanna is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field." />
        <SocialIcons />
      </div>
      <div className="image-box">
        <img src={placeholderImage} alt="Profile image of Johanna Eriksson" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;
