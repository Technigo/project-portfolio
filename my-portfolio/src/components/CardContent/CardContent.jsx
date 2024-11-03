// CardContent.jsx

import "./CardContent.css"

export const CardContent = ({ description }) => {
  return <div className="hide-on-mobile"><p className="card-content">{description}</p></div>;
};