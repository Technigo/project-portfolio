import animation from '../assets/Animation-up.json'
import Lottie from 'lottie-react'

export const ToTopButton = () => {

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  return (
    <div className="to-top">
      <a onClick={handleScrollUp}>
        <Lottie animationData={animation} style={{ width: 80, height: 80 }} />
      </a>
    </div>
  )
}
