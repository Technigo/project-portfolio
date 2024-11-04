import "./Buttons.css";
import netlifyIcon from "../assets/icons/netlify.svg";
import githubIcon from "../assets/icons/github.svg";

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
                        src={button.icon}
                        alt={`${button.text} Icon`}
                        className="icon"
                    />
                    {button.text}
                </button>
            ))}
        </div>
    );
};
