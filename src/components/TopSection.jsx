import "./TopSection.css"
import portrait from "/assets/portrait.jpg";
import arrow from "/assets/Arrow.svg"

export const TopSection =()=> {
  const ScrollDown =()=>{
    window.scrollTo({
      top: window.scrollY + 980,
      behavior: 'smooth'
    });
  }

  return (
    <div className="top">
      <div className="content">
        <img src={portrait} alt="JingPortrait" className="mobilePortrait"/>
        <div className="frame">
          <p className="topGreeting">Hi, I'm Jing Huang</p>
          <p className="titleBlue">Frontend Developer + Designer</p>
        </div>
        <div className="topDetails">
          <img src={portrait} alt="JingPortrait" className="portrait" />
          <p className="selfIntro">Jing is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.</p>
        </div>
        <img src={arrow} alt="arrow" className="arrow" onClick={ScrollDown}/>
      </div>
    </div>
  )
}
