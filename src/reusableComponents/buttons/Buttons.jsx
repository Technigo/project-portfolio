import github from "/icons/github-button.png";
import liveDemo from "/icons/LiveDemo.png";
import "../styleComponents/projects.css";


export const Buttons = () => {
    return (
        <div className="button-container">
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link to the github image"
            >
                <button type="button">
                    <img src={github} alt="github image" />
                    {/* add github icon here */}
                    <span></span>
                </button>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <button type="button">
                    <img src="" alt="Live Demo Image" />
                    {/* add github image here */}
                    <span></span>
                </button>
            </a>
        </div>

    )
}
