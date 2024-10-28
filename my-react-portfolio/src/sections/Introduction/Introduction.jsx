import "./introduction.css";

export const Introduction = () => { 
  return (
    <section className="intro-container">

      <h3>Hi there, I am</h3>
      <h1>Xing Yin</h1>
      <h3>Creative Frontend Developer with a Background in Architecture & Accessibility</h3>
      <div className="image-wrapper">
        <img src="./ref1.png" alt="profile-picture of project A" className="ref1" />
        <img src="./ref2.png" alt="profile-picture of project B" className="ref2" />
        <img src="./ref3.png" alt="profile-picture of project C" className="ref3"/>
      </div>
      <h1>Bio</h1>
      <p>Xing is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.</p>      
   </section>   
  )
 }