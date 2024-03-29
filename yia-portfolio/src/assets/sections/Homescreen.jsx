import { SectionHead } from "../components/SectionHead.jsx";
import { Arrow } from "../components/Arrow.jsx";

export const Homescreen = () => {
  const headlineId = 1;

  return (
    <>
      <div>
        <img
          className="profile-pic"
          src="/images/profile-pic.jpg"
          alt="Yia's profile picture"
        />
        <div>
          <h2>Hi, I&apos;m Yia Tsai!</h2>
          <SectionHead headlineId={headlineId} />
        </div>
        <p>
          I am Frontend Developer with more than 4 years of experience in
          digital marketing and SEO. I am passionate about learning new things
          and the process of finding solutions. 
        </p>
        <Arrow />
      </div>
    </>
  );
};
