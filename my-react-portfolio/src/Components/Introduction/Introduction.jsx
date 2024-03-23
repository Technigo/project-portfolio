import Arrow from './arrow-icon.png'
import './introduction.css'
export const Introduction = () => {
  return (
    <div className="introSection">
      <div className="introContainer">
        <div className="image"></div>
        <h2>Hi, I&apos;m Vittoria Matteoli</h2>
        <h1>Frontend Developer</h1>
        <p>write some text </p>
        <button>
          <img src={Arrow} alt="scroll-down-button" />
        </button>
      </div>
    </div>
  )
}
