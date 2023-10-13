import { CardHeading } from "../../ReusableComponents/CardHeading"
import "./Skills.css"
export const Skills = () => {
return (
<section className="skills-wrapper">
  <CardHeading className="white-heading" text="Skills" />

  <div className="description-skills">
    <div className="skills">
      <h4>Code</h4>
        <p> HTML5
          CSS3
          Javascript
          ES6 React
          Styled Components
          GitHub</p>

    </div>
    <div className="skills">
      <h4>Toolbox</h4>
      <p>Atom
        Postman
        Adobe Photoshop
        Adobe Illustrator
        Figma
        Keynote
        Slack</p>

    </div>
    <div className="skills">
      <h4>Upcoming</h4>
      <p>Node.js</p>

    </div>
    <div className="skills">
      <h4>More</h4>
      <p>Design Lead
        Branding
        Strategy
        Process design
        Concept development
        Agile methodology
        Hyper Island toolbox</p>

    </div>
  </div>

</section>
)
}