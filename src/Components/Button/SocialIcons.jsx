import "./SocialIcons.css";

export const SocialIcons = () => {
  return (
    <div className="social-media-wrapper">
      <a
        href="https://www.linkedin.com/in/susanne-e-6915a087/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="linkedin-icon"
          src={"/btn-sociallinks-linkedin-default.svg"}
          alt="LinkedIn icon"
        />
      </a>
      <a
        href="https://github.com/smExlex"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="github-icon"
          src={"/btn-sociallinks-github-default.svg"}
          alt="Git Hub icon"
        />
      </a>
    </div>
  );
};
