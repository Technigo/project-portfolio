import PropTypes from "prop-types"

export default function Tag({ text }) {
  return (
    <div
      style={{
        paddingLeft: "7px",
        paddingRight: "7px",
        margin: "2px",
        display: "inline-block",
        backgroundColor: "black",
        color: "white",
        fontWeight: "600",
        fontFamily: "Montserrat"
      }}
    >
      {text}
    </div>
  )
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
}
