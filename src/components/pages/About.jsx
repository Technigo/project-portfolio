import myImage from "/src/assets/me.png"
import arrow from "/src/assets/arrow.png"
import "./about.css"

export default function About() {
  const handleArrowClick = () => {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: "smooth",
    })
  }
  return (
    <div className="page">
      <div className="page-intro">
        <img
          className="profile-image"
          src={myImage}
          alt="Portrait of Josephine Oderland"
        />
        <div className="name-dev">
          <h6>Hi, I&apos;m Josephine Oderland</h6>
          <h2>Web developer</h2>
        </div>
        <div className="about-me-info">
          <p style={{ color: "black" }}>
            Josephine is a dedicated web developer known for her passion for
            learning and her adept problem-solving skills. She excels in
            creating intuitive and user-friendly applications, and she thrives
            on tackling complex challenges with confidence. Her commitment to
            excellence makes her an invaluable addition to any project, and she
            stands out as a rising talent in the field of technology.
          </p>
        </div>

        <img
          className="arrow-image"
          src={arrow}
          alt="arrow pointing down"
          onClick={handleArrowClick}
        />
      </div>
    </div>
  )
}
