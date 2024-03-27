/* eslint-disable react/prop-types */

const Button = ({ icon, name, link, style }) => {
  return (
    <button className={style}>
      <img src={icon} />
      <a href={link}>{name}</a>
    </button>
  );
};

export default Button;
