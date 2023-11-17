import { CardHeading } from "../../ReusableComponents/CardHeading"
import "./Skills.css"
export const Skills = () => {
  return (
    <section className="skills-wrapper">
      <CardHeading className="white-skills-heading" text="Skills" />
      <div className="description-skills">
        <div className="skills">
          <h4>Code</h4>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>ES6 React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>

        </div>
        <div className="skills">
          <h4>Toolbox</h4>
          <ul>
            <li>Postman</li>
            <li>Figma</li>
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
            <li>Collaborative work</li>
            <li>Strategy</li>
            <li>Agile methodology</li>
          </ul>

        </div>
      </div>

    </section>
  )
}