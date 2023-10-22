/* eslint-disable react/prop-types */
import Photo from "./Photo";
import Button from "./Button";
import "/src/Components/articleCard.css";
import readMoreIcon from "/src/assets/Btn-readMore.svg";

export const Articlecard = ({ title, photo, date, content, link }) => {
  return (
    <div className="container">
      <Photo source={photo} color="pink" size="article-square" />
      <div className="article-content">
        <p className="date">{date}</p>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button
          style="btn-read"
          icon={readMoreIcon}
          name="Read article"
          link={link}
        />
      </div>
    </div>
  );
};

export default Articlecard;
