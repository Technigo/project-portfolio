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
    <><div className="top">
      <div className="content">
        <img src={portrait} alt="JingPortrait" className="mobilePortrait" />

        <div className="frame">
          <p className="topGreeting">Hi, I'm Jing Huang</p>
          <p className="titleBlue">Frontend Developer + Designer</p>
        </div>

        <div className="topDetails">
          <img src={portrait} alt="JingPortrait" className="topPortrait" />
          <p className="selfIntro">Jing is a front-end developer with a background in architecture, renowned for her strong design and coding abilities. Her career is built on delivering innovative solutions that seamlessly merge aesthetics with functionality. Drawing from the design experience, Jing approach each project with a keen eye for detail and a deep understanding of structure and flow.
          </p>
        </div>

      </p>
    </div><img src={arrow} alt="arrow" className="arrow" onClick={ScrollDown} /></>
)
