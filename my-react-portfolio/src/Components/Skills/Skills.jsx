import { CardHeading } from "../../ReusableComponents/CardHeading"
import "./Skills.css"
export const Skills = () => {
return (
<section className="skills-wrapper">
  <CardHeading className="white-heading" text="Skills" />

  <div className="description-skills">
    <div className="skills">
        <h4>Code</h4>
        
        <ul>
          <li>HTML5</li>
          <li> CSS3</li>
          <li>Javascript</li>
          <li>ES6 React</li>
          <li>Styled Components</li>
          <li>GitHub</li>
          </ul>

    </div>
    <div className="skills">
      <h4>Toolbox</h4>
        <ul>
          <li>Atom</li>
          <li>Postman</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Figma</li>
          <li>Keynote</li>
          <li>Slack</li>
        </ul>

    </div>
    <div className="skills">
      <h4>Upcoming</h4>
      <ul>Node.js</ul>

    </div>
    <div className="skills">
      <h4>More</h4>
        <ul>
        <li>Design Lead</li>
        <li>Branding</li>
        <li>Strategy</li>
        <li>Process design</li>
        <li>Concept development</li>
        <li>Agile methodology</li>
        <li> Hyper Island toolbox</li>
       </ul>

    </div>
  </div>

</section>
)
}