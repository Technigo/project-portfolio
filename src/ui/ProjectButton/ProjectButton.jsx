import PropTypes from "prop-types"
import { Body } from "../Typography/Typography"
import "./ProjectButton.css"

export const ProjectButton = ({ label, background }) => {
  return (
    <button className={`project-button ${background}-background`}>
      <Body>
        {label}
      </Body>
    </button>
  )
}

ProjectButton.propTypes = {
  label: PropTypes.node.isRequired,
  background: PropTypes.oneOf(["primary", "secondary", "neutral"]).isRequired
}