import "./IntroductionCard.css";

export const IntroductionCard = () => {
  return (
    <div className="introduction-card">
      {/* Profile Section */}
      <section className="profile-section">
        <img src="profile-image-url" alt="Profile" className="profile-image" />
        <h2 className="name">Sara Svensson</h2>
        <h3 className="title">Frontend Developer</h3>
        <p className="description">
          Sara is an exceptional developer known for her innovative solutions
          and exceptional coding abilities...
        </p>
      </section>

      {/* Arrow Divider */}
      <div className="arrow-divider">↓</div>

      {/* Tech Section */}
      <section className="tech-section">
        <h3 className="tech-title">Tech</h3>
        <p className="tech-stack">
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          MongoDB, Web Accessibility, APIs, GitHub...
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h3 className="projects-title">Featured Projects</h3>

        <div className="project-card">
          <img
            src="chatbot-image-url"
            alt="Chatbot project"
            className="project-image"
          />
          <p className="project-description">
            Chatbot built in JavaScript - A conversational AI-powered tool
            designed to enhance user experience...
          </p>
          <div className="project-buttons">
            <button className="live-demo-btn">Live Demo</button>
            <button className="view-code-btn">View the Code</button>
          </div>
        </div>

        <div className="project-card">
          <img
            src="weather-app-image-url"
            alt="Weather App project"
            className="project-image"
          />
          <p className="project-description">
            Weather App - AI-powered bot designed to provide accurate weather
            insights and enhance user experience...
          </p>
          <div className="project-buttons">
            <button className="live-demo-btn">Live Demo</button>
            <button className="view-code-btn">View the Code</button>
          </div>
        </div>
      </section>
    </div>
  );
};
