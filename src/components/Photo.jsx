import PropTypes from "prop-types"

export default function Photo({ src, color, width, height, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        borderLeft: `10px solid ${color}`,
        borderBottom: `10px solid ${color}`,
        objectFit: "cover",
        width: width,
        height: height,
        boxSizing: "border-box"
      }}
    />
  )
}

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
}

Photo.defaultProps = {
  width: "200px",
  height: "150px",
}
