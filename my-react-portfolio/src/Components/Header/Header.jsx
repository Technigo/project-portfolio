import { Description } from "../../ReusableComponents/Description"
import { CardHeading } from "../../ReusableComponents/CardHeading.jsx"
import { MyPhoto } from "../../ReusableComponents/MyPhoto.jsx"

import "./Header.css"

export const Header = () => {
  

  return (
  
    <header>
        <section className="heading-wrapper">
      <p>Hi, I &apos; m Klaudia Wróblewska </p>
          <CardHeading className="blue-heading" text="Frontend Developer" />
        </section>
      <section className="description-wrapper">
        <MyPhoto />
             <Description className="header-paragraph" text="After completing my studies and gaining experience as a steel construction technologist with SolidWorks and CAD design, I decided to change my career and started learning web development. Currently studying at Technigo for Web Development Bootcamp." />
      </section>
      <img src= "./Arrow.svg"  alt="arrow" className="arrow"/>
      </header>
  )
}

 