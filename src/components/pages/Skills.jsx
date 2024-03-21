import "./skills.css"
export default function Skills() {
  return (
    <div className="page" style={{ backgroundColor: "#0B24F5" }}>
      <div className="skills-container">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Skills
        </h1>

        <div
          className="skills"
          style={{
            display: "flex",
            flexWrap: "nowwrap",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="skills-info">
            <div className="code">
              <h3
                style={{
                  paddingLeft: "3px",
                  paddingRight: "3px",
                  margin: "2px",
                  display: "inline-block",
                  backgroundColor: "#EB5577",
                  color: "white",
                }}
              >
                Code
              </h3>
              <p
                style={{
                  textAlign: "center",
                  paddingBottom: "30px",
                  paddingLeft: "0",
                }}
              >
                HTML5
                <br />
                CSS3
                <br />
                Javascript ES6
                <br />
                React
                <br />
                Style Components
                <br />
                Github
              </p>
            </div>

            <div className="toolbox">
              <h3
                style={{
                  paddingLeft: "3px",
                  paddingRight: "3px",
                  margin: "2px",
                  display: "inline-block",
                  backgroundColor: "#2483E0",
                  color: "white",
                }}
              >
                Toolbox
              </h3>
              <p
                style={{
                  textAlign: "center",
                  paddingBottom: "30px",
                  paddingLeft: "0",
                }}
              >
                Figma
                <br />
                Slack
                <br />
                Lighthouse
                <br />
                Stack Overflow
              </p>
            </div>

            <div className="upcoming">
              <h3
                style={{
                  paddingLeft: "3px",
                  paddingRight: "3px",
                  margin: "2px",
                  display: "inline-block",
                  backgroundColor: "#6DB486",
                  color: "white",
                }}
              >
                Upcoming
              </h3>
              <p
                style={{
                  textAlign: "center",
                  paddingBottom: "30px",
                  paddingLeft: "0",
                }}
              >
                React Router
                <br />
                MongoDB
                <br />
                Express.js
              </p>
            </div>

            <div className="more">
              <h3
                style={{
                  paddingLeft: "3px",
                  paddingRight: "3px",
                  margin: "2px",
                  display: "inline-block",
                  backgroundColor: "#FFDE30",
                  color: "#0B24F5",
                }}
              >
                More
              </h3>
              <p
                style={{
                  textAlign: "center",
                  paddingBottom: "30px",
                  paddingLeft: "0",
                }}
              >
                Design Lead
                <br />
                Branding
                <br />
                Strategy
                <br />
                Process design
                <br />
                Concept development
                <br />
                Agile methodology
                <br />
                Hyper Island toolbox
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
