import "./LetsTalk.css";

export const LetsTalk = () => {
  return (
    <div className="lets-talk-container">
      <h1>Let's Talk</h1>
      <img
        src="/Assets/profile-bec-sqr.jpg"
        alt="profile pic of beckie"
        className="profile-image"
      />
      <div className="lets-talk-info-section">
        <div className="lets-talk-3line-text">
          <h2>Beckie Morton</h2>
          <h2>+61(0) 444 333</h2>
          <h2>beckam11@gmail.com</h2>
        </div>
        <div className="contact-icons">
          <p>
            <a
              href="https://github.com/BeckieMorton"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="github-img" src="/Assets/github.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/rebecca-morton-739446204/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="linkedin-img" src="/Assets/linkedin.png" />
            </a>
            <a
              href="https://stackoverflowteams.com/c/technigo/users/487/?tab=profile"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="stack-img" src="/Assets/stackoverflow.png" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
