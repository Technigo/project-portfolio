import React from "react";
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
      <h2 className="contact-header">Time to talk</h2>
      <div className="footer-card">
        <div className="profile-pic-wrapper">
          <img className="profile-picture-footer" src="../img/vio.jpg" alt="Close-up of Vio" />
        </div>
        <div className="name-wrapper">
          <h1 className="my-name">Vio Szabo</h1>
          <h2 className="tagline">Frontend developer</h2>
          <h3 className="second-tagline">with a background in communications</h3>
        </div>
      <div className="social-media-links-footer">
        <a href="https://www.linkedin.com/in/vio-szabo/">
          <img className="social-link" src="../img/ln-grey.svg" alt="Linkedin profile" />
        </a>
        <a href="https://github.com/code-and-cats">
          <img className="social-link" src="../img/github-grey.svg" alt="GitHub profile" /></a>
      </div>
    </div>
    </footer>
    )
}

export default Footer