import { SectionHead } from "../../components/SectionHead.jsx";
import { Arrow } from "../../components/Arrow/Arrow.jsx";
import "./Homescreen.css";

export const Homescreen = () => {
  const headlineId = 1;

  return (
    <>
      <div className="introduction-container">
        <div className="intro-title">
          <h2>Hi, I&apos;m Yia Tsai!</h2>
          <SectionHead headlineId={headlineId} />
        </div>
        <div className="intro-content">
          <img
            className="profile-pic"
            src="/images/profile-pic.jpg"
            alt="Yia's profile picture"
          />
          <div>
            <p>
              I am Frontend Developer with more than 4 years of experience in
              digital marketing and SEO in SaaS industry. I am passionate about learning new things and the process
              of finding solutions.
            </p>
          </div>
        </div>
        <Arrow />
      </div>
    </>
  );
};
