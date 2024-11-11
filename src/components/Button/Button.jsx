import './Button.css'

export const Button = ({ link, text, icon, variant }) => {
  const buttonClass = variant === 'white-on-black' ? 'button white-on-black' : 'button black-on-white'
  const iconClass = variant === 'white-on-black' ? 'button-icon inverted' : 'button-icon'

  return (
    <a href={link} className={buttonClass} target="_blank" rel="noopener noreferrer" aria-label={text}>
      {icon && <img src={icon} alt={`${text} icon`} className={iconClass} />}
      {text}
    </a>
  )
}
