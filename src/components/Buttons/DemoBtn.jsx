import "./Buttons.css";
import { TbView360 } from "react-icons/tb";

export const DemoBtn = ({ demo_url }) => {
  return (
    <div className="link-btn">
      <a
        href={demo_url}
        className="demo-btn"
        target="_blank"
        rel="noopener noreferrer"
        title="View the live demo in a new tab"
      >
        <TbView360 className="btn-icon" />
        Live demo
      </a>
    </div>
  );
};
