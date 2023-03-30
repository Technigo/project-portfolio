import React from "react";
import '../styles/words.css'

const Words = () => {
    return (
        <section className="words-section">
      <h2 className="words-h2">My words</h2>
      <div className="words-section-wrapper">
        <article className="words-article">
          <img className="words-image" src="../img/oslo_gbgrd-0530.jpg" alt="" />
          <div className="words-header">
            <h4 className="date-tag">March 2023</h4>
            <h3 className="words-h3">What Roller Derby taught me about learning to code</h3>
          </div>
          <p className="words-p">I learned to roller skate as a 30-something, and it was HARD. To my surprise, a lot of the skills I learned as a rookie skater translate easily to my journey as a rookie front end developer.
          </p>
          <form action="https://medium.com/@hejvio/what-roller-derby-taught-me-about-learning-to-code-6ec968161a54" method="get" target="_blank">
            <button type="submit" className="words-button">
              <img src="../img/texticon.svg" className="icon" alt="" />Read article
            </button>
          </form>
        </article>
      </div>
    </section>
    )
}

export default Words