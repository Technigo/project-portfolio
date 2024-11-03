// CardPicture.jsx

import "./CardPicture.css";

export const CardPicture = ({ image }) => {

  return (
    <div className="card-picture-container">
      <img src={image} alt="picture of project" />
    </div>
  )
}