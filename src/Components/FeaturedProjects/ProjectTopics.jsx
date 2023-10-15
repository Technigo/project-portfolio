import React from "react";

import "./ProjectTopics.css";

export const ProjectTopics = ({ topics }) => {
  if (!topics) return;
  return (
    <div className="project-topics">
      {topics.map((topic) => (
        <div className="project-topic" key={topic}>
          {topic}
        </div>
      ))}
    </div>
  );
};
