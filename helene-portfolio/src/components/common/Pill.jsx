import "./Pill.css";

const Pill = ({ image, children }) => {
  return (
    <div className="pill">
      <img className="pill__avatar" width="72" height="72" alt="" src={image} />
      <span className="pill__text">{children}</span>
    </div>
  );
};

export default Pill;
