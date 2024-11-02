import './ArrowButton.css'
import arrowIcon from '../../assets/arrow-down.svg'

export const ArrowButton = ({ link = '#' }) => {
  return (
    <a href={link} className="arrow-button" target="_blank" rel="noopener noreferrer">
      <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
      See more projects
    </a>
  )
}
