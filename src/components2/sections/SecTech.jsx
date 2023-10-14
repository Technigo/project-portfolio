import React from "react";

import { HeadingH1 } from "../../components/typography/headingH1/HeadingH1";
import { NormalTextBig } from "../../components/typography/normalTextBig/NormalTextBig";

export const SecTech = () => {
  const techText =
    "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.";

  return (
    <>
      <div className="tech-wrapper">
        <HeadingH1 text="Tech" className="tech-h1" />
        <NormalTextBig className={"tech-normal-big-text"} text={techText} />
      </div>
    </>
  );
};
