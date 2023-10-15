import "./button.css";

export const Button = ({ className, btnURL, iconURL, imgAlt, btnText, onMouseEnter, onMouseLeave }) => {
    return (
        <a className={`button ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href={btnURL}>
            <img src={iconURL} alt={imgAlt} />
            {btnText}
        </a>
    )
}
