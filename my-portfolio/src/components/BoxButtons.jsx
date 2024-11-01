import "./css/ProjectBox.css";
import Button from "./Button";

const BoxButtons = ({ demoUrl, codeUrl }) => {
    return (
        <div className="box-btns">
            <Button text="Live demo" url={demoUrl} className="btn-base primary-btn" />
            <Button text="View Code" url={codeUrl} className="btn-base secondary-btn" />
        </div>
    );
};

export default BoxButtons;




        