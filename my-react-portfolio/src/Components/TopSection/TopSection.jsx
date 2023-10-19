import { useState } from "react";

import "./TopSection.css";

//import "/src/Index.css";

import { DisplayInformation } from "../DisplayInformation/DisplayInformation";

export const TopSection = () => {
  const [hideInfo, setHideInfo] = useState(true);

  console.log(`entered the topsection ${hideInfo}`);

  const displayInformation = () => {
    setHideInfo(false);
    console.log(`display information is: ${setHideInfo}`);
  };

  if (hideInfo === true) {
    return (
      <div className="topsection-container">
        <section>
          <h2 style={{ fontWeight: "700" }}>Hi, I'm Beckie Morton</h2>
          <h1 style={{ color: "blue" }}>Frontend Developer</h1>
          <section>
            <img
              src="/Assets/profile-bec-sqr.jpg"
              alt="profile pic of beckie"
              className="profile-image"
            />
            <p className="topsection-text">
              Former International School teacher, and Police Officer, turned
              passionate Frontend developer. Beckie has a Master of Teaching as
              well as a Bachelor of Computing, and brings both skills and
              experience to a new career.
            </p>
            <p>
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
              onClick={displayInformation}
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
    );
  }

  if (hideInfo === false) {
    return (
      <>
        <div className="topsection-container">
          <section>
            <h2 style={{ fontWeight: "700" }}>Hi, I'm Beckie Morton</h2>
            <h1 style={{ color: "blue" }}>Frontend Developer</h1>
          </section>
          <img
            src="/Assets/profile-bec-sqr.jpg"
            alt="profile pic of beckie"
            className="profile-image"
          />
          <p className="topsection-text">
            This is where you sell in your new self. You're happy to combine
            your previous experience with your new frontend skills or basically
            use this area to describe yourself the way you see your role in the
            future. Either you do something like "Frontend + design" or more of
            a sentence like; "Frontend developer with a background in
            communications". Include the social media links that you use or are
            going to use. Add a photo of yourself
          </p>
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
          <section className="red-arrow-section">
            <button className="red-arrow-button" onClick={displayInformation}>
              <img className="red-arrow-img" src="/Assets/red-arrow.png"></img>
            </button>
          </section>
        </div>
        <div className="">
          <DisplayInformation />
        </div>
      </>
    );
  }
};
