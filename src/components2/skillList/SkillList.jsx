import React from "react";
import { NormalText } from "../typography/normalText/NormalText";

import "./skillList.css";

export const SkillList = ({ list }) => {
  return (
    <>
      {/*Mapping over the list sent as a prop to render a list */}
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
