import { Description } from "../../ReusableComponents/Description"
import { CardHeading } from "../../ReusableComponents/CardHeading"
import "./Tech.css"


export const Tech = () => {

   const TechText = "HTML, CSS, Flexbox, JavaScript, ES6,JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, GitHub. "
   
  
  return (
    <section className="tech-section">
      <div className="tech-wrapper">
       <div className="headings-tech">
          <CardHeading className="white-heading" text="Tech" />
          </div>
       <Description className="tech-paragraph" text={ TechText} />
</div>
       </section>
  )
}
 
