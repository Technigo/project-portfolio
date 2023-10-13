/* eslint-disable react/prop-types */
import Photo from "./Photo";
import ButtonLink from "./ButtonLink";
import "/src/Components/articleCard.css";

export const Articlecard = ({ title, photo, date, content, link }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
      <Photo source={photo} color="blue" mode="square" />
      <ButtonLink
        className="btn-live"
        icon="/src/assets/Btn-readMore.svg"
        name="Read article"
        link={link}
      />
    </>
  );
};

export default Articlecard;
