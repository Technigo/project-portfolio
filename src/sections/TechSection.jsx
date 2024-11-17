import { Grid } from "../ui/Grid/Grid"
import { BodyText, SectionTitle } from "../ui/Typography/Typography"
import './TechSection.css'

export const TechSection = () => {
  return (
    <Grid background="black">
      <section className="tech-section">
        <div className="text-container">
          <SectionTitle>Tech</SectionTitle>
          <BodyText>
            HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.
          </BodyText>
        </div>
      </section>
    </Grid>
  )
}
