import React from "react";
import github1 from "./github1.png";
import github2 from "./github2.png";
import "./GitHubButton.css"; // Create a separate CSS file for button styles

const GitHubButton = () => {
    return (
        <button className="btngit">
            <img src={github1} alt="GitHub" className="github-image" />
        </button>
    );
};

export default GitHubButton;
