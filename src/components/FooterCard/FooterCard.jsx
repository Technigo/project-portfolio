import { HeaderTwo, Body } from "../../ui/Typography/Typography"
import { MediaButtonContainer } from "../MediaButtonContainer/MediaButtonContainer"
import "./FooterCard.css"

export const FooterCard = () => {
  return (
    <div className="footer-card">
      <HeaderTwo>
        Let's talk
      </HeaderTwo>
      <Body>Gitte Beckmann</Body>
      <Body>+46(0)721 70 43 58</Body>
      <Body> gittebeckmann@hotmail.com</Body>
      <div className="media-button-div">
        <MediaButtonContainer />
      </div>
    </div>
  )
}