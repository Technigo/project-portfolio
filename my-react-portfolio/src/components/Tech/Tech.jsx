import { PageTopic } from '../PageTopic'
import './Tech.css'

export const Tech = () => {
  return (
    <section className="tech-wrapper">
      <div className="tech-container">
        <PageTopic className={"tech"} pageTopic={"Tech"} />
        <p className="tech-details">
          React, JavaScript/ES6, HTML5, CSS3,
          Node.js, Express, MongoDB, Mongoose, RESTful API, Authentication, Responsive Design, 
          Tailwind CSS, Styled Components, Accessibility, Figma,
          GitHub
        </p>
      </div>
    </section>
  );
};