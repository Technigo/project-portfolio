import { Headline } from "../components/Headline/Headline";
import { Image } from "../components/Image/Image";
import { Button } from "../components/Button/Button";
import linkedin from "/icons/linkedin.svg";
import github from "/icons/github.svg";
import stackOverflow from "/icons/stackOverflow.svg";
import "./ContactInfo.css";

export const ContactInfo = () => {
  return (
    <section className="contact-section">
      <Headline headlineStyle="section-headline" headline="Let's Talk" />
      <Image
        className="profile-picture"
        link="/images/Portrait_BW.png"
        altText="profile picture"
      />
      <div className="contact-info-div">
        <h2>Viktoria Olofsson</h2>
        <h2>+46(0)72 246 91 44</h2>
        <h3>viktoriaolofsson@gmail.com</h3>
      </div>
      <div className="contact-btn-div">
        <Button
          buttonStyle="contact-btn"
          icon={linkedin}
          altText="linkedIn logo"
          link="https://www.linkedin.com/in/viktoria-olofsson-%E7%BE%85%E8%96%87-81462bb6/"
        />
        <Button
          buttonStyle="contact-btn"
          icon={github}
          altText="GitHub logo"
          link="https://github.com/viktoria-olo"
        />
      </div>
    </section>
  );
};
