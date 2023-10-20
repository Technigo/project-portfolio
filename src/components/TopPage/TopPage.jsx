import "./TopPage.css";
import { Photo } from "../Photo/Photo"; 

export const TopPage = () => {
  return (
    <div className="intro-container">
      <div className="photo-container">
        <Photo />
      </div>
      <div className="text-container">
        <p className="my-name">Hi, I'm Isaac Kamran</p>
        <h1>Frontend Developer</h1>
        <p className="info">
          Isaac is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.
        </p>
      </div>
    </div>
  )
}