import liveDemoIcon from './Live Demo.svg'
import gitHubIcon from './github.svg'
import { Image } from '..//ImageProject/Image'
import './projectCard.css'
import './tag.css'

export const ProjectCard = ({ projectList }) => {
  return (
    <>
      {projectList.map(
        (items) =>
          items.homepage && (
            <div className="projectCard" key={items.id}>
              <Image items={items} />
              <div className="projectTextWrapper">
                <h2>{items.name}</h2>
                <p>{items.description}</p>
                <div id="tagsContainer">
                  {items.topics.map((topic, index) => (
                    <p key={index}>{topic}</p>
                  ))}
                </div>
              </div>
              <button id="liveDemoBtn">
                <a href={items.homepage}>
                  <img src={liveDemoIcon} alt="github-icon" />
                  Live Demo
                </a>
              </button>
              <button id="gitBtn">
                <a href={items.html_url}>
                  <img src={gitHubIcon} alt="github-icon" />
                  View the Code
                </a>
              </button>
            </div>
          )
      )}
    </>
  )
}
