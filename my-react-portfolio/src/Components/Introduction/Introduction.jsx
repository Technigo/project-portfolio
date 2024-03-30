import Arrow from './arrow-icon.svg'

import './introduction.css'
export const Introduction = () => {
  return (
    <div className="introSection">
      <div className="introContainer">
        <img
          className="profilePic"
          src="profile-picture.png"
          alt="profile-image"
        />
        <div className="headerContainer">
          <h2>Hi, I&apos;m Vittoria Matteoli</h2>
          <h1>Frontend Developer</h1>
        </div>

        <p className="BioMobDev">
          I&apos;m a Frontend Developer with recent experience in freelancing
          who is excited about learning new things and skills | Digging into
          JavaScript and React{' '}
        </p>
        <div className="BioContainerBigDev">
          <img
            className="profilePicMob"
            src="profile-picture.png"
            alt="profile-image"
          />
          <p>
            I&apos;m a Frontend Developer with recent experience in freelancing
            who is excited about learning new things and skills | Digging into
            JavaScript and React{' '}
          </p>
        </div>
        <button>
          <img src={Arrow} alt="scroll-down-button" className="arrowDown" />
        </button>
      </div>
    </div>
  )
}
