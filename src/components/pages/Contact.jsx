import myImage from "/src/assets/me.png"
import github from "/src/assets/github.png"
import insta from "/src/assets/insta.png"
import "./contact.css"

export default function Contact() {
  return (
    <div className="page">
      <h1 className="lets-talk" style={{ color: "#0B24F5" }}>
        Let’s talk
      </h1>
      <img
        className="profile-image"
        src={myImage}
        alt="Portrait of Josephine Oderland"
        width="200"
        height="200"
      />

      <div className="about-me-info">
        <div className="contact-info">
          <h4 style={{ color: "black", textAlign: "center" }}>
            Josephine Oderland
            <br />
            <a className="tel" href="tel:+46709908810">
              (+46)709 90 88 10
            </a>
            <br />
            <a className="mail" href="mailto:Josephine@oderland.se">
              Josephine@oderland.se
            </a>
          </h4>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/Josephineoderland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-img"
              src={github}
              alt="a github img linkt to my accont"
            />
          </a>
          <a
            href="https://www.instagram.com/josephine_oderland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="insta-img"
              src={insta}
              alt="a insta img linkt to my accont"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
