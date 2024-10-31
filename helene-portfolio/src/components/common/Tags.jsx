import "./Tags.css";

const Tags = ({ label, children }) => {
  return (
    <ul className="tags" aria-label={label}>
      {children}
    </ul>
  );
};

export default Tags;
