import React from "react";
import "./Heading.css";

export const Heading = ({ text, color }) => {
  return (
    <div className="heading">
      <h2 style={{ color: color }}>{text}</h2>
    </div>
  );
};

// export default Heading;
