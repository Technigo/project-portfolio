import './Button.css'

export const Button = ({ link, text, icon }) => {
  return (
    <a href={link} className="button" target="_blank" rel="noopener noreferrer">
      {icon && <img src={icon} alt="Icon" className="button-icon" />}
      {text}
    </a>
  )
}
