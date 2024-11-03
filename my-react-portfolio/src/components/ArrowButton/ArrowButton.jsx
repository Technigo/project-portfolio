import arrowIcon from '../../assets/arrow-down.svg'
import './ArrowButton.css'

export const ArrowButton = ({ link = '#', text = 'See more', variant = 'black-on-white' }) => {
  const buttonClass = variant === 'white-on-black' ? 'arrow-button white-on-black' : 'arrow-button black-on-white'
  const iconClass = variant === 'white-on-black' ? 'button-icon inverted' : 'button-icon'

  return (
    <a href={link} className={buttonClass} target="_blank" rel="noopener noreferrer" aria-label={text}>
      <img src={arrowIcon} alt={`Navigate to ${text}`} className={iconClass} />
      {text}
    </a>
  )
}
