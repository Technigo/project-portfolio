import React from "react";

import { HeadingH1 } from "../typography/headingH1/HeadingH1";
import { SkillList } from "../skillList/SkillList";
import { HeadingH3 } from "../typography/headingH3/HeadingH3";

import "./sections.css";

export const SecSkills = () => {
  const codeList = [
    "HTML5",
    "CSS3",
    "Adobe Photoshop",
    "React",
    "Styled Components",
    "GitHub",
  ];

  const toolboxList = [
    "Atom",
    "Postman",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Keynote",
    "Slack",
  ];

  const upcomingList = ["Node.js"];

  const moreList = [
    "Design Lead",
    "Branding",
    "Strategy",
    "Process design",
    "Concept development",
    "Agile methodology",
    "Hyper Island toolbox",
  ];

  return (
    <>
      <section className="skills-section">
        <HeadingH1 className="skills-h1" text="Skills" />
        <div className="skills-wrapper">
          <div className="skills-inner-wrapper code-wrapper">
            <HeadingH3
              text={"Code"}
              className={"heading-skill heading-skill-code"}
            />
            <SkillList list={codeList} />
          </div>

          <div className="skills-inner-wrapper toolbox-wrapper">
            <HeadingH3
              text={"Toolbox"}
              className={"heading-skill heading-skill-toolbox"}
            />
            <SkillList list={toolboxList} />
          </div>

          <div className="skills-inner-wrapper upcoming-wrapper">
            <HeadingH3
              text={"Upcoming"}
              className={"heading-skill heading-skill-upcoming"}
            />
            <SkillList list={upcomingList} />
          </div>

          <div className="skills-inner-wrapper more-wrapper">
            <HeadingH3
              text={"More"}
              className={"heading-skill heading-skill-more"}
            />
            <SkillList list={moreList} />
          </div>
        </div>
      </section>
    </>
  );
};
