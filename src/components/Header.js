import React from 'react'

import './Header.css'

export const Header = () => {
  return (
    <header className="header-hero">
      <div className="header-container">
        <div className="social-media-container">
          <a href="https://www.linkedin.com/in/ida-sylv%C3%A9n-aa8198203/" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="linkedin-icon" src="./assets/icons/linkedin-round (2).svg" alt="Icon link to Ida Sylvéns LinkedIn" />
          </a>
          <a href="https://github.com/idasylven" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="github-icon" src="./assets/icons/github-icon-white.svg" alt="Icon link to Ida Sylvéns GitHub" />
          </a>
        </div>
        <div className="portfolio-headings-container">
          <h1 className="portfolio-owner">PORTFOLIO: <span className="full-name">IDA SYLVÉN</span></h1>
          <h2 className="profession-title">frontend <br /> developer <br /> <span className="profession">& designer</span></h2>
        </div>
        <div className="profile-pic-container">
          <img className="profile-pic" src="./assets/images/profile-pic-1-mirrored.jpg" alt="Ida Sylvén headshot" />
        </div>
      </div>
    </header>
  )
}

// <img className="header-img" src="./assets/images/pexels-clintdyguaso-3823271medium.jpg" alt="Turqouise background with golden sparks" />