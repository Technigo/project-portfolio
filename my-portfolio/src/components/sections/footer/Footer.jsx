/* ========== FOOTER SECTION ========== */

/* This component contains the Footer, and contain an image, heading, contact information, and icons with social links. 

The icons and their links are imported from SocialIcons component. 

*/

import "./Footer.css";
import { H2, Body } from "../../ui/typography/Typography";
import placeholderFooterImage from "../../../assets/images/placeholder-footer-image.png";
import SocialIcons from "../../ui/icons/SocialIcons";

export const Footer = () => { 
  return (
    <div className="footer-section">
      <div className="footer-image-box">
        <img src={placeholderFooterImage} alt="Footer profile image of Johanna Eriksson" className="footer-profile-image" />
      </div>
      <div className="footer-contact-info">
        <H2 heading="Let’s talk" />
        <Body text="Johanna Eriksson" className="footer-name" />
        <Body text="+46(0)70-525 33 16" className="footer-phone" />
        <Body text="johanna.eriksson@live.se" className="footer-email" />
        <SocialIcons text="Social links" className="social-links" />
      </div>
    </div>
  );
};
