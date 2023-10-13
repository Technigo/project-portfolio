import { MainHeading } from "../MainHeading/MainHeading";
import "./Introduction.css";

export const Introduction = () => {
  const introText =
    "Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.";

  return (
    <section className="intro-section">
      <div className="info-wrapper">
        <img
          className="profile-pic"
          src="/assets/example2.png"
          alt="Profile picture of Inna"
        />
        <div className="name-headline-wrapper">
          <h3 className="my-name">Hi, Im Inna Kokic</h3>

          <MainHeading
            className={"heading-text intro"}
            text={"Frontend Developer"}
          />
        </div>
        <p className="introText">{introText}</p>
        <div className="arrow jump">
          <img
            className="vert-move"
            src="/assets/Position=down.svg"
            alt="down arrow icon"
          />
        </div>
      </div>
    </section>
  );
};
