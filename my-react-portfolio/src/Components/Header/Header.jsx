import { Description } from "../../ReusableComponents/Description"
import { CardHeading } from "../../ReusableComponents/CardHeading.jsx"
import { MyPhoto } from "../../ReusableComponents/MyPhoto.jsx"

import "./Header.css"

// Component for the introduction section.

export const Header = () => {

  const aboutMe = "After completing my studies and gaining experience as a steel construction technologist with SolidWorks and CAD design, I decided to change my career and started learning web development. Currently studying at Technigo for Web Development Bootcamp."
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="image-content">
            <div className="image-cropper">
              <MyPhoto className="person-img" />
            </div>
          </div>
          <section className="heading-wrapper">
            <p className="header-paragraph">Hi, I &apos; m Klaudia Wróblewska </p>
            <CardHeading className="green-heading" text="Frontend Developer" />
          </section>
          <Description className="header-description" text={aboutMe} />
        </div>
        <div className="arrow">
          <img src="./arrow.svg" alt="arrow" className="arrow" />
        </div>
      </header>

    </>
  )
}

