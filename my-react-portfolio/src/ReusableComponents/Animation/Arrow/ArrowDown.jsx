// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from "react";

const ArrowDown = forwardRef(({ className, style }, ref) => {
  return (
    <svg
      ref={ref}
      className={`${className} arrow-down`}
      style={{ style }} // Add your border radius here
      width="29"
      height="68"
      viewBox="0 0 29 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img">
      <title id="arrowIconTitle">Arrow pointing downwards</title>
      <path
        d="M24 55.5L14.5 65M14.5 65L5 55.5M14.5 65L14.5 35"
        stroke="#FF4575"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowDown.displayName = "ArrowDown";

export default ArrowDown; // Export ArrowDown component
