import { BigHeadlines } from "../Components/BigHeadlines";
import { ArrowDivider } from "./ArrowDivider";
import "./Introduction.css";

export const Introduction = () => {
  const sectionId = 1; 

  return (
    <>
      <div className="introduction-wrapper">
        <img className="profile-pic" src="/images/profle-pic.jpg" alt="profile picture" />
        <div className="name-title">
          <h3>Hi, I&apos;m Hang Nguyen</h3>
          <BigHeadlines sectionId={sectionId}/>
        </div>      
        <p>I am a Fullstack Developer in Javascript, React, Node.js and MongoDB. I am also a career changer with experiences in project management in development sector and higher education sector. I believe that my ability to learn new things quickly and problem solving skills will help me to get onboard fast and contribute more to my future team.</p>
      </div>
      <ArrowDivider />
    </>
    
  )
}
