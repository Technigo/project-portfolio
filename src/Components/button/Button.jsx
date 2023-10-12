import './button.css'
export const Button = ({ text, hoverColor, src, link }) => {
    return (
        <div>
            <a href={link} className={`button ${hoverColor}`}>
            <img src={src} alt={text} />
            {text}
            </a>
        </div>
    )
}


