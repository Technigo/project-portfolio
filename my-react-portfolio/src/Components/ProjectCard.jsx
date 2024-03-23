import liveDemoIcon from './Live Demo.svg'
import gitHubIcon from './github.svg'
import { Image } from './Image'
import { Tag } from './Tag'

export const ProjectCard = ({ projectList }) => {
  return (
    <div>
      {projectList.map(
        (items) =>
          items.homepage && (
            <div key={items.id}>
              <Image />
              <h2>{items.name}</h2>
              <p>{items.description}</p>
              <Tag />
              <a href={items.html_url}>
                <img src={liveDemoIcon} alt="github-icon" />
                Live Demo
              </a>
              <a href={items.homepage}>
                <img src={gitHubIcon} alt="github-icon" />
                View the Code
              </a>
            </div>
          )
      )}
    </div>
  )
}
