import PropTypes from 'prop-types'
import FooterImageDown from "./../../assets/FooterImageDown.png"
import FooterImageUp from "./../../assets/FooterImageUp.png"
import "./FooterImage.css"

export const FooterImage = ({ alt }) => {
  return (
    <div className="footer-image-container">
      <div className="footer-image">
        <img src={FooterImageDown} alt={alt} className='image-down' />
      </div>
      <div className='footer-image-top-layer'>
        <img src={FooterImageUp} alt={alt} className='image-up' />
      </div>
    </div>
  )
}

FooterImage.propTypes = {
  alt: PropTypes.string,
}