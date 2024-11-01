import "./css/ProjectBox.css"

const Button = ({ text, url, className, onClick }) => {
    return url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`button ${className}`}>
            {text}
        </a>
    ) : (
        <button onClick={onClick} className={`button ${className}`}>
            {text}
        </button>
    );
};

export default Button;
