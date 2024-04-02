import { Headline } from "../components/Headline.jsx";

export const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <Headline style="contact-title" title="Let's talk" />
        <img className="profile-img" src="public/profileImg.jpg" alt="profile image of Maja" />
        <div className="contact-text-box">
          <p className="contact-text">Maja Schouenke</p>
          <p className="contact-text">+46(0)706 42 10 45</p>
          <p className="contact-text">m.schouenke@gmail.com</p>
        </div>
        <div className="platform-icons-container">
          <a href="https://github.com/schouenkes" target="_blank" rel="noreferrer noopener">
            <img src="public/icons/github-tag.svg" alt="GitHub icon" />
          </a>
          <a href="www.linkedin.com/in/maja-schouenke-0a09842a7" target="_blank" rel="noreferrer noopener">
            <img src="public/icons/linkedIn-icon.svg" alt="LinkedIn icon" />
          </a>
        </div>
      </section>
    </>
  );
};
