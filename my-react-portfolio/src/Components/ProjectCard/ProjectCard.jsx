import { Image } from '..//ImageProject/Image'
import './projectCard.css'
import './tag.css'
import { Demo, Git } from '../Icons/Icons'

export const ProjectCard = ({ projectList }) => {
  return (
    <>
      {projectList.map(
        (items) =>
          items.homepage && (
            <div className="projectCard" key={items.id}>
              <Image items={items} />
              <div className="projectTextWrapper">
                <h2>{items.name.replace(/-/g, ' ')}</h2>
                <p>{items.description}</p>
                <div id="tagsContainer">
                  {items.topics.map((topic, index) => (
                    <p key={index}>{topic}</p>
                  ))}
                </div>
                <div className="buttonWrapper">
                  <button id="liveDemoBtn">
                    <a href={items.homepage}>
                      <Demo alt="github-icon" />
                      Live Demo
                    </a>
                  </button>
                  <button id="gitBtn">
                    <a href={items.html_url}>
                      <Git alt="github-icon" />
                      View the Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </>
  )
}
