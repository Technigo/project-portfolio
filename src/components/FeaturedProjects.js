import React from 'react'

import './FeaturedProjects.css'

export const FeaturedProjects = () => {
  return (
    <section className="featured-projects-container">
      <h4 className="featured-projects-heading">FEATURED PROJECTS</h4>
      <section className="featured-projects-box">
        <article className="project-card">
          <a href="https://github.com/idasylven/project-movies" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="project-img" src="./assets/images/thumbnail-movies.png" alt="The Movie project and link to GitHub" />
            <h6 className="project-img-text">THE MOVIE SITE</h6>
            <h6 className="project-card-heading">A MOVIE SITE BUILT IN REACT</h6>
            <p className="project-info">A pair-programmed movie search site<br />using REACT and API data</p>
          </a>
          <div className="tags-container">
            <p className="tag">REACT</p>
            <p className="tag">JSX</p>
            <p className="tag">API</p>
          </div>
        </article>
        <article className="project-card">
          <a href="https://github.com/idasylven/project-happy-thoughts" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="project-img" src="./assets/images/thumbnail-happythoughts.png" alt="The Happy Thoughts project and link to GitHub" />
            <h6 className="project-img-text">THE HAPPY THOUGHTS TWITTER</h6>
            <h6 className="project-card-heading">A TWITTER SITE BUILT IN REACT</h6>
            <p className="project-info">A positive Twitter site using<br />REACT and API data</p>
          </a>
          <div className="tags-container">
            <p className="tag">REACT</p>
            <p className="tag">JSX</p>
            <p className="tag">API</p>
          </div>
        </article>
        <article className="project-card project-hidden-mob">
          <a href="https://github.com/idasylven/project-todos" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="project-img" src="./assets/images/thumbnail-todos.png" alt="The To-Do app project and link to GitHub" />
            <h6 className="project-img-text">THE TO-DO APP</h6>
            <h6 className="project-card-heading">A TO-DO APP BUILT USING REDUX</h6>
            <p className="project-info">A digital yet handwritten to-do app<br />using REACT and REDUX</p>
          </a>
          <div className="tags-container">
            <p className="tag">REACT</p>
            <p className="tag">REDUX</p>
            <p className="tag">JSX</p>
            <p className="tag">Styled Components</p>
          </div>
        </article>
        <article className="project-card project-hidden-mob">
          <a href="https://github.com/idasylven/project-guess-who" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="project-img" src="./assets/images/thumbnail-guesswho.png" alt="The Guess Who game project and link to GitHub" />
            <h6 className="project-img-text">THE GUESS WHO GAME</h6>
            <h6 className="project-card-heading">A DIGITAL GAME BUILT IN JAVASCRIPT</h6>
            <p className="project-info">An 80s themed board game using <br />HTML, CSS and JavaScript</p>
          </a>
          <div className="tags-container">
            <p className="tag">HTML5</p>
            <p className="tag">CSS3</p>
            <p className="tag">JavaScript ES6</p>
          </div>
        </article>
        <article className="project-card project-hidden">
          <a href="https://github.com/idasylven/project-chatbot/tree/main/project-chatbot" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="project-img" src="./assets/images/thumbnail-winebot.png" alt="The Wine Bot project and link to GitHub" />
            <h6 className="project-img-text">THE WINE BOT</h6>
            <h6 className="project-card-heading">A CHAT BOT BUILT IN JAVASCRIPT</h6>
            <p className="project-info">A pair-programmed bias wine bot using <br />HTML, CSS and JavaScript</p>
          </a>
          <div className="tags-container">
            <p className="tag">HTML5</p>
            <p className="tag">CSS3</p>
            <p className="tag">JavaScript ES6</p>
          </div>
        </article>
        <article className="project-card project-hidden">
          <a href="https://github.com/idasylven/project-news-site" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="project-img" src="./assets/images/thumbnail-newssite.jpg" alt="The News site project and link to GitHub" />
            <h6 className="project-img-text">THE NEWS SITE</h6>
            <h6 className="project-card-heading">A NEWS SITE BUILT IN HTML</h6>
            <p className="project-info">A digital fashion magazine using HTML<br />and CSS</p>
          </a>
          <div className="tags-container">
            <p className="tag">HTML5</p>
            <p className="tag">CSS3</p>
          </div>
        </article>
      </section>
    </section>
  )
}