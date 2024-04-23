import "./tech.css"

export default function Tech() {
  return (
    <div
      className="page"
      style={{ backgroundColor: "#0B24F5"}}
    >
      <div className="tech-container">
        <div className="tech">
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "30px",
              color: "white",
            }}
          >
            Tech
          </h1>
        </div>
        <div className="tech-info">
          <h3 style={{ color: "white" }}>
            HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks,
            Node.js, Mongo DB, Web Accessibility, API:s, mob-programming,
            pair-programming, Github.
          </h3>
        </div>
      </div>
    </div>
  )
}
