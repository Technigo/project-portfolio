import './FooterSection.css'
import { FooterInfo } from './FooterInfo'
import { SocialIconSection } from "../1-top-section/SocialIconSection"

export const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <FooterInfo />
        <SocialIconSection className="social-icons-center" />
      </div>
    </div>
  );
};
