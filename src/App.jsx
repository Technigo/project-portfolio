import { Introduction } from "./components/Introduction"
import { Tech } from "./components/Tech"
import { Projects } from "./components/Projects"
import { Articles } from "./components/Articles"
import { Skills } from "./components/Skills"
import { ContactInfo } from "./components/ContactInfo"
import { Footer } from "./components/Footer"

import "./App.css"
import projectData from "../projects.json"
import articlesData from "../articles.json"

const App = () => {
  const { projects } = projectData
  const { articles } = articlesData

  const renderProjects = projects.map(
    ({ name, description, image, tags, netlify, github }) => (
      <Projects
        key={name}
        name={name}
        description={description}
        image={image}
        tags={tags}
        netlify={netlify}
        github={github}
      />
    )
  )

  const renderArticles = articles.map(
    ({ title, writtenAt, description, image, altText, link }) => (
      <Articles
        key={link}
        title={title}
        writtenAt={writtenAt}
        description={description}
        image={image}
        altText={altText}
        link={link}
      />
    )
  )

  return (
    <div>
      <Introduction />
      <Tech />
      <div className="section" id="projects-section">
        <h1 id="projects-heading">Featured projects</h1>
        {renderProjects}
      </div>
      <div className="divider"></div>
      <div className="section" id="articles-section">
        <h1 id="article-heading">My words</h1>
        {renderArticles}
      </div>
      <Skills />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default App
