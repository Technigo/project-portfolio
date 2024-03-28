import Arrow from './arrow-icon.svg'
import ArrowDown from './arrow-down.svg'
import './introduction.css'
import { useState, useEffect } from 'react'
export const Introduction = () => {
  const [isdown, setIsDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled
      if (window.scrollY > 0) {
        setIsDown(true) // Set isdown state to true when scrolled
      } else {
        setIsDown(false) // Set isdown state to false when at the top
      }
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll)

    // Clean up by removing the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="introSection">
      <div className="introContainer">
        <div className="image"></div>
        <h2>Hi, I&apos;m Vittoria Matteoli</h2>
        <h1>Frontend Developer</h1>
        <p>
          I&apos;m a Frontend Developer with recent experience in freelancing
          who is excited about learning new things and skills | Digging into
          JavaScript and React{' '}
        </p>
        <button>
          <img
            src={isdown ? ArrowDown : Arrow}
            alt="scroll-down-button"
            className={isdown ? 'arrowDown' : ''}
          />
        </button>
      </div>
    </div>
  )
}
