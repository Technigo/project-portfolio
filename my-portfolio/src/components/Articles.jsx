import PropTypes from "prop-types"
import "./Articles.css"

export const Articles = ({ title, writtenAt, description, image, link }) => {
  return (
    <div className="article-card">
      <img className="article-image" src={image} alt="" />
      <div className="header-box">
        <p className="tag">{writtenAt}</p>
        <h3 className="article-title">{title}</h3>
      </div>
      <p>{description}</p>
      <a className="button read-article" href={link} target="_blank">
        <img src="..//src/assets/live-demo.svg" alt="Web icon" />
        Read article
      </a>
    </div>
  )
}

Articles.propTypes = {
  title: PropTypes.string.isRequired,
  writtenAt: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}