import PropTypes from 'prop-types'
import "./MediaButton.css"

export const MediaButton = ({ src, alt }) => {
    return (
        <button className="media-button">
            <img src={src} alt={alt} />
        </button>
    )
}

MediaButton.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}