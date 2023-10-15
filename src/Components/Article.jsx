import { Buttons } from "../Components/Buttons";

export const Article = ({ imageURL, title, date, articleText, sectionId }) => {
  return (
    <div className="article-card">
      <img src={imageURL} />
      <h3>{title}</h3>
      <span>{date}</span>
      <p>{articleText}</p>
      <Buttons sectionId={sectionId} />
    </div>
  )
}
