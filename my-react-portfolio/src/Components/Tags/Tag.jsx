import repoTags from '../images-tags.json'
import './tag.css'
export const Tag = ({ items }) => {
  const repoTag = repoTags.find((img) => img.repoName === items.name)

  return (
    <div id="tagsContainer">
      {repoTag && repoTag.tags.map((tag, index) => <p key={index}>{tag}</p>)}
    </div>
  )
}
