import PropTypes from "prop-types"

export default function Tag({ text }) {
  return (
    <div
      style={{
        paddingLeft: "3px",
        paddingRight: "3px",
        margin: "2px",
        display: "inline-block",
        backgroundColor: "black",
        color: "white"
      }}
    >
      {text}
    </div>
  )
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
}
