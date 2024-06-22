import { Image } from "./Image";

export const Introduction = () => {
  const arrow = "../assets/Arrow.svg";
  const copy = "Frontend Developer with a background in Graphic design, UX/UI, Art Direction and with experience leading agile development projects as a scrum master. Passionate about creating web applications that not only looks good, but also are user-friendly and accessible. Always eager to learn new technologies and improve her skills."
  return (
    <>
      <div className="mobile">
        <Image />
        <div className="title">
          <h1>Hi, I&apos;m Kathinka Sewell</h1>
          <h2>Frontend Developer</h2>
        </div>
        <p className="intro">
          {copy}
        </p>
      </div>
      <section className="wide">
        <h1>Hi, I&apos;m Kathinka Sewell</h1>
        <h2>Frontend Developer</h2>
        <div className="image-intro-container">
          <div className="wide-img">
            <Image />
          </div>
          <p className="intro">
            {copy}
          </p>
        </div>
      </section>
      <img className="arrow" src={arrow} alt="arrow" />
    </>
  )
}