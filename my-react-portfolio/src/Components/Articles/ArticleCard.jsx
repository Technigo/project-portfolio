import { Description } from "../../ReusableComponents/Description.jsx"
import { SectionHeading } from "../../ReusableComponents/SectionHeading.jsx"
import { Button } from "../../ReusableComponents/Button.jsx"

export const ArticleCard = (props) => {
  
  let nameArticle = props.articles.name
  let imgArticle = props.articles.image
  let timeArticle = props.articles.time
  let linkArticle = props.articles.link
  let descriptionArticle = props.articles.description
  

  return (
    <>
      <div className="articleCard-wrapper">
      <div className="image-wrapper">
          <img src={imgArticle}  />
        </div>
        <div className="article-description">
          <p>{timeArticle}</p>
          <SectionHeading  className="project-heading" text={nameArticle} />
          <Description className="project-paragraph" text={descriptionArticle} />
          <Button label="Read article" path={linkArticle} className="button-article" />
          
        </div>
    </div>
    </>
  )
}
