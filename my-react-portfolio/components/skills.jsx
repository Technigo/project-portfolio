import React from "react";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-row">
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*xpjz1qEcdEd5R34VrScfRg.jpeg"
            alt="Digital Business Card"
            className="skills-img"
          />
          <h3 className="skills-myname">How to Build a React App from Scratch</h3>
          <p className="skills-desc">
            React.js was born at Facebook to tackle complex UI issues using the virtual DOM, enhancing performance. It became open-source in 2013, with a focus on component-based architecture.
          </p>
        </div>
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*bt9kOVl4UFP-8-DOsNXouw.jpeg"
            alt="Vulnerability Target"
            className="skills-img"
          />
          <h3 className="skills-myname">Running a Payload on The Remote System</h3>
          <p className="skills-desc">
            Hackers often target individuals due to their potential to introduce unidentified vulnerabilities into robust security systems. Unintentional actions, like disabling security software, can lead to catastrophic breaches.
          </p>
        </div>
      </div>
      <div className="skills-row">
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fill:112:112/1*kw9rq72b5WnqmPa4WLraOQ.jpeg"
            alt="Running Jupyter"
            className="skills-img"
          />
          <h3 className="skills-myname">Running Jupyter Notebook Server With Anaconda3</h3>
          <p className="skills-desc">
            This guide explains how to run a Jupyter Notebook server in Anaconda3. It starts with downloading Anaconda3, opening the command prompt, and launching Jupyter by typing "jupyter notebook."
          </p>
        </div>
        <div className="skills-card">
          <img
            src="https://miro.medium.com/v2/resize:fill:112:112/1*pk44bkZ5NrI9BT37-EHDhA.jpeg"
            alt="GitHub Task"
            className="skills-img"
          />
          <h3 className="skills-myname">GitHub task for hng.tech Stage 2 promotion</h3>
          <p className="skills-desc">
            This guide provides step-by-step instructions on setting up a Jupyter Notebook server in Anaconda3. It begins with creating a Cloudinary account and preparing an image URL.
          </p>
        </div>
      </div>
    </div>
  );
};
