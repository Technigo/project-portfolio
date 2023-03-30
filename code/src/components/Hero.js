import React from "react";
import '../styles/hero.css'

const Hero = () => {
    return (
    <div className="desktop-view">
        <div className="logo">
      <img src="../img/logo.svg" alt="" />
    </div>
    <header>
      <section className="hero-wrapper">
        <div className="info-card">
          <div className="profile-pic-wrapper">
            <img className="profile-picture" src="../img/vio.jpg" alt="Close-up of Vio" />
          </div>
          <div className="name-wrapper">
            <h1 className="my-name">Vio Szabo</h1>
            <h2 className="tagline">Frontend developer</h2>
            <h3 className="second-tagline">with a background in communications</h3>
          </div>
        </div>
        <div className="summary-text">
          <p>
            I am a frontend developer with 12 years of experience in communications. 
            I'm passionate about learning new things and have finally found
            a career where there's always more to learn!
            I also love pets and beer.
          </p>
        </div>
        <div className="social-media-links">
          <a href="https://www.linkedin.com/in/vio-szabo/">
                <img className="social-link" src="../img/ln-grey.svg" alt="Linkedin profile" />
          </a>
          <a href="https://github.com/code-and-cats">
            <img className="social-link" src="../img/github-grey.svg" alt="GitHub profile" /></a>
        </div>
      </section>
      <div className="scroll-wrapper" title="lets scroll">
        <img src="../img/arrow.svg" alt="" />
        <a href="#tech-header" className="scroll-text">Let's scroll
        </a>
        </div>
    </header>
    </div>

    )
}

export default Hero;