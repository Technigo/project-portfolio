// src/components/Buttons.jsx
import "./Buttons.css";
import netlifyIcon from "../assets/icons/netlify.svg"; // Import the Netlify icon
import githubIcon from "../assets/icons/github.svg"; // Import the GitHub icon

export const Buttons = ({ buttons }) => {
    const handleButtonClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="button-container">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(button.url)}
                    className="button"
                >
                    <img
                        src={button.icon} // Use the icon from the button object
                        alt={`${button.text} Icon`}
                        className="icon"
                    />
                    {button.text}
                </button>
            ))}
        </div>
    );
};
