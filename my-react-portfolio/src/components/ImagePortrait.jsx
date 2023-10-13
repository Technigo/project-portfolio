import "./imagePortrait.css"
import imageVeronica from "../assets/portrait/imageVeronica.png";


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
