import React from "react";
import { NormalText } from "../../components/typography/normalText/NormalText";

import "./skillList.css";

export const SkillList = ({ list }) => {
  return (
    <>
      {list.map((listItem, index) => {
        return (
          <>
            <NormalText className="skill-list" text={listItem} key={index} />
          </>
        );
      })}
    </>
  );
};
