import PropTypes from "prop-types"
import { useState } from "react"

export default function Button({ icon, text, url }) {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const gotoUrl = () => {
    window.open(url)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }
  return (
    <button
      style={{
        borderRadius: "40px",
        padding: "5px 10px",
        display: "flex",
        flexdirection: "row",
        alignItems: "center",
        maxWidth: `${Math.max(1, text.length * 20)}px`,
        backgroundColor: hovered
          ? text === "Live demo"
            ? "#0B24F5"
            : "#EB5577"
          : "#F5F5F5",
        border: "none",
        transition: "background-color 0.3s ease",
      }}
      onClick={gotoUrl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={icon}
        alt={text}
        style={{
          width: "30px",
          height: "30px",
          filter: hovered ? "brightness(0) invert(1)" : "none",
          transition: "filter 0.3s ease",
        }}
      />
      <h5 style={{ margin: "0 10px", color: hovered ? "white" : "black" }}>
        {text}
      </h5>
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
