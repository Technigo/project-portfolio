import React from "react";

import { HeadingH1 } from "../typography/headingH1/HeadingH1";
import { NormalTextBig } from "../typography/normalTextBig/NormalTextBig";

export const SecTech = () => {
  const techText =
    "JavaScript ES6, React, Node.js, MongoDB, HTML, CSS, Flexbox, JSX, React Hooks, Web Accessibility, API:s, GitHub, mob-programming, pair-programming.";

  return (
    <>
      <div className="tech-wrapper">
        <HeadingH1 text="Tech" className="tech-h1" />
        <NormalTextBig className={"tech-normal-big-text"} text={techText} />
      </div>
    </>
  );
};
