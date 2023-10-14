import "./button.css";

export const Button = ({ className, btnURL, iconURL, imgAlt, btnText, onMouseEnter, onMouseLeave }) => {
    return (
        <a href={btnURL}>
            <button className={`button ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <img src={iconURL} alt={imgAlt} />
                {btnText}
            </button>
        </a>
    )
}
