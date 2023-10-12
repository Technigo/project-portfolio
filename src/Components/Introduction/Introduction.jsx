import { MainHeading } from "../MainHeading/MainHeading";
import "./Introduction.css";

export const Introduction = () => {
  const introText =
    "Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.";

  return (
    <section className="intro-section">
      {/* ------------------------------------- */}
      <div className="info-wrapper">
        {/* ------------------------------------- */}
        <div className="name-summary-box">
          <h3>Hi, Im Inna Kokic</h3>
          <MainHeading
            className={"heading-text intro"}
            text={"Frontend Developer"}
          />
        </div>
        {/* ------------------------------------- */}
        <div className="pic-text-box">
          <div>
            <img
              className="profile-pic"
              src="./src/assets/dog.jpg"
              alt="Profile picture of Inna"
            />
          </div>
          <p>{introText}</p>
        </div>
        {/* ------------------------------------- */}
      </div>
      <div className="arrow">
        <img src="./src/assets/Arrow.svg" alt="down arrow icon" />
      </div>
    </section>
  );
};
