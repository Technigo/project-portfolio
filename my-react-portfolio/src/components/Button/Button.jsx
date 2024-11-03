import './Button.css'

export const Button = ({ link, text, icon, variant }) => {
  const buttonClass = variant === 'white-on-black' ? 'button white-on-black' : 'button black-on-white'
  const iconClass = variant === 'white-on-black' ? 'button-icon inverted' : 'button-icon'

  return (
    <a href={link} className={buttonClass} target="_blank" rel="noopener noreferrer">
      {icon && <img src={icon} alt="Icon" className={iconClass} />}
      {text}
    </a>
  )
}
