import "./button.css";

// Component for a reusable link. Takes in several props to make it functional from multiple different components.
export const Button = ({ className, btnURL, iconURL, imgAlt, btnText, onMouseEnter, onMouseLeave }) => {
    return (
        <a className={`button ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href={btnURL}>
            <img src={iconURL} alt={imgAlt} />
            {btnText}
        </a>
    )
}
