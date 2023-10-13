/* eslint-disable react/prop-types */
import "/src/Components/articleCard.css";
const ButtonLink = ({ icon, name, link, style }) => {
  return (
    <button className={style}>
      <a href={link}>
        <img src={icon} />
        <p>{name}</p>
      </a>
    </button>
  );
};

export default ButtonLink;
