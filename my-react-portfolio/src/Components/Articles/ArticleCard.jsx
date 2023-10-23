import { Description } from "../../ReusableComponents/Description.jsx"
import { SectionHeading } from "../../ReusableComponents/SectionHeading.jsx"
import { Button } from "../../ReusableComponents/Button.jsx"
import "./ArticleCard.css"

export const ArticleCard = (props) => {
  
  let nameArticle = props.articles.name
  let imgArticle = props.articles.image
  let timeArticle = props.articles.time
  let linkArticle = props.articles.link
  let descriptionArticle = props.articles.description
  

  return (
    <>
      <div className="articleCard-wrapper">
        <div className="img-wrapper">
          <img src={imgArticle} alt={ nameArticle } className="article-image" />
     </div>
        <div className="article-description">
          <p className="timeArticle">{timeArticle} </p>
          <SectionHeading  className="article-heading" text={nameArticle} />
          <Description className="article-paragraph" text={descriptionArticle} />
          <Button label="Read article" imageSrc="../Icons/Doc.png"  path={linkArticle} className="button-article" imgClass="img-button" />
          
        </div>
    </div>
    </>
  )
}

