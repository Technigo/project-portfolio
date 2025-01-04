/* eslint-disable react/prop-types */
import "./Grid.css";

export const Grid = ({ 
  background, 
  children 
}) => {
  const backgroundClass = background === "black" ? "black-background" : "white-background";

  return (
    <div className={`${backgroundClass} grid-section`}>
      {children}
    </div>
  );
};
