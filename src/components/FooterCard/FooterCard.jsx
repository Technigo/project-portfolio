import { HeaderTwo, Body } from "../../ui/Typography/Typography"
import { MediaButtonContainer } from "../MediaButtonContainer/MediaButtonContainer"
import "./FooterCard.css"

export const FooterCard = () => {
  return (
    <div className="footer-card">
      <div className="footer-text-container">
        <HeaderTwo>
          Let's talk
        </HeaderTwo>
        <div className="spacer"></div>
        <Body>Daniel</Body>
        <Body>+46(0)...</Body>
        <Body> daniel@xyz.com</Body>
      </div>
      <div className="media-button-div">
        <MediaButtonContainer />
      </div>
    </div>
  )
}