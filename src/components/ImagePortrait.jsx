import "./imagePortrait.css"
import imageVeronica from "../assets/portrait/imageVeronica.png";


export const ImagePortrait = () => {


  return (
    <>
      <img
        className="circle-image"
        role="img"
        src={imageVeronica}
        alt="Portrait of Veronica Åström">
      </img>
    </>
  )
}
