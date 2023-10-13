import "./imagePortrait.css"
import imageVeronica from "../assets/imageVeronica.png";


export const ImagePortrait = () => {


  return (
    <div>
      <img
        className="circle-image"
        src={imageVeronica}
        alt="Avatar">

      </img>
    </div>
  )
}
