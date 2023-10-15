import React from "react";

const handleLearnMoreClick = (url) => {
    window.open(url, "_blank");
  };

export const Skills = () => {
  return (
    <div className="skils-background">
    <div className="skills-container">
        <h3 className="skills-title">My Words</h3>
      <div className="skills-row">
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*xpjz1qEcdEd5R34VrScfRg.jpeg"
            alt="Digital Business Card"
            className="skills-img"
          />
          <p className="dates">Oct 4, 2023</p>
          <h3 className="skills-myname">How to Build a React App from Scratch</h3>
          <p className="skills-desc">
            React.js was born at Facebook to tackle complex UI issues using the virtual DOM, enhancing performance. It became open-source in 2013, with a focus on component-based architecture.
          </p>
          <button
              className="card-button"
              onClick={() =>
                handleLearnMoreClick(
                  "https://medium.com/@stenlisuryadinata/how-to-build-a-react-app-from-scratch-e454304d542e"
                )
              }
            >
              Read Article
            </button>
          
        </div>
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*bt9kOVl4UFP-8-DOsNXouw.jpeg"
            alt="Vulnerability Target"
            className="skills-img"
          />
          <p className="dates">Nov 13, 2022</p>
          <h3 className="skills-myname">Running a Payload on The Remote System</h3>
          <p className="skills-desc">
            Hackers often target individuals due to their potential to introduce unidentified vulnerabilities into robust security systems. Unintentional actions, like disabling security software, can lead to catastrophic breaches.
          </p>
          <button
              className="card-button"
              onClick={() =>
                handleLearnMoreClick(
                  "https://medium.com/@stenlisuryadinata/running-a-payload-on-the-remote-system-568081839138"
                )
              }
            >
              Read Article
            </button>
        </div>
      </div>
      <div className="skills-row">
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fill:112:112/1*kw9rq72b5WnqmPa4WLraOQ.jpeg"
            alt="Running Jupyter"
            className="skills-img"
          />
          <p className="dates">Apr 16, 2019</p>
          <h3 className="skills-myname">Running Jupyter Notebook Server With Anaconda3</h3>
          <p className="skills-desc">
            This guide explains how to run a Jupyter Notebook server in Anaconda3. It starts with downloading Anaconda3, opening the command prompt, and launching Jupyter by typing "jupyter notebook."
          </p>
          <button
              className="card-button"
              onClick={() =>
                handleLearnMoreClick(
                  "https://medium.com/@stenlisuryadinata/running-jupyter-notebook-server-with-anaconda3-9fe6121bf303"
                )
              }
            >
              Read Article
            </button>
        </div>
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fill:112:112/1*pk44bkZ5NrI9BT37-EHDhA.jpeg"
            alt="GitHub Task"
            className="skills-img"
          />
          <p className="dates">Apr 6, 2019</p>
          <h3 className="skills-myname">GitHub task for hng.tech Stage 2 promotion</h3>
          <p className="skills-desc">
            This guide provides step-by-step instructions on setting up a Jupyter Notebook server in Anaconda3. It begins with creating a Cloudinary account and preparing an image URL.
          </p>
          <button
              className="card-button"
              onClick={() =>
                handleLearnMoreClick(
                  "https://medium.com/@stenlisuryadinata/github-task-for-hng-tech-stage-2-promotion-4ef8173713c2"
                )
              }
            >
              Read Article
            </button>
        </div>
      </div>
    </div>
    </div>
  );
};
