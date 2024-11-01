import "./Grid.css"

export const Grid = ({ children, background }) => {
  // Apply the background prop as a class
  return <section className={`grid-section ${background}-background`}>{children}</section>;
};
