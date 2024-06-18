import "../styling/Heading.css"
import myImage from "/image.me.png"
import { TbArrowNarrowDown } from "react-icons/tb"

export const Introduction = () => {
	return (
		<>
			<section className="introduction">
				<div className="intro-container">
					<div className="intro-heading">
						<h2>Hi, I&apos;m Sofie Ferrari Strahl</h2>
						<h1>Frontend Developer</h1>
					</div>

					<div className="intro-image">
						<img src={myImage} alt="Picture of Sofie"></img>
						<p>
							With a background in speech pathology, I combine my passion for
							learning new skills and technology with great communication,
							problem-solving abilities, and an analytical mind with a keen
							attention to detail.
						</p>
					</div>
					<div className="arrow">
						<TbArrowNarrowDown />
					</div>
				</div>
			</section>
		</>
	)
}
