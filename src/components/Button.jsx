import PropTypes from "prop-types"
import { useState } from "react"

function getContrast(color) {
  let red = 0
  let green = 0
  let blue = 0
  if (color.startsWith("#")) {
    color = color.slice(1)
    let numberOfChars = color.length / 3
    red = parseInt(color.slice(0, numberOfChars), 16)
    green = parseInt(color.slice(numberOfChars, numberOfChars * 2), 16)
    blue = parseInt(color.slice(numberOfChars * 2), 16)
  } else {
    red = color[0]
    green = color[1]
    blue = color[2]
  }

  if ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) {
    return "#000000"
  } else {
    return "#FFFFFF"
  }
}

export default function Button({ icon, text, url, backgroundColor, hoverColor }) {
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

  backgroundColor = backgroundColor ?? "#F5F5F5"
  let defaultTextColor = getContrast(backgroundColor)
  let hoverTextColor = getContrast(hoverColor ?? backgroundColor)

  return (
    <button
      style={{
        borderRadius: "40px",
        padding: "10px",
        display: "flex",
        flexdirection: "row",
        alignItems: "center",
        maxWidth: `${Math.max(1, text.length * 20)}px`,
        backgroundColor: hovered && hoverColor
          ? hoverColor ?? backgroundColor
          : backgroundColor,
        border: "none",
        transition: "background-color 0.3s ease",
        cursor: "pointer"
      }}
      onClick={gotoUrl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={icon}
        alt=""
        style={{
          width: "30px",
          height: "30px",
          filter: hovered && hoverColor ? "brightness(0) invert(1)" : "none",
          transition: "filter 0.15s ease",
        }}
      />
      <h5 style={{ margin: "0 10px", color: hovered && hoverColor ? hoverTextColor : defaultTextColor }}>
        {text}
      </h5>
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
}
