import './ArrowButton.css'
import arrowIcon from '../../assets/arrow-down.svg'

export const ArrowButton = ({ link = '#', text = 'See more', variant = 'black-on-white' }) => {
  const buttonClass = variant === 'white-on-black' ? 'arrow-button white-on-black' : 'arrow-button black-on-white'
  const iconClass = variant === 'white-on-black' ? 'button-icon inverted' : 'button-icon'

  return (
    <a href={link} className={buttonClass} target="_blank" rel="noopener noreferrer">
      <img src={arrowIcon} alt="Arrow" className={iconClass} />
      {text}
    </a>
  )
}
