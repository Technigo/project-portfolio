import "./Buttons.css";
import { AiFillGithub } from "react-icons/ai";

export const ViewCodeBtn = ({ github_url }) => {
  return (
    <div className="link-btn">
      <a
        href={github_url}
        className="code-btn"
        target="_blank"
        rel="noopener noreferrer"
        title="View the code on GitHub in a new tab"
      >
        <AiFillGithub className="btn-icon" />
        View the code
      </a>
    </div>
  );
};
