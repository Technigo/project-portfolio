/* eslint-disable react/prop-types */

/* ========== TYPOGRAPHY COMPONENT ========== */

/* 

This component renders the Global headings and texts variables from the index.css

*/

import "./Typography.css";

export const H1 = ({ heading }) => <h1 className="heading1">{heading}</h1>;
export const H2 = ({ heading }) => <h2 className="heading2">{heading}</h2>;
export const H3 = ({ heading }) => <h3 className="heading3">{heading}</h3>;
export const Body = ({ text }) => <p className="body-text">{text}</p>;
