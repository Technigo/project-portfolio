import { PageTopic } from '../PageTopic'
import './Tech.css'

export const Tech = () => {
    return (
      <section className="tech-wrapper">
          <div className="tech-title">
            <PageTopic className={"tech"} pageTopic={"Tech"} />
          </div>
          <div className="tech-details">
            <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.</p> 
          </div>
      </section>
    );
}