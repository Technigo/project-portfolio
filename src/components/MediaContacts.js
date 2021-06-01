import React from 'react'

import './MediaContacts.css'

export const MediaContacts = () => {
  return (
    <section className="media-container">
      <h4 className="for-more-heading">FOR MORE</h4>
      <div className="for-more-icon-bar">
        <div>
          <a className="linkedin-icon-bigger" href="https://www.linkedin.com/in/ida-sylv%C3%A9n-aa8198203/" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img src="./assets/icons/linkedin-round (2).svg" alt="Icon link to Ida Sylvéns LinkedIn. Link will open in new tab" />
          </a>
          <p className="for-more-icon-text">LINKEDIN</p>
        </div>
        <div>
          <a className="github-icon-bigger" href="https://github.com/idasylven" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img src="./assets/icons/github-icon-white.svg" alt="Icon link to Ida Sylvéns GitHub. Link will open in new tab" />
          </a>
          <p className="for-more-icon-text">GITHUB</p>
        </div>
      </div>
    </section>
  )
}