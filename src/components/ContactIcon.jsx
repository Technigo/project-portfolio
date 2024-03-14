import linkedIn from "/icons/LinkedIn.png";
import github from "/icons/github.png";
import email from "/icons/email.png";
import "../styling/contactIcon.css";
export const ContactIcon = () => {
  return (
    <div className="contact-icons-wrapper">
      <a
        href="https://www.linkedin.com/in/huadan-zhu-802864134/"
        target="_blank"
      >
        <img
          src={linkedIn}
          alt="link to huadan's linkedin page"
          className="contact-icon"
        />
      </a>
      <a href="https://github.com/MikoZhu?tab=repositories" target="_blank">
        <img
          src={github}
          alt="link to huadan's github page"
          className="contact-icon"
        />
      </a>
      <a href=" mailto:zhuhuadan@gmail.com">
        <img
          src={email}
          alt="link to huadan's email"
          className="contact-icon"
        />
      </a>
    </div>
  );
};
