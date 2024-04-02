import { BtnLiveDemo, BtnViewCode } from "./buttons/Buttons"
import styles from "./ProjectContainer.module.css"

export const ProjectContainer = ({ name, description, created_at, homepage, git_url, topics }) => {
  const imageLink = `https://raw.githubusercontent.com/vidalhuix/${name}/main/src/assets/Featured-image.jpg`

  return (
    <div className={styles.project}>
      <img className={styles.featuredImg} src={imageLink} alt="Project-image"/>
      <h2>{name.replace(/-/g, ' ').toUpperCase()}</h2>
      <p>{description}
      <span className={styles.createdAt}> Created {created_at}.</span>
      </p>
      <div className={styles.topics}>
        {topics.length > 0 ? (
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        ) : (
          <p>No topics</p>
        )}
      </div>
      <BtnLiveDemo homepage={homepage} />
      <BtnViewCode git_url={git_url} />
    </div>
  )
}
