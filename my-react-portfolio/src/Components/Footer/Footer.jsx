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
      <CardHeading className="green-main-heading" text="Let&apos; s talk" />
      <MyPhoto  className="img-skills"/>
      <Contact />
        <SocialLinks />
    </footer>
      <Animation />
      </>
  )
}
