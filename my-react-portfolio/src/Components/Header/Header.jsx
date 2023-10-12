import { Description } from "../../ReusableComponents/Button"
import { CardHeading } from "../../ReusableComponents/CardHeading.jsx"
import { MyPhoto } from "../../ReusableComponents/MyPhoto.jsx"
import { Photo } from "../../ReusableComponents/Photo"

import "./Header.css"

export const  Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <MyPhoto />
        <div className="text-wrapper">
      <p>Hi, I &apos; m Klaudia Wróblewska </p>
          <CardHeading text="Frontend Developer" />
          </div>
     
        <Description className={"header-paragraph"} text={"After completing my studies and gaining experience as a steel construction technologist with SolidWorks and CAD design, I decided to change my career and started learning web development. Currently studying at Technigo for Web Development Bootcamp. "} />
        <Photo src={"./Arrow.svg"} alt={"arrow"} className={"arrow"}/>
      </div>
   </header>
  )
}

