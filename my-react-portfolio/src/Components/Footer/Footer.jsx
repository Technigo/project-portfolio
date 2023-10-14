import { CardHeading } from "../../ReusableComponents/CardHeading"
import { Contact } from "./Contact"
import { MyPhoto } from "../../ReusableComponents/MyPhoto.jsx"


export const Footer = ()  =>{
  return (
    <footer>
      <CardHeading className="blue-heading" text="Let’s talk" />
      <MyPhoto />
      <Contact />
      <div className="icons">
        
      </div>
    </footer>
  )
}
