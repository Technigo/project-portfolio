import { useState } from "react";

import "./TopSection.css";

//import "/src/Index.css";

import { DisplayInformation } from "../DisplayInformation/DisplayInformation";

export const TopSection = () => {
  const [hideInfo, setHideInfo] = useState(false);

  return (
    <>
      <div className="topsection-container">
        <section>
          <img
            className="imageOnTop"
            src="/Assets/profile-bec-sqr.jpg"
            alt="profile pic of beckie"
          />
          <h2 style={{ fontWeight: "700" }}>Hi, I'm Beckie Morton</h2>
          <h1 style={{ color: "blue" }}>Frontend Developer</h1>
          <section>
            <img
              className="imageOnBottom"
              src="/Assets/profile-bec-sqr.jpg"
              alt="profile pic of beckie"
            />
            <p className="topsection-text">
              Former International School teacher, and Police Officer, turned
              passionate Frontend developer. Beckie has a Master of Teaching as
              well as a Bachelor of Computing, and brings both skills and
              experience to a new career.
            </p>
            <p className="socialLinks">
              <a
                href="https://github.com/BeckieMorton"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="See Beckie's git hub"
              >
                <img
                  alt="git hub icon"
                  className="github-img"
                  src="/Assets/github.png"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rebecca-morton-739446204/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="See Beckie's linkedin account"
              >
                <img
                  alt="linkedin icon"
                  className="linkedin-img"
                  src="/Assets/linkedin.png"
                />
              </a>
              <a
                href="https://stackoverflowteams.com/c/technigo/users/487/?tab=profile"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="See Beckie's stack overflow account"
              >
                <img
                  alt="stack overflow icon"
                  className="stack-img"
                  src="/Assets/stackoverflow.png"
                />
              </a>
            </p>
          </section>
          <section className="red-arrow-section">
            <button
              aria-label="Press to display further information"
              className="red-arrow-button"
              onClick={() => setHideInfo(!hideInfo)}
            >
              <img
                alt="red arrow"
                className="red-arrow-img"
                src="/Assets/red-arrow.png"
              ></img>
            </button>
          </section>
        </section>
      </div>
      <div>{hideInfo && <DisplayInformation />}</div>
    </>
  );
};
