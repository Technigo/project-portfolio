import liveDemoIcon from './Live Demo.svg'
import gitHubIcon from './github.svg'
import { Image } from '..//ImageProject/Image'
import { Tag } from '../Tags/Tag'
import './projectCard.css'

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
                <Tag items={items} />
              </div>
              <button id="liveDemoBtn">
                <a href={items.html_url}>
                  <img src={liveDemoIcon} alt="github-icon" />
                  Live Demo
                </a>
              </button>
              <button id="gitBtn">
                <a href={items.homepage}>
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
