import { Description } from "../../ReusableComponents/Description"
import { CardHeading } from "../../ReusableComponents/CardHeading"
import "./Tech.css"


 export const Tech = () => {
   return (
     
    <section className="tech-wrapper">
       <CardHeading className="white-heading"  text="Tech" />
       <Description className="tech-paragraph"text="HTML, CSS, Flexbox, JavaScript, ES6, 
JSX, React, React Hooks, Node.js, 
Mongo DB, Web Accessibility, API:s, 
mob-programming, pair-programming, GitHub. " />
       </section>
  )
}

