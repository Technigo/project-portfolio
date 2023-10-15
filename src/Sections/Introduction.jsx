import { BigHeadlines } from "../Components/BigHeadlines";

export const Introduction = () => {
  const sectionId = 1; 

  return (
    <div className="introduction">
        <img className="profile-pic" src="./public/images/profle-pic.jpg" alt="profile picture" />
        <h3>Hi, I&apos;m Hang Nguyen</h3>
        <BigHeadlines sectionId={sectionId}/>
        <p>I am a career changer with experiences in project management in development sector and higher education sector. I believe that my ability to learn new things quickly and problem solving skills will help me to get onboard fast and contribute more to my future team.</p>
    </div>
  )
}
