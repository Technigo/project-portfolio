import { useState } from "react";
import { Intro } from "./Intro";
import "./App.css";
import { Tech } from "./Tech";
import { FeaturedProjects } from "./FeaturedProjects";
import theDailySleep from "./assets/the-daily-sleep.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Intro />
        <Tech />
        <FeaturedProjects
          projects={[
            {
              title: "The Daily Sleep",
              image: theDailySleep,
              alt: "screenshots of the daily sleep website on a mobile device, a tablet, and a desktop monitor",
              description: "A news site.",
              demoUrl: "",
              codeUrl: "",
              tech: ["HTML", "CSS"],
            },
          ]}
        />

        {/* <section className="skills-container">
          <h2 className="my-skills">Skills:</h2>
          <div className="skills">
            <div className="skill-list">
              <h4>Language:</h4>
              <ul className="language">
                <li>HTML5.</li>
                <li>CSS3.</li>
                <li>JavaScript.</li>
              </ul>
            </div>
            <div className="skill-list">
              <h4>Tools:</h4>
              <ul className="tools">
                <li>GitHub.</li>
                <li>Figma.</li>
                <li>Figjam.</li>
                <li>Photoshop.</li>
                <li>Premiere Pro.</li>
                <li>Meta Business Suite.</li>
                <li>Excel.</li>
              </ul>
            </div>
            <div className="skill-list">
              <h4>More:</h4>
              <ul className="more">
                <li>Copywriting.</li>
                <li>Marketing.</li>
                <li>Concept development.</li>
                <li>SEO.</li>
                <li>Graphic design.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="projects">
          <h2 className="my-projects">Projects:</h2>
          <ul className="card-list">
            <li className="card">
              <a href="project-the-daily-sleep.html">
                <img
                  className="card-image"
                  src="assets/the-daily-sleep.png"
                  alt="screenshots of the daily sleep website on a mobile device, a tablet, and a desktop monitor"
                />
              </a>
              <h3>The Daily Sleep - news site</h3>
            </li>
          </ul>
        </section>

        <footer>
          <div className="footer-section">
            <h2 className="find-me">Find me:</h2>
            <ul className="icon-pic">
              <li className="icon">
                <a href="https://github.com/johannacatalinismith">
                  <img src="assets/github.png" alt="github" />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.linkedin.com/in/johanna-catalini-smith-b08a771b5/">
                  <img src="assets/linkedin.png" alt="linkedin" />
                </a>
              </li>
              <li className="icon">
                <a href="https://stackoverflow.com/users/23249176/johanna-catalini-smith">
                  <img src="assets/stackoverflow.png" alt="stackoverflow" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="contact-me">Contact me:</h2>
            <p className="mail">johannacatalini@gmail.com</p>
          </div>
        </footer> */}
      </main>
    </>
  );
}

export default App;
