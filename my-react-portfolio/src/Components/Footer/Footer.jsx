import { CardHeading } from "../../ReusableComponents/CardHeading"
import { Contact } from "./Contact"
import { MyPhoto } from "../../ReusableComponents/MyPhoto.jsx"
import { SocialLinks } from "./SocialLinks"
import { Animation } from "./Animation"
import "./Footer.css"


export const Footer = ()  =>{
  return (
    <>
    <footer>
      <CardHeading className="blue-heading" text="Let’s talk" />
      <MyPhoto />
      <Contact />
      <div className="icons">
        <SocialLinks />
      </div>
    </footer>
      <Animation />
      </>
  )
}
